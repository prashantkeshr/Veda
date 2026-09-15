import { useState, useEffect } from 'react';
import { useSEO } from '../hooks/useSEO';
import { Trophy, Lock, Star } from 'lucide-react';
import { useUserData } from '../app/providers/UserDataProvider';
import { assessmentsDB, type QuizSession } from '../db/assessments';
import { calcXP, getLevel, checkAchievements, LEVELS, type Achievement } from '../lib/gamification';
import { Spinner } from '../components/ui';
import { cn } from '../utils/cn';

// ── XP Ring ───────────────────────────────────────────────────────────────

function XPRing({ xp, color }: { xp: number; color: string }) {
  const level = getLevel(xp);
  const next = LEVELS.find(l => l.rank === level.rank + 1);
  const progress = next
    ? Math.min(((xp - level.minXP) / (next.minXP - level.minXP)) * 100, 100)
    : 100;

  const R = 44; const C = 2 * Math.PI * R;
  const offset = C * (1 - progress / 100);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-28 h-28">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r={R} fill="none" className="stroke-stone-100 dark:stroke-stone-800" strokeWidth="8" />
          <circle
            cx="50" cy="50" r={R} fill="none"
            stroke={color} strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 0.6s ease' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-stone-900 dark:text-stone-100 tabular-nums">{level.rank}</span>
          <span className="text-[10px] font-medium text-stone-400 uppercase tracking-wide">Level</span>
        </div>
      </div>
      <div className="text-center">
        <div className="font-bold text-lg" style={{ color }}>{level.title}</div>
        <div className="text-sm text-stone-400 tabular-nums">{xp.toLocaleString()} XP</div>
        {next && (
          <div className="text-xs text-stone-400 mt-0.5">
            {(next.minXP - xp).toLocaleString()} XP to {next.title}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Achievement card ──────────────────────────────────────────────────────

function AchievementCard({ a }: { a: Achievement }) {
  return (
    <div className={cn(
      'relative flex flex-col items-center gap-2 p-4 rounded-xl border text-center transition-all',
      a.earned
        ? 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-700 shadow-sm'
        : 'bg-stone-50 dark:bg-stone-900/50 border-stone-100 dark:border-stone-800 opacity-60'
    )}>
      {a.earned && (
        <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shadow-sm">
          <Star size={10} className="text-white fill-white" />
        </div>
      )}
      <div className={cn(
        'text-3xl w-14 h-14 rounded-xl flex items-center justify-center text-2xl',
        a.earned
          ? 'bg-veda-50 dark:bg-veda-900/20'
          : 'bg-stone-100 dark:bg-stone-800 grayscale'
      )}>
        {a.earned ? a.icon : <Lock size={20} className="text-stone-400 dark:text-stone-600" />}
      </div>
      <div>
        <p className={cn(
          'text-sm font-semibold',
          a.earned ? 'text-stone-900 dark:text-stone-100' : 'text-stone-500 dark:text-stone-500'
        )}>{a.title}</p>
        <p className="text-xs text-stone-400 mt-0.5 leading-snug">{a.description}</p>
      </div>
      <div className={cn(
        'text-xs font-medium px-2 py-0.5 rounded-full',
        a.earned
          ? 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400'
          : 'bg-stone-100 text-stone-400 dark:bg-stone-800 dark:text-stone-600'
      )}>
        +{a.xpReward} XP
      </div>
    </div>
  );
}

// ── Level roadmap ─────────────────────────────────────────────────────────

function LevelRoadmap({ currentXP }: { currentXP: number }) {
  const currentLevel = getLevel(currentXP);
  return (
    <div className="space-y-2">
      {LEVELS.map((l, i) => {
        const isCurrent = l.rank === currentLevel.rank;
        const isPast = l.rank < currentLevel.rank;
        return (
          <div key={l.rank} className={cn(
            'flex items-center gap-3 p-3 rounded-lg border transition-all',
            isCurrent
              ? 'border-veda-300 dark:border-veda-700 bg-veda-50 dark:bg-veda-900/20'
              : isPast
              ? 'border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/30'
              : 'border-stone-100 dark:border-stone-800 opacity-50'
          )}>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
              style={{ background: isPast || isCurrent ? l.color : '#d1d5db' }}
            >
              {isPast ? '✓' : l.rank}
            </div>
            <div className="flex-1 min-w-0">
              <p className={cn('text-sm font-semibold', isCurrent ? 'text-veda-700 dark:text-veda-300' : 'text-stone-700 dark:text-stone-300')}>
                {l.title}
              </p>
              <p className="text-xs text-stone-400 tabular-nums">{l.minXP.toLocaleString()} XP{l.rank < 6 ? ` – ${(LEVELS[i + 1].minXP - 1).toLocaleString()} XP` : '+'}</p>
            </div>
            {isCurrent && (
              <span className="text-xs font-medium px-2 py-0.5 bg-veda-100 dark:bg-veda-800/40 text-veda-700 dark:text-veda-300 rounded-full flex-shrink-0">Current</span>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────

export function Achievements() {
  useSEO('Achievements', 'Your XP, level, and earned achievement badges on VEDA.');
  const { progressMap, quizAttempts, bookmarks, ready } = useUserData();
  const [sessions, setSessions] = useState<QuizSession[]>([]);
  const [sessionsLoaded, setSessionsLoaded] = useState(false);
  const [filter, setFilter] = useState<'all' | 'earned' | 'locked'>('all');

  useEffect(() => {
    assessmentsDB.getAllSessions()
      .then(s => { setSessions(s); setSessionsLoaded(true); })
      .catch(() => setSessionsLoaded(true));
  }, []);

  if (!ready || !sessionsLoaded) {
    return (
      <div className="flex items-center justify-center py-20">
        <Spinner size="lg" />
      </div>
    );
  }

  const xp = calcXP(progressMap, quizAttempts, bookmarks);
  const level = getLevel(xp);
  const achievements = checkAchievements(progressMap, quizAttempts, bookmarks, sessions);
  const earned = achievements.filter(a => a.earned);
  const visible = achievements.filter(a =>
    filter === 'all' ? true : filter === 'earned' ? a.earned : !a.earned
  );

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
          <Trophy size={20} className="text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Achievements</h1>
          <p className="text-sm text-stone-500 dark:text-stone-400">XP, level, and earned badges</p>
        </div>
      </div>

      {/* XP card + level roadmap */}
      <div className="grid lg:grid-cols-2 gap-4">
        {/* XP summary */}
        <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-6 flex flex-col items-center gap-6">
          <XPRing xp={xp} color={level.color} />
          <div className="w-full grid grid-cols-3 gap-3 text-center">
            {[
              { label: 'Earned', value: earned.length },
              { label: 'Locked', value: achievements.length - earned.length },
              { label: 'Total XP', value: xp.toLocaleString() },
            ].map(({ label, value }) => (
              <div key={label} className="bg-stone-50 dark:bg-stone-800/60 rounded-lg p-3">
                <div className="text-lg font-bold text-stone-900 dark:text-stone-100 tabular-nums">{value}</div>
                <div className="text-xs text-stone-400">{label}</div>
              </div>
            ))}
          </div>
          <div className="w-full text-sm text-stone-400 text-center">
            <span className="font-medium text-stone-600 dark:text-stone-300">How XP is earned:</span>
            {' '}25 per completed topic · 15 per quiz · bonus for high scores · 3 per bookmark
          </div>
        </div>

        {/* Level roadmap */}
        <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5">
          <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3">Level Roadmap</h2>
          <LevelRoadmap currentXP={xp} />
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex items-center gap-1 bg-stone-100 dark:bg-stone-800 rounded-lg p-1 w-fit">
        {(['all', 'earned', 'locked'] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              'px-4 py-1.5 rounded-md text-sm font-medium transition-colors capitalize',
              filter === f
                ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm'
                : 'text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300'
            )}
          >
            {f === 'all' ? `All (${achievements.length})` : f === 'earned' ? `Earned (${earned.length})` : `Locked (${achievements.length - earned.length})`}
          </button>
        ))}
      </div>

      {/* Achievement grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {visible.map(a => <AchievementCard key={a.id} a={a} />)}
      </div>

      {visible.length === 0 && (
        <div className="text-center py-10 text-stone-400">
          No {filter} achievements yet — keep studying and taking quizzes!
        </div>
      )}
    </div>
  );
}
