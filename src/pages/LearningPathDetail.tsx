import { useParams, Navigate, Link } from 'react-router-dom';
import { Route, Clock, CheckCircle, Hash, FileText, BookOpen } from 'lucide-react';
import { learningPathRepo, examRepo, courseRepo, topicRepo, resourceRepo } from '../repositories';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { Badge, DifficultyBadge, SectionHeader } from '../components/ui';
import { formatMinutes } from '../utils/format';
import { cn } from '../utils/cn';
import { useSEO } from '../hooks/useSEO';
import { useStructuredData, LD_BASE, LD_PROVIDER } from '../hooks/useStructuredData';

const stepTypeIcon: Record<string, typeof Hash> = {
  topic: Hash,
  resource: FileText,
  quiz: CheckCircle,
  milestone: BookOpen,
};

export function LearningPathDetail() {
  const { slug } = useParams<{ slug: string }>();
  const path = learningPathRepo.getBySlug(slug ?? '');
  useSEO(path?.title, path?.description);
  useStructuredData(path ? {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: path.title,
    description: path.description,
    url: `${LD_BASE}/learning-paths/${path.slug}`,
    educationalLevel: path.academicLevel,
    timeRequired: `PT${path.totalMinutes}M`,
    keywords: path.tags.join(', '),
    numberOfCredits: path.steps.length,
    isAccessibleForFree: true,
    provider: LD_PROVIDER,
  } : null);
  if (!path) return <Navigate to="/learning-paths" replace />;

  const goalExams = examRepo.getMany(path.goalExamIds);
  const goalCourses = courseRepo.getMany(path.goalCourseIds);

  return (
    <div className="space-y-8">
      <Breadcrumb items={[{ label: 'Learning Paths', to: '/learning-paths' }, { label: path.title }]} />

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center flex-shrink-0">
          <Route size={22} className="text-teal-600 dark:text-teal-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">{path.title}</h1>
          <p className="text-stone-500 text-sm mt-1 leading-relaxed max-w-2xl">{path.description}</p>
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <DifficultyBadge level={path.difficulty} />
            <span className="flex items-center gap-1 text-xs text-stone-500"><Clock size={12} /> {formatMinutes(path.totalMinutes)}</span>
            <span className="text-xs text-stone-500">{path.steps.length} steps</span>
          </div>
          {(goalExams.length > 0 || goalCourses.length > 0) && (
            <div className="flex flex-wrap gap-2 mt-3">
              {goalExams.map(e => <Badge key={e.id} variant="red">{e.shortTitle}</Badge>)}
              {goalCourses.map(c => <Badge key={c.id} variant="amber">{c.shortTitle}</Badge>)}
            </div>
          )}
        </div>
      </div>

      {/* Steps */}
      <div>
        <SectionHeader title="Study Steps" description="Follow in order for best results" />
        <div className="relative">
          <div className="absolute left-5 top-4 bottom-4 w-px bg-stone-200 dark:bg-stone-800" aria-hidden="true" />
          <div className="space-y-3">
            {path.steps.map((step, i) => {
              const Icon = stepTypeIcon[step.type] ?? Hash;
              const topic = step.type === 'topic' ? topicRepo.getById(step.refId) : undefined;
              const resource = step.type === 'resource' ? resourceRepo.getById(step.refId) : undefined;
              const href = topic ? `/topics/${topic.slug}` : resource ? `/resources/${resource.slug}` : undefined;

              return (
                <div key={step.order} className={cn('relative flex items-start gap-4 pl-1', step.isOptional && 'opacity-70')}>
                  <div className={cn(
                    'z-10 w-9 h-9 rounded-full border-2 flex items-center justify-center flex-shrink-0 text-sm font-mono',
                    step.type === 'milestone'
                      ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400'
                      : 'border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-500'
                  )}>
                    {step.type === 'milestone' ? <CheckCircle size={16} /> : i + 1}
                  </div>
                  <div className="flex-1 bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        {href ? (
                          <Link to={href} className="font-medium text-stone-900 dark:text-stone-100 text-sm hover:text-veda-700 dark:hover:text-veda-400 transition-colors">
                            {step.label}
                          </Link>
                        ) : (
                          <span className="font-medium text-stone-900 dark:text-stone-100 text-sm">{step.label}</span>
                        )}
                        <div className="flex items-center gap-2 mt-1">
                          <span className="flex items-center gap-1 text-xs text-stone-400"><Icon size={10} />{step.type}</span>
                          <span className="text-xs text-stone-400"><Clock size={10} className="inline mr-0.5" />{formatMinutes(step.estimatedMinutes)}</span>
                          {step.isOptional && <Badge>Optional</Badge>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
