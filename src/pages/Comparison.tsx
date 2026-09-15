import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { Scale, ArrowLeftRight, ArrowRight, Hash } from 'lucide-react';
import { topicRepo, subjectRepo, examRepo } from '../repositories';
import type { Topic } from '../models';
import { cn } from '../utils/cn';
import { difficultyLabel, formatMinutes } from '../utils/format';

// ── Helpers ────────────────────────────────────────────────────────────────

function strIntersect(a: string[], b: string[]): Set<string> {
  const sb = new Set(b);
  return new Set(a.filter(x => sb.has(x)));
}

const DIFF_ORDER: Record<string, number> = {
  beginner: 0, intermediate: 1, advanced: 2, expert: 3,
};

const DIFF_COLORS: Record<string, string> = {
  beginner:     'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  intermediate: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  advanced:     'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  expert:       'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
};

// ── Selectors ──────────────────────────────────────────────────────────────

interface SelectorProps {
  label: string;
  subjectId: string;
  topicId: string;
  excludeTopicId: string;
  onSubject: (id: string) => void;
  onTopic: (id: string) => void;
}

function TopicSelector({ label, subjectId, topicId, excludeTopicId, onSubject, onTopic }: SelectorProps) {
  const allSubjects = useMemo(() => subjectRepo.getAll(), []);
  const allTopics   = useMemo(() => topicRepo.getAll(), []);

  const filtered = (subjectId
    ? allTopics.filter(t => t.subjectIds.includes(subjectId))
    : allTopics
  ).filter(t => t.id !== excludeTopicId);

  return (
    <div className="space-y-2 flex-1 min-w-0">
      <p className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wide">{label}</p>
      <select
        value={subjectId}
        onChange={e => { onSubject(e.target.value); onTopic(''); }}
        className="w-full px-2.5 py-2 text-xs rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 focus:outline-none focus:ring-2 focus:ring-veda-600/30"
      >
        <option value="">All Subjects</option>
        {allSubjects.map(s => <option key={s.id} value={s.id}>{s.shortTitle}</option>)}
      </select>
      <select
        value={topicId}
        onChange={e => onTopic(e.target.value)}
        className="w-full px-2.5 py-2 text-sm rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 focus:outline-none focus:ring-2 focus:ring-veda-600/30"
      >
        <option value="">Select a topic…</option>
        {filtered.map(t => <option key={t.id} value={t.id}>{t.title}</option>)}
      </select>
    </div>
  );
}

// ── Comparison section ─────────────────────────────────────────────────────

function CompareRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-2">
        {label}
      </p>
      <div className="grid grid-cols-2 gap-3">
        {children}
      </div>
    </div>
  );
}

function Cell({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('p-3 rounded-xl border border-stone-100 dark:border-stone-800 bg-white dark:bg-stone-900 min-h-[48px]', className)}>
      {children}
    </div>
  );
}

function TagList({ items, shared }: { items: string[]; shared: Set<string> }) {
  const MAX = 8;
  const visible = items.slice(0, MAX);
  const extra   = items.length - MAX;
  return (
    <div className="flex flex-wrap gap-1">
      {visible.map(item => (
        <span
          key={item}
          className={cn(
            'text-[10px] px-1.5 py-0.5 rounded font-medium',
            shared.has(item)
              ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300'
              : 'bg-stone-100 text-stone-500 dark:bg-stone-800 dark:text-stone-400'
          )}
        >
          {item}
        </span>
      ))}
      {extra > 0 && (
        <span className="text-[10px] text-stone-300 dark:text-stone-600 px-1">+{extra} more</span>
      )}
    </div>
  );
}

function ExamList({ examIds, shared }: { examIds: string[]; shared: Set<string> }) {
  if (examIds.length === 0) return <span className="text-xs text-stone-300 dark:text-stone-600">—</span>;
  return (
    <div className="flex flex-wrap gap-1">
      {examIds.map(id => {
        const exam = examRepo.getById(id);
        if (!exam) return null;
        return (
          <span
            key={id}
            className={cn(
              'text-[10px] px-1.5 py-0.5 rounded font-medium',
              shared.has(id)
                ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300'
                : 'bg-stone-100 text-stone-500 dark:bg-stone-800 dark:text-stone-400'
            )}
          >
            {exam.shortTitle}
          </span>
        );
      })}
    </div>
  );
}

function PrereqList({ prereqIds, shared }: { prereqIds: string[]; shared: Set<string> }) {
  if (prereqIds.length === 0) return <span className="text-xs text-stone-300 dark:text-stone-600">None</span>;
  return (
    <div className="flex flex-col gap-1">
      {prereqIds.map(id => {
        const topic = topicRepo.getById(id);
        if (!topic) return null;
        return (
          <Link
            key={id}
            to={`/topics/${topic.slug}`}
            className={cn(
              'text-xs flex items-center gap-1 hover:underline',
              shared.has(id)
                ? 'text-amber-700 dark:text-amber-300 font-medium'
                : 'text-stone-500 dark:text-stone-400'
            )}
          >
            <Hash size={9} className="flex-shrink-0" />
            {topic.title}
          </Link>
        );
      })}
    </div>
  );
}

function SimilarityBadge({ topicA, topicB }: { topicA: Topic; topicB: Topic }) {
  const sharedConcepts = strIntersect(topicA.keyConcepts, topicB.keyConcepts);
  const allConcepts    = new Set([...topicA.keyConcepts, ...topicB.keyConcepts]);
  const jaccard = allConcepts.size > 0
    ? Math.round((sharedConcepts.size / allConcepts.size) * 100)
    : 0;

  const sharedExams = strIntersect(topicA.examIds, topicB.examIds);
  const diffDistance = Math.abs((DIFF_ORDER[topicA.difficulty] ?? 0) - (DIFF_ORDER[topicB.difficulty] ?? 0));

  const label =
    jaccard >= 40 || sharedExams.size >= 3 ? 'High overlap' :
    jaccard >= 15 || sharedExams.size >= 1 ? 'Moderate overlap' :
    'Low overlap';

  const color =
    label === 'High overlap'     ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' :
    label === 'Moderate overlap' ? 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400' :
                                   'bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400';

  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      <span className={cn('px-2.5 py-1 rounded-full font-medium text-xs', color)}>{label}</span>
      {sharedConcepts.size > 0 && (
        <span className="text-stone-400">{sharedConcepts.size} shared concept{sharedConcepts.size !== 1 ? 's' : ''}</span>
      )}
      {sharedExams.size > 0 && (
        <span className="text-stone-400">{sharedExams.size} common exam{sharedExams.size !== 1 ? 's' : ''}</span>
      )}
      {diffDistance === 0 && (
        <span className="text-stone-400">same difficulty</span>
      )}
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────

export function Comparison() {
  useSEO('Compare Topics', 'Compare two topics side by side — concepts, difficulty, prerequisites, and exam coverage.');

  const [subjectAId, setSubjectAId] = useState('');
  const [topicAId,   setTopicAId]   = useState('');
  const [subjectBId, setSubjectBId] = useState('');
  const [topicBId,   setTopicBId]   = useState('');

  function swap() {
    setSubjectAId(subjectBId); setTopicAId(topicBId);
    setSubjectBId(subjectAId); setTopicBId(topicAId);
  }

  const topicA = topicAId ? topicRepo.getById(topicAId) : null;
  const topicB = topicBId ? topicRepo.getById(topicBId) : null;

  const subjectA = topicA ? subjectRepo.getById(topicA.subjectIds[0]) : null;
  const subjectB = topicB ? subjectRepo.getById(topicB.subjectIds[0]) : null;

  const sharedConcepts = topicA && topicB ? strIntersect(topicA.keyConcepts, topicB.keyConcepts)    : new Set<string>();
  const sharedFormulas = topicA && topicB ? strIntersect(topicA.formulaHighlights ?? [], topicB.formulaHighlights ?? []) : new Set<string>();
  const sharedExams    = topicA && topicB ? strIntersect(topicA.examIds, topicB.examIds)             : new Set<string>();
  const sharedPrereqs  = topicA && topicB ? strIntersect(topicA.prerequisiteIds, topicB.prerequisiteIds) : new Set<string>();

  const bothSelected = topicA !== null && topicB !== null;

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-8">

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-veda-700 flex items-center justify-center flex-shrink-0">
          <Scale size={20} className="text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Compare Topics</h1>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            Pick any two topics to see what they share and where they differ
          </p>
        </div>
      </div>

      {/* Selectors */}
      <div className="flex items-end gap-2">
        <TopicSelector
          label="Topic A"
          subjectId={subjectAId}
          topicId={topicAId}
          excludeTopicId={topicBId}
          onSubject={setSubjectAId}
          onTopic={setTopicAId}
        />
        <button
          onClick={swap}
          disabled={!topicAId && !topicBId}
          className="mb-0.5 p-2.5 rounded-lg border border-stone-200 dark:border-stone-700 text-stone-500 hover:bg-stone-50 dark:hover:bg-stone-800 disabled:opacity-30 transition-colors flex-shrink-0"
          aria-label="Swap topics"
          title="Swap A ↔ B"
        >
          <ArrowLeftRight size={16} />
        </button>
        <TopicSelector
          label="Topic B"
          subjectId={subjectBId}
          topicId={topicBId}
          excludeTopicId={topicAId}
          onSubject={setSubjectBId}
          onTopic={setTopicBId}
        />
      </div>

      {/* Placeholder */}
      {!bothSelected && (
        <div className="flex flex-col items-center py-14 text-center">
          <Scale size={36} className="text-stone-200 dark:text-stone-700 mb-3" />
          <p className="text-sm text-stone-400 dark:text-stone-500">
            {topicA || topicB ? 'Select the second topic to see the comparison.' : 'Select two topics above to compare them.'}
          </p>
        </div>
      )}

      {/* Comparison */}
      {bothSelected && topicA && topicB && (
        <div className="space-y-5">

          {/* Similarity summary */}
          <div className="px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
            <SimilarityBadge topicA={topicA} topicB={topicB} />
          </div>

          {/* Column headers */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 mb-1">Topic A</p>
                <Link to={`/topics/${topicA.slug}`} className="text-sm font-semibold text-veda-700 dark:text-veda-400 hover:underline flex items-center gap-1">
                  {topicA.title} <ArrowRight size={12} />
                </Link>
              </div>
            </div>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 mb-1">Topic B</p>
                <Link to={`/topics/${topicB.slug}`} className="text-sm font-semibold text-veda-700 dark:text-veda-400 hover:underline flex items-center gap-1">
                  {topicB.title} <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>

          {/* Subject */}
          <CompareRow label="Subject">
            <Cell>
              {subjectA
                ? <span className="text-xs font-medium text-stone-700 dark:text-stone-300">{subjectA.title}</span>
                : <span className="text-xs text-stone-300 dark:text-stone-600">—</span>}
            </Cell>
            <Cell>
              {subjectB
                ? <span className="text-xs font-medium text-stone-700 dark:text-stone-300">{subjectB.title}</span>
                : <span className="text-xs text-stone-300 dark:text-stone-600">—</span>}
            </Cell>
          </CompareRow>

          {/* Difficulty + Time */}
          <CompareRow label="Difficulty · Est. Time">
            <Cell className="flex flex-col gap-2">
              <span className={cn('self-start text-[11px] font-medium px-2 py-0.5 rounded', DIFF_COLORS[topicA.difficulty] ?? 'bg-stone-100 text-stone-500')}>
                {difficultyLabel(topicA.difficulty)}
              </span>
              {topicA.estimatedMinutes > 0 && (
                <span className="text-xs text-stone-400">{formatMinutes(topicA.estimatedMinutes)}</span>
              )}
            </Cell>
            <Cell className="flex flex-col gap-2">
              <span className={cn('self-start text-[11px] font-medium px-2 py-0.5 rounded', DIFF_COLORS[topicB.difficulty] ?? 'bg-stone-100 text-stone-500')}>
                {difficultyLabel(topicB.difficulty)}
              </span>
              {topicB.estimatedMinutes > 0 && (
                <span className="text-xs text-stone-400">{formatMinutes(topicB.estimatedMinutes)}</span>
              )}
            </Cell>
          </CompareRow>

          {/* Key Concepts */}
          <CompareRow label="Key Concepts">
            <Cell>
              {topicA.keyConcepts.length > 0
                ? <TagList items={topicA.keyConcepts} shared={sharedConcepts} />
                : <span className="text-xs text-stone-300 dark:text-stone-600">—</span>}
            </Cell>
            <Cell>
              {topicB.keyConcepts.length > 0
                ? <TagList items={topicB.keyConcepts} shared={sharedConcepts} />
                : <span className="text-xs text-stone-300 dark:text-stone-600">—</span>}
            </Cell>
          </CompareRow>

          {/* Formulas */}
          {(topicA.formulaHighlights?.length || topicB.formulaHighlights?.length) ? (
            <CompareRow label="Formula Highlights">
              <Cell>
                {topicA.formulaHighlights && topicA.formulaHighlights.length > 0
                  ? <TagList items={topicA.formulaHighlights} shared={sharedFormulas} />
                  : <span className="text-xs text-stone-300 dark:text-stone-600">—</span>}
              </Cell>
              <Cell>
                {topicB.formulaHighlights && topicB.formulaHighlights.length > 0
                  ? <TagList items={topicB.formulaHighlights} shared={sharedFormulas} />
                  : <span className="text-xs text-stone-300 dark:text-stone-600">—</span>}
              </Cell>
            </CompareRow>
          ) : null}

          {/* Exam Relevance */}
          <CompareRow label="Exam Relevance">
            <Cell>
              <ExamList examIds={topicA.examIds} shared={sharedExams} />
            </Cell>
            <Cell>
              <ExamList examIds={topicB.examIds} shared={sharedExams} />
            </Cell>
          </CompareRow>

          {/* Prerequisites */}
          <CompareRow label="Prerequisites">
            <Cell>
              <PrereqList prereqIds={topicA.prerequisiteIds} shared={sharedPrereqs} />
            </Cell>
            <Cell>
              <PrereqList prereqIds={topicB.prerequisiteIds} shared={sharedPrereqs} />
            </Cell>
          </CompareRow>

          {/* Legend */}
          <p className="text-[10px] text-stone-300 dark:text-stone-600 text-center">
            <span className="inline-block w-2 h-2 rounded bg-amber-200 dark:bg-amber-800 mr-1" />
            Highlighted items appear in both topics
          </p>
        </div>
      )}
    </div>
  );
}
