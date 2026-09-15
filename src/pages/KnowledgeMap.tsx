import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { Circle, Clock, CheckCircle, Map } from 'lucide-react';
import { useUserData } from '../app/providers/UserDataProvider';
import { useTheme } from '../app/providers/ThemeProvider';

type SubjectKey = 'maths' | 'thermo' | 'fluid' | 'som' | 'physics';
type ProgressStatus = 'not-started' | 'in-progress' | 'completed';

interface NodeDef {
  id: string;
  slug: string;
  title: string;
  subject: SubjectKey;
  x: number;
  y: number;
}

const NW = 140;
const NH = 36;

const NODES: NodeDef[] = [
  // Engineering Mathematics
  { id: 'veda-topic-differential-calculus',    slug: 'differential-calculus',                  title: 'Differential Calculus',  subject: 'maths',   x: 110, y: 18  },
  { id: 'veda-topic-integral-calculus',        slug: 'integral-calculus',                      title: 'Integral Calculus',      subject: 'maths',   x: 295, y: 18  },
  { id: 'veda-topic-linear-algebra',           slug: 'linear-algebra',                         title: 'Linear Algebra',         subject: 'maths',   x: 110, y: 68  },
  { id: 'veda-topic-probability-statistics',   slug: 'probability-and-statistics',             title: 'Probability & Stats',    subject: 'maths',   x: 110, y: 118 },
  { id: 'veda-topic-differential-equations',   slug: 'differential-equations',                 title: 'Differential Equations', subject: 'maths',   x: 480, y: 18  },
  { id: 'veda-topic-numerical-methods',        slug: 'numerical-methods',                      title: 'Numerical Methods',      subject: 'maths',   x: 480, y: 68  },
  { id: 'veda-topic-complex-variables',        slug: 'complex-variables',                      title: 'Complex Variables',      subject: 'maths',   x: 480, y: 118 },
  // Engineering Thermodynamics
  { id: 'veda-topic-thermo-systems-properties', slug: 'thermodynamic-systems-and-properties', title: 'Systems & Properties',  subject: 'thermo',  x: 110, y: 190 },
  { id: 'veda-topic-first-law',                slug: 'first-law-of-thermodynamics',            title: 'First Law',              subject: 'thermo',  x: 295, y: 190 },
  { id: 'veda-topic-second-law-entropy',       slug: 'second-law-and-entropy',                 title: 'Second Law & Entropy',   subject: 'thermo',  x: 480, y: 190 },
  { id: 'veda-topic-heat-transfer-intro',      slug: 'introduction-to-heat-transfer',          title: 'Heat Transfer Intro',    subject: 'thermo',  x: 480, y: 240 },
  { id: 'veda-topic-gas-power-cycles',         slug: 'gas-power-cycles',                       title: 'Gas Power Cycles',       subject: 'thermo',  x: 480, y: 290 },
  { id: 'veda-topic-thermo-cycles',            slug: 'thermodynamic-cycles',                   title: 'Vapour Power Cycles',    subject: 'thermo',  x: 665, y: 190 },
  { id: 'veda-topic-refrigeration-ac',         slug: 'refrigeration-and-air-conditioning',     title: 'Refrigeration & AC',     subject: 'thermo',  x: 665, y: 240 },
  // Fluid Mechanics
  { id: 'veda-topic-fluid-properties',         slug: 'fluid-properties-and-classification',   title: 'Fluid Properties',       subject: 'fluid',   x: 110, y: 360 },
  { id: 'veda-topic-fluid-statics',            slug: 'fluid-statics',                          title: 'Fluid Statics',          subject: 'fluid',   x: 295, y: 360 },
  { id: 'veda-topic-bernoulli-equation',       slug: 'bernoulli-equation-and-flow-kinematics', title: 'Bernoulli Equation',     subject: 'fluid',   x: 480, y: 360 },
  { id: 'veda-topic-pipe-flow',                slug: 'pipe-flow-and-head-losses',              title: 'Pipe Flow & Losses',     subject: 'fluid',   x: 665, y: 360 },
  // Strength of Materials
  { id: 'veda-topic-stress-strain',            slug: 'stress-strain-and-elastic-constants',   title: 'Stress & Strain',        subject: 'som',     x: 110, y: 425 },
  { id: 'veda-topic-bending-shear',            slug: 'bending-moment-and-shear-force',         title: 'Bending & Shear',        subject: 'som',     x: 295, y: 425 },
  // Engineering Physics
  { id: 'veda-topic-mechanics-kinematics',     slug: 'mechanics-and-kinematics',              title: 'Mechanics & Kinematics', subject: 'physics', x: 110, y: 490 },
];

const nodeMap = Object.fromEntries(NODES.map(n => [n.id, n]));

const EDGES: Array<{ from: string; to: string }> = [
  { from: 'veda-topic-differential-calculus',   to: 'veda-topic-integral-calculus' },
  { from: 'veda-topic-differential-calculus',   to: 'veda-topic-numerical-methods' },
  { from: 'veda-topic-integral-calculus',       to: 'veda-topic-differential-equations' },
  { from: 'veda-topic-linear-algebra',          to: 'veda-topic-numerical-methods' },
  { from: 'veda-topic-differential-equations',  to: 'veda-topic-numerical-methods' },
  { from: 'veda-topic-thermo-systems-properties', to: 'veda-topic-first-law' },
  { from: 'veda-topic-thermo-systems-properties', to: 'veda-topic-second-law-entropy' },
  { from: 'veda-topic-first-law',               to: 'veda-topic-second-law-entropy' },
  { from: 'veda-topic-first-law',               to: 'veda-topic-thermo-cycles' },
  { from: 'veda-topic-first-law',               to: 'veda-topic-heat-transfer-intro' },
  { from: 'veda-topic-second-law-entropy',      to: 'veda-topic-thermo-cycles' },
  { from: 'veda-topic-second-law-entropy',      to: 'veda-topic-refrigeration-ac' },
  { from: 'veda-topic-fluid-properties',        to: 'veda-topic-fluid-statics' },
  { from: 'veda-topic-fluid-statics',           to: 'veda-topic-bernoulli-equation' },
  { from: 'veda-topic-bernoulli-equation',      to: 'veda-topic-pipe-flow' },
  { from: 'veda-topic-stress-strain',           to: 'veda-topic-bending-shear' },
];

const BANDS: Array<{ id: SubjectKey; label: string; y1: number; y2: number }> = [
  { id: 'maths',   label: 'Engineering Mathematics',     y1: 7,   y2: 165 },
  { id: 'thermo',  label: 'Engineering Thermodynamics',  y1: 177, y2: 342 },
  { id: 'fluid',   label: 'Fluid Mechanics',             y1: 348, y2: 409 },
  { id: 'som',     label: 'Strength of Materials',       y1: 414, y2: 474 },
  { id: 'physics', label: 'Engineering Physics',         y1: 479, y2: 538 },
];

const TOTAL_W = 825;
const TOTAL_H = 545;

type ColorScheme = {
  band: string; stroke: string; nodeText: string; label: string;
};

const LIGHT: Record<SubjectKey, ColorScheme> = {
  maths:   { band: '#eff6ff', stroke: '#3b82f6', nodeText: '#1e40af', label: '#93c5fd' },
  thermo:  { band: '#fffbeb', stroke: '#d97706', nodeText: '#78350f', label: '#fcd34d' },
  fluid:   { band: '#ecfdf5', stroke: '#059669', nodeText: '#065f46', label: '#6ee7b7' },
  som:     { band: '#fdf2f8', stroke: '#db2777', nodeText: '#9d174d', label: '#f9a8d4' },
  physics: { band: '#f5f3ff', stroke: '#7c3aed', nodeText: '#5b21b6', label: '#c4b5fd' },
};

const DARK: Record<SubjectKey, ColorScheme> = {
  maths:   { band: '#1a2744', stroke: '#60a5fa', nodeText: '#93c5fd', label: '#1d4ed8' },
  thermo:  { band: '#2a1a06', stroke: '#d97706', nodeText: '#fcd34d', label: '#92400e' },
  fluid:   { band: '#0a2019', stroke: '#34d399', nodeText: '#6ee7b7', label: '#065f46' },
  som:     { band: '#2a0a1a', stroke: '#f472b6', nodeText: '#fbcfe8', label: '#9d174d' },
  physics: { band: '#1a1030', stroke: '#a78bfa', nodeText: '#c4b5fd', label: '#5b21b6' },
};

const PROGRESS_LIGHT = {
  'in-progress': { fill: '#fefce8', stroke: '#ca8a04', text: '#78350f' },
  'completed':   { fill: '#f0fdf4', stroke: '#16a34a', text: '#14532d' },
};

const PROGRESS_DARK = {
  'in-progress': { fill: '#3a2800', stroke: '#fbbf24', text: '#fde68a' },
  'completed':   { fill: '#042010', stroke: '#22c55e', text: '#86efac' },
};

function getEdgePath(from: NodeDef, to: NodeDef): string {
  const sx = from.x + NW;
  const sy = from.y + NH / 2;
  const tx = to.x;
  const ty = to.y + NH / 2;

  if (to.x > from.x) {
    const dy = Math.abs(ty - sy);
    if (dy < 4) {
      // Same row — arc above if 2+ columns apart
      const colDiff = (tx - sx) / (NW + 45);
      if (colDiff >= 2) {
        const mx = (sx + tx) / 2;
        return `M ${sx} ${sy} Q ${mx} ${sy - 22} ${tx} ${ty}`;
      }
      return `M ${sx} ${sy} L ${tx} ${ty}`;
    }
    // Different rows — S-curve
    const mx = (sx + tx) / 2;
    return `M ${sx} ${sy} C ${mx} ${sy} ${mx} ${ty} ${tx} ${ty}`;
  }
  if (to.x === from.x) {
    // Same column — vertical
    const cx = from.x + NW / 2;
    return `M ${cx} ${from.y + NH} L ${cx} ${to.y}`;
  }
  return '';
}

const SUBJECT_LABELS: Record<SubjectKey, string> = {
  maths: 'Engineering Mathematics',
  thermo: 'Engineering Thermodynamics',
  fluid: 'Fluid Mechanics',
  som: 'Strength of Materials',
  physics: 'Engineering Physics',
};

const ALL_SUBJECTS = Object.keys(SUBJECT_LABELS) as SubjectKey[];

export function KnowledgeMap() {
  useSEO('Knowledge Map', 'Visual map of all engineering topics and how they connect — prerequisites, related topics, and learning paths.');
  const navigate = useNavigate();
  const { progressMap } = useUserData();
  const { resolved } = useTheme();
  const isDark = resolved === 'dark';
  const [hovered, setHovered] = useState<string | null>(null);
  const [filter, setFilter] = useState<SubjectKey | 'all'>('all');

  const scheme = isDark ? DARK : LIGHT;
  const progScheme = isDark ? PROGRESS_DARK : PROGRESS_LIGHT;
  const edgeColor = isDark ? '#374151' : '#d1d5db';
  const arrowFill = isDark ? '#6b7280' : '#9ca3af';
  const nodeBg = isDark ? '#1c1917' : '#ffffff';
  const bandLabelColor = isDark ? '#6b7280' : '#9ca3af';

  const visibleNodes = filter === 'all' ? NODES : NODES.filter(n => n.subject === filter);
  const visibleIds = new Set(visibleNodes.map(n => n.id));
  const visibleEdges = EDGES.filter(e => visibleIds.has(e.from) && visibleIds.has(e.to));
  const visibleBands = filter === 'all' ? BANDS : BANDS.filter(b => b.id === filter);

  // Dynamic viewBox: trim to visible content
  const svgMinY = visibleBands.length > 0 ? visibleBands[0].y1 - 4 : 0;
  const svgMaxY = visibleBands.length > 0 ? visibleBands[visibleBands.length - 1].y2 + 8 : TOTAL_H;
  const dynamicH = svgMaxY - svgMinY;

  function getStatus(id: string): ProgressStatus {
    return (progressMap[id] as ProgressStatus) ?? 'not-started';
  }

  function getNodeColors(node: NodeDef) {
    const status = getStatus(node.id);
    if (status !== 'not-started') {
      const p = progScheme[status];
      return { fill: p.fill, stroke: p.stroke, text: p.text };
    }
    const s = scheme[node.subject];
    return { fill: nodeBg, stroke: s.stroke, text: s.nodeText };
  }

  const totalTopics = NODES.length;
  const completedCount = NODES.filter(n => getStatus(n.id) === 'completed').length;
  const inProgressCount = NODES.filter(n => getStatus(n.id) === 'in-progress').length;

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Map size={18} className="text-veda-700 dark:text-veda-400" />
            <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Knowledge Map</h1>
          </div>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            Topic dependencies across all subjects — click any topic to open it.
          </p>
        </div>
        <div className="flex gap-4 text-sm text-stone-500 dark:text-stone-400">
          <span><strong className="text-stone-900 dark:text-stone-100">{totalTopics}</strong> topics</span>
          <span><strong className="text-amber-600 dark:text-amber-400">{inProgressCount}</strong> in progress</span>
          <span><strong className="text-emerald-600 dark:text-emerald-400">{completedCount}</strong> completed</span>
        </div>
      </div>

      {/* Subject filter */}
      <div className="flex flex-wrap gap-2">
        {(['all', ...ALL_SUBJECTS] as const).map(s => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={[
              'px-3 py-1 rounded-full text-xs font-medium border transition-colors',
              filter === s
                ? 'bg-veda-700 text-white border-veda-700 dark:bg-veda-500 dark:border-veda-500'
                : 'border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-stone-800',
            ].join(' ')}
          >
            {s === 'all' ? 'All subjects' : SUBJECT_LABELS[s]}
          </button>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 dark:text-stone-400">
        <span className="font-medium text-stone-600 dark:text-stone-400">Progress:</span>
        {[
          { icon: Circle,       label: 'Not started', color: 'text-stone-400' },
          { icon: Clock,        label: 'In progress',  color: 'text-amber-500' },
          { icon: CheckCircle,  label: 'Completed',    color: 'text-emerald-500' },
        ].map(({ icon: Icon, label, color }) => (
          <span key={label} className="flex items-center gap-1">
            <Icon size={12} className={color} /> {label}
          </span>
        ))}
        <span className="ml-2 flex items-center gap-1">
          <svg width="24" height="8"><line x1="0" y1="4" x2="18" y2="4" stroke={edgeColor} strokeWidth="1.5" markerEnd="url(#arrow-legend)" /><defs><marker id="arrow-legend" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill={arrowFill} /></marker></defs></svg>
          Leads to
        </span>
      </div>

      {/* Map */}
      <div className="overflow-x-auto rounded-lg border border-stone-200 dark:border-stone-800">
        <svg
          viewBox={`0 ${svgMinY} ${TOTAL_W} ${dynamicH}`}
          style={{ minWidth: 600, width: '100%', display: 'block' }}
          role="img"
          aria-label="VEDA Knowledge Map"
        >
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d={`M0,0 L0,6 L6,3 z`} fill={arrowFill} />
            </marker>
          </defs>

          {/* Subject band backgrounds */}
          {visibleBands.map(band => {
            const c = scheme[band.id];
            return (
              <g key={band.id}>
                <rect
                  x={6} y={band.y1}
                  width={TOTAL_W - 12} height={band.y2 - band.y1}
                  rx={8} fill={c.band} opacity={0.6}
                />
                {/* Subject label */}
                <text
                  x={14}
                  y={band.y1 + 13}
                  fontSize="9"
                  fontWeight="600"
                  letterSpacing="0.05em"
                  fill={bandLabelColor}
                  textAnchor="start"
                >
                  {band.label.toUpperCase()}
                </text>
              </g>
            );
          })}

          {/* Edges */}
          {visibleEdges.map(e => {
            const from = nodeMap[e.from];
            const to = nodeMap[e.to];
            if (!from || !to) return null;
            const d = getEdgePath(from, to);
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
          {visibleNodes.map(node => {
            const { fill, stroke, text } = getNodeColors(node);
            const isHovered = hovered === node.id;
            const status = getStatus(node.id);

            return (
              <g
                key={node.id}
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(`/topics/${node.slug}`)}
                onMouseEnter={() => setHovered(node.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <rect
                  x={node.x} y={node.y}
                  width={NW} height={NH}
                  rx={6}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={isHovered ? 2 : 1.5}
                  filter={isHovered ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' : undefined}
                />
                {/* Progress indicator dot */}
                {status !== 'not-started' && (
                  <circle
                    cx={node.x + NW - 8}
                    cy={node.y + 8}
                    r={4}
                    fill={status === 'completed' ? '#16a34a' : '#d97706'}
                  />
                )}
                <text
                  x={node.x + NW / 2}
                  y={node.y + NH / 2 + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="10.5"
                  fontWeight="500"
                  fill={text}
                  style={{ userSelect: 'none', pointerEvents: 'none' }}
                >
                  {node.title}
                </text>
                <title>{node.title}</title>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Empty state for filter */}
      {visibleNodes.length === 0 && (
        <p className="text-center text-sm text-stone-400 py-8">No topics match the selected filter.</p>
      )}
    </div>
  );
}
