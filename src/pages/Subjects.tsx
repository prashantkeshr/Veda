import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { subjectRepo } from '../repositories';
import { SubjectCard } from '../components/knowledge/SubjectCard';
import { EmptyState, SectionHeader } from '../components/ui';
import { cn } from '../utils/cn';

const LEVELS = ['All', 'undergraduate', 'competitive-exam', 'postgraduate'];

export function Subjects() {
  const [level, setLevel] = useState('All');
  const [search, setSearch] = useState('');

  const subjects = search
    ? subjectRepo.getAll({ search })
    : level !== 'All'
    ? subjectRepo.filterByLevel(level)
    : subjectRepo.getAll();

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Subjects"
        description={`${subjects.length} subject${subjects.length !== 1 ? 's' : ''} in the knowledge base`}
      />

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="search"
          placeholder="Search subjects…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="flex-1 px-3 py-2 text-sm rounded-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-veda-700/30"
        />
        <div className="flex gap-1 flex-wrap">
          {LEVELS.map(l => (
            <button
              key={l}
              onClick={() => setLevel(l)}
              className={cn(
                'px-3 py-1.5 rounded-md text-xs font-medium transition-colors capitalize',
                level === l
                  ? 'bg-veda-700 text-white dark:bg-veda-500'
                  : 'bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800'
              )}
            >
              {l.replace(/-/g, ' ')}
            </button>
          ))}
        </div>
      </div>

      {subjects.length === 0 ? (
        <EmptyState
          icon={<BookOpen size={40} />}
          title="No subjects found"
          description="Try adjusting your search or filter."
        />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map(s => <SubjectCard key={s.id} subject={s} />)}
        </div>
      )}
    </div>
  );
}
