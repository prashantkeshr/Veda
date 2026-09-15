import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import {
  Zap, Check, RotateCcw, ChevronRight, BookOpen, FlaskConical,
  Shuffle, List,
} from 'lucide-react';
import { topicRepo, subjectRepo, examRepo } from '../repositories';
import { cn } from '../utils/cn';

// ── Card model ─────────────────────────────────────────────────────────────

type CardKind = 'concept' | 'formula';

type RevCard = {
  text: string;
  kind: CardKind;
  topicTitle: string;
  topicSlug: string;
};

function buildDeck(sourceType: 'subject' | 'exam', sourceId: string, shuffle: boolean): RevCard[] {
  const topics = sourceType === 'subject'
    ? topicRepo.getBySubjectId(sourceId)
    : topicRepo.getByExamId(sourceId);

  const cards: RevCard[] = [];
  for (const t of topics) {
    for (const c of t.keyConcepts) {
      cards.push({ text: c, kind: 'concept', topicTitle: t.title, topicSlug: t.slug });
    }
    for (const f of t.formulaHighlights ?? []) {
      cards.push({ text: f, kind: 'formula', topicTitle: t.title, topicSlug: t.slug });
    }
  }

  if (shuffle) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  }
  return cards;
}

// ── Source picker ──────────────────────────────────────────────────────────

type SourceTab = 'subject' | 'exam';

interface PickerProps {
  onStart: (type: SourceTab, id: string, shuffle: boolean) => void;
}

function SourcePicker({ onStart }: PickerProps) {
  const [tab,       setTab]       = useState<SourceTab>('subject');
  const [sourceId,  setSourceId]  = useState('');
  const [shuffle,   setShuffle]   = useState(false);

  const subjects = useMemo(() => subjectRepo.getAll(), []);
  const exams    = useMemo(() => examRepo.getAll(), []);

  const list = tab === 'subject' ? subjects : exams;

  const conceptCount = useMemo(() => {
    if (!sourceId) return 0;
    const topics = tab === 'subject'
      ? topicRepo.getBySubjectId(sourceId)
      : topicRepo.getByExamId(sourceId);
    return topics.reduce((n, t) => n + t.keyConcepts.length + (t.formulaHighlights?.length ?? 0), 0);
  }, [tab, sourceId]);

  return (
    <div className="max-w-md mx-auto space-y-6">

      {/* Tabs */}
      <div className="flex gap-1 border-b border-stone-200 dark:border-stone-800">
        {(['subject', 'exam'] as SourceTab[]).map(t => (
          <button
            key={t}
            onClick={() => { setTab(t); setSourceId(''); }}
            className={cn(
              'px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors capitalize',
              tab === t
                ? 'border-veda-600 text-veda-700 dark:text-veda-400'
                : 'border-transparent text-stone-500 hover:text-stone-700 dark:hover:text-stone-300'
            )}
          >
            By {t === 'subject' ? 'Subject' : 'Exam'}
          </button>
        ))}
      </div>

      {/* Source select */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-stone-700 dark:text-stone-300">
          {tab === 'subject' ? 'Choose a subject' : 'Choose an exam'}
        </label>
        <select
          value={sourceId}
          onChange={e => setSourceId(e.target.value)}
          className="w-full px-3 py-2.5 text-sm rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 focus:outline-none focus:ring-2 focus:ring-veda-600/30"
        >
          <option value="">Select…</option>
          {list.map(item => (
            <option key={item.id} value={item.id}>{item.title}</option>
          ))}
        </select>

        {sourceId && (
          <p className="text-xs text-stone-400">
            {conceptCount} cards (concepts + formulas) ready for review
          </p>
        )}
      </div>

      {/* Shuffle toggle */}
      <label className="flex items-center gap-3 cursor-pointer select-none">
        <div
          onClick={() => setShuffle(s => !s)}
          className={cn(
            'w-10 h-5 rounded-full transition-colors relative flex-shrink-0',
            shuffle ? 'bg-veda-600' : 'bg-stone-300 dark:bg-stone-600'
          )}
        >
          <div className={cn(
            'absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform',
            shuffle ? 'translate-x-5' : 'translate-x-0.5'
          )} />
        </div>
        <div>
          <p className="text-sm font-medium text-stone-700 dark:text-stone-300 flex items-center gap-1.5">
            <Shuffle size={13} /> Shuffle cards
          </p>
          <p className="text-xs text-stone-400">Random order instead of topic order</p>
        </div>
      </label>

      {/* Start button */}
      <button
        onClick={() => sourceId && onStart(tab, sourceId, shuffle)}
        disabled={!sourceId || conceptCount === 0}
        className="w-full py-3 rounded-xl bg-veda-700 hover:bg-veda-800 text-white font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
      >
        <Zap size={16} />
        Start Revision{conceptCount > 0 ? ` (${conceptCount} cards)` : ''}
      </button>
    </div>
  );
}

// ── Review screen ──────────────────────────────────────────────────────────

interface ReviewProps {
  deck: RevCard[];
  onDone: (known: number[], review: number[]) => void;
}

function ReviewScreen({ deck, onDone }: ReviewProps) {
  const [idx,    setIdx]    = useState(0);
  const [known,  setKnown]  = useState<number[]>([]);
  const [review, setReview] = useState<number[]>([]);
  const [dir,    setDir]    = useState<'left' | 'right' | null>(null);

  const card = deck[idx];
  const total = deck.length;
  const progress = (idx / total) * 100;

  function advance(markAs: 'known' | 'review') {
    const next = markAs === 'known'
      ? [...known, idx]
      : [...review, idx];
    if (markAs === 'known') setKnown(next); else setReview(next);

    setDir(markAs === 'known' ? 'right' : 'left');
    setTimeout(() => {
      setDir(null);
      if (idx + 1 >= total) {
        onDone(markAs === 'known' ? next : known, markAs === 'review' ? next : review);
      } else {
        setIdx(i => i + 1);
      }
    }, 200);
  }

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'k') advance('known');
    if (e.key === 'ArrowLeft'  || e.key === 'r') advance('review');
  }, [idx, known, review]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  return (
    <div className="max-w-lg mx-auto space-y-5">
      {/* Progress bar */}
      <div>
        <div className="flex items-center justify-between text-xs text-stone-400 mb-1.5">
          <span>{idx + 1} / {total}</span>
          <span>{known.length} known · {review.length} to review</span>
        </div>
        <div className="h-1.5 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-veda-600 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Card */}
      <div className={cn(
        'bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-8 min-h-[240px] flex flex-col justify-between transition-all duration-200',
        dir === 'right' && 'translate-x-4 opacity-0',
        dir === 'left'  && '-translate-x-4 opacity-0',
        !dir && 'translate-x-0 opacity-100',
      )}>
        <div className="space-y-4">
          {/* Kind badge */}
          <span className={cn(
            'inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded',
            card.kind === 'formula'
              ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
              : 'bg-veda-50 text-veda-700 dark:bg-veda-900/30 dark:text-veda-400'
          )}>
            {card.kind === 'formula' ? <FlaskConical size={10} /> : <List size={10} />}
            {card.kind}
          </span>

          {/* Concept text */}
          <p className={cn(
            'font-semibold text-stone-900 dark:text-stone-100 leading-snug',
            card.text.length > 60 ? 'text-base' : 'text-xl'
          )}>
            {card.text}
          </p>
        </div>

        {/* Topic source */}
        <Link
          to={`/topics/${card.topicSlug}`}
          className="text-xs text-stone-400 hover:text-veda-600 dark:hover:text-veda-400 flex items-center gap-1 mt-4 self-start transition-colors"
        >
          <BookOpen size={11} />
          {card.topicTitle}
        </Link>
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => advance('review')}
          className="py-3 rounded-xl border-2 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 font-semibold text-sm hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors flex items-center justify-center gap-2"
        >
          <RotateCcw size={15} /> Review later
        </button>
        <button
          onClick={() => advance('known')}
          className="py-3 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 font-semibold text-sm hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors flex items-center justify-center gap-2"
        >
          <Check size={15} /> Know it
        </button>
      </div>

      <p className="text-center text-[10px] text-stone-300 dark:text-stone-600">
        ← / R  ·  → / K  keyboard shortcuts
      </p>
    </div>
  );
}

// ── Done screen ────────────────────────────────────────────────────────────

interface DoneProps {
  deck: RevCard[];
  known: number[];
  review: number[];
  onRetryReview: () => void;
  onRestart: () => void;
  onBack: () => void;
}

function DoneScreen({ deck, known, review, onRetryReview, onRestart, onBack }: DoneProps) {
  const pct = deck.length > 0 ? Math.round((known.length / deck.length) * 100) : 0;

  const R = 54; const C = 2 * Math.PI * R;
  const offset = C * (1 - pct / 100);

  return (
    <div className="max-w-sm mx-auto space-y-6 text-center">
      {/* Ring */}
      <div className="relative w-44 h-44 mx-auto">
        <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
          <circle cx="60" cy="60" r={R} fill="none" className="stroke-stone-100 dark:stroke-stone-800" strokeWidth="8" />
          <circle cx="60" cy="60" r={R} fill="none" stroke="#1B4082"
            strokeWidth="8" strokeLinecap="round"
            strokeDasharray={C} strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 1s ease' }} />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold tabular-nums text-stone-900 dark:text-stone-100">{pct}%</span>
          <span className="text-xs text-stone-400">known</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
          <p className="text-xl font-bold tabular-nums text-stone-900 dark:text-stone-100">{deck.length}</p>
          <p className="text-xs text-stone-400 mt-0.5">total</p>
        </div>
        <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
          <p className="text-xl font-bold tabular-nums text-emerald-700 dark:text-emerald-400">{known.length}</p>
          <p className="text-xs text-emerald-600 dark:text-emerald-500 mt-0.5">known</p>
        </div>
        <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
          <p className="text-xl font-bold tabular-nums text-amber-700 dark:text-amber-400">{review.length}</p>
          <p className="text-xs text-amber-600 dark:text-amber-500 mt-0.5">to review</p>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-2">
        {review.length > 0 && (
          <button
            onClick={onRetryReview}
            className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw size={15} />
            Retry {review.length} card{review.length !== 1 ? 's' : ''} to review
          </button>
        )}
        <button
          onClick={onRestart}
          className="w-full py-3 rounded-xl bg-veda-700 hover:bg-veda-800 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
        >
          <Zap size={15} /> Restart all cards
        </button>
        <button
          onClick={onBack}
          className="w-full py-2.5 rounded-xl border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 text-sm font-medium hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
        >
          <ChevronRight size={14} className="rotate-180" /> Pick another subject
        </button>
      </div>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────

type PageMode = 'select' | 'review' | 'done';

export function Revision() {
  useSEO('Quick Revision', 'Rapid-fire key concept and formula review for any subject or exam.');

  const [mode,     setMode]     = useState<PageMode>('select');
  const [deck,     setDeck]     = useState<RevCard[]>([]);
  const [knownIdx, setKnownIdx] = useState<number[]>([]);
  const [revIdx,   setRevIdx]   = useState<number[]>([]);

  function handleStart(type: 'subject' | 'exam', id: string, shuffle: boolean) {
    const cards = buildDeck(type, id, shuffle);
    if (cards.length === 0) return;
    setDeck(cards);
    setKnownIdx([]);
    setRevIdx([]);
    setMode('review');
  }

  function handleDone(known: number[], review: number[]) {
    setKnownIdx(known);
    setRevIdx(review);
    setMode('done');
  }

  function handleRetryReview() {
    const reviewDeck = revIdx.map(i => deck[i]);
    setDeck(reviewDeck);
    setKnownIdx([]);
    setRevIdx([]);
    setMode('review');
  }

  function handleRestart() {
    setKnownIdx([]);
    setRevIdx([]);
    setMode('review');
  }

  return (
    <div className="max-w-2xl mx-auto pb-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-veda-700 flex items-center justify-center flex-shrink-0">
          <Zap size={20} className="text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Quick Revision</h1>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            Rapid-fire key concepts and formulas — Know it or Review later
          </p>
        </div>
      </div>

      {mode === 'select' && (
        <SourcePicker onStart={handleStart} />
      )}

      {mode === 'review' && deck.length > 0 && (
        <ReviewScreen deck={deck} onDone={handleDone} />
      )}

      {mode === 'done' && (
        <DoneScreen
          deck={deck}
          known={knownIdx}
          review={revIdx}
          onRetryReview={handleRetryReview}
          onRestart={handleRestart}
          onBack={() => setMode('select')}
        />
      )}
    </div>
  );
}
