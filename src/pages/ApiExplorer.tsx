import { useState } from 'react';
import {
  BookOpen, Hash, FileText, HelpCircle, GraduationCap, ClipboardList,
  Route, ExternalLink, Copy, Check, Code, Layers, Info,
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import {
  subjectRepo, topicRepo, resourceRepo, questionRepo,
  courseRepo, examRepo, learningPathRepo,
} from '../repositories';
import { Card, SectionHeader, Badge } from '../components/ui';
import { cn } from '../utils/cn';

const BASE = 'https://veda.dhurta.org/api/v1';
const SCHEMA_URL = `${BASE}/schema.json`;

interface Endpoint {
  entity: string;
  file: string;
  icon: typeof BookOpen;
  description: string;
  count: number;
  color: string;
}

const ENDPOINTS: Endpoint[] = [
  { entity: 'subject',       file: 'subjects.json',       icon: BookOpen,      description: 'Engineering and science subjects with topic/course/exam linkage.',     count: subjectRepo.count(),      color: 'text-veda-700 dark:text-veda-400 bg-veda-50 dark:bg-veda-900/20' },
  { entity: 'topic',         file: 'topics.json',         icon: Hash,          description: 'Atomic knowledge units with prerequisites, key concepts, and formulas.', count: topicRepo.count(),        color: 'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' },
  { entity: 'resource',      file: 'resources.json',      icon: FileText,      description: 'PDFs, videos, notes, question papers, and practice sets.',             count: resourceRepo.count(),     color: 'text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20' },
  { entity: 'question',      file: 'questions.json',      icon: HelpCircle,    description: 'MCQ and numerical questions linked to topics and exams.',              count: questionRepo.count(),     color: 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20' },
  { entity: 'course',        file: 'courses.json',        icon: GraduationCap, description: 'Degree programmes with semester-wise subject mappings.',               count: courseRepo.count(),       color: 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20' },
  { entity: 'exam',          file: 'exams.json',          icon: ClipboardList, description: 'Competitive exams (GATE, UPSC ESE) with syllabus and subject links.',  count: examRepo.count(),         color: 'text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-900/20' },
  { entity: 'learning-path', file: 'learning-paths.json', icon: Route,         description: 'Curated step sequences for structured study goals.',                  count: learningPathRepo.count(), color: 'text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20' },
];

const JS_EXAMPLE = `const res = await fetch('${BASE}/topics.json');
const { data, count, version } = await res.json();
console.log(\`\${count} topics loaded (schema v\${version})\`);
// data[0] → { id: "veda-topic-differential-calculus", title: "Differential Calculus", ... }`;

const PYTHON_EXAMPLE = `import requests

r = requests.get("${BASE}/topics.json")
payload = r.json()
print(f"{payload['count']} topics (v{payload['version']})")
# payload["data"][0]["id"] → "veda-topic-differential-calculus"`;

type Tab = 'endpoints' | 'schema' | 'usage';

export function ApiExplorer() {
  useSEO('API Explorer', 'Browse VEDA\'s open static JSON API — stable endpoints for topics, subjects, resources, questions, and more.');
  const [tab, setTab] = useState<Tab>('endpoints');
  const [copied, setCopied] = useState<string | null>(null);
  const [previews, setPreviews] = useState<Record<string, unknown[] | 'loading' | 'error'>>({});

  function copy(text: string, key: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    });
  }

  async function fetchPreview(file: string) {
    if (previews[file]) return;
    setPreviews(p => ({ ...p, [file]: 'loading' }));
    try {
      const res = await fetch(`${BASE}/${file}`);
      const json = await res.json();
      setPreviews(p => ({ ...p, [file]: (json.data ?? json).slice(0, 2) }));
    } catch {
      setPreviews(p => ({ ...p, [file]: 'error' }));
    }
  }

  const TABS: { id: Tab; label: string; icon: typeof Code }[] = [
    { id: 'endpoints', label: 'Endpoints', icon: Layers },
    { id: 'schema',    label: 'Schema',    icon: Code },
    { id: 'usage',     label: 'Usage',     icon: Info },
  ];

  const codeCls = 'font-mono text-xs bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 rounded px-1.5 py-0.5';
  const blockCls = 'rounded-lg bg-stone-950 dark:bg-stone-900 border border-stone-800 p-4 overflow-x-auto text-xs font-mono text-stone-300 leading-relaxed whitespace-pre';

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">API Explorer</h1>
        <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">
          VEDA exposes its full knowledge graph as static JSON endpoints served from GitHub Pages.
          No auth, no rate limits — open for reading.
        </p>
      </div>

      {/* Metadata strip */}
      <div className="flex flex-wrap gap-2">
        <Badge variant="default">v1.0.0</Badge>
        <Badge variant="default">CC BY-SA 4.0</Badge>
        <Badge variant="default">CORS enabled</Badge>
        <Badge variant="default">67 total records</Badge>
      </div>

      {/* Tabs */}
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
            <Icon size={14} /> {label}
          </button>
        ))}
      </div>

      {/* ── ENDPOINTS ── */}
      {tab === 'endpoints' && (
        <div className="space-y-3">
          <p className="text-xs text-stone-500 dark:text-stone-400">
            Base URL: <code className={codeCls}>{BASE}</code>
            {' — '}All responses are wrapped in an{' '}
            <code className={codeCls}>ApiResponse</code> envelope with <code className={codeCls}>$schema</code>,{' '}
            <code className={codeCls}>version</code>, <code className={codeCls}>count</code>, and <code className={codeCls}>data</code>.
          </p>

          {ENDPOINTS.map(ep => {
            const url = `${BASE}/${ep.file}`;
            const preview = previews[ep.file];
            const Icon = ep.icon;
            return (
              <Card key={ep.file} className="p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className={cn('p-2 rounded-lg flex-shrink-0', ep.color)}>
                    <Icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-stone-800 dark:text-stone-200 capitalize">{ep.entity}</span>
                      <span className="text-xs text-stone-400">{ep.count} records</span>
                    </div>
                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">{ep.description}</p>
                  </div>
                </div>

                {/* URL row */}
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-xs font-mono bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded px-3 py-2 text-stone-700 dark:text-stone-300 truncate">
                    GET {url}
                  </code>
                  <button
                    onClick={() => copy(url, ep.file)}
                    title="Copy URL"
                    className="p-2 rounded text-stone-400 hover:text-veda-700 dark:hover:text-veda-400 hover:bg-stone-100 dark:hover:bg-stone-800 flex-shrink-0"
                    aria-label="Copy URL"
                  >
                    {copied === ep.file ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                  </button>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open in new tab"
                    className="p-2 rounded text-stone-400 hover:text-veda-700 dark:hover:text-veda-400 hover:bg-stone-100 dark:hover:bg-stone-800 flex-shrink-0"
                    aria-label="Open endpoint in new tab"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>

                {/* Preview */}
                {!preview && (
                  <button
                    onClick={() => fetchPreview(ep.file)}
                    className="text-xs text-veda-700 dark:text-veda-400 hover:underline"
                  >
                    Preview first 2 records →
                  </button>
                )}
                {preview === 'loading' && (
                  <p className="text-xs text-stone-400">Fetching…</p>
                )}
                {preview === 'error' && (
                  <p className="text-xs text-red-500">Could not fetch — endpoint is only available after deploying to GitHub Pages.</p>
                )}
                {Array.isArray(preview) && (
                  <pre className={blockCls}>{JSON.stringify(preview, null, 2)}</pre>
                )}
              </Card>
            );
          })}
        </div>
      )}

      {/* ── SCHEMA ── */}
      {tab === 'schema' && (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-sm text-stone-600 dark:text-stone-400">
                JSON Schema (draft-07) for all VEDA entity types.
              </p>
              <a href={SCHEMA_URL} target="_blank" rel="noopener noreferrer"
                className="text-xs text-veda-700 dark:text-veda-400 hover:underline flex items-center gap-1 mt-0.5">
                <ExternalLink size={11} /> {SCHEMA_URL}
              </a>
            </div>
          </div>

          {[
            { name: 'Topic', fields: ['id (veda-topic-{slug})', 'slug', 'title', 'description', 'overview', 'subjectIds[]', 'prerequisiteIds[]', 'leadToIds[]', 'keyConcepts[]', 'formulaHighlights?[]', 'estimatedMinutes', 'difficulty', 'academicLevel', 'examRelevance[]', 'tags[]', 'updatedAt'] },
            { name: 'Subject', fields: ['id (veda-subject-{slug})', 'slug', 'title', 'shortTitle', 'description', 'academicLevels[]', 'topicIds[]', 'courseIds[]', 'examIds[]', 'relatedSubjectIds[]', 'tags[]', 'icon?', 'color?', 'updatedAt'] },
            { name: 'Resource', fields: ['id (veda-resource-{slug})', 'slug', 'title', 'description', 'type (ResourceType)', 'url?', 'subjectIds[]', 'topicIds[]', 'difficulty', 'academicLevel', 'verificationStatus', 'contentStatus', 'language', 'author?', 'year?', 'pages?', 'durationMinutes?', 'tags[]'] },
            { name: 'Question', fields: ['id (veda-question-*)', 'slug', 'text', 'type (mcq|numerical|short-answer|true-false)', 'options?[]', 'correctIndex?', 'correctAnswer?', 'explanation', 'topicIds[]', 'subjectIds[]', 'examIds[]', 'difficulty', 'year?', 'source?', 'tags[]'] },
            { name: 'Course', fields: ['id (veda-course-{slug})', 'slug', 'title', 'shortTitle', 'description', 'academicLevel', 'durationYears', 'semesters[]', 'subjectIds[]', 'tags[]'] },
            { name: 'Exam', fields: ['id (veda-exam-{slug})', 'slug', 'title', 'shortTitle', 'description', 'type (ExamType)', 'conductingBody', 'subjectIds[]', 'topicIds[]', 'level', 'eligibility?', 'syllabus[]', 'websiteUrl?', 'tags[]'] },
            { name: 'LearningPath', fields: ['id (veda-path-{slug})', 'slug', 'title', 'description', 'steps[]', 'goalExamIds[]', 'goalCourseIds[]', 'totalMinutes', 'difficulty', 'academicLevel', 'tags[]'] },
          ].map(({ name, fields }) => (
            <div key={name} className="rounded-lg border border-stone-200 dark:border-stone-800 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 bg-stone-50 dark:bg-stone-800/60 border-b border-stone-200 dark:border-stone-700">
                <span className="text-sm font-semibold text-stone-800 dark:text-stone-200">{name}</span>
                <span className="text-xs text-stone-400">{fields.length} fields</span>
              </div>
              <div className="p-3 flex flex-wrap gap-1.5">
                {fields.map(f => (
                  <code key={f} className={codeCls}>{f}</code>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── USAGE ── */}
      {tab === 'usage' && (
        <div className="space-y-6 max-w-2xl">
          <div className="space-y-2">
            <SectionHeader title="JavaScript / TypeScript" />
            <div className="relative">
              <pre className={blockCls}>{JS_EXAMPLE}</pre>
              <button
                onClick={() => copy(JS_EXAMPLE, 'js')}
                className="absolute top-2 right-2 p-1.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-stone-200"
                aria-label="Copy JavaScript example"
              >
                {copied === 'js' ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <SectionHeader title="Python" />
            <div className="relative">
              <pre className={blockCls}>{PYTHON_EXAMPLE}</pre>
              <button
                onClick={() => copy(PYTHON_EXAMPLE, 'py')}
                className="absolute top-2 right-2 p-1.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-stone-200"
                aria-label="Copy Python example"
              >
                {copied === 'py' ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
              </button>
            </div>
          </div>

          <Card className="p-4 space-y-3">
            <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-200">Notes</h3>
            <ul className="text-sm text-stone-600 dark:text-stone-400 space-y-1.5 list-disc list-inside">
              <li>All endpoints are read-only static files — no POST, PATCH, or DELETE.</li>
              <li>GitHub Pages serves all files with <code className={codeCls}>Access-Control-Allow-Origin: *</code> — CORS works from any origin.</li>
              <li>Data is regenerated on every push to the repository via the <code className={codeCls}>prebuild</code> script.</li>
              <li>Stable IDs use the format <code className={codeCls}>veda-&#123;type&#125;-&#123;slug&#125;</code> — safe to cache permanently.</li>
              <li>To contribute data, use the <a href="/content-studio" className="text-veda-700 dark:text-veda-400 hover:underline">Content Studio</a> to create drafts and export merged JSON.</li>
            </ul>
          </Card>

          <Card className="p-4 space-y-2">
            <h3 className="text-sm font-semibold text-stone-800 dark:text-stone-200">Response Envelope</h3>
            <pre className={cn(blockCls, 'text-[11px]')}>{`{
  "$schema": "${SCHEMA_URL}",
  "version": "1.0.0",
  "entity": "topic",
  "count": 21,
  "generatedAt": "2026-09-15T10:00:00.000Z",
  "data": [ /* Topic[] */ ]
}`}</pre>
          </Card>
        </div>
      )}
    </div>
  );
}
