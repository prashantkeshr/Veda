import { useState, useEffect, useRef } from 'react';
import type { Question, QuestionType, Difficulty } from '../../models';
import { questionRepo, topicRepo, subjectRepo, examRepo } from '../../repositories';
import {
  Plus, Trash2, Save, RotateCcw, Upload, FileJson,
  CheckCircle2, AlertCircle, ChevronDown, ChevronUp,
} from 'lucide-react';

const DRAFT_KEY = 'vk-draft-questions';

function toSlug(s: string) {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80);
}

const Q_TYPES: QuestionType[] = ['mcq', 'numerical', 'short-answer', 'true-false'];
const DIFFICULTIES: Difficulty[] = ['beginner', 'intermediate', 'advanced', 'expert'];

const TYPE_COLOR: Record<QuestionType, string> = {
  'mcq':          'bg-veda-900/40 text-veda-300',
  'numerical':    'bg-amber-900/40 text-amber-300',
  'short-answer': 'bg-blue-900/40 text-blue-300',
  'true-false':   'bg-teal-900/40 text-teal-300',
};

type ImportState = {
  filename: string;
  items: Question[];
  mode: 'merge' | 'replace';
} | null;

// ── Main ───────────────────────────────────────────────────────────────

export function KendraQuestions() {
  const [questions,   setQuestions]   = useState<Question[]>([]);
  const [selected,    setSelected]    = useState<string | null>(null);
  const [search,      setSearch]      = useState('');
  const [filterType,  setFilterType]  = useState<QuestionType | 'all'>('all');
  const [isDirty,     setIsDirty]     = useState(false);
  const [flash,       setFlash]       = useState(false);
  const [hasDraft,    setHasDraft]    = useState(false);
  const [importState, setImportState] = useState<ImportState>(null);
  const [confirm,     setConfirm]     = useState<string | null>(null);
  const [dropActive,  setDropActive]  = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const topics   = topicRepo.getAll();
  const subjects = subjectRepo.getAll();
  const exams    = examRepo.getAll();

  useEffect(() => {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (raw) {
        setQuestions(JSON.parse(raw) as Question[]);
        setIsDirty(true);
        setHasDraft(true);
      } else {
        setQuestions(questionRepo.getAll());
      }
    } catch {
      setQuestions(questionRepo.getAll());
    }
  }, []);

  // ── Persistence ────────────────────────────────────────────────────

  function saveDraft() {
    try {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(questions));
      setIsDirty(false);
      setHasDraft(true);
      setFlash(true);
      setTimeout(() => setFlash(false), 2000);
    } catch { /* storage full */ }
  }

  function discardDraft() {
    localStorage.removeItem(DRAFT_KEY);
    setQuestions(questionRepo.getAll());
    setSelected(null);
    setIsDirty(false);
    setHasDraft(false);
  }

  // ── Mutations ──────────────────────────────────────────────────────

  function patch(id: string, p: Partial<Question>) {
    setQuestions(prev => prev.map(q => q.id === id ? { ...q, ...p } : q));
    setIsDirty(true);
  }

  function addQuestion() {
    const id = `veda-q-${Date.now()}`;
    const q: Question = {
      id, slug: 'new-question', text: 'New Question', type: 'mcq',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctIndex: 0, explanation: '',
      topicIds: [], subjectIds: [], examIds: [],
      difficulty: 'intermediate', tags: [],
    };
    setQuestions(p => [q, ...p]);
    setSelected(id);
    setIsDirty(true);
  }

  function deleteQuestion(id: string) {
    setQuestions(p => p.filter(q => q.id !== id));
    if (selected === id) setSelected(null);
    setConfirm(null);
    setIsDirty(true);
  }

  // ── Import ─────────────────────────────────────────────────────────

  function handleFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result as string);
        const arr: Question[] = Array.isArray(parsed) ? parsed : [parsed];
        if (arr.length) setImportState({ filename: file.name, items: arr, mode: 'merge' });
      } catch { /* bad JSON */ }
    };
    reader.readAsText(file);
  }

  function applyImport() {
    if (!importState) return;
    const { items, mode } = importState;
    setQuestions(prev => {
      if (mode === 'replace') return items;
      const map = new Map(prev.map(q => [q.id, q]));
      items.forEach(q => map.set(q.id, q));
      return Array.from(map.values());
    });
    setImportState(null);
    setIsDirty(true);
  }

  // ── Filtered list ──────────────────────────────────────────────────

  const q = search.toLowerCase();
  const filtered = questions.filter(q2 => {
    if (filterType !== 'all' && q2.type !== filterType) return false;
    if (q && !q2.text.toLowerCase().includes(q) && !q2.tags.some(t => t.toLowerCase().includes(q))) return false;
    return true;
  });

  const selQ = questions.find(q => q.id === selected) ?? null;

  // health counts for header chips
  const missingAnswer  = questions.filter(q => q.type === 'mcq' && q.correctIndex === undefined).length;
  const missingExplain = questions.filter(q => !q.explanation || q.explanation.trim().length < 5).length;

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

      {/* ─── Left panel ───────────────────────────────────────────── */}
      <aside className="w-80 flex-shrink-0 border-r border-stone-800 flex flex-col overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-3 py-2.5 border-b border-stone-800 flex-shrink-0">
          <span className="text-xs font-semibold text-stone-300">
            Questions <span className="text-stone-600 font-normal">({questions.length})</span>
          </span>
          <div className="flex items-center gap-1">
            {missingAnswer > 0 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-900/40 text-red-300 font-medium">
                {missingAnswer} MCQ no ans
              </span>
            )}
            {missingExplain > 0 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-900/40 text-amber-300 font-medium">
                {missingExplain} no explain
              </span>
            )}
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 px-3 py-2 border-b border-stone-800 flex-shrink-0">
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search questions…"
            className="flex-1 min-w-0 px-2.5 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 placeholder-stone-600 text-xs focus:outline-none focus:ring-1 focus:ring-veda-600"
          />
          <button onClick={() => fileRef.current?.click()} title="Import JSON"
            className="p-1.5 rounded-lg text-stone-500 hover:text-veda-400 hover:bg-stone-800 transition-colors flex-shrink-0">
            <Upload size={14} />
          </button>
          <button onClick={addQuestion} title="Add question"
            className="p-1.5 rounded-lg text-stone-500 hover:text-veda-400 hover:bg-stone-800 transition-colors flex-shrink-0">
            <Plus size={14} />
          </button>
          <input ref={fileRef} type="file" accept=".json" className="hidden"
            onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); e.target.value = ''; }} />
        </div>

        {/* Type filter */}
        <div className="flex gap-1 px-3 py-2 border-b border-stone-800 flex-wrap flex-shrink-0">
          {(['all', ...Q_TYPES] as const).map(t => (
            <button key={t}
              onClick={() => setFilterType(t)}
              className={[
                'px-2 py-0.5 rounded text-[10px] font-medium capitalize transition-colors',
                filterType === t ? 'bg-veda-700 text-white' : 'bg-stone-800 text-stone-500 hover:text-stone-300',
              ].join(' ')}>
              {t}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto">
          {filtered.map(q => (
            <button key={q.id} onClick={() => setSelected(q.id)}
              className={[
                'w-full flex items-start gap-2 px-3 py-2.5 text-left border-b border-stone-800/50 transition-colors',
                selected === q.id ? 'bg-veda-900/40' : 'hover:bg-stone-800/30',
              ].join(' ')}>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-stone-200 line-clamp-2 leading-relaxed">{q.text}</p>
                <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                  <span className={['text-[10px] px-1.5 py-0.5 rounded font-medium', TYPE_COLOR[q.type]].join(' ')}>
                    {q.type}
                  </span>
                  <span className="text-[10px] text-stone-600 capitalize">{q.difficulty}</span>
                  {q.year && <span className="text-[10px] text-stone-700">{q.year}</span>}
                  {q.type === 'mcq' && q.correctIndex === undefined && (
                    <span className="text-[10px] text-red-400">no answer</span>
                  )}
                  {(!q.explanation || q.explanation.trim().length < 5) && (
                    <span className="text-[10px] text-amber-500">no explain</span>
                  )}
                </div>
              </div>
            </button>
          ))}
          {filtered.length === 0 && (
            <p className="text-xs text-stone-600 text-center py-8">No questions match</p>
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

      {/* ─── Right edit panel ──────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto p-6">
        {!selQ && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <FileJson size={32} className="text-stone-700 mb-3" />
            <p className="text-sm text-stone-500">Select a question to edit</p>
            <p className="text-xs text-stone-700 mt-1">or drag &amp; drop a .json file to import</p>
          </div>
        )}
        {selQ && (
          <QuestionForm
            question={selQ}
            topics={topics}
            subjects={subjects}
            exams={exams}
            onChange={p => patch(selQ.id, p)}
            onDelete={() => setConfirm(selQ.id)}
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
                <p className="text-sm font-bold text-stone-100">Import Questions</p>
                <p className="text-xs text-stone-500 truncate">{importState.filename}</p>
              </div>
            </div>
            <div className="bg-stone-800 rounded-lg px-4 py-3 mb-4">
              <p className="text-xs text-stone-300">
                <span className="font-semibold text-veda-300">{importState.items.length}</span> questions detected
              </p>
            </div>
            <div className="space-y-2 mb-5">
              {(['merge', 'replace'] as const).map(m => (
                <label key={m} className="flex items-start gap-2.5 cursor-pointer">
                  <input type="radio" name="import-mode-q" value={m}
                    checked={importState.mode === m}
                    onChange={() => setImportState(s => s ? { ...s, mode: m } : s)}
                    className="mt-0.5 accent-veda-500" />
                  <div>
                    <p className="text-xs font-medium text-stone-200 capitalize">{m}</p>
                    <p className="text-[11px] text-stone-500">
                      {m === 'merge' ? 'Add / update by ID' : 'Replace ALL questions'}
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
              <h3 className="text-sm font-bold text-stone-100">Delete Question?</h3>
            </div>
            <p className="text-sm text-stone-400 mb-5 leading-relaxed">
              Removed from draft. Use "Discard draft" to restore original data.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setConfirm(null)}
                className="flex-1 py-2 rounded-lg border border-stone-700 text-stone-300 text-sm hover:bg-stone-800 transition-colors">
                Cancel
              </button>
              <button onClick={() => deleteQuestion(confirm)}
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

// ── Question form ──────────────────────────────────────────────────────

import type { Topic, Subject, Exam } from '../../models';

function QuestionForm({ question, topics, subjects, exams, onChange, onDelete }: {
  question: Question;
  topics: Topic[];
  subjects: Subject[];
  exams: Exam[];
  onChange: (p: Partial<Question>) => void;
  onDelete: () => void;
}) {
  const [optOpen, setOptOpen] = useState(true);

  function setType(t: QuestionType) {
    const patch: Partial<Question> = { type: t };
    if (t === 'mcq') {
      patch.options = question.options ?? ['Option A', 'Option B', 'Option C', 'Option D'];
      patch.correctIndex = question.correctIndex ?? 0;
      patch.correctAnswer = undefined;
    } else if (t === 'true-false') {
      patch.options = undefined;
      patch.correctIndex = undefined;
      patch.correctAnswer = question.correctAnswer ?? 'true';
    } else {
      patch.options = undefined;
      patch.correctIndex = undefined;
    }
    onChange(patch);
  }

  function setOption(i: number, val: string) {
    const opts = [...(question.options ?? [])];
    opts[i] = val;
    onChange({ options: opts });
  }

  function addOption() {
    onChange({ options: [...(question.options ?? []), `Option ${(question.options?.length ?? 0) + 1}`] });
  }

  function removeOption(i: number) {
    const opts = (question.options ?? []).filter((_, idx) => idx !== i);
    const ci = question.correctIndex;
    onChange({
      options: opts,
      correctIndex: ci === undefined ? undefined : ci >= opts.length ? opts.length - 1 : ci,
    });
  }

  function toggleId(field: 'topicIds' | 'subjectIds' | 'examIds', id: string) {
    const cur = question[field];
    onChange({ [field]: cur.includes(id) ? cur.filter(x => x !== id) : [...cur, id] });
  }

  const hasAnswerIssue = question.type === 'mcq' && question.correctIndex === undefined;
  const hasExplainIssue = !question.explanation || question.explanation.trim().length < 5;

  return (
    <div className="max-w-2xl space-y-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-stone-100">Edit Question</h3>
          <p className="text-[11px] text-stone-600 font-mono mt-0.5">{question.id}</p>
        </div>
        <button onClick={onDelete}
          className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-red-400 border border-red-900/40 hover:bg-red-900/20 transition-colors">
          <Trash2 size={12} /> Delete
        </button>
      </div>

      {/* Health alerts */}
      {(hasAnswerIssue || hasExplainIssue) && (
        <div className="space-y-1.5">
          {hasAnswerIssue && (
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-900/20 border border-red-900/40">
              <AlertCircle size={13} className="text-red-400 flex-shrink-0" />
              <p className="text-xs text-red-300">MCQ question has no correct answer set</p>
            </div>
          )}
          {hasExplainIssue && (
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-900/20 border border-amber-900/40">
              <AlertCircle size={13} className="text-amber-400 flex-shrink-0" />
              <p className="text-xs text-amber-300">Explanation is missing or too short</p>
            </div>
          )}
        </div>
      )}

      {/* Question text */}
      <div>
        <label className="block text-xs font-medium text-stone-400 mb-1.5">Question Text</label>
        <textarea rows={3}
          value={question.text}
          onChange={e => onChange({ text: e.target.value, slug: toSlug(e.target.value) })}
          className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600 resize-y"
        />
      </div>

      {/* Type + Difficulty */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-stone-400 mb-1.5">Type</label>
          <select value={question.type} onChange={e => setType(e.target.value as QuestionType)}
            className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600">
            {Q_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-stone-400 mb-1.5">Difficulty</label>
          <select value={question.difficulty} onChange={e => onChange({ difficulty: e.target.value as Difficulty })}
            className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600">
            {DIFFICULTIES.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
      </div>

      {/* MCQ Options */}
      {question.type === 'mcq' && (
        <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden">
          <button
            onClick={() => setOptOpen(o => !o)}
            className="w-full flex items-center justify-between px-4 py-3 text-xs font-semibold text-stone-300 hover:bg-stone-800/50 transition-colors">
            <span>Answer Options ({question.options?.length ?? 0})</span>
            {optOpen ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </button>
          {optOpen && (
            <div className="px-4 pb-4 space-y-2">
              {(question.options ?? []).map((opt, i) => (
                <div key={i} className="flex items-center gap-2">
                  <input type="radio" name={`correct-${question.id}`}
                    checked={question.correctIndex === i}
                    onChange={() => onChange({ correctIndex: i })}
                    className="accent-veda-500 flex-shrink-0" title="Mark as correct" />
                  <input type="text" value={opt}
                    onChange={e => setOption(i, e.target.value)}
                    className={[
                      'flex-1 min-w-0 px-3 py-1.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-veda-600',
                      question.correctIndex === i
                        ? 'bg-veda-900/30 border border-veda-700/50 text-veda-100'
                        : 'bg-stone-800 border border-stone-700 text-stone-100',
                    ].join(' ')} />
                  <button onClick={() => removeOption(i)} disabled={(question.options?.length ?? 0) <= 2}
                    className="p-1 text-stone-600 hover:text-red-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex-shrink-0">
                    <Trash2 size={12} />
                  </button>
                </div>
              ))}
              {(question.options?.length ?? 0) < 6 && (
                <button onClick={addOption}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-stone-500 hover:text-veda-400 hover:bg-stone-800 rounded-lg transition-colors mt-1">
                  <Plus size={12} /> Add option
                </button>
              )}
              {question.correctIndex === undefined && (
                <p className="text-[11px] text-red-400 mt-1">Select the correct option using the radio button</p>
              )}
            </div>
          )}
        </div>
      )}

      {/* True / False */}
      {question.type === 'true-false' && (
        <div>
          <label className="block text-xs font-medium text-stone-400 mb-1.5">Correct Answer</label>
          <div className="flex gap-3">
            {(['true', 'false'] as const).map(v => (
              <label key={v} className={[
                'flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border cursor-pointer text-sm font-medium transition-colors capitalize',
                question.correctAnswer === v
                  ? 'bg-veda-900/40 border-veda-700 text-veda-300'
                  : 'bg-stone-800 border-stone-700 text-stone-400 hover:border-stone-600',
              ].join(' ')}>
                <input type="radio" name={`tf-${question.id}`} value={v}
                  checked={question.correctAnswer === v}
                  onChange={() => onChange({ correctAnswer: v })}
                  className="sr-only" />
                {v}
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Numerical / Short-answer */}
      {(question.type === 'numerical' || question.type === 'short-answer') && (
        <div>
          <label className="block text-xs font-medium text-stone-400 mb-1.5">
            Correct Answer {question.type === 'numerical' ? '(number or range, e.g. 4.5 or 4–5)' : ''}
          </label>
          <input type="text" value={question.correctAnswer ?? ''}
            onChange={e => onChange({ correctAnswer: e.target.value || undefined })}
            className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600" />
        </div>
      )}

      {/* Explanation */}
      <div>
        <label className="block text-xs font-medium text-stone-400 mb-1.5">Explanation</label>
        <textarea rows={4}
          value={question.explanation}
          onChange={e => onChange({ explanation: e.target.value })}
          placeholder="Explain why the answer is correct…"
          className={[
            'w-full px-3 py-2 rounded-lg border text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600 resize-y',
            hasExplainIssue ? 'bg-amber-900/10 border-amber-900/40' : 'bg-stone-800 border-stone-700',
          ].join(' ')} />
      </div>

      {/* Meta */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-stone-400 mb-1.5">Year</label>
          <input type="number" min={1980} max={2099} value={question.year ?? ''}
            onChange={e => onChange({ year: e.target.value ? Number(e.target.value) : undefined })}
            className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600" />
        </div>
        <div>
          <label className="block text-xs font-medium text-stone-400 mb-1.5">Source</label>
          <input type="text" value={question.source ?? ''}
            onChange={e => onChange({ source: e.target.value || undefined })}
            className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600" />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-stone-400 mb-1.5">Tags (comma-separated)</label>
        <input type="text" value={question.tags.join(', ')}
          onChange={e => onChange({ tags: e.target.value.split(',').map(x => x.trim()).filter(Boolean) })}
          className="w-full px-3 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-veda-600" />
      </div>

      {/* Topic assignments */}
      <AssignPanel
        label="Topics"
        items={topics.map(t => ({ id: t.id, label: t.title }))}
        selected={question.topicIds}
        onToggle={id => toggleId('topicIds', id)}
      />

      {/* Subject assignments */}
      <AssignPanel
        label="Subjects"
        items={subjects.map(s => ({ id: s.id, label: s.shortTitle || s.title }))}
        selected={question.subjectIds}
        onToggle={id => toggleId('subjectIds', id)}
      />

      {/* Exam assignments */}
      <AssignPanel
        label="Exams"
        items={exams.map(e => ({ id: e.id, label: e.shortTitle || e.title }))}
        selected={question.examIds}
        onToggle={id => toggleId('examIds', id)}
      />
    </div>
  );
}

// ── Generic chip-assign panel ──────────────────────────────────────────

function AssignPanel({ label, items, selected, onToggle }: {
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
          <p className="text-xs text-stone-700 italic">No {label.toLowerCase()} available</p>
        )}
      </div>
    </div>
  );
}
