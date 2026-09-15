import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import {
  Target, ChevronDown, ChevronRight, CheckCircle2,
  Circle, MinusCircle, BookOpen, ClipboardCheck,
  TrendingUp, Award,
} from 'lucide-react';
import { useUserData } from '../app/providers/UserDataProvider';
import { assessmentsDB, type QuizSession } from '../db/assessments';
import { examRepo, topicRepo, subjectRepo, questionRepo } from '../repositories';
import { Spinner } from '../components/ui';
import { cn } from '../utils/cn';

// ── Types ─────────────────────────────────────────────────────────────────

type ReadinessStatus = 'ready' | 'on-track' | 'needs-work' | 'not-started';

type ExamReadiness = {
  examId: string;
  title: string;
  shortTitle: string;
  slug: string;
  type: string;
  conductingBody: string;
  topicTotal: number;
  topicCompleted: number;
  topicInProgress: number;
  quizAttempts: number;
  quizAvgScore: number;    // 0–100
  readinessScore: number;  // 0–100 (60% coverage + 40% quiz)
  status: ReadinessStatus;
};

// ── Helpers ────────────────────────────────────────────────────────────────

function statusMeta(status: ReadinessStatus) {
  switch (status) {
    case 'ready':       return { label: 'Ready',        color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/20', border: 'border-emerald-200 dark:border-emerald-800' };
    case 'on-track':    return { label: 'On Track',     color: 'text-blue-600 dark:text-blue-400',    bg: 'bg-blue-50 dark:bg-blue-900/20',    border: 'border-blue-200 dark:border-blue-800' };
    case 'needs-work':  return { label: 'Needs Work',   color: 'text-amber-600 dark:text-amber-400',  bg: 'bg-amber-50 dark:bg-amber-900/20',  border: 'border-amber-200 dark:border-amber-800' };
    case 'not-started': return { label: 'Not Started',  color: 'text-stone-500 dark:text-stone-400',  bg: 'bg-stone-50 dark:bg-stone-800',     border: 'border-stone-200 dark:border-stone-700' };
  }
}

function calcStatus(score: number): ReadinessStatus {
  if (score >= 80) return 'ready';
  if (score >= 50) return 'on-track';
  if (score >= 15) return 'needs-work';
  return 'not-started';
}

// ── Radial score ring ──────────────────────────────────────────────────────

function ScoreRing({ score, status }: { score: number; status: ReadinessStatus }) {
  const R = 28; const C = 2 * Math.PI * R;
  const offset = C * (1 - score / 100);
  const colors: Record<ReadinessStatus, string> = {
    ready: '#10b981', 'on-track': '#3b82f6', 'needs-work': '#f59e0b', 'not-started': '#a8a29e',
  };
  return (
    <div className="relative w-16 h-16 flex-shrink-0">
      <svg viewBox="0 0 68 68" className="w-full h-full -rotate-90">
        <circle cx="34" cy="34" r={R} fill="none" className="stroke-stone-100 dark:stroke-stone-800" strokeWidth="6" />
        <circle cx="34" cy="34" r={R} fill="none" stroke={colors[status]} strokeWidth="6"
          strokeLinecap="round" strokeDasharray={C} strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.6s ease' }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-stone-900 dark:text-stone-100 tabular-nums">{score}%</span>
      </div>
    </div>
  );
}

// ── Progress bar ───────────────────────────────────────────────────────────

function MiniBar({ value, max, colorClass }: { value: number; max: number; colorClass: string }) {
  const pct = max > 0 ? (value / max) * 100 : 0;
  return (
    <div className="flex-1 h-1.5 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
      <div className={cn('h-full rounded-full transition-all', colorClass)} style={{ width: `${pct}%` }} />
    </div>
  );
}

// ── Exam card ──────────────────────────────────────────────────────────────

function ExamCard({ er, progressMap }: { er: ExamReadiness; progressMap: Record<string, string> }) {
  const [open, setOpen] = useState(false);
  const meta = statusMeta(er.status);

  const topics = useMemo(() => topicRepo.getByExamId(er.examId), [er.examId]);
  const subjects = useMemo(() =>
    examRepo.getById(er.examId)?.subjectIds.map(id => subjectRepo.getById(id)).filter(Boolean) ?? []
  , [er.examId]);
  const qCount = useMemo(() => questionRepo.getByExamId(er.examId).length, [er.examId]);

  const coveragePct = er.topicTotal > 0 ? Math.round(((er.topicCompleted + er.topicInProgress * 0.5) / er.topicTotal) * 100) : 0;

  return (
    <div className={cn('bg-white dark:bg-stone-900 rounded-xl border overflow-hidden transition-shadow hover:shadow-md', meta.border)}>
      {/* Card header */}
      <div
        className="flex items-center gap-4 p-5 cursor-pointer"
        onClick={() => setOpen(o => !o)}
      >
        <ScoreRing score={er.readinessScore} status={er.status} />

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">{er.shortTitle}</h3>
            <span className={cn('text-[10px] font-semibold px-2 py-0.5 rounded-full', meta.bg, meta.color)}>
              {meta.label}
            </span>
          </div>
          <p className="text-xs text-stone-400 mt-0.5 truncate">{er.conductingBody}</p>

          {/* Mini stats */}
          <div className="mt-3 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-stone-400 w-16 flex-shrink-0">Topics</span>
              <MiniBar value={er.topicCompleted} max={er.topicTotal} colorClass="bg-emerald-500" />
              <span className="text-[10px] text-stone-500 dark:text-stone-400 tabular-nums flex-shrink-0">
                {er.topicCompleted}/{er.topicTotal}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-stone-400 w-16 flex-shrink-0">Quiz Avg</span>
              <MiniBar value={er.quizAvgScore} max={100} colorClass="bg-blue-500" />
              <span className="text-[10px] text-stone-500 dark:text-stone-400 tabular-nums flex-shrink-0">
                {er.quizAttempts > 0 ? `${er.quizAvgScore}%` : 'No data'}
              </span>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0">
          {open
            ? <ChevronDown size={16} className="text-stone-400" />
            : <ChevronRight size={16} className="text-stone-400" />}
        </div>
      </div>

      {/* Expanded detail */}
      {open && (
        <div className="border-t border-stone-100 dark:border-stone-800 p-5 space-y-5">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { label: 'Coverage', value: `${coveragePct}%`, sub: `${er.topicCompleted} done, ${er.topicInProgress} in progress` },
              { label: 'Quiz Score', value: er.quizAttempts > 0 ? `${er.quizAvgScore}%` : '—', sub: `${er.quizAttempts} attempt${er.quizAttempts !== 1 ? 's' : ''}` },
              { label: 'Questions', value: qCount, sub: 'in question bank' },
            ].map(s => (
              <div key={s.label} className="bg-stone-50 dark:bg-stone-800/60 rounded-lg p-3">
                <div className="text-lg font-bold text-stone-900 dark:text-stone-100 tabular-nums">{s.value}</div>
                <div className="text-[10px] font-medium text-stone-500 dark:text-stone-400">{s.label}</div>
                <div className="text-[10px] text-stone-400 mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Subjects */}
          {subjects.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-2">Subjects</p>
              <div className="flex flex-wrap gap-1.5">
                {subjects.map(s => s && (
                  <span key={s.id} className="text-xs bg-veda-50 dark:bg-veda-900/20 text-veda-700 dark:text-veda-300 px-2.5 py-1 rounded-full">
                    {s.shortTitle || s.title}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Topic checklist */}
          {topics.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-2">
                Topics ({topics.length})
              </p>
              <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
                {topics.map(t => {
                  const status = progressMap[t.id];
                  return (
                    <Link
                      key={t.id}
                      to={`/topics/${t.slug}`}
                      className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-800/60 transition-colors group"
                    >
                      {status === 'completed'
                        ? <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                        : status === 'in-progress'
                        ? <Circle size={14} className="text-amber-500 flex-shrink-0" />
                        : <MinusCircle size={14} className="text-stone-300 dark:text-stone-600 flex-shrink-0" />
                      }
                      <span className={cn(
                        'text-sm flex-1 truncate group-hover:text-veda-700 dark:group-hover:text-veda-300 transition-colors',
                        status === 'completed'
                          ? 'text-stone-500 dark:text-stone-500 line-through'
                          : 'text-stone-700 dark:text-stone-300'
                      )}>
                        {t.title}
                      </span>
                      <span className="text-[10px] text-stone-400 flex-shrink-0">{t.difficulty}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <Link
              to={`/exams/${er.slug}`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 text-sm font-medium hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
            >
              <BookOpen size={13} /> Exam Details
            </Link>
            <Link
              to={`/quiz?subject=${er.examId}`}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-veda-700 text-white text-sm font-medium hover:bg-veda-800 transition-colors"
            >
              <ClipboardCheck size={13} /> Practice Quiz
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────

export function ExamReadiness() {
  useSEO('Exam Readiness', 'Track your preparation for GATE, JEE, ESE and other competitive exams.');
  const { progressMap, quizAttempts, ready } = useUserData();
  const [sessions, setSessions] = useState<QuizSession[]>([]);
  const [sessionsLoaded, setSessionsLoaded] = useState(false);

  useEffect(() => {
    assessmentsDB.getAllSessions()
      .then(s => { setSessions(s); setSessionsLoaded(true); })
      .catch(() => setSessionsLoaded(true));
  }, []);

  const readinessList = useMemo<ExamReadiness[]>(() => {
    if (!ready || !sessionsLoaded) return [];
    return examRepo.getAll().map(exam => {
      const topics = topicRepo.getByExamId(exam.id);
      const topicTotal = topics.length;
      const topicCompleted = topics.filter(t => progressMap[t.id] === 'completed').length;
      const topicInProgress = topics.filter(t => progressMap[t.id] === 'in-progress').length;

      // Quiz performance: sessions where subjectId is in this exam's subjects
      const relevantSessions = sessions.filter(s => exam.subjectIds.includes(s.subjectId));
      const quizAttemptCount = relevantSessions.length;
      const quizAvgScore = quizAttemptCount > 0
        ? Math.round(relevantSessions.reduce((sum, s) => sum + (s.score / s.total) * 100, 0) / quizAttemptCount)
        : 0;

      // Also consider simple quiz attempts by subject
      const subjectAttempts = quizAttempts.filter(a => {
        const topic = topicRepo.getById(a.topicId);
        return topic ? topic.subjectIds.some(sid => exam.subjectIds.includes(sid)) : false;
      });
      const simpleAvg = subjectAttempts.length > 0
        ? Math.round(subjectAttempts.reduce((sum, a) => sum + (a.score / a.total) * 100, 0) / subjectAttempts.length)
        : 0;

      const finalQuizScore = quizAttemptCount > 0 ? quizAvgScore : (subjectAttempts.length > 0 ? simpleAvg : 0);
      const finalAttempts = quizAttemptCount || subjectAttempts.length;

      // Coverage: count completed + partial credit for in-progress
      const coveragePct = topicTotal > 0
        ? ((topicCompleted + topicInProgress * 0.5) / topicTotal) * 100
        : 0;

      // Readiness = 60% topic coverage + 40% quiz score
      const readinessScore = Math.round(coveragePct * 0.6 + finalQuizScore * 0.4);

      return {
        examId: exam.id,
        title: exam.title,
        shortTitle: exam.shortTitle,
        slug: exam.slug,
        type: exam.type,
        conductingBody: exam.conductingBody,
        topicTotal,
        topicCompleted,
        topicInProgress,
        quizAttempts: finalAttempts,
        quizAvgScore: finalQuizScore,
        readinessScore,
        status: calcStatus(readinessScore),
      };
    }).sort((a, b) => b.readinessScore - a.readinessScore);
  }, [ready, sessionsLoaded, progressMap, quizAttempts, sessions]);

  if (!ready || !sessionsLoaded) {
    return <div className="flex items-center justify-center py-20"><Spinner size="lg" /></div>;
  }

  const readyCount = readinessList.filter(e => e.status === 'ready').length;
  const onTrackCount = readinessList.filter(e => e.status === 'on-track').length;
  const avgReadiness = readinessList.length > 0
    ? Math.round(readinessList.reduce((s, e) => s + e.readinessScore, 0) / readinessList.length)
    : 0;
  const topExam = readinessList[0];

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-rose-600 flex items-center justify-center">
          <Target size={20} className="text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Exam Readiness</h1>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            Readiness = 60% topic coverage + 40% quiz performance
          </p>
        </div>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { icon: Target, label: 'Exams Tracked', value: readinessList.length, color: 'text-rose-600 dark:text-rose-400', bg: 'bg-rose-50 dark:bg-rose-900/20' },
          { icon: TrendingUp, label: 'Avg Readiness', value: `${avgReadiness}%`, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/20' },
          { icon: Award, label: 'Ready', value: readyCount, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
          { icon: CheckCircle2, label: 'On Track', value: onTrackCount, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-50 dark:bg-purple-900/20' },
        ].map(({ icon: Icon, label, value, color, bg }) => (
          <div key={label} className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-4">
            <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center mb-3', bg)}>
              <Icon size={16} className={color} />
            </div>
            <div className="text-2xl font-bold text-stone-900 dark:text-stone-100 tabular-nums">{value}</div>
            <div className="text-xs text-stone-400 mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* Top exam banner */}
      {topExam && topExam.readinessScore > 0 && (
        <div className="bg-gradient-to-r from-veda-800 to-veda-600 rounded-xl p-5 text-white">
          <p className="text-xs font-semibold uppercase tracking-widest opacity-70 mb-1">Highest Readiness</p>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xl font-bold">{topExam.shortTitle}</p>
              <p className="text-sm opacity-80 mt-0.5">{topExam.topicCompleted}/{topExam.topicTotal} topics complete · {topExam.quizAttempts > 0 ? `${topExam.quizAvgScore}% quiz avg` : 'no quiz data'}</p>
            </div>
            <div className="text-4xl font-black tabular-nums flex-shrink-0">{topExam.readinessScore}%</div>
          </div>
        </div>
      )}

      {/* Exam cards */}
      <div className="space-y-3">
        {readinessList.map(er => (
          <ExamCard key={er.examId} er={er} progressMap={progressMap} />
        ))}
      </div>

      {/* How it works */}
      <div className="bg-stone-50 dark:bg-stone-900/50 rounded-xl border border-stone-200 dark:border-stone-800 p-5">
        <p className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-3">How Readiness is Calculated</p>
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-stone-600 dark:text-stone-400">
          <div className="flex items-start gap-2">
            <BookOpen size={14} className="mt-0.5 text-emerald-500 flex-shrink-0" />
            <span><strong className="text-stone-700 dark:text-stone-300">60% Topic Coverage</strong> — completed topics count fully; in-progress count as 50%</span>
          </div>
          <div className="flex items-start gap-2">
            <ClipboardCheck size={14} className="mt-0.5 text-blue-500 flex-shrink-0" />
            <span><strong className="text-stone-700 dark:text-stone-300">40% Quiz Performance</strong> — average score across all quiz sessions for this exam's subjects</span>
          </div>
        </div>
      </div>
    </div>
  );
}
