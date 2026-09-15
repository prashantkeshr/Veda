import { useParams, Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { useStructuredData } from '../hooks/useStructuredData';
import { GraduationCap, BookOpen, Briefcase, University, Award, ChevronRight, Clock } from 'lucide-react';
import { programmeRepo, institutionRepo } from '../repositories';
import { Badge } from '../components/ui';
import { GuideSection } from '../components/knowledge/GuideSection';

const degreeColors: Record<string, string> = {
  bachelors: 'bg-veda-50 text-veda-700 dark:bg-veda-900/30 dark:text-veda-400 border-veda-200 dark:border-veda-800',
  masters: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
  doctoral: 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400 border-purple-200 dark:border-purple-800',
  integrated: 'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400 border-amber-200 dark:border-amber-800',
  professional: 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400 border-red-200 dark:border-red-800',
};

export function ProgrammeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const prog = programmeRepo.getBySlug(slug ?? '');

  useSEO(
    prog ? `${prog.shortName} — ${prog.name}` : 'Programme Not Found',
    prog
      ? `${prog.name} (${prog.shortName}): ${prog.durationYears}-year ${prog.degree} degree. Admission via ${prog.admissionExams?.join(', ')}. Eligibility: ${prog.eligibility}. ${prog.description}`
      : 'Programme not found.'
  );

  useStructuredData(
    prog
      ? {
          '@context': 'https://schema.org',
          '@type': 'EducationalOccupationalProgram',
          name: prog.name,
          alternateName: prog.shortName,
          description: prog.description,
          timeToComplete: `P${prog.durationYears}Y`,
          programType: prog.degree,
          occupationalCategory: prog.careers.join(', '),
          applicationDeadline: 'varies',
        }
      : null
  );

  if (!prog) {
    return (
      <div className="py-16 text-center">
        <p className="text-stone-500">Programme not found.</p>
        <Link to="/programmes" className="mt-4 inline-block text-sm text-veda-700 dark:text-veda-400 hover:underline">
          ← Back to Programmes
        </Link>
      </div>
    );
  }

  const colorClass = degreeColors[prog.degree] ?? degreeColors.bachelors;
  const topInstitutions = institutionRepo.getMany(prog.topInstitutionIds);

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-stone-400 dark:text-stone-600">
        <Link to="/" className="hover:text-stone-600 dark:hover:text-stone-400">Home</Link>
        <ChevronRight size={12} />
        <Link to="/programmes" className="hover:text-stone-600 dark:hover:text-stone-400">Programmes</Link>
        <ChevronRight size={12} />
        <span className="text-stone-600 dark:text-stone-400">{prog.shortName}</span>
      </nav>

      {/* Hero */}
      <div className={`rounded-xl p-5 border ${colorClass}`}>
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 flex items-center justify-center flex-shrink-0">
            <GraduationCap size={20} className="text-stone-600 dark:text-stone-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <Badge className="capitalize">{prog.degree}</Badge>
              <Badge variant="teal">
                <Clock size={10} className="mr-1" />
                {prog.durationYears} year{prog.durationYears !== 1 ? 's' : ''}
              </Badge>
            </div>
            <h1 className="text-xl font-bold text-stone-900 dark:text-stone-100 leading-tight">
              {prog.name}
            </h1>
            <p className="text-sm font-semibold text-stone-500 dark:text-stone-400 mt-0.5">{prog.shortName}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{prog.description}</p>

      {/* Eligibility */}
      <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
        <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2 flex items-center gap-2">
          <Award size={14} />
          Eligibility
        </h2>
        <p className="text-sm text-stone-600 dark:text-stone-400">{prog.eligibility}</p>
      </div>

      {/* Admission exams */}
      {prog.admissionExams && prog.admissionExams.length > 0 && (
        <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
          <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3 flex items-center gap-2">
            <BookOpen size={14} />
            Admission Examinations
          </h2>
          <div className="flex flex-wrap gap-2">
            {prog.admissionExams.map(exam => (
              <Link
                key={exam}
                to={`/search?q=${encodeURIComponent(exam)}`}
                className="px-3 py-1.5 rounded-md bg-veda-50 dark:bg-veda-900/20 border border-veda-200 dark:border-veda-800 text-xs text-veda-700 dark:text-veda-400 font-medium hover:bg-veda-100 transition-colors"
              >
                {exam}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Core subjects */}
      {prog.coreSubjects.length > 0 && (
        <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
          <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3 flex items-center gap-2">
            <BookOpen size={14} />
            Core Subjects
          </h2>
          <div className="flex flex-wrap gap-2">
            {prog.coreSubjects.map(s => (
              <Link
                key={s}
                to={`/search?q=${encodeURIComponent(s)}`}
                className="px-2.5 py-1 rounded-md bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors"
              >
                {s}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Top institutions */}
      {topInstitutions.length > 0 && (
        <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
          <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3 flex items-center gap-2">
            <University size={14} />
            Top Institutions for {prog.shortName}
          </h2>
          <div className="space-y-2">
            {topInstitutions.map(inst => (
              <Link
                key={inst.id}
                to={`/institutions/${inst.slug}`}
                className="flex items-center justify-between p-2.5 rounded-md bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors group"
              >
                <div>
                  <span className="text-sm font-medium text-stone-700 dark:text-stone-300 group-hover:text-veda-700 dark:group-hover:text-veda-300 transition-colors">
                    {inst.shortName}
                  </span>
                  <span className="text-xs text-stone-400 ml-2">{inst.city}</span>
                </div>
                <div className="flex items-center gap-2">
                  {inst.nirfRank && <Badge>NIRF #{inst.nirfRank}</Badge>}
                  <ChevronRight size={12} className="text-stone-400 group-hover:text-veda-400" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Careers */}
      {prog.careers.length > 0 && (
        <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
          <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3 flex items-center gap-2">
            <Briefcase size={14} />
            Career Pathways
          </h2>
          <div className="flex flex-wrap gap-2">
            {prog.careers.map(c => (
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

      {/* Guide */}
      {prog.guide && (
        <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-5">
          <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-4 flex items-center gap-2">
            <BookOpen size={14} />
            Complete Guide: {prog.shortName}
          </h2>
          <GuideSection guide={prog.guide} />
        </div>
      )}

      {/* Tags */}
      {prog.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {prog.tags.map(tag => (
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
