import type { CardState } from '../lib/sm2';

const DB_NAME = 'veda-flashcards';
const DB_VERSION = 1;

let _db: IDBDatabase | null = null;

function openDB(): Promise<IDBDatabase> {
  if (_db) return Promise.resolve(_db);
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('cards'))
        db.createObjectStore('cards', { keyPath: 'cardId' });
    };
    req.onsuccess = () => { _db = req.result; resolve(req.result); };
    req.onerror = () => reject(req.error);
  });
}

async function run<T>(mode: IDBTransactionMode, fn: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const req = fn(db.transaction('cards', mode).objectStore('cards'));
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export const flashcardsDB = {
  getAll: () => run<CardState[]>('readonly', s => s.getAll()),
  get: (cardId: string) => run<CardState | undefined>('readonly', s => s.get(cardId)),
  save: (state: CardState) => run<IDBValidKey>('readwrite', s => s.put(state)).then(() => undefined as void),
  saveMany: async (states: CardState[]) => {
    const db = await openDB();
    return new Promise<void>((resolve, reject) => {
      const t = db.transaction('cards', 'readwrite');
      const store = t.objectStore('cards');
      for (const s of states) store.put(s);
      t.oncomplete = () => resolve();
      t.onerror = () => reject(t.error);
    });
  },
};

export type { CardState };
