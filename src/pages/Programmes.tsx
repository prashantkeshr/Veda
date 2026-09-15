import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { useStructuredData } from '../hooks/useStructuredData';
import { GraduationCap, ArrowRight } from 'lucide-react';
import { programmeRepo } from '../repositories';
import { Badge } from '../components/ui';
import { cn } from '../utils/cn';
import type { DegreeType } from '../models';

const DEGREE_FILTERS: { id: DegreeType | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'bachelors', label: 'Bachelor\'s' },
  { id: 'masters', label: 'Master\'s' },
  { id: 'doctoral', label: 'Doctoral' },
  { id: 'integrated', label: 'Integrated' },
  { id: 'professional', label: 'Professional' },
];

const degreeColors: Record<string, string> = {
  bachelors: 'bg-veda-50 text-veda-700 dark:bg-veda-900/30 dark:text-veda-400',
  masters: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400',
  doctoral: 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400',
  integrated: 'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400',
  professional: 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400',
  diploma: 'bg-teal-50 text-teal-700 dark:bg-teal-900/20 dark:text-teal-400',
};

export function Programmes() {
  useSEO(
    'Degree Programmes in India',
    'All degree programmes in India: B.Tech, B.Sc, MBBS, BA LLB, MBA, M.Tech, Ph.D — admission exams, eligibility, duration, career paths, and top institutions.'
  );

  useStructuredData({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Degree Programmes in India',
    description: 'All major undergraduate and postgraduate degree programmes in India.',
    numberOfItems: programmeRepo.count(),
  });

  const [activeFilter, setActiveFilter] = useState<DegreeType | 'all'>('all');
  const allProgs = programmeRepo.getAll();
  const filtered = activeFilter === 'all' ? allProgs : allProgs.filter(p => p.degree === activeFilter);

  const counts = DEGREE_FILTERS.reduce((acc, { id }) => {
    acc[id] = id === 'all' ? allProgs.length : allProgs.filter(p => p.degree === id).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-xs text-stone-400 dark:text-stone-600 mb-1">
          <Link to="/" className="hover:text-stone-600 dark:hover:text-stone-400">Home</Link>
          <span>/</span>
          <span>Programmes</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Degree Programmes</h1>
        <p className="text-stone-500 dark:text-stone-400 text-sm mt-1">
          Every major degree programme in India — admission exams, eligibility, duration, career paths, and top institutions.
        </p>
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 flex-wrap">
        {DEGREE_FILTERS.map(({ id, label }) => (
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

      <div className="grid gap-3 sm:grid-cols-2">
        {filtered.map(prog => {
          const colorClass = degreeColors[prog.degree] ?? degreeColors.bachelors;
          return (
            <Link
              key={prog.id}
              to={`/programmes/${prog.slug}`}
              className="group block p-4 bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 hover:border-veda-300 dark:hover:border-veda-700 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className={cn('w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0', colorClass)}>
                  <GraduationCap size={15} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-bold text-stone-900 dark:text-stone-100 text-base group-hover:text-veda-700 dark:group-hover:text-veda-300 transition-colors leading-tight">
                        {prog.shortName}
                      </div>
                      <div className="text-xs text-stone-500 mt-0.5">{prog.name}</div>
                    </div>
                    <ArrowRight size={13} className="flex-shrink-0 mt-1 text-stone-300 group-hover:text-veda-400 transition-colors" />
                  </div>
                  <p className="text-xs text-stone-500 dark:text-stone-500 line-clamp-2 mt-1.5 leading-relaxed">
                    {prog.description}
                  </p>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <Badge className="capitalize">{prog.degree}</Badge>
                    <Badge variant="teal">{prog.durationYears} year{prog.durationYears !== 1 ? 's' : ''}</Badge>
                    {prog.admissionExams?.slice(0, 1).map(e => (
                      <Badge key={e} variant="blue">{e}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-sm text-stone-400 py-8 text-center">No programmes found for this filter.</p>
      )}
    </div>
  );
}
