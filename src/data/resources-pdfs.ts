import type { Resource } from '../models';

/**
 * PDF, notes, and downloadable document resources.
 * Sources: MIT OCW (lecture notes PDFs), NPTEL (course notes), OpenStax (free textbooks),
 * LibreTexts Engineering, and IIT open lecture repositories.
 */

const base = {
  courseIds: [] as string[], branchIds: [] as string[], semesterIds: [] as string[],
  institutionIds: [] as string[], relatedResourceIds: [] as string[], prerequisiteIds: [] as string[],
  verificationStatus: 'verified' as const, contentStatus: 'published' as const,
  language: 'en', academicLevel: 'undergraduate' as const,
  createdAt: '2025-01-01', updatedAt: '2025-01-01',
};

export const resourcesPdfsData: Resource[] = [

  // ════════════════════════════════════════════════════════════════════════
  //  ENGINEERING MATHEMATICS
  // ════════════════════════════════════════════════════════════════════════

  // ── Differential & Integral Calculus ────────────────────────────────────
  {
    ...base, id: 'veda-pdf-calc-01', slug: 'openstax-calculus-vol1-free-pdf',
    title: 'Calculus Volume 1 – OpenStax (Free PDF Textbook)',
    description: 'Complete calculus textbook covering limits, derivatives, integration techniques, and applications. Free PDF download. Peer-reviewed and used by 750+ institutions. Covers all GATE and JEE calculus topics.',
    type: 'pdf', url: 'https://openstax.org/books/calculus-volume-1/pages/1-introduction',
    subjectIds: ['veda-subject-engg-maths'],
    topicIds: ['veda-topic-differential-calculus', 'veda-topic-integral-calculus'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce', 'veda-exam-jee-main'],
    difficulty: 'intermediate', source: 'OpenStax', provider: 'Rice University / OpenStax',
    tags: ['calculus', 'PDF', 'free textbook', 'OpenStax', 'derivatives', 'integration', 'downloadable'],
    seoTitle: 'Calculus Vol 1 – OpenStax Free PDF Textbook', seoDescription: 'Free, peer-reviewed Calculus textbook from OpenStax covering limits, derivatives, and integration.',
  },
  {
    ...base, id: 'veda-pdf-calc-02', slug: 'openstax-calculus-vol2-free-pdf',
    title: 'Calculus Volume 2 – OpenStax (Free PDF: Integration & Series)',
    description: 'Integration techniques (u-sub, IBP, trigonometric, partial fractions), applications of integration, differential equations, sequences and series. Free PDF download from OpenStax.',
    type: 'pdf', url: 'https://openstax.org/books/calculus-volume-2/pages/1-introduction',
    subjectIds: ['veda-subject-engg-maths'],
    topicIds: ['veda-topic-integral-calculus', 'veda-topic-differential-equations'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'OpenStax', provider: 'Rice University / OpenStax',
    tags: ['calculus', 'integration', 'PDF', 'series', 'ODE', 'free textbook', 'OpenStax', 'downloadable'],
    seoTitle: 'Calculus Vol 2 – OpenStax Integration & ODE PDF', seoDescription: 'Free OpenStax calculus Vol 2 covering integration techniques and differential equations.',
  },
  {
    ...base, id: 'veda-pdf-calc-03', slug: 'mit-1801sc-lecture-notes-pdf-readings',
    title: 'MIT 18.01SC Single Variable Calculus – Reading Notes PDF',
    description: 'Session-by-session PDF lecture notes from MIT 18.01SC: differentiation rules, applications of derivatives, definite integrals, FTC, integration techniques, and series. All downloadable.',
    type: 'notes', url: 'https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/pages/readings/',
    subjectIds: ['veda-subject-engg-maths'],
    topicIds: ['veda-topic-differential-calculus', 'veda-topic-integral-calculus'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'MIT', provider: 'MIT OpenCourseWare',
    tags: ['MIT OCW', 'calculus', 'lecture notes', 'PDF', 'downloadable', 'differentiation', 'integration'],
    seoTitle: 'MIT 18.01SC Calculus Reading Notes – Free PDF', seoDescription: 'Complete set of MIT 18.01SC calculus lecture notes available as free PDF downloads.',
  },

  // ── Linear Algebra ──────────────────────────────────────────────────────
  {
    ...base, id: 'veda-pdf-la-01', slug: 'mit-1806-linear-algebra-strang-notes',
    title: 'Linear Algebra – MIT 18.06 (Strang) Course Notes & Exams PDF',
    description: 'Gilbert Strang\'s MIT 18.06 course materials: lecture notes, exam papers, and solutions covering vectors, matrix factorizations (LU, QR, SVD), eigenvalues, and positive definite matrices.',
    type: 'notes', url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/pages/readings/',
    subjectIds: ['veda-subject-engg-maths'], topicIds: ['veda-topic-linear-algebra'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'MIT', provider: 'MIT OpenCourseWare',
    tags: ['linear algebra', 'MIT OCW', 'Strang', 'eigenvalues', 'LU decomposition', 'PDF', 'notes'],
    seoTitle: 'MIT 18.06 Linear Algebra – Strang Lecture Notes PDF', seoDescription: "Gilbert Strang's MIT linear algebra course notes, exams and solutions – free download.",
  },
  {
    ...base, id: 'veda-pdf-la-02', slug: 'libretexts-linear-algebra-engineering',
    title: 'A First Course in Linear Algebra – LibreTexts (Free PDF)',
    description: 'Open textbook covering linear systems, matrix operations, determinants, vector spaces, linear transformations, eigenvalues, and orthogonality. Free read and PDF download via LibreTexts.',
    type: 'pdf', url: 'https://math.libretexts.org/Bookshelves/Linear_Algebra/A_First_Course_in_Linear_Algebra_(Kuttler)',
    subjectIds: ['veda-subject-engg-maths'], topicIds: ['veda-topic-linear-algebra'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'LibreTexts', provider: 'LibreTexts / Kuttler',
    tags: ['linear algebra', 'PDF', 'free textbook', 'LibreTexts', 'eigenvalues', 'vector space'],
    seoTitle: 'First Course in Linear Algebra – LibreTexts Free PDF', seoDescription: 'Free linear algebra textbook by Kuttler on LibreTexts with full PDF download.',
  },

  // ── Differential Equations ──────────────────────────────────────────────
  {
    ...base, id: 'veda-pdf-ode-01', slug: 'pauls-online-ode-notes-free-pdf',
    title: "Paul's Online Math Notes – Differential Equations (Free PDF)",
    description: "Paul Dawkins' (Lamar University) complete differential equations notes: first-order ODEs (separable, linear, exact, Bernoulli), second-order linear ODEs, Laplace transforms, power series methods, and systems of ODEs. Free printable PDF.",
    type: 'notes', url: 'https://tutorial.math.lamar.edu/Classes/DE/DE.aspx',
    subjectIds: ['veda-subject-engg-maths'], topicIds: ['veda-topic-differential-equations'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'Lamar University', provider: 'Paul Dawkins / Lamar University',
    tags: ['ODE', 'PDF', 'notes', 'Laplace transform', 'Bernoulli', 'separable', 'power series', 'free'],
    seoTitle: "Paul's ODE Notes – Free PDF | Lamar University", seoDescription: 'Free, comprehensive differential equations notes with solved examples – printable PDF.',
  },
  {
    ...base, id: 'veda-pdf-ode-02', slug: 'mit-1803-ode-notes-pdf',
    title: 'MIT 18.03SC Differential Equations – Lecture Notes PDF',
    description: 'Official MIT 18.03SC lecture notes covering first and second order ODEs, Laplace transforms, Fourier series, PDEs, and phase portraits. All downloadable as PDF from MIT OCW.',
    type: 'notes', url: 'https://ocw.mit.edu/courses/18-03sc-differential-equations-fall-2011/pages/unit-i-first-order-differential-equations/',
    subjectIds: ['veda-subject-engg-maths'], topicIds: ['veda-topic-differential-equations'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'MIT', provider: 'MIT OpenCourseWare',
    tags: ['ODE', 'MIT OCW', 'Laplace transform', 'Fourier series', 'PDF', 'lecture notes', 'phase portrait'],
    seoTitle: 'MIT 18.03SC Differential Equations Notes – Free PDF', seoDescription: 'MIT differential equations lecture notes covering ODE methods, Laplace transforms and Fourier series.',
  },

  // ── Probability & Statistics ────────────────────────────────────────────
  {
    ...base, id: 'veda-pdf-prob-01', slug: 'openstax-introductory-statistics-pdf',
    title: 'Introductory Statistics – OpenStax (Free PDF)',
    description: 'Open textbook covering descriptive statistics, probability, random variables, binomial and normal distributions, hypothesis testing, and regression. Free PDF download for GATE preparation.',
    type: 'pdf', url: 'https://openstax.org/books/introductory-statistics/pages/1-introduction',
    subjectIds: ['veda-subject-engg-maths'], topicIds: ['veda-topic-probability-statistics'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'beginner', source: 'OpenStax', provider: 'Rice University / OpenStax',
    tags: ['statistics', 'probability', 'PDF', 'OpenStax', 'binomial', 'normal distribution', 'hypothesis testing', 'free'],
    seoTitle: 'Introductory Statistics – OpenStax Free PDF', seoDescription: 'Free statistics and probability textbook from OpenStax covering all GATE probability topics.',
  },
  {
    ...base, id: 'veda-pdf-prob-02', slug: 'harvard-stat110-strategic-practice-pdf',
    title: 'Harvard Stat 110 – Strategic Practice Problems PDF',
    description: "Prof. Joe Blitzstein's strategy-focused problem sets for Harvard Stat 110: conditional probability, Bayes' theorem, discrete and continuous distributions, expectation, CLT. Free PDF on the course page.",
    type: 'pdf', url: 'https://projects.iq.harvard.edu/stat110/strategic-practice-problems',
    subjectIds: ['veda-subject-engg-maths'], topicIds: ['veda-topic-probability-statistics'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'Harvard University', provider: 'Harvard / Blitzstein',
    tags: ["Bayes' theorem", 'conditional probability', 'CLT', 'expectation', 'Stat 110', 'Harvard', 'PDF', 'practice problems'],
    seoTitle: 'Harvard Stat 110 Practice Problems – Free PDF', seoDescription: 'Strategic practice problems from Harvard Stat 110 – best GATE probability preparation PDF.',
  },

  // ── Numerical Methods ───────────────────────────────────────────────────
  {
    ...base, id: 'veda-pdf-num-01', slug: 'nptel-numerical-methods-notes-iit-roorkee-pdf',
    title: 'Numerical Methods – NPTEL IIT Roorkee Lecture Notes PDF',
    description: 'Downloadable PDF lecture notes from NPTEL IIT Roorkee course on Numerical Methods: root finding (bisection, Newton-Raphson, secant), Gauss elimination, LU decomposition, numerical differentiation and integration (trapezoidal, Simpson), and Runge-Kutta RK4.',
    type: 'notes', url: 'https://nptel.ac.in/courses/111107105',
    subjectIds: ['veda-subject-engg-maths'], topicIds: ['veda-topic-numerical-methods'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'IIT Roorkee', provider: 'NPTEL',
    tags: ['numerical methods', 'NPTEL', 'PDF', 'Newton-Raphson', 'bisection', 'RK4', 'Gauss elimination', 'IIT Roorkee'],
    seoTitle: 'Numerical Methods Notes PDF – NPTEL IIT Roorkee', seoDescription: 'NPTEL numerical methods course from IIT Roorkee with downloadable PDF lecture notes.',
  },

  // ── Complex Variables ───────────────────────────────────────────────────
  {
    ...base, id: 'veda-pdf-cv-01', slug: 'libretexts-complex-analysis-pdf',
    title: 'Complex Analysis – LibreTexts (Free PDF Textbook)',
    description: 'Open textbook on complex analysis: complex numbers, analytic functions, Cauchy-Riemann equations, Cauchy integral theorem and formula, Taylor and Laurent series, residue theorem, and conformal mappings.',
    type: 'pdf', url: 'https://math.libretexts.org/Bookshelves/Analysis/Complex_Variables_with_Applications_(Orloff)',
    subjectIds: ['veda-subject-engg-maths'], topicIds: ['veda-topic-complex-variables'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'LibreTexts', provider: 'LibreTexts / Orloff (MIT)',
    tags: ['complex analysis', 'PDF', 'residue theorem', 'Cauchy integral', 'Laurent series', 'free textbook', 'LibreTexts'],
    seoTitle: 'Complex Analysis – LibreTexts Free PDF (MIT Orloff)', seoDescription: 'Free complex analysis textbook from MIT (Orloff) via LibreTexts covering all GATE complex topics.',
  },

  // ════════════════════════════════════════════════════════════════════════
  //  ENGINEERING THERMODYNAMICS
  // ════════════════════════════════════════════════════════════════════════

  {
    ...base, id: 'veda-pdf-thermo-01', slug: 'openstax-university-physics-vol2-thermo-pdf',
    title: 'University Physics Vol 2 – Thermodynamics Chapters (OpenStax Free PDF)',
    description: 'OpenStax University Physics Vol 2 chapters on thermodynamics: temperature, heat, laws of thermodynamics, kinetic theory, heat engines, refrigerators, and entropy. Free PDF download.',
    type: 'pdf', url: 'https://openstax.org/books/university-physics-volume-2/pages/1-introduction',
    subjectIds: ['veda-subject-engg-thermo'],
    topicIds: ['veda-topic-thermo-systems-properties', 'veda-topic-first-law', 'veda-topic-second-law-entropy'],
    examIds: ['veda-exam-gate-me', 'veda-exam-jee-main'],
    difficulty: 'intermediate', source: 'OpenStax', provider: 'Rice University / OpenStax',
    tags: ['thermodynamics', 'PDF', 'OpenStax', 'free textbook', 'kinetic theory', 'entropy', 'heat engine', 'downloadable'],
    seoTitle: 'University Physics Vol 2 Thermodynamics – OpenStax PDF', seoDescription: 'Free thermodynamics chapters from OpenStax University Physics Vol 2 covering all basic thermo topics.',
  },
  {
    ...base, id: 'veda-pdf-thermo-02', slug: 'mit-thermal-fluids-notes-2006-pdf',
    title: 'Thermal-Fluids Engineering II – MIT OCW 2.006 Lecture Notes PDF',
    description: 'MIT OCW 2.006 lecture note PDFs covering thermodynamic cycles (Rankine, Brayton, refrigeration), heat transfer (conduction, convection, radiation), and integrated thermofluids problems at graduate level.',
    type: 'notes', url: 'https://ocw.mit.edu/courses/2-006-thermal-fluids-engineering-ii-spring-2008/pages/readings/',
    subjectIds: ['veda-subject-engg-thermo'],
    topicIds: ['veda-topic-thermo-cycles', 'veda-topic-gas-power-cycles', 'veda-topic-heat-transfer-intro', 'veda-topic-second-law-entropy'],
    examIds: ['veda-exam-gate-me'],
    difficulty: 'advanced', source: 'MIT', provider: 'MIT OpenCourseWare',
    tags: ['MIT OCW', 'thermodynamics', 'PDF', 'Rankine', 'Brayton', 'heat transfer', 'radiation', 'lecture notes'],
    seoTitle: 'MIT OCW 2.006 Thermal-Fluids Lecture Notes PDF', seoDescription: 'MIT thermal-fluids engineering lecture notes covering thermodynamic cycles and heat transfer.',
  },
  {
    ...base, id: 'veda-pdf-thermo-03', slug: 'nptel-engineering-thermodynamics-notes-iit-kgp',
    title: 'Engineering Thermodynamics – NPTEL IIT KGP Notes & Assignments',
    description: 'Course notes and assignment PDFs from NPTEL Engineering Thermodynamics (IIT KGP) covering all GATE ME topics: systems, laws, cycles, power plants, and refrigeration with solved numerical examples.',
    type: 'notes', url: 'https://nptel.ac.in/courses/112105056',
    subjectIds: ['veda-subject-engg-thermo'],
    topicIds: ['veda-topic-thermo-systems-properties', 'veda-topic-first-law', 'veda-topic-second-law-entropy', 'veda-topic-gas-power-cycles', 'veda-topic-thermo-cycles', 'veda-topic-refrigeration-ac'],
    examIds: ['veda-exam-gate-me'],
    difficulty: 'intermediate', source: 'IIT Kharagpur', provider: 'NPTEL',
    tags: ['thermodynamics', 'NPTEL', 'PDF', 'IIT KGP', 'GATE ME', 'power cycles', 'assignments', 'notes'],
    seoTitle: 'Engineering Thermodynamics NPTEL Notes PDF – IIT KGP', seoDescription: 'NPTEL IIT KGP thermodynamics course with downloadable PDF notes and assignment solutions.',
  },

  // ── Heat Transfer PDFs ──────────────────────────────────────────────────
  {
    ...base, id: 'veda-pdf-ht-01', slug: 'mit-ocw-heat-transfer-notes-pdf',
    title: 'Heat Transfer – MIT OCW 2.51 Lecture Notes PDF',
    description: 'MIT OCW 2.51 "Intermediate Heat Transfer" lecture notes covering conduction (1D, 2D, fins, transient), convection (boundary layer, forced and free convection, heat exchangers), and radiation with downloadable PDF notes.',
    type: 'notes', url: 'https://ocw.mit.edu/courses/2-51-intermediate-heat-transfer-fall-2008/pages/readings/',
    subjectIds: ['veda-subject-engg-thermo'], topicIds: ['veda-topic-heat-transfer-intro'],
    examIds: ['veda-exam-gate-me'],
    difficulty: 'advanced', source: 'MIT', provider: 'MIT OpenCourseWare',
    tags: ['heat transfer', 'MIT OCW', 'PDF', 'conduction', 'convection', 'radiation', 'fins', 'heat exchangers', 'lecture notes'],
    seoTitle: 'Heat Transfer MIT OCW 2.51 Lecture Notes PDF', seoDescription: 'MIT intermediate heat transfer lecture notes covering conduction, convection, radiation, and fins.',
  },

  // ════════════════════════════════════════════════════════════════════════
  //  FLUID MECHANICS
  // ════════════════════════════════════════════════════════════════════════

  {
    ...base, id: 'veda-pdf-fluid-01', slug: 'mit-ocw-fluid-dynamics-notes-2-20',
    title: 'Marine Hydrodynamics (Fluid Dynamics) – MIT OCW 2.20 Notes PDF',
    description: 'MIT OCW 2.20 course notes PDF: fluid properties, hydrostatics, kinematics, Euler and Navier-Stokes equations, Bernoulli, boundary layers, drag, and potential flow. Rigorous mathematical treatment.',
    type: 'notes', url: 'https://ocw.mit.edu/courses/2-20-marine-hydrodynamics-13-021-spring-2005/pages/readings/',
    subjectIds: ['veda-subject-fluid-mech'],
    topicIds: ['veda-topic-fluid-properties', 'veda-topic-fluid-statics', 'veda-topic-bernoulli-equation', 'veda-topic-pipe-flow'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'advanced', source: 'MIT', provider: 'MIT OpenCourseWare',
    tags: ['fluid mechanics', 'MIT OCW', 'PDF', 'Navier-Stokes', 'Euler', 'boundary layer', 'potential flow', 'notes'],
    seoTitle: 'Fluid Dynamics – MIT OCW 2.20 Lecture Notes PDF', seoDescription: 'MIT marine hydrodynamics lecture notes covering all major fluid mechanics topics with PDF download.',
  },
  {
    ...base, id: 'veda-pdf-fluid-02', slug: 'openstax-university-physics-vol1-fluids-pdf',
    title: 'Fluid Mechanics Chapters – OpenStax University Physics Vol 1 (Free PDF)',
    description: 'OpenStax University Physics Vol 1 chapters on fluid statics and dynamics: density, pressure, Pascal, Archimedes, Bernoulli, viscosity, and Poiseuille flow. Free PDF download. Excellent conceptual coverage for GATE.',
    type: 'pdf', url: 'https://openstax.org/books/university-physics-volume-1/pages/14-introduction',
    subjectIds: ['veda-subject-fluid-mech'],
    topicIds: ['veda-topic-fluid-properties', 'veda-topic-fluid-statics', 'veda-topic-bernoulli-equation', 'veda-topic-pipe-flow'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'OpenStax', provider: 'Rice University / OpenStax',
    tags: ['fluid mechanics', 'OpenStax', 'PDF', 'free textbook', 'Archimedes', 'Bernoulli', 'viscosity', 'Poiseuille'],
    seoTitle: 'Fluid Mechanics – OpenStax University Physics Vol 1 Free PDF', seoDescription: 'Free fluid statics and dynamics chapters from OpenStax University Physics with PDF download.',
  },
  {
    ...base, id: 'veda-pdf-fluid-03', slug: 'nptel-fluid-mechanics-iit-delhi-notes-pdf',
    title: 'Fluid Mechanics – NPTEL IIT Delhi Lecture Notes PDF',
    description: 'NPTEL IIT Delhi fluid mechanics lecture notes and module PDFs: fluid properties, hydrostatics, kinematics, Bernoulli applications, laminar and turbulent pipe flow, boundary layers, and dimensional analysis for GATE CE and ME.',
    type: 'notes', url: 'https://nptel.ac.in/courses/112102009',
    subjectIds: ['veda-subject-fluid-mech'],
    topicIds: ['veda-topic-fluid-properties', 'veda-topic-fluid-statics', 'veda-topic-bernoulli-equation', 'veda-topic-pipe-flow'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'IIT Delhi', provider: 'NPTEL',
    tags: ['fluid mechanics', 'NPTEL', 'PDF', 'IIT Delhi', 'GATE', 'pipe flow', 'boundary layer', 'dimensional analysis'],
    seoTitle: 'Fluid Mechanics NPTEL IIT Delhi – Notes PDF', seoDescription: 'NPTEL IIT Delhi fluid mechanics course with downloadable PDF notes for GATE ME and CE.',
  },

  // ════════════════════════════════════════════════════════════════════════
  //  STRENGTH OF MATERIALS
  // ════════════════════════════════════════════════════════════════════════

  {
    ...base, id: 'veda-pdf-som-01', slug: 'mit-ocw-mechanics-materials-2001-notes-pdf',
    title: 'Mechanics of Materials – MIT OCW 2.001 Lecture Notes PDF',
    description: 'MIT OCW 2.001 "Mechanics & Materials I" lecture notes PDF: stress and strain, Hooke\'s law, torsion, bending (Euler-Bernoulli beam theory), beam deflection, buckling, and failure theories.',
    type: 'notes', url: 'https://ocw.mit.edu/courses/2-001-mechanics-materials-i-fall-2006/pages/readings/',
    subjectIds: ['veda-subject-som'],
    topicIds: ['veda-topic-stress-strain', 'veda-topic-bending-shear', 'veda-topic-beam-deflection', 'veda-topic-torsion', 'veda-topic-columns-buckling'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'MIT', provider: 'MIT OpenCourseWare',
    tags: ['strength of materials', 'MIT OCW', 'PDF', 'bending', 'torsion', 'buckling', 'Euler beam', 'notes', 'deflection'],
    seoTitle: 'Mechanics of Materials MIT OCW 2.001 – Lecture Notes PDF', seoDescription: 'MIT mechanics of materials lecture notes covering stress, bending, torsion, and buckling.',
  },
  {
    ...base, id: 'veda-pdf-som-02', slug: 'nptel-som-notes-iit-madras-pdf',
    title: 'Strength of Materials – NPTEL IIT Madras PDF Notes',
    description: 'NPTEL IIT Madras strength of materials course with downloadable lecture notes PDF covering stress-strain, Mohr\'s circle, bending moment, shear force, beam deflection, torsion, and column buckling (Euler and Rankine-Gordon) for GATE.',
    type: 'notes', url: 'https://nptel.ac.in/courses/112106065',
    subjectIds: ['veda-subject-som'],
    topicIds: ['veda-topic-stress-strain', 'veda-topic-bending-shear', 'veda-topic-beam-deflection', 'veda-topic-torsion', 'veda-topic-columns-buckling'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'IIT Madras', provider: 'NPTEL',
    tags: ['strength of materials', 'NPTEL', 'IIT Madras', 'PDF', 'GATE', 'Mohr circle', 'torsion', 'buckling', 'beam deflection'],
    seoTitle: 'Strength of Materials NPTEL IIT Madras – PDF Notes', seoDescription: 'NPTEL IIT Madras SOM notes PDF covering stress, bending, torsion, and Euler buckling for GATE.',
  },
  {
    ...base, id: 'veda-pdf-som-03', slug: 'libretexts-mechanics-of-materials-free-pdf',
    title: 'Mechanics of Materials – LibreTexts Engineering (Free PDF)',
    description: 'Open textbook on mechanics of materials: axial loading, torsion, bending (flexure formula, shear stress), transverse shear, combined loading, stress and strain transformations (Mohr\'s circle), deflection of beams, and stability. Free PDF download.',
    type: 'pdf', url: 'https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_of_Materials_(Roylance)',
    subjectIds: ['veda-subject-som'],
    topicIds: ['veda-topic-stress-strain', 'veda-topic-bending-shear', 'veda-topic-beam-deflection', 'veda-topic-torsion', 'veda-topic-columns-buckling'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'LibreTexts', provider: 'LibreTexts Engineering / MIT Roylance',
    tags: ['mechanics of materials', 'LibreTexts', 'PDF', 'free textbook', 'bending', 'torsion', 'Mohr circle', 'deflection', 'buckling'],
    seoTitle: 'Mechanics of Materials – LibreTexts Free PDF (MIT Roylance)', seoDescription: 'Free mechanics of materials textbook from MIT Roylance on LibreTexts covering all SOM topics.',
  },

  // ════════════════════════════════════════════════════════════════════════
  //  ENGINEERING PHYSICS
  // ════════════════════════════════════════════════════════════════════════

  {
    ...base, id: 'veda-pdf-phys-01', slug: 'openstax-university-physics-vol1-mechanics-pdf',
    title: 'University Physics Vol 1 – Mechanics (OpenStax Free PDF)',
    description: 'OpenStax University Physics Vol 1: units, kinematics, Newton\'s laws, work-energy, momentum, rotational motion, static equilibrium, gravitation, and oscillations. Free PDF download used at 1000+ universities.',
    type: 'pdf', url: 'https://openstax.org/books/university-physics-volume-1/pages/1-introduction',
    subjectIds: ['veda-subject-engg-physics'],
    topicIds: ['veda-topic-mechanics-kinematics', 'veda-topic-waves-oscillations'],
    examIds: ['veda-exam-jee-main', 'veda-exam-jee-advanced'],
    difficulty: 'intermediate', source: 'OpenStax', provider: 'Rice University / OpenStax',
    tags: ['mechanics', 'kinematics', 'oscillations', 'PDF', 'OpenStax', 'free textbook', 'JEE', 'Newton', 'rotational motion'],
    seoTitle: 'University Physics Vol 1 Mechanics – OpenStax Free PDF', seoDescription: 'Free mechanics and oscillations textbook from OpenStax for JEE Main and Advanced preparation.',
  },
  {
    ...base, id: 'veda-pdf-phys-02', slug: 'openstax-university-physics-vol2-electrostatics-pdf',
    title: 'University Physics Vol 2 – Electrostatics & Electric Fields (OpenStax Free PDF)',
    description: "OpenStax University Physics Vol 2 chapters on electrostatics: Coulomb's law, electric field, Gauss's law, electric potential, capacitors, and dielectrics. Thermodynamics chapters also included. Free PDF.",
    type: 'pdf', url: 'https://openstax.org/books/university-physics-volume-2/pages/5-introduction',
    subjectIds: ['veda-subject-engg-physics'],
    topicIds: ['veda-topic-electrostatics', 'veda-topic-thermodynamics-physics'],
    examIds: ['veda-exam-jee-main', 'veda-exam-jee-advanced'],
    difficulty: 'intermediate', source: 'OpenStax', provider: 'Rice University / OpenStax',
    tags: ["Coulomb's law", "Gauss's law", 'electric field', 'capacitors', 'electrostatics', 'PDF', 'OpenStax', 'JEE', 'free textbook'],
    seoTitle: 'Electrostatics – OpenStax University Physics Vol 2 Free PDF', seoDescription: "Free electrostatics chapters from OpenStax University Physics Vol 2 covering Gauss's law and capacitors.",
  },
  {
    ...base, id: 'veda-pdf-phys-03', slug: 'openstax-university-physics-vol3-modern-physics-pdf',
    title: 'University Physics Vol 3 – Modern Physics (OpenStax Free PDF)',
    description: 'OpenStax University Physics Vol 3 covering modern physics: special relativity, photons (photoelectric effect, Compton scattering), wave-particle duality, hydrogen atom (Bohr model and quantum), nuclear physics (radioactivity, binding energy, fission, fusion). Free PDF.',
    type: 'pdf', url: 'https://openstax.org/books/university-physics-volume-3/pages/1-introduction',
    subjectIds: ['veda-subject-engg-physics'],
    topicIds: ['veda-topic-modern-physics'],
    examIds: ['veda-exam-jee-main', 'veda-exam-jee-advanced'],
    difficulty: 'intermediate', source: 'OpenStax', provider: 'Rice University / OpenStax',
    tags: ['modern physics', 'photoelectric effect', 'Bohr model', 'nuclear physics', 'special relativity', 'PDF', 'OpenStax', 'JEE', 'free textbook'],
    seoTitle: 'Modern Physics – OpenStax University Physics Vol 3 Free PDF', seoDescription: 'Free modern physics chapters from OpenStax covering photoelectric effect, Bohr model, and nuclear physics.',
  },
  {
    ...base, id: 'veda-pdf-phys-04', slug: 'mit-8-01sc-classical-mechanics-notes-pdf',
    title: 'Classical Mechanics – MIT OCW 8.01SC Lecture Notes & Problem Sets PDF',
    description: "MIT 8.01SC classical mechanics course: complete lecture notes PDF, weekly problem sets with solutions, and exam papers. Covers kinematics, dynamics, energy, momentum, rotation, oscillations, and gravitation – the gold standard for JEE Advanced preparation.",
    type: 'notes', url: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/readings/',
    subjectIds: ['veda-subject-engg-physics'],
    topicIds: ['veda-topic-mechanics-kinematics', 'veda-topic-waves-oscillations'],
    examIds: ['veda-exam-jee-main', 'veda-exam-jee-advanced'],
    difficulty: 'advanced', source: 'MIT', provider: 'MIT OpenCourseWare',
    tags: ['classical mechanics', 'MIT OCW', 'PDF', 'JEE', 'lecture notes', 'problem sets', 'solutions', 'kinematics', 'rotation'],
    seoTitle: 'Classical Mechanics MIT OCW 8.01SC – Notes & Problem Sets PDF', seoDescription: 'MIT 8.01SC classical mechanics lecture notes, problem sets and exam solutions – free PDF download.',
  },

  // ════════════════════════════════════════════════════════════════════════
  //  GATE-SPECIFIC COMBINED STUDY MATERIAL
  // ════════════════════════════════════════════════════════════════════════

  {
    ...base, id: 'veda-pdf-gate-01', slug: 'nptel-gate-engineering-mathematics-all-topics',
    title: 'GATE Engineering Mathematics – NPTEL Complete Course (All Topics)',
    description: 'NPTEL course specifically designed for GATE Engineering Mathematics: calculus, linear algebra, differential equations, probability and statistics, numerical methods, and complex variables. Downloadable notes and assignments.',
    type: 'course', url: 'https://nptel.ac.in/courses/111105112',
    subjectIds: ['veda-subject-engg-maths'],
    topicIds: ['veda-topic-differential-calculus', 'veda-topic-integral-calculus', 'veda-topic-linear-algebra', 'veda-topic-differential-equations', 'veda-topic-probability-statistics', 'veda-topic-numerical-methods', 'veda-topic-complex-variables'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'NPTEL', provider: 'NPTEL',
    tags: ['GATE', 'engineering mathematics', 'NPTEL', 'all topics', 'calculus', 'linear algebra', 'probability', 'numerical', 'complex'],
    seoTitle: 'GATE Engineering Mathematics – NPTEL All Topics', seoDescription: 'Complete NPTEL course covering all GATE Engineering Mathematics topics with downloadable PDF notes.',
  },
];
