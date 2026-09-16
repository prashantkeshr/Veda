import type { Subject } from '../models';

export const eeSubjectsData: Subject[] = [
  {
    id: 'veda-subject-ee-circuit-theory',
    slug: 'ee-circuit-theory',
    title: 'Circuit Theory & Network Analysis',
    shortTitle: 'Circuit Theory',
    description: 'Kirchhoff\'s laws, network theorems, AC analysis, resonance, two-port networks, and transient analysis.',
    guide: `## Overview
Circuit Theory is the mathematical language of electrical engineering. Every EE specialisation — power, electronics, control, communications — rests on this foundation. It is the highest-weightage subject in GATE EE.

## What You Will Learn
### Basic Circuit Laws
KVL, KCL, Ohm's law. Mesh analysis and node analysis. Source transformations.

### Network Theorems
Superposition, Thevenin's, Norton's, Maximum Power Transfer, Reciprocity, Tellegen's theorems. Millman's theorem.

### AC Steady-State Analysis
Phasors, impedance, admittance. AC power: real (P), reactive (Q), apparent (S), power factor. RMS values.

### Resonance
Series and parallel resonance. Quality factor (Q), bandwidth, half-power frequencies.

### Transient Analysis
First-order RC and RL circuits (natural + forced response). Second-order RLC circuits. Laplace transform methods.

### Two-Port Networks
Z, Y, h, ABCD parameters. Interconnections of two-ports.

## GATE EE Weightage
Circuit Theory typically accounts for **15–18 marks** — the largest single section. Master this before anything else.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-ee-ct-network-theorems',
      'veda-topic-ee-ct-ac-analysis',
      'veda-topic-ee-ct-resonance',
      'veda-topic-ee-ct-two-port',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-ee'],
    relatedSubjectIds: ['veda-subject-ee-signals', 'veda-subject-ee-control'],
    tags: ['circuit-theory', 'network-analysis', 'thevenin', 'ac-circuits', 'gate-ee'],
    color: '#7c2d12',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-ee-machines',
    slug: 'ee-electrical-machines',
    title: 'Electrical Machines',
    shortTitle: 'E. Machines',
    description: 'DC machines, transformers, induction motors, synchronous machines — construction, operating principles, and characteristics.',
    guide: `## Overview
Electrical Machines convert between electrical and mechanical energy — the core of every power plant, electric vehicle, and industrial drive. It is a major GATE EE and PSU interview topic.

## What You Will Learn
### Transformers
Ideal and practical transformer. Equivalent circuit, per-unit system. OC and SC tests. Voltage regulation, efficiency. Auto-transformer, three-phase transformers.

### DC Machines
DC generator types (separately excited, shunt, series, compound) — EMF equation, armature reaction, commutation. DC motor: torque-speed characteristics, starting methods, speed control.

### Induction Motors
Construction, rotating magnetic field, slip, equivalent circuit. Torque-slip characteristics. Starting (DOL, star-delta, autotransformer). Speed control (frequency, voltage, pole changing).

### Synchronous Machines
Synchronous generator: EMF equation, phasor diagram, regulation. Parallel operation and synchronisation. Synchronous motor: V-curves, hunting.

## GATE EE Weightage
Electrical Machines accounts for **10–12 marks**. Induction motor equivalent circuit and transformer regulation are most tested.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-ee-machines-dc',
      'veda-topic-ee-machines-transformers',
      'veda-topic-ee-machines-induction',
      'veda-topic-ee-machines-sync',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-ee'],
    relatedSubjectIds: ['veda-subject-ee-power-systems', 'veda-subject-ee-power-electronics'],
    tags: ['electrical-machines', 'motors', 'transformers', 'induction-motor', 'gate-ee'],
    color: '#7c2d12',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-ee-power-systems',
    slug: 'ee-power-systems',
    title: 'Power Systems',
    shortTitle: 'Power Systems',
    description: 'Power generation, transmission lines, load flow analysis, fault analysis, protection, and stability.',
    guide: `## Overview
Power Systems engineering deals with generating, transmitting, and distributing electrical power. It is the core specialisation for PSU roles at NTPC, PGCIL, and state electricity boards.

## What You Will Learn
### Transmission Lines
Short, medium, long-line models. ABCD parameters. Surge impedance loading. Ferranti effect.

### Load Flow Analysis
Bus types (slack, PV, PQ). Gauss-Seidel and Newton-Raphson load flow methods. Fast-decoupled load flow.

### Fault Analysis
Symmetrical faults (three-phase short circuit). Unsymmetrical faults — sequence networks (positive, negative, zero), symmetrical components.

### Power System Stability
Swing equation, equal area criterion. Transient stability improvement methods.

### Protection
Overcurrent, differential, distance relay principles. CT and PT. Circuit breakers and switchgear.

### Per-Unit System
Base quantities, per-unit conversion, change of base formula.

## GATE EE Weightage
Power Systems accounts for **10–12 marks**. Load flow, fault analysis, and stability are most tested.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-ee-ps-transmission',
      'veda-topic-ee-ps-faults',
      'veda-topic-ee-ps-protection',
      'veda-topic-ee-ps-load-flow',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-ee'],
    relatedSubjectIds: ['veda-subject-ee-machines', 'veda-subject-ee-circuit-theory'],
    tags: ['power-systems', 'transmission', 'fault-analysis', 'protection', 'gate-ee'],
    color: '#7c2d12',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-ee-control',
    slug: 'ee-control-systems',
    title: 'Control Systems',
    shortTitle: 'Control Systems',
    description: 'Transfer functions, block diagrams, time and frequency response, stability analysis, Bode plots, Nyquist, root locus, and PID control.',
    guide: `## Overview
Control Systems theory underpins everything from power station governors to autopilots and robotics. It appears in GATE EE, GATE ECE, and GATE ME — making it one of the most universal engineering subjects.

## What You Will Learn
### Modelling
Transfer function, block diagram reduction, signal flow graphs (Mason's gain formula). Mathematical modelling of electrical, mechanical, and electromechanical systems.

### Time Domain Analysis
Standard test signals. First and second order system response — rise time, peak time, settling time, overshoot. Steady-state errors and error constants.

### Stability Analysis
BIBO stability. Routh-Hurwitz criterion. Root locus construction rules. Gain margin and phase margin.

### Frequency Domain Analysis
Bode plot (magnitude and phase). Nyquist stability criterion and Nyquist plot. Gain and phase margins from Bode plots.

### Controllers
P, PI, PD, PID controllers — effects on system performance. Lead and lag compensators. State space representation.

## GATE EE/ECE Weightage
Control Systems accounts for **8–10 marks** in both GATE EE and GATE ECE. Root locus and Bode plot are consistently tested.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-ee-cs-modelling',
      'veda-topic-ee-cs-stability',
      'veda-topic-ee-cs-frequency',
      'veda-topic-ee-cs-compensation',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-ee', 'veda-exam-gate-ece'],
    relatedSubjectIds: ['veda-subject-ee-signals', 'veda-subject-ee-circuit-theory'],
    tags: ['control-systems', 'bode-plot', 'stability', 'pid', 'gate-ee', 'gate-ece'],
    color: '#7c2d12',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-ee-signals',
    slug: 'ee-signals-systems',
    title: 'Signals & Systems',
    shortTitle: 'S&S',
    description: 'Continuous and discrete-time signals, Fourier series, Fourier transform, Laplace transform, Z-transform, LTI systems, and sampling.',
    guide: `## Overview
Signals & Systems provides the mathematical toolkit for processing information — foundational to communications, signal processing, control, and modern AI/ML pipelines. Shared by GATE EE and GATE ECE.

## What You Will Learn
### Signal Classification
Continuous vs discrete, periodic vs aperiodic, energy vs power, causal vs non-causal, deterministic vs random.

### LTI Systems
Linear time-invariant systems — convolution, impulse response, step response. BIBO stability. Causality conditions.

### Fourier Analysis
Fourier series (continuous): trigonometric and exponential forms. Fourier Transform and its properties (linearity, shifting, scaling, convolution theorem). DTFT and DFT.

### Laplace Transform
One-sided Laplace. Properties and transform pairs. ROC (Region of Convergence). Solving differential equations. System function H(s).

### Z-Transform
Definition, properties, ROC. Inverse Z-transform (partial fractions, power series). Relationship to DTFT.

### Sampling Theorem
Nyquist-Shannon sampling theorem. Aliasing. Reconstruction.

## GATE EE/ECE Weightage
Signals & Systems accounts for **8–10 marks** and is the linking subject between circuits and communications.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-ee-ss-signals',
      'veda-topic-ee-ss-fourier',
      'veda-topic-ee-ss-laplace',
      'veda-topic-ee-ss-z-transform',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-ee', 'veda-exam-gate-ece'],
    relatedSubjectIds: ['veda-subject-ee-control', 'veda-subject-ece-comms'],
    tags: ['signals-systems', 'fourier', 'laplace', 'z-transform', 'gate-ee', 'gate-ece'],
    color: '#7c2d12',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-ee-power-electronics',
    slug: 'ee-power-electronics',
    title: 'Power Electronics & Drives',
    shortTitle: 'Power Electronics',
    description: 'Power semiconductor devices, rectifiers, DC-DC converters, inverters, AC drives, and energy conversion.',
    guide: `## Overview
Power Electronics is the technology of converting and controlling electrical power efficiently. It enables EV drives, solar inverters, SMPS, and variable-speed motor drives — a rapidly growing field.

## What You Will Learn
### Power Semiconductor Devices
Diodes, Thyristor (SCR) — characteristics and gate triggering. MOSFET and IGBT in switching applications.

### Rectifiers
Uncontrolled (half-wave, full-wave, bridge). Controlled: single-phase fully controlled rectifier (output voltage, ripple). Three-phase controlled rectifiers.

### DC-DC Converters (Choppers)
Buck, boost, buck-boost converters. Continuous vs discontinuous conduction mode. Duty cycle, voltage conversion ratio.

### Inverters
Single-phase and three-phase VSI. PWM techniques (SPWM, SHE). Harmonic reduction.

### AC Voltage Controllers
Phase angle control. Applications in speed control and soft starters.

### Drives
DC motor speed control using choppers. AC induction motor V/f control, vector control basics.

## GATE EE Weightage
Power Electronics accounts for **5–8 marks**. Converter output voltage derivation and switching waveforms are key question types.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-ee-pe-rectifiers',
      'veda-topic-ee-pe-dc-dc',
      'veda-topic-ee-pe-inverters',
      'veda-topic-ee-pe-drives',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-ee'],
    relatedSubjectIds: ['veda-subject-ee-machines', 'veda-subject-ee-circuit-theory'],
    tags: ['power-electronics', 'inverters', 'converters', 'drives', 'gate-ee'],
    color: '#7c2d12',
    updatedAt: '2026-09-16',
  },
];
