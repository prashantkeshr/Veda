import type { Topic } from '../models';
import type { BookmarkRecord, QuizAttempt } from '../db';
import { topicRepo, resourceRepo } from '../repositories';

export interface Recommendation {
  topicId: string;
  topic: Topic;
  reason: string;
  priority: number;
  tag: 'next-up' | 'retry' | 'bookmark' | 'start-here' | 'related';
}

export interface RecommendationResult {
  items: Recommendation[];
  hasPersonalData: boolean;
}

export function getRecommendations(
  progressMap: Record<string, string>,
  bookmarks: BookmarkRecord[],
  quizAttempts: QuizAttempt[]
): RecommendationResult {
  const seen = new Set<string>();
  const recs: Recommendation[] = [];
  const allTopics = topicRepo.getAll();

  const completedIds = new Set(
    Object.entries(progressMap).filter(([, s]) => s === 'completed').map(([id]) => id)
  );
  const inProgressIds = new Set(
    Object.entries(progressMap).filter(([, s]) => s === 'in-progress').map(([id]) => id)
  );
  const bookmarkedTopicIds = new Set(
    bookmarks.filter(b => b.type === 'topic').map(b => b.entityId)
  );

  // Build latest quiz score per topic
  const latestScoreByTopic: Record<string, number> = {};
  for (const a of quizAttempts) {
    const pct = (a.score / a.total) * 100;
    if (!(a.topicId in latestScoreByTopic) || pct > latestScoreByTopic[a.topicId]) {
      latestScoreByTopic[a.topicId] = pct;
    }
  }

  function add(topic: Topic, reason: string, priority: number, tag: Recommendation['tag']) {
    if (seen.has(topic.id)) return;
    seen.add(topic.id);
    recs.push({ topicId: topic.id, topic, reason, priority, tag });
  }

  // 1. Next up: lead-to topics from completed that aren't done yet
  for (const completedId of completedIds) {
    const t = topicRepo.getById(completedId);
    if (!t) continue;
    for (const leadId of t.leadToIds) {
      const next = topicRepo.getById(leadId);
      if (!next || completedIds.has(next.id)) continue;
      const prereqsDone = next.prerequisiteIds.every(pid => completedIds.has(pid));
      if (prereqsDone) {
        add(next, `Follows from ${t.title}`, 100, 'next-up');
      }
    }
  }

  // 2. Retry: topics with quiz score < 70%
  for (const [topicId, score] of Object.entries(latestScoreByTopic)) {
    if (score < 70) {
      const t = topicRepo.getById(topicId);
      if (t) add(t, `Quiz score was ${Math.round(score)}% — aim for 70%+`, 90, 'retry');
    }
  }

  // 3. Bookmarked topics not yet started
  for (const topicId of bookmarkedTopicIds) {
    if (!progressMap[topicId]) {
      const t = topicRepo.getById(topicId);
      if (t) add(t, 'You bookmarked this', 80, 'bookmark');
    }
  }

  // 4. In-progress topics (continue)
  for (const topicId of inProgressIds) {
    const t = topicRepo.getById(topicId);
    if (t) add(t, 'Continue where you left off', 95, 'next-up');
  }

  // 5. Start here: no-prerequisite topics not yet touched
  if (recs.length < 4) {
    for (const t of allTopics) {
      if (t.prerequisiteIds.length === 0 && !progressMap[t.id]) {
        add(t, 'Good starting point — no prerequisites', 40, 'start-here');
        if (recs.length >= 6) break;
      }
    }
  }

  // 6. Related to in-progress topics
  for (const topicId of inProgressIds) {
    const t = topicRepo.getById(topicId);
    if (!t) continue;
    for (const relId of t.relatedIds) {
      const rel = topicRepo.getById(relId);
      if (rel && !progressMap[rel.id]) {
        add(rel, `Related to ${t.title}`, 50, 'related');
        if (recs.length >= 8) break;
      }
    }
  }

  const hasPersonalData = completedIds.size > 0 || inProgressIds.size > 0 || quizAttempts.length > 0;

  return {
    items: recs.sort((a, b) => b.priority - a.priority).slice(0, 6),
    hasPersonalData,
  };
}

export function getSmartNextTopics(
  topicId: string,
  progressMap: Record<string, string>
): Topic[] {
  const topic = topicRepo.getById(topicId);
  if (!topic) return [];

  const completedIds = new Set(
    Object.entries(progressMap).filter(([, s]) => s === 'completed').map(([id]) => id)
  );

  // Prioritise unfinished leads-to topics whose prerequisites are now met
  const nextTopics: Topic[] = [];
  for (const leadId of topic.leadToIds) {
    const next = topicRepo.getById(leadId);
    if (!next || completedIds.has(next.id)) continue;
    const prereqsMet = next.prerequisiteIds.every(pid => completedIds.has(pid) || pid === topicId);
    if (prereqsMet) nextTopics.push(next);
  }

  // Fill with related topics if needed
  if (nextTopics.length < 3) {
    for (const relId of topic.relatedIds) {
      const rel = topicRepo.getById(relId);
      if (rel && !completedIds.has(rel.id) && !nextTopics.find(t => t.id === rel.id)) {
        nextTopics.push(rel);
        if (nextTopics.length >= 3) break;
      }
    }
  }

  return nextTopics.slice(0, 3);
}

export function getResourcesForRecommendedTopics(topicIds: string[]) {
  return topicIds.flatMap(id => resourceRepo.getByTopicId(id)).slice(0, 4);
}
