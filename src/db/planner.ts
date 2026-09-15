const DB_NAME = 'veda-planner';
const DB_VERSION = 1;

export type DayPlan = {
  id: string;           // YYYY-MM-DD
  topicIds: string[];   // ordered scheduled topics
  completed: string[];  // subset of topicIds finished on this day
  notes: string;
};

let _db: IDBDatabase | null = null;

function openDB(): Promise<IDBDatabase> {
  if (_db) return Promise.resolve(_db);
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('plans')) {
        db.createObjectStore('plans', { keyPath: 'id' });
      }
    };
    req.onsuccess = () => { _db = req.result; resolve(req.result); };
    req.onerror  = () => reject(req.error);
  });
}

async function run<T>(mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const req = fn(db.transaction('plans', mode).objectStore('plans'));
    req.onsuccess = () => resolve(req.result);
    req.onerror  = () => reject(req.error);
  });
}

export const plannerDB = {
  get:  (id: string)    => run<DayPlan | undefined>('readonly',  s => s.get(id)),
  save: (plan: DayPlan) => run<IDBValidKey>('readwrite', s => s.put(plan)).then(() => undefined as void),
};

export function emptyDayPlan(id: string): DayPlan {
  return { id, topicIds: [], completed: [], notes: '' };
}
