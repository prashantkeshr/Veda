import { Bookmark } from 'lucide-react';
import { useUserData } from '../../app/providers/UserDataProvider';
import { cn } from '../../utils/cn';

interface BookmarkButtonProps {
  entityId: string;
  type: string;
  slug: string;
  title: string;
  className?: string;
  size?: number;
}

export function BookmarkButton({ entityId, type, slug, title, className, size = 15 }: BookmarkButtonProps) {
  const { bookmarkIds, toggleBookmark } = useUserData();
  const saved = bookmarkIds.has(entityId);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark({ entityId, type, slug, title });
  }

  return (
    <button
      onClick={handleClick}
      aria-label={saved ? 'Remove bookmark' : 'Save bookmark'}
      title={saved ? 'Remove bookmark' : 'Save bookmark'}
      className={cn(
        'p-1.5 rounded transition-colors',
        saved
          ? 'text-veda-700 dark:text-veda-400'
          : 'text-stone-400 hover:text-stone-600 dark:hover:text-stone-300',
        className
      )}
    >
      <Bookmark size={size} fill={saved ? 'currentColor' : 'none'} />
    </button>
  );
}
