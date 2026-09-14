import { useParams, Navigate, Link } from 'react-router-dom';
import { ExternalLink, FileText, Clock, BookOpen } from 'lucide-react';
import { resourceRepo, subjectRepo, topicRepo } from '../repositories';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { Badge, ResourceTypeBadge, VerificationBadge, DifficultyBadge, Button } from '../components/ui';
import { formatMinutes, formatPages } from '../utils/format';

export function ResourceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const resource = resourceRepo.getBySlug(slug ?? '');
  if (!resource) return <Navigate to="/resources" replace />;

  const subjects = subjectRepo.getMany(resource.subjectIds);
  const topics = topicRepo.getMany(resource.topicIds);

  return (
    <div className="space-y-8 max-w-3xl">
      <Breadcrumb items={[{ label: 'Resources', to: '/resources' }, { label: resource.title }]} />

      <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h1 className="text-xl font-bold text-stone-900 dark:text-stone-100">{resource.title}</h1>
            {resource.author && <p className="text-sm text-stone-500 mt-1">by {resource.author}</p>}
          </div>
          <div className="w-10 h-10 rounded-lg bg-stone-50 dark:bg-stone-800 flex items-center justify-center flex-shrink-0">
            <FileText size={20} className="text-stone-400" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <ResourceTypeBadge type={resource.type} />
          <VerificationBadge status={resource.verificationStatus} />
          <DifficultyBadge level={resource.difficulty} />
        </div>

        {resource.description && (
          <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-4">{resource.description}</p>
        )}

        <div className="flex flex-wrap gap-4 text-xs text-stone-500 mb-5">
          {resource.durationMinutes && (
            <span className="flex items-center gap-1"><Clock size={12} /> {formatMinutes(resource.durationMinutes)}</span>
          )}
          {resource.pages && (
            <span className="flex items-center gap-1"><BookOpen size={12} /> {formatPages(resource.pages)}</span>
          )}
          {resource.year && <span>Year: {resource.year}</span>}
          {resource.source && <span>Source: {resource.source}</span>}
          {resource.provider && <span>Provider: {resource.provider}</span>}
        </div>

        {resource.url && (
          <a href={resource.url} target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className="gap-2">
              <ExternalLink size={14} /> Open Resource
            </Button>
          </a>
        )}
      </div>

      {/* Subjects */}
      {subjects.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3">Related Subjects</h2>
          <div className="flex flex-wrap gap-2">
            {subjects.map(s => (
              <Link key={s.id} to={`/subjects/${s.slug}`}>
                <Badge variant="blue">{s.shortTitle}</Badge>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Topics */}
      {topics.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3">Covers Topics</h2>
          <div className="flex flex-wrap gap-2">
            {topics.map(t => (
              <Link key={t.id} to={`/topics/${t.slug}`}>
                <Badge>{t.title}</Badge>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {resource.tags?.length > 0 && (
        <div>
          <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3">Tags</h2>
          <div className="flex flex-wrap gap-1.5">
            {resource.tags.map(t => <Badge key={t}>{t}</Badge>)}
          </div>
        </div>
      )}
    </div>
  );
}
