import { useState } from 'react';
import { X, Save } from 'lucide-react';
import { topicRepo } from '../../repositories';
import type { DraftQuestion } from '../../db/studio';
import type { Difficulty } from '../../models';
import { Button } from '../ui';
import { cn } from '../../utils/cn';

const DIFFICULTIES: Difficulty[] = ['beginner', 'intermediate', 'advanced', 'expert'];

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_]+/g, '-').replace(/^-+|-+$/g, '');
}

interface Props {
  initial?: DraftQuestion;
  defaultTopicId?: string;
  onSave: (q: DraftQuestion) => void;
  onCancel: () => void;
}

export function QuestionEditor({ initial, defaultTopicId, onSave, onCancel }: Props) {
  const topics = topicRepo.getAll();

  const [topicId, setTopicId] = useState(initial?.topicIds[0] ?? defaultTopicId ?? '');
  const [text, setText] = useState(initial?.text ?? '');
  const [options, setOptions] = useState<string[]>(initial?.options ?? ['', '', '', '']);
  const [correctIndex, setCorrectIndex] = useState<number>(initial?.correctIndex ?? 0);
  const [explanation, setExplanation] = useState(initial?.explanation ?? '');
  const [difficulty, setDifficulty] = useState<Difficulty>(initial?.difficulty ?? 'intermediate');
  const [year, setYear] = useState(initial?.year?.toString() ?? '');
  const [source, setSource] = useState(initial?.source ?? '');
  const [tags, setTags] = useState((initial?.tags ?? []).join(', '));
  const [errors, setErrors] = useState<string[]>([]);

  function validate(): boolean {
    const errs: string[] = [];
    if (!topicId) errs.push('Topic is required');
    if (!text.trim()) errs.push('Question text is required');
    if (options.filter(o => o.trim()).length < 2) errs.push('At least 2 options are required');
    if (!explanation.trim()) errs.push('Explanation is required');
    setErrors(errs);
    return errs.length === 0;
  }

  function handleSave() {
    if (!validate()) return;
    const topic = topicRepo.getById(topicId);
    const filledOptions = options.filter(o => o.trim());
    const textSlug = slugify(text.slice(0, 40));
    const draft: DraftQuestion = {
      _draft: true,
      _savedAt: new Date().toISOString(),
      id: initial?.id ?? `veda-question-${topicId.replace('veda-topic-', '')}-${Date.now()}`,
      slug: initial?.slug ?? textSlug,
      text: text.trim(),
      type: 'mcq',
      options: filledOptions,
      correctIndex,
      explanation: explanation.trim(),
      topicIds: [topicId],
      subjectIds: topic?.subjectIds ?? [],
      examIds: initial?.examIds ?? [],
      difficulty,
      year: year ? Number(year) : undefined,
      source: source.trim() || undefined,
      tags: tags.split(',').map(s => s.trim()).filter(Boolean),
    };
    onSave(draft);
  }

  const inputCls = 'w-full px-3 py-2 rounded border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-veda-500';
  const labelCls = 'block text-xs font-semibold text-stone-600 dark:text-stone-400 mb-1 uppercase tracking-wide';
  const sectionCls = 'bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4 space-y-4';

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-stone-900 dark:text-stone-100">
          {initial ? 'Edit Draft Question' : 'New Question'}
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

      {/* Topic & Meta */}
      <div className={sectionCls}>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-stone-500">Classification</h3>
        <div>
          <label className={labelCls}>Topic *</label>
          <select className={inputCls} value={topicId} onChange={e => setTopicId(e.target.value)}>
            <option value="">Select a topic…</option>
            {topics.map(t => <option key={t.id} value={t.id}>{t.title}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelCls}>Difficulty</label>
            <select className={inputCls} value={difficulty} onChange={e => setDifficulty(e.target.value as Difficulty)}>
              {DIFFICULTIES.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <div>
            <label className={labelCls}>Year (optional)</label>
            <input type="number" className={inputCls} value={year} onChange={e => setYear(e.target.value)} placeholder="2023" min={1990} max={2030} />
          </div>
        </div>
        <div>
          <label className={labelCls}>Source (optional)</label>
          <input className={inputCls} value={source} onChange={e => setSource(e.target.value)} placeholder="GATE 2023, UPSC ESE 2022…" />
        </div>
        <div>
          <label className={labelCls}>Tags</label>
          <input className={inputCls} value={tags} onChange={e => setTags(e.target.value)} placeholder="comma-separated" />
        </div>
      </div>

      {/* Question text */}
      <div className={sectionCls}>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-stone-500">Question</h3>
        <div>
          <label className={labelCls}>Question text *</label>
          <textarea className={cn(inputCls, 'resize-none h-24')} value={text} onChange={e => setText(e.target.value)} placeholder="Write the full question here…" />
        </div>
      </div>

      {/* Options */}
      <div className={sectionCls}>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-stone-500">Options & Answer</h3>
        <p className="text-xs text-stone-400">Select the radio button on the left to mark the correct answer.</p>
        {options.map((opt, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              type="radio"
              name="correct"
              checked={correctIndex === i}
              onChange={() => setCorrectIndex(i)}
              className="accent-veda-600"
            />
            <span className="text-xs font-medium text-stone-500 w-5">{String.fromCharCode(65 + i)}.</span>
            <input
              className="flex-1 px-2.5 py-1.5 rounded border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-veda-500"
              value={opt}
              onChange={e => { const n = [...options]; n[i] = e.target.value; setOptions(n); }}
              placeholder={`Option ${String.fromCharCode(65 + i)}`}
            />
          </div>
        ))}
      </div>

      {/* Explanation */}
      <div className={sectionCls}>
        <h3 className="text-xs font-semibold uppercase tracking-wide text-stone-500">Explanation</h3>
        <textarea className={cn(inputCls, 'resize-none h-20')} value={explanation} onChange={e => setExplanation(e.target.value)} placeholder="Explain why the correct answer is correct…" />
      </div>

      <div className="flex gap-3">
        <Button variant="primary" size="sm" onClick={handleSave}>
          <Save size={13} /> Save draft
        </Button>
        <Button variant="ghost" size="sm" onClick={onCancel}>Cancel</Button>
      </div>
    </div>
  );
}
