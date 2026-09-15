import { useState, useEffect, useCallback } from 'react';
import { useSEO } from '../hooks/useSEO';
import {
  LayoutGrid, BookOpen, HelpCircle, Download, Plus, Search,
  Pencil, Trash2, AlertTriangle, CheckCircle, ChevronDown, ChevronRight,
} from 'lucide-react';
import { studioDB, type DraftTopic, type DraftQuestion } from '../db/studio';
import {
  subjectRepo, topicRepo, questionRepo,
} from '../repositories';
import { TopicEditor } from '../components/studio/TopicEditor';
import { QuestionEditor } from '../components/studio/QuestionEditor';
import { Button, Badge, Card, Spinner } from '../components/ui';
import { cn } from '../utils/cn';

type Tab = 'overview' | 'topics' | 'questions' | 'export';

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_]+/g, '-').replace(/^-+|-+$/g, '');
}

export function ContentStudio() {
  useSEO('Content Studio', 'Create, edit, and export topics and questions for the VEDA knowledge platform.');
  const [tab, setTab] = useState<Tab>('overview');
  const [draftTopics, setDraftTopics] = useState<DraftTopic[]>([]);
  const [draftQuestions, setDraftQuestions] = useState<DraftQuestion[]>([]);
  const [loading, setLoading] = useState(true);

  // Topic panel state
  const [topicPanel, setTopicPanel] = useState<{ mode: 'create' } | { mode: 'edit'; draft: DraftTopic } | null>(null);
  const [topicSearch, setTopicSearch] = useState('');

  // Question panel state
  const [questionPanel, setQuestionPanel] = useState<{ mode: 'create'; topicId?: string } | { mode: 'edit'; draft: DraftQuestion } | null>(null);
  const [qFilterTopic, setQFilterTopic] = useState('');

  const allSeededTopics = topicRepo.getAll();
  const allSeededQuestions = questionRepo.getAll();
  const allSubjects = subjectRepo.getAll();

  const reload = useCallback(async () => {
    setLoading(true);
    const [dt, dq] = await Promise.all([
      studioDB.getAllTopicDrafts(),
      studioDB.getAllQuestionDrafts(),
    ]);
    setDraftTopics(dt);
    setDraftQuestions(dq);
    setLoading(false);
  }, []);

  useEffect(() => { reload(); }, [reload]);

  // ── Handlers ──────────────────────────────────────────────────────────

  async function handleSaveTopic(draft: DraftTopic) {
    await studioDB.saveTopicDraft(draft);
    setTopicPanel(null);
    reload();
  }

  async function handleDeleteTopic(id: string) {
    await studioDB.deleteTopicDraft(id);
    reload();
  }

  async function handleSaveQuestion(draft: DraftQuestion) {
    await studioDB.saveQuestionDraft(draft);
    setQuestionPanel(null);
    reload();
  }

  async function handleDeleteQuestion(id: string) {
    await studioDB.deleteQuestionDraft(id);
    reload();
  }

  // ── Export ────────────────────────────────────────────────────────────

  function downloadJSON(filename: string, data: unknown) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  function exportTopics() {
    const seeded = allSeededTopics.map(t => ({ ...t }));
    const draftMap = new Map(draftTopics.map(d => [d.id, d]));
    const merged = seeded.map(t => {
      const d = draftMap.get(t.id);
      if (d) { const { _draft, _savedAt, ...clean } = d; return clean; }
      return t;
    });
    const newDrafts = draftTopics
      .filter(d => !allSeededTopics.find(t => t.id === d.id))
      .map(({ _draft, _savedAt, ...clean }) => clean);
    downloadJSON('topics.json', [...merged, ...newDrafts]);
  }

  function exportQuestions() {
    const seeded = allSeededQuestions.map(q => ({ ...q }));
    const draftMap = new Map(draftQuestions.map(d => [d.id, d]));
    const merged = seeded.map(q => {
      const d = draftMap.get(q.id);
      if (d) { const { _draft, _savedAt, ...clean } = d; return clean; }
      return q;
    });
    const newDrafts = draftQuestions
      .filter(d => !allSeededQuestions.find(q => q.id === d.id))
      .map(({ _draft, _savedAt, ...clean }) => clean);
    downloadJSON('questions.json', [...merged, ...newDrafts]);
  }

  // ── Derived data ──────────────────────────────────────────────────────

  const filteredTopics = [...allSeededTopics, ...draftTopics.filter(d => !allSeededTopics.find(t => t.id === d.id))].filter(t =>
    !topicSearch || t.title.toLowerCase().includes(topicSearch.toLowerCase())
  );

  const allQuestionsForList = [...allSeededQuestions, ...draftQuestions.filter(d => !allSeededQuestions.find(q => q.id === d.id))];
  const filteredQuestions = qFilterTopic
    ? allQuestionsForList.filter(q => q.topicIds.includes(qFilterTopic))
    : allQuestionsForList;

  const draftTopicIds = new Set(draftTopics.map(d => d.id));
  const draftQuestionIds = new Set(draftQuestions.map(d => d.id));

  // Health warnings
  const topicsWithoutQuestions = allSeededTopics.filter(t =>
    !allSeededQuestions.some(q => q.topicIds.includes(t.id)) &&
    !draftQuestions.some(q => q.topicIds.includes(t.id))
  );
  const topicsWithFewConcepts = allSeededTopics.filter(t => (t.keyConcepts?.length ?? 0) < 2);

  // Coverage by subject
  const subjectCoverage = allSubjects.map(s => {
    const sTopics = allSeededTopics.filter(t => t.subjectIds.includes(s.id));
    const sQuestions = allSeededQuestions.filter(q => q.subjectIds.includes(s.id));
    const sDraftQ = draftQuestions.filter(q => q.subjectIds.includes(s.id));
    return { subject: s, topicCount: sTopics.length, questionCount: sQuestions.length + sDraftQ.length };
  });

  // ── Tab bar ───────────────────────────────────────────────────────────

  const TABS: { id: Tab; label: string; icon: typeof LayoutGrid }[] = [
    { id: 'overview', label: 'Overview', icon: LayoutGrid },
    { id: 'topics', label: 'Topics', icon: BookOpen },
    { id: 'questions', label: 'Questions', icon: HelpCircle },
    { id: 'export', label: 'Export', icon: Download },
  ];

  const inputCls = 'w-full px-3 py-2 rounded border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-veda-500';

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Content Studio</h1>
          <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">Create, review, and export topics and questions for VEDA.</p>
        </div>
      </div>

      {/* Tab bar */}
      <div className="flex gap-1 border-b border-stone-200 dark:border-stone-800">
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={cn(
              'flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors',
              tab === id
                ? 'border-veda-700 dark:border-veda-400 text-veda-700 dark:text-veda-400'
                : 'border-transparent text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300'
            )}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center py-12"><Spinner size="lg" /></div>
      ) : (
        <>
          {/* ── OVERVIEW ── */}
          {tab === 'overview' && (
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Subjects', value: allSubjects.length, color: 'text-veda-700 dark:text-veda-400' },
                  { label: 'Topics', value: allSeededTopics.length + draftTopics.filter(d => !allSeededTopics.find(t => t.id === d.id)).length, color: 'text-blue-700 dark:text-blue-400' },
                  { label: 'Resources', value: '—', color: 'text-stone-500' },
                  { label: 'Questions', value: allSeededQuestions.length + draftQuestions.filter(d => !allSeededQuestions.find(q => q.id === d.id)).length, color: 'text-amber-700 dark:text-amber-400' },
                ].map(({ label, value, color }) => (
                  <Card key={label} className="p-4 text-center">
                    <div className={cn('text-3xl font-bold', color)}>{value}</div>
                    <div className="text-xs text-stone-500 dark:text-stone-400 mt-1">{label}</div>
                  </Card>
                ))}
              </div>

              {/* Health */}
              <div>
                <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3">Content Health</h2>
                <div className="space-y-2">
                  {topicsWithoutQuestions.length === 0 ? (
                    <div className="flex items-center gap-2 text-sm text-green-700 dark:text-green-400">
                      <CheckCircle size={14} /> All topics have at least one question.
                    </div>
                  ) : (
                    <div className="rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-3">
                      <div className="flex items-center gap-2 text-sm font-medium text-amber-800 dark:text-amber-400 mb-1">
                        <AlertTriangle size={13} /> {topicsWithoutQuestions.length} topic(s) have no questions
                      </div>
                      <p className="text-xs text-amber-700 dark:text-amber-500">
                        {topicsWithoutQuestions.slice(0, 5).map(t => t.title).join(', ')}
                        {topicsWithoutQuestions.length > 5 ? ` +${topicsWithoutQuestions.length - 5} more` : ''}
                      </p>
                    </div>
                  )}
                  {topicsWithFewConcepts.length > 0 && (
                    <div className="rounded-lg bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700 p-3">
                      <div className="flex items-center gap-2 text-sm font-medium text-stone-700 dark:text-stone-300 mb-1">
                        <AlertTriangle size={13} /> {topicsWithFewConcepts.length} topic(s) have fewer than 2 key concepts
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Subject coverage */}
              <div>
                <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 mb-3">Coverage by Subject</h2>
                <div className="rounded-lg border border-stone-200 dark:border-stone-800 overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-stone-50 dark:bg-stone-800/60 border-b border-stone-200 dark:border-stone-700">
                        <th className="text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-stone-500">Subject</th>
                        <th className="text-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-stone-500">Topics</th>
                        <th className="text-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-stone-500">Questions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subjectCoverage.map(({ subject, topicCount, questionCount }, i) => (
                        <tr key={subject.id} className={cn(
                          'border-b border-stone-100 dark:border-stone-800 last:border-0',
                          i % 2 === 0 ? '' : 'bg-stone-50/50 dark:bg-stone-800/20'
                        )}>
                          <td className="px-4 py-2.5 text-stone-800 dark:text-stone-200 font-medium">{subject.title}</td>
                          <td className="px-4 py-2.5 text-center text-stone-600 dark:text-stone-400">{topicCount}</td>
                          <td className="px-4 py-2.5 text-center">
                            <span className={cn(
                              'font-medium',
                              questionCount === 0 ? 'text-red-600 dark:text-red-400' : questionCount < 5 ? 'text-amber-600 dark:text-amber-400' : 'text-green-700 dark:text-green-400'
                            )}>{questionCount}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ── TOPICS ── */}
          {tab === 'topics' && (
            <div className={cn('flex gap-4', topicPanel ? 'flex-col lg:flex-row' : '')}>
              {/* List */}
              <div className={cn('space-y-3 min-w-0', topicPanel ? 'lg:w-[45%] flex-shrink-0' : 'w-full')}>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-400" />
                    <input
                      className={cn(inputCls, 'pl-8')}
                      placeholder="Search topics…"
                      value={topicSearch}
                      onChange={e => setTopicSearch(e.target.value)}
                    />
                  </div>
                  <Button variant="primary" size="sm" onClick={() => setTopicPanel({ mode: 'create' })}>
                    <Plus size={13} /> New
                  </Button>
                </div>

                <div className="space-y-1.5">
                  {filteredTopics.map(t => {
                    const isDraft = draftTopicIds.has(t.id);
                    const isNew = isDraft && !allSeededTopics.find(s => s.id === t.id);
                    const draft = draftTopics.find(d => d.id === t.id);
                    return (
                      <div key={t.id} className="flex items-center gap-2 rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 px-3 py-2.5">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-stone-800 dark:text-stone-200 truncate">{t.title}</span>
                            <span className={cn(
                              'text-xs px-1.5 py-0.5 rounded-full font-medium flex-shrink-0',
                              isNew ? 'bg-veda-100 text-veda-700 dark:bg-veda-900/30 dark:text-veda-400' :
                              isDraft ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400' :
                              'bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400'
                            )}>
                              {isNew ? 'New draft' : isDraft ? 'Edited' : 'Seeded'}
                            </span>
                          </div>
                          <p className="text-xs text-stone-500 dark:text-stone-400 truncate mt-0.5">{t.description}</p>
                        </div>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <button
                            onClick={() => setTopicPanel({ mode: 'edit', draft: draft ?? { ...t, _draft: true, _savedAt: new Date().toISOString() } as DraftTopic })}
                            className="p-1.5 rounded text-stone-400 hover:text-veda-700 dark:hover:text-veda-400 hover:bg-stone-100 dark:hover:bg-stone-800"
                            title="Edit"
                          >
                            <Pencil size={13} />
                          </button>
                          {isDraft && (
                            <button
                              onClick={() => handleDeleteTopic(t.id)}
                              className="p-1.5 rounded text-stone-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                              title="Discard draft"
                            >
                              <Trash2 size={13} />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                  {filteredTopics.length === 0 && (
                    <p className="text-sm text-stone-400 text-center py-8">No topics match your search.</p>
                  )}
                </div>
              </div>

              {/* Editor panel */}
              {topicPanel && (
                <div className="flex-1 min-w-0 bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-800 p-4 overflow-y-auto max-h-[75vh]">
                  <TopicEditor
                    initial={topicPanel.mode === 'edit' ? topicPanel.draft : undefined}
                    onSave={handleSaveTopic}
                    onCancel={() => setTopicPanel(null)}
                  />
                </div>
              )}
            </div>
          )}

          {/* ── QUESTIONS ── */}
          {tab === 'questions' && (
            <div className={cn('flex gap-4', questionPanel ? 'flex-col lg:flex-row' : '')}>
              <div className={cn('space-y-3 min-w-0', questionPanel ? 'lg:w-[45%] flex-shrink-0' : 'w-full')}>
                <div className="flex items-center gap-2 flex-wrap">
                  <select
                    className={cn(inputCls, 'flex-1 min-w-[180px]')}
                    value={qFilterTopic}
                    onChange={e => setQFilterTopic(e.target.value)}
                  >
                    <option value="">All topics</option>
                    {allSeededTopics.map(t => <option key={t.id} value={t.id}>{t.title}</option>)}
                  </select>
                  <Button variant="primary" size="sm" onClick={() => setQuestionPanel({ mode: 'create', topicId: qFilterTopic || undefined })}>
                    <Plus size={13} /> New
                  </Button>
                </div>

                <div className="space-y-1.5">
                  {filteredQuestions.map(q => {
                    const isDraft = draftQuestionIds.has(q.id);
                    const isNew = isDraft && !allSeededQuestions.find(s => s.id === q.id);
                    const draft = draftQuestions.find(d => d.id === q.id);
                    const topic = topicRepo.getById(q.topicIds[0] ?? '');
                    return (
                      <div key={q.id} className="flex items-start gap-2 rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 px-3 py-2.5">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className={cn(
                              'text-xs px-1.5 py-0.5 rounded-full font-medium flex-shrink-0',
                              isNew ? 'bg-veda-100 text-veda-700 dark:bg-veda-900/30 dark:text-veda-400' :
                              isDraft ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400' :
                              'bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400'
                            )}>
                              {isNew ? 'New' : isDraft ? 'Edited' : 'Seeded'}
                            </span>
                            {topic && <span className="text-xs text-stone-400 dark:text-stone-500 truncate">{topic.title}</span>}
                          </div>
                          <p className="text-sm text-stone-800 dark:text-stone-200 line-clamp-2">{q.text}</p>
                        </div>
                        <div className="flex items-center gap-1 flex-shrink-0 pt-0.5">
                          <button
                            onClick={() => setQuestionPanel({ mode: 'edit', draft: draft ?? { ...q, _draft: true, _savedAt: new Date().toISOString() } as DraftQuestion })}
                            className="p-1.5 rounded text-stone-400 hover:text-veda-700 dark:hover:text-veda-400 hover:bg-stone-100 dark:hover:bg-stone-800"
                            title="Edit"
                          >
                            <Pencil size={13} />
                          </button>
                          {isDraft && (
                            <button
                              onClick={() => handleDeleteQuestion(q.id)}
                              className="p-1.5 rounded text-stone-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                              title="Discard draft"
                            >
                              <Trash2 size={13} />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                  {filteredQuestions.length === 0 && (
                    <p className="text-sm text-stone-400 text-center py-8">No questions yet.</p>
                  )}
                </div>
              </div>

              {/* Editor panel */}
              {questionPanel && (
                <div className="flex-1 min-w-0 bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-800 p-4 overflow-y-auto max-h-[75vh]">
                  <QuestionEditor
                    initial={questionPanel.mode === 'edit' ? questionPanel.draft : undefined}
                    defaultTopicId={questionPanel.mode === 'create' ? questionPanel.topicId : undefined}
                    onSave={handleSaveQuestion}
                    onCancel={() => setQuestionPanel(null)}
                  />
                </div>
              )}
            </div>
          )}

          {/* ── EXPORT ── */}
          {tab === 'export' && (
            <div className="space-y-4 max-w-xl">
              <p className="text-sm text-stone-600 dark:text-stone-400">
                Download the merged JSON files — seed data plus any drafts you have saved — ready to replace the source files in <code className="text-xs bg-stone-100 dark:bg-stone-800 px-1 py-0.5 rounded">src/data/</code>.
              </p>

              <div className="space-y-3">
                <Card className="p-5 flex items-center justify-between">
                  <div>
                    <div className="font-medium text-stone-800 dark:text-stone-200">topics.json</div>
                    <div className="text-xs text-stone-500 mt-0.5">
                      {allSeededTopics.length} seeded + {draftTopics.filter(d => !allSeededTopics.find(t => t.id === d.id)).length} new drafts + {draftTopics.filter(d => allSeededTopics.find(t => t.id === d.id)).length} edits
                    </div>
                  </div>
                  <Button variant="outline" size="sm" onClick={exportTopics}>
                    <Download size={13} /> Download
                  </Button>
                </Card>

                <Card className="p-5 flex items-center justify-between">
                  <div>
                    <div className="font-medium text-stone-800 dark:text-stone-200">questions.json</div>
                    <div className="text-xs text-stone-500 mt-0.5">
                      {allSeededQuestions.length} seeded + {draftQuestions.filter(d => !allSeededQuestions.find(q => q.id === d.id)).length} new drafts + {draftQuestions.filter(d => allSeededQuestions.find(q => q.id === d.id)).length} edits
                    </div>
                  </div>
                  <Button variant="outline" size="sm" onClick={exportQuestions}>
                    <Download size={13} /> Download
                  </Button>
                </Card>
              </div>

              <div className="rounded-lg bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700 p-4">
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  After downloading, replace the corresponding files in <code className="bg-stone-100 dark:bg-stone-700 px-1 rounded">public/data/</code> or <code className="bg-stone-100 dark:bg-stone-700 px-1 rounded">src/data/</code> and rebuild. Drafts in the browser are not cleared by this action.
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
