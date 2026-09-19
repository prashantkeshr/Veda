// IndexedDB wrapper — Phase 2 Personal Learning Vault
// DB version 1. Increment version when adding stores in future phases.

const DB_NAME = 'veda-user-data';
const DB_VERSION = 1;

export interface ProgressRecord {
  topicId: string;
  status: 'not-started' | 'in-progress' | 'completed';
  updatedAt: string;
}

export interface BookmarkRecord {
  entityId: string;
  type: string;
  slug: string;
  title: string;
  savedAt: string;
}

export interface QuizAttempt {
  id?: number;
  topicId: string;
  score: number;
  total: number;
  date: string;
}

let _db: IDBDatabase | null = null;

function openDB(): Promise<IDBDatabase> {
  if (_db) return Promise.resolve(_db);
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (e) => {
      const db = (e.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains('progress')) {
        db.createObjectStore('progress', { keyPath: 'topicId' });
      }
      if (!db.objectStoreNames.contains('bookmarks')) {
        db.createObjectStore('bookmarks', { keyPath: 'entityId' });
      }
      if (!db.objectStoreNames.contains('quiz_attempts')) {
        const store = db.createObjectStore('quiz_attempts', { keyPath: 'id', autoIncrement: true });
        store.createIndex('by_topic', 'topicId', { unique: false });
      }
    };
    req.onsuccess = (e) => {
      _db = (e.target as IDBOpenDBRequest).result;
      resolve(_db);
    };
    req.onerror = () => reject(req.error);
    req.onblocked = () => reject(new Error('IndexedDB blocked'));
  });
}

function tx<T>(
  store: string,
  mode: IDBTransactionMode,
  fn: (s: IDBObjectStore) => IDBRequest<T>
): Promise<T> {
  return openDB().then(
    db =>
      new Promise((resolve, reject) => {
        const t = db.transaction(store, mode);
        const req = fn(t.objectStore(store));
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      })
  );
}

// ── Progress ───────────────────────────────────────────────────────────────

export function getAllProgress(): Promise<ProgressRecord[]> {
  return openDB().then(
    db =>
      new Promise((resolve, reject) => {
        const req = db.transaction('progress', 'readonly').objectStore('progress').getAll();
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      })
  );
}

export function setProgress(record: ProgressRecord): Promise<void> {
  return tx('progress', 'readwrite', s => s.put(record)).then(() => undefined);
}

export function deleteProgress(topicId: string): Promise<void> {
  return tx('progress', 'readwrite', s => s.delete(topicId)).then(() => undefined);
}

// ── Bookmarks ──────────────────────────────────────────────────────────────

export function getAllBookmarks(): Promise<BookmarkRecord[]> {
  return openDB().then(
    db =>
      new Promise((resolve, reject) => {
        const req = db.transaction('bookmarks', 'readonly').objectStore('bookmarks').getAll();
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      })
  );
}

export function addBookmark(record: BookmarkRecord): Promise<void> {
  return tx('bookmarks', 'readwrite', s => s.put(record)).then(() => undefined);
}

export function removeBookmark(entityId: string): Promise<void> {
  return tx('bookmarks', 'readwrite', s => s.delete(entityId)).then(() => undefined);
}

// ── Quiz attempts ──────────────────────────────────────────────────────────

export function getAllQuizAttempts(): Promise<QuizAttempt[]> {
  return openDB().then(
    db =>
      new Promise((resolve, reject) => {
        const req = db.transaction('quiz_attempts', 'readonly').objectStore('quiz_attempts').getAll();
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      })
  );
}

export function addQuizAttempt(attempt: Omit<QuizAttempt, 'id'>): Promise<void> {
  return tx('quiz_attempts', 'readwrite', s => s.add(attempt)).then(() => undefined);
}
