import { useState, useEffect, useRef } from 'react';
import type {
  Resource, Exam, ResourceType, ContentStatus,
  VerificationStatus, ExamType, Difficulty,
} from '../../models';
import { resourceRepo, examRepo, subjectRepo } from '../../repositories';
import {
  Plus, Trash2, Save, RotateCcw, Upload,
  FileJson, X, CheckCircle2, AlertCircle,
} from 'lucide-react';

const DRAFT_R = 'vk-draft-resources';
const DRAFT_E = 'vk-draft-exams';

function toSlug(s: string) {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const RESOURCE_TYPES: ResourceType[] = [
  'pdf','doc','ppt','article','website','video','audio',
  'notes','question-paper','syllabus','practice-set','mock-test',
  'markdown','text','reference','notification',
];
const CONTENT_STATUSES: ContentStatus[] = [
  'draft','in-review','approved','published','needs-update','archived',
];
const VERIF_STATUSES: VerificationStatus[] = [
  'official','verified','trusted','community','unverified','needs-review','outdated',
];
const EXAM_TYPES: ExamType[] = [
  'entrance','competitive','board','university','professional','certification',
];
const DIFFICULTIES: Difficulty[] = ['beginner','intermediate','advanced','expert'];

const STATUS_COLOR: Record<ContentStatus, string> = {
  'draft':        'bg-stone-800 text-stone-400',
  'in-review':    'bg-blue-900/40 text-blue-300',
  'approved':     'bg-teal-900/40 text-teal-300',
  'published':    'bg-emerald-900/40 text-emerald-300',
  'needs-update': 'bg-amber-900/40 text-amber-300',
  'archived':     'bg-stone-800 text-stone-500',
};

// ── Import modal types ─────────────────────────────────────────────────

type ImportState = {
  filename: string;
  kind: 'resources' | 'exams';
  items: Resource[] | Exam[];
  mode: 'merge' | 'replace';
} | null;

// ── Main page ──────────────────────────────────────────────────────────

export function KendraResources() {
  const [tab,       setTab]       = useState<'resources' | 'exams'>('resources');
  const [resources, setResources] = useState<Resource[]>([]);
  const [exams,     setExams]     = useState<Exam[]>([]);
  const [selR,      setSelR]      = useState<string | null>(null);
  const [selE,      setSelE]      = useState<string | null>(null);
  const [search,    setSearch]    = useState('');
  const [isDirty,   setIsDirty]   = useState(false);
  const [flash,     setFlash]     = useState(false);
  const [hasDraft,  setHasDraft]  = useState(() => {
    try { return !!(localStorage.getItem(DRAFT_R)); } catch { return false; }
  });
  const [importState, setImportState] = useState<ImportState>(null);
  const [confirm,   setConfirm]   = useState<string | null>(null);
  const [dropActive, setDropActive] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const subjects = subjectRepo.getAll();

  // Load
  useEffect(() => {
    try {
      const dr = localStorage.getItem(DRAFT_R);
      const de = localStorage.getItem(DRAFT_E);
      setResources(dr ? (JSON.parse(dr) as Resource[]) : resourceRepo.getAll());
      setExams(de     ? (JSON.parse(de) as Exam[])     : examRepo.getAll());
      if (dr || de) setIsDirty(true);
    } catch {
      setResources(resourceRepo.getAll());
      setExams(examRepo.getAll());
    }
  }, []);

  // ── Persist ────────────────────────────────────────────────────────

  function saveDraft() {
    try {
      localStorage.setItem(DRAFT_R, JSON.stringify(resources));
      localStorage.setItem(DRAFT_E, JSON.stringify(exams));
      setIsDirty(false);
      setHasDraft(true);
      setFlash(true);
      setTimeout(() => setFlash(false), 2000);
    } catch { /* storage full */ }
  }

  function discardDraft() {
    localStorage.removeItem(DRAFT_R);
    localStorage.removeItem(DRAFT_E);
    setResources(resourceRepo.getAll());
    setExams(examRepo.getAll());
    setSelR(null); setSelE(null);
    setIsDirty(false); setHasDraft(false);
  }

  // ── Resource mutations ─────────────────────────────────────────────

  function patchResource(id: string, patch: Partial<Resource>) {
    setResources(p => p.map(r => r.id === id ? { ...r, ...patch, updatedAt: new Date().toISOString() } : r));
    setIsDirty(true);
  }

  function addResource() {
    const id = `veda-resource-${Date.now()}`;
    const r: Resource = {
      id, slug: 'new-resource', title: 'New Resource',
      description: '', type: 'article', language: 'en',
      tags: [], difficulty: 'beginner', academicLevel: 'undergraduate',
      verificationStatus: 'unverified', contentStatus: 'draft',
      subjectIds: [], topicIds: [], courseIds: [], branchIds: [],
      semesterIds: [], examIds: [], institutionIds: [],
      relatedResourceIds: [], prerequisiteIds: [],
      createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
    };
    setResources(p => [r, ...p]);
    setSelR(id);
    setTab('resources');
    setIsDirty(true);
  }

  function deleteResource(id: string) {
    setResources(p => p.filter(r => r.id !== id));
    if (selR === id) setSelR(null);
    setConfirm(null);
    setIsDirty(true);
  }

  // ── Exam mutations ─────────────────────────────────────────────────

  function patchExam(id: string, patch: Partial<Exam>) {
    setExams(p => p.map(e => e.id === id ? { ...e, ...patch, updatedAt: new Date().toISOString() } : e));
    setIsDirty(true);
  }

  function addExam() {
    const id = `veda-exam-${Date.now()}`;
    const e: Exam = {
      id, slug: 'new-exam', title: 'New Exam', shortTitle: 'NEW',
      description: '', type: 'competitive', conductingBody: '',
      subjectIds: [], topicIds: [], level: 'national',
      syllabus: [], tags: [], updatedAt: new Date().toISOString(),
    };
    setExams(p => [e, ...p]);
    setSelE(id);
    setTab('exams');
    setIsDirty(true);
  }

  function deleteExam(id: string) {
    setExams(p => p.filter(e => e.id !== id));
    if (selE === id) setSelE(null);
    setConfirm(null);
    setIsDirty(true);
  }

  // ── JSON Import ────────────────────────────────────────────────────

  function handleFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result as string);
        const arr = Array.isArray(parsed) ? parsed : [parsed];
        if (arr.length === 0) return;
        const first = arr[0] as Record<string, unknown>;
        const kind: 'resources' | 'exams' =
          'contentStatus' in first ? 'resources' : 'exams';
        setImportState({ filename: file.name, kind, items: arr as Resource[] | Exam[], mode: 'merge' });
      } catch { /* invalid JSON — ignore silently */ }
    };
    reader.readAsText(file);
  }

  function applyImport() {
    if (!importState) return;
    const { kind, items, mode } = importState;
    if (kind === 'resources') {
      const incoming = items as Resource[];
      setResources(prev => {
        if (mode === 'replace') return incoming;
        const map = new Map(prev.map(r => [r.id, r]));
        incoming.forEach(r => map.set(r.id, r));
        return Array.from(map.values());
      });
    } else {
      const incoming = items as Exam[];
      setExams(prev => {
        if (mode === 'replace') return incoming;
        const map = new Map(prev.map(e => [e.id, e]));
        incoming.forEach(e => map.set(e.id, e));
        return Array.from(map.values());
      });
    }
    setImportState(null);
    setIsDirty(true);
    setTab(importState.kind);
  }

  // ── Filtered lists ─────────────────────────────────────────────────

  const q = search.toLowerCase();
  const filteredR = resources.filter(r =>
    !q || r.title.toLowerCase().includes(q) || r.type.includes(q) || r.contentStatus.includes(q)
  );
  const filteredE = exams.filter(e =>
    !q || e.title.toLowerCase().includes(q) || e.shortTitle.toLowerCase().includes(q)
  );

  const selResource = resources.find(r => r.id === selR) ?? null;
  const selExam     = exams.find(e => e.id === selE) ?? null;

  // ── Render ─────────────────────────────────────────────────────────

  return (
    <div
      className="flex h-full -m-6 overflow-hidden"
      onDragOver={e => { e.preventDefault(); setDropActive(true); }}
      onDragLeave={() => setDropActive(false)}
      onDrop={e => {
        e.preventDefault(); setDropActive(false);
        const file = e.dataTransfer.files[0];
        if (file?.name.endsWith('.json')) handleFile(file);
      }}
    >
      {/* Drop overlay */}
      {dropActive && (
        <div className="absolute inset-0 z-40 bg-veda-900/80 flex items-center justify-center pointer-events-none">
          <div className="flex flex-col items-center gap-3 text-veda-300">
            <FileJson size={40} />
            <p className="text-sm font-semibold">Drop JSON to import</p>
          </div>
        </div>
      )}

      {/* ─── Left list panel ─────────────────────────────────────── */}
      <aside className="w-80 flex-shrink-0 border-r border-stone-800 flex flex-col overflow-hidden">

        {/* Tabs */}
        <div className="flex border-b border-stone-800 flex-shrink-0">
          {(['resources', 'exams'] as const).map(t => (
            <button key={t}
              onClick={() => { setTab(t); setSearch(''); }}
              className={[
                'flex-1 py-2.5 text-xs font-semibold capitalize transition-colors',
                tab === t ? 'text-veda-300 border-b-2 border-veda-500' : 'text-stone-500 hover:text-stone-300',
              ].join(' ')}>
              {t} ({t === 'resources' ? resources.length : exams.length})
            </button>
          ))}
        </div>

        {/* Search + actions */}
        <div className="flex items-center gap-2 px-3 py-2.5 border-b border-stone-800 flex-shrink-0">
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder={`Search ${tab}…`}
            className="flex-1 min-w-0 px-2.5 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 placeholder-stone-600 text-xs focus:outline-none focus:ring-1 focus:ring-veda-600"
          />
          <button onClick={() => fileRef.current?.click()} title="Import JSON"
            className="p-1.5 rounded-lg text-stone-500 hover:text-veda-400 hover:bg-stone-800 transition-colors flex-shrink-0">
            <Upload size={14} />
          </button>
          <button onClick={tab === 'resources' ? addResource : addExam} title="Add new"
            className="p-1.5 rounded-lg text-stone-500 hover:text-veda-400 hover:bg-stone-800 transition-colors flex-shrink-0">
            <Plus size={14} />
          </button>
          <input ref={fileRef} type="file" accept=".json" className="hidden"
            onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); e.target.value = ''; }} />
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto">
          {tab === 'resources' && filteredR.map(r => (
            <button key={r.id} onClick={() => setSelR(r.id)}
              className={[
                'w-full flex items-start gap-2 px-3 py-2.5 text-left border-b border-stone-800/50 transition-colors',
                selR === r.id ? 'bg-veda-900/40' : 'hover:bg-stone-800/30',
              ].join(' ')}>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-stone-200 truncate">{r.title}</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] text-stone-600 uppercase">{r.type}</span>
                  <span className={['text-[10px] px-1.5 py-0.5 rounded font-medium', STATUS_COLOR[r.contentStatus]].join(' ')}>
                    {r.contentStatus}
                  </span>
                </div>
              </div>
            </button>
          ))}

          {tab === 'exams' && filteredE.map(e => (
            <button key={e.id} onClick={() => setSelE(e.id)}
              className={[
                'w-full flex items-start px-3 py-2.5 text-left border-b border-stone-800/50 transition-colors',
                selE === e.id ? 'bg-veda-900/40' : 'hover:bg-stone-800/30',
              ].join(' ')}>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-stone-200 truncate">{e.title}</p>
                <p className="text-[10px] text-stone-600 mt-0.5">{e.type} · {e.conductingBody}</p>
              </div>
            </button>
          ))}

          {tab === 'resources' && filteredR.length === 0 && (
            <p className="text-xs text-stone-600 text-center py-8">No resources match</p>
          )}
          {tab === 'exams' && filteredE.length === 0 && (
            <p className="text-xs text-stone-600 text-center py-8">No exams match</p>
          )}
        </div>

        {/* Save / discard */}
        <div className="flex-shrink-0 border-t border-stone-800 p-3 space-y-2">
          {hasDraft && (
            <button onClick={discardDraft}
              className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs text-stone-500 hover:text-red-400 hover:bg-stone-800 transition-colors">
              <RotateCcw size={11} /> Discard draft
            </button>
          )}
          <button onClick={saveDraft} disabled={!isDirty}
            className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-veda-700 hover:bg-veda-600 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-semibold transition-colors">
            <Save size={12} />
            {flash ? 'Saved!' : isDirty ? 'Save Draft' : 'No changes'}
          </button>
        </div>
      </aside>

      {/* ─── Right edit panel ─────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto p-6">
        {!selResource && !selExam && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <FileJson size={32} className="text-stone-700 mb-3" />
            <p className="text-sm text-stone-500">Select an item to edit</p>
            <p className="text-xs text-stone-700 mt-1">or drag &amp; drop a .json file anywhere to import</p>
          </div>
        )}

        {selResource && (
          <ResourceForm
            resource={selResource}
            subjects={subjects}
            onChange={p => patchResource(selResource.id, p)}
            onDelete={() => setConfirm(selResource.id)}
          />
        )}

        {selExam && (
          <ExamForm
            exam={selExam}
            subjects={subjects}
            onChange={p => patchExam(selExam.id, p)}
            onDelete={() => setConfirm(selExam.id)}
          />
        )}
      </div>

      {/* ─── Import modal ─────────────────────────────────────────── */}
      {importState && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-stone-900 border border-stone-700 rounded-xl p-6 max-w-sm w-full mx-4 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <FileJson size={20} className="text-veda-400 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm font-bold text-stone-100">Import {importState.kind}</p>
                <p className="text-xs text-stone-500 truncate">{importState.filename}</p>
              </div>
            </div>
            <div className="bg-stone-800 rounded-lg px-4 py-3 mb-4">
              <p className="text-xs text-stone-300">
                <span className="font-semibold text-veda-300">{importState.items.length}</span> items detected as{' '}
                <span className="font-semibold">{importState.kind}</span>
              </p>
            </div>
            <div className="space-y-2 mb-5">
              {(['merge', 'replace'] as const).map(m => (
                <label key={m} className="flex items-start gap-2.5 cursor-pointer">
                  <input type="radio" name="import-mode" value={m}
                    checked={importState.mode === m}
                    onChange={() => setImportState(s => s ? { ...s, mode: m } : s)}
                    className="mt-0.5 accent-veda-500" />
                  <div>
                    <p className="text-xs font-medium text-stone-200 capitalize">{m}</p>
                    <p className="text-[11px] text-stone-500">
                      {m === 'merge'
                        ? 'Add new items and update existing ones by ID'
                        : 'Replace ALL current items with this file\'s contents'}
                    </p>
                  </div>
                </label>
              ))}
            </div>
            <div className="flex gap-3">
              <button onClick={() => setImportState(null)}
                className="flex-1 py-2 rounded-lg border border-stone-700 text-stone-300 text-sm hover:bg-stone-800 transition-colors">
                Cancel
              </button>
              <button onClick={applyImport}
                className="flex-1 py-2 rounded-lg bg-veda-700 hover:bg-veda-600 text-white text-sm font-medium transition-colors flex items-center justify-center gap-1.5">
                <CheckCircle2 size={14} /> Import
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── Delete confirmation ───────────────────────────────────── */}
      {confirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-stone-900 border border-stone-700 rounded-xl p-6 max-w-sm w-full mx-4 shadow-2xl">
            <div className="flex items-center gap-3 mb-3">
              <AlertCircle size={18} className="text-red-400 flex-shrink-0" />
              <h3 className="text-sm font-bold text-stone-100">Confirm Delete</h3>
            </div>
            <p className="text-sm text-stone-400 mb-5 leading-relaxed">
              Removes the item from your draft. Use "Discard draft" to restore everything from the original data.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setConfirm(null)}
                className="flex-1 py-2 rounded-lg border border-stone-700 text-stone-300 text-sm hover:bg-stone-800 transition-colors">
                Cancel
              </button>
              <button
                onClick={() => {
                  if (resources.some(r => r.id === confirm)) deleteResource(confirm);
                  else deleteExam(confirm);
                }}
                className="flex-1 py-2 rounded-lg bg-red-700 hover:bg-red-600 text-white text-sm font-medium transition-colors">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Resource edit form ─────────────────────────────────────────────────

import type { Subject } from '../../models';

function ResourceForm({ resource, subjects, onChange, onDelete }: {
  resource: Resource;
  subjects: Subject[];
  onChange: (p: Partial<Resource>) => void;
  onDelete: () => void;
}) {
  return (
    <div className="max-w-2xl space-y-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-stone-100">Edit Resource</h3>
          <p className="text-[11px] text-stone-600 font-mono mt-0.5">{resource.id}</p>
        </div>
        <button onClick={onDelete}
          className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-red-400 border border-red-900/40 hover:bg-red-900/20 transition-colors">
          <Trash2 size={12} /> Delete
        </button>
      </div>

      <FText label="Title" value={resource.title} onChange={v => onChange({ title: v, slug: toSlug(v) })} />
      <FText label="Slug" value={resource.slug} onChange={v => onChange({ slug: v })} mono />
      <FArea label="Description" value={resource.description} rows={2} onChange={v => onChange({ description: v })} />
      <FText label="URL" value={resource.url ?? ''} onChange={v => onChange({ url: v || undefined })} />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-stone-400 mb-1.5">Type</label>
          <select value={resource.type} onChange={e => onChange({ type: e.target.value as ResourceType })}
            className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600">
            {RESOURCE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-stone-400 mb-1.5">Difficulty</label>
          <select value={resource.difficulty} onChange={e => onChange({ difficulty: e.target.value as Difficulty })}
            className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600">
            {DIFFICULTIES.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-stone-400 mb-1.5">Content Status</label>
          <select value={resource.contentStatus} onChange={e => onChange({ contentStatus: e.target.value as ContentStatus })}
            className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600">
            {CONTENT_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-stone-400 mb-1.5">Verification</label>
          <select value={resource.verificationStatus} onChange={e => onChange({ verificationStatus: e.target.value as VerificationStatus })}
            className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600">
            {VERIF_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FText label="Author" value={resource.author ?? ''} onChange={v => onChange({ author: v || undefined })} />
        <FText label="Source" value={resource.source ?? ''} onChange={v => onChange({ source: v || undefined })} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-stone-400 mb-1.5">Year</label>
          <input type="number" min={1990} max={2099} value={resource.year ?? ''}
            onChange={e => onChange({ year: e.target.value ? Number(e.target.value) : undefined })}
            className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600" />
        </div>
        <FText label="Language" value={resource.language} onChange={v => onChange({ language: v })} />
      </div>

      <FText label="Tags (comma-separated)" value={resource.tags.join(', ')}
        onChange={v => onChange({ tags: v.split(',').map(x => x.trim()).filter(Boolean) })} />

      <div>
        <label className="block text-xs font-medium text-stone-400 mb-2">Subject Assignments</label>
        <div className="flex flex-wrap gap-2">
          {subjects.map(s => (
            <button key={s.id}
              onClick={() => {
                const cur = resource.subjectIds;
                onChange({ subjectIds: cur.includes(s.id) ? cur.filter(id => id !== s.id) : [...cur, s.id] });
              }}
              className={['px-2.5 py-1 rounded-lg text-xs transition-colors',
                resource.subjectIds.includes(s.id) ? 'bg-veda-700 text-white' : 'bg-stone-800 text-stone-400 hover:bg-stone-700',
              ].join(' ')}>
              {s.shortTitle || s.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Exam edit form ─────────────────────────────────────────────────────

function ExamForm({ exam, subjects, onChange, onDelete }: {
  exam: Exam;
  subjects: Subject[];
  onChange: (p: Partial<Exam>) => void;
  onDelete: () => void;
}) {
  return (
    <div className="max-w-2xl space-y-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-stone-100">Edit Exam</h3>
          <p className="text-[11px] text-stone-600 font-mono mt-0.5">{exam.id}</p>
        </div>
        <button onClick={onDelete}
          className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-red-400 border border-red-900/40 hover:bg-red-900/20 transition-colors">
          <Trash2 size={12} /> Delete
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <FText label="Title" value={exam.title} onChange={v => onChange({ title: v, slug: toSlug(v) })} />
        </div>
        <FText label="Short Title" value={exam.shortTitle} onChange={v => onChange({ shortTitle: v })} />
      </div>

      <FText label="Slug" value={exam.slug} onChange={v => onChange({ slug: v })} mono />
      <FArea label="Description" value={exam.description} rows={3} onChange={v => onChange({ description: v })} />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-stone-400 mb-1.5">Exam Type</label>
          <select value={exam.type} onChange={e => onChange({ type: e.target.value as ExamType })}
            className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600">
            {EXAM_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <FText label="Conducting Body" value={exam.conductingBody} onChange={v => onChange({ conductingBody: v })} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FText label="Level" value={exam.level} onChange={v => onChange({ level: v })} />
        <FText label="Eligibility" value={exam.eligibility ?? ''} onChange={v => onChange({ eligibility: v || undefined })} />
      </div>

      <FText label="Website URL" value={exam.websiteUrl ?? ''} onChange={v => onChange({ websiteUrl: v || undefined })} />

      <div>
        <label className="block text-xs font-medium text-stone-400 mb-1.5">
          Syllabus Topics <span className="text-stone-600">(one per line)</span>
        </label>
        <textarea rows={4}
          value={exam.syllabus.join('\n')}
          onChange={e => onChange({ syllabus: e.target.value.split('\n').map(l => l.trim()).filter(Boolean) })}
          className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-veda-600 resize-y" />
      </div>

      <FText label="Tags (comma-separated)" value={exam.tags.join(', ')}
        onChange={v => onChange({ tags: v.split(',').map(x => x.trim()).filter(Boolean) })} />

      <div>
        <label className="block text-xs font-medium text-stone-400 mb-2">Subject Assignments</label>
        <div className="flex flex-wrap gap-2">
          {subjects.map(s => (
            <button key={s.id}
              onClick={() => {
                const cur = exam.subjectIds;
                onChange({ subjectIds: cur.includes(s.id) ? cur.filter(id => id !== s.id) : [...cur, s.id] });
              }}
              className={['px-2.5 py-1 rounded-lg text-xs transition-colors',
                exam.subjectIds.includes(s.id) ? 'bg-veda-700 text-white' : 'bg-stone-800 text-stone-400 hover:bg-stone-700',
              ].join(' ')}>
              {s.shortTitle || s.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Primitive fields ───────────────────────────────────────────────────

function FText({ label, value, onChange, mono = false }: {
  label: string; value: string; onChange: (v: string) => void; mono?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-stone-400 mb-1.5">{label}</label>
      <input type="text" value={value} onChange={e => onChange(e.target.value)}
        className={['w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600', mono ? 'font-mono' : ''].join(' ')} />
    </div>
  );
}

function FArea({ label, value, onChange, rows = 3 }: {
  label: string; value: string; onChange: (v: string) => void; rows?: number;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-stone-400 mb-1.5">{label}</label>
      <textarea rows={rows} value={value} onChange={e => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600 resize-y" />
    </div>
  );
}

// suppress unused X icon — used in future close buttons
void X;
