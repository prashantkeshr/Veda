import type { Resource } from '../models';

const base = {
  courseIds: [] as string[], branchIds: [] as string[], semesterIds: [] as string[],
  institutionIds: [] as string[], relatedResourceIds: [] as string[], prerequisiteIds: [] as string[],
  verificationStatus: 'verified' as const, contentStatus: 'published' as const,
  language: 'en', academicLevel: 'undergraduate' as const,
  createdAt: '2025-01-01', updatedAt: '2025-01-01',
};

export const resourcesEnggAeData: Resource[] = [

  // ── Aerodynamics – Fundamentals ────────────────────────────────────────────────
  {
    ...base, id: 'veda-rae-aero-01', slug: 'ae-aerodynamics-nptel',
    title: 'Aerodynamics – NPTEL IIT Bombay / IIT Madras',
    description: 'Fundamental aerodynamics: continuity, momentum, and energy equations; incompressible potential flow; thin airfoil theory; finite wing theory (lifting line); boundary layer; compressible flow; normal and oblique shocks.',
    type: 'video', url: 'https://nptel.ac.in/courses/101101083',
    subjectIds: ['veda-subject-ae-aerodynamics'], topicIds: ['veda-topic-ae-aero-fundamentals', 'veda-topic-ae-aero-thin-airfoil', 'veda-topic-ae-aero-compressible'],
    examIds: ['veda-exam-gate-ae'],
    difficulty: 'intermediate', source: 'IIT Bombay', provider: 'NPTEL',
    tags: ['aerodynamics', 'thin-airfoil', 'compressible-flow', 'shock-waves', 'NPTEL'],
    seoTitle: 'Aerodynamics – NPTEL IIT Bombay', seoDescription: 'Full NPTEL aerodynamics course for GATE AE: potential flow, airfoil theory, and compressible flow.',
  },
  {
    ...base, id: 'veda-rae-aero-02', slug: 'ae-aerodynamics-mit-ocw',
    title: 'Unified Engineering – Aerodynamics | MIT OpenCourseWare',
    description: 'MIT 16.01 Unified Engineering aerodynamics module: incompressible flow, thin airfoil theory, finite wing (lifting line), and introduction to viscous flows. Includes problem sets and solutions.',
    type: 'website', url: 'https://ocw.mit.edu/courses/16-01-unified-engineering-i-ii-iii-iv-fall-2005-spring-2006/',
    subjectIds: ['veda-subject-ae-aerodynamics'], topicIds: ['veda-topic-ae-aero-fundamentals', 'veda-topic-ae-aero-thin-airfoil'],
    examIds: ['veda-exam-gate-ae'],
    difficulty: 'intermediate', source: 'MIT', provider: 'MIT OpenCourseWare',
    tags: ['aerodynamics', 'thin-airfoil', 'lifting-line', 'potential-flow', 'mit-ocw'],
    seoTitle: 'Aerodynamics – MIT Unified Engineering OCW', seoDescription: 'MIT OCW aerodynamics: thin airfoil theory, finite wings, and incompressible flow.',
  },

  // ── Aerodynamics – Compressible Flow ──────────────────────────────────────────
  {
    ...base, id: 'veda-rae-aero-03', slug: 'ae-compressible-flow-nptel',
    title: 'Gas Dynamics & Compressible Flow – NPTEL IIT Madras',
    description: 'Isentropic flow, normal shock relations (Rankine-Hugoniot), oblique shocks, Prandtl-Meyer expansion, supersonic inlet and nozzle design, fanno flow, and Rayleigh flow.',
    type: 'video', url: 'https://nptel.ac.in/courses/101106040',
    subjectIds: ['veda-subject-ae-aerodynamics'], topicIds: ['veda-topic-ae-aero-compressible'],
    examIds: ['veda-exam-gate-ae'],
    difficulty: 'advanced', source: 'IIT Madras', provider: 'NPTEL',
    tags: ['compressible-flow', 'normal-shock', 'oblique-shock', 'fanno', 'prandtl-meyer'],
    seoTitle: 'Gas Dynamics & Compressible Flow – NPTEL IIT Madras', seoDescription: 'Shock waves, isentropic flow, and nozzle design for GATE AE aerodynamics.',
  },

  // ── Structures – Stress Analysis ───────────────────────────────────────────────
  {
    ...base, id: 'veda-rae-str-01', slug: 'ae-structures-nptel',
    title: 'Aerospace Structures – NPTEL IIT Bombay',
    description: 'Aircraft structural loads, thin-walled beams (open and closed sections), shear flow, torsion (Bredt-Batho formula), flexural axis, structural idealisation, and aeroelasticity introduction.',
    type: 'video', url: 'https://nptel.ac.in/courses/101101081',
    subjectIds: ['veda-subject-ae-structures'], topicIds: ['veda-topic-ae-str-stress-analysis', 'veda-topic-ae-str-vibrations', 'veda-topic-ae-str-composite'],
    examIds: ['veda-exam-gate-ae'],
    difficulty: 'intermediate', source: 'IIT Bombay', provider: 'NPTEL',
    tags: ['aerospace-structures', 'shear-flow', 'torsion', 'thin-walled', 'NPTEL'],
    seoTitle: 'Aerospace Structures – NPTEL IIT Bombay', seoDescription: 'NPTEL aerospace structures: shear flow, torsion, and thin-walled beams for GATE AE.',
  },
  {
    ...base, id: 'veda-rae-str-02', slug: 'ae-stress-analysis-mit',
    title: 'Mechanics of Materials – MIT OpenCourseWare 16.20',
    description: 'Stress and strain tensors, constitutive relations, virtual work, energy methods (Castigliano), beam-column analysis, fatigue, and fracture mechanics applied to aerospace structures.',
    type: 'website', url: 'https://ocw.mit.edu/courses/16-20-structural-mechanics-spring-2013/',
    subjectIds: ['veda-subject-ae-structures'], topicIds: ['veda-topic-ae-str-stress-analysis'],
    examIds: ['veda-exam-gate-ae'],
    difficulty: 'intermediate', source: 'MIT', provider: 'MIT OpenCourseWare',
    tags: ['stress-analysis', 'castigliano', 'fatigue', 'fracture', 'energy-methods'],
    seoTitle: 'Structural Mechanics for Aerospace – MIT OCW 16.20', seoDescription: 'MIT structural mechanics: stress tensors, energy methods, and fatigue for GATE AE.',
  },

  // ── Structures – Vibrations ─────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rae-str-03', slug: 'ae-vibrations-nptel',
    title: 'Mechanical Vibrations – NPTEL IIT Madras',
    description: 'Free and forced vibration of SDOF and MDOF systems, natural frequencies, mode shapes, vibration isolation, damping, frequency response functions, and structural dynamics of aircraft.',
    type: 'video', url: 'https://nptel.ac.in/courses/112106168',
    subjectIds: ['veda-subject-ae-structures'], topicIds: ['veda-topic-ae-str-vibrations'],
    examIds: ['veda-exam-gate-ae'],
    difficulty: 'intermediate', source: 'IIT Madras', provider: 'NPTEL',
    tags: ['vibrations', 'sdof', 'natural-frequency', 'mode-shapes', 'resonance'],
    seoTitle: 'Mechanical Vibrations – NPTEL for GATE AE', seoDescription: 'Free/forced vibrations, natural frequencies, and mode shapes for GATE AE structures.',
  },

  // ── Structures – Composite Materials ──────────────────────────────────────────
  {
    ...base, id: 'veda-rae-str-04', slug: 'ae-composites-nptel',
    title: 'Composite Materials & Structures – NPTEL IIT Bombay',
    description: 'Fibre-reinforced composites: micromechanics (rule of mixtures), classical laminate theory (CLT), failure criteria (Tsai-Wu, max stress), buckling of composite plates, and manufacturing.',
    type: 'video', url: 'https://nptel.ac.in/courses/101101080',
    subjectIds: ['veda-subject-ae-structures'], topicIds: ['veda-topic-ae-str-composite'],
    examIds: ['veda-exam-gate-ae'],
    difficulty: 'advanced', source: 'IIT Bombay', provider: 'NPTEL',
    tags: ['composites', 'clt', 'tsai-wu', 'rule-of-mixtures', 'fibre-reinforced'],
    seoTitle: 'Composite Materials & Structures – NPTEL IIT Bombay', seoDescription: 'Laminate theory, failure criteria, and composite plate analysis for GATE AE.',
  },

  // ── Propulsion – Jet Propulsion ────────────────────────────────────────────────
  {
    ...base, id: 'veda-rae-prop-01', slug: 'ae-propulsion-nptel',
    title: 'Aircraft Propulsion – NPTEL IIT Bombay',
    description: 'Ideal and real turbojet, turbofan, turboprop, and turboshaft cycles. Thrust equation, specific thrust, TSFC, Brayton cycle analysis, compressor and turbine design, and afterburner operation.',
    type: 'video', url: 'https://nptel.ac.in/courses/101101082',
    subjectIds: ['veda-subject-ae-propulsion'], topicIds: ['veda-topic-ae-prop-jet', 'veda-topic-ae-prop-rocket', 'veda-topic-ae-prop-turbomachinery'],
    examIds: ['veda-exam-gate-ae'],
    difficulty: 'intermediate', source: 'IIT Bombay', provider: 'NPTEL',
    tags: ['propulsion', 'turbojet', 'turbofan', 'tsfc', 'brayton-cycle', 'NPTEL'],
    seoTitle: 'Aircraft Propulsion – NPTEL IIT Bombay', seoDescription: 'NPTEL propulsion course for GATE AE: turbojet, turbofan cycles, thrust, and TSFC.',
  },
  {
    ...base, id: 'veda-rae-prop-02', slug: 'ae-rocket-propulsion-mit',
    title: 'Rocket Propulsion – MIT OpenCourseWare 16.512',
    description: 'Rocket nozzle thermodynamics, specific impulse Isp, characteristic velocity c*, thrust coefficient CF, liquid and solid propellants, combustion instability, and high-energy propellant selection.',
    type: 'website', url: 'https://ocw.mit.edu/courses/16-512-rocket-propulsion-fall-2005/',
    subjectIds: ['veda-subject-ae-propulsion'], topicIds: ['veda-topic-ae-prop-rocket'],
    examIds: ['veda-exam-gate-ae'],
    difficulty: 'advanced', source: 'MIT', provider: 'MIT OpenCourseWare',
    tags: ['rocket-propulsion', 'specific-impulse', 'isp', 'nozzle', 'thrust-coefficient'],
    seoTitle: 'Rocket Propulsion – MIT OCW 16.512', seoDescription: 'MIT rocket propulsion: specific impulse, nozzle design, and liquid/solid propellants for GATE AE.',
  },

  // ── Flight Mechanics – Stability ───────────────────────────────────────────────
  {
    ...base, id: 'veda-rae-fm-01', slug: 'ae-flight-mechanics-nptel',
    title: 'Flight Mechanics – NPTEL IIT Kanpur',
    description: 'Equations of motion for rigid aircraft, reference frames, static longitudinal and lateral stability, stick-fixed and stick-free neutral point, dynamic stability (phugoid, short-period, Dutch roll), and aircraft performance.',
    type: 'video', url: 'https://nptel.ac.in/courses/101104006',
    subjectIds: ['veda-subject-ae-flight-mech'], topicIds: ['veda-topic-ae-fm-stability', 'veda-topic-ae-fm-performance', 'veda-topic-ae-fm-control'],
    examIds: ['veda-exam-gate-ae'],
    difficulty: 'intermediate', source: 'IIT Kanpur', provider: 'NPTEL',
    tags: ['flight-mechanics', 'stability', 'phugoid', 'dutch-roll', 'NPTEL'],
    seoTitle: 'Flight Mechanics – NPTEL IIT Kanpur', seoDescription: 'NPTEL flight mechanics for GATE AE: stability, performance, and equations of motion.',
  },
  {
    ...base, id: 'veda-rae-fm-02', slug: 'ae-aircraft-performance-mit',
    title: 'Aircraft Performance – MIT OpenCourseWare 16.100',
    description: 'Steady level flight, gliding, climbing, maximum range and endurance (Brequet equations), turning performance (load factor, bank angle), V-n diagram, take-off and landing analysis.',
    type: 'website', url: 'https://ocw.mit.edu/courses/16-100-aerodynamics-fall-2005/',
    subjectIds: ['veda-subject-ae-flight-mech'], topicIds: ['veda-topic-ae-fm-performance'],
    examIds: ['veda-exam-gate-ae'],
    difficulty: 'intermediate', source: 'MIT', provider: 'MIT OpenCourseWare',
    tags: ['aircraft-performance', 'range', 'endurance', 'brequet', 'v-n-diagram'],
    seoTitle: 'Aircraft Performance – MIT OCW 16.100', seoDescription: 'MIT aircraft performance: range, endurance, Brequet equation, and V-n diagram for GATE AE.',
  },
  {
    ...base, id: 'veda-rae-fm-03', slug: 'ae-flight-control-nptel',
    title: 'Aircraft Control & Autopilot Systems – NPTEL',
    description: 'Control surfaces (elevator, aileron, rudder) effectiveness, control derivatives, autopilot modes (altitude hold, heading hold, ILS), fly-by-wire introduction, and control law design basics.',
    type: 'video', url: 'https://nptel.ac.in/courses/101104070',
    subjectIds: ['veda-subject-ae-flight-mech'], topicIds: ['veda-topic-ae-fm-control'],
    examIds: ['veda-exam-gate-ae'],
    difficulty: 'advanced', source: 'NPTEL', provider: 'NPTEL',
    tags: ['flight-control', 'autopilot', 'control-surfaces', 'fly-by-wire', 'NPTEL'],
    seoTitle: 'Aircraft Control Systems – NPTEL', seoDescription: 'Control surfaces, autopilot modes, and fly-by-wire for GATE AE flight mechanics.',
  },
];
