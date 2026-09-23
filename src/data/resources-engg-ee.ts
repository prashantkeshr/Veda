import type { Resource } from '../models';

const base = {
  courseIds: [] as string[], branchIds: [] as string[], semesterIds: [] as string[],
  institutionIds: [] as string[], relatedResourceIds: [] as string[], prerequisiteIds: [] as string[],
  verificationStatus: 'verified' as const, contentStatus: 'published' as const,
  language: 'en', academicLevel: 'undergraduate' as const,
  createdAt: '2025-01-01', updatedAt: '2025-01-01',
};

export const resourcesEnggEeData: Resource[] = [

  // ── Circuit Theory – Network Theorems ─────────────────────────────────────────
  {
    ...base, id: 'veda-re-ct-01', slug: 'ee-circuit-theorems-allabout',
    title: "Network Theorems – Thevenin, Norton, Superposition | All About Circuits",
    description: "Superposition, Thevenin's, Norton's, Maximum Power Transfer, and Millman's theorems with worked examples and circuit diagrams. Free textbook-quality reference from AllAboutCircuits.",
    type: 'website', url: 'https://www.allaboutcircuits.com/textbook/direct-current/chpt-10/',
    subjectIds: ['veda-subject-ee-circuit-theory'], topicIds: ['veda-topic-ee-ct-network-theorems'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'All About Circuits', provider: 'All About Circuits',
    tags: ['network-theorems', 'thevenin', 'norton', 'superposition', 'gate-ee'],
    seoTitle: "Network Theorems – Thevenin, Norton | All About Circuits", seoDescription: "Free textbook coverage of all network theorems for GATE EE circuit theory.",
  },
  {
    ...base, id: 'veda-re-ct-02', slug: 'ee-circuits-nptel',
    title: 'Basic Electrical Circuits – NPTEL IIT Madras',
    description: 'KVL/KCL, network theorems, AC analysis, phasors, resonance, two-port networks, and transient analysis. Full GATE EE circuit theory syllabus coverage from IIT Madras faculty.',
    type: 'video', url: 'https://nptel.ac.in/courses/108106070',
    subjectIds: ['veda-subject-ee-circuit-theory'], topicIds: ['veda-topic-ee-ct-network-theorems', 'veda-topic-ee-ct-ac-analysis', 'veda-topic-ee-ct-resonance', 'veda-topic-ee-ct-two-port'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'IIT Madras', provider: 'NPTEL',
    tags: ['circuits', 'kvl', 'kcl', 'phasors', 'two-port', 'NPTEL', 'gate-ee'],
    seoTitle: 'Basic Electrical Circuits – NPTEL IIT Madras', seoDescription: 'Full NPTEL electrical circuits course aligned with GATE EE circuit theory syllabus.',
  },

  // ── Circuit Theory – AC Analysis ─────────────────────────────────────────────
  {
    ...base, id: 'veda-re-ct-03', slug: 'ee-ac-analysis-khan',
    title: 'AC Circuits – Phasors, Impedance, Power Factor | Khan Academy',
    description: 'Phasor notation, impedance of R, L, C elements, KVL/KCL in phasor domain, real/reactive/apparent power, power factor correction with capacitors, and RMS values.',
    type: 'website', url: 'https://www.khanacademy.org/science/ap-physics-2/ap-circuits-topic',
    subjectIds: ['veda-subject-ee-circuit-theory'], topicIds: ['veda-topic-ee-ct-ac-analysis'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'Khan Academy', provider: 'Khan Academy',
    tags: ['ac-circuits', 'phasors', 'impedance', 'power-factor', 'reactive-power'],
    seoTitle: 'AC Circuits – Phasors & Power Factor | Khan Academy', seoDescription: 'Khan Academy AC circuits covering phasors, impedance, and power factor correction.',
  },

  // ── Circuit Theory – Resonance ────────────────────────────────────────────────
  {
    ...base, id: 'veda-re-ct-04', slug: 'ee-resonance-allabout',
    title: 'Series & Parallel Resonance – Q-Factor, Bandwidth | All About Circuits',
    description: 'Series RLC resonance (minimum impedance), parallel RLC resonance (maximum impedance), quality factor Q, bandwidth, half-power frequencies, and selectivity. Includes solved examples.',
    type: 'website', url: 'https://www.allaboutcircuits.com/textbook/alternating-current/chpt-6/',
    subjectIds: ['veda-subject-ee-circuit-theory'], topicIds: ['veda-topic-ee-ct-resonance'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'All About Circuits', provider: 'All About Circuits',
    tags: ['resonance', 'q-factor', 'bandwidth', 'rlc', 'series-resonance'],
    seoTitle: 'RLC Resonance – Q-Factor & Bandwidth | All About Circuits', seoDescription: 'Series and parallel RLC resonance, Q-factor, and bandwidth for GATE EE circuits.',
  },

  // ── Circuit Theory – Two-Port Networks ────────────────────────────────────────
  {
    ...base, id: 'veda-re-ct-05', slug: 'ee-two-port-gfg',
    title: 'Two-Port Networks – Z, Y, h, ABCD Parameters | GeeksforGeeks',
    description: 'Two-port network parameter matrices (Z, Y, h-parameters, ABCD transmission), conversions between parameter sets, condition for reciprocity and symmetry, interconnection of two-ports.',
    type: 'website', url: 'https://www.geeksforgeeks.org/two-port-networks/',
    subjectIds: ['veda-subject-ee-circuit-theory'], topicIds: ['veda-topic-ee-ct-two-port'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['two-port', 'z-parameters', 'y-parameters', 'h-parameters', 'abcd'],
    seoTitle: 'Two-Port Networks – Z, Y, h Parameters for GATE EE | GfG', seoDescription: 'Two-port network parameter analysis and conversions for GATE EE circuit theory.',
  },

  // ── Electrical Machines – DC Machines ─────────────────────────────────────────
  {
    ...base, id: 'veda-re-em-01', slug: 'ee-dc-machines-nptel',
    title: 'Electrical Machines – NPTEL IIT Kharagpur',
    description: 'DC machines: EMF equation, torque, speed-torque characteristics, starting and speed control, losses and efficiency. AC machines: transformers, induction motors, synchronous machines — full GATE EE scope.',
    type: 'video', url: 'https://nptel.ac.in/courses/108105066',
    subjectIds: ['veda-subject-ee-machines'], topicIds: ['veda-topic-ee-machines-dc', 'veda-topic-ee-machines-transformers', 'veda-topic-ee-machines-induction', 'veda-topic-ee-machines-sync'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'IIT Kharagpur', provider: 'NPTEL',
    tags: ['electrical-machines', 'dc-motor', 'transformer', 'induction-motor', 'NPTEL'],
    seoTitle: 'Electrical Machines – NPTEL IIT Kharagpur', seoDescription: 'Full NPTEL electrical machines course for GATE EE: DC, transformers, and AC machines.',
  },
  {
    ...base, id: 'veda-re-em-02', slug: 'ee-dc-machines-allabout',
    title: 'DC Motors & Generators – Construction, EMF, Speed Control | All About Circuits',
    description: 'DC machine construction (armature, field winding, commutator), EMF equation, torque equation, motor types (shunt, series, compound), speed-torque curves, and efficiency calculation.',
    type: 'website', url: 'https://www.allaboutcircuits.com/textbook/alternating-current/chpt-13/',
    subjectIds: ['veda-subject-ee-machines'], topicIds: ['veda-topic-ee-machines-dc'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'All About Circuits', provider: 'All About Circuits',
    tags: ['dc-motor', 'dc-generator', 'emf-equation', 'speed-torque', 'shunt-motor'],
    seoTitle: 'DC Machines – EMF, Torque & Speed Control | All About Circuits', seoDescription: 'DC motor and generator operation, EMF equation, and speed control for GATE EE.',
  },

  // ── Electrical Machines – Transformers ────────────────────────────────────────
  {
    ...base, id: 'veda-re-em-03', slug: 'ee-transformer-electronics-tutorials',
    title: 'Transformer – EMF Equation, Equivalent Circuit, Tests | Electronics Tutorials',
    description: 'Transformer principle, EMF equation, turns ratio, equivalent circuit referred to primary/secondary, no-load and short-circuit tests, voltage regulation, and efficiency at maximum load.',
    type: 'website', url: 'https://www.electronics-tutorials.ws/transformer/transformer-basics.html',
    subjectIds: ['veda-subject-ee-machines'], topicIds: ['veda-topic-ee-machines-transformers'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'Electronics Tutorials', provider: 'Electronics Tutorials',
    tags: ['transformer', 'emf-equation', 'turns-ratio', 'voltage-regulation', 'efficiency'],
    seoTitle: 'Transformer Basics – EMF & Efficiency for GATE EE | ET', seoDescription: 'Transformer EMF equation, equivalent circuit, and efficiency for GATE EE machines.',
  },

  // ── Electrical Machines – Induction Motor ─────────────────────────────────────
  {
    ...base, id: 'veda-re-em-04', slug: 'ee-induction-motor-gfg',
    title: 'Three-Phase Induction Motor – Slip, Torque, Equivalent Circuit | GfG',
    description: 'Three-phase induction motor: rotating magnetic field, slip, rotor frequency, equivalent circuit (Thevenin), torque-slip characteristic, starting torque, maximum torque condition, and speed control.',
    type: 'website', url: 'https://www.geeksforgeeks.org/three-phase-induction-motor/',
    subjectIds: ['veda-subject-ee-machines'], topicIds: ['veda-topic-ee-machines-induction'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['induction-motor', 'slip', 'torque-slip', 'rotating-field', 'rotor-frequency'],
    seoTitle: 'Induction Motor – Slip & Torque for GATE EE | GfG', seoDescription: 'Three-phase induction motor slip, torque-slip curve, and equivalent circuit for GATE EE.',
  },

  // ── Electrical Machines – Synchronous Machine ─────────────────────────────────
  {
    ...base, id: 'veda-re-em-05', slug: 'ee-synchronous-machine-gfg',
    title: 'Synchronous Generator & Motor – EMF, V-Curve, Stability | GfG',
    description: 'Synchronous generator EMF equation, phasor diagram, voltage regulation, synchronous impedance method, synchronous motor V-curves, hunting, and pull-out torque.',
    type: 'website', url: 'https://www.geeksforgeeks.org/synchronous-generator/',
    subjectIds: ['veda-subject-ee-machines'], topicIds: ['veda-topic-ee-machines-sync'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['synchronous-generator', 'synchronous-motor', 'v-curve', 'pull-out-torque'],
    seoTitle: 'Synchronous Generator & Motor for GATE EE | GfG', seoDescription: 'Synchronous machine operation, V-curves, and voltage regulation for GATE EE.',
  },

  // ── Power Systems – Transmission Lines ───────────────────────────────────────
  {
    ...base, id: 'veda-re-ps-01', slug: 'ee-power-systems-nptel',
    title: 'Power Systems Analysis – NPTEL IIT Bombay',
    description: 'Transmission line models (short/medium/long), ABCD parameters, receiving-end voltage and power, load flow (Gauss-Seidel, Newton-Raphson), symmetrical faults, protection systems.',
    type: 'video', url: 'https://nptel.ac.in/courses/108101055',
    subjectIds: ['veda-subject-ee-power-systems'], topicIds: ['veda-topic-ee-ps-transmission', 'veda-topic-ee-ps-faults', 'veda-topic-ee-ps-protection', 'veda-topic-ee-ps-load-flow'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'IIT Bombay', provider: 'NPTEL',
    tags: ['power-systems', 'transmission-line', 'load-flow', 'fault-analysis', 'NPTEL'],
    seoTitle: 'Power Systems Analysis – NPTEL IIT Bombay', seoDescription: 'NPTEL power systems course: transmission, load flow, faults, and protection for GATE EE.',
  },
  {
    ...base, id: 'veda-re-ps-02', slug: 'ee-transmission-line-gfg',
    title: 'Transmission Line – Short, Medium, Long Line Models | GfG',
    description: 'Short line (R+jωL model), medium line (π and T models), long line (distributed parameters), ABCD parameters, voltage regulation, Ferranti effect, and surge impedance loading.',
    type: 'website', url: 'https://www.geeksforgeeks.org/transmission-line-in-power-systems/',
    subjectIds: ['veda-subject-ee-power-systems'], topicIds: ['veda-topic-ee-ps-transmission'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['transmission-line', 'abcd-parameters', 'ferranti-effect', 'voltage-regulation'],
    seoTitle: 'Transmission Line Models for GATE EE | GfG', seoDescription: 'Short, medium, long transmission line models and ABCD parameters for GATE EE power systems.',
  },

  // ── Power Systems – Fault Analysis ───────────────────────────────────────────
  {
    ...base, id: 'veda-re-ps-03', slug: 'ee-faults-symmetrical-gfg',
    title: 'Symmetrical & Unsymmetrical Faults – Sequence Networks | GfG',
    description: 'Three-phase symmetrical fault (subtransient, transient, steady-state current), positive/negative/zero sequence networks, method of symmetrical components, LG, LL, LLG fault analysis.',
    type: 'website', url: 'https://www.geeksforgeeks.org/fault-analysis-in-power-system/',
    subjectIds: ['veda-subject-ee-power-systems'], topicIds: ['veda-topic-ee-ps-faults'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'advanced', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['fault-analysis', 'symmetrical-components', 'sequence-networks', 'lg-fault'],
    seoTitle: 'Fault Analysis & Symmetrical Components for GATE EE | GfG', seoDescription: 'Symmetrical and unsymmetrical fault analysis using sequence networks for GATE EE.',
  },

  // ── Power Systems – Protection ────────────────────────────────────────────────
  {
    ...base, id: 'veda-re-ps-04', slug: 'ee-protection-gfg',
    title: 'Power System Protection – Relays, Circuit Breakers, CT | GfG',
    description: 'Over-current and distance relays, differential protection, current transformers and potential transformers, distance protection characteristics (MHO, impedance), auto-reclosing.',
    type: 'website', url: 'https://www.geeksforgeeks.org/power-system-protection/',
    subjectIds: ['veda-subject-ee-power-systems'], topicIds: ['veda-topic-ee-ps-protection'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['protection', 'relay', 'current-transformer', 'distance-relay', 'circuit-breaker'],
    seoTitle: 'Power System Protection & Relays for GATE EE | GfG', seoDescription: 'Protection relays, CT/PT, and distance protection for GATE EE power systems.',
  },

  // ── Power Systems – Load Flow ─────────────────────────────────────────────────
  {
    ...base, id: 'veda-re-ps-05', slug: 'ee-load-flow-gfg',
    title: 'Load Flow Analysis – Gauss-Seidel, Newton-Raphson | GfG',
    description: 'Power flow equations, Ybus (bus admittance matrix) formation, Gauss-Seidel and Newton-Raphson load flow methods, bus types (slack, PV, PQ), and convergence comparison.',
    type: 'website', url: 'https://www.geeksforgeeks.org/load-flow-study-in-power-system/',
    subjectIds: ['veda-subject-ee-power-systems'], topicIds: ['veda-topic-ee-ps-load-flow'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'advanced', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['load-flow', 'ybus', 'newton-raphson', 'gauss-seidel', 'power-flow'],
    seoTitle: 'Load Flow Analysis for GATE EE | GfG', seoDescription: 'Ybus formation, Gauss-Seidel, and Newton-Raphson load flow methods for GATE EE.',
  },

  // ── Control Systems – Modelling ───────────────────────────────────────────────
  {
    ...base, id: 'veda-re-cs-01', slug: 'ee-control-systems-nptel',
    title: 'Control Systems – NPTEL IIT Madras',
    description: 'Transfer function modelling, block diagram reduction, signal flow graph (Mason\'s gain formula), time response (first/second order), stability (Routh-Hurwitz), root locus, Bode plot, Nyquist criteria, compensators.',
    type: 'video', url: 'https://nptel.ac.in/courses/108106098',
    subjectIds: ['veda-subject-ee-control'], topicIds: ['veda-topic-ee-cs-modelling', 'veda-topic-ee-cs-stability', 'veda-topic-ee-cs-frequency', 'veda-topic-ee-cs-compensation'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'IIT Madras', provider: 'NPTEL',
    tags: ['control-systems', 'transfer-function', 'root-locus', 'bode-plot', 'NPTEL'],
    seoTitle: 'Control Systems – NPTEL IIT Madras', seoDescription: 'Full NPTEL control systems course covering modelling, stability, and frequency response.',
  },
  {
    ...base, id: 'veda-re-cs-02', slug: 'ee-control-modelling-allabout',
    title: 'Transfer Function & Block Diagram Reduction | All About Circuits',
    description: 'Laplace-domain transfer functions, block diagram algebra, Mason\'s signal flow graph rule, first/second-order system step response, rise time, settling time, and percent overshoot.',
    type: 'website', url: 'https://www.allaboutcircuits.com/technical-articles/transfer-function-block-diagram/',
    subjectIds: ['veda-subject-ee-control'], topicIds: ['veda-topic-ee-cs-modelling'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'All About Circuits', provider: 'All About Circuits',
    tags: ['transfer-function', 'block-diagram', 'signal-flow-graph', 'mason-gain'],
    seoTitle: 'Transfer Function & Block Diagram for GATE EE | All About Circuits', seoDescription: 'Transfer function modelling, block diagram reduction, and Mason\'s rule for GATE control.',
  },

  // ── Control Systems – Stability ───────────────────────────────────────────────
  {
    ...base, id: 'veda-re-cs-03', slug: 'ee-control-stability-gfg',
    title: 'Control System Stability – Routh-Hurwitz & Root Locus | GfG',
    description: 'Routh-Hurwitz stability criterion, Routh table construction, imaginary-axis roots, root locus rules (angle condition, magnitude condition), gain and phase margin definition.',
    type: 'website', url: 'https://www.geeksforgeeks.org/routh-hurwitz-stability-criterion/',
    subjectIds: ['veda-subject-ee-control'], topicIds: ['veda-topic-ee-cs-stability'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['routh-hurwitz', 'root-locus', 'stability', 'gain-margin', 'phase-margin'],
    seoTitle: 'Routh-Hurwitz & Root Locus for GATE EE | GfG', seoDescription: 'Routh table, root locus rules, and stability margins for GATE EE control systems.',
  },

  // ── Control Systems – Frequency Response ─────────────────────────────────────
  {
    ...base, id: 'veda-re-cs-04', slug: 'ee-control-frequency-gfg',
    title: 'Bode Plot & Nyquist Criterion for GATE EE | GeeksforGeeks',
    description: 'Bode magnitude and phase plots for standard factors, asymptotic approximations, gain/phase crossover frequencies, Nyquist stability criterion, Nyquist plot construction, and gain/phase margins.',
    type: 'website', url: 'https://www.geeksforgeeks.org/bode-plot-in-control-systems/',
    subjectIds: ['veda-subject-ee-control'], topicIds: ['veda-topic-ee-cs-frequency'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['bode-plot', 'nyquist', 'gain-margin', 'phase-margin', 'frequency-response'],
    seoTitle: 'Bode Plot & Nyquist Criterion for GATE EE | GfG', seoDescription: 'Bode plot construction, Nyquist criterion, and gain/phase margins for GATE EE.',
  },

  // ── Control Systems – Compensators ────────────────────────────────────────────
  {
    ...base, id: 'veda-re-cs-05', slug: 'ee-control-compensators-gfg',
    title: 'PID Controller & Lead-Lag Compensators | GeeksforGeeks',
    description: 'PID controller (proportional, integral, derivative), lead compensator (improves transient), lag compensator (improves steady-state), lead-lag combination, and state-space representation basics.',
    type: 'website', url: 'https://www.geeksforgeeks.org/pid-controller/',
    subjectIds: ['veda-subject-ee-control'], topicIds: ['veda-topic-ee-cs-compensation'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['pid', 'lead-compensator', 'lag-compensator', 'state-space', 'compensator'],
    seoTitle: 'PID & Lead-Lag Compensators for GATE EE | GfG', seoDescription: 'PID controller, lead-lag compensator design for GATE EE control systems.',
  },

  // ── Signals & Systems – Signals ────────────────────────────────────────────────
  {
    ...base, id: 'veda-re-ss-01', slug: 'ee-signals-nptel',
    title: 'Signals & Systems – NPTEL IIT Bombay',
    description: 'Continuous and discrete signals/systems, LTI system properties, convolution, Fourier series, Fourier transform, Laplace transform, Z-transform, and sampling theorem. Complete GATE EE/ECE SS syllabus.',
    type: 'video', url: 'https://nptel.ac.in/courses/117101055',
    subjectIds: ['veda-subject-ee-signals'], topicIds: ['veda-topic-ee-ss-signals', 'veda-topic-ee-ss-fourier', 'veda-topic-ee-ss-laplace', 'veda-topic-ee-ss-z-transform'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'IIT Bombay', provider: 'NPTEL',
    tags: ['signals-systems', 'fourier', 'laplace', 'z-transform', 'lti', 'NPTEL'],
    seoTitle: 'Signals & Systems – NPTEL IIT Bombay', seoDescription: 'Full NPTEL signals and systems course for GATE EE/ECE: Fourier, Laplace, Z-transforms.',
  },
  {
    ...base, id: 'veda-re-ss-02', slug: 'ee-signals-gfg',
    title: 'Signals & Systems – LTI, Convolution, Sampling | GeeksforGeeks',
    description: 'Signal classification (periodic, energy/power), system properties (linearity, time-invariance, causality, stability), convolution integral and sum, BIBO stability, and Nyquist sampling theorem.',
    type: 'website', url: 'https://www.geeksforgeeks.org/signals-and-systems-tutorials/',
    subjectIds: ['veda-subject-ee-signals'], topicIds: ['veda-topic-ee-ss-signals'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['lti', 'convolution', 'bibo', 'sampling', 'nyquist', 'signals'],
    seoTitle: 'Signals & Systems – LTI & Convolution for GATE EE | GfG', seoDescription: 'LTI system properties, convolution, and Nyquist sampling for GATE EE signals.',
  },

  // ── Signals – Fourier Transform ────────────────────────────────────────────────
  {
    ...base, id: 'veda-re-ss-03', slug: 'ee-fourier-3b1b',
    title: 'Fourier Series – Visual Intuition | 3Blue1Brown',
    description: 'Beautiful visual explanation of Fourier series as decomposing any periodic signal into sine/cosine harmonics. Ideal for building deep intuition before tackling GATE Fourier transform questions.',
    type: 'video', url: 'https://www.youtube.com/watch?v=r6sGWTCMz2k',
    subjectIds: ['veda-subject-ee-signals'], topicIds: ['veda-topic-ee-ss-fourier'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: '3Blue1Brown', provider: 'YouTube',
    tags: ['fourier-series', 'visual', '3blue1brown', 'harmonics', 'gate-ee'],
    durationMinutes: 21,
    seoTitle: 'Fourier Series Visual Intuition – 3Blue1Brown', seoDescription: '3Blue1Brown\'s visual Fourier series explanation — best intuition for GATE EE signals.',
  },

  // ── Signals – Laplace Transform ────────────────────────────────────────────────
  {
    ...base, id: 'veda-re-ss-04', slug: 'ee-laplace-khan',
    title: 'Laplace Transform – Definition, Properties, Inverse | Khan Academy',
    description: 'Laplace transform definition, linearity, differentiation and integration properties, s-domain circuit analysis, inverse Laplace (partial fractions), and initial/final value theorems.',
    type: 'website', url: 'https://www.khanacademy.org/math/differential-equations/laplace-transform',
    subjectIds: ['veda-subject-ee-signals'], topicIds: ['veda-topic-ee-ss-laplace'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'Khan Academy', provider: 'Khan Academy',
    tags: ['laplace-transform', 'inverse-laplace', 'partial-fractions', 'initial-value'],
    seoTitle: 'Laplace Transform – Properties & Inverse | Khan Academy', seoDescription: 'Laplace transform properties, partial fractions, and s-domain analysis for GATE EE.',
  },

  // ── Signals – Z-Transform ──────────────────────────────────────────────────────
  {
    ...base, id: 'veda-re-ss-05', slug: 'ee-z-transform-gfg',
    title: 'Z-Transform – Region of Convergence, Inverse Z | GfG',
    description: 'Z-transform definition, properties (time shifting, convolution, differentiation), region of convergence (ROC), inverse Z-transform, and analysis of discrete LTI systems using Z-transform.',
    type: 'website', url: 'https://www.geeksforgeeks.org/z-transform-in-signals-and-systems/',
    subjectIds: ['veda-subject-ee-signals'], topicIds: ['veda-topic-ee-ss-z-transform'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['z-transform', 'roc', 'discrete-time', 'inverse-z', 'digital-signal'],
    seoTitle: 'Z-Transform & ROC for GATE EE | GfG', seoDescription: 'Z-transform properties, ROC, and inverse Z-transform for GATE EE discrete signals.',
  },

  // ── Power Electronics – Rectifiers ────────────────────────────────────────────
  {
    ...base, id: 'veda-re-pe-01', slug: 'ee-power-electronics-nptel',
    title: 'Power Electronics – NPTEL IIT Bombay',
    description: 'Power semiconductor devices (diode, thyristor, IGBT, MOSFET), rectifiers, DC-DC converters (Buck, Boost, Buck-Boost), inverters, and electric drive applications. Full GATE EE PE syllabus.',
    type: 'video', url: 'https://nptel.ac.in/courses/108101119',
    subjectIds: ['veda-subject-ee-power-electronics'], topicIds: ['veda-topic-ee-pe-rectifiers', 'veda-topic-ee-pe-dc-dc', 'veda-topic-ee-pe-inverters', 'veda-topic-ee-pe-drives'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'IIT Bombay', provider: 'NPTEL',
    tags: ['power-electronics', 'rectifier', 'inverter', 'igbt', 'dc-dc', 'NPTEL'],
    seoTitle: 'Power Electronics – NPTEL IIT Bombay', seoDescription: 'Full NPTEL power electronics course for GATE EE: rectifiers, DC-DC, and inverters.',
  },
  {
    ...base, id: 'veda-re-pe-02', slug: 'ee-rectifiers-electronics-tutorials',
    title: 'Rectifier Circuits – Half-Wave, Full-Wave, Bridge, PIV | ET',
    description: 'Half-wave and full-wave rectifiers, bridge rectifier, PIV calculation, ripple factor, efficiency, and capacitor filter analysis. Includes waveform diagrams and worked numericals.',
    type: 'website', url: 'https://www.electronics-tutorials.ws/diode/diode_5.html',
    subjectIds: ['veda-subject-ee-power-electronics'], topicIds: ['veda-topic-ee-pe-rectifiers'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'Electronics Tutorials', provider: 'Electronics Tutorials',
    tags: ['rectifier', 'full-wave', 'bridge-rectifier', 'piv', 'ripple-factor'],
    seoTitle: 'Rectifier Circuits – Full-Wave & Bridge | Electronics Tutorials', seoDescription: 'Half-wave, full-wave, and bridge rectifier analysis with PIV and ripple factor.',
  },

  // ── Power Electronics – DC-DC Converters ──────────────────────────────────────
  {
    ...base, id: 'veda-re-pe-03', slug: 'ee-dc-dc-converters-electronics-tutorials',
    title: 'DC-DC Converters – Buck, Boost, Buck-Boost | Electronics Tutorials',
    description: 'Switch-mode Buck (step-down), Boost (step-up), and Buck-Boost converters: voltage conversion ratio, duty cycle, inductor current ripple, and continuous vs discontinuous conduction modes.',
    type: 'website', url: 'https://www.electronics-tutorials.ws/power/switch-mode-power-supply.html',
    subjectIds: ['veda-subject-ee-power-electronics'], topicIds: ['veda-topic-ee-pe-dc-dc'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'Electronics Tutorials', provider: 'Electronics Tutorials',
    tags: ['buck-converter', 'boost-converter', 'duty-cycle', 'ccm', 'switch-mode'],
    seoTitle: 'Buck, Boost & Buck-Boost DC-DC Converters | ET', seoDescription: 'Duty cycle, voltage ratio, and inductor ripple for Buck/Boost converters in GATE EE.',
  },

  // ── Power Electronics – Inverters ─────────────────────────────────────────────
  {
    ...base, id: 'veda-re-pe-04', slug: 'ee-inverters-gfg',
    title: 'Inverters – VSI, CSI, Single-Phase & Three-Phase | GfG',
    description: 'Single-phase and three-phase voltage source inverters (VSI), current source inverters (CSI), sinusoidal PWM, total harmonic distortion (THD), and multi-level inverter introduction.',
    type: 'website', url: 'https://www.geeksforgeeks.org/inverter/',
    subjectIds: ['veda-subject-ee-power-electronics'], topicIds: ['veda-topic-ee-pe-inverters'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['inverter', 'vsi', 'pwm', 'thd', 'three-phase-inverter'],
    seoTitle: 'Inverters – VSI, PWM & THD for GATE EE | GfG', seoDescription: 'VSI, CSI, and sinusoidal PWM inverter operation and THD analysis for GATE EE.',
  },

  // ── Power Electronics – Electric Drives ───────────────────────────────────────
  {
    ...base, id: 'veda-re-pe-05', slug: 'ee-electric-drives-gfg',
    title: 'Electric Drives – DC & AC Motor Drive Systems | GfG',
    description: 'DC motor drives (chopper-controlled), variable-voltage variable-frequency (VVVF) drives for induction motors, torque-speed control, four-quadrant operation, and regenerative braking.',
    type: 'website', url: 'https://www.geeksforgeeks.org/electric-drives/',
    subjectIds: ['veda-subject-ee-power-electronics'], topicIds: ['veda-topic-ee-pe-drives'],
    examIds: ['veda-exam-gate-ee'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['electric-drives', 'vvvf', 'chopper', 'regenerative-braking', 'four-quadrant'],
    seoTitle: 'Electric Drives – VVVF & DC Drives for GATE EE | GfG', seoDescription: 'DC and AC motor drive systems, VVVF control, and regenerative braking for GATE EE.',
  },
];
