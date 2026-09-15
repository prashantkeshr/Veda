import { useParams, Navigate, Link } from 'react-router-dom';
import { ClipboardList, ExternalLink, BookOpen } from 'lucide-react';
import { examRepo, subjectRepo, resourceRepo, learningPathRepo } from '../repositories';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { Badge, SectionHeader } from '../components/ui';
import { ResourceCard } from '../components/knowledge/ResourceCard';
import { useSEO } from '../hooks/useSEO';
import { useStructuredData, LD_BASE, LD_PROVIDER } from '../hooks/useStructuredData';
import { ShareButton } from '../components/ui/ShareButton';

export function ExamDetail() {
  const { slug } = useParams<{ slug: string }>();
  const exam = examRepo.getBySlug(slug ?? '');
  useSEO(exam?.title, exam?.description);
  useStructuredData(exam ? {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: exam.title,
    description: exam.description,
    url: `${LD_BASE}/exams/${exam.slug}`,
    educationalLevel: exam.level,
    about: {
      '@type': 'EducationalOccupationalCredential',
      name: exam.title,
      credentialCategory: exam.type,
      recognizedBy: { '@type': 'Organization', name: exam.conductingBody },
    },
    keywords: exam.tags.join(', '),
    isAccessibleForFree: true,
    provider: LD_PROVIDER,
  } : null);
  if (!exam) return <Navigate to="/exams" replace />;

  const subjects = subjectRepo.getByExamId(exam.id);
  const resources = resourceRepo.getByExamId(exam.id);
  const paths = learningPathRepo.getByExamId(exam.id);

  return (
    <div className="space-y-8">
      <Breadcrumb items={[{ label: 'Exams', to: '/exams' }, { label: exam.title }]} />

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center flex-shrink-0">
          <ClipboardList size={22} className="text-red-600 dark:text-red-400" />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">{exam.title}</h1>
            <ShareButton title={exam.title} className="flex-shrink-0" />
          </div>
          <p className="text-stone-500 text-sm mt-1">{exam.conductingBody} · {exam.level}</p>
          <p className="text-stone-600 dark:text-stone-400 text-sm mt-2 leading-relaxed max-w-2xl">{exam.description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="red" className="capitalize">{exam.type}</Badge>
            {exam.tags.map(t => <Badge key={t}>{t}</Badge>)}
          </div>
          {exam.websiteUrl && (
            <a href={exam.websiteUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-veda-700 dark:text-veda-400 hover:underline mt-3">
              <ExternalLink size={13} /> Official Website
            </a>
          )}
        </div>
      </div>

      {/* Eligibility */}
      {exam.eligibility && (
        <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
          <h2 className="font-semibold text-stone-800 dark:text-stone-200 mb-2 text-sm">Eligibility</h2>
          <p className="text-sm text-stone-600 dark:text-stone-400">{exam.eligibility}</p>
        </div>
      )}

      {/* Syllabus */}
      {exam.syllabus?.length > 0 && (
        <div>
          <SectionHeader title="Syllabus" />
          <div className="grid sm:grid-cols-2 gap-2">
            {exam.syllabus.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300 bg-white dark:bg-stone-900 rounded border border-stone-100 dark:border-stone-800 px-3 py-2">
                <BookOpen size={12} className="text-stone-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subjects */}
      {subjects.length > 0 && (
        <div>
          <SectionHeader title="Subjects Covered" />
          <div className="flex flex-wrap gap-2">
            {subjects.map(s => (
              <Link key={s.id} to={`/subjects/${s.slug}`}>
                <Badge variant="blue">{s.shortTitle}</Badge>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Learning paths */}
      {paths.length > 0 && (
        <div>
          <SectionHeader title="Preparation Paths" />
          <div className="flex flex-col gap-2">
            {paths.map(p => (
              <Link key={p.id} to={`/learning-paths/${p.slug}`} className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4 hover:border-stone-300 dark:hover:border-stone-700 transition-colors">
                <div className="font-medium text-stone-900 dark:text-stone-100 text-sm">{p.title}</div>
                <div className="text-xs text-stone-500 mt-1">{p.steps.length} steps · {Math.round(p.totalMinutes / 60)}h</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Resources */}
      {resources.length > 0 && (
        <div>
          <SectionHeader title="Resources" description={`${resources.length} resource${resources.length !== 1 ? 's' : ''} for this exam`} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {resources.map(r => <ResourceCard key={r.id} resource={r} />)}
          </div>
        </div>
      )}
    </div>
  );
}
