import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';
import {
  getAllProgress, setProgress, deleteProgress,
  getAllBookmarks, addBookmark, removeBookmark,
  getAllQuizAttempts, addQuizAttempt,
  type ProgressRecord, type BookmarkRecord, type QuizAttempt,
} from '../../db';

type ProgressStatus = ProgressRecord['status'];

interface UserDataContextValue {
  // Progress
  progressMap: Record<string, ProgressStatus>;
  setTopicProgress: (topicId: string, status: ProgressStatus) => Promise<void>;
  // Bookmarks
  bookmarks: BookmarkRecord[];
  bookmarkIds: Set<string>;
  toggleBookmark: (record: Omit<BookmarkRecord, 'savedAt'>) => Promise<void>;
  // Quiz attempts
  quizAttempts: QuizAttempt[];
  saveQuizAttempt: (attempt: Omit<QuizAttempt, 'id'>) => Promise<void>;
  // Loading
  ready: boolean;
}

const UserDataContext = createContext<UserDataContextValue>({
  progressMap: {},
  setTopicProgress: async () => {},
  bookmarks: [],
  bookmarkIds: new Set(),
  toggleBookmark: async () => {},
  quizAttempts: [],
  saveQuizAttempt: async () => {},
  ready: false,
});

export function useUserData() {
  return useContext(UserDataContext);
}

export function UserDataProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [progressMap, setProgressMap] = useState<Record<string, ProgressStatus>>({});
  const [bookmarks, setBookmarks] = useState<BookmarkRecord[]>([]);
  const [bookmarkIds, setBookmarkIds] = useState<Set<string>>(new Set());
  const [quizAttempts, setQuizAttempts] = useState<QuizAttempt[]>([]);

  useEffect(() => {
    Promise.all([getAllProgress(), getAllBookmarks(), getAllQuizAttempts()])
      .then(([progress, bmarks, attempts]) => {
        const map: Record<string, ProgressStatus> = {};
        for (const r of progress) map[r.topicId] = r.status;
        setProgressMap(map);
        setBookmarks(bmarks);
        setBookmarkIds(new Set(bmarks.map(b => b.entityId)));
        setQuizAttempts(attempts);
        setReady(true);
      })
      .catch(() => setReady(true)); // fail gracefully — private browsing etc.
  }, []);

  const setTopicProgress = useCallback(async (topicId: string, status: ProgressStatus) => {
    if (status === 'not-started') {
      await deleteProgress(topicId);
      setProgressMap(prev => { const n = { ...prev }; delete n[topicId]; return n; });
    } else {
      const record: ProgressRecord = { topicId, status, updatedAt: new Date().toISOString() };
      await setProgress(record);
      setProgressMap(prev => ({ ...prev, [topicId]: status }));
    }
  }, []);

  const toggleBookmark = useCallback(async (record: Omit<BookmarkRecord, 'savedAt'>) => {
    if (bookmarkIds.has(record.entityId)) {
      await removeBookmark(record.entityId);
      setBookmarks(prev => prev.filter(b => b.entityId !== record.entityId));
      setBookmarkIds(prev => { const n = new Set(prev); n.delete(record.entityId); return n; });
    } else {
      const full: BookmarkRecord = { ...record, savedAt: new Date().toISOString() };
      await addBookmark(full);
      setBookmarks(prev => [full, ...prev]);
      setBookmarkIds(prev => new Set([...prev, record.entityId]));
    }
  }, [bookmarkIds]);

  const saveQuizAttempt = useCallback(async (attempt: Omit<QuizAttempt, 'id'>) => {
    await addQuizAttempt(attempt);
    setQuizAttempts(prev => [...prev, attempt]);
  }, []);

  return (
    <UserDataContext.Provider value={{
      progressMap, setTopicProgress,
      bookmarks, bookmarkIds, toggleBookmark,
      quizAttempts, saveQuizAttempt,
      ready,
    }}>
      {children}
    </UserDataContext.Provider>
  );
}
