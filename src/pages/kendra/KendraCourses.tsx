import { useState, useEffect, useRef } from 'react';
import type {
  Course, LearningPath, PathStep, Semester,
  AcademicLevel, Difficulty,
} from '../../models';
import { courseRepo, learningPathRepo, subjectRepo, examRepo } from '../../repositories';
import {
  Plus, Trash2, Save, RotateCcw, Upload, FileJson,
  CheckCircle2, AlertCircle, GripVertical, ArrowUp, ArrowDown,
} from 'lucide-react';

const DRAFT_C  = 'vk-draft-courses';
const DRAFT_LP = 'vk-draft-learning-paths';

function toSlug(s: string) {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const ACADEMIC_LEVELS: AcademicLevel[] = [
  'primary','higher-secondary','diploma','undergraduate','postgraduate',
  'doctoral','professional','competitive-exam','general',
];
const DIFFICULTIES: Difficulty[] = ['beginner','intermediate','advanced','expert'];
const STEP_TYPES: PathStep['type'][] = ['topic','resource','quiz','milestone'];

type ImportState = {
  filename: string;
  kind: 'courses' | 'learning-paths';
  items: Course[] | LearningPath[];
  mode: 'merge' | 'replace';
} | null;

// ── Main ───────────────────────────────────────────────────────────────

export function KendraCourses() {
  const [tab,       setTab]       = useState<'courses' | 'learning-paths'>('courses');
  const [courses,   setCourses]   = useState<Course[]>([]);
  const [paths,     setPaths]     = useState<LearningPath[]>([]);
  const [selC,      setSelC]      = useState<string | null>(null);
  const [selLP,     setSelLP]     = useState<string | null>(null);
  const [search,    setSearch]    = useState('');
  const [isDirty,   setIsDirty]   = useState(false);
  const [flash,     setFlash]     = useState(false);
  const [hasDraft,  setHasDraft]  = useState(false);
  const [importState, setImportState] = useState<ImportState>(null);
  const [confirm,   setConfirm]   = useState<string | null>(null);
  const [dropActive, setDropActive] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const subjects = subjectRepo.getAll();
  const exams    = examRepo.getAll();

  useEffect(() => {
    try {
      const dc  = localStorage.getItem(DRAFT_C);
      const dlp = localStorage.getItem(DRAFT_LP);
      setCourses(dc  ? JSON.parse(dc)  as Course[]        : courseRepo.getAll());
      setPaths(dlp   ? JSON.parse(dlp) as LearningPath[]  : learningPathRepo.getAll());
      if (dc || dlp) { setIsDirty(true); setHasDraft(true); }
    } catch {
      setCourses(courseRepo.getAll());
      setPaths(learningPathRepo.getAll());
    }
  }, []);

  // ── Persistence ────────────────────────────────────────────────────

  function saveDraft() {
    try {
      localStorage.setItem(DRAFT_C,  JSON.stringify(courses));
      localStorage.setItem(DRAFT_LP, JSON.stringify(paths));
      setIsDirty(false); setHasDraft(true);
      setFlash(true); setTimeout(() => setFlash(false), 2000);
    } catch { /* storage full */ }
  }

  function discardDraft() {
    localStorage.removeItem(DRAFT_C);
    localStorage.removeItem(DRAFT_LP);
    setCourses(courseRepo.getAll());
    setPaths(learningPathRepo.getAll());
    setSelC(null); setSelLP(null);
    setIsDirty(false); setHasDraft(false);
  }

  // ── Mutations ──────────────────────────────────────────────────────

  function patchC(id: string, p: Partial<Course>) {
    setCourses(prev => prev.map(c => c.id === id ? { ...c, ...p, updatedAt: new Date().toISOString() } : c));
    setIsDirty(true);
  }

  function addCourse() {
    const id = `veda-course-${Date.now()}`;
    const c: Course = {
      id, slug: 'new-course', title: 'New Course', shortTitle: 'NEW',
      description: '', academicLevel: 'undergraduate', durationYears: 4,
      semesters: [], subjectIds: [], institutionIds: [], examIds: [], tags: [],
      updatedAt: new Date().toISOString(),
    };
    setCourses(p => [c, ...p]);
    setSelC(id); setTab('courses'); setIsDirty(true);
  }

  function deleteCourse(id: string) {
    setCourses(p => p.filter(c => c.id !== id));
    if (selC === id) setSelC(null);
    setConfirm(null); setIsDirty(true);
  }

  function patchLP(id: string, p: Partial<LearningPath>) {
    setPaths(prev => prev.map(lp => lp.id === id ? { ...lp, ...p, updatedAt: new Date().toISOString() } : lp));
    setIsDirty(true);
  }

  function addPath() {
    const id = `veda-path-${Date.now()}`;
    const lp: LearningPath = {
      id, slug: 'new-path', title: 'New Learning Path',
      description: '', steps: [], goalExamIds: [], goalCourseIds: [],
      totalMinutes: 0, difficulty: 'intermediate', academicLevel: 'undergraduate',
      tags: [], createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(),
    };
    setPaths(p => [lp, ...p]);
    setSelLP(id); setTab('learning-paths'); setIsDirty(true);
  }

  function deletePath(id: string) {
    setPaths(p => p.filter(lp => lp.id !== id));
    if (selLP === id) setSelLP(null);
    setConfirm(null); setIsDirty(true);
  }

  // ── Import ─────────────────────────────────────────────────────────

  function handleFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result as string);
        const arr = Array.isArray(parsed) ? parsed : [parsed];
        if (!arr.length) return;
        const first = arr[0] as Record<string, unknown>;
        const kind: 'courses' | 'learning-paths' = 'semesters' in first ? 'courses' : 'learning-paths';
        setImportState({ filename: file.name, kind, items: arr as Course[] | LearningPath[], mode: 'merge' });
      } catch { /* bad JSON */ }
    };
    reader.readAsText(file);
  }

  function applyImport() {
    if (!importState) return;
    const { kind, items, mode } = importState;
    if (kind === 'courses') {
      const incoming = items as Course[];
      setCourses(prev => {
        if (mode === 'replace') return incoming;
        const map = new Map(prev.map(c => [c.id, c]));
        incoming.forEach(c => map.set(c.id, c));
        return Array.from(map.values());
      });
    } else {
      const incoming = items as LearningPath[];
      setPaths(prev => {
        if (mode === 'replace') return incoming;
        const map = new Map(prev.map(lp => [lp.id, lp]));
        incoming.forEach(lp => map.set(lp.id, lp));
        return Array.from(map.values());
      });
    }
    setImportState(null);
    setIsDirty(true);
    setTab(importState.kind);
  }

  // ── Filtered ───────────────────────────────────────────────────────

  const q = search.toLowerCase();
  const filteredC  = courses.filter(c  => !q || c.title.toLowerCase().includes(q));
  const filteredLP = paths.filter(lp   => !q || lp.title.toLowerCase().includes(q));

  const selCourse = courses.find(c  => c.id === selC)  ?? null;
  const selPath   = paths.find(lp   => lp.id === selLP) ?? null;

  return (
    <div
      className="flex h-full -m-6 overflow-hidden"
      onDragOver={e => { e.preventDefault(); setDropActive(true); }}
      onDragLeave={() => setDropActive(false)}
      onDrop={e => {
        e.preventDefault(); setDropActive(false);
        const f = e.dataTransfer.files[0];
        if (f?.name.endsWith('.json')) handleFile(f);
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

      {/* ─── Left list ───────────────────────────────────────────── */}
      <aside className="w-80 flex-shrink-0 border-r border-stone-800 flex flex-col overflow-hidden">

        {/* Tabs */}
        <div className="flex border-b border-stone-800 flex-shrink-0">
          {(['courses', 'learning-paths'] as const).map(t => (
            <button key={t} onClick={() => { setTab(t); setSearch(''); }}
              className={[
                'flex-1 py-2.5 text-xs font-semibold capitalize transition-colors',
                tab === t ? 'text-veda-300 border-b-2 border-veda-500' : 'text-stone-500 hover:text-stone-300',
              ].join(' ')}>
              {t === 'courses' ? `Courses (${courses.length})` : `Paths (${paths.length})`}
            </button>
          ))}
        </div>

        {/* Search + add */}
        <div className="flex items-center gap-2 px-3 py-2.5 border-b border-stone-800 flex-shrink-0">
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder={`Search ${tab}…`}
            className="flex-1 min-w-0 px-2.5 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 placeholder-stone-600 text-xs focus:outline-none focus:ring-1 focus:ring-veda-600" />
          <button onClick={() => fileRef.current?.click()} title="Import JSON"
            className="p-1.5 rounded-lg text-stone-500 hover:text-veda-400 hover:bg-stone-800 transition-colors flex-shrink-0">
            <Upload size={14} />
          </button>
          <button onClick={tab === 'courses' ? addCourse : addPath} title="Add"
            className="p-1.5 rounded-lg text-stone-500 hover:text-veda-400 hover:bg-stone-800 transition-colors flex-shrink-0">
            <Plus size={14} />
          </button>
          <input ref={fileRef} type="file" accept=".json" className="hidden"
            onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); e.target.value = ''; }} />
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto">
          {tab === 'courses' && filteredC.map(c => (
            <button key={c.id} onClick={() => setSelC(c.id)}
              className={['w-full flex items-start px-3 py-2.5 text-left border-b border-stone-800/50 transition-colors',
                selC === c.id ? 'bg-veda-900/40' : 'hover:bg-stone-800/30'].join(' ')}>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-stone-200 truncate">{c.title}</p>
                <p className="text-[10px] text-stone-600 mt-0.5">
                  {c.academicLevel} · {c.durationYears}yr · {c.semesters.length} sem
                </p>
              </div>
            </button>
          ))}
          {tab === 'learning-paths' && filteredLP.map(lp => (
            <button key={lp.id} onClick={() => setSelLP(lp.id)}
              className={['w-full flex items-start px-3 py-2.5 text-left border-b border-stone-800/50 transition-colors',
                selLP === lp.id ? 'bg-veda-900/40' : 'hover:bg-stone-800/30'].join(' ')}>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-stone-200 truncate">{lp.title}</p>
                <p className="text-[10px] text-stone-600 mt-0.5">
                  {lp.steps.length} steps · {lp.totalMinutes} min · {lp.difficulty}
                </p>
              </div>
            </button>
          ))}
          {tab === 'courses' && filteredC.length === 0 && (
            <p className="text-xs text-stone-600 text-center py-8">No courses match</p>
          )}
          {tab === 'learning-paths' && filteredLP.length === 0 && (
            <p className="text-xs text-stone-600 text-center py-8">No paths match</p>
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
        {!selCourse && !selPath && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <FileJson size={32} className="text-stone-700 mb-3" />
            <p className="text-sm text-stone-500">Select an item to edit</p>
            <p className="text-xs text-stone-700 mt-1">or drag &amp; drop a .json file to import</p>
          </div>
        )}
        {selCourse && (
          <CourseForm
            course={selCourse}
            subjects={subjects}
            exams={exams}
            onChange={p => patchC(selCourse.id, p)}
            onDelete={() => setConfirm(selCourse.id)}
          />
        )}
        {selPath && (
          <PathForm
            path={selPath}
            exams={exams}
            courses={courses}
            onChange={p => patchLP(selPath.id, p)}
            onDelete={() => setConfirm(selPath.id)}
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
                <span className="font-semibold text-veda-300">{importState.items.length}</span> items detected
              </p>
            </div>
            <div className="space-y-2 mb-5">
              {(['merge', 'replace'] as const).map(m => (
                <label key={m} className="flex items-start gap-2.5 cursor-pointer">
                  <input type="radio" name="import-mode-c" value={m}
                    checked={importState.mode === m}
                    onChange={() => setImportState(s => s ? { ...s, mode: m } : s)}
                    className="mt-0.5 accent-veda-500" />
                  <div>
                    <p className="text-xs font-medium text-stone-200 capitalize">{m}</p>
                    <p className="text-[11px] text-stone-500">
                      {m === 'merge' ? 'Add / update by ID' : 'Replace ALL items'}
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

      {/* ─── Delete confirm ────────────────────────────────────────── */}
      {confirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-stone-900 border border-stone-700 rounded-xl p-6 max-w-sm w-full mx-4 shadow-2xl">
            <div className="flex items-center gap-3 mb-3">
              <AlertCircle size={18} className="text-red-400 flex-shrink-0" />
              <h3 className="text-sm font-bold text-stone-100">Delete?</h3>
            </div>
            <p className="text-sm text-stone-400 mb-5">Removes from draft. Use "Discard draft" to restore.</p>
            <div className="flex gap-3">
              <button onClick={() => setConfirm(null)}
                className="flex-1 py-2 rounded-lg border border-stone-700 text-stone-300 text-sm hover:bg-stone-800 transition-colors">
                Cancel
              </button>
              <button
                onClick={() => {
                  if (courses.some(c => c.id === confirm)) deleteCourse(confirm);
                  else deletePath(confirm);
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

// ── Course form ────────────────────────────────────────────────────────

import type { Subject, Exam } from '../../models';

function CourseForm({ course, subjects, exams, onChange, onDelete }: {
  course: Course;
  subjects: Subject[];
  exams: Exam[];
  onChange: (p: Partial<Course>) => void;
  onDelete: () => void;
}) {
  function patchSem(i: number, p: Partial<Semester>) {
    const sems = course.semesters.map((s, idx) => idx === i ? { ...s, ...p } : s);
    onChange({ semesters: sems });
  }

  function addSem() {
    const n = course.semesters.length + 1;
    onChange({ semesters: [...course.semesters, { number: n, label: `Semester ${n}`, subjectIds: [] }] });
  }

  function removeSem(i: number) {
    onChange({ semesters: course.semesters.filter((_, idx) => idx !== i) });
  }

  function toggleSubInSem(semIdx: number, subId: string) {
    const cur = course.semesters[semIdx].subjectIds;
    patchSem(semIdx, {
      subjectIds: cur.includes(subId) ? cur.filter(id => id !== subId) : [...cur, subId],
    });
  }

  return (
    <div className="max-w-2xl space-y-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-stone-100">Edit Course</h3>
          <p className="text-[11px] text-stone-600 font-mono mt-0.5">{course.id}</p>
        </div>
        <button onClick={onDelete}
          className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-red-400 border border-red-900/40 hover:bg-red-900/20 transition-colors">
          <Trash2 size={12} /> Delete
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <FText label="Title" value={course.title}
            onChange={v => onChange({ title: v, slug: toSlug(v) })} />
        </div>
        <FText label="Short Title" value={course.shortTitle} onChange={v => onChange({ shortTitle: v })} />
      </div>

      <FText label="Slug" value={course.slug} onChange={v => onChange({ slug: v })} mono />
      <FArea label="Description" value={course.description} onChange={v => onChange({ description: v })} />
      <FText label="Branch Name" value={course.branchName ?? ''} onChange={v => onChange({ branchName: v || undefined })} />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-stone-400 mb-1.5">Academic Level</label>
          <select value={course.academicLevel} onChange={e => onChange({ academicLevel: e.target.value as AcademicLevel })}
            className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600">
            {ACADEMIC_LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-stone-400 mb-1.5">Duration (years)</label>
          <input type="number" min={1} max={10} value={course.durationYears}
            onChange={e => onChange({ durationYears: Number(e.target.value) })}
            className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600" />
        </div>
      </div>

      <FText label="Tags (comma-separated)" value={course.tags.join(', ')}
        onChange={v => onChange({ tags: v.split(',').map(x => x.trim()).filter(Boolean) })} />

      {/* Semesters */}
      <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-stone-800">
          <span className="text-xs font-semibold text-stone-300">Semesters ({course.semesters.length})</span>
          <button onClick={addSem}
            className="flex items-center gap-1 text-xs text-veda-400 hover:text-veda-300 transition-colors">
            <Plus size={12} /> Add Semester
          </button>
        </div>
        {course.semesters.length === 0 && (
          <p className="text-xs text-stone-700 text-center py-4">No semesters — click Add Semester</p>
        )}
        <div className="divide-y divide-stone-800/60">
          {course.semesters.map((sem, i) => (
            <div key={i} className="p-4 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-stone-500 flex-shrink-0">#{sem.number}</span>
                <input type="text" value={sem.label}
                  onChange={e => patchSem(i, { label: e.target.value })}
                  className="flex-1 min-w-0 px-2.5 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600" />
                <button onClick={() => removeSem(i)}
                  className="text-stone-600 hover:text-red-400 transition-colors flex-shrink-0">
                  <Trash2 size={13} />
                </button>
              </div>
              <div>
                <p className="text-[10px] text-stone-600 mb-1.5">Subjects in this semester</p>
                <div className="flex flex-wrap gap-1.5">
                  {subjects.map(s => (
                    <button key={s.id} onClick={() => toggleSubInSem(i, s.id)}
                      className={['px-2 py-0.5 rounded text-[11px] transition-colors',
                        sem.subjectIds.includes(s.id) ? 'bg-veda-700 text-white' : 'bg-stone-800 text-stone-500 hover:bg-stone-700 hover:text-stone-300',
                      ].join(' ')}>
                      {s.shortTitle || s.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exam assignments */}
      <ChipPanel label="Exam Links"
        items={exams.map(e => ({ id: e.id, label: e.shortTitle || e.title }))}
        selected={course.examIds}
        onToggle={id => {
          const cur = course.examIds;
          onChange({ examIds: cur.includes(id) ? cur.filter(x => x !== id) : [...cur, id] });
        }} />
    </div>
  );
}

// ── Learning Path form ─────────────────────────────────────────────────

function PathForm({ path, exams, courses, onChange, onDelete }: {
  path: LearningPath;
  exams: Exam[];
  courses: Course[];
  onChange: (p: Partial<LearningPath>) => void;
  onDelete: () => void;
}) {
  function patchStep(i: number, p: Partial<PathStep>) {
    const steps = path.steps.map((s, idx) => idx === i ? { ...s, ...p } : s);
    onChange({ steps, totalMinutes: steps.reduce((acc, s) => acc + s.estimatedMinutes, 0) });
  }

  function addStep() {
    const step: PathStep = {
      order: path.steps.length + 1,
      type: 'topic', refId: '', label: 'New Step', estimatedMinutes: 30,
    };
    const steps = [...path.steps, step];
    onChange({ steps, totalMinutes: steps.reduce((acc, s) => acc + s.estimatedMinutes, 0) });
  }

  function removeStep(i: number) {
    const steps = path.steps.filter((_, idx) => idx !== i)
      .map((s, idx) => ({ ...s, order: idx + 1 }));
    onChange({ steps, totalMinutes: steps.reduce((acc, s) => acc + s.estimatedMinutes, 0) });
  }

  function moveStep(i: number, dir: 'up' | 'down') {
    const steps = [...path.steps];
    const j = dir === 'up' ? i - 1 : i + 1;
    if (j < 0 || j >= steps.length) return;
    [steps[i], steps[j]] = [steps[j], steps[i]];
    onChange({ steps: steps.map((s, idx) => ({ ...s, order: idx + 1 })) });
  }

  return (
    <div className="max-w-2xl space-y-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-stone-100">Edit Learning Path</h3>
          <p className="text-[11px] text-stone-600 font-mono mt-0.5">{path.id}</p>
        </div>
        <button onClick={onDelete}
          className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-red-400 border border-red-900/40 hover:bg-red-900/20 transition-colors">
          <Trash2 size={12} /> Delete
        </button>
      </div>

      <FText label="Title" value={path.title} onChange={v => onChange({ title: v, slug: toSlug(v) })} />
      <FText label="Slug" value={path.slug} onChange={v => onChange({ slug: v })} mono />
      <FArea label="Description" value={path.description} onChange={v => onChange({ description: v })} />

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-stone-400 mb-1.5">Difficulty</label>
          <select value={path.difficulty} onChange={e => onChange({ difficulty: e.target.value as Difficulty })}
            className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600">
            {DIFFICULTIES.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-stone-400 mb-1.5">Academic Level</label>
          <select value={path.academicLevel} onChange={e => onChange({ academicLevel: e.target.value as AcademicLevel })}
            className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600">
            {ACADEMIC_LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-stone-400 mb-1.5">Total Minutes</label>
          <input type="number" min={0} value={path.totalMinutes}
            onChange={e => onChange({ totalMinutes: Number(e.target.value) })}
            className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600" />
          <p className="text-[10px] text-stone-700 mt-1">Auto-recalculates from steps</p>
        </div>
        <FText label="Tags (comma-separated)" value={path.tags.join(', ')}
          onChange={v => onChange({ tags: v.split(',').map(x => x.trim()).filter(Boolean) })} />
      </div>

      {/* Steps */}
      <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-stone-800">
          <span className="text-xs font-semibold text-stone-300">
            Steps ({path.steps.length}) · {path.totalMinutes} min total
          </span>
          <button onClick={addStep}
            className="flex items-center gap-1 text-xs text-veda-400 hover:text-veda-300 transition-colors">
            <Plus size={12} /> Add Step
          </button>
        </div>
        {path.steps.length === 0 && (
          <p className="text-xs text-stone-700 text-center py-4">No steps — click Add Step</p>
        )}
        <div className="divide-y divide-stone-800/60">
          {path.steps.map((step, i) => (
            <div key={i} className="p-3 space-y-2">
              <div className="flex items-center gap-2">
                <GripVertical size={13} className="text-stone-700 flex-shrink-0" />
                <span className="text-[10px] font-mono text-stone-600 flex-shrink-0 w-5 text-center">{step.order}</span>
                <input type="text" value={step.label}
                  onChange={e => patchStep(i, { label: e.target.value })}
                  placeholder="Step label"
                  className="flex-1 min-w-0 px-2.5 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-xs focus:outline-none focus:ring-1 focus:ring-veda-600" />
                <div className="flex gap-0.5 flex-shrink-0">
                  <button onClick={() => moveStep(i, 'up')} disabled={i === 0}
                    className="p-1 text-stone-600 hover:text-stone-300 disabled:opacity-20 transition-colors">
                    <ArrowUp size={12} />
                  </button>
                  <button onClick={() => moveStep(i, 'down')} disabled={i === path.steps.length - 1}
                    className="p-1 text-stone-600 hover:text-stone-300 disabled:opacity-20 transition-colors">
                    <ArrowDown size={12} />
                  </button>
                  <button onClick={() => removeStep(i)}
                    className="p-1 text-stone-600 hover:text-red-400 transition-colors">
                    <Trash2 size={12} />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 pl-8">
                <div>
                  <label className="block text-[10px] text-stone-600 mb-1">Type</label>
                  <select value={step.type} onChange={e => patchStep(i, { type: e.target.value as PathStep['type'] })}
                    className="w-full px-2 py-1 rounded bg-stone-800 border border-stone-700 text-stone-200 text-xs focus:outline-none focus:ring-1 focus:ring-veda-600">
                    {STEP_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] text-stone-600 mb-1">Ref ID</label>
                  <input type="text" value={step.refId}
                    onChange={e => patchStep(i, { refId: e.target.value })}
                    placeholder="veda-topic-…"
                    className="w-full px-2 py-1 rounded bg-stone-800 border border-stone-700 text-stone-200 text-xs font-mono focus:outline-none focus:ring-1 focus:ring-veda-600" />
                </div>
                <div>
                  <label className="block text-[10px] text-stone-600 mb-1">Minutes</label>
                  <input type="number" min={1} value={step.estimatedMinutes}
                    onChange={e => patchStep(i, { estimatedMinutes: Number(e.target.value) })}
                    className="w-full px-2 py-1 rounded bg-stone-800 border border-stone-700 text-stone-200 text-xs focus:outline-none focus:ring-1 focus:ring-veda-600" />
                </div>
              </div>
              <div className="pl-8">
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={!!step.isOptional}
                    onChange={e => patchStep(i, { isOptional: e.target.checked })}
                    className="accent-veda-500 w-3.5 h-3.5" />
                  <span className="text-[11px] text-stone-500">Optional step</span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Goal Exams */}
      <ChipPanel label="Goal Exams"
        items={exams.map(e => ({ id: e.id, label: e.shortTitle || e.title }))}
        selected={path.goalExamIds}
        onToggle={id => {
          const cur = path.goalExamIds;
          onChange({ goalExamIds: cur.includes(id) ? cur.filter(x => x !== id) : [...cur, id] });
        }} />

      {/* Goal Courses */}
      <ChipPanel label="Goal Courses"
        items={courses.map(c => ({ id: c.id, label: c.shortTitle || c.title }))}
        selected={path.goalCourseIds}
        onToggle={id => {
          const cur = path.goalCourseIds;
          onChange({ goalCourseIds: cur.includes(id) ? cur.filter(x => x !== id) : [...cur, id] });
        }} />
    </div>
  );
}

// ── Primitives ─────────────────────────────────────────────────────────

function ChipPanel({ label, items, selected, onToggle }: {
  label: string;
  items: { id: string; label: string }[];
  selected: string[];
  onToggle: (id: string) => void;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-stone-400 mb-2">{label}</label>
      <div className="flex flex-wrap gap-2">
        {items.map(item => (
          <button key={item.id} onClick={() => onToggle(item.id)}
            className={['px-2.5 py-1 rounded-lg text-xs transition-colors',
              selected.includes(item.id) ? 'bg-veda-700 text-white' : 'bg-stone-800 text-stone-400 hover:bg-stone-700',
            ].join(' ')}>
            {item.label}
          </button>
        ))}
        {items.length === 0 && (
          <p className="text-xs text-stone-700 italic">None available</p>
        )}
      </div>
    </div>
  );
}

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

function FArea({ label, value, onChange }: {
  label: string; value: string; onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-stone-400 mb-1.5">{label}</label>
      <textarea rows={3} value={value} onChange={e => onChange(e.target.value)}
        className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600 resize-y" />
    </div>
  );
}
