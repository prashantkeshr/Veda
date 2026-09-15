import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { Bookmark, Hash, FileText, X, Clock } from 'lucide-react';
import { useUserData } from '../app/providers/UserDataProvider';
import { topicRepo, resourceRepo, subjectRepo } from '../repositories';
import { cn } from '../utils/cn';
import { formatMinutes, difficultyLabel, resourceTypeLabel } from '../utils/format';

// ── Types ──────────────────────────────────────────────────────────────────

type FilterTab = 'all' | 'topic' | 'resource';

const DIFF_COLORS: Record<string, string> = {
  beginner:     'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  intermediate: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  advanced:     'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  expert:       'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
};

function fmtDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric',
  });
}

// ── Component ──────────────────────────────────────────────────────────────

export function Bookmarks() {
  useSEO('Saved Items', 'All your saved topics and resources in one place.');

  const { bookmarks, toggleBookmark, ready } = useUserData();
  const [tab, setTab] = useState<FilterTab>('all');

  const sorted = useMemo(
    () => [...bookmarks].sort((a, b) => b.savedAt.localeCompare(a.savedAt)),
    [bookmarks]
  );

  const topicCount    = useMemo(() => sorted.filter(b => b.type === 'topic').length,    [sorted]);
  const resourceCount = useMemo(() => sorted.filter(b => b.type === 'resource').length, [sorted]);

  const filtered = tab === 'all' ? sorted : sorted.filter(b => b.type === tab);

  const tabs: { id: FilterTab; label: string; count: number }[] = [
    { id: 'all',      label: 'All',       count: sorted.length },
    { id: 'topic',    label: 'Topics',    count: topicCount    },
    { id: 'resource', label: 'Resources', count: resourceCount },
  ];

  if (!ready) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-6 h-6 border-2 border-veda-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-8">

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-veda-700 flex items-center justify-center flex-shrink-0">
          <Bookmark size={20} className="text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Saved Items</h1>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            {sorted.length === 0
              ? 'Nothing saved yet'
              : `${sorted.length} item${sorted.length !== 1 ? 's' : ''} saved`}
          </p>
        </div>
      </div>

      {/* Filter tabs */}
      {sorted.length > 0 && (
        <div className="flex gap-1 border-b border-stone-200 dark:border-stone-800">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                'px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors flex items-center gap-1.5',
                tab === t.id
                  ? 'border-veda-600 text-veda-700 dark:text-veda-400'
                  : 'border-transparent text-stone-500 hover:text-stone-700 dark:hover:text-stone-300'
              )}
            >
              {t.label}
              <span className={cn(
                'text-[10px] px-1.5 py-0.5 rounded-full tabular-nums font-medium',
                tab === t.id
                  ? 'bg-veda-100 text-veda-700 dark:bg-veda-900/30 dark:text-veda-400'
                  : 'bg-stone-100 text-stone-500 dark:bg-stone-800 dark:text-stone-400'
              )}>
                {t.count}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Empty state */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center py-16 text-center">
          <Bookmark size={36} className="text-stone-200 dark:text-stone-700 mb-4" />
          <p className="text-base font-medium text-stone-400 dark:text-stone-500">
            {sorted.length === 0 ? 'Nothing saved yet' : `No ${tab}s saved`}
          </p>
          <p className="text-sm text-stone-300 dark:text-stone-600 mt-1 max-w-sm">
            {sorted.length === 0
              ? 'Open any topic or resource and tap the bookmark icon to save it here.'
              : 'Try a different filter above.'}
          </p>
        </div>
      ) : (
        /* Bookmark list */
        <div className="space-y-2">
          {filtered.map(bookmark => {
            const isTopicType    = bookmark.type === 'topic';
            const isResourceType = bookmark.type === 'resource';

            const topic    = isTopicType    ? topicRepo.getById(bookmark.entityId)    : null;
            const resource = isResourceType ? resourceRepo.getById(bookmark.entityId) : null;
            const subject  = topic ? subjectRepo.getById(topic.subjectIds[0]) : null;

            const linkPath = isTopicType
              ? `/topics/${bookmark.slug}`
              : isResourceType
              ? `/resources/${bookmark.slug}`
              : null;

            return (
              <div
                key={bookmark.entityId}
                className="flex items-start gap-3 p-4 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 group hover:border-stone-300 dark:hover:border-stone-700 transition-colors"
              >
                {/* Type icon */}
                <div className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {isTopicType
                    ? <Hash size={14} className="text-veda-600 dark:text-veda-400" />
                    : <FileText size={14} className="text-stone-500 dark:text-stone-400" />}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {linkPath ? (
                    <Link
                      to={linkPath}
                      className="text-sm font-medium text-stone-900 dark:text-stone-100 hover:text-veda-700 dark:hover:text-veda-400 transition-colors line-clamp-1"
                    >
                      {bookmark.title}
                    </Link>
                  ) : (
                    <p className="text-sm font-medium text-stone-900 dark:text-stone-100 line-clamp-1">
                      {bookmark.title}
                    </p>
                  )}

                  {/* Meta chips */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                    {subject && (
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400">
                        {subject.shortTitle}
                      </span>
                    )}
                    {topic?.difficulty && (
                      <span className={cn(
                        'text-[10px] font-medium px-1.5 py-0.5 rounded',
                        DIFF_COLORS[topic.difficulty] ?? 'bg-stone-100 text-stone-500'
                      )}>
                        {difficultyLabel(topic.difficulty)}
                      </span>
                    )}
                    {topic && topic.estimatedMinutes > 0 && (
                      <span className="text-[10px] text-stone-400 flex items-center gap-0.5">
                        <Clock size={10} />
                        {formatMinutes(topic.estimatedMinutes)}
                      </span>
                    )}
                    {resource && (
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400">
                        {resourceTypeLabel(resource.type)}
                      </span>
                    )}
                    <span className="text-[10px] text-stone-300 dark:text-stone-600">
                      Saved {fmtDate(bookmark.savedAt)}
                    </span>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() => toggleBookmark({
                    entityId: bookmark.entityId,
                    type: bookmark.type,
                    slug: bookmark.slug,
                    title: bookmark.title,
                  })}
                  className="p-1.5 rounded-md text-stone-300 dark:text-stone-600 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0"
                  aria-label="Remove bookmark"
                  title="Remove bookmark"
                >
                  <X size={14} />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
