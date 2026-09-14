import { Link } from 'react-router-dom';
import { ExternalLink, BookOpen } from 'lucide-react';
import type { Resource } from '../../models';
import { Card, ResourceTypeBadge, VerificationBadge } from '../ui';
import { BookmarkButton } from '../ui/BookmarkButton';
import { cn } from '../../utils/cn';

interface ResourceCardProps {
  resource: Resource;
  className?: string;
}

export function ResourceCard({ resource, className }: ResourceCardProps) {
  return (
    <Link to={`/resources/${resource.slug}`}>
      <Card hover className={cn('p-4 flex flex-col gap-2.5', className)}>
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-start gap-2 flex-1 min-w-0">
            <div className="w-8 h-8 rounded bg-stone-50 dark:bg-stone-800 flex items-center justify-center flex-shrink-0">
              <BookOpen size={14} className="text-stone-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-stone-900 dark:text-stone-100 text-sm leading-snug line-clamp-2">
                {resource.title}
              </h3>
              {resource.author && (
                <p className="text-xs text-stone-400 mt-0.5 truncate">{resource.author}</p>
              )}
            </div>
          </div>
          <BookmarkButton
            entityId={resource.id}
            type="resource"
            slug={resource.slug}
            title={resource.title}
            size={14}
          />
        </div>

        {resource.description && (
          <p className="text-xs text-stone-500 dark:text-stone-500 line-clamp-2 leading-relaxed">
            {resource.description}
          </p>
        )}

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2 flex-wrap">
            <ResourceTypeBadge type={resource.type} />
            <VerificationBadge status={resource.verificationStatus} />
          </div>
          {resource.url && (
            <ExternalLink size={13} className="text-stone-400 flex-shrink-0" />
          )}
        </div>
      </Card>
    </Link>
  );
}
