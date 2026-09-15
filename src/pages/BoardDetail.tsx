import { useParams, Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { useStructuredData } from '../hooks/useStructuredData';
import { Building2, Globe, MapPin, Calendar, ExternalLink, BookOpen, ChevronRight } from 'lucide-react';
import { boardRepo } from '../repositories';
import { Badge } from '../components/ui';
import { GuideSection } from '../components/knowledge/GuideSection';
import { cn } from '../utils/cn';

const typeColors: Record<string, string> = {
  central: 'bg-veda-50 text-veda-700 dark:bg-veda-900/30 dark:text-veda-400 border-veda-200 dark:border-veda-800',
  state: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
  international: 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400 border-purple-200 dark:border-purple-800',
  'open-school': 'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400 border-amber-200 dark:border-amber-800',
};

const typeLabel: Record<string, string> = {
  central: 'Central Board',
  state: 'State Board',
  international: 'International Board',
  'open-school': 'Open School',
};

export function BoardDetail() {
  const { slug } = useParams<{ slug: string }>();
  const board = boardRepo.getBySlug(slug ?? '');

  useSEO(
    board ? `${board.shortName} — ${board.name}` : 'Board Not Found',
    board
      ? `${board.name} (${board.shortName}): syllabus, examination pattern, streams, classes (${board.classes.join(', ')}), and study resources. ${board.description}`
      : 'Board not found.'
  );

  useStructuredData(
    board
      ? {
          '@context': 'https://schema.org',
          '@type': 'EducationalOrganization',
          name: board.name,
          alternateName: board.shortName,
          description: board.description,
          foundingDate: board.established?.toString(),
          address: board.headquarters
            ? { '@type': 'PostalAddress', addressLocality: board.headquarters }
            : undefined,
          url: board.website,
        }
      : null
  );

  if (!board) {
    return (
      <div className="py-16 text-center">
        <p className="text-stone-500">Board not found.</p>
        <Link to="/boards" className="mt-4 inline-block text-sm text-veda-700 dark:text-veda-400 hover:underline">
          ← Back to Boards
        </Link>
      </div>
    );
  }

  const colorClass = typeColors[board.type] ?? typeColors.central;

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-stone-400 dark:text-stone-600">
        <Link to="/" className="hover:text-stone-600 dark:hover:text-stone-400">Home</Link>
        <ChevronRight size={12} />
        <Link to="/boards" className="hover:text-stone-600 dark:hover:text-stone-400">Boards</Link>
        <ChevronRight size={12} />
        <span className="text-stone-600 dark:text-stone-400">{board.shortName}</span>
      </nav>

      {/* Hero */}
      <div className={cn('rounded-xl p-5 border', colorClass)}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 flex items-center justify-center flex-shrink-0">
            <Building2 size={20} className="text-stone-600 dark:text-stone-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <Badge className="capitalize">{typeLabel[board.type] ?? board.type}</Badge>
              {board.state && <Badge variant="green">{board.state}</Badge>}
            </div>
            <h1 className="text-xl font-bold text-stone-900 dark:text-stone-100 leading-tight">
              {board.name}
            </h1>
            <p className="text-sm font-semibold text-stone-500 dark:text-stone-400 mt-0.5">{board.shortName}</p>
          </div>
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap gap-4 mt-4 text-xs text-stone-600 dark:text-stone-400">
          {board.headquarters && (
            <span className="flex items-center gap-1.5">
              <MapPin size={12} />
              {board.headquarters}
            </span>
          )}
          {board.established && (
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              Est. {board.established}
            </span>
          )}
          {board.website && (
            <a
              href={board.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-veda-700 dark:text-veda-400 hover:underline"
            >
              <Globe size={12} />
              Official Website
              <ExternalLink size={10} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{board.description}</p>

      {/* Classes covered */}
      {board.classes.length > 0 && (
        <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
          <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3 flex items-center gap-2">
            <BookOpen size={14} />
            Classes Covered
          </h2>
          <div className="flex flex-wrap gap-2">
            {board.classes.map(cls => (
              <span
                key={cls}
                className="px-2.5 py-1 rounded-md bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs text-stone-600 dark:text-stone-400 font-medium capitalize"
              >
                {cls.replace('class-', 'Class ')}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Streams */}
      {board.streams.length > 0 && (
        <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
          <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3">
            Academic Streams
          </h2>
          <div className="flex flex-wrap gap-2">
            {board.streams.map(s => (
              <Link
                key={s}
                to={`/streams/${s}`}
                className="px-2.5 py-1 rounded-md bg-veda-50 dark:bg-veda-900/20 border border-veda-200 dark:border-veda-800 text-xs text-veda-700 dark:text-veda-400 font-medium hover:bg-veda-100 dark:hover:bg-veda-900/30 transition-colors capitalize"
              >
                {s.replace(/-/g, ' ').replace('science pcm', 'Science PCM').replace('science pcb', 'Science PCB').replace('science pcmb', 'Science PCMB').replace('arts', 'Arts').replace('commerce', 'Commerce')}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Guide */}
      {board.guide && (
        <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-5">
          <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-4 flex items-center gap-2">
            <BookOpen size={14} />
            About {board.shortName}
          </h2>
          <GuideSection guide={board.guide} />
        </div>
      )}

      {/* Tags */}
      {board.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {board.tags.map(tag => (
            <Link
              key={tag}
              to={`/search?q=${encodeURIComponent(tag)}`}
              className="px-2 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-xs text-stone-500 dark:text-stone-500 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
