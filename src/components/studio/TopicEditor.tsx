import { useState, useEffect } from 'react';
import { X, Plus, Trash2, Save } from 'lucide-react';
import { subjectRepo, topicRepo } from '../../repositories';
import type { DraftTopic } from '../../db/studio';
import type { Difficulty, AcademicLevel } from '../../models';
import { Button } from '../ui';
import { cn } from '../../utils/cn';

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_]+/g, '-').replace(/^-+|-+$/g, '');
}

function newId(slug: string): string {
  return `veda-topic-${slug}`;
}

interface Props {
  initial?: DraftTopic;
  onSave: (t: DraftTopic) => void;
  onCancel: () => void;
}

const DIFFICULTIES: Difficulty[] = ['beginner', 'intermediate', 'advanced', 'expert'];
const LEVELS: AcademicLevel[] = [
  'higher-secondary', 'undergraduate', 'postgraduate', 'competitive-exam', 'professional',
];

export function TopicEditor({ initial, onSave, onCancel }: Props) {
  const subjects = subjectRepo.getAll();
  const allTopics = topicRepo.getAll();

  const [title, setTitle] = useState(initial?.title ?? '');
  const [slug, setSlug] = useState(initial?.slug ?? '');
  const [description, setDescription] = useState(initial?.description ?? '');
  const [overview, setOverview] = useState(initial?.overview ?? '');
  const [difficulty, setDifficulty] = useState<Difficulty>(initial?.difficulty ?? 'intermediate');
  const [level, setLevel] = useState<AcademicLevel>(initial?.academicLevel ?? 'undergraduate');
  const [estimatedMinutes, setEstimatedMinutes] = useState(initial?.estimatedMinutes ?? 120);
  const [subjectIds, setSubjectIds] = useState<string[]>(initial?.subjectIds ?? []);
  const [prerequisiteIds, setPrereqIds] = useState<string[]>(initial?.prerequisiteIds ?? []);
  const [keyConcepts, setKeyConcepts] = useState<string[]>(initial?.keyConcepts ?? ['']);
  const [formulaHighlights, setFormulas] = useState<string[]>(initial?.formulaHighlights ?? ['']);
  const [examRelevance, setExamRelevance] = useState((initial?.examRelevance ?? []).join(', '));
  const [tags, setTags] = useState((initial?.tags ?? []).join(', '));
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (!initial) setSlug(slugify(title));
  }, [title, initial]);

  function toggleId(list: string[], id: string, set: (v: string[]) => void) {
    set(list.includes(id) ? list.filter(x => x !== id) : [...list, id]);
  }

  function validate(): boolean {
    const errs: string[] = [];
    if (!title.trim()) errs.push('Title is required');
    if (!slug.trim()) errs.push('Slug is required');
    if (!description.trim()) errs.push('Description is required');
    if (!overview.trim()) errs.push('Overview is required');
    if (subjectIds.length === 0) errs.push('At least one subject must be selected');
    if (keyConcepts.filter(c => c.trim()).length === 0) errs.push('At least one key concept is required');
    setErrors(errs);
    return errs.length === 0;
  }

  function handleSave() {
    if (!validate()) return;
    const concepts = keyConcepts.filter(c => c.trim());
    const formulas = formulaHighlights.filter(f => f.trim());
    const draft: DraftTopic = {
      _draft: true,
      _savedAt: new Date().toISOString(),
      id: initial?.id ?? newId(slug),
      slug,
      title: title.trim(),
      description: description.trim(),
      overview: overview.trim(),
      difficulty,
      academicLevel: level,
      estimatedMinutes,
      subjectIds,
      courseIds: initial?.courseIds ?? [],
      examIds: initial?.examIds ?? [],
      prerequisiteIds,
      relatedIds: initial?.relatedIds ?? [],
      leadToIds: initial?.leadToIds ?? [],
      keyConcepts: concepts,
      formulaHighlights: formulas.length > 0 ? formulas : undefined,
      examRelevance: examRelevance.split(',').map(s => s.trim()).filter(Boolean),
      tags: tags.split(',').map(s => s.trim()).filter(Boolean),
      updatedAt: new Date().toISOString().slice(0, 10),
    };
    onSave(draft);
  }

  function listEditor(
    items: string[],
    setItems: (v: string[]) => void,
    placeholder: string
  ) {
    return (
      <div className="space-y-1.5">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2">
            <input
              className="flex-1 px-2.5 py-1.5 rounded border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-veda-500"
              value={item}
              placeholder={placeholder}
              onChange={e => { const n = [...items]; n[i] = e.target.value; setItems(n); }}
            />
            <button
              type="button"
              onClick={() => setItems(items.filter((_, j) => j !== i))}
              className="p-1.5 text-stone-400 hover:text-red-500"
              aria-label="Remove"
            >
              <Trash2 size={13} />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => setItems([...items, ''])}
          className="flex items-center gap-1 text-xs text-veda-700 dark:text-veda-400 hover:underline"
        >
          <Plus size={11} /> Add item
        </button>
      </div>
    );
  }

  const inputCls = 'w-full px-3 py-2 rounded border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-veda-500';
  const labelCls = 'block text-xs font-semibold text-stone-600 dark:text-stone-400 mb-1 uppercase tracking-wide';
  const sectionCls = 'bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4 space-y-4';

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-stone-900 dark:text-stone-100">
          {initial ? 'Edit Draft Topic' : 'New Topic'}
        </h2>
        <button onClick={onCancel} className="p-1 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300">
          <X size={16} />
        </button>
      </div>

      {errors.length > 0 && (
        <div className="rounded-md bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-3">
          <ul className="list-disc list-inside text-xs text-red-700 dark:text-red-400 space-y-0.5">
            {errors.map(e => <li key={e}>{e}</li>)}
          </ul>
        </div>
      )}

      {/* Core fields */}
      <div className={sectionCls}>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-stone-500">Identity</h3>
        <div>
          <label className={labelCls}>Title *</label>
          <input className={inputCls} value={title} onChange={e => setTitle(e.target.value)} placeholder="e.g. Fourier Series" />
        </div>
        <div>
          <label className={labelCls}>Slug *</label>
          <input className={cn(inputCls, 'font-mono text-xs')} value={slug} onChange={e => setSlug(slugify(e.target.value))} placeholder="auto-generated" />
          <p className="text-xs text-stone-400 mt-0.5">ID: <span className="font-mono">{newId(slug)}</span></p>
        </div>
        <div>
          <label className={labelCls}>Short description *</label>
          <textarea className={cn(inputCls, 'resize-none h-16')} value={description} onChange={e => setDescription(e.target.value)} placeholder="1–2 sentences describing the topic" />
        </div>
        <div>
          <label className={labelCls}>Overview *</label>
          <textarea className={cn(inputCls, 'resize-none h-28')} value={overview} onChange={e => setOverview(e.target.value)} placeholder="Detailed paragraph for the topic overview section" />
        </div>
      </div>

      {/* Taxonomy */}
      <div className={sectionCls}>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-stone-500">Taxonomy</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Difficulty</label>
            <select className={inputCls} value={difficulty} onChange={e => setDifficulty(e.target.value as Difficulty)}>
              {DIFFICULTIES.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls}>Academic level</label>
            <select className={inputCls} value={level} onChange={e => setLevel(e.target.value as AcademicLevel)}>
              {LEVELS.map(l => <option key={l} value={l}>{l.replace(/-/g, ' ')}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls}>Est. minutes</label>
            <input type="number" min={10} max={600} className={inputCls} value={estimatedMinutes} onChange={e => setEstimatedMinutes(Number(e.target.value))} />
          </div>
          <div>
            <label className={labelCls}>Exam relevance</label>
            <input className={inputCls} value={examRelevance} onChange={e => setExamRelevance(e.target.value)} placeholder="GATE ME, UPSC ESE" />
          </div>
        </div>
        <div>
          <label className={labelCls}>Tags</label>
          <input className={inputCls} value={tags} onChange={e => setTags(e.target.value)} placeholder="comma-separated tags" />
        </div>
      </div>

      {/* Subjects */}
      <div className={sectionCls}>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-stone-500">Subjects *</h3>
        <div className="flex flex-wrap gap-2">
          {subjects.map(s => (
            <label key={s.id} className={cn(
              'flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs cursor-pointer transition-colors',
              subjectIds.includes(s.id)
                ? 'bg-veda-700 text-white border-veda-700 dark:bg-veda-500 dark:border-veda-500'
                : 'border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800'
            )}>
              <input type="checkbox" className="sr-only" checked={subjectIds.includes(s.id)} onChange={() => toggleId(subjectIds, s.id, setSubjectIds)} />
              {s.shortTitle}
            </label>
          ))}
        </div>
      </div>

      {/* Prerequisites */}
      <div className={sectionCls}>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-stone-500">Prerequisites</h3>
        <div className="max-h-36 overflow-y-auto space-y-1">
          {allTopics.filter(t => t.id !== (initial?.id ?? '')).map(t => (
            <label key={t.id} className="flex items-center gap-2 text-xs text-stone-700 dark:text-stone-300 cursor-pointer">
              <input type="checkbox" checked={prerequisiteIds.includes(t.id)} onChange={() => toggleId(prerequisiteIds, t.id, setPrereqIds)} className="rounded" />
              {t.title}
            </label>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={sectionCls}>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-stone-500">Content</h3>
        <div>
          <label className={labelCls}>Key concepts *</label>
          {listEditor(keyConcepts, setKeyConcepts, 'e.g. Newton\'s First Law')}
        </div>
        <div>
          <label className={labelCls}>Formula highlights</label>
          {listEditor(formulaHighlights, setFormulas, 'e.g. F = ma')}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button variant="primary" size="sm" onClick={handleSave}>
          <Save size={13} /> Save draft
        </Button>
        <Button variant="ghost" size="sm" onClick={onCancel}>Cancel</Button>
      </div>
    </div>
  );
}
