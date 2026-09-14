import { Link } from 'react-router-dom';
import { BookOpen, Hash, GraduationCap, FileText, ClipboardList, Route, ArrowRight, Zap, Sparkles, Map, RotateCcw, Bookmark } from 'lucide-react';
import { subjectRepo, topicRepo, resourceRepo, examRepo } from '../repositories';
import { SubjectCard } from '../components/knowledge/SubjectCard';
import { TopicCard } from '../components/knowledge/TopicCard';
import { SectionHeader, Card, Badge } from '../components/ui';
import { useUserData } from '../app/providers/UserDataProvider';
import { getRecommendations } from '../services/recommendation.service';

const quickLinks = [
  { to: '/subjects', icon: BookOpen, label: 'Subjects', color: 'bg-veda-50 text-veda-700 dark:bg-veda-900/30 dark:text-veda-400' },
  { to: '/topics', icon: Hash, label: 'Topics', color: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' },
  { to: '/courses', icon: GraduationCap, label: 'Courses', color: 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' },
  { to: '/resources', icon: FileText, label: 'Resources', color: 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' },
  { to: '/exams', icon: ClipboardList, label: 'Exams', color: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
  { to: '/learning-paths', icon: Route, label: 'Learning Paths', color: 'bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400' },
];

const TAG_ICONS = {
  'next-up':    Zap,
  'retry':      RotateCcw,
  'bookmark':   Bookmark,
  'start-here': Sparkles,
  'related':    Hash,
} as const;

const TAG_COLORS = {
  'next-up':    'bg-veda-50 text-veda-700 dark:bg-veda-900/30 dark:text-veda-400',
  'retry':      'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400',
  'bookmark':   'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400',
  'start-here': 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400',
  'related':    'bg-stone-50 text-stone-600 dark:bg-stone-800 dark:text-stone-400',
} as const;

export function Home() {
  const { progressMap, bookmarks, quizAttempts, ready } = useUserData();
  const subjects = subjectRepo.getAll({ limit: 4 });
  const totalTopics = topicRepo.count();
  const totalResources = resourceRepo.count();
  const totalExams = examRepo.count();

  const inProgressIds = ready
    ? Object.entries(progressMap)
        .filter(([, s]) => s === 'in-progress')
        .map(([id]) => id)
    : [];
  const inProgressTopics = topicRepo.getMany(inProgressIds).slice(0, 3);

  const completedCount = ready
    ? Object.values(progressMap).filter(s => s === 'completed').length
    : 0;

  const { items: recommendations, hasPersonalData } = ready
    ? getRecommendations(progressMap, bookmarks, quizAttempts)
    : { items: [], hasPersonalData: false };

  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="rounded-xl bg-gradient-to-br from-veda-700 to-veda-900 dark:from-veda-800 dark:to-stone-900 p-6 lg:p-8 text-white">
        <div className="flex items-center gap-2 mb-3">
          <Zap size={16} className="text-veda-300" />
          <span className="text-sm text-veda-200">Vital Education & Data Archive</span>
        </div>
        <h1 className="text-2xl lg:text-3xl font-bold mb-2 text-white">Welcome to VEDA</h1>
        <p className="text-veda-200 text-sm lg:text-base max-w-xl leading-relaxed">
          Your engineering knowledge platform — subjects, topics, resources, exams, and learning paths
          for Mechanical Engineering, Mathematics, and Physics.
        </p>
        <div className="flex flex-wrap gap-5 mt-5 text-sm">
          <span className="text-veda-200"><strong className="text-white">{subjects.length}</strong> Subjects</span>
          <span className="text-veda-200"><strong className="text-white">{totalTopics}</strong> Topics</span>
          <span className="text-veda-200"><strong className="text-white">{totalResources}</strong> Resources</span>
          <span className="text-veda-200"><strong className="text-white">{totalExams}</strong> Exams</span>
          {completedCount > 0 && (
            <span className="text-veda-200"><strong className="text-white">{completedCount}</strong> Completed</span>
          )}
        </div>
      </div>

      {/* Continue studying — only shown when there are in-progress topics */}
      {inProgressTopics.length > 0 && (
        <div>
          <SectionHeader
            title="Continue Studying"
            description="Pick up where you left off"
            action={
              <Link to="/my-learning" className="text-sm text-veda-700 dark:text-veda-400 hover:underline flex items-center gap-1">
                My Learning <ArrowRight size={14} />
              </Link>
            }
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {inProgressTopics.map(t => <TopicCard key={t.id} topic={t} />)}
          </div>
        </div>
      )}

      {/* For You / Start Here */}
      {ready && recommendations.length > 0 && (
        <div>
          <SectionHeader
            title={hasPersonalData ? 'For You' : 'Where to Start'}
            description={hasPersonalData ? 'Personalised picks based on your progress' : 'Beginner-friendly topics with no prerequisites'}
            action={
              <Link to="/knowledge-map" className="text-sm text-veda-700 dark:text-veda-400 hover:underline flex items-center gap-1">
                <Map size={13} /> Knowledge Map
              </Link>
            }
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {recommendations.map(rec => {
              const TagIcon = TAG_ICONS[rec.tag];
              return (
                <Link key={rec.topicId} to={`/topics/${rec.topic.slug}`}>
                  <Card hover className="p-4 h-full flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100 leading-snug">{rec.topic.title}</h3>
                      <span className={`flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 ${TAG_COLORS[rec.tag]}`}>
                        <TagIcon size={9} /> {rec.tag.replace(/-/g, ' ')}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed flex-1">{rec.reason}</p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Quick links */}
      <div>
        <SectionHeader title="Explore" description="Jump into any section of the knowledge base" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {quickLinks.map(({ to, icon: Icon, label, color }) => (
            <Link key={to} to={to}>
              <Card hover className="p-4 flex flex-col items-center gap-2 text-center">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
                  <Icon size={18} />
                </div>
                <span className="text-xs font-medium text-stone-700 dark:text-stone-300">{label}</span>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured subjects */}
      <div>
        <SectionHeader
          title="Subjects"
          description="Core engineering subjects with full topic coverage"
          action={
            <Link to="/subjects" className="text-sm text-veda-700 dark:text-veda-400 hover:underline flex items-center gap-1">
              View all <ArrowRight size={14} />
            </Link>
          }
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {subjects.map(s => <SubjectCard key={s.id} subject={s} />)}
        </div>
      </div>
    </div>
  );
}
