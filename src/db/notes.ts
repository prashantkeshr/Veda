const DB_NAME = 'veda-notes';
const DB_VERSION = 1;

export type Note = {
  id: string;        // veda-note-<timestamp>
  title: string;
  body: string;
  topicId: string;   // '' = standalone
  subjectId: string; // '' = none
  tags: string[];
  createdAt: string;
  updatedAt: string;
};

let _db: IDBDatabase | null = null;

function openDB(): Promise<IDBDatabase> {
  if (_db) return Promise.resolve(_db);
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('notes')) {
        const s = db.createObjectStore('notes', { keyPath: 'id' });
        s.createIndex('by_updated', 'updatedAt', { unique: false });
        s.createIndex('by_topic', 'topicId', { unique: false });
      }
    };
    req.onsuccess = () => { _db = req.result; resolve(req.result); };
    req.onerror = () => reject(req.error);
  });
}

async function run<T>(mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const req = fn(db.transaction('notes', mode).objectStore('notes'));
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export const notesDB = {
  getAll: (): Promise<Note[]> =>
    openDB().then(db => new Promise((resolve, reject) => {
      const req = db.transaction('notes', 'readonly').objectStore('notes')
        .index('by_updated').getAll();
      req.onsuccess = () => resolve((req.result as Note[]).reverse());
      req.onerror = () => reject(req.error);
    })),

  save: (note: Note) =>
    run<IDBValidKey>('readwrite', s => s.put(note)).then(() => undefined as void),

  delete: (id: string) =>
    run<undefined>('readwrite', s => s.delete(id) as IDBRequest<undefined>).then(() => undefined as void),
};

export function newNote(overrides?: Partial<Note>): Note {
  const now = new Date().toISOString();
  return {
    id: `veda-note-${Date.now()}`,
    title: '',
    body: '',
    topicId: '',
    subjectId: '',
    tags: [],
    createdAt: now,
    updatedAt: now,
    ...overrides,
  };
}
