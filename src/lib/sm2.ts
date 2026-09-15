// SM-2 spaced repetition algorithm
// quality: 0 = Again, 2 = Hard, 4 = Good, 5 = Easy

export type CardState = {
  cardId: string;
  easeFactor: number;   // starts at 2.5
  interval: number;     // days
  reps: number;
  dueDate: string;      // YYYY-MM-DD
  lastReviewed: string; // ISO string
};

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function addDays(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

export function nextState(state: CardState, quality: 0 | 2 | 4 | 5): CardState {
  let { easeFactor, interval, reps } = state;

  if (quality < 3) {
    reps = 0;
    interval = 1;
  } else {
    if (reps === 0) interval = 1;
    else if (reps === 1) interval = 6;
    else interval = Math.round(interval * easeFactor);
    easeFactor = Math.max(1.3, easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    reps += 1;
  }

  return {
    cardId: state.cardId,
    easeFactor,
    interval,
    reps,
    dueDate: addDays(interval),
    lastReviewed: new Date().toISOString(),
  };
}

export function newCardState(cardId: string): CardState {
  return { cardId, easeFactor: 2.5, interval: 0, reps: 0, dueDate: todayISO(), lastReviewed: '' };
}

export function isDue(state: CardState): boolean {
  return state.dueDate <= todayISO();
}
