import { useState, useEffect } from 'react';
import {
  UploadCloud, KeyRound, Eye, EyeOff, Send, CheckCircle2,
  XCircle, Loader2, RefreshCw, ExternalLink, AlertTriangle,
  ChevronDown, ChevronUp,
} from 'lucide-react';
import { subjectRepo, topicRepo, resourceRepo, examRepo, questionRepo, courseRepo, learningPathRepo } from '../../repositories';

// ── Constants ──────────────────────────────────────────────────────────

const OWNER  = 'prashantkeshr';
const REPO   = 'Veda';
const GH_API = 'https://api.github.com';

const PAT_KEY       = 'vk-pat';
const BRANCH_KEY    = 'vk-branch';
const LAST_PUB_KEY  = 'vk-last-publish';

// Draft key → repo-relative file path
const FILE_MAP = [
  { draftKey: 'vk-draft-subjects',       path: 'src/data/subjects.json',       label: 'Subjects',        repo: subjectRepo      },
  { draftKey: 'vk-draft-topics',         path: 'src/data/topics.json',         label: 'Topics',          repo: topicRepo        },
  { draftKey: 'vk-draft-resources',      path: 'src/data/resources.json',      label: 'Resources',       repo: resourceRepo     },
  { draftKey: 'vk-draft-exams',          path: 'src/data/exams.json',          label: 'Exams',           repo: examRepo         },
  { draftKey: 'vk-draft-questions',      path: 'src/data/questions.json',      label: 'Questions',       repo: questionRepo     },
  { draftKey: 'vk-draft-courses',        path: 'src/data/courses.json',        label: 'Courses',         repo: courseRepo       },
  { draftKey: 'vk-draft-learning-paths', path: 'src/data/learning-paths.json', label: 'Learning Paths',  repo: learningPathRepo },
] as const;

// ── Types ──────────────────────────────────────────────────────────────

type LogLevel = 'info' | 'ok' | 'error' | 'warn';
type LogEntry = { level: LogLevel; msg: string };
type FileStatus = 'pending' | 'uploading' | 'done' | 'error' | 'skipped';

interface FileRow {
  key: typeof FILE_MAP[number]['draftKey'];
  path: string;
  label: string;
  hasDraft: boolean;
  draftCount: number;
  repoCount: number;
  selected: boolean;
  status: FileStatus;
}

interface LastPublish {
  ts: string;
  commitUrl: string;
  sha: string;
}

// ── Helpers ────────────────────────────────────────────────────────────

function toBase64(str: string) {
  return btoa(unescape(encodeURIComponent(str)));
}

function fromBase64(b64: string) {
  return decodeURIComponent(escape(atob(b64.replace(/\s/g, ''))));
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
}

// ── Component ──────────────────────────────────────────────────────────

export function KendraPublish() {
  const [pat,         setPat]         = useState(() => { try { return localStorage.getItem(PAT_KEY) ?? ''; } catch { return ''; } });
  const [showPat,     setShowPat]     = useState(false);
  const [branch,      setBranch]      = useState(() => { try { return localStorage.getItem(BRANCH_KEY) ?? 'main'; } catch { return 'main'; } });
  const [commitMsg,   setCommitMsg]   = useState('');
  const [files,       setFiles]       = useState<FileRow[]>([]);
  const [running,     setRunning]     = useState(false);
  const [log,         setLog]         = useState<LogEntry[]>([]);
  const [lastPub,     setLastPub]     = useState<LastPublish | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [verifying,   setVerifying]   = useState(false);
  const [patOk,       setPatOk]       = useState<boolean | null>(null);

  // Build file rows
  useEffect(() => {
    const rows: FileRow[] = FILE_MAP.map(f => {
      let draftData: unknown[] | null = null;
      try {
        const raw = localStorage.getItem(f.draftKey);
        if (raw) draftData = JSON.parse(raw) as unknown[];
      } catch { /* ignore */ }

      return {
        key:        f.draftKey,
        path:       f.path,
        label:      f.label,
        hasDraft:   draftData !== null,
        draftCount: draftData ? draftData.length : f.repo.count(),
        repoCount:  f.repo.count(),
        selected:   draftData !== null,
        status:     'pending',
      };
    });
    setFiles(rows);

    try {
      const raw = localStorage.getItem(LAST_PUB_KEY);
      if (raw) setLastPub(JSON.parse(raw) as LastPublish);
    } catch { /* ignore */ }
  }, []);

  // Persist PAT + branch
  function savePat(v: string) {
    setPat(v);
    try { localStorage.setItem(PAT_KEY, v); } catch { /* ignore */ }
    setPatOk(null);
  }
  function saveBranch(v: string) {
    setBranch(v);
    try { localStorage.setItem(BRANCH_KEY, v); } catch { /* ignore */ }
  }

  function toggleFile(key: string) {
    setFiles(p => p.map(f => f.key === key ? { ...f, selected: !f.selected } : f));
  }

  function addLog(level: LogLevel, msg: string) {
    setLog(p => [...p, { level, msg }]);
  }

  function setFileStatus(key: string, status: FileStatus) {
    setFiles(p => p.map(f => f.key === key ? { ...f, status } : f));
  }

  // ── Verify PAT ────────────────────────────────────────────────────

  async function verifyPat() {
    if (!pat.trim()) return;
    setVerifying(true);
    setPatOk(null);
    try {
      const res = await fetch(`${GH_API}/repos/${OWNER}/${REPO}`, {
        headers: { Authorization: `Bearer ${pat}`, 'X-GitHub-Api-Version': '2022-11-28' },
      });
      setPatOk(res.ok);
    } catch {
      setPatOk(false);
    } finally {
      setVerifying(false);
    }
  }

  // ── Publish ────────────────────────────────────────────────────────

  async function publish() {
    const selected = files.filter(f => f.selected);
    if (selected.length === 0) return;
    if (!pat.trim()) { addLog('error', 'No GitHub PAT configured'); return; }

    setRunning(true);
    setLog([]);
    setFiles(p => p.map(f => ({ ...f, status: f.selected ? 'pending' : 'skipped' })));

    const headers = {
      Authorization: `Bearer ${pat}`,
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
    };

    try {
      // 1. Get HEAD commit SHA
      addLog('info', `Fetching HEAD of ${branch}…`);
      const refRes = await fetch(`${GH_API}/repos/${OWNER}/${REPO}/git/ref/heads/${branch}`, { headers });
      if (!refRes.ok) throw new Error(`Branch fetch failed: ${refRes.status} ${await refRes.text()}`);
      const refData = await refRes.json() as { object: { sha: string } };
      const headSha = refData.object.sha;
      addLog('ok', `HEAD: ${headSha.slice(0, 7)}`);

      // 2. Get base tree SHA from commit
      addLog('info', 'Fetching base tree…');
      const commitRes = await fetch(`${GH_API}/repos/${OWNER}/${REPO}/git/commits/${headSha}`, { headers });
      if (!commitRes.ok) throw new Error(`Commit fetch failed: ${commitRes.status}`);
      const commitData = await commitRes.json() as { tree: { sha: string } };
      const baseTreeSha = commitData.tree.sha;

      // 3. Create blobs for each selected file
      const treeEntries: { path: string; mode: string; type: string; sha: string }[] = [];

      for (const f of selected) {
        setFileStatus(f.key, 'uploading');
        addLog('info', `Creating blob: ${f.path}`);

        // Get draft data or fall back to repo data
        let data: unknown;
        try {
          const raw = localStorage.getItem(f.key);
          data = raw ? JSON.parse(raw) : null;
        } catch { data = null; }
        if (!data) {
          const entry = FILE_MAP.find(m => m.draftKey === f.key);
          data = entry ? entry.repo.getAll() : [];
        }

        const content = toBase64(JSON.stringify(data, null, 2));
        const blobRes = await fetch(`${GH_API}/repos/${OWNER}/${REPO}/git/blobs`, {
          method: 'POST', headers,
          body: JSON.stringify({ content, encoding: 'base64' }),
        });
        if (!blobRes.ok) {
          const errText = await blobRes.text();
          addLog('error', `Blob failed for ${f.label}: ${blobRes.status} ${errText}`);
          setFileStatus(f.key, 'error');
          throw new Error(`Blob failed: ${f.path}`);
        }
        const blobData = await blobRes.json() as { sha: string };
        treeEntries.push({ path: f.path, mode: '100644', type: 'blob', sha: blobData.sha });
        addLog('ok', `  Blob created: ${f.label} (${blobData.sha.slice(0, 7)})`);
      }

      // 4. Create new tree
      addLog('info', 'Creating tree…');
      const treeRes = await fetch(`${GH_API}/repos/${OWNER}/${REPO}/git/trees`, {
        method: 'POST', headers,
        body: JSON.stringify({ base_tree: baseTreeSha, tree: treeEntries }),
      });
      if (!treeRes.ok) throw new Error(`Tree creation failed: ${treeRes.status}`);
      const treeData = await treeRes.json() as { sha: string };
      addLog('ok', `Tree: ${treeData.sha.slice(0, 7)}`);

      // 5. Create commit
      const msg = commitMsg.trim() || `content: update ${selected.map(f => f.label.toLowerCase()).join(', ')} via Kendra`;
      addLog('info', 'Creating commit…');
      const newCommitRes = await fetch(`${GH_API}/repos/${OWNER}/${REPO}/git/commits`, {
        method: 'POST', headers,
        body: JSON.stringify({ message: msg, tree: treeData.sha, parents: [headSha] }),
      });
      if (!newCommitRes.ok) throw new Error(`Commit creation failed: ${newCommitRes.status}`);
      const newCommit = await newCommitRes.json() as { sha: string; html_url: string };
      addLog('ok', `Commit: ${newCommit.sha.slice(0, 7)}`);

      // 6. Update branch ref
      addLog('info', `Updating refs/heads/${branch}…`);
      const updateRefRes = await fetch(`${GH_API}/repos/${OWNER}/${REPO}/git/refs/heads/${branch}`, {
        method: 'PATCH', headers,
        body: JSON.stringify({ sha: newCommit.sha, force: false }),
      });
      if (!updateRefRes.ok) throw new Error(`Ref update failed: ${updateRefRes.status}`);
      addLog('ok', `Branch ${branch} updated`);

      // Mark all selected as done
      selected.forEach(f => setFileStatus(f.key, 'done'));
      addLog('ok', `Published ${selected.length} file(s) — ${msg}`);

      // Store last publish
      const pub: LastPublish = {
        ts: new Date().toISOString(),
        commitUrl: `https://github.com/${OWNER}/${REPO}/commit/${newCommit.sha}`,
        sha: newCommit.sha,
      };
      setLastPub(pub);
      try { localStorage.setItem(LAST_PUB_KEY, JSON.stringify(pub)); } catch { /* ignore */ }

      // Clear committed drafts
      selected.forEach(f => {
        try { localStorage.removeItem(f.key); } catch { /* ignore */ }
      });
      setFiles(p => p.map(f =>
        f.selected ? { ...f, hasDraft: false, selected: false } : f
      ));
      setCommitMsg('');

    } catch (err) {
      addLog('error', String(err instanceof Error ? err.message : err));
    } finally {
      setRunning(false);
    }
  }

  // ── Computed state ─────────────────────────────────────────────────

  const selectedCount  = files.filter(f => f.selected).length;
  const pendingDrafts  = files.filter(f => f.hasDraft).length;
  const canPublish     = selectedCount > 0 && !!pat.trim() && !running;

  // ── Render ─────────────────────────────────────────────────────────

  return (
    <div className="max-w-2xl space-y-6">

      {/* Header */}
      <div>
        <h2 className="text-lg font-bold text-stone-100 flex items-center gap-2">
          <UploadCloud size={18} className="text-veda-400" />
          Publish to GitHub
        </h2>
        <p className="text-sm text-stone-500 mt-0.5">
          Push draft edits to <span className="text-stone-400 font-mono">{OWNER}/{REPO}</span> via the GitHub API
        </p>
      </div>

      {/* Last publish banner */}
      {lastPub && (
        <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-stone-900 border border-stone-800">
          <div>
            <p className="text-xs font-medium text-stone-300">Last published</p>
            <p className="text-[11px] text-stone-500 mt-0.5">{fmtDate(lastPub.ts)}</p>
          </div>
          <a href={lastPub.commitUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-veda-400 hover:text-veda-300 transition-colors font-mono">
            {lastPub.sha.slice(0, 7)} <ExternalLink size={11} />
          </a>
        </div>
      )}

      {/* Settings panel */}
      <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden">
        <button
          onClick={() => setSettingsOpen(o => !o)}
          className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-semibold text-stone-300 hover:bg-stone-800/50 transition-colors">
          <span className="flex items-center gap-2">
            <KeyRound size={14} className="text-veda-400" />
            GitHub Settings
            {patOk === true && <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-900/40 text-emerald-300 font-medium">Verified</span>}
            {patOk === false && <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-900/40 text-red-300 font-medium">Invalid</span>}
            {!pat && <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-900/40 text-amber-300 font-medium">PAT required</span>}
          </span>
          {settingsOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {settingsOpen && (
          <div className="px-4 pb-4 space-y-4 border-t border-stone-800">
            <div className="mt-4">
              <label className="block text-xs font-medium text-stone-400 mb-1.5">
                Personal Access Token <span className="text-stone-600">(stored in browser only)</span>
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type={showPat ? 'text' : 'password'}
                    value={pat}
                    onChange={e => savePat(e.target.value)}
                    placeholder="ghp_…"
                    className="w-full px-3 py-2 pr-9 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-veda-600 placeholder-stone-600"
                  />
                  <button onClick={() => setShowPat(s => !s)} tabIndex={-1}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-600 hover:text-stone-400 transition-colors">
                    {showPat ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
                <button onClick={verifyPat} disabled={!pat.trim() || verifying}
                  className="px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-300 text-sm hover:bg-stone-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-1.5 flex-shrink-0">
                  {verifying ? <Loader2 size={13} className="animate-spin" /> : <RefreshCw size={13} />}
                  Verify
                </button>
              </div>
              <p className="text-[11px] text-stone-600 mt-1.5">
                Needs <span className="font-mono">repo</span> scope. Never leaves your browser.
              </p>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-400 mb-1.5">Branch</label>
              <input type="text" value={branch}
                onChange={e => saveBranch(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-veda-600" />
            </div>
          </div>
        )}
      </div>

      {/* File selection */}
      <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3.5 border-b border-stone-800">
          <span className="text-sm font-semibold text-stone-300">Files to Publish</span>
          <span className="text-xs text-stone-600">
            {pendingDrafts} draft{pendingDrafts !== 1 ? 's' : ''} pending
          </span>
        </div>

        <div className="divide-y divide-stone-800/60">
          {files.map(f => (
            <label key={f.key}
              className={[
                'flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors',
                f.selected ? 'bg-veda-900/20' : 'hover:bg-stone-800/30',
              ].join(' ')}>
              <input type="checkbox" checked={f.selected} onChange={() => toggleFile(f.key)}
                className="accent-veda-500 flex-shrink-0 w-4 h-4" />

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-stone-200">{f.label}</span>
                  {f.hasDraft && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-900/40 text-amber-300 font-medium">draft</span>
                  )}
                </div>
                <p className="text-[11px] text-stone-600 font-mono mt-0.5">{f.path}</p>
              </div>

              <div className="text-right flex-shrink-0">
                {f.hasDraft ? (
                  <p className="text-xs text-stone-400 tabular-nums">
                    <span className="text-veda-300">{f.draftCount}</span>
                    <span className="text-stone-700"> / {f.repoCount} repo</span>
                  </p>
                ) : (
                  <p className="text-xs text-stone-600 tabular-nums">{f.repoCount} items</p>
                )}
                <FileStatusBadge status={f.status} />
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Commit message */}
      <div>
        <label className="block text-xs font-medium text-stone-400 mb-1.5">
          Commit Message <span className="text-stone-600">(optional — auto-generated if blank)</span>
        </label>
        <input type="text" value={commitMsg} onChange={e => setCommitMsg(e.target.value)}
          placeholder={`content: update ${files.filter(f => f.selected).map(f => f.label.toLowerCase()).join(', ') || 'data'} via Kendra`}
          className="w-full px-3 py-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600 placeholder-stone-700" />
      </div>

      {/* Publish button */}
      <button onClick={publish} disabled={!canPublish}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-veda-700 hover:bg-veda-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold transition-colors">
        {running
          ? <><Loader2 size={16} className="animate-spin" /> Publishing…</>
          : <><Send size={15} /> Publish {selectedCount > 0 ? selectedCount : ''} file{selectedCount !== 1 ? 's' : ''} to GitHub</>
        }
      </button>

      {!pat.trim() && (
        <div className="flex items-start gap-2 px-3 py-2.5 rounded-lg bg-amber-900/20 border border-amber-900/40">
          <AlertTriangle size={14} className="text-amber-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-300 leading-relaxed">
            Add your GitHub PAT in Settings above. The token only needs <span className="font-mono">repo</span> scope and never leaves your browser.
          </p>
        </div>
      )}

      {/* Publish log */}
      {log.length > 0 && (
        <div className="bg-stone-950 border border-stone-800 rounded-xl overflow-hidden">
          <div className="px-4 py-2.5 border-b border-stone-800">
            <span className="text-xs font-semibold text-stone-400">Publish Log</span>
          </div>
          <div className="px-4 py-3 space-y-1 max-h-56 overflow-y-auto font-mono">
            {log.map((entry, i) => (
              <div key={i} className={[
                'flex items-start gap-2 text-[11px] leading-relaxed',
                entry.level === 'ok'    ? 'text-emerald-400' :
                entry.level === 'error' ? 'text-red-400' :
                entry.level === 'warn'  ? 'text-amber-400' :
                                          'text-stone-500',
              ].join(' ')}>
                <span className="flex-shrink-0 mt-0.5">
                  {entry.level === 'ok'    ? '✓' :
                   entry.level === 'error' ? '✗' :
                   entry.level === 'warn'  ? '!' : '·'}
                </span>
                <span>{entry.msg}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── File status badge ──────────────────────────────────────────────────

function FileStatusBadge({ status }: { status: FileStatus }) {
  if (status === 'pending')   return null;
  if (status === 'skipped')   return <span className="text-[10px] text-stone-700 mt-0.5 block">skipped</span>;
  if (status === 'uploading') return <Loader2 size={12} className="animate-spin text-veda-400 mt-1" />;
  if (status === 'done')      return <CheckCircle2 size={12} className="text-emerald-400 mt-1" />;
  if (status === 'error')     return <XCircle size={12} className="text-red-400 mt-1" />;
  return null;
}

// suppress unused fromBase64 (kept for future download feature)
void fromBase64;
