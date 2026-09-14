import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export function Breadcrumb({ items, className }: { items: BreadcrumbItem[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center flex-wrap gap-1 text-sm', className)}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight size={13} className="text-stone-400 flex-shrink-0" />}
            {item.to && !isLast ? (
              <Link to={item.to} className="text-stone-500 hover:text-veda-700 dark:hover:text-veda-400 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? 'text-stone-700 dark:text-stone-300 font-medium' : 'text-stone-500'}>
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
