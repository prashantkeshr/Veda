import { Link } from 'react-router-dom';
import { Hash, Clock } from 'lucide-react';
import type { Topic } from '../../models';
import { Card, DifficultyBadge } from '../ui';
import { ProgressBadge } from '../ui/ProgressBadge';
import { useUserData } from '../../app/providers/UserDataProvider';
import { formatMinutes } from '../../utils/format';
import { cn } from '../../utils/cn';

interface TopicCardProps {
  topic: Topic;
  subjectName?: string;
  className?: string;
}

export function TopicCard({ topic, subjectName, className }: TopicCardProps) {
  const { progressMap } = useUserData();
  const status = progressMap[topic.id] ?? 'not-started';

  return (
    <Link to={`/topics/${topic.slug}`}>
      <Card hover className={cn('p-4 flex flex-col gap-2.5', className)}>
        <div className="flex items-start gap-3">
          <div className="w-7 h-7 rounded bg-stone-100 dark:bg-stone-800 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Hash size={13} className="text-stone-500 dark:text-stone-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-stone-900 dark:text-stone-100 text-sm leading-snug">{topic.title}</h3>
            {subjectName && (
              <p className="text-xs text-stone-400 dark:text-stone-600 mt-0.5">{subjectName}</p>
            )}
          </div>
          {status !== 'not-started' && <ProgressBadge status={status} />}
        </div>

        <p className="text-sm text-stone-600 dark:text-stone-400 line-clamp-2 leading-relaxed pl-10">
          {topic.overview}
        </p>

        <div className="flex items-center gap-3 pl-10">
          <DifficultyBadge level={topic.difficulty} />
          {topic.estimatedMinutes && (
            <span className="text-xs text-stone-400 flex items-center gap-1">
              <Clock size={11} />
              {formatMinutes(topic.estimatedMinutes)}
            </span>
          )}
        </div>
      </Card>
    </Link>
  );
}
