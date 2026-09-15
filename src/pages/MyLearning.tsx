import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import {
  BookOpen, Hash, FileText, GraduationCap, ClipboardList, Route,
  CheckCircle, Clock, Bookmark, Trophy, ChevronRight,
} from 'lucide-react';
import { useUserData } from '../app/providers/UserDataProvider';
import { topicRepo } from '../repositories';
import { TopicCard } from '../components/knowledge/TopicCard';
import { EmptyState, SectionHeader } from '../components/ui';
import { cn } from '../utils/cn';

const entityPath: Record<string, string> = {
  subject: 'subjects', topic: 'topics', resource: 'resources',
  course: 'courses', exam: 'exams', 'learning-path': 'learning-paths',
};

const entityIcon: Record<string, typeof BookOpen> = {
  subject: BookOpen, topic: Hash, resource: FileText,
  course: GraduationCap, exam: ClipboardList, 'learning-path': Route,
};

export function MyLearning() {
  useSEO('My Learning', 'Track your progress, bookmarks, and quiz history across all topics.');
  const { progressMap, bookmarks, quizAttempts, ready } = useUserData();

  if (!ready) {
    return (
      <div className="flex items-center justify-center py-20">
        <span className="text-sm text-stone-400">Loading your data…</span>
      </div>
    );
  }

  const inProgressIds = Object.entries(progressMap).filter(([, s]) => s === 'in-progress').map(([id]) => id);
  const completedIds = Object.entries(progressMap).filter(([, s]) => s === 'completed').map(([id]) => id);
  const inProgressTopics = topicRepo.getMany(inProgressIds);
  const completedTopics = topicRepo.getMany(completedIds);

  const totalAttempts = quizAttempts.length;
  const avgScore = totalAttempts > 0
    ? Math.round(quizAttempts.reduce((acc, a) => acc + (a.score / a.total) * 100, 0) / totalAttempts)
    : 0;
  const bestScore = totalAttempts > 0
    ? Math.max(...quizAttempts.map(a => Math.round((a.score / a.total) * 100)))
    : 0;

  const recentAttempts = [...quizAttempts].reverse().slice(0, 5);

  const hasAnything = bookmarks.length > 0 || inProgressTopics.length > 0 || completedTopics.length > 0 || totalAttempts > 0;

  if (!hasAnything) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">My Learning</h1>
        <EmptyState
          icon={<Bookmark size={40} />}
          title="Nothing saved yet"
          description="Mark topics as In Progress, bookmark resources, or take a practice quiz to see your activity here."
          action={
            <Link to="/subjects" className="px-4 py-2 bg-veda-700 text-white rounded-md text-sm font-medium hover:bg-veda-800 transition-colors">
              Browse Subjects
            </Link>
          }
        />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">My Learning</h1>

      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { icon: Clock, label: 'In Progress', value: inProgressTopics.length, color: 'text-amber-500' },
          { icon: CheckCircle, label: 'Completed', value: completedTopics.length, color: 'text-emerald-500' },
          { icon: Bookmark, label: 'Bookmarks', value: bookmarks.length, color: 'text-veda-700 dark:text-veda-400' },
          { icon: Trophy, label: 'Quiz Avg', value: totalAttempts > 0 ? `${avgScore}%` : '—', color: 'text-purple-500' },
        ].map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4 text-center">
            <Icon size={18} className={cn('mx-auto mb-1', color)} />
            <div className="text-2xl font-bold text-stone-900 dark:text-stone-100">{value}</div>
            <div className="text-xs text-stone-500 mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* In progress */}
      {inProgressTopics.length > 0 && (
        <div>
          <SectionHeader
            title="In Progress"
            description={`${inProgressTopics.length} topic${inProgressTopics.length !== 1 ? 's' : ''} in progress`}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {inProgressTopics.map(t => <TopicCard key={t.id} topic={t} />)}
          </div>
        </div>
      )}

      {/* Bookmarks */}
      {bookmarks.length > 0 && (
        <div>
          <SectionHeader title="Bookmarks" description={`${bookmarks.length} saved item${bookmarks.length !== 1 ? 's' : ''}`} />
          <div className="space-y-2">
            {bookmarks.map(b => {
              const Icon = entityIcon[b.type] ?? BookOpen;
              const path = entityPath[b.type] ?? 'subjects';
              return (
                <Link key={b.entityId} to={`/${path}/${b.slug}`}>
                  <div className="flex items-center gap-3 p-3 bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 transition-colors">
                    <div className="w-7 h-7 rounded bg-stone-50 dark:bg-stone-800 flex items-center justify-center flex-shrink-0">
                      <Icon size={13} className="text-stone-500 dark:text-stone-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-stone-900 dark:text-stone-100 truncate">{b.title}</p>
                      <p className="text-xs text-stone-400 capitalize">{b.type.replace(/-/g, ' ')}</p>
                    </div>
                    <ChevronRight size={14} className="text-stone-400 flex-shrink-0" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Quiz history */}
      {totalAttempts > 0 && (
        <div>
          <SectionHeader
            title="Quiz History"
            description={`${totalAttempts} attempt${totalAttempts !== 1 ? 's' : ''} · best score ${bestScore}%`}
          />
          <div className="space-y-2">
            {recentAttempts.map((a, i) => {
              const pct = Math.round((a.score / a.total) * 100);
              const topic = topicRepo.getById(a.topicId);
              return (
                <div key={i} className="flex items-center gap-3 p-3 bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800">
                  <div className={cn(
                    'w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0',
                    pct >= 80 ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400' :
                    pct >= 50 ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400' :
                    'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
                  )}>
                    {pct}%
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-stone-900 dark:text-stone-100 truncate">
                      {topic ? topic.title : 'Practice Quiz'}
                    </p>
                    <p className="text-xs text-stone-400">{a.score}/{a.total} correct · {new Date(a.date).toLocaleDateString()}</p>
                  </div>
                  <div className="w-16 h-1.5 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden flex-shrink-0">
                    <div
                      className={cn(
                        'h-full rounded-full',
                        pct >= 80 ? 'bg-emerald-500' : pct >= 50 ? 'bg-amber-500' : 'bg-red-500'
                      )}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Completed topics */}
      {completedTopics.length > 0 && (
        <div>
          <SectionHeader
            title="Completed"
            description={`${completedTopics.length} topic${completedTopics.length !== 1 ? 's' : ''} finished`}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {completedTopics.map(t => <TopicCard key={t.id} topic={t} />)}
          </div>
        </div>
      )}
    </div>
  );
}
