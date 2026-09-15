import { useState, useEffect, useRef, useCallback } from 'react';
import { useSEO } from '../hooks/useSEO';
import { Timer as TimerIcon, Play, Pause, RotateCcw, SkipForward, Coffee, Brain } from 'lucide-react';
import { studySessionsDB, todayKey, type StudySession } from '../db/studySessions';
import { topicRepo } from '../repositories';
import { Spinner } from '../components/ui';
import { cn } from '../utils/cn';

// ── Timer modes ────────────────────────────────────────────────────────────

type Mode = 'pomodoro' | 'deep-work' | 'quick' | 'custom';
type TimerPhase = 'work' | 'break';
type TimerState = 'idle' | 'running' | 'paused' | 'done';

const MODES: Record<Mode, { label: string; work: number; break: number; desc: string }> = {
  'pomodoro':  { label: 'Pomodoro',   work: 25, break: 5,  desc: '25 min focus · 5 min break' },
  'deep-work': { label: 'Deep Work',  work: 50, break: 10, desc: '50 min focus · 10 min break' },
  'quick':     { label: 'Quick',      work: 15, break: 5,  desc: '15 min focus · 5 min break' },
  'custom':    { label: 'Custom',     work: 30, break: 5,  desc: 'Set your own duration' },
};

// ── SVG countdown ring ─────────────────────────────────────────────────────

function CountdownRing({ remaining, total, phase }: { remaining: number; total: number; phase: TimerPhase }) {
  const R = 90; const C = 2 * Math.PI * R;
  const progress = total > 0 ? remaining / total : 1;
  const offset = C * (1 - progress);
  const isBreak = phase === 'break';

  const mm = String(Math.floor(remaining / 60)).padStart(2, '0');
  const ss = String(remaining % 60).padStart(2, '0');

  return (
    <div className="relative w-56 h-56 mx-auto">
      <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
        <circle cx="100" cy="100" r={R} fill="none"
          className="stroke-stone-100 dark:stroke-stone-800" strokeWidth="10" />
        <circle cx="100" cy="100" r={R} fill="none"
          stroke={isBreak ? '#10b981' : '#1B4082'}
          strokeWidth="10" strokeLinecap="round"
          strokeDasharray={C} strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.8s linear' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
        {isBreak
          ? <Coffee size={20} className="text-emerald-500 mb-1" />
          : <Brain size={20} className="text-veda-600 dark:text-veda-400 mb-1" />}
        <span className="text-4xl font-mono font-bold text-stone-900 dark:text-stone-100 tabular-nums">
          {mm}:{ss}
        </span>
        <span className="text-xs font-medium uppercase tracking-widest text-stone-400">
          {isBreak ? 'Break' : 'Focus'}
        </span>
      </div>
    </div>
  );
}

// ── Session log item ───────────────────────────────────────────────────────

function SessionLogItem({ session }: { session: StudySession }) {
  const topic = session.topicId ? topicRepo.getById(session.topicId) : null;
  const time = new Date(session.completedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return (
    <div className="flex items-center gap-3 py-2">
      <div className={cn(
        'w-2 h-2 rounded-full flex-shrink-0',
        session.phase === 'work' ? 'bg-veda-600 dark:bg-veda-400' : 'bg-emerald-500'
      )} />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-stone-700 dark:text-stone-300 truncate">
          {topic ? topic.title : session.phase === 'work' ? 'Focus session' : 'Break'}
        </p>
        <p className="text-xs text-stone-400">{MODES[session.mode as Mode]?.label ?? session.mode} · {session.durationMinutes}min</p>
      </div>
      <span className="text-xs text-stone-400 flex-shrink-0">{time}</span>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────

export function Timer() {
  useSEO('Study Timer', 'Pomodoro and focus timer for structured study sessions.');

  const [allSessions, setAllSessions] = useState<StudySession[]>([]);
  const [sessionsLoaded, setSessionsLoaded] = useState(false);

  const [mode, setMode] = useState<Mode>('pomodoro');
  const [customWork, setCustomWork] = useState(30);
  const [customBreak, setCustomBreak] = useState(5);
  const [phase, setPhase] = useState<TimerPhase>('work');
  const [timerState, setTimerState] = useState<TimerState>('idle');
  const [topicId, setTopicId] = useState('');

  const workMins = mode === 'custom' ? customWork : MODES[mode].work;
  const breakMins = mode === 'custom' ? customBreak : MODES[mode].break;
  const totalSecs = phase === 'work' ? workMins * 60 : breakMins * 60;

  const [remaining, setRemaining] = useState(workMins * 60);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const topics = topicRepo.getAll();

  useEffect(() => {
    studySessionsDB.getAll()
      .then(s => { setAllSessions(s); setSessionsLoaded(true); })
      .catch(() => setSessionsLoaded(true));
  }, []);

  // Update title bar while running
  useEffect(() => {
    if (timerState === 'running') {
      const mm = String(Math.floor(remaining / 60)).padStart(2, '0');
      const ss = String(remaining % 60).padStart(2, '0');
      document.title = `${phase === 'break' ? '☕' : '🎯'} ${mm}:${ss} | VEDA`;
    } else {
      document.title = 'Study Timer | VEDA';
    }
    return () => { document.title = 'VEDA'; };
  }, [remaining, timerState, phase]);

  // Reset remaining when mode or phase changes while idle
  useEffect(() => {
    if (timerState === 'idle') {
      setRemaining(workMins * 60);
      setPhase('work');
    }
  }, [mode, workMins]); // eslint-disable-line react-hooks/exhaustive-deps

  const completeSession = useCallback(() => {
    const session: StudySession = {
      id: `veda-session-${Date.now()}`,
      topicId,
      durationMinutes: phase === 'work' ? workMins : breakMins,
      mode,
      phase,
      completedAt: new Date().toISOString(),
    };
    studySessionsDB.save(session).catch(() => {});
    setAllSessions(prev => [session, ...prev]);

    // Flash done, then switch phase
    setTimerState('done');
    setTimeout(() => {
      const nextPhase: TimerPhase = phase === 'work' ? 'break' : 'work';
      setPhase(nextPhase);
      setRemaining((nextPhase === 'work' ? workMins : breakMins) * 60);
      setTimerState('idle');
    }, 1500);
  }, [topicId, phase, workMins, breakMins, mode]);

  const tick = useCallback(() => {
    setRemaining(r => {
      if (r <= 1) { completeSession(); return 0; }
      return r - 1;
    });
  }, [completeSession]);

  function start() {
    if (timerState === 'idle' || timerState === 'paused') {
      setTimerState('running');
      intervalRef.current = setInterval(tick, 1000);
    }
  }

  function pause() {
    if (timerState === 'running') {
      setTimerState('paused');
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  }

  function reset() {
    setTimerState('idle');
    if (intervalRef.current) clearInterval(intervalRef.current);
    setPhase('work');
    setRemaining(workMins * 60);
  }

  function skip() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    completeSession();
  }

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);

  // Today's stats
  const today = todayKey();
  const todaySessions = allSessions.filter(s => s.completedAt.startsWith(today));
  const todayWorkSessions = todaySessions.filter(s => s.phase === 'work');
  const todayFocusMinutes = todayWorkSessions.reduce((a, s) => a + s.durationMinutes, 0);
  const todayBreaks = todaySessions.filter(s => s.phase === 'break').length;

  if (!sessionsLoaded) return <div className="flex items-center justify-center py-20"><Spinner size="lg" /></div>;

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-veda-700 flex items-center justify-center">
          <TimerIcon size={20} className="text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Study Timer</h1>
          <p className="text-sm text-stone-500 dark:text-stone-400">Structured focus sessions with Pomodoro</p>
        </div>
      </div>

      {/* Mode selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {(Object.entries(MODES) as [Mode, typeof MODES[Mode]][]).map(([key, m]) => (
          <button
            key={key}
            onClick={() => { if (timerState === 'idle') setMode(key); }}
            disabled={timerState !== 'idle'}
            className={cn(
              'p-3 rounded-xl border text-left transition-colors disabled:opacity-50',
              mode === key
                ? 'border-veda-600 bg-veda-50 dark:bg-veda-900/20'
                : 'border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800'
            )}
          >
            <p className={cn('text-sm font-semibold', mode === key ? 'text-veda-700 dark:text-veda-300' : 'text-stone-700 dark:text-stone-300')}>
              {m.label}
            </p>
            <p className="text-[10px] text-stone-400 mt-0.5">{m.desc}</p>
          </button>
        ))}
      </div>

      {/* Custom inputs */}
      {mode === 'custom' && timerState === 'idle' && (
        <div className="flex gap-4">
          {[
            { label: 'Focus (min)', val: customWork, set: setCustomWork, min: 1, max: 120 },
            { label: 'Break (min)', val: customBreak, set: setCustomBreak, min: 1, max: 60 },
          ].map(({ label, val, set, min, max }) => (
            <div key={label} className="flex-1">
              <label className="block text-xs font-medium text-stone-500 dark:text-stone-400 mb-1">{label}</label>
              <input type="number" min={min} max={max} value={val}
                onChange={e => { set(Math.max(min, Math.min(max, Number(e.target.value)))); setRemaining(workMins * 60); }}
                className="w-full px-3 py-2 text-sm rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-veda-600/30"
              />
            </div>
          ))}
        </div>
      )}

      {/* Timer + controls */}
      <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-8 space-y-6">
        <CountdownRing remaining={remaining} total={totalSecs} phase={phase} />

        {/* Topic selector */}
        {timerState === 'idle' && (
          <div>
            <label className="block text-xs font-medium text-stone-500 dark:text-stone-400 mb-1.5 text-center">
              Studying (optional)
            </label>
            <select
              value={topicId}
              onChange={e => setTopicId(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 focus:outline-none focus:ring-2 focus:ring-veda-600/30"
            >
              <option value="">No topic selected</option>
              {topics.map(t => <option key={t.id} value={t.id}>{t.title}</option>)}
            </select>
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={reset}
            disabled={timerState === 'idle'}
            className="p-3 rounded-xl border border-stone-200 dark:border-stone-700 text-stone-500 hover:bg-stone-50 dark:hover:bg-stone-800 disabled:opacity-30 transition-colors"
            aria-label="Reset"
          >
            <RotateCcw size={18} />
          </button>

          <button
            onClick={timerState === 'running' ? pause : start}
            disabled={timerState === 'done'}
            className={cn(
              'w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-md transition-all disabled:opacity-40',
              phase === 'break'
                ? 'bg-emerald-500 hover:bg-emerald-600'
                : 'bg-veda-700 hover:bg-veda-800'
            )}
            aria-label={timerState === 'running' ? 'Pause' : 'Start'}
          >
            {timerState === 'running'
              ? <Pause size={24} />
              : timerState === 'done'
              ? <span className="text-xs font-bold">Done!</span>
              : <Play size={24} className="ml-1" />
            }
          </button>

          <button
            onClick={skip}
            disabled={timerState === 'idle' || timerState === 'done'}
            className="p-3 rounded-xl border border-stone-200 dark:border-stone-700 text-stone-500 hover:bg-stone-50 dark:hover:bg-stone-800 disabled:opacity-30 transition-colors"
            aria-label="Skip"
            title="Skip to next phase"
          >
            <SkipForward size={18} />
          </button>
        </div>

        {timerState === 'running' && (
          <p className="text-center text-xs text-stone-400">
            {phase === 'work'
              ? topicId ? `Focusing on: ${topicRepo.getById(topicId)?.title}` : 'Stay focused — you can do this'
              : 'Take a proper break — stretch, hydrate, breathe'}
          </p>
        )}
      </div>

      {/* Today's stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Sessions Today', value: todayWorkSessions.length },
          { label: 'Focus Time', value: `${todayFocusMinutes}m` },
          { label: 'Breaks Taken', value: todayBreaks },
        ].map(({ label, value }) => (
          <div key={label} className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-4 text-center">
            <div className="text-2xl font-bold text-stone-900 dark:text-stone-100 tabular-nums">{value}</div>
            <div className="text-xs text-stone-400 mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* Session log */}
      {todaySessions.length > 0 && (
        <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5">
          <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3">Today's Sessions</h2>
          <div className="divide-y divide-stone-100 dark:divide-stone-800">
            {todaySessions.map(s => <SessionLogItem key={s.id} session={s} />)}
          </div>
        </div>
      )}
    </div>
  );
}
