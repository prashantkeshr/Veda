import { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';
import type { Question } from '../../models';
import { Button } from '../ui';
import { cn } from '../../utils/cn';

interface QuizSessionProps {
  questions: Question[];
  topicId: string;
  onComplete: (score: number, total: number) => void;
}

type Phase = 'answering' | 'revealed' | 'done';

export function QuizSession({ questions, onComplete }: QuizSessionProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [phase, setPhase] = useState<Phase>('answering');
  const [scores, setScores] = useState<boolean[]>([]);

  const q = questions[current];
  const isLast = current === questions.length - 1;

  function handleSelect(idx: number) {
    if (phase !== 'answering') return;
    setSelected(idx);
  }

  function handleSubmit() {
    if (selected === null) return;
    const correct = selected === q.correctIndex;
    setScores(prev => [...prev, correct]);
    setPhase('revealed');
  }

  function handleNext() {
    if (isLast) {
      const finalScores = [...scores];
      const total = questions.length;
      const score = finalScores.filter(Boolean).length;
      onComplete(score, total);
      setPhase('done');
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setPhase('answering');
    }
  }

  function handleRestart() {
    setCurrent(0);
    setSelected(null);
    setPhase('answering');
    setScores([]);
  }

  if (phase === 'done') {
    const score = scores.filter(Boolean).length;
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="text-center py-8 px-4">
        <div className="w-16 h-16 rounded-full bg-veda-50 dark:bg-veda-900/30 flex items-center justify-center mx-auto mb-4">
          <Trophy size={28} className="text-veda-700 dark:text-veda-400" />
        </div>
        <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-1">Quiz Complete</h3>
        <p className="text-4xl font-black text-veda-700 dark:text-veda-400 my-3">{pct}%</p>
        <p className="text-sm text-stone-500 mb-6">
          {score} of {questions.length} correct
        </p>
        <Button onClick={handleRestart} variant="outline" className="gap-2">
          <RotateCcw size={14} /> Try again
        </Button>
      </div>
    );
  }

  const isRevealed = phase === 'revealed';
  const isCorrect = selected === q.correctIndex;

  return (
    <div className="space-y-4">
      {/* Progress bar */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-veda-700 dark:bg-veda-500 rounded-full transition-all"
            style={{ width: `${((current) / questions.length) * 100}%` }}
          />
        </div>
        <span className="text-xs text-stone-400 flex-shrink-0">{current + 1} / {questions.length}</span>
      </div>

      {/* Question */}
      <div className="bg-stone-50 dark:bg-stone-800/50 rounded-lg p-4">
        <p className="text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-medium">{q.text}</p>
        {q.year && <p className="text-xs text-stone-400 mt-1">GATE {q.year}</p>}
      </div>

      {/* Options */}
      {q.options && (
        <div className="grid gap-2">
          {q.options.map((opt, i) => {
            const isSelected = selected === i;
            const isAnswer = i === q.correctIndex;
            let style = 'border-stone-200 dark:border-stone-700 hover:border-stone-300 dark:hover:border-stone-600 text-stone-700 dark:text-stone-300';
            if (isRevealed) {
              if (isAnswer) style = 'border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300';
              else if (isSelected && !isAnswer) style = 'border-red-400 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300';
              else style = 'border-stone-200 dark:border-stone-700 text-stone-500 dark:text-stone-500 opacity-60';
            } else if (isSelected) {
              style = 'border-veda-700 dark:border-veda-500 bg-veda-50 dark:bg-veda-900/20 text-veda-800 dark:text-veda-200';
            }
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={isRevealed}
                className={cn(
                  'w-full text-left px-4 py-3 rounded-lg border text-sm transition-all',
                  style,
                  !isRevealed && 'cursor-pointer'
                )}
              >
                <span className="font-mono text-xs mr-2 opacity-60">{String.fromCharCode(65 + i)}.</span>
                {opt}
              </button>
            );
          })}
        </div>
      )}

      {/* Explanation after reveal */}
      {isRevealed && q.explanation && (
        <div className={cn(
          'flex gap-3 p-3 rounded-lg text-sm',
          isCorrect
            ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300'
            : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300'
        )}>
          {isCorrect
            ? <CheckCircle size={15} className="flex-shrink-0 mt-0.5" />
            : <XCircle size={15} className="flex-shrink-0 mt-0.5" />}
          <p className="leading-relaxed">{q.explanation}</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-between items-center pt-1">
        <span className="text-xs text-stone-400">{scores.filter(Boolean).length} correct so far</span>
        {!isRevealed ? (
          <Button variant="primary" size="sm" onClick={handleSubmit} disabled={selected === null}>
            Submit
          </Button>
        ) : (
          <Button variant="primary" size="sm" onClick={handleNext}>
            {isLast ? 'See results' : 'Next question'}
          </Button>
        )}
      </div>
    </div>
  );
}
