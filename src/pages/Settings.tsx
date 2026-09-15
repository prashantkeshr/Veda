import { useState, useRef } from 'react';
import { useSEO } from '../hooks/useSEO';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { useTheme } from '../app/providers/ThemeProvider';
import { useUserData } from '../app/providers/UserDataProvider';
import { assessmentsDB } from '../db/assessments';
import { flashcardsDB } from '../db/flashcards';
import { notesDB } from '../db/notes';
import { studySessionsDB } from '../db/studySessions';
import { plannerDB } from '../db/planner';
import { getAllProgress, getAllBookmarks, getAllQuizAttempts } from '../db';
import { topicRepo } from '../repositories';
import {
  Settings2, Sun, Moon, Monitor, Download, Smartphone,
  Database, Trash2, CheckCircle, AlertTriangle, Info,
  Upload, FileText, BookOpen, X, Share2, ChevronDown,
} from 'lucide-react';
import { cn } from '../utils/cn';

// ── Section / Row wrappers ────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 overflow-hidden">
      <div className="px-5 py-3.5 border-b border-stone-100 dark:border-stone-800">
        <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wide">{title}</h2>
      </div>
      <div className="divide-y divide-stone-100 dark:divide-stone-800">
        {children}
      </div>
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center justify-between gap-4 px-5 py-4">{children}</div>;
}

function RowLabel({ title, description }: { title: string; description?: string }) {
  return (
    <div>
      <p className="text-sm font-medium text-stone-900 dark:text-stone-100">{title}</p>
      {description && <p className="text-xs text-stone-400 mt-0.5">{description}</p>}
    </div>
  );
}

// ── Confirm: clear all data ───────────────────────────────────────────────

function ConfirmDialog({ message, onConfirm, onCancel }: {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white dark:bg-stone-900 rounded-xl shadow-xl border border-stone-200 dark:border-stone-700 max-w-sm w-full p-6 space-y-4">
        <div className="flex items-start gap-3">
          <AlertTriangle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-stone-700 dark:text-stone-300">{message}</p>
        </div>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm rounded-lg border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors font-medium"
          >
            Delete Everything
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Backup preview + restore modal ────────────────────────────────────────

type BackupData = {
  version:        string;
  exportedAt:     string;
  platform:       string;
  progress:       unknown[];
  bookmarks:      unknown[];
  quizAttempts:   unknown[];
  quizSessions:   unknown[];
  flashcards?:    unknown[];
  notes?:         unknown[];
  studySessions?: unknown[];
  plannerDays?:   unknown[];
  preferences?:   Record<string, string>;
};

function RestoreModal({ backup, onClose, onDone }: {
  backup: BackupData;
  onClose: () => void;
  onDone:  () => void;
}) {
  const [mode, setMode]     = useState<'merge' | 'replace'>('merge');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errMsg, setErrMsg] = useState('');

  const counts = [
    { label: 'Topic progress',   n: backup.progress?.length       ?? 0 },
    { label: 'Bookmarks',        n: backup.bookmarks?.length      ?? 0 },
    { label: 'Quiz attempts',    n: backup.quizAttempts?.length   ?? 0 },
    { label: 'Quiz sessions',    n: backup.quizSessions?.length   ?? 0 },
    { label: 'Flashcard states', n: backup.flashcards?.length     ?? 0 },
    { label: 'Notes',            n: backup.notes?.length          ?? 0 },
    { label: 'Study sessions',   n: backup.studySessions?.length  ?? 0 },
    { label: 'Planner days',     n: backup.plannerDays?.length    ?? 0 },
  ].filter(c => c.n > 0);

  async function restoreDB(
    dbName: string,
    storeName: string,
    records: unknown[],
    replaceAll: boolean,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(dbName);
      req.onsuccess = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(storeName)) { db.close(); resolve(); return; }
        const t = db.transaction(storeName, 'readwrite');
        const store = t.objectStore(storeName);
        if (replaceAll) store.clear();
        for (const r of records) store.put(r);
        t.oncomplete = () => { db.close(); resolve(); };
        t.onerror    = () => { db.close(); reject(t.error); };
      };
      req.onerror = () => reject(req.error);
    });
  }

  async function doRestore() {
    setStatus('loading');
    try {
      const rep = mode === 'replace';

      await restoreDB('veda-user-data', 'progress',      backup.progress      ?? [], rep);
      await restoreDB('veda-user-data', 'bookmarks',     backup.bookmarks     ?? [], rep);
      await restoreDB('veda-user-data', 'quizAttempts',  backup.quizAttempts  ?? [], rep);
      await restoreDB('veda-assessments', 'sessions',    backup.quizSessions  ?? [], rep);
      await restoreDB('veda-flashcards', 'cards',        backup.flashcards    ?? [], rep);
      await restoreDB('veda-notes', 'notes',             backup.notes         ?? [], rep);
      await restoreDB('veda-study-sessions', 'sessions', backup.studySessions ?? [], rep);
      await restoreDB('veda-planner', 'plans',           backup.plannerDays   ?? [], rep);

      if (backup.preferences?.targetExam) {
        try { localStorage.setItem('veda-target-exam', backup.preferences.targetExam); } catch {}
      }

      setStatus('success');
      setTimeout(() => { onDone(); window.location.reload(); }, 1200);
    } catch (e) {
      setErrMsg(e instanceof Error ? e.message : 'Unknown error');
      setStatus('error');
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-stone-900 rounded-xl shadow-2xl border border-stone-200 dark:border-stone-700 max-w-md w-full overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100 dark:border-stone-800">
          <h3 className="font-semibold text-stone-900 dark:text-stone-100 text-sm">Restore from Backup</h3>
          <button onClick={onClose} className="p-1 rounded text-stone-400 hover:text-stone-600 dark:hover:text-stone-300">
            <X size={16} />
          </button>
        </div>

        <div className="px-5 py-4 space-y-4">
          {/* Backup info */}
          <div className="text-xs text-stone-500 dark:text-stone-400 space-y-0.5">
            <div><span className="text-stone-400">Exported:</span> {new Date(backup.exportedAt).toLocaleString()}</div>
            <div><span className="text-stone-400">Schema:</span> v{backup.version}</div>
          </div>

          {/* Counts */}
          {counts.length > 0 ? (
            <div className="grid grid-cols-2 gap-1.5">
              {counts.map(c => (
                <div key={c.label} className="flex items-center justify-between px-3 py-2 rounded-lg bg-stone-50 dark:bg-stone-800">
                  <span className="text-xs text-stone-600 dark:text-stone-400">{c.label}</span>
                  <span className="text-xs font-semibold text-stone-900 dark:text-stone-100 tabular-nums">{c.n}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-stone-500">Backup appears empty.</p>
          )}

          {/* Mode */}
          <div className="space-y-2">
            <p className="text-xs font-medium text-stone-700 dark:text-stone-300">Restore mode</p>
            {(['merge', 'replace'] as const).map(m => (
              <label key={m} className={cn(
                'flex items-start gap-3 px-4 py-3 rounded-lg border-2 cursor-pointer transition-colors',
                mode === m
                  ? 'border-veda-500 bg-veda-50 dark:bg-veda-900/20'
                  : 'border-stone-200 dark:border-stone-700 hover:border-stone-300 dark:hover:border-stone-600',
              )}>
                <input
                  type="radio"
                  name="restore-mode"
                  className="mt-0.5 accent-veda-600"
                  checked={mode === m}
                  onChange={() => setMode(m)}
                />
                <div>
                  <div className="text-sm font-medium text-stone-800 dark:text-stone-200">
                    {m === 'merge' ? 'Merge' : 'Replace all'}
                  </div>
                  <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                    {m === 'merge'
                      ? 'Adds backup data on top of existing data — safe, nothing is lost'
                      : 'Clears current data first, then restores backup — full clean restore'}
                  </div>
                </div>
              </label>
            ))}
          </div>

          {status === 'error' && (
            <div className="flex items-start gap-2 px-3 py-2.5 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs">
              <AlertTriangle size={13} className="mt-0.5 flex-shrink-0" />
              <span>{errMsg || 'Restore failed. Check the file and try again.'}</span>
            </div>
          )}
        </div>

        <div className="px-5 pb-5 flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-lg border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800"
          >
            Cancel
          </button>
          <button
            onClick={doRestore}
            disabled={status === 'loading' || status === 'success'}
            className={cn(
              'flex items-center gap-1.5 px-5 py-2 text-sm rounded-lg font-medium transition-colors',
              status === 'success'
                ? 'bg-emerald-600 text-white'
                : status === 'loading'
                ? 'bg-veda-400 text-white cursor-not-allowed'
                : 'bg-veda-600 hover:bg-veda-700 text-white',
            )}
          >
            {status === 'success'  ? <><CheckCircle size={14}/> Restored</> :
             status === 'loading'  ? 'Restoring…'                           :
             mode === 'replace'    ? 'Replace & Restore'                    : 'Merge & Restore'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── How-to guide (collapsible) ────────────────────────────────────────────

function HowToGuide() {
  const [open, setOpen] = useState(false);

  const steps = [
    {
      num: '1',
      title: 'Take a backup',
      body: (
        <>
          Click <strong>Backup</strong> — a file named{' '}
          <code className="px-1 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-[11px]">
            veda-backup-YYYY-MM-DD.json
          </code>{' '}
          is saved to your Downloads folder. It contains all your progress, notes,
          flashcards, planner entries, quiz history, and target exam preference.
        </>
      ),
    },
    {
      num: '2',
      title: 'Share or transfer the file',
      body: (
        <>
          <span className="font-medium">On mobile</span> — tap <strong>Share</strong> to
          send the file instantly via WhatsApp, email, Google Drive, AirDrop, Nearby
          Share, or any app your OS offers.
          <br />
          <span className="font-medium">On desktop</span> — upload the file to Google Drive,
          Dropbox, OneDrive, or email it to yourself. The file is plain JSON — safe to
          keep anywhere, no sensitive personal data.
        </>
      ),
    },
    {
      num: '3',
      title: 'Restore on another device',
      body: (
        <>
          Open VEDA on the new device, go to <strong>Settings → Backup &amp; Restore →
          Restore</strong>, and pick the backup file. Choose:
          <ul className="mt-1.5 space-y-1 list-none">
            <li>
              <span className="font-medium text-veda-700 dark:text-veda-400">Merge</span>
              {' '}— adds backup data on top of existing data. Safe for a first restore.
            </li>
            <li>
              <span className="font-medium text-amber-600 dark:text-amber-400">Replace all</span>
              {' '}— wipes current data, then restores. Use this for a full device switch.
            </li>
          </ul>
          The page reloads automatically once the restore is complete.
        </>
      ),
    },
  ];

  return (
    <div className="border-t border-stone-100 dark:border-stone-800">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-2">
          <Info size={14} className="text-veda-600 dark:text-veda-400 flex-shrink-0" />
          <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
            How to sync your data across devices
          </span>
        </div>
        <ChevronDown
          size={15}
          className={cn(
            'text-stone-400 transition-transform duration-200 flex-shrink-0',
            open && 'rotate-180',
          )}
        />
      </button>

      {open && (
        <div className="px-5 pb-5 space-y-4">
          {steps.map(s => (
            <div key={s.num} className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-veda-100 dark:bg-veda-900/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-veda-700 dark:text-veda-400">{s.num}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-800 dark:text-stone-200 mb-1">
                  {s.title}
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                  {s.body}
                </p>
              </div>
            </div>
          ))}

          <div className="flex items-start gap-2 px-3 py-2.5 rounded-lg bg-amber-50 dark:bg-amber-900/10 text-amber-700 dark:text-amber-400 text-xs">
            <AlertTriangle size={13} className="mt-0.5 flex-shrink-0" />
            Back up before clearing data or switching devices — VEDA stores everything
            locally and there is no automatic cloud sync.
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Settings() {
  useSEO('Settings', 'App preferences, data management, and install options for VEDA.');
  const { theme, setTheme }    = useTheme();
  const { canInstall, installed, install } = usePWAInstall();
  const { quizAttempts, bookmarks, progressMap } = useUserData();

  const [backupStatus,   setBackupStatus]   = useState<Status>('idle');
  const [shareStatus,    setShareStatus]    = useState<Status>('idle');
  const [clearStatus,    setClearStatus]    = useState<Status>('idle');
  const [notesStatus,    setNotesStatus]    = useState<Status>('idle');
  const [formulaStatus,  setFormulaStatus]  = useState<Status>('idle');
  const [showConfirm,    setShowConfirm]    = useState(false);
  const [restoreBackup,  setRestoreBackup]  = useState<BackupData | null>(null);
  const [restoreError,   setRestoreError]   = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const canWebShare = typeof navigator !== 'undefined'
    && typeof navigator.share === 'function'
    && typeof navigator.canShare === 'function';

  const themes = [
    { key: 'light'  as const, icon: Sun,     label: 'Light'  },
    { key: 'system' as const, icon: Monitor, label: 'System' },
    { key: 'dark'   as const, icon: Moon,    label: 'Dark'   },
  ];

  // ── Shared backup builder ─────────────────────────────────────────────

  async function buildBackupFile(): Promise<{ file: File; filename: string }> {
    const [progress, bmarks, attempts, sessions, cards, notes, study, plans] = await Promise.all([
      getAllProgress(),
      getAllBookmarks(),
      getAllQuizAttempts(),
      assessmentsDB.getAllSessions(),
      flashcardsDB.getAll(),
      notesDB.getAll(),
      studySessionsDB.getAll(),
      plannerDB.getAll(),
    ]);
    let targetExam = '';
    try { targetExam = localStorage.getItem('veda-target-exam') ?? ''; } catch {}
    const data = {
      exportedAt:    new Date().toISOString(),
      version:       '2.0',
      platform:      'VEDA — Vital Education & Data Archive',
      progress,
      bookmarks:     bmarks,
      quizAttempts:  attempts,
      quizSessions:  sessions,
      flashcards:    cards,
      notes,
      studySessions: study,
      plannerDays:   plans,
      preferences:   { targetExam },
    };
    const filename = `veda-backup-${new Date().toISOString().slice(0, 10)}.json`;
    const file = new File([JSON.stringify(data, null, 2)], filename, { type: 'application/json' });
    return { file, filename };
  }

  // ── Full backup download ──────────────────────────────────────────────

  async function exportFullBackup() {
    setBackupStatus('loading');
    try {
      const { file, filename } = await buildBackupFile();
      const url = URL.createObjectURL(file);
      const a   = document.createElement('a');
      a.href     = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setBackupStatus('success');
      setTimeout(() => setBackupStatus('idle'), 3000);
    } catch {
      setBackupStatus('error');
      setTimeout(() => setBackupStatus('idle'), 3000);
    }
  }

  // ── Share backup via Web Share API ────────────────────────────────────

  async function shareBackup() {
    setShareStatus('loading');
    try {
      const { file, filename } = await buildBackupFile();

      if (canWebShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'VEDA Backup',
          text:  `My VEDA learning backup — ${filename}`,
        });
        setShareStatus('success');
      } else {
        // Fallback: download
        const url = URL.createObjectURL(file);
        const a   = document.createElement('a');
        a.href     = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setShareStatus('success');
      }
      setTimeout(() => setShareStatus('idle'), 3000);
    } catch (e) {
      // User cancelled the share sheet — not an error
      if (e instanceof Error && e.name === 'AbortError') {
        setShareStatus('idle');
      } else {
        setShareStatus('error');
        setTimeout(() => setShareStatus('idle'), 3000);
      }
    }
  }

  // ── Import backup ──────────────────────────────────────────────────────

  function openFilePicker() {
    setRestoreError('');
    fileInputRef.current?.click();
  }

  function onFileSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!e.target) return;
    e.target.value = '';
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result as string) as BackupData;
        if (!parsed.version || !parsed.exportedAt) throw new Error('Not a valid VEDA backup file.');
        setRestoreBackup(parsed);
      } catch (err) {
        setRestoreError(err instanceof Error ? err.message : 'Could not parse backup file.');
      }
    };
    reader.readAsText(file);
  }

  // ── Export notes as plain text ─────────────────────────────────────────

  async function exportNotes() {
    setNotesStatus('loading');
    try {
      const notes = await notesDB.getAll();
      if (notes.length === 0) { setNotesStatus('idle'); return; }

      const lines: string[] = ['VEDA — Study Notes Export', `Exported: ${new Date().toLocaleString()}`, ''];
      for (const note of notes) {
        lines.push(`# ${note.title || '(Untitled)'}`);
        if (note.tags?.length) lines.push(`Tags: ${note.tags.join(', ')}`);
        lines.push(`Updated: ${new Date(note.updatedAt).toLocaleString()}`);
        lines.push('');
        lines.push(note.body ?? '');
        lines.push('', '---', '');
      }

      const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href     = url;
      a.download = `veda-notes-${new Date().toISOString().slice(0, 10)}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setNotesStatus('success');
      setTimeout(() => setNotesStatus('idle'), 3000);
    } catch {
      setNotesStatus('error');
      setTimeout(() => setNotesStatus('idle'), 3000);
    }
  }

  // ── Export formula sheet as printable HTML ─────────────────────────────

  function exportFormulaSheet() {
    setFormulaStatus('loading');
    try {
      const topics  = topicRepo.getAll();
      const rows    = topics
        .filter(t => t.formulaHighlights && t.formulaHighlights.length > 0)
        .map(t => ({
          title:    t.title,
          formulas: t.formulaHighlights!,
        }));

      if (rows.length === 0) { setFormulaStatus('idle'); return; }

      const body = rows.map(r => `
        <section>
          <h2>${escHtml(r.title)}</h2>
          <ul>${r.formulas.map(f => `<li><code>${escHtml(f)}</code></li>`).join('')}</ul>
        </section>`).join('');

      const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>VEDA Formula Sheet</title>
<style>
  *{box-sizing:border-box}
  body{font-family:system-ui,sans-serif;max-width:800px;margin:0 auto;padding:24px;color:#111}
  h1{font-size:1.5rem;margin-bottom:4px}
  .meta{color:#666;font-size:.85rem;margin-bottom:24px}
  h2{font-size:1rem;font-weight:600;margin:20px 0 6px;border-bottom:1px solid #ddd;padding-bottom:4px}
  ul{list-style:none;margin:0;padding:0;display:grid;gap:6px}
  li{background:#f5f5f5;border-radius:6px;padding:8px 12px}
  code{font-family:'Courier New',monospace;font-size:.9rem}
  @media print{body{padding:12px}section{break-inside:avoid}}
</style>
</head>
<body>
<h1>VEDA Formula Sheet</h1>
<div class="meta">Exported ${new Date().toLocaleString()} &nbsp;·&nbsp; ${rows.length} topics &nbsp;·&nbsp; ${rows.reduce((s,r)=>s+r.formulas.length,0)} formulas</div>
${body}
<script>window.print();<\/script>
</body></html>`;

      const win = window.open('', '_blank');
      if (win) { win.document.write(html); win.document.close(); }
      setFormulaStatus('success');
      setTimeout(() => setFormulaStatus('idle'), 3000);
    } catch {
      setFormulaStatus('error');
      setTimeout(() => setFormulaStatus('idle'), 3000);
    }
  }

  function escHtml(s: string) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  // ── Clear all data ─────────────────────────────────────────────────────

  async function clearAllData() {
    setShowConfirm(false);
    setClearStatus('loading');
    try {
      const databases = ['veda-user-data', 'veda-studio', 'veda-assessments', 'veda-flashcards', 'veda-notes', 'veda-study-sessions', 'veda-planner'];
      await Promise.all(databases.map(name =>
        new Promise<void>((resolve, reject) => {
          const req = indexedDB.deleteDatabase(name);
          req.onsuccess  = () => resolve();
          req.onerror    = () => reject(req.error);
          req.onblocked  = () => resolve();
        })
      ));
      const keysToRemove = Object.keys(localStorage).filter(k => k.startsWith('veda-'));
      keysToRemove.forEach(k => { try { localStorage.removeItem(k); } catch {} });
      setClearStatus('success');
      setTimeout(() => { setClearStatus('idle'); window.location.reload(); }, 1500);
    } catch {
      setClearStatus('error');
      setTimeout(() => setClearStatus('idle'), 3000);
    }
  }

  // ── Stats ──────────────────────────────────────────────────────────────

  const totalTopics  = Object.keys(progressMap).length;
  const completed    = Object.values(progressMap).filter(s => s === 'completed').length;

  return (
    <div className="max-w-2xl mx-auto space-y-5 pb-8">
      {showConfirm && (
        <ConfirmDialog
          message="This will permanently delete all your progress, bookmarks, quiz history, notes, flashcards, planner, and study session data. This cannot be undone."
          onConfirm={clearAllData}
          onCancel={() => setShowConfirm(false)}
        />
      )}

      {restoreBackup && (
        <RestoreModal
          backup={restoreBackup}
          onClose={() => setRestoreBackup(null)}
          onDone={() => setRestoreBackup(null)}
        />
      )}

      {/* Hidden file input for restore */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".json,application/json"
        className="hidden"
        onChange={onFileSelected}
      />

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-stone-700 flex items-center justify-center">
          <Settings2 size={20} className="text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Settings</h1>
          <p className="text-sm text-stone-500 dark:text-stone-400">Preferences and data management</p>
        </div>
      </div>

      {/* Appearance */}
      <Section title="Appearance">
        <Row>
          <RowLabel title="Theme" description="Controls the colour scheme across the app" />
          <div className="flex items-center bg-stone-100 dark:bg-stone-800 rounded-lg p-1 gap-0.5">
            {themes.map(({ key, icon: Icon, label }) => (
              <button
                key={key}
                onClick={() => setTheme(key)}
                aria-label={`${label} theme`}
                title={label}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors',
                  theme === key
                    ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm'
                    : 'text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300'
                )}
              >
                <Icon size={13} />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>
        </Row>
      </Section>

      {/* Install */}
      <Section title="Install App">
        <Row>
          <RowLabel
            title="Add to Home Screen"
            description={installed
              ? 'VEDA is installed — enjoy offline access and faster loading'
              : 'Install VEDA as an app for offline access and a native-like experience'}
          />
          {installed ? (
            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-sm font-medium flex-shrink-0">
              <CheckCircle size={15} />
              Installed
            </div>
          ) : canInstall ? (
            <button
              onClick={install}
              className="flex items-center gap-1.5 px-4 py-2 bg-veda-700 text-white rounded-lg text-sm font-medium hover:bg-veda-800 transition-colors flex-shrink-0"
            >
              <Download size={14} />
              Install
            </button>
          ) : (
            <div className="flex items-center gap-1.5 text-stone-400 text-xs text-right flex-shrink-0 max-w-[160px]">
              <Smartphone size={14} className="flex-shrink-0" />
              Use browser menu to install
            </div>
          )}
        </Row>
      </Section>

      {/* Backup & Restore */}
      <Section title="Backup & Restore">
        <Row>
          <RowLabel title="Storage summary" description="All data is stored locally in your browser (IndexedDB)" />
          <div className="text-right flex-shrink-0">
            <div className="text-sm font-semibold text-stone-900 dark:text-stone-100 tabular-nums">
              {completed}/{totalTopics} topics · {quizAttempts.length} quizzes · {bookmarks.length} bookmarks
            </div>
            <div className="text-xs text-stone-400 mt-0.5">on this device</div>
          </div>
        </Row>

        <Row>
          <RowLabel
            title="Full backup"
            description="Download or share all your data as a single JSON file — progress, notes, flashcards, planner, quiz history, and preferences"
          />
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Share button — shown when Web Share API supports files, else always shown as fallback */}
            <button
              onClick={shareBackup}
              disabled={shareStatus === 'loading'}
              title={canWebShare ? 'Share via your device\'s share sheet' : 'Share (downloads file)'}
              className={cn(
                'flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                shareStatus === 'success'
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400'
                  : shareStatus === 'error'
                  ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                  : 'bg-veda-50 dark:bg-veda-900/20 text-veda-700 dark:text-veda-400 hover:bg-veda-100 dark:hover:bg-veda-900/30',
              )}
            >
              {shareStatus === 'success' ? <><CheckCircle size={14} /> Shared</>
              : shareStatus === 'error'  ? <><AlertTriangle size={14} /> Failed</>
              : <><Share2 size={14} /> Share</>}
            </button>

            {/* Download button */}
            <button
              onClick={exportFullBackup}
              disabled={backupStatus === 'loading'}
              title="Download backup file"
              className={cn(
                'flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                backupStatus === 'success'
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400'
                  : backupStatus === 'error'
                  ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700',
              )}
            >
              {backupStatus === 'success' ? <><CheckCircle size={14} /> Saved</>
              : backupStatus === 'error'  ? <><AlertTriangle size={14} /> Failed</>
              : <><Database size={14} /> Backup</>}
            </button>
          </div>
        </Row>

        <Row>
          <RowLabel
            title="Restore from backup"
            description="Upload a VEDA backup file to resume where you left off on any device"
          />
          <div className="flex flex-col items-end gap-1 flex-shrink-0">
            <button
              onClick={openFilePicker}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-veda-50 dark:bg-veda-900/20 text-veda-700 dark:text-veda-400 hover:bg-veda-100 dark:hover:bg-veda-900/30"
            >
              <Upload size={14} />
              Restore
            </button>
            {restoreError && (
              <span className="text-xs text-red-500 max-w-[200px] text-right">{restoreError}</span>
            )}
          </div>
        </Row>

        <HowToGuide />
      </Section>

      {/* Export */}
      <Section title="Export">
        <Row>
          <RowLabel
            title="Study notes"
            description="Download all your notes as a plain-text file"
          />
          <button
            onClick={exportNotes}
            disabled={notesStatus === 'loading'}
            className={cn(
              'flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-shrink-0',
              notesStatus === 'success'
                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400'
                : notesStatus === 'error'
                ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            )}
          >
            {notesStatus === 'success' ? <><CheckCircle size={14} /> Saved</>
            : notesStatus === 'error'  ? <><AlertTriangle size={14} /> Failed</>
            : <><FileText size={14} /> Export notes</>}
          </button>
        </Row>

        <Row>
          <RowLabel
            title="Formula sheet"
            description="Open a printable HTML page with all topic formulas"
          />
          <button
            onClick={exportFormulaSheet}
            disabled={formulaStatus === 'loading'}
            className={cn(
              'flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-shrink-0',
              formulaStatus === 'success'
                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400'
                : formulaStatus === 'error'
                ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            )}
          >
            {formulaStatus === 'success' ? <><CheckCircle size={14} /> Opened</>
            : formulaStatus === 'error'  ? <><AlertTriangle size={14} /> Failed</>
            : <><BookOpen size={14} /> Print formulas</>}
          </button>
        </Row>
      </Section>

      {/* Danger zone */}
      <Section title="Danger Zone">
        <Row>
          <RowLabel
            title="Clear all data"
            description="Permanently delete all progress, notes, flashcards, planner, quiz history, and content studio data"
          />
          <button
            onClick={() => setShowConfirm(true)}
            disabled={clearStatus === 'loading'}
            className={cn(
              'flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors flex-shrink-0',
              clearStatus === 'success'
                ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400'
                : 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30'
            )}
          >
            {clearStatus === 'loading'
              ? 'Clearing…'
              : clearStatus === 'success'
              ? <><CheckCircle size={14} /> Cleared</>
              : <><Trash2 size={14} /> Clear data</>}
          </button>
        </Row>
      </Section>

      {/* About */}
      <Section title="About">
        {[
          { label: 'Platform',  value: 'VEDA — Vital Education & Data Archive' },
          { label: 'Organisation', value: 'Dhurta.Org · VEDA Association' },
          { label: 'Focus',     value: 'Engineering, Science & Competitive Exam Prep' },
          { label: 'Storage',   value: 'IndexedDB (local-only, no server)' },
          { label: 'Version',   value: 'Phase 22 Build' },
        ].map(({ label, value }) => (
          <Row key={label}>
            <span className="text-sm text-stone-500 dark:text-stone-400">{label}</span>
            <span className="text-sm text-stone-900 dark:text-stone-100 text-right max-w-[60%]">{value}</span>
          </Row>
        ))}
        <div className="px-5 py-4 flex items-start gap-2 text-xs text-stone-400">
          <Info size={13} className="flex-shrink-0 mt-0.5" />
          All data is stored on this device only. Use Full Backup regularly and Restore on any device to keep your progress in sync.
        </div>
      </Section>
    </div>
  );
}
