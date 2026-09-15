import { useMemo } from 'react';
import type { JSX } from 'react';
import {
  BookOpen, Layers, HelpCircle, FileStack, GraduationCap,
  CheckCircle2, AlertTriangle, XCircle, Clock, Activity,
} from 'lucide-react';
import { subjectRepo, topicRepo, resourceRepo, examRepo, questionRepo } from '../../repositories';

// ── Stat tiles ─────────────────────────────────────────────────────────

const STATS = [
  { icon: BookOpen,       label: 'Subjects',  value: subjectRepo.count()  },
  { icon: Layers,         label: 'Topics',    value: topicRepo.count()    },
  { icon: HelpCircle,     label: 'Questions', value: questionRepo.count() },
  { icon: FileStack,      label: 'Resources', value: resourceRepo.count() },
  { icon: GraduationCap,  label: 'Exams',     value: examRepo.count()     },
];

// ── Health check helpers ───────────────────────────────────────────────

type Sev = 'ok' | 'warn' | 'critical';

function sev(count: number, warnAt: number, critAt: number): Sev {
  if (count >= critAt)  return 'critical';
  if (count >= warnAt)  return 'warn';
  return 'ok';
}

const SEV_ICON: Record<Sev, JSX.Element> = {
  ok:       <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />,
  warn:     <AlertTriangle size={14} className="text-amber-400 flex-shrink-0" />,
  critical: <XCircle size={14} className="text-red-400 flex-shrink-0" />,
};

const SEV_BADGE: Record<Sev, string> = {
  ok:       'bg-emerald-900/40 text-emerald-300',
  warn:     'bg-amber-900/40 text-amber-300',
  critical: 'bg-red-900/40 text-red-300',
};

// ── Dashboard ──────────────────────────────────────────────────────────

export function KendraDashboard() {
  const health = useMemo(() => {
    const allTopics    = topicRepo.getAll();
    const allSubjects  = subjectRepo.getAll();
    const allQuestions = questionRepo.getAll();
    const allResources = resourceRepo.getAll();

    const topicsWithQs = new Set(allQuestions.flatMap(q => q.topicIds));

    const noDesc       = allTopics.filter(t => t.description.trim().length < 20);
    const noOverview   = allTopics.filter(t => t.overview.trim().length < 20);
    const noQs         = allTopics.filter(t => !topicsWithQs.has(t.id));
    const noConcepts   = allTopics.filter(t => t.keyConcepts.length === 0);
    const orphanSubj   = allSubjects.filter(s => s.topicIds.length === 0);
    const unpublished  = allResources.filter(r => r.contentStatus !== 'published');
    const mcqNoAnswer  = allQuestions.filter(q => q.type === 'mcq' && q.correctIndex === undefined);
    const noExplain    = allQuestions.filter(q => !q.explanation || q.explanation.trim().length < 5);

    return [
      { label: 'Topics missing description',   count: noDesc.length,      s: sev(noDesc.length,      1,  3) },
      { label: 'Topics missing overview',       count: noOverview.length,  s: sev(noOverview.length,  1,  5) },
      { label: 'Topics with no questions',      count: noQs.length,        s: sev(noQs.length,        3, 10) },
      { label: 'Topics with no key concepts',  count: noConcepts.length,  s: sev(noConcepts.length,  1,  5) },
      { label: 'Subjects with no topics',      count: orphanSubj.length,  s: sev(orphanSubj.length,  1,  3) },
      { label: 'Resources not published',      count: unpublished.length, s: sev(unpublished.length, 1,  5) },
      { label: 'MCQ questions missing answer', count: mcqNoAnswer.length, s: sev(mcqNoAnswer.length, 1,  1) },
      { label: 'Questions missing explanation',count: noExplain.length,   s: sev(noExplain.length,   1,  3) },
    ];
  }, []);

  const recentTopics = useMemo(() =>
    [...topicRepo.getAll()]
      .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
      .slice(0, 6),
    []
  );

  const issueCount    = health.filter(h => h.s !== 'ok').length;
  const criticalCount = health.filter(h => h.s === 'critical').length;

  const today = new Date().toLocaleDateString('en-IN', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  return (
    <div className="space-y-6 max-w-4xl">

      {/* Page header */}
      <div>
        <h2 className="text-lg font-bold text-stone-100">Dashboard</h2>
        <p className="text-sm text-stone-500 mt-0.5">VEDA content overview · {today}</p>
      </div>

      {/* ── Stat tiles ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {STATS.map(({ icon: Icon, label, value }) => (
          <div key={label} className="bg-stone-900 border border-stone-800 rounded-xl p-4">
            <Icon size={16} className="text-veda-400 mb-2" />
            <div className="text-2xl font-bold text-stone-100 tabular-nums">{value}</div>
            <div className="text-xs text-stone-500 mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* ── Content health ── */}
      <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-stone-800">
          <div className="flex items-center gap-2">
            <Activity size={15} className="text-veda-400" />
            <span className="text-sm font-semibold text-stone-200">Content Health</span>
          </div>
          <span className={[
            'text-xs font-medium',
            criticalCount > 0 ? 'text-red-400' :
            issueCount    > 0 ? 'text-amber-400' :
                                'text-emerald-400',
          ].join(' ')}>
            {criticalCount > 0
              ? `${criticalCount} critical issue${criticalCount > 1 ? 's' : ''}`
              : issueCount > 0
              ? `${issueCount} item${issueCount > 1 ? 's' : ''} to review`
              : 'All checks passed'}
          </span>
        </div>

        {/* Rows */}
        <div className="divide-y divide-stone-800/60">
          {health.map(({ label, count, s }) => (
            <div key={label} className="flex items-center justify-between px-5 py-3 hover:bg-stone-800/30 transition-colors">
              <div className="flex items-center gap-2.5 min-w-0">
                {SEV_ICON[s]}
                <span className="text-sm text-stone-300 truncate">{label}</span>
              </div>
              <span className={[
                'ml-4 flex-shrink-0 inline-flex items-center px-2 py-0.5 rounded-md text-xs font-mono font-semibold',
                SEV_BADGE[s],
              ].join(' ')}>
                {count}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* ── Recent topic updates ── */}
      <div className="bg-stone-900 border border-stone-800 rounded-xl overflow-hidden">

        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-stone-800">
          <Clock size={15} className="text-veda-400" />
          <span className="text-sm font-semibold text-stone-200">Recently Updated Topics</span>
        </div>

        <div className="divide-y divide-stone-800/60">
          {recentTopics.map(t => (
            <div key={t.id} className="flex items-start justify-between px-5 py-3 hover:bg-stone-800/30 transition-colors">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-stone-200 truncate">{t.title}</p>
                <p className="text-xs text-stone-500 mt-0.5 truncate leading-relaxed">
                  {t.description.length > 90
                    ? t.description.slice(0, 90) + '…'
                    : t.description}
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 text-right">
                <span className="text-xs text-stone-600 tabular-nums">
                  {new Date(t.updatedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                </span>
                <p className="text-[10px] text-stone-700 capitalize mt-0.5">{t.difficulty}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
