import type { Resource } from '../models';

const base = {
  courseIds: [] as string[], branchIds: [] as string[], semesterIds: [] as string[],
  institutionIds: [] as string[], relatedResourceIds: [] as string[], prerequisiteIds: [] as string[],
  verificationStatus: 'verified' as const, contentStatus: 'published' as const,
  language: 'en', academicLevel: 'undergraduate' as const,
  createdAt: '2025-01-01', updatedAt: '2025-01-01',
};

export const resourcesEnggChemData: Resource[] = [

  // ── Chemical Thermodynamics – PVT Relations ────────────────────────────────────
  {
    ...base, id: 'veda-rch-th-01', slug: 'ch-thermo-pvt-nptel',
    title: 'Chemical Engineering Thermodynamics – NPTEL IIT Madras',
    description: 'PVT relations (EOS: van der Waals, Peng-Robinson, Soave-Redlich-Kwong), fugacity, activity, chemical potential, solution thermodynamics, and phase and reaction equilibria. Full GATE CH thermodynamics syllabus.',
    type: 'video', url: 'https://nptel.ac.in/courses/103106074',
    subjectIds: ['veda-subject-ch-chem-thermo'], topicIds: ['veda-topic-ch-thermo-pvt', 'veda-topic-ch-thermo-phase', 'veda-topic-ch-thermo-chemical-eq'],
    examIds: ['veda-exam-gate-ch'],
    difficulty: 'intermediate', source: 'IIT Madras', provider: 'NPTEL',
    tags: ['chemical-thermodynamics', 'eos', 'fugacity', 'phase-equilibria', 'NPTEL'],
    seoTitle: 'Chemical Engineering Thermodynamics – NPTEL IIT Madras', seoDescription: 'Full NPTEL chemical thermodynamics course for GATE CH: EOS, fugacity, and equilibria.',
  },
  {
    ...base, id: 'veda-rch-th-02', slug: 'ch-thermo-pvt-mit',
    title: 'Thermodynamics of Chemical Systems – MIT OpenCourseWare',
    description: 'MIT 10.213: laws of thermodynamics, equations of state, phase diagrams, mixtures, fugacity/activity coefficients, Gibbs free energy, and chemical reaction equilibrium constants.',
    type: 'website', url: 'https://ocw.mit.edu/courses/10-213-chemical-engineering-thermodynamics-summer-2002/',
    subjectIds: ['veda-subject-ch-chem-thermo'], topicIds: ['veda-topic-ch-thermo-pvt'],
    examIds: ['veda-exam-gate-ch'],
    difficulty: 'intermediate', source: 'MIT', provider: 'MIT OpenCourseWare',
    tags: ['thermodynamics', 'eos', 'gibbs-energy', 'fugacity', 'mit-ocw'],
    seoTitle: 'Chemical Thermodynamics – MIT OCW', seoDescription: 'MIT OpenCourseWare chemical thermodynamics: EOS, fugacity, and phase diagrams.',
  },

  // ── Chemical Thermodynamics – Phase Equilibria ─────────────────────────────────
  {
    ...base, id: 'veda-rch-th-03', slug: 'ch-phase-equilibria-gfg',
    title: 'Phase Equilibria – VLE, LLE, Raoult, Henry, Dew/Bubble | GfG',
    description: 'Vapour-liquid equilibrium (VLE): Raoult\'s law, modified Raoult\'s law, Henry\'s law, activity coefficients, P-xy and T-xy diagrams, dew and bubble point calculations, azeotropes.',
    type: 'website', url: 'https://www.geeksforgeeks.org/vapour-liquid-equilibrium/',
    subjectIds: ['veda-subject-ch-chem-thermo'], topicIds: ['veda-topic-ch-thermo-phase'],
    examIds: ['veda-exam-gate-ch'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['vle', 'raoults-law', 'activity-coefficient', 'azeotrope', 'dew-point'],
    seoTitle: 'Phase Equilibria – VLE & Azeotropes for GATE CH | GfG', seoDescription: 'VLE, Raoult\'s law, activity coefficients, and azeotropes for GATE chemical engineering.',
  },

  // ── Chemical Thermodynamics – Chemical Equilibrium ─────────────────────────────
  {
    ...base, id: 'veda-rch-th-04', slug: 'ch-chemical-eq-gfg',
    title: "Chemical Reaction Equilibrium – Kp, Kc, Le Chatelier | GfG",
    description: "Gibbs free energy and equilibrium (ΔG° = −RT ln K), equilibrium constants Kp, Kc, Ka, Kx, temperature dependence (van't Hoff equation), and Le Chatelier's principle for GATE CH.",
    type: 'website', url: 'https://www.geeksforgeeks.org/chemical-equilibrium/',
    subjectIds: ['veda-subject-ch-chem-thermo'], topicIds: ['veda-topic-ch-thermo-chemical-eq'],
    examIds: ['veda-exam-gate-ch'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['chemical-equilibrium', 'kp', 'kc', 'vant-hoff', 'le-chatelier'],
    seoTitle: "Chemical Equilibrium – Kp, Kc for GATE CH | GfG", seoDescription: "Gibbs energy, equilibrium constants, and van't Hoff equation for GATE CH thermodynamics.",
  },

  // ── Mass Transfer – Diffusion ──────────────────────────────────────────────────
  {
    ...base, id: 'veda-rch-mt-01', slug: 'ch-mass-transfer-nptel',
    title: 'Mass Transfer – NPTEL IIT Bombay',
    description: 'Molecular diffusion (Fick\'s law), multicomponent diffusion, convective mass transfer, film theory, penetration theory, mass transfer coefficients, and design of absorption and distillation columns.',
    type: 'video', url: 'https://nptel.ac.in/courses/103101004',
    subjectIds: ['veda-subject-ch-mass-transfer'], topicIds: ['veda-topic-ch-mt-diffusion', 'veda-topic-ch-mt-absorption', 'veda-topic-ch-mt-distillation'],
    examIds: ['veda-exam-gate-ch'],
    difficulty: 'intermediate', source: 'IIT Bombay', provider: 'NPTEL',
    tags: ['mass-transfer', 'ficks-law', 'absorption', 'distillation', 'NPTEL'],
    seoTitle: 'Mass Transfer – NPTEL IIT Bombay', seoDescription: 'NPTEL mass transfer course for GATE CH: diffusion, absorption, and distillation.',
  },
  {
    ...base, id: 'veda-rch-mt-02', slug: 'ch-diffusion-gfg',
    title: "Molecular Diffusion – Fick's First & Second Law | GfG",
    description: "Fick's first law (steady-state), Fick's second law (unsteady-state), diffusivity of gases and liquids, equimolar counter-diffusion, diffusion of A through stagnant B, and binary diffusion coefficient correlations.",
    type: 'website', url: 'https://www.geeksforgeeks.org/ficks-law-of-diffusion/',
    subjectIds: ['veda-subject-ch-mass-transfer'], topicIds: ['veda-topic-ch-mt-diffusion'],
    examIds: ['veda-exam-gate-ch'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['diffusion', 'ficks-law', 'equimolar', 'binary-diffusion', 'stagnant'],
    seoTitle: "Fick's Law of Diffusion for GATE CH | GfG", seoDescription: "Fick's first and second law, equimolar counter-diffusion, and diffusion coefficients for GATE CH.",
  },

  // ── Mass Transfer – Absorption ─────────────────────────────────────────────────
  {
    ...base, id: 'veda-rch-mt-03', slug: 'ch-absorption-gfg',
    title: 'Gas Absorption – Operating Line, NOG, HTU, Packed Columns | GfG',
    description: 'Gas absorption principles, operating line, equilibrium line, number of transfer units (NOG), height of a transfer unit (HTU), packed column design, Kremser method, and stripping operations.',
    type: 'website', url: 'https://www.geeksforgeeks.org/gas-absorption/',
    subjectIds: ['veda-subject-ch-mass-transfer'], topicIds: ['veda-topic-ch-mt-absorption'],
    examIds: ['veda-exam-gate-ch'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['absorption', 'nog', 'htu', 'packed-column', 'operating-line'],
    seoTitle: 'Gas Absorption – NOG, HTU for GATE CH | GfG', seoDescription: 'Operating line, NOG, HTU, and packed column design for GATE CH mass transfer.',
  },

  // ── Mass Transfer – Distillation ───────────────────────────────────────────────
  {
    ...base, id: 'veda-rch-mt-04', slug: 'ch-distillation-gfg',
    title: 'Distillation – McCabe-Thiele, Fenske, Minimum Reflux | GfG',
    description: 'Binary distillation design: McCabe-Thiele graphical method, q-line, minimum reflux ratio (Underwood), minimum number of stages (Fenske equation), efficiency, and tray vs packed columns.',
    type: 'website', url: 'https://www.geeksforgeeks.org/distillation-in-chemical-engineering/',
    subjectIds: ['veda-subject-ch-mass-transfer'], topicIds: ['veda-topic-ch-mt-distillation'],
    examIds: ['veda-exam-gate-ch'],
    difficulty: 'advanced', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['distillation', 'mccabe-thiele', 'fenske', 'reflux-ratio', 'underwood'],
    seoTitle: 'Distillation – McCabe-Thiele for GATE CH | GfG', seoDescription: 'McCabe-Thiele method, Fenske equation, and minimum reflux ratio for GATE CH distillation.',
  },

  // ── Chemical Reaction Engineering – Ideal Reactors ────────────────────────────
  {
    ...base, id: 'veda-rch-re-01', slug: 'ch-reaction-engg-nptel',
    title: 'Chemical Reaction Engineering – NPTEL IIT Bombay',
    description: 'Ideal reactors (CSTR, PFR, PBR), rate laws, conversion, design equations, temperature effects (Arrhenius), non-ideal flow, RTD, catalysis, and GATE CH reaction engineering problems.',
    type: 'video', url: 'https://nptel.ac.in/courses/103101005',
    subjectIds: ['veda-subject-ch-reaction-engg'], topicIds: ['veda-topic-ch-re-ideal-reactors', 'veda-topic-ch-re-non-ideal', 'veda-topic-ch-re-catalysis'],
    examIds: ['veda-exam-gate-ch'],
    difficulty: 'intermediate', source: 'IIT Bombay', provider: 'NPTEL',
    tags: ['chemical-reaction-engineering', 'cstr', 'pfr', 'catalysis', 'NPTEL'],
    seoTitle: 'Chemical Reaction Engineering – NPTEL IIT Bombay', seoDescription: 'NPTEL CRE course for GATE CH: CSTR, PFR, non-ideal flow, and catalysis.',
  },
  {
    ...base, id: 'veda-rch-re-02', slug: 'ch-ideal-reactors-gfg',
    title: 'Ideal Reactors – CSTR, PFR, PBR Design Equations | GfG',
    description: 'Continuous stirred tank reactor (CSTR), plug flow reactor (PFR), packed bed reactor (PBR), batch reactor — design equations, sizing, conversion, Levenspiel plots, and CSTR-PFR comparison.',
    type: 'website', url: 'https://www.geeksforgeeks.org/types-of-chemical-reactors/',
    subjectIds: ['veda-subject-ch-reaction-engg'], topicIds: ['veda-topic-ch-re-ideal-reactors'],
    examIds: ['veda-exam-gate-ch'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['cstr', 'pfr', 'batch-reactor', 'levenspiel-plot', 'conversion'],
    seoTitle: 'CSTR, PFR, PBR Design Equations for GATE CH | GfG', seoDescription: 'Ideal reactor design equations, sizing, and Levenspiel plots for GATE chemical engineering.',
  },

  // ── Chemical Reaction Engineering – Non-Ideal Flow ─────────────────────────────
  {
    ...base, id: 'veda-rch-re-03', slug: 'ch-non-ideal-rtd-gfg',
    title: 'Non-Ideal Flow & RTD – E(t), F(t), Dispersion Model | GfG',
    description: 'Residence time distribution (RTD): E(t) and F(t) curves, mean residence time, variance, dispersion number, axial dispersion model, CSTR-in-series model, and conversion prediction from RTD.',
    type: 'website', url: 'https://www.geeksforgeeks.org/residence-time-distribution/',
    subjectIds: ['veda-subject-ch-reaction-engg'], topicIds: ['veda-topic-ch-re-non-ideal'],
    examIds: ['veda-exam-gate-ch'],
    difficulty: 'advanced', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['rtd', 'non-ideal-flow', 'dispersion', 'cstr-in-series', 'peclet'],
    seoTitle: 'RTD & Non-Ideal Flow for GATE CH | GfG', seoDescription: 'RTD curves, axial dispersion model, and CSTR-in-series model for GATE CH CRE.',
  },

  // ── Chemical Reaction Engineering – Catalysis ──────────────────────────────────
  {
    ...base, id: 'veda-rch-re-04', slug: 'ch-catalysis-gfg',
    title: 'Heterogeneous Catalysis – Langmuir-Hinshelwood, Effectiveness Factor | GfG',
    description: 'Adsorption isotherms, Langmuir-Hinshelwood-Hougen-Watson (LHHW) mechanism, internal and external mass transfer limitations, Thiele modulus, effectiveness factor η, and Weisz-Prater criterion.',
    type: 'website', url: 'https://www.geeksforgeeks.org/heterogeneous-catalysis/',
    subjectIds: ['veda-subject-ch-reaction-engg'], topicIds: ['veda-topic-ch-re-catalysis'],
    examIds: ['veda-exam-gate-ch'],
    difficulty: 'advanced', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['catalysis', 'lhhw', 'thiele-modulus', 'effectiveness-factor', 'adsorption'],
    seoTitle: 'Catalysis – Thiele Modulus & LHHW for GATE CH | GfG', seoDescription: 'Langmuir-Hinshelwood mechanism, Thiele modulus, and effectiveness factor for GATE CH.',
  },

  // ── Process Control – Feedback Control ────────────────────────────────────────
  {
    ...base, id: 'veda-rch-pc-01', slug: 'ch-process-control-nptel',
    title: 'Process Control – NPTEL IIT Madras',
    description: 'Feedback control, transfer functions, Laplace domain process models, first/second-order responses, P/PI/PID tuning (Ziegler-Nichols), stability analysis (Bode, Nyquist), and advanced control.',
    type: 'video', url: 'https://nptel.ac.in/courses/103106061',
    subjectIds: ['veda-subject-ch-process-control'], topicIds: ['veda-topic-ch-pc-feedback', 'veda-topic-ch-pc-pid', 'veda-topic-ch-pc-advanced'],
    examIds: ['veda-exam-gate-ch'],
    difficulty: 'intermediate', source: 'IIT Madras', provider: 'NPTEL',
    tags: ['process-control', 'pid', 'ziegler-nichols', 'stability', 'NPTEL'],
    seoTitle: 'Process Control – NPTEL IIT Madras', seoDescription: 'Full NPTEL process control course for GATE CH: PID tuning, stability, and advanced control.',
  },
  {
    ...base, id: 'veda-rch-pc-02', slug: 'ch-pid-tuning-gfg',
    title: 'PID Controller Tuning – Ziegler-Nichols, IMC | GfG',
    description: 'Proportional, integral, and derivative actions; offset in P-only control; Ziegler-Nichols open-loop and closed-loop tuning methods; IMC-based PID design; and Smith Predictor for dead time.',
    type: 'website', url: 'https://www.geeksforgeeks.org/pid-controller/',
    subjectIds: ['veda-subject-ch-process-control'], topicIds: ['veda-topic-ch-pc-pid'],
    examIds: ['veda-exam-gate-ch'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['pid', 'ziegler-nichols', 'imc', 'dead-time', 'offset'],
    seoTitle: 'PID Tuning – Ziegler-Nichols for GATE CH | GfG', seoDescription: 'PID controller tuning methods including Ziegler-Nichols and IMC for GATE CH process control.',
  },

  // ── Chemical Process Industries ────────────────────────────────────────────────
  {
    ...base, id: 'veda-rch-cpi-01', slug: 'ch-cpi-nptel',
    title: 'Industrial Chemistry & Chemical Process Industries – NPTEL',
    description: 'Petroleum refining (CDU, FCC, reforming, hydrocracking), fertilizer processes (Haber-Bosch, contact process, nitric acid), polymer synthesis (polyethylene, PVC, PET), and green chemistry.',
    type: 'video', url: 'https://nptel.ac.in/courses/103107110',
    subjectIds: ['veda-subject-ch-cpi'], topicIds: ['veda-topic-ch-cpi-petroleum', 'veda-topic-ch-cpi-fertilizers', 'veda-topic-ch-cpi-polymers'],
    examIds: ['veda-exam-gate-ch'],
    difficulty: 'intermediate', source: 'NPTEL', provider: 'NPTEL',
    tags: ['chemical-process-industries', 'petroleum', 'haber-bosch', 'polymers', 'NPTEL'],
    seoTitle: 'Chemical Process Industries – NPTEL', seoDescription: 'NPTEL course on petroleum refining, fertilizers, and polymer manufacture for GATE CH.',
  },
  {
    ...base, id: 'veda-rch-cpi-02', slug: 'ch-cpi-gfg',
    title: 'Chemical Industries – Petroleum Refining, Fertilisers, Polymers | GfG',
    description: 'Crude oil distillation, catalytic cracking, reforming processes. Ammonia synthesis (Haber process), sulphuric acid (contact process), nitric acid. Addition and condensation polymerisation, thermoplastics vs thermosets.',
    type: 'website', url: 'https://www.geeksforgeeks.org/chemical-industries/',
    subjectIds: ['veda-subject-ch-cpi'], topicIds: ['veda-topic-ch-cpi-petroleum', 'veda-topic-ch-cpi-fertilizers', 'veda-topic-ch-cpi-polymers'],
    examIds: ['veda-exam-gate-ch'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['petroleum-refining', 'haber-process', 'contact-process', 'polymerisation'],
    seoTitle: 'Chemical Industries – Petroleum & Polymers for GATE CH | GfG', seoDescription: 'Petroleum refining, Haber process, and polymerisation for GATE CH process industries.',
  },
];
