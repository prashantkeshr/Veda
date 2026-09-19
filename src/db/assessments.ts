const DB_NAME = 'veda-assessments';
const DB_VERSION = 1;

export type QuizSession = {
  id: string;
  createdAt: string;
  completedAt: string;
  subjectId: string;
  difficulty: string;
  questionIds: string[];
  answers: (number | null)[];
  score: number;
  total: number;
  timeTakenSeconds: number;
};

let _db: IDBDatabase | null = null;

function openDB(): Promise<IDBDatabase> {
  if (_db) return Promise.resolve(_db);
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('sessions'))
        db.createObjectStore('sessions', { keyPath: 'id' });
    };
    req.onsuccess = () => { _db = req.result; resolve(req.result); };
    req.onerror = () => reject(req.error);
    req.onblocked = () => reject(new Error('IndexedDB blocked'));
  });
}

async function run<T>(
  storeName: string,
  mode: IDBTransactionMode,
  fn: (store: IDBObjectStore) => IDBRequest<T>
): Promise<T> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const t = db.transaction(storeName, mode);
    const req = fn(t.objectStore(storeName));
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export const assessmentsDB = {
  getAllSessions: () =>
    run<QuizSession[]>('sessions', 'readonly', s => s.getAll()),

  saveSession: (session: QuizSession) =>
    run<IDBValidKey>('sessions', 'readwrite', s => s.put(session))
      .then(() => undefined as void),

  deleteSession: (id: string) =>
    run<undefined>('sessions', 'readwrite', s => s.delete(id) as IDBRequest<undefined>)
      .then(() => undefined as void),
};
