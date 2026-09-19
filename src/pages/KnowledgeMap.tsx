import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { Circle, Clock, CheckCircle, Map as MapIcon, ChevronDown } from 'lucide-react';
import { useUserData } from '../app/providers/UserDataProvider';
import { useTheme } from '../app/providers/ThemeProvider';
import { subjectRepo, topicRepo } from '../repositories';
import type { Topic } from '../models';

type ProgressStatus = 'not-started' | 'in-progress' | 'completed';

const NW = 158;
const NH = 40;
const HGAP = 50;
const VGAP = 14;
const PAD = 10;

function computeLayout(topics: Topic[]): Map<string, { x: number; y: number }> {
  if (topics.length === 0) return new Map();
  const inSubject = new Set(topics.map(t => t.id));
  const levels = new Map<string, number>();
  const computing = new Set<string>();

  function getLevel(id: string): number {
    if (levels.has(id)) return levels.get(id)!;
    if (computing.has(id)) return 0;
    computing.add(id);
    const topic = topics.find(t => t.id === id);
    if (!topic) { levels.set(id, 0); return 0; }
    const prereqLevels = topic.prerequisiteIds
      .filter(pid => inSubject.has(pid))
      .map(pid => getLevel(pid));
    const level = prereqLevels.length > 0 ? Math.max(...prereqLevels) + 1 : 0;
    computing.delete(id);
    levels.set(id, level);
    return level;
  }
  topics.forEach(t => getLevel(t.id));

  const byLevel = new Map<number, string[]>();
  for (const [id, level] of levels) {
    const arr = byLevel.get(level) ?? [];
    arr.push(id);
    byLevel.set(level, arr);
  }

  const positions = new Map<string, { x: number; y: number }>();
  for (const [level, ids] of byLevel) {
    ids.forEach((id, i) => {
      positions.set(id, {
        x: PAD + level * (NW + HGAP),
        y: PAD + i * (NH + VGAP),
      });
    });
  }
  return positions;
}

function getEdgePath(
  from: { x: number; y: number },
  to: { x: number; y: number },
): string {
  const sx = from.x + NW;
  const sy = from.y + NH / 2;
  const tx = to.x;
  const ty = to.y + NH / 2;
  if (tx > sx) {
    if (Math.abs(ty - sy) < 4) return `M ${sx} ${sy} L ${tx} ${ty}`;
    const mx = (sx + tx) / 2;
    return `M ${sx} ${sy} C ${mx} ${sy} ${mx} ${ty} ${tx} ${ty}`;
  }
  return '';
}

export function KnowledgeMap() {
  useSEO('Knowledge Map', 'Visual map of topic prerequisites and dependencies — pick any subject and see how topics connect.');
  const navigate = useNavigate();
  const { progressMap } = useUserData();
  const { resolved } = useTheme();
  const isDark = resolved === 'dark';
  const [hovered, setHovered] = useState<string | null>(null);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('');

  const subjects = useMemo(() => subjectRepo.getAll(), []);
  const effectiveSubjectId = selectedSubjectId || (subjects[0]?.id ?? '');
  const selectedSubject = useMemo(() => subjects.find(s => s.id === effectiveSubjectId), [subjects, effectiveSubjectId]);

  const topics = useMemo(() => {
    if (!effectiveSubjectId) return [] as Topic[];
    return topicRepo.getBySubjectId(effectiveSubjectId).slice(0, 42);
  }, [effectiveSubjectId]);

  const positions = useMemo(() => computeLayout(topics), [topics]);
  const inSubject = useMemo(() => new Set(topics.map(t => t.id)), [topics]);

  const edges = useMemo(
    () =>
      topics.flatMap(t =>
        t.prerequisiteIds
          .filter(pid => inSubject.has(pid))
          .map(pid => ({ from: pid, to: t.id })),
      ),
    [topics, inSubject],
  );

  const svgWidth = useMemo(() => {
    let max = 400;
    for (const p of positions.values()) max = Math.max(max, p.x + NW + PAD);
    return max;
  }, [positions]);

  const svgHeight = useMemo(() => {
    let max = 200;
    for (const p of positions.values()) max = Math.max(max, p.y + NH + PAD);
    return max;
  }, [positions]);

  const nodeBg = isDark ? '#1c1917' : '#ffffff';
  const nodeStroke = isDark ? '#5b8ad4' : '#2563eb';
  const nodeText = isDark ? '#93c5fd' : '#1e3a8a';
  const edgeColor = isDark ? '#374151' : '#d1d5db';
  const arrowFill = isDark ? '#6b7280' : '#9ca3af';
  const prog = isDark
    ? {
        'in-progress': { fill: '#3a2800', stroke: '#fbbf24', text: '#fde68a' },
        completed:     { fill: '#042010', stroke: '#22c55e', text: '#86efac' },
      }
    : {
        'in-progress': { fill: '#fefce8', stroke: '#ca8a04', text: '#78350f' },
        completed:     { fill: '#f0fdf4', stroke: '#16a34a', text: '#14532d' },
      };

  function getStatus(id: string): ProgressStatus {
    return (progressMap[id] as ProgressStatus) ?? 'not-started';
  }
  function getNodeColors(id: string) {
    const s = getStatus(id);
    if (s !== 'not-started') return prog[s];
    return { fill: nodeBg, stroke: nodeStroke, text: nodeText };
  }

  const completedCount = topics.filter(t => getStatus(t.id) === 'completed').length;
  const inProgressCount = topics.filter(t => getStatus(t.id) === 'in-progress').length;
  const totalInSubject = selectedSubject?.topicIds.length ?? topics.length;

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <MapIcon size={18} className="text-veda-700 dark:text-veda-400" />
            <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Knowledge Map</h1>
          </div>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            Topic prerequisites and dependencies — click any node to open it.
          </p>
        </div>
        <div className="flex gap-4 text-sm text-stone-500 dark:text-stone-400">
          <span><strong className="text-stone-900 dark:text-stone-100">{topics.length}</strong> topics</span>
          <span><strong className="text-amber-600 dark:text-amber-400">{inProgressCount}</strong> in progress</span>
          <span><strong className="text-emerald-600 dark:text-emerald-400">{completedCount}</strong> completed</span>
        </div>
      </div>

      {/* Subject selector */}
      <div className="flex items-center gap-3 flex-wrap">
        <label className="text-sm font-medium text-stone-600 dark:text-stone-400 shrink-0">Subject:</label>
        <div className="relative">
          <select
            value={effectiveSubjectId}
            onChange={e => setSelectedSubjectId(e.target.value)}
            className="appearance-none pl-3 pr-8 py-1.5 text-sm rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-veda-500 cursor-pointer"
          >
            {subjects.map(s => (
              <option key={s.id} value={s.id}>{s.title}</option>
            ))}
          </select>
          <ChevronDown size={14} className="absolute right-2.5 top-2 text-stone-400 pointer-events-none" />
        </div>
        {totalInSubject > 42 && (
          <span className="text-xs text-stone-400">(showing first 42 of {totalInSubject})</span>
        )}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 dark:text-stone-400">
        <span className="font-medium text-stone-600 dark:text-stone-400">Progress:</span>
        {[
          { icon: Circle,      label: 'Not started', color: 'text-stone-400' },
          { icon: Clock,       label: 'In progress',  color: 'text-amber-500' },
          { icon: CheckCircle, label: 'Completed',    color: 'text-emerald-500' },
        ].map(({ icon: Icon, label, color }) => (
          <span key={label} className="flex items-center gap-1">
            <Icon size={12} className={color} /> {label}
          </span>
        ))}
        <span className="ml-2 flex items-center gap-1.5">
          <svg width="28" height="8">
            <defs>
              <marker id="arrow-legend" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill={arrowFill} />
              </marker>
            </defs>
            <line x1="0" y1="4" x2="22" y2="4" stroke={edgeColor} strokeWidth="1.5" markerEnd="url(#arrow-legend)" />
          </svg>
          Requires →
        </span>
      </div>

      {/* Map */}
      {topics.length === 0 ? (
        <div className="rounded-lg border border-stone-200 dark:border-stone-800 p-12 text-center text-sm text-stone-400">
          No topics found for this subject.
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-stone-200 dark:border-stone-800">
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            style={{ minWidth: Math.min(svgWidth, 560), width: '100%', display: 'block' }}
            role="img"
            aria-label={`Knowledge map for ${selectedSubject?.title ?? 'selected subject'}`}
          >
            <defs>
              <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill={arrowFill} />
              </marker>
            </defs>

            {/* Edges */}
            {edges.map(e => {
              const fp = positions.get(e.from);
              const tp = positions.get(e.to);
              if (!fp || !tp) return null;
              const d = getEdgePath(fp, tp);
              if (!d) return null;
              return (
                <path
                  key={`${e.from}-${e.to}`}
                  d={d}
                  fill="none"
                  stroke={edgeColor}
                  strokeWidth={1.5}
                  markerEnd="url(#arrow)"
                  opacity={0.8}
                />
              );
            })}

            {/* Nodes */}
            {topics.map(topic => {
              const pos = positions.get(topic.id);
              if (!pos) return null;
              const { fill, stroke, text } = getNodeColors(topic.id);
              const isHovered = hovered === topic.id;
              const status = getStatus(topic.id);
              const label = topic.title.length > 21 ? topic.title.slice(0, 19) + '…' : topic.title;

              return (
                <g
                  key={topic.id}
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate(`/topics/${topic.slug}`)}
                  onMouseEnter={() => setHovered(topic.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <rect
                    x={pos.x} y={pos.y}
                    width={NW} height={NH}
                    rx={6}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={isHovered ? 2 : 1.5}
                    filter={isHovered ? 'drop-shadow(0 2px 6px rgba(0,0,0,0.18))' : undefined}
                  />
                  {status !== 'not-started' && (
                    <circle
                      cx={pos.x + NW - 8}
                      cy={pos.y + 8}
                      r={4}
                      fill={status === 'completed' ? '#16a34a' : '#d97706'}
                    />
                  )}
                  <text
                    x={pos.x + NW / 2}
                    y={pos.y + NH / 2 + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="10.5"
                    fontWeight="500"
                    fill={text}
                    style={{ userSelect: 'none', pointerEvents: 'none' }}
                  >
                    {label}
                  </text>
                  <title>{topic.title} — {topic.difficulty}</title>
                </g>
              );
            })}
          </svg>
        </div>
      )}

      {/* No-edges notice */}
      {topics.length > 0 && edges.length === 0 && (
        <p className="text-xs text-stone-400 text-center">
          No prerequisite links defined within this subject — topics are independent.
        </p>
      )}
    </div>
  );
}
