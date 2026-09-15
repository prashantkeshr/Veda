import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { useStructuredData } from '../hooks/useStructuredData';
import { Layers, ArrowRight } from 'lucide-react';
import { streamRepo } from '../repositories';
import { Badge } from '../components/ui';

const streamColors = [
  'bg-veda-50 text-veda-700 dark:bg-veda-900/30 dark:text-veda-400',
  'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400',
  'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400',
  'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400',
  'bg-teal-50 text-teal-700 dark:bg-teal-900/20 dark:text-teal-400',
  'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400',
  'bg-sky-50 text-sky-700 dark:bg-sky-900/20 dark:text-sky-400',
  'bg-rose-50 text-rose-700 dark:bg-rose-900/20 dark:text-rose-400',
  'bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400',
  'bg-lime-50 text-lime-700 dark:bg-lime-900/20 dark:text-lime-400',
];

export function Streams() {
  useSEO(
    'Academic Streams in India',
    'Explore all academic streams: Science PCM, PCB, Commerce, Arts, Engineering, Medical, Law, Management, Pure Science. Career paths, subjects, and programmes.'
  );

  useStructuredData({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Academic Streams in India',
    description: 'All academic streams for Class 11-12 and higher education in India.',
    numberOfItems: streamRepo.count(),
  });

  const streams = streamRepo.getAll();

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-xs text-stone-400 dark:text-stone-600 mb-1">
          <Link to="/" className="hover:text-stone-600 dark:hover:text-stone-400">Home</Link>
          <span>/</span>
          <span>Streams</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Academic Streams</h1>
        <p className="text-stone-500 dark:text-stone-400 text-sm mt-1">
          Every academic stream from Class 11–12 through higher education — subjects, career paths, and programmes explained.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {streams.map((stream, idx) => {
          const colorClass = streamColors[idx % streamColors.length];
          return (
            <Link
              key={stream.id}
              to={`/streams/${stream.slug}`}
              className="group block p-4 bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 hover:border-veda-300 dark:hover:border-veda-700 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${colorClass}`}>
                  <Layers size={15} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-semibold text-stone-900 dark:text-stone-100 text-sm group-hover:text-veda-700 dark:group-hover:text-veda-300 transition-colors">
                        {stream.name}
                      </div>
                      {stream.shortName && (
                        <div className="text-xs text-stone-400 mt-0.5">{stream.shortName}</div>
                      )}
                    </div>
                    <ArrowRight size={13} className="flex-shrink-0 mt-0.5 text-stone-300 group-hover:text-veda-400 transition-colors" />
                  </div>
                  <p className="text-xs text-stone-500 dark:text-stone-500 line-clamp-2 mt-1.5 leading-relaxed">
                    {stream.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {stream.coreSubjects.slice(0, 3).map(s => (
                      <Badge key={s}>{s}</Badge>
                    ))}
                    {stream.coreSubjects.length > 3 && (
                      <Badge>+{stream.coreSubjects.length - 3}</Badge>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
