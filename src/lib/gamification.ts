import { topicRepo, subjectRepo } from '../repositories';
import type { BookmarkRecord, QuizAttempt } from '../db';
import type { QuizSession } from '../db/assessments';

// ── XP ────────────────────────────────────────────────────────────────────

export function calcXP(
  progressMap: Record<string, string>,
  quizAttempts: QuizAttempt[],
  bookmarks: BookmarkRecord[],
): number {
  let xp = 0;
  for (const status of Object.values(progressMap)) {
    if (status === 'in-progress') xp += 10;
    else if (status === 'completed') xp += 25;
  }
  for (const a of quizAttempts) {
    xp += 15;
    xp += Math.floor((a.score / a.total) * 10);
  }
  xp += bookmarks.length * 3;
  return xp;
}

// ── Levels ────────────────────────────────────────────────────────────────

export type Level = {
  rank: number;
  title: string;
  minXP: number;
  maxXP: number;
  color: string;
};

export const LEVELS: Level[] = [
  { rank: 1, title: 'Novice',       minXP: 0,    maxXP: 100,  color: '#78716c' },
  { rank: 2, title: 'Explorer',     minXP: 100,  maxXP: 300,  color: '#3b82f6' },
  { rank: 3, title: 'Scholar',      minXP: 300,  maxXP: 600,  color: '#8b5cf6' },
  { rank: 4, title: 'Practitioner', minXP: 600,  maxXP: 1000, color: '#f59e0b' },
  { rank: 5, title: 'Expert',       minXP: 1000, maxXP: 1500, color: '#f97316' },
  { rank: 6, title: 'Master',       minXP: 1500, maxXP: 9999, color: '#ef4444' },
];

export function getLevel(xp: number): Level {
  return [...LEVELS].reverse().find(l => xp >= l.minXP) ?? LEVELS[0];
}

// ── Achievements ──────────────────────────────────────────────────────────

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: string;
  xpReward: number;
  earned: boolean;
  earnedAt?: string;
};

export function checkAchievements(
  progressMap: Record<string, string>,
  quizAttempts: QuizAttempt[],
  bookmarks: BookmarkRecord[],
  sessions: QuizSession[],
): Achievement[] {
  const allTopics = topicRepo.getAll();
  const allSubjects = subjectRepo.getAll();

  const completedIds = Object.entries(progressMap)
    .filter(([, s]) => s === 'completed')
    .map(([id]) => id);
  const studiedIds = Object.keys(progressMap);
  const totalCompleted = completedIds.length;
  const totalStudied = studiedIds.length;

  const subjectsDone = new Set(
    completedIds.flatMap(tid => {
      const t = allTopics.find(t => t.id === tid);
      return t ? t.subjectIds : [];
    })
  );

  const scores = quizAttempts.map(a => (a.score / a.total) * 100);
  const avgScore = scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
  const hasPerfect = sessions.some(s => s.score === s.total && s.total > 0);

  // streak computation
  let streak = 0;
  const dayMap = new Map<string, number>();
  for (const a of quizAttempts) {
    const k = a.date.slice(0, 10);
    dayMap.set(k, (dayMap.get(k) ?? 0) + 1);
  }
  const d = new Date();
  while (true) {
    const k = d.toISOString().slice(0, 10);
    if (dayMap.has(k)) { streak++; d.setDate(d.getDate() - 1); }
    else break;
  }

  // per-subject completion check
  const anySubjectComplete = allSubjects.some(sub => {
    const subTopics = allTopics.filter(t => t.subjectIds.includes(sub.id));
    return subTopics.length > 0 && subTopics.every(t => completedIds.includes(t.id));
  });

  const defs: Array<Omit<Achievement, 'earned' | 'earnedAt'> & { check: boolean }> = [
    {
      id: 'first_step',
      title: 'First Step',
      description: 'Complete your first topic',
      icon: '🎯',
      xpReward: 50,
      check: totalCompleted >= 1,
    },
    {
      id: 'on_a_roll',
      title: 'On a Roll',
      description: 'Complete 5 topics',
      icon: '🔥',
      xpReward: 100,
      check: totalCompleted >= 5,
    },
    {
      id: 'completionist',
      title: 'Completionist',
      description: 'Complete 20 topics',
      icon: '🏆',
      xpReward: 300,
      check: totalCompleted >= 20,
    },
    {
      id: 'deep_diver',
      title: 'Deep Diver',
      description: 'Complete all topics in any one subject',
      icon: '🤿',
      xpReward: 250,
      check: anySubjectComplete,
    },
    {
      id: 'multi_subject',
      title: 'Breadth First',
      description: 'Complete topics across 3 different subjects',
      icon: '🌐',
      xpReward: 150,
      check: subjectsDone.size >= 3,
    },
    {
      id: 'knowledge_seeker',
      title: 'Knowledge Seeker',
      description: 'Explore 50 or more topics',
      icon: '📚',
      xpReward: 200,
      check: totalStudied >= 50,
    },
    {
      id: 'bookworm',
      title: 'Bookworm',
      description: 'Save 10 bookmarks',
      icon: '🔖',
      xpReward: 75,
      check: bookmarks.length >= 10,
    },
    {
      id: 'quiz_debut',
      title: 'Quiz Debut',
      description: 'Take your first practice quiz',
      icon: '✏️',
      xpReward: 50,
      check: quizAttempts.length >= 1,
    },
    {
      id: 'quiz_veteran',
      title: 'Quiz Veteran',
      description: 'Complete 10 practice quizzes',
      icon: '📝',
      xpReward: 150,
      check: sessions.length >= 10,
    },
    {
      id: 'perfect_score',
      title: 'Perfect Score',
      description: 'Score 100% on a practice quiz',
      icon: '⭐',
      xpReward: 200,
      check: hasPerfect,
    },
    {
      id: 'high_achiever',
      title: 'High Achiever',
      description: 'Maintain an average quiz score above 80%',
      icon: '🎖️',
      xpReward: 175,
      check: scores.length >= 3 && avgScore >= 80,
    },
    {
      id: 'streak_3',
      title: 'Consistent',
      description: 'Study 3 days in a row',
      icon: '📅',
      xpReward: 75,
      check: streak >= 3,
    },
    {
      id: 'streak_7',
      title: 'Dedicated',
      description: 'Maintain a 7-day study streak',
      icon: '🗓️',
      xpReward: 200,
      check: streak >= 7,
    },
  ];

  return defs.map(({ check, ...rest }) => ({
    ...rest,
    earned: check,
  }));
}
