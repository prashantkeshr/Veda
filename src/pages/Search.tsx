import { useEffect, useState, useRef, useCallback } from 'react';
import { useSEO } from '../hooks/useSEO';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Search as SearchIcon, BookOpen, Hash, FileText, GraduationCap,
  ClipboardList, Route, Clock, X, ArrowRight,
} from 'lucide-react';
import { search, getSearchSuggestions } from '../services/search.service';
import type { SearchResult, SearchEntityType } from '../models';
import { Badge, EmptyState } from '../components/ui';
import { cn } from '../utils/cn';

// ── Constants ──────────────────────────────────────────────────────────────

const RECENT_KEY = 'veda-recent-searches';
const MAX_RECENT = 5;

const FILTER_TYPES: { id: SearchEntityType | 'all'; label: string }[] = [
  { id: 'all',           label: 'All'           },
  { id: 'topic',         label: 'Topics'        },
  { id: 'subject',       label: 'Subjects'      },
  { id: 'course',        label: 'Courses'       },
  { id: 'exam',          label: 'Exams'         },
  { id: 'resource',      label: 'Resources'     },
  { id: 'learning-path', label: 'Learning Paths'},
];

const entityIcon: Record<string, typeof BookOpen> = {
  subject: BookOpen,
  topic: Hash,
  resource: FileText,
  course: GraduationCap,
  exam: ClipboardList,
  'learning-path': Route,
};

const entityPath: Record<string, string> = {
  subject: 'subjects',
  topic: 'topics',
  resource: 'resources',
  course: 'courses',
  exam: 'exams',
  'learning-path': 'learning-paths',
};

const entityColor: Record<string, string> = {
  subject:       'bg-veda-50 text-veda-700 dark:bg-veda-900/30 dark:text-veda-400',
  topic:         'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400',
  resource:      'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400',
  course:        'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400',
  exam:          'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400',
  'learning-path':'bg-teal-50 text-teal-700 dark:bg-teal-900/20 dark:text-teal-400',
};

// ── localStorage helpers ───────────────────────────────────────────────────

function loadRecent(): string[] {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) ?? '[]');
  } catch {
    return [];
  }
}

function saveRecent(q: string) {
  if (!q.trim()) return;
  try {
    const prev = loadRecent().filter(r => r.toLowerCase() !== q.toLowerCase());
    localStorage.setItem(RECENT_KEY, JSON.stringify([q, ...prev].slice(0, MAX_RECENT)));
  } catch { /* ignore */ }
}

function clearRecent() {
  try { localStorage.removeItem(RECENT_KEY); } catch { /* ignore */ }
}

// ── ResultItem ─────────────────────────────────────────────────────────────

function ResultItem({ result }: { result: SearchResult }) {
  const Icon = entityIcon[result.type] ?? BookOpen;
  const path = entityPath[result.type] ?? 'subjects';
  const color = entityColor[result.type] ?? '';

  return (
    <Link to={`/${path}/${result.slug}`} className="block group">
      <div className="flex items-start gap-3 p-4 bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 group-hover:border-veda-300 dark:group-hover:border-veda-700 transition-colors">
        <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5', color)}>
          <Icon size={15} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-0.5">
            <span className="font-medium text-stone-900 dark:text-stone-100 text-sm leading-snug group-hover:text-veda-700 dark:group-hover:text-veda-300 transition-colors">
              {result.title}
            </span>
            <ArrowRight size={13} className="flex-shrink-0 mt-0.5 text-stone-300 dark:text-stone-700 group-hover:text-veda-400 transition-colors" />
          </div>
          {result.description && (
            <p className="text-xs text-stone-500 dark:text-stone-500 line-clamp-2 leading-relaxed mb-1.5">
              {result.description}
            </p>
          )}
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className="capitalize">{result.type.replace(/-/g, ' ')}</Badge>
            {result.meta && (
              <span className="text-xs text-stone-400 dark:text-stone-600">{result.meta}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

// ── Search page ────────────────────────────────────────────────────────────

export function Search() {
  const [params, setParams] = useSearchParams();
  const urlQuery = params.get('q') ?? '';

  useSEO(
    urlQuery ? `Search: ${urlQuery}` : 'Search',
    'Search across all subjects, topics, courses, resources, and exams.'
  );

  const [input, setInput] = useState(urlQuery);
  const [activeFilter, setActiveFilter] = useState<SearchEntityType | 'all'>('all');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [recent, setRecent] = useState<string[]>(loadRecent);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync input when URL query changes externally (e.g., Ctrl+K nav)
  useEffect(() => {
    setInput(urlQuery);
  }, [urlQuery]);

  // Focus input when navigated via keyboard shortcut (input is empty but component mounts)
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Live search with debounce
  const runSearch = useCallback((q: string) => {
    const trimmed = q.trim();
    if (trimmed.length >= 2) {
      const r = search(trimmed);
      const all = r.all;
      setResults(all);
      setSuggestions([]);
    } else if (trimmed.length > 0) {
      setResults([]);
      setSuggestions(getSearchSuggestions(trimmed));
    } else {
      setResults([]);
      setSuggestions([]);
    }
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => runSearch(input), 200);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [input, runSearch]);

  function commitSearch(q: string) {
    if (!q.trim()) return;
    setParams({ q: q.trim() });
    saveRecent(q.trim());
    setRecent(loadRecent());
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    commitSearch(input);
  }

  function handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      commitSearch(input);
    }
  }

  function handleRecentClick(q: string) {
    setInput(q);
    commitSearch(q);
    runSearch(q);
  }

  function handleSuggestionClick(q: string) {
    setInput(q);
    commitSearch(q);
    runSearch(q);
  }

  function handleClear() {
    clearRecent();
    setRecent([]);
  }

  // Apply type filter
  const filtered: SearchResult[] = activeFilter === 'all'
    ? results
    : results.filter(r => r.type === activeFilter);

  const hasQuery = input.trim().length >= 2;
  const showRecent = !hasQuery && recent.length > 0;

  return (
    <div className="space-y-5 max-w-2xl">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Search VEDA</h1>
        <span className="hidden sm:inline-flex items-center gap-1 px-2 py-1 rounded bg-stone-100 dark:bg-stone-800 text-xs text-stone-400 dark:text-stone-500 font-mono">
          <kbd>Ctrl</kbd><span>+</span><kbd>K</kbd>
        </span>
      </div>

      {/* Search box */}
      <form onSubmit={handleSubmit} role="search">
        <div className="relative">
          <SearchIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
          <input
            ref={inputRef}
            type="search"
            id="veda-search-input"
            placeholder="Search subjects, topics, resources, exams…"
            value={input}
            onChange={e => setInput(e.target.value)}
            autoComplete="off"
            aria-label="Search VEDA"
            onKeyDown={handleInputKeyDown}
            className="w-full pl-10 pr-4 py-3 text-sm rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-veda-700/30 transition-shadow"
          />
          {input && (
            <button
              type="button"
              onClick={() => { setInput(''); setResults([]); setSuggestions([]); inputRef.current?.focus(); }}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </form>

      {/* Recent searches */}
      {showRecent && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-stone-500 dark:text-stone-500 uppercase tracking-wide">
              Recent searches
            </span>
            <button
              onClick={handleClear}
              className="text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
            >
              Clear
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {recent.map(q => (
              <button
                key={q}
                onClick={() => handleRecentClick(q)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-sm hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
              >
                <Clock size={11} className="text-stone-400" />
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Type filter chips */}
      {hasQuery && results.length > 0 && (
        <div className="flex items-center gap-1.5 flex-wrap" role="group" aria-label="Filter by type">
          {FILTER_TYPES.map(({ id, label }) => {
            const count = id === 'all' ? results.length : results.filter(r => r.type === id).length;
            if (id !== 'all' && count === 0) return null;
            return (
              <button
                key={id}
                onClick={() => setActiveFilter(id)}
                className={cn(
                  'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-colors',
                  activeFilter === id
                    ? 'bg-veda-700 text-white dark:bg-veda-500'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
                )}
              >
                {label}
                <span className={cn(
                  'inline-flex items-center justify-center w-4 h-4 rounded-full text-[10px] font-semibold',
                  activeFilter === id
                    ? 'bg-white/20 text-white'
                    : 'bg-stone-200 dark:bg-stone-700 text-stone-500 dark:text-stone-400'
                )}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Results / states */}
      {hasQuery ? (
        filtered.length > 0 ? (
          <div className="space-y-2">
            <p className="text-sm text-stone-500">
              {filtered.length} result{filtered.length !== 1 ? 's' : ''}
              {activeFilter !== 'all' ? ` in ${FILTER_TYPES.find(f => f.id === activeFilter)?.label}` : ''}
              {' '}for{' '}
              <strong className="text-stone-700 dark:text-stone-300">"{input.trim()}"</strong>
            </p>
            {filtered.map(r => <ResultItem key={r.id} result={r} />)}
          </div>
        ) : results.length > 0 ? (
          <EmptyState
            icon={<SearchIcon size={36} />}
            title={`No ${FILTER_TYPES.find(f => f.id === activeFilter)?.label.toLowerCase()} match "${input.trim()}"`}
            description="Try a different filter or search all content types."
            action={
              <button
                onClick={() => setActiveFilter('all')}
                className="text-sm text-veda-700 dark:text-veda-400 hover:underline"
              >
                Show all {results.length} result{results.length !== 1 ? 's' : ''}
              </button>
            }
          />
        ) : (
          <EmptyState
            icon={<SearchIcon size={36} />}
            title={`No results for "${input.trim()}"`}
            description="Try different keywords or browse subjects directly."
            action={
              suggestions.length > 0 ? (
                <div className="mt-2 space-y-1">
                  <p className="text-xs text-stone-400 mb-2">Did you mean:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {suggestions.map(s => (
                      <button
                        key={s}
                        onClick={() => handleSuggestionClick(s)}
                        className="px-3 py-1 rounded-full bg-veda-50 dark:bg-veda-900/30 text-veda-700 dark:text-veda-400 text-sm hover:bg-veda-100 dark:hover:bg-veda-900/50 transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ) : undefined
            }
          />
        )
      ) : input.trim().length === 1 ? (
        suggestions.length > 0 ? (
          <div>
            <p className="text-xs text-stone-400 mb-2 uppercase tracking-wide font-medium">Suggestions</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map(s => (
                <button
                  key={s}
                  onClick={() => handleSuggestionClick(s)}
                  className="px-3 py-1.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-sm hover:bg-veda-50 dark:hover:bg-veda-900/30 hover:text-veda-700 dark:hover:text-veda-400 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-sm text-stone-400">Type at least 2 characters to search.</p>
        )
      ) : !showRecent ? (
        <p className="text-sm text-stone-400">Type at least 2 characters to search.</p>
      ) : null}
    </div>
  );
}
