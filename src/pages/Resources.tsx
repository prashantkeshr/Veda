import { useState } from 'react';
import { FileText } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { resourceRepo } from '../repositories';
import { ResourceCard } from '../components/knowledge/ResourceCard';
import { EmptyState, SectionHeader } from '../components/ui';
import { cn } from '../utils/cn';

const TYPES = ['All', 'notes', 'pdf', 'video', 'article', 'question-paper', 'practice-set', 'mock-test'];

export function Resources() {
  useSEO('Resources', 'Notes, PDFs, videos, question papers, and practice sets for engineering and competitive exams.');
  const [type, setType] = useState('All');
  const [search, setSearch] = useState('');

  const resources = search
    ? resourceRepo.getAll({ search })
    : type !== 'All'
    ? resourceRepo.getByType(type)
    : resourceRepo.getAll();

  return (
    <div className="space-y-6">
      <SectionHeader title="Resources" description={`${resources.length} resource${resources.length !== 1 ? 's' : ''} available`} />

      <div className="flex flex-col gap-3">
        <input
          type="search"
          placeholder="Search resources…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full max-w-lg px-3 py-2 text-sm rounded-md bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-veda-700/30"
        />
        <div className="flex gap-1.5 flex-wrap">
          {TYPES.map(t => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={cn(
                'px-3 py-1 rounded text-xs font-medium transition-colors capitalize',
                type === t
                  ? 'bg-veda-700 text-white dark:bg-veda-500'
                  : 'bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800'
              )}
            >
              {t.replace(/-/g, ' ')}
            </button>
          ))}
        </div>
      </div>

      {resources.length === 0 ? (
        <EmptyState icon={<FileText size={40} />} title="No resources found" description="Try different filters." />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {resources.map(r => <ResourceCard key={r.id} resource={r} />)}
        </div>
      )}
    </div>
  );
}
