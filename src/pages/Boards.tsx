import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { useStructuredData } from '../hooks/useStructuredData';
import { Building2, Globe, GraduationCap, BookOpen, ArrowRight, School } from 'lucide-react';
import { boardRepo } from '../repositories';
import { Badge } from '../components/ui';
import { cn } from '../utils/cn';
import type { BoardType } from '../models';

const TYPE_FILTERS: { id: BoardType | 'all'; label: string }[] = [
  { id: 'all', label: 'All Boards' },
  { id: 'central', label: 'Central' },
  { id: 'state', label: 'State' },
  { id: 'international', label: 'International' },
  { id: 'open-school', label: 'Open School' },
];

const typeColors: Record<string, string> = {
  central: 'bg-veda-50 text-veda-700 dark:bg-veda-900/30 dark:text-veda-400',
  state: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400',
  international: 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400',
  'open-school': 'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400',
};

const typeIcons: Record<string, typeof Building2> = {
  central: Building2,
  state: School,
  international: Globe,
  'open-school': GraduationCap,
};

export function Boards() {
  useSEO(
    'School Boards in India',
    'Complete guide to all school boards in India — CBSE, ICSE, NIOS, IB, Cambridge, and all 28 state boards. Syllabus, examinations, streams, and resources.'
  );

  useStructuredData({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'School Boards in India',
    description: 'All major school boards in India including CBSE, ICSE, NIOS, and 28 state boards.',
    numberOfItems: boardRepo.count(),
  });

  const [activeFilter, setActiveFilter] = useState<BoardType | 'all'>('all');
  const allBoards = boardRepo.getAll();
  const filtered = activeFilter === 'all' ? allBoards : allBoards.filter(b => b.type === activeFilter);

  const counts = TYPE_FILTERS.reduce((acc, { id }) => {
    acc[id] = id === 'all' ? allBoards.length : allBoards.filter(b => b.type === id).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs text-stone-400 dark:text-stone-600 mb-1">
          <Link to="/" className="hover:text-stone-600 dark:hover:text-stone-400">Home</Link>
          <span>/</span>
          <span>Boards</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">School Boards in India</h1>
        <p className="text-stone-500 dark:text-stone-400 text-sm mt-1">
          Explore CBSE, ICSE, NIOS, IB, Cambridge, and all 28 state boards — syllabus, examinations, streams, and resources.
        </p>
      </div>

      {/* Stat bar */}
      <div className="flex gap-4 text-sm flex-wrap">
        <span className="text-stone-500"><strong className="text-stone-800 dark:text-stone-200">{counts.central ?? 0}</strong> Central</span>
        <span className="text-stone-500"><strong className="text-stone-800 dark:text-stone-200">{counts.state ?? 0}</strong> State Boards</span>
        <span className="text-stone-500"><strong className="text-stone-800 dark:text-stone-200">{counts.international ?? 0}</strong> International</span>
        <span className="text-stone-500"><strong className="text-stone-800 dark:text-stone-200">{counts['open-school'] ?? 0}</strong> Open School</span>
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 flex-wrap">
        {TYPE_FILTERS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveFilter(id)}
            className={cn(
              'px-3 py-1.5 rounded-full text-xs font-medium transition-colors',
              activeFilter === id
                ? 'bg-veda-700 text-white dark:bg-veda-500'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
            )}
          >
            {label} <span className="opacity-70">{counts[id]}</span>
          </button>
        ))}
      </div>

      {/* Board grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(board => {
          const Icon = typeIcons[board.type] ?? BookOpen;
          const colorClass = typeColors[board.type] ?? typeColors.central;
          return (
            <Link
              key={board.id}
              to={`/boards/${board.slug}`}
              className="group block p-4 bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 hover:border-veda-300 dark:hover:border-veda-700 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className={cn('w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0', colorClass)}>
                  <Icon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-semibold text-stone-900 dark:text-stone-100 text-sm group-hover:text-veda-700 dark:group-hover:text-veda-300 transition-colors leading-tight">
                        {board.shortName}
                      </div>
                      <div className="text-xs text-stone-500 dark:text-stone-500 mt-0.5 line-clamp-1">{board.name}</div>
                    </div>
                    <ArrowRight size={13} className="flex-shrink-0 mt-0.5 text-stone-300 group-hover:text-veda-400 transition-colors" />
                  </div>
                  <p className="text-xs text-stone-500 dark:text-stone-500 line-clamp-2 mt-1.5 leading-relaxed">{board.description}</p>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <Badge className="capitalize">{board.type.replace(/-/g, ' ')}</Badge>
                    {board.state && <span className="text-xs text-stone-400">{board.state}</span>}
                    {board.established && (
                      <span className="text-xs text-stone-400">Est. {board.established}</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-stone-400 py-8 text-center">No boards found for this filter.</p>
      )}
    </div>
  );
}
