import { useState, useEffect, useCallback } from 'react';
import { useSEO } from '../hooks/useSEO';
import { Layers, RotateCcw, ChevronRight, BookOpen, HelpCircle } from 'lucide-react';
import { subjectRepo, topicRepo, questionRepo } from '../repositories';
import { flashcardsDB } from '../db/flashcards';
import { newCardState, nextState, isDue, type CardState } from '../lib/sm2';
import { Spinner, SectionHeader } from '../components/ui';
import { cn } from '../utils/cn';

// ── Card model ────────────────────────────────────────────────────────────

type FlashCard = {
  id: string;
  front: string;
  back: string;
  hint?: string;
  subjectId: string;
  difficulty: string;
  type: 'concept' | 'question';
};

function buildCards(): FlashCard[] {
  const cards: FlashCard[] = [];

  // Concept cards from topic keyConcepts
  for (const topic of topicRepo.getAll()) {
    topic.keyConcepts.forEach((concept, i) => {
      cards.push({
        id: `concept-${topic.id}-${i}`,
        front: concept,
        back: `Topic: ${topic.title}\n\n${topic.overview.slice(0, 200)}${topic.overview.length > 200 ? '…' : ''}`,
        hint: topic.title,
        subjectId: topic.subjectIds[0] ?? '',
        difficulty: topic.difficulty,
        type: 'concept',
      });
    });
  }

  // Question cards from MCQ questions
  for (const q of questionRepo.getAll()) {
    if (q.type !== 'mcq' || !q.options || q.correctIndex === undefined) continue;
    cards.push({
      id: `question-${q.id}`,
      front: q.text,
      back: `✓ ${q.options[q.correctIndex]}\n\n${q.explanation}`,
      subjectId: q.subjectIds[0] ?? '',
      difficulty: q.difficulty,
      type: 'question',
    });
  }

  return cards;
}

// ── Flip card ─────────────────────────────────────────────────────────────

function FlipCard({ card, flipped, onFlip }: {
  card: FlashCard;
  flipped: boolean;
  onFlip: () => void;
}) {
  return (
    <div
      className="relative cursor-pointer select-none"
      style={{ perspective: '1000px' }}
      onClick={onFlip}
    >
      <div
        className="relative w-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          minHeight: 240,
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-8 rounded-2xl bg-white dark:bg-stone-900 border-2 border-stone-200 dark:border-stone-700 shadow-md"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-xs font-medium text-stone-400 uppercase tracking-widest mb-4">
            {card.type === 'concept' ? 'Concept' : 'Question'}
          </div>
          <p className="text-xl font-semibold text-stone-900 dark:text-stone-100 text-center leading-snug">
            {card.front}
          </p>
          {card.hint && !flipped && (
            <p className="text-sm text-stone-400 mt-4 text-center">{card.hint}</p>
          )}
          <p className="text-xs text-stone-300 dark:text-stone-600 mt-6">Tap to reveal answer</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center p-8 rounded-2xl bg-veda-50 dark:bg-veda-900/20 border-2 border-veda-200 dark:border-veda-700 shadow-md"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="text-xs font-medium text-veda-500 dark:text-veda-400 uppercase tracking-widest mb-4">Answer</div>
          <p className="text-base text-stone-800 dark:text-stone-200 text-center leading-relaxed whitespace-pre-line">
            {card.back}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Rating buttons ────────────────────────────────────────────────────────

const RATINGS: Array<{ quality: 0 | 2 | 4 | 5; label: string; color: string }> = [
  { quality: 0, label: 'Again', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 border-red-200 dark:border-red-800' },
  { quality: 2, label: 'Hard',  color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 hover:bg-orange-200 dark:hover:bg-orange-900/50 border-orange-200 dark:border-orange-800' },
  { quality: 4, label: 'Good',  color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 border-emerald-200 dark:border-emerald-800' },
  { quality: 5, label: 'Easy',  color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 border-blue-200 dark:border-blue-800' },
];

// ── Main page ─────────────────────────────────────────────────────────────

type Phase = 'browse' | 'review' | 'done';

type SessionResult = { quality: 0 | 2 | 4 | 5; label: string };

export function Flashcards() {
  useSEO('Flashcards', 'Spaced repetition flashcards for engineering topics and exam questions.');

  const [allCards] = useState<FlashCard[]>(() => buildCards());
  const [cardStates, setCardStates] = useState<Map<string, CardState>>(new Map());
  const [statesLoaded, setStatesLoaded] = useState(false);

  const [phase, setPhase] = useState<Phase>('browse');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<'all' | 'concept' | 'question'>('all');

  const [deck, setDeck] = useState<FlashCard[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [results, setResults] = useState<SessionResult[]>([]);
  const [newStates, setNewStates] = useState<CardState[]>([]);

  useEffect(() => {
    flashcardsDB.getAll()
      .then(rows => {
        const m = new Map(rows.map(r => [r.cardId, r]));
        setCardStates(m);
        setStatesLoaded(true);
      })
      .catch(() => setStatesLoaded(true));
  }, []);

  const subjects = subjectRepo.getAll();

  const filteredCards = allCards.filter(c => {
    if (selectedSubject !== 'all' && c.subjectId !== selectedSubject) return false;
    if (selectedType !== 'all' && c.type !== selectedType) return false;
    return true;
  });

  const dueCards = filteredCards.filter(c => {
    const state = cardStates.get(c.id);
    return !state || isDue(state);
  });

  function startDeck() {
    const toReview = dueCards.length > 0 ? dueCards : filteredCards.slice(0, 20);
    setDeck(toReview);
    setCurrentIdx(0);
    setFlipped(false);
    setResults([]);
    setNewStates([]);
    setPhase('review');
  }

  const handleRate = useCallback((quality: 0 | 2 | 4 | 5, label: string) => {
    const card = deck[currentIdx];
    const prev = cardStates.get(card.id) ?? newCardState(card.id);
    const updated = nextState(prev, quality);

    setNewStates(s => [...s, updated]);
    setResults(r => [...r, { quality, label }]);

    if (currentIdx + 1 >= deck.length) {
      // Save all at once when session ends
      const all = [...newStates, updated];
      flashcardsDB.saveMany(all).catch(() => {});
      setCardStates(prev => {
        const m = new Map(prev);
        all.forEach(s => m.set(s.cardId, s));
        return m;
      });
      setPhase('done');
    } else {
      setCurrentIdx(i => i + 1);
      setFlipped(false);
    }
  }, [deck, currentIdx, cardStates, newStates]);

  if (!statesLoaded) {
    return <div className="flex items-center justify-center py-20"><Spinner size="lg" /></div>;
  }

  // ── Browse ────────────────────────────────────────────────────────────

  if (phase === 'browse') {
    return (
      <div className="space-y-6 pb-8 max-w-2xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center">
            <Layers size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Flashcards</h1>
            <p className="text-sm text-stone-500 dark:text-stone-400">Spaced repetition — SM-2 algorithm</p>
          </div>
        </div>

        <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5 space-y-4">
          <SectionHeader title="Choose Your Deck" description="Filter by subject and card type" />

          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-stone-500 dark:text-stone-400 mb-1.5">Subject</label>
              <select
                value={selectedSubject}
                onChange={e => setSelectedSubject(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-veda-700/30"
              >
                <option value="all">All Subjects</option>
                {subjects.map(s => <option key={s.id} value={s.id}>{s.shortTitle || s.title}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-500 dark:text-stone-400 mb-1.5">Card Type</label>
              <div className="flex gap-1 h-[38px]">
                {(['all', 'concept', 'question'] as const).map(t => (
                  <button
                    key={t}
                    onClick={() => setSelectedType(t)}
                    className={cn(
                      'flex-1 rounded-lg border text-xs font-medium capitalize transition-colors',
                      selectedType === t
                        ? 'bg-veda-700 text-white border-veda-700'
                        : 'border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800'
                    )}
                  >
                    {t === 'concept' ? <><BookOpen size={11} className="inline mr-1" />Concepts</> : t === 'question' ? <><HelpCircle size={11} className="inline mr-1" />Questions</> : 'All'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 pt-1">
            {[
              { label: 'Total Cards', value: filteredCards.length },
              { label: 'Due Now', value: dueCards.length, highlight: dueCards.length > 0 },
              { label: 'Reviewed', value: filteredCards.filter(c => cardStates.has(c.id)).length },
            ].map(({ label, value, highlight }) => (
              <div key={label} className={cn(
                'rounded-lg p-3 text-center border',
                highlight
                  ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800'
                  : 'bg-stone-50 dark:bg-stone-800/60 border-stone-100 dark:border-stone-800'
              )}>
                <div className={cn('text-2xl font-bold tabular-nums', highlight ? 'text-amber-600 dark:text-amber-400' : 'text-stone-900 dark:text-stone-100')}>{value}</div>
                <div className="text-xs text-stone-400 mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          <button
            onClick={startDeck}
            disabled={filteredCards.length === 0}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-veda-700 text-white font-semibold text-sm hover:bg-veda-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            {dueCards.length > 0
              ? `Review ${dueCards.length} due card${dueCards.length !== 1 ? 's' : ''}`
              : `Study ${Math.min(filteredCards.length, 20)} cards`}
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Legend */}
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { icon: BookOpen, label: 'Concept Cards', desc: 'Key concepts from each topic — test recall of definitions and principles' },
            { icon: HelpCircle, label: 'Question Cards', desc: 'MCQ questions from the question bank — answer then rate your confidence' },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex gap-3 p-4 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800">
              <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center flex-shrink-0">
                <Icon size={15} className="text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-stone-900 dark:text-stone-100">{label}</p>
                <p className="text-xs text-stone-400 mt-0.5 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── Review ────────────────────────────────────────────────────────────

  if (phase === 'review') {
    const card = deck[currentIdx];
    const progress = ((currentIdx) / deck.length) * 100;

    return (
      <div className="max-w-lg mx-auto space-y-5 pb-8">
        {/* Progress */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
            <div className="h-full bg-purple-500 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
          <span className="text-sm text-stone-400 tabular-nums flex-shrink-0">{currentIdx + 1} / {deck.length}</span>
        </div>

        <FlipCard card={card} flipped={flipped} onFlip={() => setFlipped(f => !f)} />

        {/* Ratings — only after flip */}
        {flipped ? (
          <div>
            <p className="text-xs text-center text-stone-400 mb-3">How well did you know this?</p>
            <div className="grid grid-cols-4 gap-2">
              {RATINGS.map(r => (
                <button
                  key={r.quality}
                  onClick={() => handleRate(r.quality, r.label)}
                  className={cn('py-2.5 rounded-xl border text-sm font-semibold transition-colors', r.color)}
                >
                  {r.label}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-center text-stone-300 dark:text-stone-700 mt-2">
              Again = retry · Hard = tomorrow · Good = spaced · Easy = extended
            </p>
          </div>
        ) : (
          <p className="text-center text-sm text-stone-400">
            Tap the card to reveal the answer, then rate your recall.
          </p>
        )}
      </div>
    );
  }

  // ── Done ──────────────────────────────────────────────────────────────

  const counts = { 0: 0, 2: 0, 4: 0, 5: 0 } as Record<number, number>;
  for (const r of results) counts[r.quality]++;

  return (
    <div className="max-w-lg mx-auto space-y-5 pb-8">
      <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-6 text-center space-y-3">
        <div className="text-4xl mb-2">🎉</div>
        <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100">Session Complete!</h2>
        <p className="text-sm text-stone-400">{deck.length} cards reviewed — SM-2 schedules updated</p>

        <div className="grid grid-cols-4 gap-2 pt-2">
          {RATINGS.map(r => (
            <div key={r.quality} className={cn('py-3 rounded-xl border', r.color)}>
              <div className="text-xl font-bold tabular-nums">{counts[r.quality]}</div>
              <div className="text-xs mt-0.5">{r.label}</div>
            </div>
          ))}
        </div>

        <div className="pt-2 text-sm text-stone-500 dark:text-stone-400">
          {counts[0] > 0
            ? `${counts[0]} card${counts[0] !== 1 ? 's' : ''} will reappear tomorrow — keep practising!`
            : 'Great recall! Cards are scheduled based on your confidence ratings.'}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => { setPhase('browse'); }}
          className="flex-1 py-3 rounded-xl border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-medium text-sm hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
        >
          Back to Decks
        </button>
        <button
          onClick={() => {
            const again = deck.filter((_, i) => results[i]?.quality === 0);
            if (again.length > 0) {
              setDeck(again); setCurrentIdx(0); setFlipped(false); setResults([]); setNewStates([]); setPhase('review');
            } else {
              setPhase('browse');
            }
          }}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-600 text-white font-medium text-sm hover:bg-purple-700 transition-colors"
        >
          <RotateCcw size={14} />
          {results.filter(r => r.quality === 0).length > 0 ? `Retry ${results.filter(r => r.quality === 0).length} Again` : 'New Session'}
        </button>
      </div>
    </div>
  );
}
