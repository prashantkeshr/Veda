import { useParams, Navigate, Link } from 'react-router-dom';
import { GraduationCap, BookOpen } from 'lucide-react';
import { courseRepo, subjectRepo } from '../repositories';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { Badge, SectionHeader } from '../components/ui';
import { useSEO } from '../hooks/useSEO';
import { useStructuredData, LD_BASE, LD_PROVIDER } from '../hooks/useStructuredData';
import { ShareButton } from '../components/ui/ShareButton';

export function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const course = courseRepo.getBySlug(slug ?? '');
  useSEO(course?.title, course?.description, course ? `/courses/${course.slug}` : undefined);
  useStructuredData(course ? {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    url: `${LD_BASE}/courses/${course.slug}`,
    educationalLevel: course.academicLevel.replace(/-/g, ' '),
    courseWorkload: `P${course.durationYears}Y`,
    keywords: course.tags.join(', '),
    isAccessibleForFree: true,
    provider: LD_PROVIDER,
  } : null);
  if (!course) return <Navigate to="/courses" replace />;

  return (
    <div className="space-y-8">
      <Breadcrumb items={[{ label: 'Courses', to: '/courses' }, { label: course.title }]} />

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
          <GraduationCap size={22} className="text-amber-600 dark:text-amber-400" />
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">{course.title}</h1>
            <ShareButton title={course.title} className="flex-shrink-0" />
          </div>
          <p className="text-stone-500 mt-1 text-sm leading-relaxed max-w-2xl">{course.description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="amber" className="capitalize">{course.academicLevel.replace(/-/g, ' ')}</Badge>
            <Badge>{course.durationYears} years</Badge>
            {course.tags.map(t => <Badge key={t}>{t}</Badge>)}
          </div>
        </div>
      </div>

      {/* Semesters */}
      <div className="space-y-4">
        <SectionHeader title="Semester Structure" />
        {course.semesters.map(sem => {
          const subjects = subjectRepo.getMany(sem.subjectIds);
          return (
            <div key={sem.number} className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
              <h3 className="font-semibold text-stone-800 dark:text-stone-200 mb-3 text-sm">
                {sem.label}
              </h3>
              {subjects.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-2">
                  {subjects.map(s => (
                    <Link key={s.id} to={`/subjects/${s.slug}`} className="flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400 hover:text-veda-700 dark:hover:text-veda-400 transition-colors">
                      <BookOpen size={13} className="flex-shrink-0 text-stone-400" />
                      {s.title}
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-stone-400">No subjects linked yet.</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
