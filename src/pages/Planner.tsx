import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import {
  CalendarDays, ChevronLeft, ChevronRight,
  Check, X, Plus, Timer, BookOpen,
} from 'lucide-react';
import { plannerDB, emptyDayPlan, type DayPlan } from '../db/planner';
import { topicRepo, subjectRepo } from '../repositories';
import { cn } from '../utils/cn';

// ── Helpers ────────────────────────────────────────────────────────────────

const DAY_SHORT = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const DAY_LONG  = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function getWeekDays(offset: number): string[] {
  const now    = new Date();
  const dow    = now.getDay(); // 0=Sun
  const monday = new Date(now);
  monday.setDate(now.getDate() - ((dow + 6) % 7) + offset * 7);
  monday.setHours(0, 0, 0, 0);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d.toISOString().slice(0, 10);
  });
}

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function weekRangeLabel(days: string[]): string {
  const first = new Date(days[0] + 'T00:00:00');
  const last  = new Date(days[6] + 'T00:00:00');
  if (first.getMonth() === last.getMonth()) {
    return first.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
  }
  return `${first.toLocaleDateString('en-IN', { month: 'short' })} – ${last.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}`;
}

// ── Component ──────────────────────────────────────────────────────────────

export function Planner() {
  useSEO('Weekly Planner', 'Plan your weekly study schedule by assigning topics to each day.');

  const today = todayISO();

  const [weekOffset, setWeekOffset] = useState(0);
  const days = useMemo(() => getWeekDays(weekOffset), [weekOffset]);

  const [selectedDay, setSelectedDay] = useState(today);
  const [plans, setPlans]             = useState<Record<string, DayPlan>>({});
  const [loading, setLoading]         = useState(true);

  const [addSubjectId, setAddSubjectId] = useState('');
  const [addTopicId,   setAddTopicId]   = useState('');

  const allSubjects = useMemo(() => subjectRepo.getAll(), []);
  const allTopics   = useMemo(() => topicRepo.getAll(),   []);

  const filteredTopics = addSubjectId
    ? allTopics.filter(t => t.subjectIds.includes(addSubjectId))
    : allTopics;

  // Keep selectedDay inside the displayed week
  useEffect(() => {
    setSelectedDay(prev =>
      days.includes(prev) ? prev : (days.includes(today) ? today : days[0])
    );
  }, [days, today]);

  // Load plans for visible week
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    Promise.all(
      days.map(id => plannerDB.get(id).then(p => ({ id, plan: p ?? emptyDayPlan(id) })))
    ).then(entries => {
      if (cancelled) return;
      const map: Record<string, DayPlan> = {};
      for (const { id, plan } of entries) map[id] = plan;
      setPlans(map);
      setLoading(false);
    }).catch(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [days]);

  // ── Mutations ────────────────────────────────────────────────────────────

  function savePlan(plan: DayPlan) {
    setPlans(prev => ({ ...prev, [plan.id]: plan }));
    plannerDB.save(plan);
  }

  function toggleDone(dayId: string, topicId: string) {
    const plan      = plans[dayId] ?? emptyDayPlan(dayId);
    const completed = plan.completed.includes(topicId)
      ? plan.completed.filter(id => id !== topicId)
      : [...plan.completed, topicId];
    savePlan({ ...plan, completed });
  }

  function removeTopic(dayId: string, topicId: string) {
    const plan = plans[dayId] ?? emptyDayPlan(dayId);
    savePlan({
      ...plan,
      topicIds:  plan.topicIds.filter(id => id !== topicId),
      completed: plan.completed.filter(id => id !== topicId),
    });
  }

  function addTopic(dayId: string) {
    if (!addTopicId) return;
    const plan = plans[dayId] ?? emptyDayPlan(dayId);
    if (!plan.topicIds.includes(addTopicId)) {
      savePlan({ ...plan, topicIds: [...plan.topicIds, addTopicId] });
    }
    setAddTopicId('');
  }

  function setNotes(dayId: string, notes: string) {
    const plan = plans[dayId] ?? emptyDayPlan(dayId);
    savePlan({ ...plan, notes });
  }

  // ── Derived values ───────────────────────────────────────────────────────

  const totalScheduled = days.reduce((n, d) => n + (plans[d]?.topicIds.length ?? 0), 0);
  const totalCompleted = days.reduce((n, d) => n + (plans[d]?.completed.length ?? 0), 0);

  const selectedIdx  = days.indexOf(selectedDay);
  const currentPlan  = plans[selectedDay] ?? emptyDayPlan(selectedDay);
  const currentTopics  = currentPlan.topicIds.length;
  const currentDone    = currentPlan.completed.length;

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-8">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-veda-700 flex items-center justify-center flex-shrink-0">
            <CalendarDays size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Weekly Planner</h1>
            <p className="text-sm text-stone-500 dark:text-stone-400">Schedule topics day by day</p>
          </div>
        </div>
        {totalScheduled > 0 && (
          <div className="text-right flex-shrink-0">
            <p className="text-xl font-bold text-stone-900 dark:text-stone-100 tabular-nums">
              {totalCompleted}/{totalScheduled}
            </p>
            <p className="text-xs text-stone-400">topics this week</p>
          </div>
        )}
      </div>

      {/* Week navigation */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setWeekOffset(o => o - 1)}
          className="p-2 rounded-lg border border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800 text-stone-500 transition-colors"
          aria-label="Previous week"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex-1 text-center">
          <span className="text-sm font-medium text-stone-700 dark:text-stone-300">
            {weekRangeLabel(days)}
          </span>
          {weekOffset !== 0 && (
            <button
              onClick={() => setWeekOffset(0)}
              className="ml-2 text-xs text-veda-600 dark:text-veda-400 hover:underline"
            >
              This week
            </button>
          )}
        </div>
        <button
          onClick={() => setWeekOffset(o => o + 1)}
          className="p-2 rounded-lg border border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800 text-stone-500 transition-colors"
          aria-label="Next week"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Week strip */}
      <div className="grid grid-cols-7 gap-1.5">
        {days.map((dayId, i) => {
          const plan       = plans[dayId];
          const count      = plan?.topicIds.length ?? 0;
          const done       = plan?.completed.length ?? 0;
          const isToday    = dayId === today;
          const isSelected = dayId === selectedDay;
          const isPast     = dayId < today;
          const dom = new Date(dayId + 'T00:00:00').getDate();

          return (
            <button
              key={dayId}
              onClick={() => setSelectedDay(dayId)}
              className={cn(
                'flex flex-col items-center gap-1 py-3 px-0.5 rounded-xl border transition-colors',
                isSelected
                  ? 'border-veda-600 bg-veda-50 dark:bg-veda-900/20'
                  : 'border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800'
              )}
            >
              <span className={cn(
                'text-[10px] font-medium uppercase tracking-wide',
                isSelected ? 'text-veda-600 dark:text-veda-400' : 'text-stone-400'
              )}>
                {DAY_SHORT[i]}
              </span>

              {isToday ? (
                <span className="w-6 h-6 rounded-full bg-veda-700 dark:bg-veda-500 text-white flex items-center justify-center text-xs font-bold tabular-nums">
                  {dom}
                </span>
              ) : (
                <span className={cn(
                  'text-sm font-bold tabular-nums',
                  isSelected ? 'text-veda-700 dark:text-veda-300' : 'text-stone-700 dark:text-stone-300'
                )}>
                  {dom}
                </span>
              )}

              {count > 0 ? (
                <span className={cn(
                  'text-[10px] tabular-nums',
                  done === count ? 'text-emerald-500 font-medium' :
                  isPast ? 'text-amber-500' : 'text-stone-400'
                )}>
                  {done}/{count}
                </span>
              ) : (
                <span className="text-[10px] text-stone-200 dark:text-stone-700">—</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Day detail */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="w-6 h-6 border-2 border-veda-600 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 overflow-hidden">

          {/* Day header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100 dark:border-stone-800">
            <div>
              <h2 className="text-base font-semibold text-stone-900 dark:text-stone-100">
                {DAY_LONG[selectedIdx >= 0 ? selectedIdx : 0]}
              </h2>
              <p className="text-xs text-stone-400 mt-0.5 flex items-center gap-1.5 flex-wrap">
                {new Date(selectedDay + 'T00:00:00').toLocaleDateString('en-IN', {
                  day: 'numeric', month: 'long', year: 'numeric',
                })}
                {selectedDay === today && (
                  <span className="px-1.5 py-0.5 bg-veda-100 dark:bg-veda-900/30 text-veda-700 dark:text-veda-300 rounded text-[10px] font-medium">
                    Today
                  </span>
                )}
              </p>
            </div>
            {currentTopics > 0 && (
              <div className="text-right flex-shrink-0 ml-4">
                <p className="text-base font-bold text-stone-800 dark:text-stone-200 tabular-nums">
                  {currentDone}/{currentTopics}
                </p>
                <p className="text-[10px] text-stone-400">done</p>
              </div>
            )}
          </div>

          {/* Topic list */}
          <div className="divide-y divide-stone-50 dark:divide-stone-800/50">
            {currentTopics === 0 ? (
              <div className="flex flex-col items-center py-10 text-center px-6">
                <BookOpen size={28} className="text-stone-200 dark:text-stone-700 mb-3" />
                <p className="text-sm text-stone-400 dark:text-stone-500">No topics scheduled.</p>
                <p className="text-xs text-stone-300 dark:text-stone-600 mt-1">Add topics using the form below.</p>
              </div>
            ) : (
              currentPlan.topicIds.map(topicId => {
                const topic   = topicRepo.getById(topicId);
                if (!topic) return null;
                const subject = subjectRepo.getById(topic.subjectIds[0]);
                const isDone  = currentPlan.completed.includes(topicId);

                return (
                  <div
                    key={topicId}
                    className={cn(
                      'flex items-center gap-3 px-5 py-3.5 group transition-opacity',
                      isDone && 'opacity-60'
                    )}
                  >
                    <button
                      onClick={() => toggleDone(selectedDay, topicId)}
                      className={cn(
                        'w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors',
                        isDone
                          ? 'bg-emerald-500 border-emerald-500'
                          : 'border-stone-300 dark:border-stone-600 hover:border-veda-500'
                      )}
                      aria-label={isDone ? 'Mark incomplete' : 'Mark complete'}
                    >
                      {isDone && <Check size={12} className="text-white" strokeWidth={3} />}
                    </button>

                    <div className="flex-1 min-w-0">
                      <p className={cn(
                        'text-sm font-medium text-stone-800 dark:text-stone-200 truncate',
                        isDone && 'line-through'
                      )}>
                        {topic.title}
                      </p>
                      {subject && (
                        <span className="text-[10px] text-stone-400">{subject.shortTitle}</span>
                      )}
                    </div>

                    <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link
                        to="/timer"
                        className="p-1.5 rounded-md text-stone-400 hover:text-veda-600 dark:hover:text-veda-400 hover:bg-veda-50 dark:hover:bg-veda-900/20 transition-colors"
                        title="Open study timer"
                        aria-label="Open study timer"
                      >
                        <Timer size={14} />
                      </Link>
                      <button
                        onClick={() => removeTopic(selectedDay, topicId)}
                        className="p-1.5 rounded-md text-stone-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                        aria-label="Remove from day"
                        title="Remove from day"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Add topic */}
          <div className="px-5 py-4 border-t border-stone-100 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/20">
            <div className="flex gap-2 flex-col sm:flex-row">
              <select
                value={addSubjectId}
                onChange={e => { setAddSubjectId(e.target.value); setAddTopicId(''); }}
                className="flex-shrink-0 sm:w-40 px-2.5 py-2 text-xs rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 focus:outline-none focus:ring-2 focus:ring-veda-600/30"
              >
                <option value="">All Subjects</option>
                {allSubjects.map(s => (
                  <option key={s.id} value={s.id}>{s.shortTitle}</option>
                ))}
              </select>
              <select
                value={addTopicId}
                onChange={e => setAddTopicId(e.target.value)}
                className="flex-1 px-2.5 py-2 text-xs rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 focus:outline-none focus:ring-2 focus:ring-veda-600/30"
              >
                <option value="">Select a topic…</option>
                {filteredTopics
                  .filter(t => !currentPlan.topicIds.includes(t.id))
                  .map(t => (
                    <option key={t.id} value={t.id}>{t.title}</option>
                  ))}
              </select>
              <button
                onClick={() => addTopic(selectedDay)}
                disabled={!addTopicId}
                className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-veda-700 hover:bg-veda-800 text-white text-xs font-medium disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
              >
                <Plus size={13} />
                Add
              </button>
            </div>
          </div>

          {/* Day notes */}
          <div className="px-5 py-4 border-t border-stone-100 dark:border-stone-800">
            <label className="block text-xs font-medium text-stone-400 dark:text-stone-500 mb-1.5">
              Day notes
            </label>
            <textarea
              value={currentPlan.notes}
              onChange={e => setNotes(selectedDay, e.target.value)}
              placeholder="Reminders, goals, anything for the day…"
              rows={2}
              className="w-full px-3 py-2 text-sm rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 placeholder-stone-300 dark:placeholder-stone-600 focus:outline-none focus:ring-2 focus:ring-veda-600/30 resize-none"
            />
          </div>
        </div>
      )}
    </div>
  );
}
