import { useParams, Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { useStructuredData } from '../hooks/useStructuredData';
import { University, MapPin, Calendar, Globe, ExternalLink, Award, BookOpen, ChevronRight, GraduationCap } from 'lucide-react';
import { institutionRepo, programmeRepo } from '../repositories';
import { Badge } from '../components/ui';
import { GuideSection } from '../components/knowledge/GuideSection';
import { cn } from '../utils/cn';

const categoryColors: Record<string, string> = {
  iit: 'bg-veda-50 text-veda-700 dark:bg-veda-900/30 dark:text-veda-400 border-veda-200 dark:border-veda-800',
  nit: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
  iisc: 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400 border-purple-200 dark:border-purple-800',
  iiser: 'bg-teal-50 text-teal-700 dark:bg-teal-900/20 dark:text-teal-400 border-teal-200 dark:border-teal-800',
  aiims: 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400 border-red-200 dark:border-red-800',
  nlu: 'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400 border-amber-200 dark:border-amber-800',
};

export function InstitutionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const inst = institutionRepo.getBySlug(slug ?? '');

  useSEO(
    inst ? `${inst.shortName} — ${inst.name}` : 'Institution Not Found',
    inst
      ? `${inst.name}: admission, programmes, NIRF rank, and complete guide. ${inst.description}`
      : 'Institution not found.'
  );

  useStructuredData(
    inst
      ? {
          '@context': 'https://schema.org',
          '@type': 'CollegeOrUniversity',
          name: inst.name,
          alternateName: inst.shortName,
          description: inst.description,
          foundingDate: inst.established?.toString(),
          address: {
            '@type': 'PostalAddress',
            addressLocality: inst.city,
            addressRegion: inst.state,
            addressCountry: inst.countryId,
          },
          url: inst.website,
        }
      : null
  );

  if (!inst) {
    return (
      <div className="py-16 text-center">
        <p className="text-stone-500">Institution not found.</p>
        <Link to="/institutions" className="mt-4 inline-block text-sm text-veda-700 dark:text-veda-400 hover:underline">
          ← Back to Institutions
        </Link>
      </div>
    );
  }

  const colorClass = categoryColors[inst.category] ?? categoryColors.iit;
  const programmes = programmeRepo.getMany(inst.programmeIds);

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-stone-400 dark:text-stone-600">
        <Link to="/" className="hover:text-stone-600 dark:hover:text-stone-400">Home</Link>
        <ChevronRight size={12} />
        <Link to="/institutions" className="hover:text-stone-600 dark:hover:text-stone-400">Institutions</Link>
        <ChevronRight size={12} />
        <span className="text-stone-600 dark:text-stone-400">{inst.shortName}</span>
      </nav>

      {/* Hero */}
      <div className={cn('rounded-xl p-5 border', colorClass)}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 flex items-center justify-center flex-shrink-0">
            <University size={20} className="text-stone-600 dark:text-stone-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <Badge className="uppercase">{inst.category}</Badge>
              {inst.naacGrade && <Badge variant="green">NAAC {inst.naacGrade}</Badge>}
              {inst.nirfRank && <Badge variant="amber">NIRF #{inst.nirfRank}</Badge>}
            </div>
            <h1 className="text-xl font-bold text-stone-900 dark:text-stone-100 leading-tight">
              {inst.name}
            </h1>
            <p className="text-sm font-semibold text-stone-500 dark:text-stone-400 mt-0.5">{inst.shortName}</p>
          </div>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 mt-4 text-xs text-stone-600 dark:text-stone-400">
          {inst.city && (
            <span className="flex items-center gap-1.5">
              <MapPin size={12} />
              {inst.city}{inst.state ? `, ${inst.state}` : ''}
            </span>
          )}
          {inst.established && (
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              Est. {inst.established}
            </span>
          )}
          {inst.website && (
            <a
              href={inst.website}
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
      <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{inst.description}</p>

      {/* Admission exams */}
      {inst.admissionExams && inst.admissionExams.length > 0 && (
        <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
          <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3 flex items-center gap-2">
            <Award size={14} />
            Admission Through
          </h2>
          <div className="flex flex-wrap gap-2">
            {inst.admissionExams.map(exam => (
              <Link
                key={exam}
                to={`/search?q=${encodeURIComponent(exam)}`}
                className="px-3 py-1.5 rounded-md bg-veda-50 dark:bg-veda-900/20 border border-veda-200 dark:border-veda-800 text-xs text-veda-700 dark:text-veda-400 font-medium hover:bg-veda-100 dark:hover:bg-veda-900/30 transition-colors"
              >
                {exam}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Programmes */}
      {programmes.length > 0 && (
        <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
          <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3 flex items-center gap-2">
            <GraduationCap size={14} />
            Programmes Offered
          </h2>
          <div className="flex flex-wrap gap-2">
            {programmes.map(prog => (
              <Link
                key={prog.id}
                to={`/programmes/${prog.slug}`}
                className="px-3 py-1.5 rounded-md bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-300 font-medium hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors"
              >
                {prog.shortName}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Guide */}
      {inst.guide && (
        <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-5">
          <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-4 flex items-center gap-2">
            <BookOpen size={14} />
            About {inst.shortName}
          </h2>
          <GuideSection guide={inst.guide} />
        </div>
      )}

      {/* Tags */}
      {inst.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {inst.tags.map(tag => (
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
