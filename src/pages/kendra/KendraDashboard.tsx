import { BookOpen, Layers, HelpCircle, FileStack, GraduationCap, Construction } from 'lucide-react';
import { subjectRepo, topicRepo, resourceRepo, examRepo, questionRepo } from '../../repositories';

const STATS = [
  { icon: BookOpen,      label: 'Subjects',   value: subjectRepo.count()  },
  { icon: Layers,        label: 'Topics',     value: topicRepo.count()    },
  { icon: HelpCircle,    label: 'Questions',  value: questionRepo.count() },
  { icon: FileStack,     label: 'Resources',  value: resourceRepo.count() },
  { icon: GraduationCap, label: 'Exams',      value: examRepo.count()     },
];

export function KendraDashboard() {
  return (
    <div className="space-y-6 max-w-3xl">

      <div>
        <h2 className="text-lg font-bold text-stone-100">Dashboard</h2>
        <p className="text-sm text-stone-500 mt-0.5">VEDA content at a glance</p>
      </div>

      {/* Stat tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {STATS.map(({ icon: Icon, label, value }) => (
          <div key={label} className="bg-stone-900 border border-stone-800 rounded-xl p-4">
            <Icon size={16} className="text-veda-400 mb-2" />
            <div className="text-2xl font-bold text-stone-100 tabular-nums">{value}</div>
            <div className="text-xs text-stone-500 mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* Phase 24 coming-next notice */}
      <div className="bg-stone-900 border border-dashed border-stone-700 rounded-xl p-6 flex items-start gap-4">
        <Construction size={20} className="text-amber-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-stone-200">Phase 24 — Full Dashboard coming next</p>
          <p className="text-sm text-stone-500 mt-1 leading-relaxed">
            Content health indicators, topic coverage heatmap, and quick-action shortcuts will be added
            in the next build phase. The gate and session auth from Phase 23 are fully operational.
          </p>
        </div>
      </div>

    </div>
  );
}
