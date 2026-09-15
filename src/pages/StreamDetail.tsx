import { useParams, Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { useStructuredData } from '../hooks/useStructuredData';
import { Layers, BookOpen, Briefcase, ChevronRight, GraduationCap } from 'lucide-react';
import { streamRepo, programmeRepo } from '../repositories';
import { Badge } from '../components/ui';
import { GuideSection } from '../components/knowledge/GuideSection';

export function StreamDetail() {
  const { slug } = useParams<{ slug: string }>();
  const stream = streamRepo.getBySlug(slug ?? '');

  useSEO(
    stream ? `${stream.name} Stream — Subjects, Career & Programmes` : 'Stream Not Found',
    stream
      ? `${stream.name}: core subjects (${stream.coreSubjects.slice(0, 3).join(', ')}), career paths (${stream.careers.slice(0, 3).join(', ')}), and programmes. ${stream.description}`
      : 'Stream not found.'
  );

  useStructuredData(
    stream
      ? {
          '@context': 'https://schema.org',
          '@type': 'EducationalOccupationalProgram',
          name: stream.name,
          description: stream.description,
          programType: 'Academic Stream',
          occupationalCategory: stream.careers.join(', '),
        }
      : null
  );

  if (!stream) {
    return (
      <div className="py-16 text-center">
        <p className="text-stone-500">Stream not found.</p>
        <Link to="/streams" className="mt-4 inline-block text-sm text-veda-700 dark:text-veda-400 hover:underline">
          ← Back to Streams
        </Link>
      </div>
    );
  }

  const programmes = programmeRepo.getMany(stream.programmeIds);

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-stone-400 dark:text-stone-600">
        <Link to="/" className="hover:text-stone-600 dark:hover:text-stone-400">Home</Link>
        <ChevronRight size={12} />
        <Link to="/streams" className="hover:text-stone-600 dark:hover:text-stone-400">Streams</Link>
        <ChevronRight size={12} />
        <span className="text-stone-600 dark:text-stone-400">{stream.name}</span>
      </nav>

      {/* Hero */}
      <div className="rounded-xl bg-gradient-to-br from-veda-700 to-veda-900 dark:from-veda-800 dark:to-stone-900 p-5 text-white">
        <div className="flex items-start gap-3 mb-2">
          <Layers size={20} className="text-veda-300 flex-shrink-0 mt-0.5" />
          <div>
            <h1 className="text-xl font-bold">{stream.name}</h1>
            {stream.shortName && (
              <p className="text-veda-200 text-sm">{stream.shortName}</p>
            )}
          </div>
        </div>
        <p className="text-veda-200 text-sm leading-relaxed mt-2">{stream.description}</p>
      </div>

      {/* Core subjects */}
      <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
        <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3 flex items-center gap-2">
          <BookOpen size={14} />
          Core Subjects
        </h2>
        <div className="flex flex-wrap gap-2">
          {stream.coreSubjects.map(s => (
            <Link
              key={s}
              to={`/search?q=${encodeURIComponent(s)}`}
              className="px-3 py-1.5 rounded-md bg-veda-50 dark:bg-veda-900/20 border border-veda-200 dark:border-veda-800 text-xs text-veda-700 dark:text-veda-400 font-medium hover:bg-veda-100 transition-colors"
            >
              {s}
            </Link>
          ))}
        </div>
      </div>

      {/* Career paths */}
      {stream.careers.length > 0 && (
        <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
          <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3 flex items-center gap-2">
            <Briefcase size={14} />
            Career Pathways
          </h2>
          <div className="flex flex-wrap gap-2">
            {stream.careers.map(c => (
              <span
                key={c}
                className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-xs text-emerald-700 dark:text-emerald-400 font-medium"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Programmes */}
      {programmes.length > 0 && (
        <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
          <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3 flex items-center gap-2">
            <GraduationCap size={14} />
            Degree Programmes in This Stream
          </h2>
          <div className="space-y-2">
            {programmes.map(prog => (
              <Link
                key={prog.id}
                to={`/programmes/${prog.slug}`}
                className="flex items-center justify-between p-2.5 rounded-md bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors group"
              >
                <div>
                  <span className="text-sm font-medium text-stone-700 dark:text-stone-300 group-hover:text-veda-700 dark:group-hover:text-veda-300 transition-colors">
                    {prog.shortName}
                  </span>
                  <span className="text-xs text-stone-400 ml-2">{prog.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge>{prog.durationYears} yr</Badge>
                  <ChevronRight size={12} className="text-stone-400 group-hover:text-veda-400" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Academic levels */}
      <div className="flex flex-wrap gap-2">
        {stream.academicLevels.map(l => (
          <Badge key={l} variant="teal" className="capitalize">{l.replace(/-/g, ' ')}</Badge>
        ))}
      </div>

      {/* Guide */}
      {stream.guide && (
        <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-5">
          <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-4 flex items-center gap-2">
            <BookOpen size={14} />
            Complete Guide: {stream.name}
          </h2>
          <GuideSection guide={stream.guide} />
        </div>
      )}

      {/* Tags */}
      {stream.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {stream.tags.map(tag => (
            <Link
              key={tag}
              to={`/search?q=${encodeURIComponent(tag)}`}
              className="px-2 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-xs text-stone-500 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
