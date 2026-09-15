const DB_NAME = 'veda-study-sessions';
const DB_VERSION = 1;

export type StudySession = {
  id: string;           // veda-session-<timestamp>
  topicId: string;      // '' = no topic
  durationMinutes: number;
  mode: string;         // 'pomodoro' | 'deep-work' | 'quick' | 'custom'
  phase: 'work' | 'break';
  completedAt: string;  // ISO string
};

let _db: IDBDatabase | null = null;

function openDB(): Promise<IDBDatabase> {
  if (_db) return Promise.resolve(_db);
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('sessions')) {
        const s = db.createObjectStore('sessions', { keyPath: 'id' });
        s.createIndex('by_date', 'completedAt', { unique: false });
      }
    };
    req.onsuccess = () => { _db = req.result; resolve(req.result); };
    req.onerror = () => reject(req.error);
  });
}

async function run<T>(mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const req = fn(db.transaction('sessions', mode).objectStore('sessions'));
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export const studySessionsDB = {
  getAll: () => run<StudySession[]>('readonly', s => s.getAll()),
  save: (session: StudySession) =>
    run<IDBValidKey>('readwrite', s => s.put(session)).then(() => undefined as void),
};

export function todayKey() {
  return new Date().toISOString().slice(0, 10);
}
