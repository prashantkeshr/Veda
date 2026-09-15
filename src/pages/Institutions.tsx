import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { useStructuredData } from '../hooks/useStructuredData';
import { University, ArrowRight, MapPin, Award } from 'lucide-react';
import { institutionRepo } from '../repositories';
import { Badge } from '../components/ui';
import { cn } from '../utils/cn';
import type { InstitutionCategory } from '../models';

const CATEGORY_FILTERS: { id: InstitutionCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'iit', label: 'IITs' },
  { id: 'nit', label: 'NITs' },
  { id: 'iisc', label: 'IISc' },
  { id: 'iiser', label: 'IISERs' },
  { id: 'aiims', label: 'AIIMS' },
  { id: 'nlu', label: 'NLUs' },
];

const categoryColors: Record<string, string> = {
  iit: 'bg-veda-50 text-veda-700 dark:bg-veda-900/30 dark:text-veda-400',
  nit: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400',
  iisc: 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400',
  iiser: 'bg-teal-50 text-teal-700 dark:bg-teal-900/20 dark:text-teal-400',
  aiims: 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400',
  nlu: 'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400',
};

export function Institutions() {
  useSEO(
    'Colleges & Universities in India',
    'Explore IITs, NITs, IISc, IISERs, AIIMS, NLUs and top colleges in India. Admission, programmes, NIRF rankings, and guides for every institution.'
  );

  useStructuredData({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top Colleges and Universities in India',
    description: 'IITs, NITs, IISc, IISERs, AIIMS, NLUs and more — India\'s top higher education institutions.',
    numberOfItems: institutionRepo.count(),
  });

  const [activeFilter, setActiveFilter] = useState<InstitutionCategory | 'all'>('all');
  const allInst = institutionRepo.getAll();
  const filtered = activeFilter === 'all'
    ? allInst
    : allInst.filter(i => i.category === activeFilter);

  const sorted = [...filtered].sort((a, b) => (a.nirfRank ?? 999) - (b.nirfRank ?? 999));

  const counts = CATEGORY_FILTERS.reduce((acc, { id }) => {
    acc[id] = id === 'all' ? allInst.length : allInst.filter(i => i.category === id).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs text-stone-400 dark:text-stone-600 mb-1">
          <Link to="/" className="hover:text-stone-600 dark:hover:text-stone-400">Home</Link>
          <span>/</span>
          <span>Institutions</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Colleges & Universities in India</h1>
        <p className="text-stone-500 dark:text-stone-400 text-sm mt-1">
          IITs, NITs, IISc, IISERs, AIIMS, NLUs — India's premier higher education institutions with admission guides, programmes, and NIRF rankings.
        </p>
      </div>

      {/* Filter chips */}
      <div className="flex gap-2 flex-wrap">
        {CATEGORY_FILTERS.map(({ id, label }) => (
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

      {/* Institution list */}
      <div className="space-y-2">
        {sorted.map(inst => {
          const colorClass = categoryColors[inst.category] ?? categoryColors.iit;
          return (
            <Link
              key={inst.id}
              to={`/institutions/${inst.slug}`}
              className="group flex items-start gap-3 p-4 bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 hover:border-veda-300 dark:hover:border-veda-700 transition-colors"
            >
              {/* NIRF rank */}
              {inst.nirfRank && (
                <div className="flex-shrink-0 w-10 text-center">
                  <div className="text-xs text-stone-400 dark:text-stone-600">NIRF</div>
                  <div className="text-lg font-bold text-stone-700 dark:text-stone-300 leading-tight">#{inst.nirfRank}</div>
                </div>
              )}

              <div className={cn('w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5', colorClass)}>
                <University size={15} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="font-semibold text-stone-900 dark:text-stone-100 text-sm group-hover:text-veda-700 dark:group-hover:text-veda-300 transition-colors">
                      {inst.name}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className={cn('text-xs px-1.5 py-0.5 rounded font-medium uppercase tracking-wide', colorClass)}>
                        {inst.shortName}
                      </span>
                      {inst.city && (
                        <span className="text-xs text-stone-400 flex items-center gap-0.5">
                          <MapPin size={10} />
                          {inst.city}{inst.state ? `, ${inst.state}` : ''}
                        </span>
                      )}
                    </div>
                  </div>
                  <ArrowRight size={13} className="flex-shrink-0 mt-1 text-stone-300 group-hover:text-veda-400 transition-colors" />
                </div>

                <p className="text-xs text-stone-500 dark:text-stone-500 line-clamp-1 mt-1.5 leading-relaxed">{inst.description}</p>

                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <Badge className="capitalize">{inst.category.toUpperCase()}</Badge>
                  {inst.naacGrade && (
                    <span className="flex items-center gap-0.5 text-xs text-stone-500">
                      <Award size={10} />
                      NAAC {inst.naacGrade}
                    </span>
                  )}
                  {inst.established && (
                    <span className="text-xs text-stone-400">Est. {inst.established}</span>
                  )}
                  {inst.admissionExams && inst.admissionExams.slice(0, 2).map(e => (
                    <Badge key={e} variant="blue">{e}</Badge>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {sorted.length === 0 && (
        <p className="text-sm text-stone-400 py-8 text-center">No institutions found.</p>
      )}
    </div>
  );
}
