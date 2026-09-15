import { useState, useEffect, useRef, useCallback } from 'react';
import { useSEO } from '../hooks/useSEO';
import {
  ClipboardCheck, ChevronRight, ChevronLeft, Trophy,
  RotateCcw, CheckCircle, XCircle, Clock, Target, Minus,
} from 'lucide-react';
import { subjectRepo, questionRepo } from '../repositories';
import { useUserData } from '../app/providers/UserDataProvider';
import { assessmentsDB } from '../db/assessments';
import type { Question } from '../models';
import { cn } from '../utils/cn';
import { Spinner } from '../components/ui';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${String(sec).padStart(2, '0')}`;
}

type Phase = 'config' | 'taking' | 'results';
const COUNTS = [5, 10, 15, 20] as const;
const OPTION_LABELS = ['A', 'B', 'C', 'D'];

export function Quiz() {
  useSEO('Practice Quiz', 'Test your engineering knowledge with GATE-style MCQ questions.');

  const { saveQuizAttempt } = useUserData();
  const subjects = subjectRepo.getAll();

  // ── Config ─────────────────────────────────────────────────────────────
  const [phase, setPhase] = useState<Phase>('config');
  const [subjectId, setSubjectId] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [count, setCount] = useState<number>(10);

  // ── Taking ─────────────────────────────────────────────────────────────
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [elapsed, setElapsed] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Results ────────────────────────────────────────────────────────────
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const [saving, setSaving] = useState(false);

  const availablePool = questionRepo.getAll().filter(q => {
    const matchSubject = !subjectId || q.subjectIds.includes(subjectId);
    const matchDiff = !difficulty || q.difficulty === difficulty;
    return matchSubject && matchDiff && q.type === 'mcq' && q.options && q.options.length === 4;
  });
  const effectiveCount = Math.min(count, availablePool.length);

  // ── Timer ───────────────────────────────────────────────────────────────
  useEffect(() => {
    if (phase === 'taking') {
      timerRef.current = setInterval(() => setElapsed(e => e + 1), 1000);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [phase]);

  // ── Actions ─────────────────────────────────────────────────────────────

  function startQuiz() {
    const pool = shuffle(availablePool).slice(0, effectiveCount);
    setQuestions(pool);
    setAnswers(new Array(pool.length).fill(null));
    setCurrent(0);
    setElapsed(0);
    setPhase('taking');
  }

  function selectAnswer(idx: number) {
    setAnswers(prev => {
      const next = [...prev];
      next[current] = idx;
      return next;
    });
  }

  const finishQuiz = useCallback(async (qs: Question[], ans: (number | null)[], time: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    const score = qs.filter((q, i) => ans[i] !== null && ans[i] === q.correctIndex).length;
    setSaving(true);
    const session = {
      id: `veda-quiz-${Date.now()}`,
      createdAt: new Date(Date.now() - time * 1000).toISOString(),
      completedAt: new Date().toISOString(),
      subjectId,
      difficulty,
      questionIds: qs.map(q => q.id),
      answers: ans,
      score,
      total: qs.length,
      timeTakenSeconds: time,
    };
    await assessmentsDB.saveSession(session).catch(() => {});
    await saveQuizAttempt({ topicId: subjectId, score, total: qs.length, date: new Date().toISOString() });
    setSaving(false);
    setPhase('results');
  }, [subjectId, difficulty, saveQuizAttempt]);

  function resetToConfig() {
    setPhase('config');
    setQuestions([]);
    setAnswers([]);
    setElapsed(0);
    setExpanded(new Set());
  }

  // ── Config screen ────────────────────────────────────────────────────────
  if (phase === 'config') {
    return (
      <div className="max-w-xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-veda-700 flex items-center justify-center">
            <ClipboardCheck size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Practice Quiz</h1>
            <p className="text-sm text-stone-500 dark:text-stone-400">GATE-style MCQ questions with detailed explanations</p>
          </div>
        </div>

        <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-6 space-y-5">
          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5">Subject</label>
            <select
              value={subjectId}
              onChange={e => setSubjectId(e.target.value)}
              className="w-full rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-veda-500"
            >
              <option value="">All Subjects</option>
              {subjects.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5">Difficulty</label>
            <select
              value={difficulty}
              onChange={e => setDifficulty(e.target.value)}
              className="w-full rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-veda-500"
            >
              <option value="">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="expert">Expert</option>
            </select>
          </div>

          {/* Question count */}
          <div>
            <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-1.5">Number of Questions</label>
            <div className="flex gap-2 flex-wrap">
              {COUNTS.map(n => (
                <button
                  key={n}
                  onClick={() => setCount(n)}
                  className={cn(
                    'flex-1 min-w-12 py-2 rounded-lg border text-sm font-medium transition-colors',
                    count === n
                      ? 'bg-veda-700 border-veda-700 text-white'
                      : 'border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:border-veda-400 hover:text-veda-700 dark:hover:text-veda-400'
                  )}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className={cn(
            'flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm',
            availablePool.length === 0
              ? 'bg-red-50 dark:bg-red-900/10 text-red-700 dark:text-red-400'
              : 'bg-veda-50 dark:bg-veda-900/10 text-veda-700 dark:text-veda-400'
          )}>
            <Target size={14} />
            {availablePool.length === 0
              ? 'No questions match these filters — try changing subject or difficulty'
              : `${availablePool.length} questions available · quiz will use ${effectiveCount}`}
          </div>

          <button
            onClick={startQuiz}
            disabled={availablePool.length === 0}
            className="w-full flex items-center justify-center gap-2 py-3 bg-veda-700 hover:bg-veda-800 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
          >
            Start Quiz <ChevronRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  // ── Taking screen ────────────────────────────────────────────────────────
  if (phase === 'taking') {
    const q = questions[current];
    const selected = answers[current];
    const answeredCount = answers.filter(a => a !== null).length;
    const isLast = current === questions.length - 1;

    return (
      <div className="max-w-2xl mx-auto space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-stone-600 dark:text-stone-400">
            Question {current + 1} <span className="text-stone-400">/ {questions.length}</span>
          </span>
          <span className="flex items-center gap-1.5 text-sm text-stone-500 dark:text-stone-400 tabular-nums">
            <Clock size={13} /> {formatTime(elapsed)}
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-veda-600 rounded-full transition-all"
            style={{ width: `${((current + 1) / questions.length) * 100}%` }}
          />
        </div>

        {/* Dot navigator */}
        <div className="flex gap-1.5 flex-wrap">
          {questions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              title={`Question ${i + 1}`}
              className={cn(
                'w-6 h-6 rounded-full text-[10px] font-semibold transition-colors',
                i === current
                  ? 'bg-veda-700 text-white'
                  : answers[i] !== null
                  ? 'bg-veda-100 dark:bg-veda-900/30 text-veda-700 dark:text-veda-300'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-400 dark:text-stone-500 hover:bg-stone-200 dark:hover:bg-stone-700'
              )}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Question card */}
        <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-6 space-y-5">
          <p className="text-base font-medium text-stone-900 dark:text-stone-100 leading-relaxed">{q.text}</p>

          {/* Options */}
          <div className="space-y-2.5">
            {q.options!.map((opt, i) => (
              <button
                key={i}
                onClick={() => selectAnswer(i)}
                className={cn(
                  'w-full flex items-center gap-3 px-4 py-3 rounded-lg border text-sm text-left transition-colors',
                  selected === i
                    ? 'bg-veda-50 dark:bg-veda-900/20 border-veda-500 text-veda-800 dark:text-veda-200 font-medium'
                    : 'border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 hover:border-stone-300 dark:hover:border-stone-600'
                )}
              >
                <span className={cn(
                  'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0',
                  selected === i
                    ? 'bg-veda-600 text-white'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400'
                )}>
                  {OPTION_LABELS[i]}
                </span>
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => setCurrent(c => c - 1)}
            disabled={current === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg border border-stone-200 dark:border-stone-700 text-sm text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={15} /> Previous
          </button>

          <span className="text-xs text-stone-400">{answeredCount}/{questions.length} answered</span>

          {isLast ? (
            <button
              onClick={() => finishQuiz(questions, answers, elapsed)}
              disabled={saving}
              className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-veda-700 hover:bg-veda-800 text-white text-sm font-medium transition-colors disabled:opacity-60"
            >
              {saving ? <Spinner size="sm" /> : <><Trophy size={15} /> Finish Quiz</>}
            </button>
          ) : (
            <button
              onClick={() => setCurrent(c => c + 1)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-veda-700 hover:bg-veda-800 text-white text-sm font-medium transition-colors"
            >
              Next <ChevronRight size={15} />
            </button>
          )}
        </div>
      </div>
    );
  }

  // ── Results screen ────────────────────────────────────────────────────────
  const score = questions.filter((q, i) => answers[i] !== null && answers[i] === q.correctIndex).length;
  const wrong = questions.filter((q, i) => answers[i] !== null && answers[i] !== q.correctIndex).length;
  const skipped = answers.filter(a => a === null).length;
  const pct = Math.round((score / questions.length) * 100);

  const grade =
    pct >= 80 ? { label: 'Excellent!', color: 'text-emerald-600 dark:text-emerald-400' } :
    pct >= 60 ? { label: 'Good Work!', color: 'text-veda-600 dark:text-veda-400' } :
    pct >= 40 ? { label: 'Average', color: 'text-amber-600 dark:text-amber-400' } :
    { label: 'Keep Practising', color: 'text-red-600 dark:text-red-400' };

  const scoreColor =
    pct >= 80 ? 'stroke-emerald-500' :
    pct >= 60 ? 'stroke-veda-600' :
    pct >= 40 ? 'stroke-amber-500' :
    'stroke-red-500';

  const circumference = 2 * Math.PI * 44;
  const dashOffset = circumference - (pct / 100) * circumference;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Score card */}
      <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-8 text-center">
        <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-4">Quiz Complete</p>

        {/* Circular score */}
        <div className="relative inline-flex items-center justify-center mb-4">
          <svg width="112" height="112" viewBox="0 0 112 112" className="-rotate-90">
            <circle cx="56" cy="56" r="44" fill="none" className="stroke-stone-100 dark:stroke-stone-800" strokeWidth="8" />
            <circle
              cx="56" cy="56" r="44" fill="none"
              className={scoreColor}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              style={{ transition: 'stroke-dashoffset 0.8s ease' }}
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-2xl font-bold text-stone-900 dark:text-stone-100 tabular-nums">{score}/{questions.length}</span>
            <span className="text-xs text-stone-400">{pct}%</span>
          </div>
        </div>

        <p className={cn('text-lg font-bold mb-5', grade.color)}>{grade.label}</p>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { icon: CheckCircle, label: 'Correct', value: score, color: 'text-emerald-500' },
            { icon: XCircle, label: 'Wrong', value: wrong, color: 'text-red-500' },
            { icon: Minus, label: 'Skipped', value: skipped, color: 'text-stone-400' },
            { icon: Clock, label: 'Time', value: formatTime(elapsed), color: 'text-veda-600 dark:text-veda-400' },
          ].map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <Icon size={18} className={color} />
              <span className="text-lg font-bold text-stone-900 dark:text-stone-100 tabular-nums">{value}</span>
              <span className="text-xs text-stone-400">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Review */}
      <div>
        <h2 className="text-base font-semibold text-stone-900 dark:text-stone-100 mb-3">Answer Review</h2>
        <div className="space-y-3">
          {questions.map((q, i) => {
            const userAns = answers[i];
            const correct = q.correctIndex!;
            const isCorrect = userAns === correct;
            const isSkipped = userAns === null;
            const isOpen = expanded.has(i);

            return (
              <div
                key={q.id}
                className={cn(
                  'rounded-xl border overflow-hidden',
                  isCorrect ? 'border-emerald-200 dark:border-emerald-800' :
                  isSkipped ? 'border-stone-200 dark:border-stone-700' :
                  'border-red-200 dark:border-red-800'
                )}
              >
                {/* Question header */}
                <button
                  onClick={() => setExpanded(prev => {
                    const n = new Set(prev);
                    n.has(i) ? n.delete(i) : n.add(i);
                    return n;
                  })}
                  className="w-full flex items-start gap-3 p-4 text-left bg-white dark:bg-stone-900 hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors"
                >
                  <span className={cn(
                    'mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center',
                    isCorrect ? 'bg-emerald-100 dark:bg-emerald-900/30' :
                    isSkipped ? 'bg-stone-100 dark:bg-stone-800' :
                    'bg-red-100 dark:bg-red-900/30'
                  )}>
                    {isCorrect
                      ? <CheckCircle size={13} className="text-emerald-600 dark:text-emerald-400" />
                      : isSkipped
                      ? <Minus size={13} className="text-stone-400" />
                      : <XCircle size={13} className="text-red-600 dark:text-red-400" />
                    }
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-0.5">Q{i + 1}</p>
                    <p className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed">{q.text}</p>
                    {!isSkipped && (
                      <p className={cn('text-xs mt-1.5', isCorrect ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400')}>
                        Your answer: <strong>{OPTION_LABELS[userAns!]}. {q.options![userAns!]}</strong>
                        {!isCorrect && <span className="text-stone-500 dark:text-stone-400"> · Correct: <strong className="text-emerald-600 dark:text-emerald-400">{OPTION_LABELS[correct]}. {q.options![correct]}</strong></span>}
                      </p>
                    )}
                    {isSkipped && (
                      <p className="text-xs text-stone-400 mt-1">
                        Skipped · Correct: <strong className="text-emerald-600 dark:text-emerald-400">{OPTION_LABELS[correct]}. {q.options![correct]}</strong>
                      </p>
                    )}
                  </div>
                  <ChevronRight size={14} className={cn('flex-shrink-0 mt-1 text-stone-400 transition-transform', isOpen && 'rotate-90')} />
                </button>

                {/* Explanation */}
                {isOpen && (
                  <div className="px-4 pb-4 pt-0 bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800">
                    <p className="text-xs font-medium text-stone-400 uppercase tracking-wide mb-1.5">Explanation</p>
                    <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pb-6">
        <button
          onClick={() => {
            setQuestions(shuffle(availablePool.length > 0 ? availablePool : questions).slice(0, effectiveCount));
            setAnswers(new Array(effectiveCount).fill(null));
            setCurrent(0);
            setElapsed(0);
            setExpanded(new Set());
            setPhase('taking');
          }}
          className="flex-1 flex items-center justify-center gap-2 py-3 border border-stone-200 dark:border-stone-700 rounded-lg text-sm font-medium text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
        >
          <RotateCcw size={14} /> Try Again
        </button>
        <button
          onClick={resetToConfig}
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-veda-700 hover:bg-veda-800 text-white rounded-lg text-sm font-medium transition-colors"
        >
          <ClipboardCheck size={14} /> New Quiz
        </button>
      </div>
    </div>
  );
}
