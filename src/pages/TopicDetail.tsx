import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { useStructuredData, LD_BASE, LD_PROVIDER } from '../hooks/useStructuredData';
import { ShareButton } from '../components/ui/ShareButton';
import { Clock, Zap, BookOpen, ChevronRight, ArrowRight, Circle, CheckCircle, Globe } from 'lucide-react';
import { topicRepo, subjectRepo, resourceRepo, questionRepo } from '../repositories';
import { ResourceCard } from '../components/knowledge/ResourceCard';
import { TopicCard } from '../components/knowledge/TopicCard';
import { QuizSession } from '../components/quiz/QuizSession';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { BookmarkButton } from '../components/ui/BookmarkButton';
import { ProgressBadge } from '../components/ui/ProgressBadge';
import { Badge, DifficultyBadge, SectionHeader, Button } from '../components/ui';
import { useUserData } from '../app/providers/UserDataProvider';
import { useVideoLanguage } from '../hooks/useVideoLanguage';
import { getYouTubeEmbed } from '../utils/youtube';
import { formatMinutes } from '../utils/format';
import { cn } from '../utils/cn';

type ProgressStatus = 'not-started' | 'in-progress' | 'completed';

const progressSteps: { status: ProgressStatus; label: string; icon: typeof Circle }[] = [
  { status: 'not-started', label: 'Not started', icon: Circle },
  { status: 'in-progress', label: 'In progress', icon: Clock },
  { status: 'completed', label: 'Completed', icon: CheckCircle },
];

export function TopicDetail() {
  const { slug } = useParams<{ slug: string }>();
  const topic = topicRepo.getBySlug(slug ?? '');
  useSEO(topic?.title, topic?.description);
  useStructuredData(topic ? {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name: topic.title,
    description: topic.description,
    url: `${LD_BASE}/topics/${topic.slug}`,
    educationalLevel: topic.academicLevel,
    timeRequired: topic.estimatedMinutes ? `PT${topic.estimatedMinutes}M` : undefined,
    teaches: topic.keyConcepts ?? [],
    keywords: (topic.tags ?? []).join(', '),
    isAccessibleForFree: true,
    provider: LD_PROVIDER,
  } : null);
  const { progressMap, setTopicProgress, saveQuizAttempt } = useUserData();
  const { lang, setLang, languages } = useVideoLanguage();
  const [quizOpen, setQuizOpen] = useState(false);

  if (!topic) return <Navigate to="/subjects" replace />;

  const subjects = subjectRepo.getMany(topic.subjectIds);
  const prerequisites = topicRepo.getPrerequisites(topic.id);
  const relatedTopics = topicRepo.getRelatedTopics(topic.id);
  const leadsTo = topicRepo.getLeadsTo(topic.id);
  const resources = resourceRepo.getByTopicId(topic.id);
  const docResources = resources.filter(r => r.type !== 'video');
  const videoResources = resources.filter(r => r.type === 'video');
  const videosInLang = videoResources.filter(r => r.language === lang);
  const videosToShow = videosInLang.length > 0 ? videosInLang : videoResources.filter(r => r.language === 'en');
  const isLangFallback = videosInLang.length === 0 && videosToShow.length > 0;
  const firstEmbedUrl = videosToShow.map(r => r.url ? getYouTubeEmbed(r.url) : null).find(Boolean) ?? null;
  const questions = questionRepo.getByTopicId(topic.id);

  const primarySubject = subjects[0];
  const currentStatus = progressMap[topic.id] ?? 'not-started';

  async function handleQuizComplete(score: number, total: number) {
    await saveQuizAttempt({ topicId: topic!.id, score, total, date: new Date().toISOString() });
    if (score === total) {
      setTopicProgress(topic!.id, 'completed');
    }
  }

  return (
    <div className="space-y-8">
      <Breadcrumb items={[
        { label: 'Subjects', to: '/subjects' },
        ...(primarySubject ? [{ label: primarySubject.title, to: `/subjects/${primarySubject.slug}` }] : []),
        { label: topic.title }
      ]} />

      {/* Header */}
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h1 className="text-2xl lg:text-3xl font-bold text-stone-900 dark:text-stone-100">{topic.title}</h1>
            <p className="text-stone-500 dark:text-stone-400 mt-1 text-sm">{topic.description}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0 mt-1">
            <ShareButton title={topic.title} />
            <BookmarkButton
              entityId={topic.id}
              type="topic"
              slug={topic.slug}
              title={topic.title}
              size={18}
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <DifficultyBadge level={topic.difficulty} />
          {topic.estimatedMinutes && (
            <span className="flex items-center gap-1 text-xs text-stone-500">
              <Clock size={12} /> {formatMinutes(topic.estimatedMinutes)}
            </span>
          )}
          {subjects.map(s => (
            <Link key={s.id} to={`/subjects/${s.slug}`}>
              <Badge variant="blue">{s.shortTitle}</Badge>
            </Link>
          ))}
        </div>
      </div>

      {/* Progress controls */}
      <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <p className="text-xs font-semibold text-stone-500 dark:text-stone-500 uppercase tracking-wide mb-2">Your Progress</p>
            <ProgressBadge status={currentStatus} />
          </div>
          <div className="flex gap-2">
            {progressSteps.map(({ status, label, icon: Icon }) => (
              <button
                key={status}
                onClick={() => setTopicProgress(topic.id, status)}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border transition-colors',
                  currentStatus === status
                    ? 'bg-veda-700 text-white border-veda-700 dark:bg-veda-500 dark:border-veda-500'
                    : 'border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800'
                )}
              >
                <Icon size={12} /> {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-5">
            <h2 className="font-semibold text-stone-900 dark:text-stone-100 mb-3 flex items-center gap-2">
              <BookOpen size={16} className="text-veda-700 dark:text-veda-400" /> Overview
            </h2>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">{topic.overview}</p>
          </div>

          {/* Key concepts */}
          {topic.keyConcepts?.length > 0 && (
            <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-5">
              <h2 className="font-semibold text-stone-900 dark:text-stone-100 mb-3 flex items-center gap-2">
                <Zap size={16} className="text-amber-500" /> Key Concepts
              </h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {topic.keyConcepts.map((concept, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300">
                    <span className="w-5 h-5 rounded-full bg-veda-50 dark:bg-veda-900/30 text-veda-700 dark:text-veda-400 text-xs flex items-center justify-center font-mono flex-shrink-0">
                      {i + 1}
                    </span>
                    {concept}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Formula highlights */}
          {topic.formulaHighlights && topic.formulaHighlights.length > 0 && (
            <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-5">
              <h2 className="font-semibold text-stone-900 dark:text-stone-100 mb-3">Key Formulae</h2>
              <div className="flex flex-wrap gap-2">
                {topic.formulaHighlights.map((f, i) => (
                  <code key={i} className={cn(
                    'px-3 py-1.5 rounded text-sm font-mono',
                    'bg-stone-50 dark:bg-stone-800 text-stone-800 dark:text-stone-200',
                    'border border-stone-200 dark:border-stone-700'
                  )}>
                    {f}
                  </code>
                ))}
              </div>
            </div>
          )}

          {/* Quiz / Practice */}
          {questions.length > 0 && (
            <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-stone-900 dark:text-stone-100">
                  Practice Quiz · {questions.length} question{questions.length !== 1 ? 's' : ''}
                </h2>
                {!quizOpen && (
                  <Button variant="primary" size="sm" onClick={() => setQuizOpen(true)}>
                    Start quiz
                  </Button>
                )}
              </div>
              {quizOpen ? (
                <QuizSession
                  questions={questions}
                  topicId={topic.id}
                  onComplete={handleQuizComplete}
                />
              ) : (
                <p className="text-sm text-stone-500 dark:text-stone-500">
                  Test your understanding with {questions.length} GATE-style multiple choice question{questions.length !== 1 ? 's' : ''}.
                </p>
              )}
            </div>
          )}

          {/* Resources */}
          {resources.length > 0 && (
            <div>
              <SectionHeader title="Resources" description={`${resources.length} resource${resources.length !== 1 ? 's' : ''} for this topic`} />

              {/* Video language selector */}
              {videoResources.length > 0 && (
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <Globe size={13} className="text-stone-400 flex-shrink-0" />
                  <span className="text-xs text-stone-500 font-medium">Videos in:</span>
                  <div className="flex gap-1 flex-wrap">
                    {languages.map(l => (
                      <button
                        key={l.code}
                        onClick={() => setLang(l.code)}
                        title={l.label}
                        className={cn(
                          'flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium transition-colors',
                          lang === l.code
                            ? 'bg-veda-700 text-white dark:bg-veda-500'
                            : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
                        )}
                      >
                        {l.flag} {l.nativeLabel}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Embedded video player */}
              {firstEmbedUrl && (
                <div className="mb-4 rounded-lg overflow-hidden bg-black relative" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    src={firstEmbedUrl}
                    className="absolute inset-0 w-full h-full border-0"
                    title={`Explanation video in ${languages.find(l => l.code === lang)?.label ?? 'selected language'}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              {isLangFallback && (
                <p className="text-xs text-stone-400 mb-3">
                  No videos available in {languages.find(l => l.code === lang)?.label} yet — showing English videos.
                </p>
              )}

              {/* English document resources — always shown */}
              {docResources.length > 0 && (
                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  {docResources.map(r => <ResourceCard key={r.id} resource={r} />)}
                </div>
              )}

              {/* Video cards for selected language */}
              {videosToShow.length > 0 && (
                <>
                  <p className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-2">
                    {languages.find(l => l.code === lang)?.label ?? 'English'} Videos
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {videosToShow.map(r => <ResourceCard key={r.id} resource={r} />)}
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Sidebar column */}
        <div className="space-y-5">
          {/* Exam relevance */}
          {topic.examRelevance?.length > 0 && (
            <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
              <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-200 mb-3">Exam Relevance</h3>
              <div className="flex flex-wrap gap-1.5">
                {topic.examRelevance.map(e => (
                  <Badge key={e} variant="amber">{e}</Badge>
                ))}
              </div>
            </div>
          )}

          {/* Prerequisites */}
          {prerequisites.length > 0 && (
            <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
              <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-200 mb-3">Prerequisites</h3>
              <div className="space-y-1.5">
                {prerequisites.map(p => (
                  <Link key={p.id} to={`/topics/${p.slug}`} className="flex items-center justify-between text-sm text-stone-600 dark:text-stone-400 hover:text-veda-700 dark:hover:text-veda-400 transition-colors">
                    {p.title} <ChevronRight size={13} />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related topics */}
          {relatedTopics.length > 0 && (
            <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
              <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-200 mb-3">Related Topics</h3>
              <div className="space-y-2">
                {relatedTopics.map(t => (
                  <TopicCard key={t.id} topic={t} />
                ))}
              </div>
            </div>
          )}

          {/* Leads to */}
          {leadsTo.length > 0 && (
            <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
              <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-200 mb-3 flex items-center gap-1">
                What to study next <ArrowRight size={13} />
              </h3>
              <div className="space-y-1.5">
                {leadsTo.map(t => (
                  <Link key={t.id} to={`/topics/${t.slug}`} className="flex items-center justify-between text-sm text-stone-600 dark:text-stone-400 hover:text-veda-700 dark:hover:text-veda-400 transition-colors">
                    {t.title} <ChevronRight size={13} />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {topic.tags?.length > 0 && (
            <div className="bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-800 p-4">
              <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-200 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-1.5">
                {topic.tags.map(t => <Badge key={t}>{t}</Badge>)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
