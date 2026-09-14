import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon, BookOpen, Hash, FileText, GraduationCap, ClipboardList, Route } from 'lucide-react';
import { search } from '../services/search.service';
import type { SearchResult } from '../models';
import { Badge, EmptyState } from '../components/ui';
import { cn } from '../utils/cn';

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
  subject: 'bg-veda-50 text-veda-700 dark:bg-veda-900/30 dark:text-veda-400',
  topic: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400',
  resource: 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400',
  course: 'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400',
  exam: 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400',
  'learning-path': 'bg-teal-50 text-teal-700 dark:bg-teal-900/20 dark:text-teal-400',
};

function ResultItem({ result }: { result: SearchResult }) {
  const Icon = entityIcon[result.type] ?? BookOpen;
  const path = entityPath[result.type] ?? 'subjects';
  const color = entityColor[result.type] ?? '';

  return (
    <Link to={`/${path}/${result.slug}`} className="block">
      <div className="flex items-start gap-3 p-4 bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 transition-colors">
        <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0', color)}>
          <Icon size={15} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="font-medium text-stone-900 dark:text-stone-100 text-sm truncate">{result.title}</span>
            <Badge className="flex-shrink-0 capitalize">{result.type.replace(/-/g, ' ')}</Badge>
          </div>
          {result.description && (
            <p className="text-xs text-stone-500 dark:text-stone-500 line-clamp-2 leading-relaxed">{result.description}</p>
          )}
        </div>
      </div>
    </Link>
  );
}

export function Search() {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') ?? '';
  const [input, setInput] = useState(query);
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (query.trim().length >= 2) {
      const r = search(query);
      setResults(r.all);
    } else {
      setResults([]);
    }
  }, [query]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (input.trim()) {
      setParams({ q: input.trim() });
    }
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Search VEDA</h1>

      <form onSubmit={handleSubmit}>
        <div className="relative">
          <SearchIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
          <input
            type="search"
            placeholder="Search subjects, topics, resources, exams…"
            value={input}
            onChange={e => setInput(e.target.value)}
            autoFocus
            className="w-full pl-10 pr-4 py-3 text-sm rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-veda-700/30"
          />
        </div>
      </form>

      {query && query.length >= 2 ? (
        results.length > 0 ? (
          <div className="space-y-2">
            <p className="text-sm text-stone-500">{results.length} result{results.length !== 1 ? 's' : ''} for "<strong className="text-stone-700 dark:text-stone-300">{query}</strong>"</p>
            {results.map(r => <ResultItem key={r.id} result={r} />)}
          </div>
        ) : (
          <EmptyState
            icon={<SearchIcon size={36} />}
            title={`No results for "${query}"`}
            description="Try different keywords or browse subjects directly."
          />
        )
      ) : (
        <p className="text-sm text-stone-400">Type at least 2 characters to search.</p>
      )}
    </div>
  );
}
