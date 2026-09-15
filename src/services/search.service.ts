import type { SearchResult, SearchResults, SearchEntityType } from '../models';
import { subjectRepo, topicRepo, resourceRepo, courseRepo, examRepo, learningPathRepo, boardRepo, institutionRepo, streamRepo, programmeRepo } from '../repositories';

function scoreText(text: string, query: string): number {
  const t = text.toLowerCase();
  const q = query.toLowerCase().trim();
  if (!q) return 0;
  const words = q.split(/\s+/);
  let score = 0;
  for (const word of words) {
    if (t.startsWith(word)) score += 10;
    else if (t.includes(` ${word}`)) score += 6;
    else if (t.includes(word)) score += 3;
  }
  return score;
}

function scoreEntity(title: string, description: string, tags: string[], query: string): number {
  return (
    scoreText(title, query) * 3 +
    scoreText(description, query) +
    scoreText(tags.join(' '), query) * 2
  );
}

export function search(query: string): SearchResults {
  const q = query.trim();

  const subjects: SearchResult[] = subjectRepo.getAll().map(s => ({
    id: s.id, type: 'subject' as SearchEntityType, slug: s.slug, title: s.title,
    description: s.description, tags: s.tags,
    score: scoreEntity(s.title, s.description, s.tags, q),
    meta: `${s.topicIds.length} topics`,
  })).filter(r => r.score > 0).sort((a, b) => b.score - a.score);

  const topics: SearchResult[] = topicRepo.getAll().map(t => ({
    id: t.id, type: 'topic' as SearchEntityType, slug: t.slug, title: t.title,
    description: t.description, tags: t.tags,
    score: scoreEntity(t.title, t.description, t.tags, q),
    meta: `${t.examRelevance.join(', ')}`,
  })).filter(r => r.score > 0).sort((a, b) => b.score - a.score);

  const resources: SearchResult[] = resourceRepo.getAll().map(r => ({
    id: r.id, type: 'resource' as SearchEntityType, slug: r.slug, title: r.title,
    description: r.description, tags: r.tags,
    score: scoreEntity(r.title, r.description, r.tags, q),
    meta: r.type,
  })).filter(r => r.score > 0).sort((a, b) => b.score - a.score);

  const courses: SearchResult[] = courseRepo.getAll().map(c => ({
    id: c.id, type: 'course' as SearchEntityType, slug: c.slug, title: c.title,
    description: c.description, tags: c.tags,
    score: scoreEntity(c.title, c.description, c.tags, q),
    meta: c.academicLevel,
  })).filter(r => r.score > 0).sort((a, b) => b.score - a.score);

  const exams: SearchResult[] = examRepo.getAll().map(e => ({
    id: e.id, type: 'exam' as SearchEntityType, slug: e.slug, title: e.title,
    description: e.description, tags: e.tags,
    score: scoreEntity(e.title, e.description, e.tags, q),
    meta: e.conductingBody,
  })).filter(r => r.score > 0).sort((a, b) => b.score - a.score);

  const learningPaths: SearchResult[] = learningPathRepo.getAll().map(lp => ({
    id: lp.id, type: 'learning-path' as SearchEntityType, slug: lp.slug, title: lp.title,
    description: lp.description, tags: lp.tags,
    score: scoreEntity(lp.title, lp.description, lp.tags, q),
    meta: `${lp.steps.length} steps`,
  })).filter(r => r.score > 0).sort((a, b) => b.score - a.score);

  const boards: SearchResult[] = boardRepo.getAll().map(b => ({
    id: b.id, type: 'board' as SearchEntityType, slug: b.slug, title: b.name,
    description: b.description, tags: b.tags,
    score: scoreEntity(b.name + ' ' + b.shortName, b.description, b.tags, q),
    meta: b.type === 'state' ? b.state : b.type,
  })).filter(r => r.score > 0).sort((a, b) => b.score - a.score);

  const institutions: SearchResult[] = institutionRepo.getAll().map(i => ({
    id: i.id, type: 'institution' as SearchEntityType, slug: i.slug, title: i.name,
    description: i.description, tags: i.tags,
    score: scoreEntity(i.name + ' ' + i.shortName, i.description, i.tags, q),
    meta: i.city ? `${i.city}, ${i.state ?? ''}`.trim().replace(/,$/, '') : i.state,
  })).filter(r => r.score > 0).sort((a, b) => b.score - a.score);

  const streams: SearchResult[] = streamRepo.getAll().map(s => ({
    id: s.id, type: 'stream' as SearchEntityType, slug: s.slug, title: s.name,
    description: s.description, tags: s.tags,
    score: scoreEntity(s.name + ' ' + (s.shortName ?? ''), s.description, s.tags, q),
    meta: s.academicLevels.join(', '),
  })).filter(r => r.score > 0).sort((a, b) => b.score - a.score);

  const programmes: SearchResult[] = programmeRepo.getAll().map(p => ({
    id: p.id, type: 'programme' as SearchEntityType, slug: p.slug, title: p.name,
    description: p.description, tags: p.tags,
    score: scoreEntity(p.name + ' ' + p.shortName, p.description, p.tags, q),
    meta: `${p.durationYears} year ${p.degree}`,
  })).filter(r => r.score > 0).sort((a, b) => b.score - a.score);

  const all = [
    ...subjects, ...topics, ...resources, ...courses, ...exams, ...learningPaths,
    ...boards, ...institutions, ...streams, ...programmes,
  ].sort((a, b) => b.score - a.score);

  return {
    query: q, total: all.length, all,
    subjects, topics, resources, courses, exams, learningPaths,
    boards, institutions, streams, programmes,
  };
}

export function getSearchSuggestions(query: string): string[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  const candidates = [
    ...subjectRepo.getAll().map(s => s.title),
    ...topicRepo.getAll().map(t => t.title),
    ...examRepo.getAll().map(e => e.shortTitle),
    ...boardRepo.getAll().map(b => b.shortName),
    ...institutionRepo.getAll().map(i => i.shortName),
    ...streamRepo.getAll().map(s => s.name),
    ...programmeRepo.getAll().map(p => p.shortName),
  ];
  return candidates.filter(c => c.toLowerCase().includes(q)).slice(0, 6);
}
