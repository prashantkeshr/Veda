import { useState, useEffect } from 'react';
import type { Subject, Topic, Difficulty, AcademicLevel } from '../../models';
import { subjectRepo, topicRepo } from '../../repositories';
import {
  ChevronRight, ChevronDown, Plus, Save, Trash2,
  GripVertical, BookOpen, Layers, RotateCcw,
} from 'lucide-react';

const DRAFT_S = 'vk-draft-subjects';
const DRAFT_T = 'vk-draft-topics';

function toSlug(t: string) {
  return t.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

type Sel = { type: 'subject'; id: string } | { type: 'topic'; id: string } | null;

// ── Main editor ────────────────────────────────────────────────────────

export function KendraEditor() {
  const [subjects,  setSubjects]  = useState<Subject[]>([]);
  const [topics,    setTopics]    = useState<Topic[]>([]);
  const [expanded,  setExpanded]  = useState<Set<string>>(new Set());
  const [sel,       setSel]       = useState<Sel>(null);
  const [isDirty,   setIsDirty]   = useState(false);
  const [flash,     setFlash]     = useState(false);
  const [hasDraft,  setHasDraft]  = useState(() => {
    try { return !!(localStorage.getItem(DRAFT_S)); } catch { return false; }
  });
  const [dragging,  setDragging]  = useState<string | null>(null);
  const [dragOver,  setDragOver]  = useState<string | null>(null);
  const [confirm,   setConfirm]   = useState<string | null>(null);

  // Load — draft first, else static repos
  useEffect(() => {
    try {
      const ds = localStorage.getItem(DRAFT_S);
      const dt = localStorage.getItem(DRAFT_T);
      setSubjects(ds ? (JSON.parse(ds) as Subject[]) : subjectRepo.getAll());
      setTopics(dt   ? (JSON.parse(dt) as Topic[])   : topicRepo.getAll());
      if (ds || dt) setIsDirty(true);
    } catch {
      setSubjects(subjectRepo.getAll());
      setTopics(topicRepo.getAll());
    }
  }, []);

  // ── Persist ──────────────────────────────────────────────────────────

  function saveDraft() {
    try {
      localStorage.setItem(DRAFT_S, JSON.stringify(subjects));
      localStorage.setItem(DRAFT_T, JSON.stringify(topics));
      setIsDirty(false);
      setHasDraft(true);
      setFlash(true);
      setTimeout(() => setFlash(false), 2000);
    } catch { /* storage full */ }
  }

  function discardDraft() {
    localStorage.removeItem(DRAFT_S);
    localStorage.removeItem(DRAFT_T);
    setSubjects(subjectRepo.getAll());
    setTopics(topicRepo.getAll());
    setSel(null);
    setIsDirty(false);
    setHasDraft(false);
  }

  // ── Mutations ─────────────────────────────────────────────────────────

  function patchSubject(id: string, patch: Partial<Subject>) {
    setSubjects(p => p.map(s => s.id === id ? { ...s, ...patch, updatedAt: new Date().toISOString() } : s));
    setIsDirty(true);
  }

  function patchTopic(id: string, patch: Partial<Topic>) {
    setTopics(p => p.map(t => t.id === id ? { ...t, ...patch, updatedAt: new Date().toISOString() } : t));
    setIsDirty(true);
  }

  function addSubject() {
    const id = `veda-subject-${Date.now()}`;
    const s: Subject = {
      id, slug: 'new-subject', title: 'New Subject', shortTitle: 'New',
      description: '', academicLevels: ['undergraduate'], topicIds: [],
      courseIds: [], examIds: [], relatedSubjectIds: [], tags: [],
      updatedAt: new Date().toISOString(),
    };
    setSubjects(p => [...p, s]);
    setSel({ type: 'subject', id });
    setExpanded(p => new Set(p).add(id));
    setIsDirty(true);
  }

  function addTopic(subjectId: string) {
    const id = `veda-topic-${Date.now()}`;
    const t: Topic = {
      id, slug: 'new-topic', title: 'New Topic',
      description: '', overview: '',
      subjectIds: [subjectId], courseIds: [], examIds: [],
      prerequisiteIds: [], relatedIds: [], leadToIds: [],
      keyConcepts: [], formulaHighlights: [],
      estimatedMinutes: 30, difficulty: 'beginner',
      academicLevel: 'undergraduate', examRelevance: [], tags: [],
      updatedAt: new Date().toISOString(),
    };
    setTopics(p => [...p, t]);
    setSubjects(p => p.map(s =>
      s.id === subjectId ? { ...s, topicIds: [...s.topicIds, id] } : s
    ));
    setSel({ type: 'topic', id });
    setExpanded(p => new Set(p).add(subjectId));
    setIsDirty(true);
  }

  function deleteSubject(id: string) {
    setSubjects(p => p.filter(s => s.id !== id));
    if (sel?.type === 'subject' && sel.id === id) setSel(null);
    setConfirm(null);
    setIsDirty(true);
  }

  function deleteTopic(id: string) {
    const t = topics.find(x => x.id === id);
    setTopics(p => p.filter(x => x.id !== id));
    if (t) setSubjects(p => p.map(s => ({ ...s, topicIds: s.topicIds.filter(tid => tid !== id) })));
    if (sel?.type === 'topic' && sel.id === id) setSel(null);
    setConfirm(null);
    setIsDirty(true);
  }

  // ── Drag-and-drop ────────────────────────────────────────────────────

  function onDrop(subjectId: string, targetId: string) {
    if (!dragging || dragging === targetId) return;
    setSubjects(p => p.map(s => {
      if (s.id !== subjectId) return s;
      const ids  = [...s.topicIds];
      const from = ids.indexOf(dragging);
      const to   = ids.indexOf(targetId);
      if (from === -1 || to === -1) return s;
      ids.splice(from, 1);
      ids.splice(to, 0, dragging);
      return { ...s, topicIds: ids };
    }));
    setDragging(null);
    setDragOver(null);
    setIsDirty(true);
  }

  // ── Derived ──────────────────────────────────────────────────────────

  const selSubject = sel?.type === 'subject' ? (subjects.find(s => s.id === sel.id) ?? null) : null;
  const selTopic   = sel?.type === 'topic'   ? (topics.find(t => t.id === sel.id)   ?? null) : null;

  // ── Render ───────────────────────────────────────────────────────────

  return (
    <div className="flex h-full -m-6 overflow-hidden">

      {/* ─── Tree panel ────────────────────────────────────────────── */}
      <aside className="w-72 flex-shrink-0 border-r border-stone-800 flex flex-col overflow-hidden">

        <div className="flex items-center justify-between px-4 py-3 border-b border-stone-800 flex-shrink-0">
          <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Content Tree</span>
          <button onClick={addSubject} className="flex items-center gap-1 text-xs text-veda-400 hover:text-veda-300 transition-colors">
            <Plus size={13} /> Subject
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-1">
          {subjects.map(subj => {
            const isOpen   = expanded.has(subj.id);
            const subTopics = subj.topicIds.map(id => topics.find(t => t.id === id)).filter(Boolean) as Topic[];
            const isActive = sel?.type === 'subject' && sel.id === subj.id;

            return (
              <div key={subj.id}>
                {/* Subject row */}
                <div className={['flex items-center gap-1 px-2 py-1.5 group', isActive ? 'bg-veda-900/50' : 'hover:bg-stone-800/40'].join(' ')}>
                  <button
                    onClick={() => setExpanded(p => { const n = new Set(p); n.has(subj.id) ? n.delete(subj.id) : n.add(subj.id); return n; })}
                    className="text-stone-600 hover:text-stone-300 flex-shrink-0 p-0.5"
                  >
                    {isOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                  </button>
                  <BookOpen size={11} className="text-veda-600 flex-shrink-0" />
                  <button
                    onClick={() => setSel({ type: 'subject', id: subj.id })}
                    className={['flex-1 text-left text-xs truncate', isActive ? 'text-veda-300 font-semibold' : 'text-stone-300'].join(' ')}
                  >
                    {subj.title}
                  </button>
                  <button
                    onClick={() => addTopic(subj.id)}
                    title="Add topic"
                    className="opacity-0 group-hover:opacity-100 text-stone-600 hover:text-veda-400 transition-all flex-shrink-0 p-0.5"
                  >
                    <Plus size={11} />
                  </button>
                </div>

                {/* Topic rows */}
                {isOpen && subTopics.map(topic => {
                  const ta = sel?.type === 'topic' && sel.id === topic.id;
                  return (
                    <div
                      key={topic.id}
                      draggable
                      onDragStart={() => setDragging(topic.id)}
                      onDragEnd={() => { setDragging(null); setDragOver(null); }}
                      onDragOver={e => { e.preventDefault(); if (dragging && dragging !== topic.id) setDragOver(topic.id); }}
                      onDrop={() => onDrop(subj.id, topic.id)}
                      className={[
                        'flex items-center gap-1 pl-7 pr-2 py-1.5 group transition-colors cursor-pointer',
                        ta               ? 'bg-veda-900/40' : 'hover:bg-stone-800/30',
                        dragOver === topic.id ? 'border-t-2 border-veda-500' : '',
                        dragging === topic.id ? 'opacity-40' : '',
                      ].join(' ')}
                    >
                      <GripVertical size={11} className="text-stone-700 group-hover:text-stone-500 flex-shrink-0 cursor-grab" />
                      <Layers size={10} className="text-stone-600 flex-shrink-0" />
                      <button
                        onClick={() => setSel({ type: 'topic', id: topic.id })}
                        className={['flex-1 text-left text-xs truncate', ta ? 'text-veda-300 font-medium' : 'text-stone-400 hover:text-stone-200'].join(' ')}
                      >
                        {topic.title}
                      </button>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Save / discard */}
        <div className="flex-shrink-0 border-t border-stone-800 p-3 space-y-2">
          {hasDraft && (
            <button
              onClick={discardDraft}
              className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs text-stone-500 hover:text-red-400 hover:bg-stone-800 transition-colors"
            >
              <RotateCcw size={11} /> Discard draft
            </button>
          )}
          <button
            onClick={saveDraft}
            disabled={!isDirty}
            className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-veda-700 hover:bg-veda-600 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-semibold transition-colors"
          >
            <Save size={12} />
            {flash ? 'Saved!' : isDirty ? 'Save Draft' : 'No changes'}
          </button>
        </div>
      </aside>

      {/* ─── Right form panel ──────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto p-6">
        {!sel && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <BookOpen size={32} className="text-stone-700 mb-3" />
            <p className="text-sm text-stone-500">Select a subject or topic to edit it</p>
            <p className="text-xs text-stone-700 mt-1">or click + Subject to create a new one</p>
          </div>
        )}
        {selSubject && (
          <SubjectForm
            subject={selSubject}
            onChange={p => patchSubject(selSubject.id, p)}
            onDelete={() => setConfirm(selSubject.id)}
          />
        )}
        {selTopic && (
          <TopicForm
            topic={selTopic}
            subjects={subjects}
            onChange={p => patchTopic(selTopic.id, p)}
            onDelete={() => setConfirm(selTopic.id)}
          />
        )}
      </div>

      {/* ─── Delete confirmation ───────────────────────────────────── */}
      {confirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-stone-900 border border-stone-700 rounded-xl p-6 max-w-sm w-full mx-4 shadow-2xl">
            <h3 className="text-sm font-bold text-stone-100 mb-2">Confirm Delete</h3>
            <p className="text-sm text-stone-400 mb-5 leading-relaxed">
              This removes the item from your draft. Use "Discard draft" to restore everything from the original data.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setConfirm(null)}
                className="flex-1 py-2 rounded-lg border border-stone-700 text-stone-300 text-sm hover:bg-stone-800 transition-colors">
                Cancel
              </button>
              <button
                onClick={() => {
                  if (subjects.some(s => s.id === confirm)) deleteSubject(confirm);
                  else deleteTopic(confirm);
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

// ── Subject form ───────────────────────────────────────────────────────

const ACAD_LEVELS: AcademicLevel[] = [
  'undergraduate', 'postgraduate', 'competitive-exam', 'diploma', 'professional',
];

function SubjectForm({
  subject, onChange, onDelete,
}: {
  subject: Subject;
  onChange: (p: Partial<Subject>) => void;
  onDelete: () => void;
}) {
  return (
    <div className="max-w-2xl space-y-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-stone-100">Edit Subject</h3>
          <p className="text-[11px] text-stone-600 font-mono mt-0.5">{subject.id}</p>
        </div>
        <button onClick={onDelete}
          className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-red-400 border border-red-900/40 hover:bg-red-900/20 transition-colors">
          <Trash2 size={12} /> Delete
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FText label="Title" value={subject.title} onChange={v => onChange({ title: v, slug: toSlug(v) })} />
        <FText label="Short Title" value={subject.shortTitle} onChange={v => onChange({ shortTitle: v })} />
      </div>

      <FText label="Slug" value={subject.slug} onChange={v => onChange({ slug: v })} mono />
      <FArea label="Description" value={subject.description} rows={3} onChange={v => onChange({ description: v })} />

      <div>
        <label className="block text-xs font-medium text-stone-400 mb-2">Academic Levels</label>
        <div className="flex flex-wrap gap-2">
          {ACAD_LEVELS.map(lvl => (
            <button key={lvl}
              onClick={() => {
                const cur = subject.academicLevels;
                onChange({ academicLevels: cur.includes(lvl) ? cur.filter(l => l !== lvl) : [...cur, lvl] });
              }}
              className={[
                'px-2.5 py-1 rounded-lg text-xs transition-colors',
                subject.academicLevels.includes(lvl) ? 'bg-veda-700 text-white' : 'bg-stone-800 text-stone-400 hover:bg-stone-700',
              ].join(' ')}
            >
              {lvl.replace(/-/g, ' ')}
            </button>
          ))}
        </div>
      </div>

      <FText label="Tags (comma-separated)" value={subject.tags.join(', ')}
        onChange={v => onChange({ tags: v.split(',').map(x => x.trim()).filter(Boolean) })} />
    </div>
  );
}

// ── Topic form ─────────────────────────────────────────────────────────

const DIFFICULTIES: Difficulty[] = ['beginner', 'intermediate', 'advanced', 'expert'];

function TopicForm({
  topic, subjects, onChange, onDelete,
}: {
  topic: Topic;
  subjects: Subject[];
  onChange: (p: Partial<Topic>) => void;
  onDelete: () => void;
}) {
  return (
    <div className="max-w-2xl space-y-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-stone-100">Edit Topic</h3>
          <p className="text-[11px] text-stone-600 font-mono mt-0.5">{topic.id}</p>
        </div>
        <button onClick={onDelete}
          className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-red-400 border border-red-900/40 hover:bg-red-900/20 transition-colors">
          <Trash2 size={12} /> Delete
        </button>
      </div>

      <FText label="Title" value={topic.title} onChange={v => onChange({ title: v, slug: toSlug(v) })} />
      <FText label="Slug" value={topic.slug} onChange={v => onChange({ slug: v })} mono />
      <FArea label="Description" value={topic.description} rows={2} onChange={v => onChange({ description: v })} />
      <FArea label="Overview" value={topic.overview} rows={5} onChange={v => onChange({ overview: v })} />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-stone-400 mb-1.5">Difficulty</label>
          <select value={topic.difficulty}
            onChange={e => onChange({ difficulty: e.target.value as Difficulty })}
            className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600">
            {DIFFICULTIES.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-stone-400 mb-1.5">Estimated Minutes</label>
          <input type="number" min={5} step={5} value={topic.estimatedMinutes}
            onChange={e => onChange({ estimatedMinutes: Number(e.target.value) })}
            className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600" />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-stone-400 mb-1.5">
          Key Concepts <span className="text-stone-600">(one per line)</span>
        </label>
        <textarea rows={4}
          value={topic.keyConcepts.join('\n')}
          onChange={e => onChange({ keyConcepts: e.target.value.split('\n').map(l => l.trim()).filter(Boolean) })}
          className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-veda-600 resize-y" />
      </div>

      <FText label="Tags (comma-separated)" value={topic.tags.join(', ')}
        onChange={v => onChange({ tags: v.split(',').map(x => x.trim()).filter(Boolean) })} />

      <div>
        <label className="block text-xs font-medium text-stone-400 mb-2">Subject Assignments</label>
        <div className="flex flex-wrap gap-2">
          {subjects.map(s => (
            <button key={s.id}
              onClick={() => {
                const cur = topic.subjectIds;
                onChange({ subjectIds: cur.includes(s.id) ? cur.filter(id => id !== s.id) : [...cur, s.id] });
              }}
              className={[
                'px-2.5 py-1 rounded-lg text-xs transition-colors',
                topic.subjectIds.includes(s.id) ? 'bg-veda-700 text-white' : 'bg-stone-800 text-stone-400 hover:bg-stone-700',
              ].join(' ')}
            >
              {s.shortTitle || s.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Primitive field components ─────────────────────────────────────────

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
