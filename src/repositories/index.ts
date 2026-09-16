import type { Subject, Topic, Resource, Course, Exam, LearningPath, Question, Board, Institution, Stream, Programme, FilterOptions, DataProvider, RelationType } from '../models';
import subjectsData from '../data/subjects.json';
import topicsData from '../data/topics.json';
import resourcesData from '../data/resources.json';
import coursesData from '../data/courses.json';
import examsData from '../data/exams.json';
import learningPathsData from '../data/learning-paths.json';
import questionsData from '../data/questions.json';
import { boardsData } from '../data/boards';
import { institutionsData } from '../data/institutions';
import { streamsData } from '../data/streams';
import { programmesData } from '../data/programmes';
import { cbseSubjectsData } from '../data/cbse-subjects';
import { cbseTopicsData } from '../data/cbse-topics';

// ── Generic local repository ───────────────────────────────────────────

class LocalRepository<T extends { id: string; slug: string; tags?: string[] }> implements DataProvider<T> {
  protected items: T[];
  constructor(items: T[]) { this.items = items; }

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
    return this.items.filter(s => s.topicIds.includes(topicId));
  }
  getByCourseId(courseId: string): Subject[] {
    return this.items.filter(s => s.courseIds.includes(courseId));
  }
  getByExamId(examId: string): Subject[] {
    return this.items.filter(s => s.examIds.includes(examId));
  }
  filterByLevel(level: string): Subject[] {
    return this.items.filter(s => s.academicLevels.includes(level as Subject['academicLevels'][number]));
  }
}

class TopicRepository extends LocalRepository<Topic> {
  getBySubjectId(subjectId: string): Topic[] {
    return this.items.filter(t => t.subjectIds.includes(subjectId));
  }
  getByExamId(examId: string): Topic[] {
    return this.items.filter(t => t.examIds.includes(examId));
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
    return this.items.filter(r => r.subjectIds.includes(subjectId));
  }
  getByTopicId(topicId: string): Resource[] {
    return this.items.filter(r => r.topicIds.includes(topicId));
  }
  getByExamId(examId: string): Resource[] {
    return this.items.filter(r => r.examIds.includes(examId));
  }
  getByCourseId(courseId: string): Resource[] {
    return this.items.filter(r => r.courseIds.includes(courseId));
  }
  getByType(type: string): Resource[] {
    return this.items.filter(r => r.type === type);
  }
  getPublished(): Resource[] {
    return this.items.filter(r => r.contentStatus === 'published');
  }
}

class CourseRepository extends LocalRepository<Course> {
  getBySubjectId(subjectId: string): Course[] {
    return this.items.filter(c => c.subjectIds.includes(subjectId));
  }
  getByExamId(examId: string): Course[] {
    return this.items.filter(c => c.examIds.includes(examId));
  }
  filterByLevel(level: string): Course[] {
    return this.items.filter(c => c.academicLevel === level);
  }
}

class ExamRepository extends LocalRepository<Exam> {
  getBySubjectId(subjectId: string): Exam[] {
    return this.items.filter(e => e.subjectIds.includes(subjectId));
  }
  getByType(type: string): Exam[] {
    return this.items.filter(e => e.type === type);
  }
}

class LearningPathRepository extends LocalRepository<LearningPath> {
  getByExamId(examId: string): LearningPath[] {
    return this.items.filter(lp => lp.goalExamIds.includes(examId));
  }
  getByCourseId(courseId: string): LearningPath[] {
    return this.items.filter(lp => lp.goalCourseIds.includes(courseId));
  }
}

class QuestionRepository extends LocalRepository<Question> {
  getByTopicId(topicId: string): Question[] {
    return this.items.filter(q => q.topicIds.includes(topicId));
  }
  getByExamId(examId: string): Question[] {
    return this.items.filter(q => q.examIds.includes(examId));
  }
  getBySubjectId(subjectId: string): Question[] {
    return this.items.filter(q => q.subjectIds.includes(subjectId));
  }
}

class BoardRepository extends LocalRepository<Board> {
  getByType(type: string): Board[] {
    return this.items.filter(b => b.type === type);
  }
  getByState(stateCode: string): Board[] {
    return this.items.filter(b => b.stateCode === stateCode);
  }
}

class InstitutionRepository extends LocalRepository<Institution> {
  getByCategory(category: string): Institution[] {
    return this.items.filter(i => i.category === category);
  }
  getByState(state: string): Institution[] {
    return this.items.filter(i => i.state === state);
  }
  getTopByNirf(n: number): Institution[] {
    return this.items
      .filter(i => i.nirfRank != null)
      .sort((a, b) => (a.nirfRank ?? 999) - (b.nirfRank ?? 999))
      .slice(0, n);
  }
}

class StreamRepository extends LocalRepository<Stream> {
  getByAcademicLevel(level: string): Stream[] {
    return this.items.filter(s => s.academicLevels.includes(level as Stream['academicLevels'][number]));
  }
}

class ProgrammeRepository extends LocalRepository<Programme> {
  getByDegree(degree: string): Programme[] {
    return this.items.filter(p => p.degree === degree);
  }
  getByStream(streamId: string): Programme[] {
    return this.items.filter(p => p.streamId === streamId);
  }
  getByAcademicLevel(level: string): Programme[] {
    return this.items.filter(p => p.academicLevel === level);
  }
}

// ── Singleton instances ────────────────────────────────────────────────

export const subjectRepo = new SubjectRepository([...(subjectsData as Subject[]), ...cbseSubjectsData]);
export const topicRepo = new TopicRepository([...(topicsData as Topic[]), ...cbseTopicsData]);
export const resourceRepo = new ResourceRepository(resourcesData as Resource[]);
export const courseRepo = new CourseRepository(coursesData as Course[]);
export const examRepo = new ExamRepository(examsData as Exam[]);
export const learningPathRepo = new LearningPathRepository(learningPathsData as LearningPath[]);
export const questionRepo = new QuestionRepository(questionsData as Question[]);
export const boardRepo = new BoardRepository(boardsData);
export const institutionRepo = new InstitutionRepository(institutionsData);
export const streamRepo = new StreamRepository(streamsData);
export const programmeRepo = new ProgrammeRepository(programmesData);
