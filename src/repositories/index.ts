import type { Subject, Topic, Resource, Course, Exam, LearningPath, Question, FilterOptions, DataProvider, RelationType } from '../models';
import subjectsData from '../data/subjects.json';
import topicsData from '../data/topics.json';
import resourcesData from '../data/resources.json';
import coursesData from '../data/courses.json';
import examsData from '../data/exams.json';
import learningPathsData from '../data/learning-paths.json';
import questionsData from '../data/questions.json';

// ── Generic local repository ───────────────────────────────────────────

class LocalRepository<T extends { id: string; slug: string; tags?: string[] }> implements DataProvider<T> {
  constructor(private items: T[]) {}

  getById(id: string): T | undefined {
    return this.items.find(i => i.id === id);
  }

  getBySlug(slug: string): T | undefined {
    return this.items.find(i => i.slug === slug);
  }

  getAll(filter?: FilterOptions): T[] {
    let results = [...this.items];
    if (filter?.search) {
      const q = filter.search.toLowerCase();
      results = results.filter(item => {
        const title = (item as unknown as { title?: string }).title ?? '';
        const desc = (item as unknown as { description?: string }).description ?? '';
        const tags = item.tags ?? [];
        return title.toLowerCase().includes(q) || desc.toLowerCase().includes(q) || tags.some(t => t.toLowerCase().includes(q));
      });
    }
    if (filter?.limit) return results.slice(filter.offset ?? 0, (filter.offset ?? 0) + filter.limit);
    return results;
  }

  getRelated(_id: string, _relation: RelationType): T[] {
    return [];
  }

  count(filter?: FilterOptions): number {
    return this.getAll(filter).length;
  }

  getMany(ids: string[]): T[] {
    return ids.map(id => this.getById(id)).filter(Boolean) as T[];
  }
}

// ── Specialized repositories ───────────────────────────────────────────

class SubjectRepository extends LocalRepository<Subject> {
  getByTopicId(topicId: string): Subject[] {
    return (this as unknown as { items: Subject[] }).items.filter(s => s.topicIds.includes(topicId));
  }
  getByCourseId(courseId: string): Subject[] {
    return (this as unknown as { items: Subject[] }).items.filter(s => s.courseIds.includes(courseId));
  }
  getByExamId(examId: string): Subject[] {
    return (this as unknown as { items: Subject[] }).items.filter(s => s.examIds.includes(examId));
  }
  filterByLevel(level: string): Subject[] {
    return (this as unknown as { items: Subject[] }).items.filter(s => s.academicLevels.includes(level as Subject['academicLevels'][number]));
  }
}

class TopicRepository extends LocalRepository<Topic> {
  getBySubjectId(subjectId: string): Topic[] {
    return (this as unknown as { items: Topic[] }).items.filter(t => t.subjectIds.includes(subjectId));
  }
  getByExamId(examId: string): Topic[] {
    return (this as unknown as { items: Topic[] }).items.filter(t => t.examIds.includes(examId));
  }
  getPrerequisites(topicId: string): Topic[] {
    const topic = this.getById(topicId);
    if (!topic) return [];
    return this.getMany(topic.prerequisiteIds);
  }
  getRelatedTopics(topicId: string): Topic[] {
    const topic = this.getById(topicId);
    if (!topic) return [];
    return this.getMany(topic.relatedIds);
  }
  getLeadsTo(topicId: string): Topic[] {
    const topic = this.getById(topicId);
    if (!topic) return [];
    return this.getMany(topic.leadToIds);
  }
}

class ResourceRepository extends LocalRepository<Resource> {
  getBySubjectId(subjectId: string): Resource[] {
    return (this as unknown as { items: Resource[] }).items.filter(r => r.subjectIds.includes(subjectId));
  }
  getByTopicId(topicId: string): Resource[] {
    return (this as unknown as { items: Resource[] }).items.filter(r => r.topicIds.includes(topicId));
  }
  getByExamId(examId: string): Resource[] {
    return (this as unknown as { items: Resource[] }).items.filter(r => r.examIds.includes(examId));
  }
  getByCourseId(courseId: string): Resource[] {
    return (this as unknown as { items: Resource[] }).items.filter(r => r.courseIds.includes(courseId));
  }
  getByType(type: string): Resource[] {
    return (this as unknown as { items: Resource[] }).items.filter(r => r.type === type);
  }
  getPublished(): Resource[] {
    return (this as unknown as { items: Resource[] }).items.filter(r => r.contentStatus === 'published');
  }
}

class CourseRepository extends LocalRepository<Course> {
  getBySubjectId(subjectId: string): Course[] {
    return (this as unknown as { items: Course[] }).items.filter(c => c.subjectIds.includes(subjectId));
  }
  getByExamId(examId: string): Course[] {
    return (this as unknown as { items: Course[] }).items.filter(c => c.examIds.includes(examId));
  }
  filterByLevel(level: string): Course[] {
    return (this as unknown as { items: Course[] }).items.filter(c => c.academicLevel === level);
  }
}

class ExamRepository extends LocalRepository<Exam> {
  getBySubjectId(subjectId: string): Exam[] {
    return (this as unknown as { items: Exam[] }).items.filter(e => e.subjectIds.includes(subjectId));
  }
  getByType(type: string): Exam[] {
    return (this as unknown as { items: Exam[] }).items.filter(e => e.type === type);
  }
}

class LearningPathRepository extends LocalRepository<LearningPath> {
  getByExamId(examId: string): LearningPath[] {
    return (this as unknown as { items: LearningPath[] }).items.filter(lp => lp.goalExamIds.includes(examId));
  }
  getByCourseId(courseId: string): LearningPath[] {
    return (this as unknown as { items: LearningPath[] }).items.filter(lp => lp.goalCourseIds.includes(courseId));
  }
}

class QuestionRepository extends LocalRepository<Question> {
  getByTopicId(topicId: string): Question[] {
    return (this as unknown as { items: Question[] }).items.filter(q => q.topicIds.includes(topicId));
  }
  getByExamId(examId: string): Question[] {
    return (this as unknown as { items: Question[] }).items.filter(q => q.examIds.includes(examId));
  }
  getBySubjectId(subjectId: string): Question[] {
    return (this as unknown as { items: Question[] }).items.filter(q => q.subjectIds.includes(subjectId));
  }
}

// ── Singleton instances ────────────────────────────────────────────────

export const subjectRepo = new SubjectRepository(subjectsData as Subject[]);
export const topicRepo = new TopicRepository(topicsData as Topic[]);
export const resourceRepo = new ResourceRepository(resourcesData as Resource[]);
export const courseRepo = new CourseRepository(coursesData as Course[]);
export const examRepo = new ExamRepository(examsData as Exam[]);
export const learningPathRepo = new LearningPathRepository(learningPathsData as LearningPath[]);
export const questionRepo = new QuestionRepository(questionsData as Question[]);
