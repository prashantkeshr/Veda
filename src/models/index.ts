// ── Core enumerations ──────────────────────────────────────────────────

export type AcademicLevel =
  | 'primary' | 'secondary' | 'higher-secondary'
  | 'diploma' | 'undergraduate' | 'postgraduate'
  | 'doctoral' | 'professional' | 'vocational'
  | 'competitive-exam' | 'certification' | 'skill-development' | 'general';

export type Difficulty = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export type ResourceType =
  | 'pdf' | 'doc' | 'ppt' | 'xls' | 'image' | 'text' | 'markdown'
  | 'article' | 'website' | 'video' | 'audio'
  | 'question-paper' | 'notes' | 'syllabus' | 'assignment'
  | 'practice-set' | 'mock-test' | 'notification' | 'reference';

export type VerificationStatus =
  | 'official' | 'verified' | 'trusted' | 'community' | 'unverified' | 'needs-review' | 'outdated';

export type ContentStatus =
  | 'draft' | 'in-review' | 'approved' | 'published' | 'needs-update' | 'archived';

export type RelationType =
  | 'prerequisite' | 'related' | 'part-of' | 'belongs-to'
  | 'useful-for' | 'appears-in' | 'tested-by' | 'follows'
  | 'leads-to' | 'explains' | 'practice-for';

export type InstitutionType =
  | 'university' | 'college' | 'school' | 'institute' | 'board' | 'council';

export type ExamType =
  | 'entrance' | 'competitive' | 'board' | 'university' | 'professional' | 'certification';

export type QuestionType = 'mcq' | 'numerical' | 'short-answer' | 'true-false';

// ── Subject ────────────────────────────────────────────────────────────

export interface Subject {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  academicLevels: AcademicLevel[];
  topicIds: string[];
  courseIds: string[];
  examIds: string[];
  relatedSubjectIds: string[];
  tags: string[];
  icon?: string;
  color?: string;
  updatedAt: string;
}

// ── Topic ──────────────────────────────────────────────────────────────

export interface Topic {
  id: string;
  slug: string;
  title: string;
  description: string;
  overview: string;
  subjectIds: string[];
  courseIds: string[];
  examIds: string[];
  prerequisiteIds: string[];
  relatedIds: string[];
  leadToIds: string[];
  keyConcepts: string[];
  formulaHighlights?: string[];
  estimatedMinutes: number;
  difficulty: Difficulty;
  academicLevel: AcademicLevel;
  examRelevance: string[];
  tags: string[];
  updatedAt: string;
}

// ── Resource ───────────────────────────────────────────────────────────

export interface Resource {
  id: string;
  slug: string;
  title: string;
  description: string;
  type: ResourceType;
  url?: string;
  thumbnail?: string;
  subjectIds: string[];
  topicIds: string[];
  courseIds: string[];
  branchIds: string[];
  semesterIds: string[];
  examIds: string[];
  institutionIds: string[];
  language: string;
  tags: string[];
  difficulty: Difficulty;
  academicLevel: AcademicLevel;
  author?: string;
  source?: string;
  provider?: string;
  verificationStatus: VerificationStatus;
  contentStatus: ContentStatus;
  relatedResourceIds: string[];
  prerequisiteIds: string[];
  year?: number;
  pages?: number;
  durationMinutes?: number;
  createdAt: string;
  updatedAt: string;
  reviewDate?: string;
  seoTitle?: string;
  seoDescription?: string;
}

// ── Course ─────────────────────────────────────────────────────────────

export interface Semester {
  number: number;
  label: string;
  subjectIds: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  branchName?: string;
  academicLevel: AcademicLevel;
  durationYears: number;
  semesters: Semester[];
  subjectIds: string[];
  institutionIds: string[];
  examIds: string[];
  tags: string[];
  updatedAt: string;
}

// ── Exam ───────────────────────────────────────────────────────────────

export interface Exam {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  type: ExamType;
  conductingBody: string;
  subjectIds: string[];
  topicIds: string[];
  level: string;
  eligibility?: string;
  syllabus: string[];
  tags: string[];
  websiteUrl?: string;
  updatedAt: string;
}

// ── Institution ────────────────────────────────────────────────────────

export interface Institution {
  id: string;
  slug: string;
  name: string;
  shortName?: string;
  type: InstitutionType;
  stateId?: string;
  countryId: string;
  courseIds: string[];
  affiliatedBoard?: string;
  website?: string;
  updatedAt: string;
}

// ── Learning Path ──────────────────────────────────────────────────────

export interface PathStep {
  order: number;
  type: 'topic' | 'resource' | 'quiz' | 'milestone';
  refId: string;
  label: string;
  estimatedMinutes: number;
  isOptional?: boolean;
}

export interface LearningPath {
  id: string;
  slug: string;
  title: string;
  description: string;
  steps: PathStep[];
  goalExamIds: string[];
  goalCourseIds: string[];
  totalMinutes: number;
  difficulty: Difficulty;
  academicLevel: AcademicLevel;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

// ── Question ───────────────────────────────────────────────────────────

export interface Question {
  id: string;
  slug: string;
  text: string;
  type: QuestionType;
  options?: string[];
  correctIndex?: number;
  correctAnswer?: string;
  explanation: string;
  topicIds: string[];
  subjectIds: string[];
  examIds: string[];
  difficulty: Difficulty;
  year?: number;
  source?: string;
  tags: string[];
}

// ── Repository interface ────────────────────────────────────────────────

export interface FilterOptions {
  search?: string;
  academicLevel?: AcademicLevel;
  difficulty?: Difficulty;
  subjectId?: string;
  topicId?: string;
  courseId?: string;
  examId?: string;
  type?: ResourceType;
  limit?: number;
  offset?: number;
}

export interface DataProvider<T> {
  getById(id: string): T | undefined;
  getBySlug(slug: string): T | undefined;
  getAll(filter?: FilterOptions): T[];
  getRelated(id: string, relation: RelationType): T[];
  count(filter?: FilterOptions): number;
}

// ── Search ─────────────────────────────────────────────────────────────

export type SearchEntityType = 'subject' | 'topic' | 'resource' | 'course' | 'exam' | 'learning-path';

export interface SearchResult {
  id: string;
  type: SearchEntityType;
  slug: string;
  title: string;
  description: string;
  score: number;
  tags?: string[];
  meta?: string;
}

export interface SearchResults {
  query: string;
  total: number;
  all: SearchResult[];
  subjects: SearchResult[];
  topics: SearchResult[];
  resources: SearchResult[];
  courses: SearchResult[];
  exams: SearchResult[];
  learningPaths: SearchResult[];
}
