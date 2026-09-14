import { Routes, Route } from 'react-router-dom';
import { AppShell } from '../components/layout/AppShell';
import { Home } from '../pages/Home';
import { Subjects } from '../pages/Subjects';
import { SubjectDetail } from '../pages/SubjectDetail';
import { Topics } from '../pages/Topics';
import { TopicDetail } from '../pages/TopicDetail';
import { Courses } from '../pages/Courses';
import { CourseDetail } from '../pages/CourseDetail';
import { Resources } from '../pages/Resources';
import { ResourceDetail } from '../pages/ResourceDetail';
import { Exams } from '../pages/Exams';
import { ExamDetail } from '../pages/ExamDetail';
import { LearningPaths } from '../pages/LearningPaths';
import { LearningPathDetail } from '../pages/LearningPathDetail';
import { Search } from '../pages/Search';
import { MyLearning } from '../pages/MyLearning';
import { KnowledgeMap } from '../pages/KnowledgeMap';
import { ContentStudio } from '../pages/ContentStudio';
import { NotFound } from '../pages/NotFound';

export function Router() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Home />} />
        <Route path="subjects" element={<Subjects />} />
        <Route path="subjects/:slug" element={<SubjectDetail />} />
        <Route path="topics" element={<Topics />} />
        <Route path="topics/:slug" element={<TopicDetail />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:slug" element={<CourseDetail />} />
        <Route path="resources" element={<Resources />} />
        <Route path="resources/:slug" element={<ResourceDetail />} />
        <Route path="exams" element={<Exams />} />
        <Route path="exams/:slug" element={<ExamDetail />} />
        <Route path="learning-paths" element={<LearningPaths />} />
        <Route path="learning-paths/:slug" element={<LearningPathDetail />} />
        <Route path="search" element={<Search />} />
        <Route path="my-learning" element={<MyLearning />} />
        <Route path="knowledge-map" element={<KnowledgeMap />} />
        <Route path="content-studio" element={<ContentStudio />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
