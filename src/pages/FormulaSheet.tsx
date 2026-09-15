import { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import {
  Calculator, Search, Copy, Check, BookOpen,
  ChevronDown, ChevronRight, Hash,
} from 'lucide-react';
import { topicRepo, subjectRepo } from '../repositories';
import { cn } from '../utils/cn';

// ── Types ─────────────────────────────────────────────────────────────────

type Tab = 'formulas' | 'concepts' | 'all';

type Entry = {
  text: string;
  kind: 'formula' | 'concept';
  topicId: string;
  topicTitle: string;
  topicSlug: string;
  subjectId: string;
};

// ── Build master list ─────────────────────────────────────────────────────

function buildEntries(): Entry[] {
  const entries: Entry[] = [];
  for (const topic of topicRepo.getAll()) {
    const subjectId = topic.subjectIds[0] ?? '';
    for (const f of topic.formulaHighlights ?? []) {
      entries.push({ text: f, kind: 'formula', topicId: topic.id, topicTitle: topic.title, topicSlug: topic.slug, subjectId });
    }
    for (const c of topic.keyConcepts) {
      entries.push({ text: c, kind: 'concept', topicId: topic.id, topicTitle: topic.title, topicSlug: topic.slug, subjectId });
    }
  }
  return entries;
}

// ── Copy button ───────────────────────────────────────────────────────────

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }).catch(() => {});
  }, [text]);

  return (
    <button
      onClick={copy}
      aria-label="Copy to clipboard"
      className={cn(
        'p-1 rounded transition-all flex-shrink-0 opacity-0 group-hover:opacity-100 focus:opacity-100',
        copied
          ? 'text-emerald-600 dark:text-emerald-400'
          : 'text-stone-400 hover:text-stone-700 dark:hover:text-stone-300'
      )}
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
    </button>
  );
}

// ── Entry row ──────────────────────────────────────────────────────────────

function EntryRow({ entry }: { entry: Entry }) {
  return (
    <div className="group flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800/60 transition-colors">
      <span className={cn(
        'flex-shrink-0 w-5 h-5 rounded flex items-center justify-center text-[9px] font-bold uppercase',
        entry.kind === 'formula'
          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
          : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
      )}>
        {entry.kind === 'formula' ? 'f' : 'c'}
      </span>
      <span className={cn(
        'flex-1 text-sm leading-snug',
        entry.kind === 'formula'
          ? 'font-mono text-stone-800 dark:text-stone-200'
          : 'text-stone-700 dark:text-stone-300'
      )}>
        {entry.text}
      </span>
      <CopyBtn text={entry.text} />
    </div>
  );
}

// ── Topic group ───────────────────────────────────────────────────────────

function TopicGroup({ topicId, topicTitle, topicSlug, entries }: {
  topicId: string;
  topicTitle: string;
  topicSlug: string;
  entries: Entry[];
}) {
  const [open, setOpen] = useState(true);
  const formulaCount = entries.filter(e => e.kind === 'formula').length;
  const conceptCount = entries.filter(e => e.kind === 'concept').length;

  return (
    <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors text-left"
      >
        {open ? <ChevronDown size={14} className="text-stone-400 flex-shrink-0" /> : <ChevronRight size={14} className="text-stone-400 flex-shrink-0" />}
        <span className="text-sm font-semibold text-stone-900 dark:text-stone-100 flex-1">{topicTitle}</span>
        <div className="flex items-center gap-2 text-[10px] flex-shrink-0">
          {formulaCount > 0 && (
            <span className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded font-medium">
              {formulaCount} formula{formulaCount !== 1 ? 's' : ''}
            </span>
          )}
          {conceptCount > 0 && (
            <span className="px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded font-medium">
              {conceptCount} concept{conceptCount !== 1 ? 's' : ''}
            </span>
          )}
        </div>
        <Link
          to={`/topics/${topicSlug}`}
          onClick={e => e.stopPropagation()}
          className="ml-1 p-1 rounded text-stone-300 dark:text-stone-600 hover:text-veda-600 dark:hover:text-veda-400 transition-colors flex-shrink-0"
          aria-label={`Open ${topicTitle}`}
          title={`Go to ${topicTitle}`}
        >
          <BookOpen size={12} />
        </Link>
      </button>

      {open && (
        <div className="border-t border-stone-100 dark:border-stone-800 py-1 px-1">
          {entries.map((e, i) => <EntryRow key={`${topicId}-${i}`} entry={e} />)}
        </div>
      )}
    </div>
  );
}

// ── Subject section ───────────────────────────────────────────────────────

function SubjectSection({ subjectId, entries }: { subjectId: string; entries: Entry[] }) {
  const subject = subjectRepo.getById(subjectId);
  if (!subject) return null;

  const byTopic = new Map<string, Entry[]>();
  for (const e of entries) {
    const arr = byTopic.get(e.topicId) ?? [];
    arr.push(e);
    byTopic.set(e.topicId, arr);
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 px-1">
        <div className="w-1.5 h-1.5 rounded-full bg-veda-600 dark:bg-veda-400" />
        <h2 className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-widest">
          {subject.shortTitle || subject.title}
        </h2>
        <span className="text-xs text-stone-400">({entries.length})</span>
      </div>
      {Array.from(byTopic.entries()).map(([topicId, topicEntries]) => (
        <TopicGroup
          key={topicId}
          topicId={topicId}
          topicTitle={topicEntries[0].topicTitle}
          topicSlug={topicEntries[0].topicSlug}
          entries={topicEntries}
        />
      ))}
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────

export function FormulaSheet() {
  useSEO('Formula Sheet', 'Searchable formulas and key concepts from all VEDA topics — copy in one click.');

  const allEntries = useMemo(buildEntries, []);
  const subjects = subjectRepo.getAll();

  const [search, setSearch] = useState('');
  const [tab, setTab] = useState<Tab>('all');
  const [subjectFilter, setSubjectFilter] = useState('all');

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return allEntries.filter(e => {
      if (tab === 'formulas' && e.kind !== 'formula') return false;
      if (tab === 'concepts' && e.kind !== 'concept') return false;
      if (subjectFilter !== 'all' && e.subjectId !== subjectFilter) return false;
      if (q && !e.text.toLowerCase().includes(q) && !e.topicTitle.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [allEntries, search, tab, subjectFilter]);

  const bySubject = useMemo(() => {
    const m = new Map<string, Entry[]>();
    for (const e of filtered) {
      const arr = m.get(e.subjectId) ?? [];
      arr.push(e);
      m.set(e.subjectId, arr);
    }
    return m;
  }, [filtered]);

  const formulaTotal = allEntries.filter(e => e.kind === 'formula').length;
  const conceptTotal = allEntries.filter(e => e.kind === 'concept').length;

  const tabs: Array<{ key: Tab; label: string; count: number }> = [
    { key: 'all', label: 'All', count: allEntries.length },
    { key: 'formulas', label: 'Formulas', count: formulaTotal },
    { key: 'concepts', label: 'Concepts', count: conceptTotal },
  ];

  return (
    <div className="space-y-5 pb-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center">
          <Calculator size={20} className="text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Formula Sheet</h1>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            {formulaTotal} formulas · {conceptTotal} key concepts · click any entry to copy
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
          <input
            type="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search formulas and concepts…"
            className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          />
        </div>

        {/* Subject filter */}
        <select
          value={subjectFilter}
          onChange={e => setSubjectFilter(e.target.value)}
          className="px-3 py-2.5 text-sm rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
        >
          <option value="all">All Subjects</option>
          {subjects.map(s => <option key={s.id} value={s.id}>{s.shortTitle || s.title}</option>)}
        </select>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 bg-stone-100 dark:bg-stone-800 rounded-lg p-1 w-fit">
        {tabs.map(t => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={cn(
              'flex items-center gap-1.5 px-4 py-1.5 rounded-md text-sm font-medium transition-colors',
              tab === t.key
                ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm'
                : 'text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300'
            )}
          >
            {t.key === 'formulas' ? <Hash size={12} /> : t.key === 'concepts' ? <BookOpen size={12} /> : null}
            {t.label}
            <span className="text-xs tabular-nums text-stone-400">({t.count})</span>
          </button>
        ))}
      </div>

      {/* Results count */}
      {(search || subjectFilter !== 'all') && (
        <p className="text-sm text-stone-400">
          {filtered.length} result{filtered.length !== 1 ? 's' : ''}
          {search ? ` for "${search}"` : ''}
        </p>
      )}

      {/* Entries grouped by subject */}
      {bySubject.size === 0 ? (
        <div className="text-center py-16">
          <Calculator size={32} className="text-stone-200 dark:text-stone-800 mx-auto mb-3" />
          <p className="text-stone-400">No results found. Try a different search or filter.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {Array.from(bySubject.entries()).map(([subjectId, entries]) => (
            <SubjectSection key={subjectId} subjectId={subjectId} entries={entries} />
          ))}
        </div>
      )}

      {/* Legend */}
      <div className="flex items-center gap-4 pt-2 text-xs text-stone-400">
        <span className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 flex items-center justify-center text-[9px] font-bold">f</span>
          Formula (monospace)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 flex items-center justify-center text-[9px] font-bold">c</span>
          Key concept
        </span>
        <span className="flex items-center gap-1.5">
          <Copy size={11} />
          Hover any entry to copy
        </span>
      </div>
    </div>
  );
}
