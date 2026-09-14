import { CheckCircle, Circle, Clock } from 'lucide-react';
import { cn } from '../../utils/cn';

type Status = 'not-started' | 'in-progress' | 'completed';

interface ProgressBadgeProps {
  status: Status;
  className?: string;
}

const config: Record<Status, { icon: typeof Circle; label: string; className: string }> = {
  'not-started': {
    icon: Circle,
    label: 'Not started',
    className: 'text-stone-400',
  },
  'in-progress': {
    icon: Clock,
    label: 'In progress',
    className: 'text-amber-500',
  },
  completed: {
    icon: CheckCircle,
    label: 'Completed',
    className: 'text-emerald-500',
  },
};

export function ProgressBadge({ status, className }: ProgressBadgeProps) {
  const { icon: Icon, label, className: colorClass } = config[status];
  return (
    <span className={cn('inline-flex items-center gap-1 text-xs font-medium', colorClass, className)}>
      <Icon size={12} />
      {label}
    </span>
  );
}
