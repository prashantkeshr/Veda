import type { Topic, Question } from '../models';

const DB_NAME = 'veda-studio';
const DB_VERSION = 1;

export type DraftTopic = Topic & { _draft: true; _savedAt: string };
export type DraftQuestion = Question & { _draft: true; _savedAt: string };

let _db: IDBDatabase | null = null;

function openDB(): Promise<IDBDatabase> {
  if (_db) return Promise.resolve(_db);
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('topic_drafts'))
        db.createObjectStore('topic_drafts', { keyPath: 'id' });
      if (!db.objectStoreNames.contains('question_drafts'))
        db.createObjectStore('question_drafts', { keyPath: 'id' });
    };
    req.onsuccess = () => { _db = req.result; resolve(req.result); };
    req.onerror = () => reject(req.error);
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

export const studioDB = {
  getAllTopicDrafts: () =>
    run<DraftTopic[]>('topic_drafts', 'readonly', s => s.getAll()),

  saveTopicDraft: (t: DraftTopic) =>
    run<IDBValidKey>('topic_drafts', 'readwrite', s => s.put(t)).then(() => undefined as void),

  deleteTopicDraft: (id: string) =>
    run<undefined>('topic_drafts', 'readwrite', s => s.delete(id) as IDBRequest<undefined>).then(() => undefined as void),

  getAllQuestionDrafts: () =>
    run<DraftQuestion[]>('question_drafts', 'readonly', s => s.getAll()),

  saveQuestionDraft: (q: DraftQuestion) =>
    run<IDBValidKey>('question_drafts', 'readwrite', s => s.put(q)).then(() => undefined as void),

  deleteQuestionDraft: (id: string) =>
    run<undefined>('question_drafts', 'readwrite', s => s.delete(id) as IDBRequest<undefined>).then(() => undefined as void),
};
