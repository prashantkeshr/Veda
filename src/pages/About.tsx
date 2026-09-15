import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import {
  BookOpen, Hash, GraduationCap, ClipboardList, Route,
  Map, ClipboardCheck, Layers, Calculator, Zap, Target,
  ArrowRight, Mail, Shield,
} from 'lucide-react';
import { subjectRepo, topicRepo, resourceRepo, examRepo, questionRepo, courseRepo } from '../repositories';
import { cn } from '../utils/cn';

const stats = [
  { label: 'Subjects',  value: subjectRepo.count()  },
  { label: 'Topics',    value: topicRepo.count()     },
  { label: 'Courses',   value: courseRepo.count()    },
  { label: 'Exams',     value: examRepo.count()      },
  { label: 'Questions', value: questionRepo.count()  },
  { label: 'Resources', value: resourceRepo.count()  },
];

const entities = [
  {
    icon: BookOpen,
    color: 'bg-veda-50 text-veda-700 dark:bg-veda-900/30 dark:text-veda-400',
    name: 'Subjects',
    desc: 'Broad academic disciplines — Engineering Mathematics, Thermodynamics, Fluid Mechanics, and more. Each subject anchors a cluster of related topics and maps to degree programmes and exams.',
  },
  {
    icon: Hash,
    color: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    name: 'Topics',
    desc: 'Focused learning units within a subject — Differential Calculus, First Law of Thermodynamics, Bernoulli Equation. Each topic carries an overview, key concepts, estimated study time, and difficulty rating.',
  },
  {
    icon: GraduationCap,
    color: 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    name: 'Courses',
    desc: 'Structured degree and preparation programmes (B.Tech ME/CE, Diploma, GATE prep) that organise topics into semesters. Each course links to the exams it prepares you for.',
  },
  {
    icon: ClipboardList,
    color: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    name: 'Exams',
    desc: 'Competitive and university exams — GATE, JEE, UPSC-ESE. Each exam page surfaces its syllabus, eligibility, conducting body, and the topics most relevant to it.',
  },
  {
    icon: Route,
    color: 'bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
    name: 'Learning Paths',
    desc: 'Curated step-by-step sequences for a specific goal — "GATE ME Complete Prep", "Thermodynamics Mastery". Paths sequence topics, resources, and practice checkpoints in the right order.',
  },
];

const tools = [
  { icon: ClipboardCheck, label: 'Practice Quiz',    to: '/quiz',          desc: 'Timed MCQ sessions drawn from the question bank, subject-filtered.' },
  { icon: Layers,          label: 'Flashcards',       to: '/flashcards',    desc: 'Spaced-repetition card decks auto-generated from your bookmarked topics.' },
  { icon: Calculator,      label: 'Formula Sheet',    to: '/formula-sheet', desc: 'All key engineering formulae in one printable, searchable reference.' },
  { icon: Map,             label: 'Knowledge Map',    to: '/knowledge-map', desc: 'Visual graph of how subjects, topics, and courses connect to each other.' },
  { icon: Zap,             label: 'Quick Revision',   to: '/revision',      desc: 'Bite-sized concept cards for last-minute exam revision.' },
  { icon: Target,          label: 'Exam Readiness',   to: '/exam-readiness',desc: 'Progress tracker showing how ready you are for your target exam.' },
];

export function About() {
  useSEO('About VEDA', 'Learn about VEDA — Vital Education & Data Archive, a free engineering and competitive exam knowledge platform by the Virtual Education Development Association, an initiative of Dhurta.Org.');

  return (
    <div className="max-w-4xl mx-auto space-y-16 pb-8">

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="text-center pt-4">
        <div className="flex justify-center mb-6">
          <img
            src="/Veda/veda-logo.png"
            alt="VEDA"
            className="w-24 h-24 rounded-3xl object-cover shadow-lg"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-stone-900 dark:text-stone-100 tracking-tight">
          Vital Education &amp; Data Archive
        </h1>
        <p className="mt-3 text-lg text-stone-500 dark:text-stone-400 max-w-xl mx-auto leading-relaxed">
          A free, connected knowledge platform for engineering students and competitive exam aspirants.
        </p>
        <p className="mt-2 text-sm text-stone-400 dark:text-stone-600">
          By the <strong className="text-stone-500 dark:text-stone-500">Virtual Education Development Association</strong>
          {' '}· An initiative of{' '}
          <strong className="text-stone-500 dark:text-stone-500">Dhurta.Org</strong>
        </p>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────── */}
      <section>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-4 text-center"
            >
              <div className="text-2xl font-black text-veda-700 dark:text-veda-400 tabular-nums">{value}</div>
              <div className="text-xs text-stone-500 dark:text-stone-500 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mission ───────────────────────────────────────────────────── */}
      <section className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-8">
        <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-4">Our Mission</h2>
        <div className="space-y-3 text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
          <p>
            Engineering education in India produces hundreds of thousands of graduates every year, yet
            structured, freely accessible and interconnected study material remains hard to find. Textbooks
            are siloed, YouTube playlists are unstructured, and exam-specific resources ignore the broader
            academic context.
          </p>
          <p>
            VEDA exists to change that. We build a <strong className="text-stone-800 dark:text-stone-200">living knowledge graph</strong> —
            where every subject, topic, course, exam, and resource is explicitly linked to everything it
            relates to. A student preparing for GATE can navigate from the exam syllabus to each topic,
            from a topic to its prerequisite concepts, from a concept to its formulae and practice questions,
            without ever leaving a coherent structure.
          </p>
          <p>
            Every feature on this platform — the quiz engine, flashcard system, formula sheet, learning
            paths, knowledge map — is built around the same underlying data model. It is free, it has no
            advertisements, and it never collects your personal data.
          </p>
        </div>
      </section>

      {/* ── Knowledge model ───────────────────────────────────────────── */}
      <section>
        <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">How the Platform is Organised</h2>
        <p className="text-sm text-stone-500 dark:text-stone-400 mb-6">
          Everything on VEDA is one of five entity types, all linked together:
        </p>
        <div className="space-y-3">
          {entities.map(({ icon: Icon, color, name, desc }) => (
            <div
              key={name}
              className="flex gap-4 items-start bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-5"
            >
              <div className={cn('w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0', color)}>
                <Icon size={16} />
              </div>
              <div>
                <div className="font-semibold text-stone-800 dark:text-stone-200 text-sm">{name}</div>
                <div className="text-sm text-stone-500 dark:text-stone-400 mt-0.5 leading-relaxed">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Study tools ───────────────────────────────────────────────── */}
      <section>
        <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">Built-in Study Tools</h2>
        <p className="text-sm text-stone-500 dark:text-stone-400 mb-6">
          Beyond browsing — tools that turn knowledge into exam readiness:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {tools.map(({ icon: Icon, label, to, desc }) => (
            <Link
              key={to}
              to={to}
              className="flex gap-3 items-start bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-4 hover:border-veda-300 dark:hover:border-veda-700 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-veda-50 dark:bg-veda-900/30 flex items-center justify-center flex-shrink-0 text-veda-700 dark:text-veda-400">
                <Icon size={15} />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-stone-800 dark:text-stone-200 text-sm group-hover:text-veda-700 dark:group-hover:text-veda-300 transition-colors">
                  {label} <ArrowRight size={11} className="inline opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 leading-relaxed">{desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Organisation ──────────────────────────────────────────────── */}
      <section className="bg-stone-900 dark:bg-stone-900 rounded-2xl p-8 text-center border border-stone-800">
        <img src="/Veda/veda-logo.png" alt="VEDA" className="w-14 h-14 rounded-2xl mx-auto mb-4 object-cover" />
        <h2 className="text-lg font-bold text-stone-100 mb-1">Virtual Education Development Association</h2>
        <p className="text-sm text-stone-400 mb-4">An educational initiative of Dhurta.Org</p>
        <p className="text-sm text-stone-500 leading-relaxed max-w-md mx-auto">
          VEDA is built and maintained voluntarily by contributors at the Virtual Education Development
          Association. Content, platform code, and data are continuously improved. If you find an error,
          want to contribute content, or have a question, reach out.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-veda-600 hover:bg-veda-700 text-white text-sm font-medium transition-colors"
          >
            <Mail size={14} /> Contact Us
          </Link>
          <Link
            to="/legal"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-stone-700 text-stone-300 hover:bg-stone-800 text-sm font-medium transition-colors"
          >
            <Shield size={14} /> Legal &amp; Policies
          </Link>
        </div>
      </section>

    </div>
  );
}
