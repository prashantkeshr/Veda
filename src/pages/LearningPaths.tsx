import { Route, Clock } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';
import { learningPathRepo } from '../repositories';
import { Card, DifficultyBadge, EmptyState, SectionHeader } from '../components/ui';
import { formatMinutes } from '../utils/format';

export function LearningPaths() {
  useSEO('Learning Paths', 'Curated step-by-step learning paths through engineering subjects and exam preparation.');
  const paths = learningPathRepo.getAll();

  return (
    <div className="space-y-6">
      <SectionHeader title="Learning Paths" description="Structured study sequences for exams and courses" />

      {paths.length === 0 ? (
        <EmptyState icon={<Route size={40} />} title="No learning paths yet" />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paths.map(p => (
            <Link key={p.id} to={`/learning-paths/${p.slug}`}>
              <Card hover className="p-5 flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center flex-shrink-0">
                    <Route size={18} className="text-teal-600 dark:text-teal-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-stone-900 dark:text-stone-100 text-sm leading-snug">{p.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">{p.description}</p>

                <div className="flex items-center justify-between pt-2 border-t border-stone-100 dark:border-stone-800">
                  <DifficultyBadge level={p.difficulty} />
                  <div className="flex items-center gap-1 text-xs text-stone-400">
                    <Clock size={11} />
                    {formatMinutes(p.totalMinutes)}
                  </div>
                </div>

                <div className="text-xs text-stone-400">{p.steps.length} steps</div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
