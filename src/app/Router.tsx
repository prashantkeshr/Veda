import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppShell } from '../components/layout/AppShell';
import { Spinner } from '../components/ui';

// ── Admin (Kendra) — not linked in student UI ──────────────────────────
const KendraLogin     = lazy(() => import('../pages/kendra/KendraLogin').then(m => ({ default: m.KendraLogin })));
const KendraShell     = lazy(() => import('../pages/kendra/KendraShell').then(m => ({ default: m.KendraShell })));
const KendraDashboard  = lazy(() => import('../pages/kendra/KendraDashboard').then(m => ({ default: m.KendraDashboard })));
const KendraEditor     = lazy(() => import('../pages/kendra/KendraEditor').then(m => ({ default: m.KendraEditor })));
const KendraResources  = lazy(() => import('../pages/kendra/KendraResources').then(m => ({ default: m.KendraResources })));
const KendraQuestions  = lazy(() => import('../pages/kendra/KendraQuestions').then(m => ({ default: m.KendraQuestions })));
const KendraPublish    = lazy(() => import('../pages/kendra/KendraPublish').then(m => ({ default: m.KendraPublish })));
const KendraCourses    = lazy(() => import('../pages/kendra/KendraCourses').then(m => ({ default: m.KendraCourses })));

const Home             = lazy(() => import('../pages/Home').then(m => ({ default: m.Home })));
const Subjects         = lazy(() => import('../pages/Subjects').then(m => ({ default: m.Subjects })));
const SubjectDetail    = lazy(() => import('../pages/SubjectDetail').then(m => ({ default: m.SubjectDetail })));
const Topics           = lazy(() => import('../pages/Topics').then(m => ({ default: m.Topics })));
const TopicDetail      = lazy(() => import('../pages/TopicDetail').then(m => ({ default: m.TopicDetail })));
const Courses          = lazy(() => import('../pages/Courses').then(m => ({ default: m.Courses })));
const CourseDetail     = lazy(() => import('../pages/CourseDetail').then(m => ({ default: m.CourseDetail })));
const Resources        = lazy(() => import('../pages/Resources').then(m => ({ default: m.Resources })));
const ResourceDetail   = lazy(() => import('../pages/ResourceDetail').then(m => ({ default: m.ResourceDetail })));
const Exams            = lazy(() => import('../pages/Exams').then(m => ({ default: m.Exams })));
const ExamDetail       = lazy(() => import('../pages/ExamDetail').then(m => ({ default: m.ExamDetail })));
const LearningPaths    = lazy(() => import('../pages/LearningPaths').then(m => ({ default: m.LearningPaths })));
const LearningPathDetail = lazy(() => import('../pages/LearningPathDetail').then(m => ({ default: m.LearningPathDetail })));
const Search           = lazy(() => import('../pages/Search').then(m => ({ default: m.Search })));
const MyLearning       = lazy(() => import('../pages/MyLearning').then(m => ({ default: m.MyLearning })));
const KnowledgeMap     = lazy(() => import('../pages/KnowledgeMap').then(m => ({ default: m.KnowledgeMap })));
const ContentStudio    = lazy(() => import('../pages/ContentStudio').then(m => ({ default: m.ContentStudio })));
const Quiz             = lazy(() => import('../pages/Quiz').then(m => ({ default: m.Quiz })));
const ApiExplorer      = lazy(() => import('../pages/ApiExplorer').then(m => ({ default: m.ApiExplorer })));
const Insights         = lazy(() => import('../pages/Insights').then(m => ({ default: m.Insights })));
const Achievements     = lazy(() => import('../pages/Achievements').then(m => ({ default: m.Achievements })));
const Settings         = lazy(() => import('../pages/Settings').then(m => ({ default: m.Settings })));
const Flashcards       = lazy(() => import('../pages/Flashcards').then(m => ({ default: m.Flashcards })));
const Notes            = lazy(() => import('../pages/Notes').then(m => ({ default: m.Notes })));
const FormulaSheet     = lazy(() => import('../pages/FormulaSheet').then(m => ({ default: m.FormulaSheet })));
const ExamReadiness    = lazy(() => import('../pages/ExamReadiness').then(m => ({ default: m.ExamReadiness })));
const TimerPage        = lazy(() => import('../pages/Timer').then(m => ({ default: m.Timer })));
const Planner          = lazy(() => import('../pages/Planner').then(m => ({ default: m.Planner })));
const Bookmarks        = lazy(() => import('../pages/Bookmarks').then(m => ({ default: m.Bookmarks })));
const Comparison       = lazy(() => import('../pages/Comparison').then(m => ({ default: m.Comparison })));
const Revision         = lazy(() => import('../pages/Revision').then(m => ({ default: m.Revision })));
const NotFound         = lazy(() => import('../pages/NotFound').then(m => ({ default: m.NotFound })));

function PageLoader() {
  return (
    <div className="flex items-center justify-center py-24">
      <Spinner size="lg" />
    </div>
  );
}

export function Router() {
  return (
    <Routes>
      {/* ── Kendra CMS — must come first so path="*" in AppShell doesn't swallow it */}
      <Route path="veda-kendra">
        <Route index element={<Suspense fallback={<PageLoader />}><KendraLogin /></Suspense>} />
        <Route element={<Suspense fallback={<PageLoader />}><KendraShell /></Suspense>}>
          <Route path="dashboard"  element={<Suspense fallback={<PageLoader />}><KendraDashboard /></Suspense>} />
          <Route path="editor"     element={<Suspense fallback={<PageLoader />}><KendraEditor /></Suspense>} />
          <Route path="resources"  element={<Suspense fallback={<PageLoader />}><KendraResources /></Suspense>} />
          <Route path="questions"  element={<Suspense fallback={<PageLoader />}><KendraQuestions /></Suspense>} />
          <Route path="courses"    element={<Suspense fallback={<PageLoader />}><KendraCourses /></Suspense>} />
          <Route path="publish"    element={<Suspense fallback={<PageLoader />}><KendraPublish /></Suspense>} />
        </Route>
      </Route>

      {/* ── Student routes with AppShell layout ────────────────────── */}
      <Route element={<AppShell />}>
        <Route index element={<Suspense fallback={<PageLoader />}><Home /></Suspense>} />
        <Route path="subjects" element={<Suspense fallback={<PageLoader />}><Subjects /></Suspense>} />
        <Route path="subjects/:slug" element={<Suspense fallback={<PageLoader />}><SubjectDetail /></Suspense>} />
        <Route path="topics" element={<Suspense fallback={<PageLoader />}><Topics /></Suspense>} />
        <Route path="topics/:slug" element={<Suspense fallback={<PageLoader />}><TopicDetail /></Suspense>} />
        <Route path="courses" element={<Suspense fallback={<PageLoader />}><Courses /></Suspense>} />
        <Route path="courses/:slug" element={<Suspense fallback={<PageLoader />}><CourseDetail /></Suspense>} />
        <Route path="resources" element={<Suspense fallback={<PageLoader />}><Resources /></Suspense>} />
        <Route path="resources/:slug" element={<Suspense fallback={<PageLoader />}><ResourceDetail /></Suspense>} />
        <Route path="exams" element={<Suspense fallback={<PageLoader />}><Exams /></Suspense>} />
        <Route path="exams/:slug" element={<Suspense fallback={<PageLoader />}><ExamDetail /></Suspense>} />
        <Route path="learning-paths" element={<Suspense fallback={<PageLoader />}><LearningPaths /></Suspense>} />
        <Route path="learning-paths/:slug" element={<Suspense fallback={<PageLoader />}><LearningPathDetail /></Suspense>} />
        <Route path="search" element={<Suspense fallback={<PageLoader />}><Search /></Suspense>} />
        <Route path="my-learning" element={<Suspense fallback={<PageLoader />}><MyLearning /></Suspense>} />
        <Route path="knowledge-map" element={<Suspense fallback={<PageLoader />}><KnowledgeMap /></Suspense>} />
        <Route path="quiz" element={<Suspense fallback={<PageLoader />}><Quiz /></Suspense>} />
        <Route path="content-studio" element={<Suspense fallback={<PageLoader />}><ContentStudio /></Suspense>} />
        <Route path="api-explorer" element={<Suspense fallback={<PageLoader />}><ApiExplorer /></Suspense>} />
        <Route path="insights" element={<Suspense fallback={<PageLoader />}><Insights /></Suspense>} />
        <Route path="achievements" element={<Suspense fallback={<PageLoader />}><Achievements /></Suspense>} />
        <Route path="settings" element={<Suspense fallback={<PageLoader />}><Settings /></Suspense>} />
        <Route path="flashcards" element={<Suspense fallback={<PageLoader />}><Flashcards /></Suspense>} />
        <Route path="notes" element={<Suspense fallback={<PageLoader />}><Notes /></Suspense>} />
        <Route path="formula-sheet" element={<Suspense fallback={<PageLoader />}><FormulaSheet /></Suspense>} />
        <Route path="exam-readiness" element={<Suspense fallback={<PageLoader />}><ExamReadiness /></Suspense>} />
        <Route path="timer" element={<Suspense fallback={<PageLoader />}><TimerPage /></Suspense>} />
        <Route path="planner" element={<Suspense fallback={<PageLoader />}><Planner /></Suspense>} />
        <Route path="bookmarks" element={<Suspense fallback={<PageLoader />}><Bookmarks /></Suspense>} />
        <Route path="compare" element={<Suspense fallback={<PageLoader />}><Comparison /></Suspense>} />
        <Route path="revision" element={<Suspense fallback={<PageLoader />}><Revision /></Suspense>} />
        <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFound /></Suspense>} />
      </Route>

    </Routes>
  );
}
