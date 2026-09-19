import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import {
  BarChart2, TrendingUp, Flame, BookOpen,
  CheckCircle, Trophy, ClipboardCheck, ArrowRight,
} from 'lucide-react';
import { useUserData } from '../app/providers/UserDataProvider';
import { assessmentsDB, type QuizSession } from '../db/assessments';
import { subjectRepo, topicRepo, questionRepo } from '../repositories';
import { cn } from '../utils/cn';
import { Spinner, SectionHeader } from '../components/ui';

// ── Helpers ────────────────────────────────────────────────────────────────

function toDateKey(iso: string) { return iso.slice(0, 10); }

function buildDayMap(dates: string[]): Map<string, number> {
  const m = new Map<string, number>();
  for (const d of dates) {
    const k = toDateKey(d);
    m.set(k, (m.get(k) ?? 0) + 1);
  }
  return m;
}

function calcStreak(dayMap: Map<string, number>): number {
  let streak = 0;
  const d = new Date();
  while (true) {
    const k = d.toISOString().slice(0, 10);
    if (dayMap.has(k)) { streak++; d.setDate(d.getDate() - 1); }
    else break;
  }
  return streak;
}

function heatmapCells(dayMap: Map<string, number>, weeks = 14) {
  const total = weeks * 7;
  const today = new Date();
  const start = new Date(today);
  start.setDate(today.getDate() - (total - 1));
  return Array.from({ length: total }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    const key = d.toISOString().slice(0, 10);
    return { key, count: dayMap.get(key) ?? 0, dayOfWeek: d.getDay() };
  });
}

function cellColor(count: number) {
  if (count === 0) return 'fill-stone-100 dark:fill-stone-800';
  if (count === 1) return 'fill-veda-200 dark:fill-veda-900';
  if (count === 2) return 'fill-veda-400 dark:fill-veda-700';
  if (count === 3) return 'fill-veda-600 dark:fill-veda-500';
  return 'fill-veda-800 dark:fill-veda-400';
}

// ── Sub-components ────────────────────────────────────────────────────────

function ScoreLineChart({ scores }: { scores: number[] }) {
  const W = 360; const H = 100; const PAD = 12;
  const w = W - PAD * 2; const h = H - PAD * 2;
  const n = scores.length;

  if (n < 2) return (
    <div className="flex items-center justify-center h-24 text-sm text-stone-400 dark:text-stone-600">
      Take at least 2 quizzes to see your score trend
    </div>
  );

  const pts = scores.map((s, i) => ({
    x: PAD + (i / (n - 1)) * w,
    y: PAD + (1 - s / 100) * h,
  }));

  const linePath = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  const areaPath = linePath + ` L ${pts[n - 1].x.toFixed(1)},${(H - PAD).toFixed(1)} L ${PAD},${(H - PAD).toFixed(1)} Z`;

  const avg = Math.round(scores.reduce((a, b) => a + b, 0) / n);

  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <span className="text-xs text-stone-400">Score %</span>
        <span className="text-xs text-stone-400">avg {avg}%</span>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: H }}>
        {/* Gridlines */}
        {[0, 25, 50, 75, 100].map(v => {
          const y = PAD + (1 - v / 100) * h;
          return (
            <g key={v}>
              <line x1={PAD} y1={y} x2={W - PAD} y2={y} className="stroke-stone-100 dark:stroke-stone-800" strokeWidth="1" />
              <text x={PAD - 4} y={y + 4} textAnchor="end" className="fill-stone-300 dark:fill-stone-600" fontSize="8">{v}</text>
            </g>
          );
        })}
        {/* Avg line */}
        {(() => { const ay = PAD + (1 - avg / 100) * h; return <line x1={PAD} y1={ay} x2={W - PAD} y2={ay} stroke="#1B4082" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />; })()}
        {/* Area */}
        <path d={areaPath} fill="#1B4082" opacity="0.08" />
        {/* Line */}
        <path d={linePath} fill="none" stroke="#1B4082" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dark:stroke-[#5b8ad4]" />
        {/* Dots */}
        {pts.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="3" fill="#1B4082" className="dark:fill-[#5b8ad4]" />
        ))}
        {/* Last score label */}
        <text x={pts[n - 1].x} y={pts[n - 1].y - 6} textAnchor="middle" fontSize="9" fontWeight="600" fill="#1B4082" className="dark:fill-[#93b3e8]">
          {scores[n - 1]}%
        </text>
      </svg>
      <div className="flex justify-between mt-1">
        <span className="text-[10px] text-stone-400">Attempt 1</span>
        <span className="text-[10px] text-stone-400">Attempt {n}</span>
      </div>
    </div>
  );
}

function SubjectProgress({ progressMap }: { progressMap: Record<string, string> }) {
  const subjects = subjectRepo.getAll();
  const allTopics = topicRepo.getAll();

  const rows = subjects.map(s => {
    const topicIds = allTopics.filter(t => t.subjectIds.includes(s.id)).map(t => t.id);
    const done = topicIds.filter(id => progressMap[id] === 'completed').length;
    const started = topicIds.filter(id => progressMap[id] === 'in-progress').length;
    const total = topicIds.length;
    return { title: s.shortTitle || s.title, done, started, total };
  }).filter(r => r.total > 0);

  if (rows.length === 0) return <p className="text-sm text-stone-400">No subjects found</p>;

  return (
    <div className="space-y-3">
      {rows.map(r => {
        const donePct = r.total > 0 ? (r.done / r.total) * 100 : 0;
        const startedPct = r.total > 0 ? (r.started / r.total) * 100 : 0;
        return (
          <div key={r.title}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-stone-700 dark:text-stone-300 font-medium truncate pr-2">{r.title}</span>
              <span className="text-stone-400 tabular-nums flex-shrink-0">{r.done}/{r.total}</span>
            </div>
            <div className="h-2 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden flex">
              <div className="h-full bg-emerald-500 rounded-l-full transition-all" style={{ width: `${donePct}%` }} />
              <div className="h-full bg-amber-400 transition-all" style={{ width: `${startedPct}%` }} />
            </div>
          </div>
        );
      })}
      <div className="flex items-center gap-4 pt-1">
        <span className="flex items-center gap-1.5 text-xs text-stone-400"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-500 flex-shrink-0" />Completed</span>
        <span className="flex items-center gap-1.5 text-xs text-stone-400"><span className="w-2.5 h-2.5 rounded-sm bg-amber-400 flex-shrink-0" />In Progress</span>
      </div>
    </div>
  );
}

function DifficultyBreakdown({ sessions }: { sessions: QuizSession[] }) {
  const questions = questionRepo.getAll();
  const counts: Record<string, number> = { beginner: 0, intermediate: 0, advanced: 0, expert: 0 };

  for (const s of sessions) {
    s.questionIds.forEach((qid, i) => {
      if (s.answers[i] !== null) {
        const q = questions.find(q => q.id === qid);
        if (q) counts[q.difficulty] = (counts[q.difficulty] ?? 0) + 1;
      }
    });
  }

  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  if (total === 0) return <p className="text-sm text-stone-400">No quiz data yet</p>;

  const bars = [
    { key: 'beginner', label: 'Beginner', color: 'bg-emerald-500' },
    { key: 'intermediate', label: 'Intermediate', color: 'bg-amber-500' },
    { key: 'advanced', label: 'Advanced', color: 'bg-orange-500' },
    { key: 'expert', label: 'Expert', color: 'bg-red-600' },
  ];

  return (
    <div className="space-y-2.5">
      {bars.map(b => {
        const pct = total > 0 ? Math.round((counts[b.key] / total) * 100) : 0;
        return (
          <div key={b.key}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-stone-600 dark:text-stone-400">{b.label}</span>
              <span className="text-stone-400 tabular-nums">{counts[b.key]} ({pct}%)</span>
            </div>
            <div className="h-1.5 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
              <div className={cn('h-full rounded-full transition-all', b.color)} style={{ width: `${pct}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ActivityHeatmap({ dayMap }: { dayMap: Map<string, number> }) {
  const weeks = 14;
  const cells = heatmapCells(dayMap, weeks);
  const CELL = 12; const GAP = 3; const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const totalW = weeks * (CELL + GAP) - GAP;
  const totalH = 7 * (CELL + GAP) - GAP + 18;

  return (
    <div className="overflow-x-auto">
      <svg viewBox={`0 0 ${totalW + 24} ${totalH}`} style={{ minWidth: totalW + 24, height: totalH + 4 }} className="w-full">
        {DAYS.map((d, i) => (
          <text key={i} x={0} y={18 + i * (CELL + GAP) + CELL / 2 + 3} fontSize="7" className="fill-stone-400 dark:fill-stone-600">{d}</text>
        ))}
        {cells.map((c, i) => {
          const col = Math.floor(i / 7);
          const row = i % 7;
          const x = 18 + col * (CELL + GAP);
          const y = 2 + row * (CELL + GAP);
          return (
            <rect
              key={c.key}
              x={x} y={y}
              width={CELL} height={CELL}
              rx="2"
              className={cellColor(c.count)}
            >
              <title>{c.key}: {c.count} quiz{c.count !== 1 ? 'zes' : ''}</title>
            </rect>
          );
        })}
      </svg>
      <div className="flex items-center justify-end gap-1.5 mt-2">
        <span className="text-[10px] text-stone-400">Less</span>
        {[0, 1, 2, 3, 4].map(v => (
          <svg key={v} width="11" height="11"><rect width="11" height="11" rx="2" className={cellColor(v)} /></svg>
        ))}
        <span className="text-[10px] text-stone-400">More</span>
      </div>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────

export function Insights() {
  useSEO('Insights', 'Your learning analytics — quiz trends, topic progress, and study activity.');
  const { progressMap, quizAttempts, bookmarks, ready } = useUserData();
  const [sessions, setSessions] = useState<QuizSession[]>([]);
  const [sessionsLoaded, setSessionsLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const fallback = setTimeout(() => { if (!cancelled) setSessionsLoaded(true); }, 2000);
    assessmentsDB.getAllSessions()
      .then(s => { if (!cancelled) { setSessions(s); setSessionsLoaded(true); } })
      .catch(() => { if (!cancelled) setSessionsLoaded(true); })
      .finally(() => clearTimeout(fallback));
    return () => { cancelled = true; clearTimeout(fallback); };
  }, []);

  if (!ready || !sessionsLoaded) {
    return (
      <div className="flex items-center justify-center py-20">
        <Spinner size="lg" />
      </div>
    );
  }

  const allTopics = topicRepo.getAll();
  const completedCount = Object.values(progressMap).filter(s => s === 'completed').length;
  const inProgressCount = Object.values(progressMap).filter(s => s === 'in-progress').length;
  const totalStudied = completedCount + inProgressCount;
  const completionRate = allTopics.length > 0 ? Math.round((completedCount / allTopics.length) * 100) : 0;

  const scores = quizAttempts.map(a => Math.round((a.score / a.total) * 100));
  const avgScore = scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;

  const dayMap = buildDayMap(quizAttempts.map(a => a.date));
  const streak = calcStreak(dayMap);

  const hasAnyActivity = totalStudied > 0 || quizAttempts.length > 0 || bookmarks.length > 0;

  const stats = [
    { icon: BookOpen, label: 'Topics Explored', value: totalStudied, color: 'text-veda-600 dark:text-veda-400', bg: 'bg-veda-50 dark:bg-veda-900/20' },
    { icon: CheckCircle, label: 'Completion Rate', value: `${completionRate}%`, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
    { icon: Trophy, label: 'Quiz Average', value: scores.length > 0 ? `${avgScore}%` : '—', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-900/20' },
    { icon: Flame, label: 'Day Streak', value: streak, color: 'text-orange-500 dark:text-orange-400', bg: 'bg-orange-50 dark:bg-orange-900/20' },
    { icon: ClipboardCheck, label: 'Quizzes Taken', value: quizAttempts.length, color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-900/20' },
  ];

  return (
    <div className="space-y-6 pb-8">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-veda-700 flex items-center justify-center">
          <BarChart2 size={20} className="text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Insights</h1>
          <p className="text-sm text-stone-500 dark:text-stone-400">Your learning analytics and progress overview</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {stats.map(({ icon: Icon, label, value, color, bg }) => (
          <div key={label} className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-4">
            <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center mb-3', bg)}>
              <Icon size={16} className={color} />
            </div>
            <div className="text-2xl font-bold text-stone-900 dark:text-stone-100 tabular-nums">{value}</div>
            <div className="text-xs text-stone-400 mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {!hasAnyActivity ? (
        /* Empty state */
        <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-10 text-center">
          <TrendingUp size={36} className="text-stone-300 dark:text-stone-700 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-stone-700 dark:text-stone-300 mb-1">No activity yet</h3>
          <p className="text-sm text-stone-400 max-w-xs mx-auto mb-5">
            Study topics, take quizzes, and bookmark resources to see your progress charts here.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/quiz" className="inline-flex items-center gap-1.5 px-4 py-2 bg-veda-700 text-white rounded-lg text-sm font-medium hover:bg-veda-800 transition-colors">
              <ClipboardCheck size={14} /> Take a Quiz
            </Link>
            <Link to="/topics" className="inline-flex items-center gap-1.5 px-4 py-2 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 rounded-lg text-sm font-medium hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">
              <BookOpen size={14} /> Browse Topics
            </Link>
          </div>
        </div>
      ) : (
        <>
          {/* Chart row */}
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Score trend */}
            <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5">
              <SectionHeader title="Quiz Score Trend" description={`Last ${Math.min(scores.length, 10)} attempts`} />
              <ScoreLineChart scores={scores.slice(-10)} />
            </div>

            {/* Subject coverage */}
            <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5">
              <SectionHeader title="Subject Coverage" description="Topics completed vs total" />
              <SubjectProgress progressMap={progressMap} />
            </div>
          </div>

          {/* Difficulty breakdown */}
          {sessions.length > 0 && (
            <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5">
              <SectionHeader title="Questions Attempted by Difficulty" description="Across all quiz sessions" />
              <div className="max-w-sm">
                <DifficultyBreakdown sessions={sessions} />
              </div>
            </div>
          )}

          {/* Activity heatmap */}
          <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5">
            <SectionHeader title="Learning Activity" description="Quiz sessions in the last 14 weeks" />
            <ActivityHeatmap dayMap={dayMap} />
          </div>
        </>
      )}

      {/* Quick links */}
      <div className="grid sm:grid-cols-3 gap-3">
        {[
          { to: '/quiz', icon: ClipboardCheck, label: 'Practice Quiz', desc: 'Test your knowledge' },
          { to: '/topics', icon: BookOpen, label: 'Browse Topics', desc: 'Continue studying' },
          { to: '/my-learning', icon: TrendingUp, label: 'My Learning', desc: 'Full activity history' },
        ].map(({ to, icon: Icon, label, desc }) => (
          <Link
            key={to}
            to={to}
            className="flex items-center gap-3 p-4 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 hover:border-veda-300 dark:hover:border-veda-700 hover:shadow-sm transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-veda-50 dark:bg-veda-900/20 flex items-center justify-center flex-shrink-0">
              <Icon size={15} className="text-veda-700 dark:text-veda-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-stone-900 dark:text-stone-100">{label}</p>
              <p className="text-xs text-stone-400">{desc}</p>
            </div>
            <ArrowRight size={14} className="text-stone-300 dark:text-stone-600 group-hover:text-veda-600 transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
}
