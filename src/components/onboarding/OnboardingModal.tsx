import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, BookOpen, CalendarDays, Layers, Zap, Target, ChevronRight, CheckCircle2 } from 'lucide-react';

const STORAGE_KEY = 'veda-onboarded';
const EXAM_KEY    = 'veda-target-exam';

type ExamOption = {
  id:         string;
  slug:       string;
  shortTitle: string;
  title:      string;
  color:      string;
};

const EXAMS: ExamOption[] = [
  { id: 'veda-exam-gate-me',       slug: 'gate-mechanical-engineering',           shortTitle: 'GATE ME',       title: 'GATE Mechanical Engineering',        color: 'bg-veda-50  text-veda-700  dark:bg-veda-900/30  dark:text-veda-300  ring-veda-300  dark:ring-veda-700' },
  { id: 'veda-exam-gate-ce',       slug: 'gate-civil-engineering',                shortTitle: 'GATE CE',       title: 'GATE Civil Engineering',             color: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 ring-emerald-300 dark:ring-emerald-700' },
  { id: 'veda-exam-jee-main',      slug: 'jee-main',                              shortTitle: 'JEE Main',      title: 'JEE Main',                           color: 'bg-amber-50  text-amber-700  dark:bg-amber-900/30  dark:text-amber-300  ring-amber-300  dark:ring-amber-700' },
  { id: 'veda-exam-jee-advanced',  slug: 'jee-advanced',                          shortTitle: 'JEE Advanced',  title: 'JEE Advanced',                       color: 'bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 ring-orange-300 dark:ring-orange-700' },
  { id: 'veda-exam-upsc-ese-me',   slug: 'upsc-engineering-services-mechanical',  shortTitle: 'ESE / IES ME',  title: 'UPSC Engineering Services (Mech.)',   color: 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 ring-purple-300 dark:ring-purple-700' },
];

function getStartedLinks(examSlug: string | null) {
  const base = [
    { to: '/planner',   icon: CalendarDays, label: 'Plan your week',       desc: 'Schedule topics day by day' },
    { to: '/flashcards', icon: Layers,      label: 'Flashcard decks',       desc: 'Rapid-fire concept recall'  },
    { to: '/revision',  icon: Zap,          label: 'Quick Revision',        desc: 'Slide through key concepts' },
  ];
  if (examSlug) {
    return [
      { to: `/exams/${examSlug}`, icon: Target, label: 'Exam Readiness', desc: 'See your readiness score' },
      ...base,
    ];
  }
  return [{ to: '/subjects', icon: BookOpen, label: 'Browse Subjects', desc: 'Start with the knowledge base' }, ...base];
}

export function useOnboarding() {
  try {
    return localStorage.getItem(STORAGE_KEY) !== 'true';
  } catch {
    return false;
  }
}

export function OnboardingModal() {
  const [step, setStep]           = useState(0);
  const [selectedExam, setExam]   = useState<ExamOption | null>(null);
  const [visible, setVisible]     = useState(true);

  function finish(skip = false) {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
      if (!skip && selectedExam) {
        localStorage.setItem(EXAM_KEY, selectedExam.slug);
      }
    } catch { /* storage blocked */ }
    setVisible(false);
  }

  if (!visible) return null;

  const STEPS = ['Welcome', 'Your Goal', 'Get Started'];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="onboarding-title"
    >
      <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-2xl w-full max-w-lg flex flex-col overflow-hidden">

        {/* Header bar */}
        <div className="flex items-center justify-between px-6 pt-5 pb-0">
          {/* Step dots */}
          <div className="flex items-center gap-2">
            {STEPS.map((label, i) => (
              <button
                key={i}
                onClick={() => i < step && setStep(i)}
                disabled={i >= step}
                aria-label={`Step ${i + 1}: ${label}`}
                className={[
                  'h-2 rounded-full transition-all duration-200',
                  i === step ? 'w-6 bg-veda-600 dark:bg-veda-400' :
                  i < step   ? 'w-2 bg-veda-300 dark:bg-veda-700 cursor-pointer' :
                               'w-2 bg-stone-200 dark:bg-stone-700',
                ].join(' ')}
              />
            ))}
            <span className="text-xs text-stone-400 dark:text-stone-500 ml-1">{STEPS[step]}</span>
          </div>
          <button
            onClick={() => finish(true)}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            aria-label="Skip onboarding"
          >
            <X size={16} />
          </button>
        </div>

        {/* Step content */}
        <div className="px-6 py-5 flex-1">
          {step === 0 && <StepWelcome />}
          {step === 1 && <StepExam selected={selectedExam} onSelect={setExam} />}
          {step === 2 && <StepGetStarted exam={selectedExam} onFinish={finish} />}
        </div>

        {/* Footer */}
        {step < 2 && (
          <div className="px-6 pb-5 flex items-center justify-between">
            <button
              onClick={() => finish(true)}
              className="text-sm text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
            >
              Skip
            </button>
            <button
              onClick={() => setStep(s => s + 1)}
              className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-veda-600 hover:bg-veda-700 text-white text-sm font-medium transition-colors"
            >
              {step === 0 ? 'Get Started' : selectedExam ? `Continue with ${selectedExam.shortTitle}` : 'Skip this step'}
              <ChevronRight size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Step 0: Welcome ────────────────────────────────────── */
function StepWelcome() {
  return (
    <div className="space-y-4">
      <div className="w-12 h-12 rounded-xl bg-veda-700 dark:bg-veda-600 flex items-center justify-center">
        <span className="text-white font-bold text-xl">V</span>
      </div>
      <div>
        <h2 id="onboarding-title" className="text-xl font-bold text-stone-900 dark:text-stone-100">
          Welcome to VEDA
        </h2>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
          Vital Education &amp; Data Archive — a knowledge platform built for engineering
          students preparing for GATE, JEE, ESE, and related exams.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 pt-1">
        {[
          { icon: BookOpen,    label: 'Subjects & Topics',  desc: 'Structured knowledge base' },
          { icon: Target,      label: 'Exam Readiness',     desc: 'Track your preparation'    },
          { icon: CalendarDays,label: 'Weekly Planner',     desc: 'Plan day-by-day'           },
          { icon: Zap,         label: 'Quick Revision',     desc: 'Slide through key concepts' },
        ].map(({ icon: Icon, label, desc }) => (
          <div key={label} className="flex items-start gap-2.5 p-3 rounded-lg bg-stone-50 dark:bg-stone-800">
            <Icon size={15} className="mt-0.5 text-veda-600 dark:text-veda-400 flex-shrink-0" />
            <div>
              <div className="text-xs font-semibold text-stone-800 dark:text-stone-200">{label}</div>
              <div className="text-[11px] text-stone-500 dark:text-stone-400">{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Step 1: Exam picker ────────────────────────────────── */
function StepExam({ selected, onSelect }: { selected: ExamOption | null; onSelect: (e: ExamOption | null) => void }) {
  return (
    <div className="space-y-3">
      <div>
        <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">What's your target exam?</h2>
        <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
          VEDA will highlight relevant content and track your readiness.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {EXAMS.map(exam => {
          const active = selected?.id === exam.id;
          return (
            <button
              key={exam.id}
              onClick={() => onSelect(active ? null : exam)}
              className={[
                'flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-left transition-all duration-150',
                active
                  ? 'border-veda-500 bg-veda-50 dark:bg-veda-900/20'
                  : 'border-stone-200 dark:border-stone-700 hover:border-stone-300 dark:hover:border-stone-600',
              ].join(' ')}
            >
              <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold ring-1 ring-inset ${exam.color}`}>
                {exam.shortTitle}
              </span>
              <span className="text-sm text-stone-700 dark:text-stone-300 flex-1">{exam.title}</span>
              {active && <CheckCircle2 size={16} className="text-veda-600 dark:text-veda-400 flex-shrink-0" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ── Step 2: Get started ────────────────────────────────── */
function StepGetStarted({ exam, onFinish }: { exam: ExamOption | null; onFinish: (skip?: boolean) => void }) {
  const links = getStartedLinks(exam?.slug ?? null);
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
          {exam ? `You're set for ${exam.shortTitle}` : "You're all set"}
        </h2>
        <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">
          Here's where to begin. You can explore everything from the sidebar.
        </p>
      </div>
      <div className="space-y-2">
        {links.map(({ to, icon: Icon, label, desc }) => (
          <Link
            key={to}
            to={to}
            onClick={() => onFinish()}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-veda-100 dark:bg-veda-900/40 flex items-center justify-center flex-shrink-0">
              <Icon size={15} className="text-veda-700 dark:text-veda-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-stone-800 dark:text-stone-200">{label}</div>
              <div className="text-xs text-stone-500 dark:text-stone-400">{desc}</div>
            </div>
            <ChevronRight size={14} className="text-stone-400 group-hover:text-stone-600 dark:group-hover:text-stone-300 flex-shrink-0 transition-colors" />
          </Link>
        ))}
      </div>
      <button
        onClick={() => onFinish()}
        className="w-full py-2.5 rounded-lg bg-veda-600 hover:bg-veda-700 text-white text-sm font-medium transition-colors"
      >
        Start exploring VEDA
      </button>
    </div>
  );
}
