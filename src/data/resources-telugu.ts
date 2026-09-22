import type { Resource } from '../models';

/**
 * Telugu-language supporting video resources.
 * Sources: Ekeeda Telugu, GATE Guidance Telugu, Unacademy Telugu,
 * and other Telugu GATE/JEE YouTube channels.
 *
 * Rule: English source documents are ALWAYS shown — these are SUPPLEMENTARY
 * explanation videos in Telugu for students who prefer Telugu medium instruction.
 */

const base = {
  courseIds: [] as string[], branchIds: [] as string[], semesterIds: [] as string[],
  institutionIds: [] as string[], relatedResourceIds: [] as string[], prerequisiteIds: [] as string[],
  verificationStatus: 'community' as const, contentStatus: 'published' as const,
  language: 'te',
  academicLevel: 'undergraduate' as const,
  createdAt: '2025-01-01', updatedAt: '2025-01-01',
};

export const resourcesTeluguData: Resource[] = [

  // ════════════════════════════════════════════════════════════════════════
  //  ENGINEERING MATHEMATICS (Telugu)
  // ════════════════════════════════════════════════════════════════════════

  {
    ...base, id: 'veda-te-em-01', slug: 'telugu-engineering-maths-full-ekeeda',
    title: 'Engineering Mathematics Full Course – Ekeeda Telugu',
    description: 'Ekeeda తెలుగు Engineering Mathematics: కాలిక్యులస్, లీనియర్ ఆల్జీబ్రా, అవకలన సమీకరణాలు, సంభావ్యత & గణాంకశాస్త్రం. GATE ME/CE కోసం పూర్తి కోర్సు.',
    type: 'course', url: 'https://www.youtube.com/@Ekeeda',
    subjectIds: ['veda-subject-engg-maths'],
    topicIds: ['veda-topic-differential-calculus', 'veda-topic-integral-calculus', 'veda-topic-linear-algebra', 'veda-topic-differential-equations', 'veda-topic-probability-statistics'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'Ekeeda', provider: 'YouTube',
    tags: ['engineering mathematics', 'telugu', 'GATE', 'full course', 'Ekeeda'],
    seoTitle: 'Engineering Mathematics Telugu – Ekeeda Full Course', seoDescription: 'Complete Telugu engineering mathematics by Ekeeda for GATE ME/CE.',
  },
  {
    ...base, id: 'veda-te-dc-01', slug: 'telugu-differential-calculus-gate',
    title: 'అవకల గణితం (Differential Calculus) – Telugu GATE',
    description: 'తెలుగులో అవకల గణితం: పరిమితులు, అవకలజాలు, రోల్ సిద్ధాంతం, మధ్యమ విలువ సిద్ధాంతం. GATE ME/CE కోసం.',
    type: 'video', url: 'https://www.youtube.com/@Ekeeda',
    subjectIds: ['veda-subject-engg-maths'], topicIds: ['veda-topic-differential-calculus'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'Ekeeda', provider: 'YouTube',
    tags: ['calculus', 'telugu', 'GATE', 'differential calculus', 'Ekeeda', 'అవకల గణితం'],
    seoTitle: 'Differential Calculus Telugu – Ekeeda GATE', seoDescription: 'Telugu differential calculus for GATE by Ekeeda.',
  },
  {
    ...base, id: 'veda-te-la-01', slug: 'telugu-linear-algebra-gate',
    title: 'రేఖీయ బీజగణితం (Linear Algebra) – Telugu GATE',
    description: 'తెలుగులో రేఖీయ బీజగణితం: మాత్రికలు, శ్రేణి, స్వంత విలువలు/వెక్టర్లు, Cayley-Hamilton. GATE ME/CE కోసం.',
    type: 'video', url: 'https://www.youtube.com/@Ekeeda',
    subjectIds: ['veda-subject-engg-maths'], topicIds: ['veda-topic-linear-algebra'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'Ekeeda', provider: 'YouTube',
    tags: ['linear algebra', 'telugu', 'GATE', 'matrices', 'eigenvalues', 'Ekeeda'],
    seoTitle: 'Linear Algebra Telugu – Ekeeda GATE', seoDescription: 'Telugu linear algebra for GATE by Ekeeda.',
  },
  {
    ...base, id: 'veda-te-ode-01', slug: 'telugu-ode-gate',
    title: 'అవకలన సమీకరణాలు (ODE) – Telugu GATE',
    description: 'తెలుగులో ODE: మొదటి తరగతి ODE, రెండవ తరగతి సరళ ODE, Laplace రూపాంతరం. GATE ME/CE.',
    type: 'video', url: 'https://www.youtube.com/@Ekeeda',
    subjectIds: ['veda-subject-engg-maths'], topicIds: ['veda-topic-differential-equations'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'Ekeeda', provider: 'YouTube',
    tags: ['ODE', 'telugu', 'GATE', 'Laplace transform', 'Ekeeda'],
    seoTitle: 'Differential Equations Telugu – Ekeeda ODE GATE', seoDescription: 'Telugu ODE and Laplace transform for GATE by Ekeeda.',
  },
  {
    ...base, id: 'veda-te-prob-01', slug: 'telugu-probability-statistics-gate',
    title: 'సంభావ్యత & గణాంకశాస్త్రం – Telugu GATE',
    description: 'తెలుగులో సంభావ్యత: యాదృచ్ఛిక చరాలు, Binomial/Poisson/Normal పంపిణీలు, Bayes సిద్ధాంతం. GATE ME/CE.',
    type: 'video', url: 'https://www.youtube.com/@Ekeeda',
    subjectIds: ['veda-subject-engg-maths'], topicIds: ['veda-topic-probability-statistics'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'Ekeeda', provider: 'YouTube',
    tags: ['probability', 'statistics', 'telugu', 'GATE', 'Ekeeda'],
    seoTitle: 'Probability Statistics Telugu – Ekeeda GATE', seoDescription: 'Telugu probability and statistics for GATE by Ekeeda.',
  },
  {
    ...base, id: 'veda-te-num-01', slug: 'telugu-numerical-methods-gate',
    title: 'సంఖ్యాత్మక పద్ధతులు (Numerical Methods) – Telugu GATE',
    description: 'తెలుగులో సంఖ్యాత్మక పద్ధతులు: Newton-Raphson, ద్విభాజన పద్ధతి, RK4, సంఖ్యాత్మక సమాకలనం. GATE ME/CE.',
    type: 'video', url: 'https://www.youtube.com/@Ekeeda',
    subjectIds: ['veda-subject-engg-maths'], topicIds: ['veda-topic-numerical-methods'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'Ekeeda', provider: 'YouTube',
    tags: ['numerical methods', 'telugu', 'GATE', 'Newton-Raphson', 'Ekeeda'],
    seoTitle: 'Numerical Methods Telugu – Ekeeda GATE', seoDescription: 'Telugu numerical methods for GATE by Ekeeda.',
  },
  {
    ...base, id: 'veda-te-cv-01', slug: 'telugu-complex-variables-gate',
    title: 'సంకీర్ణ చరాలు (Complex Variables) – Telugu GATE',
    description: 'తెలుగులో సంకీర్ణ చరాలు: Cauchy-Riemann సమీకరణాలు, విశ్లేషణాత్మక విధులు, అవశేష సిద్ధాంతం. GATE.',
    type: 'video', url: 'https://www.youtube.com/@Ekeeda',
    subjectIds: ['veda-subject-engg-maths'], topicIds: ['veda-topic-complex-variables'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'Ekeeda', provider: 'YouTube',
    tags: ['complex variables', 'telugu', 'GATE', 'Cauchy-Riemann', 'Ekeeda'],
    seoTitle: 'Complex Variables Telugu – Ekeeda GATE', seoDescription: 'Telugu complex variables for GATE by Ekeeda.',
  },

  // ════════════════════════════════════════════════════════════════════════
  //  ENGINEERING THERMODYNAMICS (Telugu)
  // ════════════════════════════════════════════════════════════════════════

  {
    ...base, id: 'veda-te-tsp-01', slug: 'telugu-thermodynamics-basics-ekeeda',
    title: 'ఉష్ణగతిక విజ్ఞానం అడిపడులు – Ekeeda Telugu',
    description: 'Ekeeda తెలుగు: ఉష్ణగతిక వ్యవస్థలు, ధర్మాలు, స్థితి, ప్రక్రియ, జిరో/మొదటి నియమం. GATE ME.',
    type: 'video', url: 'https://www.youtube.com/@Ekeeda',
    subjectIds: ['veda-subject-engg-thermo'], topicIds: ['veda-topic-thermo-systems-properties', 'veda-topic-first-law'],
    examIds: ['veda-exam-gate-me'],
    difficulty: 'beginner', source: 'Ekeeda', provider: 'YouTube',
    tags: ['thermodynamics', 'telugu', 'GATE ME', 'system', 'first law', 'Ekeeda'],
    seoTitle: 'Thermodynamics Basics Telugu – Ekeeda GATE', seoDescription: 'Telugu thermodynamics basics by Ekeeda for GATE ME.',
  },
  {
    ...base, id: 'veda-te-sl-01', slug: 'telugu-second-law-entropy-ekeeda',
    title: 'రెండవ నియమం & ఎంట్రోపీ – Ekeeda Telugu',
    description: 'Ekeeda తెలుగు: Kelvin-Planck ప్రకటన, Carnot చక్రం, ఎంట్రోపీ, T-s రేఖాచిత్రం. GATE ME.',
    type: 'video', url: 'https://www.youtube.com/@Ekeeda',
    subjectIds: ['veda-subject-engg-thermo'], topicIds: ['veda-topic-second-law-entropy'],
    examIds: ['veda-exam-gate-me'],
    difficulty: 'intermediate', source: 'Ekeeda', provider: 'YouTube',
    tags: ['second law', 'entropy', 'telugu', 'GATE ME', 'Carnot', 'Ekeeda'],
    seoTitle: 'Second Law & Entropy Telugu – Ekeeda GATE', seoDescription: 'Telugu second law and entropy by Ekeeda for GATE ME.',
  },
  {
    ...base, id: 'veda-te-gpc-01', slug: 'telugu-gas-power-cycles-ekeeda',
    title: 'వాయు శక్తి చక్రాలు: Otto, Diesel, Brayton – Telugu',
    description: 'Ekeeda తెలుగు: Otto, Diesel, Brayton చక్రాలు, P-V & T-s రేఖాచిత్రాలు, ఉష్ణ సామర్థ్య సూత్రాలు. GATE ME.',
    type: 'video', url: 'https://www.youtube.com/@Ekeeda',
    subjectIds: ['veda-subject-engg-thermo'], topicIds: ['veda-topic-gas-power-cycles'],
    examIds: ['veda-exam-gate-me'],
    difficulty: 'intermediate', source: 'Ekeeda', provider: 'YouTube',
    tags: ['Otto cycle', 'Diesel cycle', 'Brayton cycle', 'telugu', 'GATE ME', 'Ekeeda'],
    seoTitle: 'Gas Power Cycles Telugu – Ekeeda Otto Diesel Brayton', seoDescription: 'Telugu gas power cycles by Ekeeda for GATE ME.',
  },
  {
    ...base, id: 'veda-te-ht-01', slug: 'telugu-heat-transfer-ekeeda',
    title: 'ఉష్ణ బదలాయింపు (Heat Transfer) – Ekeeda Telugu',
    description: 'Ekeeda తెలుగు: ఉష్ణ వాహకత (Fourier), సంవాహన (Newton), వికిరణం (Stefan-Boltzmann), ఉష్ణ మార్పిడి పరికరాలు.',
    type: 'video', url: 'https://www.youtube.com/@Ekeeda',
    subjectIds: ['veda-subject-engg-thermo'], topicIds: ['veda-topic-heat-transfer-intro'],
    examIds: ['veda-exam-gate-me'],
    difficulty: 'intermediate', source: 'Ekeeda', provider: 'YouTube',
    tags: ['heat transfer', 'telugu', 'GATE ME', 'conduction', 'convection', 'Ekeeda'],
    seoTitle: 'Heat Transfer Telugu – Ekeeda GATE ME', seoDescription: 'Telugu heat transfer by Ekeeda for GATE ME.',
  },

  // ════════════════════════════════════════════════════════════════════════
  //  FLUID MECHANICS (Telugu)
  // ════════════════════════════════════════════════════════════════════════

  {
    ...base, id: 'veda-te-fp-01', slug: 'telugu-fluid-properties-ekeeda',
    title: 'ద్రవ ధర్మాలు (Fluid Properties) – Ekeeda Telugu',
    description: 'Ekeeda తెలుగు: స్నిగ్ధత, Newton స్నిగ్ధత నియమం, ఉపరితల తన్యత, కేశికత. GATE ME/CE.',
    type: 'video', url: 'https://www.youtube.com/@Ekeeda',
    subjectIds: ['veda-subject-fluid-mech'], topicIds: ['veda-topic-fluid-properties'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'beginner', source: 'Ekeeda', provider: 'YouTube',
    tags: ['fluid properties', 'viscosity', 'telugu', 'GATE', 'surface tension', 'Ekeeda'],
    seoTitle: 'Fluid Properties Telugu – Ekeeda GATE', seoDescription: 'Telugu fluid properties including viscosity by Ekeeda.',
  },
  {
    ...base, id: 'veda-te-bern-01', slug: 'telugu-bernoulli-equation-ekeeda',
    title: "Bernoulli సమీకరణం – Ekeeda Telugu GATE",
    description: 'Ekeeda తెలుగు: Bernoulli నియమం, నిరంతరత సమీకరణం, Venturimeter, Pitot గొట్టం. GATE ME/CE.',
    type: 'video', url: 'https://www.youtube.com/@Ekeeda',
    subjectIds: ['veda-subject-fluid-mech'], topicIds: ['veda-topic-bernoulli-equation'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'Ekeeda', provider: 'YouTube',
    tags: ["Bernoulli's equation", 'telugu', 'GATE', 'Venturimeter', 'Ekeeda'],
    seoTitle: "Bernoulli's Equation Telugu – Ekeeda GATE", seoDescription: "Telugu Bernoulli's equation and flow measurement by Ekeeda.",
  },
  {
    ...base, id: 'veda-te-pf-01', slug: 'telugu-pipe-flow-ekeeda',
    title: 'గొట్టం ప్రవాహం – Darcy-Weisbach | Ekeeda Telugu',
    description: 'Ekeeda తెలుగు: Darcy-Weisbach సమీకరణం, Moody చార్ట్, ఘర్షణ నష్టాలు, గొట్టం నెట్‌వర్క్. GATE ME/CE.',
    type: 'video', url: 'https://www.youtube.com/@Ekeeda',
    subjectIds: ['veda-subject-fluid-mech'], topicIds: ['veda-topic-pipe-flow'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'Ekeeda', provider: 'YouTube',
    tags: ['pipe flow', 'Darcy-Weisbach', 'telugu', 'GATE', 'Ekeeda'],
    seoTitle: 'Pipe Flow Telugu – Ekeeda Darcy-Weisbach GATE', seoDescription: 'Telugu pipe flow and Darcy-Weisbach by Ekeeda for GATE.',
  },

  // ════════════════════════════════════════════════════════════════════════
  //  STRENGTH OF MATERIALS (Telugu)
  // ════════════════════════════════════════════════════════════════════════

  {
    ...base, id: 'veda-te-ss-01', slug: 'telugu-stress-strain-ekeeda',
    title: 'ఒత్తిడి & వికృతి (Stress & Strain) – Ekeeda Telugu',
    description: 'Ekeeda తెలుగు: అక్షసంబంధ ఒత్తిడి, Hooke నియమం, Poisson నిష్పత్తి, Mohr వృత్తం, ముఖ్య ఒత్తిళ్లు. GATE ME/CE.',
    type: 'video', url: 'https://www.youtube.com/@Ekeeda',
    subjectIds: ['veda-subject-som'], topicIds: ['veda-topic-stress-strain'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'Ekeeda', provider: 'YouTube',
    tags: ['stress strain', 'telugu', 'GATE', "Mohr's circle", 'Ekeeda'],
    seoTitle: "Stress & Strain Telugu – Ekeeda Mohr's Circle GATE", seoDescription: "Telugu stress-strain and Mohr's circle by Ekeeda.",
  },
  {
    ...base, id: 'veda-te-bs-01', slug: 'telugu-sfd-bmd-ekeeda',
    title: 'కోత శక్తి & వంచన క్షణం రేఖాచిత్రం – Ekeeda Telugu',
    description: 'Ekeeda తెలుగు: SFD & BMD గీయడం, వివిధ లోడ్లకు, flexure సూత్రం, తటస్థ అక్షం. GATE ME/CE.',
    type: 'video', url: 'https://www.youtube.com/@Ekeeda',
    subjectIds: ['veda-subject-som'], topicIds: ['veda-topic-bending-shear'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'Ekeeda', provider: 'YouTube',
    tags: ['SFD', 'BMD', 'telugu', 'GATE', 'bending moment', 'Ekeeda'],
    seoTitle: 'SFD BMD Telugu – Ekeeda Beams GATE', seoDescription: 'Telugu SFD and BMD diagrams by Ekeeda for GATE.',
  },
  {
    ...base, id: 'veda-te-col-01', slug: 'telugu-columns-buckling-ekeeda',
    title: 'స్తంభాలు & విరుగడ (Columns & Buckling) – Ekeeda Telugu',
    description: 'Ekeeda తెలుగు: Euler విరుగడ భారం, ప్రభావవంత పొడవు, Rankine-Gordon సూత్రం. GATE ME/CE.',
    type: 'video', url: 'https://www.youtube.com/@Ekeeda',
    subjectIds: ['veda-subject-som'], topicIds: ['veda-topic-columns-buckling'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'Ekeeda', provider: 'YouTube',
    tags: ['columns', 'buckling', 'telugu', 'GATE', 'Euler', 'Ekeeda'],
    seoTitle: 'Columns & Buckling Telugu – Ekeeda Euler GATE', seoDescription: 'Telugu columns and Euler buckling by Ekeeda for GATE.',
  },

  // ════════════════════════════════════════════════════════════════════════
  //  ENGINEERING PHYSICS (Telugu)
  // ════════════════════════════════════════════════════════════════════════

  {
    ...base, id: 'veda-te-mech-01', slug: 'telugu-mechanics-kinematics-jee',
    title: 'యంత్ర శాస్త్రం & గతిశాస్త్రం – Telugu JEE Physics',
    description: 'తెలుగు JEE Physics: గతిశాస్త్రం (1D/2D), Newton నియమాలు, పని-శక్తి సిద్ధాంతం, భ్రమణ గతి. JEE Main/Advanced.',
    type: 'video', url: 'https://www.youtube.com/@Ekeeda',
    subjectIds: ['veda-subject-engg-physics'], topicIds: ['veda-topic-mechanics-kinematics'],
    examIds: ['veda-exam-jee-main', 'veda-exam-jee-advanced'],
    difficulty: 'intermediate', source: 'Ekeeda', provider: 'YouTube',
    tags: ['mechanics', 'kinematics', 'telugu', 'JEE', "Newton's laws", 'Ekeeda'],
    seoTitle: 'Mechanics Telugu – JEE Physics Ekeeda', seoDescription: 'Telugu mechanics and kinematics for JEE by Ekeeda.',
  },
  {
    ...base, id: 'veda-te-elec-01', slug: 'telugu-electrostatics-jee',
    title: 'స్థిర విద్యుత్ (Electrostatics) – Telugu JEE Physics',
    description: 'తెలుగు JEE Physics: Coulomb నియమం, విద్యుత్ క్షేత్రం, Gauss నియమం, విద్యుత్ స్థానం, సంధారకం. JEE Main/Advanced.',
    type: 'video', url: 'https://www.youtube.com/@Ekeeda',
    subjectIds: ['veda-subject-engg-physics'], topicIds: ['veda-topic-electrostatics'],
    examIds: ['veda-exam-jee-main', 'veda-exam-jee-advanced'],
    difficulty: 'intermediate', source: 'Ekeeda', provider: 'YouTube',
    tags: ['electrostatics', 'telugu', 'JEE', "Coulomb's law", "Gauss's law", 'Ekeeda'],
    seoTitle: 'Electrostatics Telugu – JEE Physics Ekeeda', seoDescription: 'Telugu electrostatics for JEE by Ekeeda.',
  },
  {
    ...base, id: 'veda-te-wav-01', slug: 'telugu-waves-oscillations-jee',
    title: 'తరంగాలు & డోలనాలు – Telugu JEE Physics',
    description: 'తెలుగు JEE Physics: సరళ హార్మోనిక్ డోలనం (SHM), తరంగ సమీకరణం, Doppler ప్రభావం, వ్యతికరణం. JEE.',
    type: 'video', url: 'https://www.youtube.com/@Ekeeda',
    subjectIds: ['veda-subject-engg-physics'], topicIds: ['veda-topic-waves-oscillations'],
    examIds: ['veda-exam-jee-main', 'veda-exam-jee-advanced'],
    difficulty: 'intermediate', source: 'Ekeeda', provider: 'YouTube',
    tags: ['waves', 'SHM', 'oscillations', 'telugu', 'JEE', 'Ekeeda'],
    seoTitle: 'Waves & Oscillations Telugu – JEE Physics Ekeeda', seoDescription: 'Telugu waves and SHM for JEE by Ekeeda.',
  },
  {
    ...base, id: 'veda-te-mp-01', slug: 'telugu-modern-physics-jee',
    title: 'ఆధునిక భౌతిక శాస్త్రం – Telugu JEE Physics',
    description: 'తెలుగు JEE Physics: కాంతి విద్యుత్ ప్రభావం, de Broglie తరంగదైర్ఘ్యం, Bohr నమూనా, రేడియో ధార్మికత, అణు విచ్ఛిత్తి/విలీనం.',
    type: 'video', url: 'https://www.youtube.com/@Ekeeda',
    subjectIds: ['veda-subject-engg-physics'], topicIds: ['veda-topic-modern-physics'],
    examIds: ['veda-exam-jee-main', 'veda-exam-jee-advanced'],
    difficulty: 'intermediate', source: 'Ekeeda', provider: 'YouTube',
    tags: ['modern physics', 'telugu', 'JEE', 'Bohr model', 'radioactivity', 'Ekeeda'],
    seoTitle: 'Modern Physics Telugu – JEE Ekeeda', seoDescription: 'Telugu modern physics for JEE by Ekeeda.',
  },
];
