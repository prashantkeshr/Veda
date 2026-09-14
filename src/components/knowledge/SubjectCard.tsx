import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight } from 'lucide-react';
import type { Subject } from '../../models';
import { Card, Badge } from '../ui';
import { cn } from '../../utils/cn';

interface SubjectCardProps {
  subject: Subject;
  className?: string;
}

export function SubjectCard({ subject, className }: SubjectCardProps) {
  const levelLabel = subject.academicLevels[0]?.replace(/-/g, ' ') ?? '';
  return (
    <Link to={`/subjects/${subject.slug}`}>
      <Card hover className={cn('p-5 flex flex-col gap-3', className)}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-stone-900 dark:text-stone-100 line-clamp-2 leading-snug">{subject.title}</h3>
            <p className="text-xs text-stone-400 dark:text-stone-600 mt-0.5">{subject.shortTitle}</p>
          </div>
          <div className="w-9 h-9 rounded-lg bg-veda-50 dark:bg-veda-900/30 flex items-center justify-center flex-shrink-0">
            <BookOpen size={16} className="text-veda-700 dark:text-veda-400" />
          </div>
        </div>

        <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed">
          {subject.description}
        </p>

        <div className="flex items-center justify-between mt-auto pt-2 border-t border-stone-100 dark:border-stone-800">
          <Badge variant="blue" className="capitalize">{levelLabel}</Badge>
          <span className="text-xs text-stone-400 flex items-center gap-0.5">
            {(subject.topicIds?.length ?? 0)} topics
            <ChevronRight size={12} />
          </span>
        </div>
      </Card>
    </Link>
  );
}
