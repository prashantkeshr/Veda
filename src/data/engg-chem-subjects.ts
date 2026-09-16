import type { Subject } from '../models';

export const chemSubjectsData: Subject[] = [
  {
    id: 'veda-subject-ch-chem-thermo',
    slug: 'chem-chemical-thermodynamics',
    title: 'Chemical Thermodynamics',
    shortTitle: 'Chem Thermo',
    description: 'PVT relations, equations of state, phase equilibria, chemical equilibrium, and thermodynamic property estimation.',
    guide: `## Overview
Chemical Thermodynamics extends classical thermodynamics to multicomponent systems — the foundation for designing reactors, separations, and chemical processes.

## What You Will Learn
### PVT Relations & Equations of State
Ideal gas, van der Waals, Redlich-Kwong, Peng-Robinson EOS. Compressibility factor (Z). Residual properties.

### Thermodynamic Properties
Enthalpy, entropy, Gibbs and Helmholtz free energy. Maxwell relations. Departure functions. Heat capacities (Cp, Cv).

### Phase Equilibria
VLE (vapour-liquid equilibrium), LLE, SLE. Raoult's Law (ideal), modified Raoult's Law. Activity coefficients (Margules, van Laar, Wilson, NRTL, UNIQUAC). Bubble point and dew point calculations. Flash calculations.

### Chemical Reaction Equilibrium
Extent of reaction. Equilibrium constant Ka from ΔG°. Le Chatelier's principle. Effect of temperature (van't Hoff equation). Simultaneous reactions.

## GATE CH Weightage
Chemical Thermodynamics contributes **10–12 marks** in GATE CH — the highest-weightage section.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-ch-thermo-pvt',
      'veda-topic-ch-thermo-phase',
      'veda-topic-ch-thermo-chemical-eq',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-ch'],
    relatedSubjectIds: ['veda-subject-engg-thermo', 'veda-subject-ch-reaction-engg'],
    tags: ['chemical-thermodynamics', 'phase-equilibrium', 'vle', 'gate-ch'],
    color: '#713f12',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-ch-mass-transfer',
    slug: 'chem-mass-transfer',
    title: 'Mass Transfer',
    shortTitle: 'Mass Transfer',
    description: 'Molecular diffusion, convective mass transfer, absorption, stripping, distillation, extraction, and drying.',
    guide: `## Overview
Mass Transfer governs how species move between phases — the science behind distillation columns, absorption towers, extraction units, and dryers. It is one of the "Big Three" transport subjects in chemical engineering.

## What You Will Learn
### Molecular Diffusion
Fick's first and second laws. Binary diffusion in gases (Chapman-Enskog) and liquids (Stokes-Einstein). Equimolar counter-diffusion vs diffusion through stagnant gas. Effective diffusivity in porous media.

### Convective Mass Transfer
Film theory, penetration theory, surface renewal theory. Mass transfer coefficients (k_G, k_L, K_G, K_L). Individual and overall coefficients. HETS, HTU, NTU.

### Absorption & Stripping
Operating line, equilibrium line. McCabe-Thiele graphical method for absorption. Lean and rich ends. Dilute system approximation.

### Distillation
VLE diagrams. McCabe-Thiele method (binary distillation). Reflux ratio — minimum, actual, total. Feed plate location (q-line). Multi-component distillation concepts.

### Extraction & Drying
Liquid-liquid extraction: ternary diagrams, extraction factor. Psychrometric chart, drying rate curves.

## GATE CH Weightage
Mass Transfer accounts for **10–12 marks** — distillation and absorption are the most tested operations.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-ch-mt-diffusion',
      'veda-topic-ch-mt-absorption',
      'veda-topic-ch-mt-distillation',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-ch'],
    relatedSubjectIds: ['veda-subject-ch-chem-thermo', 'veda-subject-ch-reaction-engg'],
    tags: ['mass-transfer', 'distillation', 'absorption', 'diffusion', 'gate-ch'],
    color: '#713f12',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-ch-reaction-engg',
    slug: 'chem-chemical-reaction-engineering',
    title: 'Chemical Reaction Engineering',
    shortTitle: 'CRE',
    description: 'Rate laws, ideal reactor design (CSTR, PFR, batch), non-ideal reactors, catalysis, and heterogeneous reactions.',
    guide: `## Overview
Chemical Reaction Engineering answers: how do we design a reactor to achieve a desired conversion? It combines kinetics, thermodynamics, and transport phenomena.

## What You Will Learn
### Reaction Kinetics
Rate expressions, order and molecularity, Arrhenius equation. Temperature dependence of rate constants. Reversible and parallel/series reactions.

### Ideal Reactor Design
Mole balances for Batch, CSTR (continuously stirred tank), and PFR (plug flow). Design equations for single reactions. Levenspiel plots (–F_A0/–r_A vs X). CSTR and PFR in series/parallel.

### Multiple Reactions
Selectivity and yield. Series, parallel, and series-parallel schemes. Optimum reactor configuration.

### Non-Ideal Reactors
RTD (residence time distribution): E(t) and F(t) curves. Tanks-in-series and dispersion models. Conversion from RTD.

### Catalysis
Heterogeneous catalysis: adsorption, surface reaction, desorption. Langmuir-Hinshelwood kinetics. Weisz-Prater criterion for internal diffusion limitations. Effectiveness factor.

## GATE CH Weightage
CRE accounts for **10–12 marks**. Levenspiel plots and selectivity problems are most common question types.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-ch-re-ideal-reactors',
      'veda-topic-ch-re-non-ideal',
      'veda-topic-ch-re-catalysis',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-ch'],
    relatedSubjectIds: ['veda-subject-ch-chem-thermo', 'veda-subject-ch-mass-transfer'],
    tags: ['cre', 'reactor-design', 'kinetics', 'catalysis', 'gate-ch'],
    color: '#713f12',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-ch-process-control',
    slug: 'chem-process-control',
    title: 'Process Control & Instrumentation',
    shortTitle: 'Process Control',
    description: 'Process dynamics, transfer functions, PID controllers, stability analysis, and instrumentation for chemical plants.',
    guide: `## Overview
Process Control keeps chemical plants running at desired conditions despite disturbances. It applies control theory to dynamic chemical processes — from temperature loops to advanced model-predictive control.

## What You Will Learn
### Process Dynamics
First-order (FOPDT) and second-order process models. Dead time. Open-loop and closed-loop responses to step, impulse, ramp inputs.

### Laplace Transforms & Transfer Functions
Process transfer function. Block diagram algebra. Closed-loop transfer function.

### PID Control
Proportional (P), integral (I), derivative (D) actions. Tuning methods: Ziegler-Nichols (open-loop and closed-loop), IMC tuning. Reset windup.

### Stability Analysis
Characteristic equation roots. Routh-Hurwitz criterion. Bode and Nyquist plots for process loops. Gain and phase margins.

### Control System Design
Feedforward control. Cascade control. Ratio and split-range control. Smith predictor for dead-time compensation.

### Instrumentation
Measurement of temperature, pressure, flow, level. Control valves: equal percentage vs linear trim. Signal transmission (4–20 mA).

## GATE CH Weightage
Process Control contributes **5–7 marks**. PID tuning and stability criteria are most examined.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-ch-pc-feedback',
      'veda-topic-ch-pc-pid',
      'veda-topic-ch-pc-advanced',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-ch'],
    relatedSubjectIds: ['veda-subject-ee-control', 'veda-subject-ch-reaction-engg'],
    tags: ['process-control', 'pid', 'instrumentation', 'gate-ch'],
    color: '#713f12',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-ch-cpi',
    slug: 'chem-process-industries',
    title: 'Chemical Process Industries',
    shortTitle: 'CPI',
    description: 'Petroleum refining, fertiliser production, polymer manufacturing, and key industrial chemical processes.',
    guide: `## Overview
Chemical Process Industries (CPI) covers how major industrial chemicals are manufactured. It connects academic chemistry and engineering to real plant operations — vital for PSU roles at ONGC, IOCL, and fertiliser companies.

## What You Will Learn
### Petroleum Refining
Crude oil composition and distillation. Catalytic cracking (FCC), hydrotreating, reforming, alkylation. Petrol/diesel specifications and blending.

### Fertiliser Industry
Haber-Bosch process for ammonia. Nitric acid by Ostwald process. Urea production. Triple superphosphate. Potash fertilisers. India's fertiliser industry overview.

### Polymer Industry
Addition polymerisation (polyethylene, polypropylene, PVC, PS). Condensation polymerisation (nylon, polyester, PET). Rubber — natural and synthetic.

### Sulphuric & Chlor-Alkali Industries
Contact process for H₂SO₄. Chlor-alkali electrolysis (Cl₂, NaOH). Soda ash (Solvay process).

### Pharmaceutical & Specialty Chemicals
Batch process design for APIs. Green chemistry principles. E-factor and atom economy.

## Career Value
Knowledge of CPI is essential for plant operations, process design, HSE, and technical sales roles in the chemicals, pharma, and petrochemicals sectors.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-ch-cpi-petroleum',
      'veda-topic-ch-cpi-fertilizers',
      'veda-topic-ch-cpi-polymers',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-ch'],
    relatedSubjectIds: ['veda-subject-ch-reaction-engg', 'veda-subject-ch-mass-transfer'],
    tags: ['chemical-industries', 'petroleum', 'fertilisers', 'polymers', 'gate-ch'],
    color: '#713f12',
    updatedAt: '2026-09-16',
  },
];
