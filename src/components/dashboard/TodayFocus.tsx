import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, Layers, Timer, Check, ArrowRight } from 'lucide-react';
import { plannerDB, emptyDayPlan, type DayPlan } from '../../db/planner';
import { flashcardsDB } from '../../db/flashcards';
import { isDue } from '../../lib/sm2';
import { studySessionsDB, todayKey } from '../../db/studySessions';
import { topicRepo } from '../../repositories';
import { cn } from '../../utils/cn';
import { formatMinutes } from '../../utils/format';

// ── Types ──────────────────────────────────────────────────────────────────

type TodayData = {
  plan: DayPlan;
  dueCount: number;
  focusMinutes: number;
};

// ── Stat tile ──────────────────────────────────────────────────────────────

function StatTile({
  to, icon: Icon, label, value, sub, accent,
}: {
  to: string;
  icon: typeof CalendarDays;
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <Link
      to={to}
      className={cn(
        'flex flex-col gap-1 p-4 rounded-xl border transition-colors',
        accent
          ? 'border-veda-200 bg-veda-50 dark:border-veda-800 dark:bg-veda-900/20 hover:border-veda-300 dark:hover:border-veda-700'
          : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 hover:border-stone-300 dark:hover:border-stone-700'
      )}
    >
      <Icon
        size={15}
        className={accent ? 'text-veda-600 dark:text-veda-400' : 'text-stone-400'}
      />
      <p className="text-xl font-bold tabular-nums text-stone-900 dark:text-stone-100 leading-none">
        {value}
      </p>
      <p className="text-xs font-medium text-stone-500 dark:text-stone-400">{label}</p>
      {sub && <p className="text-[10px] text-stone-300 dark:text-stone-600">{sub}</p>}
    </Link>
  );
}

// ── Main widget ────────────────────────────────────────────────────────────

export function TodayFocus() {
  const today = todayKey();
  const [data, setData]   = useState<TodayData | null>(null);

  useEffect(() => {
    let cancelled = false;
    Promise.all([
      plannerDB.get(today),
      flashcardsDB.getAll(),
      studySessionsDB.getAll(),
    ]).then(([dayPlan, cards, sessions]) => {
      if (cancelled) return;
      const plan         = dayPlan ?? emptyDayPlan(today);
      const dueCount     = cards.filter(isDue).length;
      const focusSessions = sessions.filter(s => s.completedAt.startsWith(today) && s.phase === 'work');
      const focusMinutes  = focusSessions.reduce((n, s) => n + s.durationMinutes, 0);
      setData({ plan, dueCount, focusMinutes });
    }).catch(() => {
      if (!cancelled) setData({ plan: emptyDayPlan(today), dueCount: 0, focusMinutes: 0 });
    });
    return () => { cancelled = true; };
  }, [today]);

  if (!data) return null;

  const { plan, dueCount, focusMinutes } = data;
  const hasTopics  = plan.topicIds.length > 0;
  const hasDue     = dueCount > 0;
  const hasStudied = focusMinutes > 0;

  if (!hasTopics && !hasDue && !hasStudied) return null;

  const done          = plan.completed.length;
  const total         = plan.topicIds.length;
  const allDone       = hasTopics && done === total;
  const previewTopics = plan.topicIds.slice(0, 3)
    .map(id => topicRepo.getById(id))
    .filter(t => t !== undefined);

  const dateLabel = new Date(today + 'T00:00:00').toLocaleDateString('en-IN', {
    weekday: 'long', day: 'numeric', month: 'short',
  });

  return (
    <div className="space-y-3">
      {/* Section header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-stone-900 dark:text-stone-100">Today's Focus</h2>
          <p className="text-xs text-stone-400 mt-0.5">{dateLabel}</p>
        </div>
        {hasTopics && (
          <Link
            to="/planner"
            className="text-xs text-veda-700 dark:text-veda-400 hover:underline flex items-center gap-1"
          >
            Full plan <ArrowRight size={12} />
          </Link>
        )}
      </div>

      {/* Stat tiles */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        <StatTile
          to="/planner"
          icon={CalendarDays}
          label="Today's Topics"
          value={hasTopics ? `${done}/${total}` : '—'}
          sub={allDone ? 'All done ✓' : hasTopics ? `${total - done} remaining` : undefined}
          accent={hasTopics && !allDone}
        />
        <StatTile
          to="/flashcards"
          icon={Layers}
          label="Cards Due"
          value={dueCount > 0 ? String(dueCount) : '—'}
          sub={dueCount > 0 ? 'ready to review' : undefined}
          accent={hasDue}
        />
        <StatTile
          to="/timer"
          icon={Timer}
          label="Focus Today"
          value={hasStudied ? formatMinutes(focusMinutes) : '—'}
          sub={hasStudied ? 'logged' : undefined}
          accent={hasStudied}
        />
      </div>

      {/* Today's topic preview */}
      {hasTopics && (
        <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 divide-y divide-stone-50 dark:divide-stone-800/50">
          {previewTopics.map(topic => {
            const isDone = plan.completed.includes(topic.id);
            return (
              <div key={topic.id} className="flex items-center gap-3 px-4 py-3">
                <div className={cn(
                  'w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors',
                  isDone ? 'bg-emerald-500 border-emerald-500' : 'border-stone-300 dark:border-stone-600'
                )}>
                  {isDone && <Check size={10} className="text-white" strokeWidth={3} />}
                </div>
                <Link
                  to={`/topics/${topic.slug}`}
                  className={cn(
                    'text-sm text-stone-700 dark:text-stone-300 hover:text-veda-700 dark:hover:text-veda-400 truncate transition-colors',
                    isDone && 'line-through opacity-50'
                  )}
                >
                  {topic.title}
                </Link>
              </div>
            );
          })}
          {plan.topicIds.length > 3 && (
            <div className="px-4 py-2.5">
              <Link
                to="/planner"
                className="text-xs text-stone-400 hover:text-veda-600 dark:hover:text-veda-400 transition-colors"
              >
                +{plan.topicIds.length - 3} more topics → view full plan
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
