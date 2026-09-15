import { useState, useEffect, useRef, useCallback } from 'react';
import { useSEO } from '../hooks/useSEO';
import {
  FileText, Plus, Search, Trash2, Clock, Hash,
  BookOpen, Save, ChevronRight,
} from 'lucide-react';
import { notesDB, newNote, type Note } from '../db/notes';
import { topicRepo } from '../repositories';
import { Spinner } from '../components/ui';
import { cn } from '../utils/cn';

// ── Helpers ────────────────────────────────────────────────────────────────

function relativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(iso).toLocaleDateString();
}

function wordCount(text: string): number {
  return text.trim() ? text.trim().split(/\s+/).length : 0;
}

function notePreview(body: string): string {
  const line = body.split('\n').find(l => l.trim());
  if (!line) return 'Empty note';
  return line.length > 80 ? line.slice(0, 80) + '…' : line;
}

// ── Note list item ─────────────────────────────────────────────────────────

function NoteItem({ note, active, onClick }: { note: Note; active: boolean; onClick: () => void }) {
  const topic = note.topicId ? topicRepo.getById(note.topicId) : null;
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full text-left px-4 py-3.5 border-b border-stone-100 dark:border-stone-800 transition-colors',
        active
          ? 'bg-veda-50 dark:bg-veda-900/20 border-l-2 border-l-veda-600 pl-3.5'
          : 'hover:bg-stone-50 dark:hover:bg-stone-800/60'
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <p className={cn('text-sm font-medium truncate', active ? 'text-veda-700 dark:text-veda-300' : 'text-stone-900 dark:text-stone-100')}>
          {note.title || 'Untitled note'}
        </p>
        <span className="text-[10px] text-stone-400 flex-shrink-0 flex items-center gap-0.5 mt-0.5">
          <Clock size={9} />{relativeTime(note.updatedAt)}
        </span>
      </div>
      <p className="text-xs text-stone-400 mt-0.5 truncate">{notePreview(note.body)}</p>
      {topic && (
        <span className="inline-flex items-center gap-1 mt-1.5 text-[10px] bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 px-1.5 py-0.5 rounded">
          <BookOpen size={8} />{topic.title}
        </span>
      )}
    </button>
  );
}

// ── Editor ─────────────────────────────────────────────────────────────────

function NoteEditor({
  note, onSave, onDelete,
}: {
  note: Note;
  onSave: (updated: Note) => void;
  onDelete: (id: string) => void;
}) {
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);
  const [topicId, setTopicId] = useState(note.topicId);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [showConfirm, setShowConfirm] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const topics = topicRepo.getAll();

  // Reset when note changes
  useEffect(() => {
    setTitle(note.title);
    setBody(note.body);
    setTopicId(note.topicId);
    setSaveStatus('idle');
  }, [note.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const save = useCallback((t: string, b: string, tid: string) => {
    const subject = tid ? (topicRepo.getById(tid)?.subjectIds[0] ?? '') : '';
    const updated: Note = {
      ...note,
      title: t,
      body: b,
      topicId: tid,
      subjectId: subject,
      updatedAt: new Date().toISOString(),
    };
    setSaveStatus('saving');
    notesDB.save(updated)
      .then(() => { setSaveStatus('saved'); onSave(updated); setTimeout(() => setSaveStatus('idle'), 2000); })
      .catch(() => setSaveStatus('idle'));
  }, [note, onSave]);

  function scheduleAutoSave(t: string, b: string, tid: string) {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => save(t, b, tid), 1200);
  }

  function handleTitle(v: string) { setTitle(v); scheduleAutoSave(v, body, topicId); }
  function handleBody(v: string) { setBody(v); scheduleAutoSave(title, v, topicId); }
  function handleTopic(v: string) { setTopicId(v); scheduleAutoSave(title, body, v); }

  const wc = wordCount(body);

  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50">
        <select
          value={topicId}
          onChange={e => handleTopic(e.target.value)}
          className="flex-1 text-xs rounded-md border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-veda-600"
        >
          <option value="">No topic linked</option>
          {topics.map(t => <option key={t.id} value={t.id}>{t.title}</option>)}
        </select>

        <span className={cn(
          'text-[10px] font-medium flex items-center gap-1 flex-shrink-0 px-2 py-1 rounded',
          saveStatus === 'saving' ? 'text-amber-600 dark:text-amber-400' :
          saveStatus === 'saved' ? 'text-emerald-600 dark:text-emerald-400' :
          'text-stone-400'
        )}>
          <Save size={10} />
          {saveStatus === 'saving' ? 'Saving…' : saveStatus === 'saved' ? 'Saved' : 'Auto-save on'}
        </span>

        <button
          onClick={() => setShowConfirm(true)}
          className="p-1.5 rounded text-stone-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex-shrink-0"
          aria-label="Delete note"
        >
          <Trash2 size={14} />
        </button>
      </div>

      {/* Title */}
      <input
        type="text"
        value={title}
        onChange={e => handleTitle(e.target.value)}
        placeholder="Note title…"
        className="w-full px-5 pt-5 pb-2 text-xl font-bold text-stone-900 dark:text-stone-100 bg-transparent border-none outline-none placeholder-stone-300 dark:placeholder-stone-700"
      />

      {/* Body */}
      <textarea
        value={body}
        onChange={e => handleBody(e.target.value)}
        placeholder="Start writing…"
        className="flex-1 w-full px-5 py-3 text-sm text-stone-800 dark:text-stone-200 bg-transparent border-none outline-none resize-none placeholder-stone-300 dark:placeholder-stone-700 leading-relaxed font-mono"
      />

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-2 border-t border-stone-100 dark:border-stone-800 text-[10px] text-stone-400">
        <span className="flex items-center gap-1"><Hash size={9} />{wc} word{wc !== 1 ? 's' : ''}</span>
        <span>Updated {relativeTime(note.updatedAt)}</span>
      </div>

      {/* Delete confirm */}
      {showConfirm && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 dark:bg-stone-900/80 backdrop-blur-sm rounded-r-xl">
          <div className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-700 shadow-lg p-6 max-w-xs mx-4 space-y-4">
            <p className="text-sm text-stone-700 dark:text-stone-300">Delete this note? This cannot be undone.</p>
            <div className="flex gap-2">
              <button onClick={() => setShowConfirm(false)} className="flex-1 py-2 rounded-lg border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 text-sm hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors">
                Cancel
              </button>
              <button onClick={() => { onDelete(note.id); setShowConfirm(false); }} className="flex-1 py-2 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────

export function Notes() {
  useSEO('Study Notes', 'Your personal notes linked to topics, with auto-save.');
  const [notes, setNotes] = useState<Note[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [mobileShowEditor, setMobileShowEditor] = useState(false);

  useEffect(() => {
    notesDB.getAll()
      .then(n => { setNotes(n); setLoaded(true); if (n.length > 0) setActiveId(n[0].id); })
      .catch(() => setLoaded(true));
  }, []);

  const filtered = notes.filter(n => {
    if (!search) return true;
    const q = search.toLowerCase();
    return n.title.toLowerCase().includes(q) || n.body.toLowerCase().includes(q);
  });

  function createNote() {
    const note = newNote();
    notesDB.save(note).then(() => {
      setNotes(prev => [note, ...prev]);
      setActiveId(note.id);
      setMobileShowEditor(true);
    }).catch(() => {});
  }

  function handleSave(updated: Note) {
    setNotes(prev => prev.map(n => n.id === updated.id ? updated : n)
      .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)));
  }

  function handleDelete(id: string) {
    notesDB.delete(id).catch(() => {});
    const remaining = notes.filter(n => n.id !== id);
    setNotes(remaining);
    setActiveId(remaining[0]?.id ?? null);
    setMobileShowEditor(false);
  }

  const activeNote = notes.find(n => n.id === activeId) ?? null;

  if (!loaded) return <div className="flex items-center justify-center py-20"><Spinner size="lg" /></div>;

  return (
    <div className="h-full -mt-6 -mx-4 lg:-mx-8 overflow-hidden">
      <div className="flex h-full" style={{ height: 'calc(100vh - 64px)' }}>

        {/* Sidebar list — hidden on mobile when editor is open */}
        <div className={cn(
          'flex flex-col border-r border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900',
          'w-full lg:w-72 xl:w-80 flex-shrink-0',
          mobileShowEditor ? 'hidden lg:flex' : 'flex'
        )}>
          {/* List header */}
          <div className="flex items-center gap-2 p-3 border-b border-stone-200 dark:border-stone-800">
            <div className="relative flex-1">
              <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
              <input
                type="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search notes…"
                className="w-full pl-8 pr-3 py-1.5 text-sm rounded-md bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-veda-600"
              />
            </div>
            <button
              onClick={createNote}
              className="w-8 h-8 rounded-md bg-veda-700 text-white flex items-center justify-center hover:bg-veda-800 transition-colors flex-shrink-0"
              aria-label="New note"
            >
              <Plus size={16} />
            </button>
          </div>

          {/* Note count */}
          <div className="px-4 py-2 text-xs text-stone-400 border-b border-stone-100 dark:border-stone-800">
            {filtered.length} note{filtered.length !== 1 ? 's' : ''}
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 px-4 text-center gap-3">
                <FileText size={28} className="text-stone-300 dark:text-stone-700" />
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  {search ? 'No notes match your search' : 'No notes yet'}
                </p>
                {!search && (
                  <button
                    onClick={createNote}
                    className="flex items-center gap-1.5 px-4 py-2 bg-veda-700 text-white rounded-lg text-sm font-medium hover:bg-veda-800 transition-colors"
                  >
                    <Plus size={14} /> New Note
                  </button>
                )}
              </div>
            ) : (
              filtered.map(n => (
                <NoteItem
                  key={n.id}
                  note={n}
                  active={n.id === activeId}
                  onClick={() => { setActiveId(n.id); setMobileShowEditor(true); }}
                />
              ))
            )}
          </div>
        </div>

        {/* Editor pane */}
        <div className={cn(
          'flex-1 relative bg-white dark:bg-stone-900',
          mobileShowEditor ? 'flex flex-col' : 'hidden lg:flex lg:flex-col'
        )}>
          {/* Mobile back button */}
          <button
            className="lg:hidden flex items-center gap-1 px-4 py-2 text-sm text-veda-700 dark:text-veda-400 border-b border-stone-200 dark:border-stone-800"
            onClick={() => setMobileShowEditor(false)}
          >
            <ChevronRight size={14} className="rotate-180" /> All Notes
          </button>

          {activeNote ? (
            <NoteEditor
              key={activeNote.id}
              note={activeNote}
              onSave={handleSave}
              onDelete={handleDelete}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-8">
              <FileText size={40} className="text-stone-200 dark:text-stone-800" />
              <div>
                <p className="text-base font-semibold text-stone-500 dark:text-stone-400">Select a note to edit</p>
                <p className="text-sm text-stone-400 dark:text-stone-600 mt-1">or create a new one to get started</p>
              </div>
              <button
                onClick={createNote}
                className="flex items-center gap-2 px-5 py-2.5 bg-veda-700 text-white rounded-xl text-sm font-medium hover:bg-veda-800 transition-colors"
              >
                <Plus size={15} /> New Note
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
