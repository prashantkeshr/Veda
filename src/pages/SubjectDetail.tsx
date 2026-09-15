import { useParams, Navigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { useStructuredData, LD_BASE, LD_PROVIDER } from '../hooks/useStructuredData';
import { BookOpen, Hash, FileText, ClipboardList } from 'lucide-react';
import { subjectRepo, topicRepo, resourceRepo, examRepo } from '../repositories';
import { TopicCard } from '../components/knowledge/TopicCard';
import { ResourceCard } from '../components/knowledge/ResourceCard';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { Badge, SectionHeader, EmptyState } from '../components/ui';

export function SubjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const subject = subjectRepo.getBySlug(slug ?? '');
  useSEO(subject?.title, subject?.description);
  useStructuredData(subject ? {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: subject.title,
    description: subject.description,
    url: `${LD_BASE}/subjects/${subject.slug}`,
    educationalLevel: subject.academicLevels.join(', '),
    keywords: subject.tags.join(', '),
    isAccessibleForFree: true,
    provider: LD_PROVIDER,
  } : null);

  if (!subject) return <Navigate to="/subjects" replace />;

  const topics = topicRepo.getBySubjectId(subject.id);
  const resources = resourceRepo.getBySubjectId(subject.id);
  const exams = examRepo.getBySubjectId(subject.id);

  return (
    <div className="space-y-8">
      <Breadcrumb items={[{ label: 'Subjects', to: '/subjects' }, { label: subject.title }]} />

      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-veda-50 dark:bg-veda-900/30 flex items-center justify-center flex-shrink-0">
          <BookOpen size={22} className="text-veda-700 dark:text-veda-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">{subject.title}</h1>
          <p className="text-stone-500 dark:text-stone-400 mt-1 text-sm leading-relaxed max-w-2xl">
            {subject.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            {subject.academicLevels.map(l => (
              <Badge key={l} variant="blue" className="capitalize">{l.replace(/-/g, ' ')}</Badge>
            ))}
            {subject.tags.map(t => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { icon: Hash, label: 'Topics', count: topics.length },
          { icon: FileText, label: 'Resources', count: resources.length },
          { icon: ClipboardList, label: 'Exams', count: exams.length },
        ].map(({ icon: Icon, label, count }) => (
          <div key={label} className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4 text-center">
            <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">{count}</div>
            <div className="text-xs text-stone-500 flex items-center justify-center gap-1 mt-1">
              <Icon size={12} />{label}
            </div>
          </div>
        ))}
      </div>

      {/* Topics */}
      <div>
        <SectionHeader title="Topics" description={`${topics.length} topic${topics.length !== 1 ? 's' : ''} in this subject`} />
        {topics.length === 0 ? (
          <EmptyState icon={<Hash size={36} />} title="No topics yet" />
        ) : (
          <div className="grid sm:grid-cols-2 gap-3">
            {topics.map(t => <TopicCard key={t.id} topic={t} />)}
          </div>
        )}
      </div>

      {/* Resources */}
      {resources.length > 0 && (
        <div>
          <SectionHeader title="Resources" description={`${resources.length} resource${resources.length !== 1 ? 's' : ''}`} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {resources.map(r => <ResourceCard key={r.id} resource={r} />)}
          </div>
        </div>
      )}

      {/* Exams */}
      {exams.length > 0 && (
        <div>
          <SectionHeader title="Relevant Exams" />
          <div className="flex flex-wrap gap-2">
            {exams.map(e => (
              <a key={e.id} href={`/exams/${e.slug}`} className="px-3 py-1.5 rounded-md border border-stone-200 dark:border-stone-700 text-sm text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">
                {e.shortTitle}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
