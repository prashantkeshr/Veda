import type { Subject } from '../models';

export const cbseSubjectsData: Subject[] = [
  // ── Science Stream ─────────────────────────────────────────────────────

  {
    id: 'veda-subject-cbse-physics',
    slug: 'cbse-class-11-12-physics',
    title: 'Physics — CBSE Class 11 & 12',
    shortTitle: 'CBSE Physics',
    description: 'Complete CBSE Physics for Class 11 and 12 — from Kinematics and Laws of Motion through Electrostatics, Optics, and Modern Physics. Essential for JEE Main, JEE Advanced, and NEET.',
    guide: `## CBSE Physics Class 11 & 12 — Complete Guide

Physics in Classes 11 and 12 is the gateway to engineering and medicine. The CBSE syllabus is divided into two years: Class 11 covers classical mechanics, thermodynamics, and waves; Class 12 covers electrostatics, current electricity, magnetism, optics, and modern physics.

## Why Physics Matters
Physics is the foundation of every engineering discipline. JEE Main and JEE Advanced both draw heavily from this syllabus — Class 12 electrostatics and optics are high-weightage topics. For NEET, Class 11 mechanics and Class 12 electronics are critical.

## Class 11 — Key Chapters
**Mechanics**: Kinematics (1D, 2D), Laws of Motion, Work-Energy-Power, System of Particles, Rotational Motion, Gravitation, Properties of Matter. **Thermodynamics & Waves**: Kinetic Theory, Thermodynamics (laws, cycles), Oscillations and Waves (SHM, standing waves, Doppler effect).

## Class 12 — Key Chapters
**Electrostatics & Electricity**: Coulomb's Law, electric field and potential, capacitance, Ohm's Law, Kirchhoff's laws, Wheatstone Bridge. **Magnetism**: Biot-Savart Law, Ampere's Law, EMF induction, AC circuits, transformers. **Optics**: Reflection, refraction, lenses, wave optics (interference, diffraction). **Modern Physics**: Dual nature, photoelectric effect, Bohr's model, radioactivity, semiconductor devices.

## Exam Relevance
JEE Main: ~30 questions from Physics each paper. JEE Advanced: 18 questions, more conceptual and multi-step. NEET: 45 MCQs from Physics. CBSE Board: 70 marks theory + 30 marks practical.

## How to Use VEDA for Physics
Navigate to each topic for key concepts, formulae, and exam-pattern notes. Use the Exams section for JEE/NEET previous year questions. Link topics to the Science PCM or Science PCMB streams.`,
    academicLevels: ['higher-secondary'],
    topicIds: [
      'veda-topic-mechanics-kinematics',
      'veda-topic-cbse-ph-laws-of-motion',
      'veda-topic-cbse-ph-work-energy-power',
      'veda-topic-cbse-ph-electrostatics',
      'veda-topic-cbse-ph-current-electricity',
      'veda-topic-cbse-ph-optics',
      'veda-topic-cbse-ph-dual-nature',
      'veda-topic-cbse-ph-atoms-nuclei',
    ],
    courseIds: [],
    examIds: ['veda-exam-jee-main', 'veda-exam-jee-advanced'],
    relatedSubjectIds: ['veda-subject-cbse-chemistry', 'veda-subject-cbse-mathematics', 'veda-subject-engg-physics'],
    tags: ['physics', 'CBSE', 'Class 11', 'Class 12', 'JEE', 'NEET', 'electrostatics', 'optics', 'mechanics'],
    color: '#1e40af',
    updatedAt: '2026-09-16',
  },

  {
    id: 'veda-subject-cbse-chemistry',
    slug: 'cbse-class-11-12-chemistry',
    title: 'Chemistry — CBSE Class 11 & 12',
    shortTitle: 'CBSE Chemistry',
    description: 'Complete CBSE Chemistry for Class 11 and 12 — Physical, Inorganic, and Organic Chemistry. Crucial for JEE Main, JEE Advanced, and NEET preparation.',
    guide: `## CBSE Chemistry Class 11 & 12 — Complete Guide

Chemistry is divided into three broad branches: Physical Chemistry (numericals and calculations), Inorganic Chemistry (periodic table, reactions, structures), and Organic Chemistry (mechanisms, reactions, named reactions). CBSE spreads these across two years.

## Class 11 Chemistry
**Physical**: Basic concepts, atomic structure, states of matter (gas laws, kinetic theory), thermodynamics (Hess's law, enthalpy), chemical equilibrium (Kc, Kp), and redox reactions. **Inorganic**: Periodic classification, chemical bonding (VSEPR, hybridisation, MOT), hydrogen, s-block and p-block elements (Group 13–14). **Organic**: Basic principles (hybridisation, inductive effect, resonance), hydrocarbons (alkanes, alkenes, alkynes, benzene).

## Class 12 Chemistry
**Physical**: Solid state, solutions (Raoult's law, colligative properties), electrochemistry (Nernst equation, EMF), chemical kinetics (rate laws, Arrhenius), surface chemistry. **Inorganic**: p-block (15–18), d and f-block, coordination compounds (Werner's theory, IUPAC, VBT/CFT). **Organic**: Haloalkanes, alcohols/phenols/ethers, aldehydes/ketones/carboxylic acids, amines, biomolecules, polymers, chemistry in everyday life.

## Exam Relevance
JEE Main: ~30 questions per paper. Organic chemistry and physical chemistry carry high weightage. NEET: 45 MCQs — inorganic and organic are critical. CBSE Board: Focus on named reactions and mechanisms in organic; IUPAC naming in inorganic.

## Study Strategy
Physical Chemistry requires daily numerical practice. Inorganic can be memorised systematically with mnemonics. Organic requires understanding reaction mechanisms, not rote memorisation.`,
    academicLevels: ['higher-secondary'],
    topicIds: [
      'veda-topic-cbse-ch-atomic-structure',
      'veda-topic-cbse-ch-chemical-bonding',
      'veda-topic-cbse-ch-states-of-matter',
      'veda-topic-cbse-ch-electrochemistry',
      'veda-topic-cbse-ch-chemical-kinetics',
      'veda-topic-cbse-ch-organic-basics',
      'veda-topic-cbse-ch-p-block',
    ],
    courseIds: [],
    examIds: ['veda-exam-jee-main', 'veda-exam-jee-advanced'],
    relatedSubjectIds: ['veda-subject-cbse-physics', 'veda-subject-cbse-biology'],
    tags: ['chemistry', 'CBSE', 'Class 11', 'Class 12', 'JEE', 'NEET', 'organic chemistry', 'electrochemistry'],
    color: '#065f46',
    updatedAt: '2026-09-16',
  },

  {
    id: 'veda-subject-cbse-mathematics',
    slug: 'cbse-class-11-12-mathematics',
    title: 'Mathematics — CBSE Class 11 & 12',
    shortTitle: 'CBSE Mathematics',
    description: 'Complete CBSE Mathematics for Class 11 and 12 — Algebra, Calculus, Coordinate Geometry, Vectors, and Probability. Core to JEE Main, JEE Advanced, and B.Com/MBA entrances.',
    guide: `## CBSE Mathematics Class 11 & 12 — Complete Guide

Mathematics is the backbone of the Science stream and a high-scoring subject for Commerce students too. The CBSE Class 11–12 syllabus covers a wide range from pure algebra and trigonometry to calculus and statistics.

## Class 11 Mathematics
**Algebra & Number Theory**: Sets, Relations and Functions, Mathematical Induction, Complex Numbers, Quadratic Equations, Linear Inequalities, Permutations and Combinations, Binomial Theorem, Sequences and Series. **Geometry**: Straight Lines, Conic Sections (circle, parabola, ellipse, hyperbola), Introduction to 3D Geometry. **Calculus (Intro)**: Limits and Derivatives (basic differentiation). **Statistics**: Measures of dispersion, Probability (classical definition).

## Class 12 Mathematics
**Algebra**: Relations and Functions (types, inverses), Matrices and Determinants (operations, inverses, Cramer's rule). **Calculus (Full)**: Continuity and Differentiability, Application of Derivatives (monotonicity, maxima, tangents), Integrals (indefinite, definite, area under curves), Differential Equations (order, degree, solution methods). **Vectors & 3D**: Vector Algebra, Three Dimensional Geometry (lines and planes). **Operations Research**: Linear Programming. **Probability**: Bayes' Theorem, probability distributions, Bernoulli trials.

## Exam Relevance
JEE Main: 30 questions from Mathematics — calculus, algebra, and coordinate geometry dominate. JEE Advanced: 18 questions, highly conceptual with integration and probability. CBSE Board: 80 marks theory, very scoring if practised regularly.

## For Commerce Students
Class 11 Mathematics includes statistics, permutations, and basic calculus — useful for BBA, CA Foundation, and economics. Class 12 Linear Programming is directly relevant to management studies.`,
    academicLevels: ['higher-secondary'],
    topicIds: [
      'veda-topic-cbse-ma-sets-relations',
      'veda-topic-cbse-ma-trigonometry',
      'veda-topic-cbse-ma-complex-numbers',
      'veda-topic-cbse-ma-conic-sections',
      'veda-topic-cbse-ma-derivatives',
      'veda-topic-cbse-ma-integrals',
      'veda-topic-cbse-ma-probability',
    ],
    courseIds: [],
    examIds: ['veda-exam-jee-main', 'veda-exam-jee-advanced'],
    relatedSubjectIds: ['veda-subject-cbse-physics', 'veda-subject-engg-maths'],
    tags: ['mathematics', 'CBSE', 'Class 11', 'Class 12', 'JEE', 'calculus', 'algebra', 'coordinate geometry'],
    color: '#7c3aed',
    updatedAt: '2026-09-16',
  },

  {
    id: 'veda-subject-cbse-biology',
    slug: 'cbse-class-11-12-biology',
    title: 'Biology — CBSE Class 11 & 12',
    shortTitle: 'CBSE Biology',
    description: 'Complete CBSE Biology for Class 11 and 12 — Cell Biology, Plant & Human Physiology, Genetics, Evolution, Ecology, and Biotechnology. Essential for NEET preparation.',
    guide: `## CBSE Biology Class 11 & 12 — Complete Guide

Biology is the primary subject for NEET aspirants and one of the most vast subjects in the CBSE syllabus. It divides into Botany (plant sciences) and Zoology (animal/human sciences), spread across five broad units each year.

## Class 11 Biology
**Diversity in Living World**: Classification systems, kingdoms, taxonomy. **Structural Organisation**: Tissues in plants (meristematic, permanent) and animals (epithelial, connective, muscle, nervous). **Cell Structure & Function**: Cell theory, prokaryote vs eukaryote, cell organelles (mitochondria, chloroplast, ribosome, nucleus), cell division (mitosis and meiosis), biomolecules (carbohydrates, proteins, lipids, nucleic acids). **Plant Physiology**: Mineral nutrition, photosynthesis (light and dark reactions, Calvin cycle, C4 pathway, photorespiration), respiration (glycolysis, Krebs cycle, ETC), plant growth regulators. **Human Physiology**: Digestion and absorption, breathing and gas exchange, body fluids and circulation, excretion.

## Class 12 Biology
**Reproduction**: Flowering plant reproduction, human reproduction, reproductive health. **Genetics & Evolution**: Mendel's laws, chromosomal basis of inheritance, sex determination, gene expression (DNA replication, transcription, translation), evolution (Darwinism, Hardy-Weinberg, speciation). **Biology in Human Welfare**: Health and disease (immunity, vaccines, cancer, AIDS), microbes. **Biotechnology**: Principles (recombinant DNA, PCR, gel electrophoresis), applications (transgenic organisms, GMOs, ethical issues). **Ecology**: Organism and its environment, population interactions, ecosystems, biodiversity and conservation.

## Exam Relevance
NEET: 90 MCQs from Biology (45 from Botany, 45 from Zoology) — the largest and most critical section. NEET toppers say Class 11 physiology and Class 12 genetics are the highest-scoring areas. CBSE Board: 70 marks theory + 30 marks practical (microscopy, experiments).

## Study Strategy
NCERT is the Bible for NEET Biology — every line matters. Focus on diagrams (cell structure, heart, nephron, reproductive organs). For genetics, work numerical problems on dihybrid crosses, linkage, and mutation repeatedly.`,
    academicLevels: ['higher-secondary'],
    topicIds: [
      'veda-topic-cbse-bi-cell-biology',
      'veda-topic-cbse-bi-plant-physiology',
      'veda-topic-cbse-bi-human-physiology',
      'veda-topic-cbse-bi-genetics',
      'veda-topic-cbse-bi-evolution',
      'veda-topic-cbse-bi-ecology',
    ],
    courseIds: [],
    examIds: [],
    relatedSubjectIds: ['veda-subject-cbse-chemistry'],
    tags: ['biology', 'CBSE', 'Class 11', 'Class 12', 'NEET', 'genetics', 'ecology', 'cell biology', 'physiology'],
    color: '#16a34a',
    updatedAt: '2026-09-16',
  },

  // ── Commerce Stream ────────────────────────────────────────────────────

  {
    id: 'veda-subject-cbse-accountancy',
    slug: 'cbse-class-11-12-accountancy',
    title: 'Accountancy — CBSE Class 11 & 12',
    shortTitle: 'CBSE Accountancy',
    description: 'Complete CBSE Accountancy for Class 11 and 12 — Basic Accounting, Financial Statements, Partnership, and Company Accounts. Foundation for CA Foundation and B.Com.',
    guide: `## CBSE Accountancy Class 11 & 12 — Complete Guide

Accountancy is the language of business. It teaches you to record, classify, summarise, and interpret financial transactions. It is a core Commerce subject and the foundation for CA, CMA, CS, BBA, and B.Com programmes.

## Class 11 Accountancy
**Introduction to Accounting**: Need for accounting, accounting equation, basic terms (assets, liabilities, capital, revenue, expense). **Recording of Transactions**: Journal entries, ledger posting, subsidiary books (cash book, purchases/sales book, returns books), Bank Reconciliation Statement. **Trial Balance & Errors**: Preparation of trial balance, types of errors, rectification. **Financial Statements**: Trading & Profit/Loss Account, Balance Sheet (for sole proprietor). **Depreciation**: Methods — SLM and WDV, change of method.

## Class 12 Accountancy
**Accounting for Not-for-Profit Organisations**: Receipts and Payments Account, Income and Expenditure Account. **Partnership Accounts**: Fundamental concepts, profit sharing, interest on capital/drawings, admission, retirement, death, and dissolution of a partner. **Company Accounts**: Issue of shares at par/premium/discount, forfeiture and reissue, debentures (issue, redemption). **Financial Statements of Companies**: Statement of P&L and Balance Sheet (as per Companies Act). **Cash Flow Statement**: Operating, investing, and financing activities. **Analysis of Financial Statements**: Ratio analysis (liquidity, solvency, profitability, activity ratios), comparative and common-size statements.

## Exam Relevance
CA Foundation: Accountancy is the most critical paper (120 marks). B.Com entrance: scored subject in college admissions. CUET: Accountancy as an optional subject. CBSE Board: 80 marks theory — accounts is highly scoring with practice.

## Study Strategy
Practice every journal entry by hand. The golden rule of accounting (Real, Personal, Nominal accounts) must be second nature. For partnership problems, draw T-accounts for each partner — it prevents errors in dissolution questions.`,
    academicLevels: ['higher-secondary'],
    topicIds: [
      'veda-topic-cbse-ac-basics',
      'veda-topic-cbse-ac-financial-statements',
      'veda-topic-cbse-ac-partnership',
      'veda-topic-cbse-ac-company-accounts',
      'veda-topic-cbse-ac-cash-flow',
    ],
    courseIds: [],
    examIds: [],
    relatedSubjectIds: ['veda-subject-cbse-business-studies', 'veda-subject-cbse-economics'],
    tags: ['accountancy', 'CBSE', 'Class 11', 'Class 12', 'CA Foundation', 'commerce', 'financial statements', 'partnership'],
    color: '#854d0e',
    updatedAt: '2026-09-16',
  },

  {
    id: 'veda-subject-cbse-business-studies',
    slug: 'cbse-class-11-12-business-studies',
    title: 'Business Studies — CBSE Class 11 & 12',
    shortTitle: 'Business Studies',
    description: 'Complete CBSE Business Studies for Class 11 and 12 — Nature of Business, Management Principles, Organising, Staffing, Marketing, and Financial Management. Core Commerce subject for BBA, MBA entrances.',
    guide: `## CBSE Business Studies Class 11 & 12 — Complete Guide

Business Studies provides the conceptual foundation of management and business. It covers what managers do, why businesses are organised the way they are, and how marketing and finance decisions are made. This subject is scoring and conceptual rather than numerical.

## Class 11 Business Studies
**Nature and Purpose of Business**: Forms of business — sole proprietor, partnership, company, cooperative. Public vs private enterprises. **Business Services**: Banking, insurance, transportation, warehousing, communication. **Emerging Modes of Business**: E-business and outsourcing. **Social Responsibility**: Corporate responsibility, consumer protection, environment.

## Class 12 Business Studies
**Management**: Nature and significance, F.W. Taylor's Scientific Management, Henri Fayol's 14 Principles, and their relevance today. **Functions of Management**: Planning (objectives, strategies, policies), Organising (delegation, decentralisation), Staffing (recruitment, selection, training, performance appraisal), Directing (leadership, motivation — Maslow's hierarchy, McGregor's Theory X/Y, communication, supervision), Controlling (standards, measurement, deviation, corrective action). **Business Finance**: Financial management (capital structure, fixed/working capital), financial markets (money market, capital market — NSE, BSE, SEBI). **Marketing Management**: Marketing mix (4Ps), product life cycle, pricing strategies, channels of distribution, promotion. **Consumer Protection**: Consumer rights, COPRA 1986, forums.

## Exam Relevance
CUET: Business Studies is a popular domain-specific paper. BBA entrances (IPU CET, NPAT, SET): tested in aptitude papers. CBSE Board: 80 marks theory — case-study based questions are common in Section C.

## Study Strategy
Learn key management thinkers (Taylor, Fayol, Mayo, Maslow, McGregor) by name and their core contribution. Case studies in the board exam ask you to identify which principle, theory, or function is illustrated — practice applying concepts to situations.`,
    academicLevels: ['higher-secondary'],
    topicIds: [
      'veda-topic-cbse-bs-management',
      'veda-topic-cbse-bs-organising',
      'veda-topic-cbse-bs-marketing',
      'veda-topic-cbse-bs-finance',
      'veda-topic-cbse-bs-consumer',
    ],
    courseIds: [],
    examIds: [],
    relatedSubjectIds: ['veda-subject-cbse-accountancy', 'veda-subject-cbse-economics'],
    tags: ['business studies', 'CBSE', 'Class 11', 'Class 12', 'commerce', 'management', 'marketing', 'BBA', 'MBA'],
    color: '#c2410c',
    updatedAt: '2026-09-16',
  },

  {
    id: 'veda-subject-cbse-economics',
    slug: 'cbse-class-11-12-economics',
    title: 'Economics — CBSE Class 11 & 12',
    shortTitle: 'CBSE Economics',
    description: 'Complete CBSE Economics for Class 11 and 12 — Microeconomics (consumer theory, production, markets) and Macroeconomics (national income, money, banking, trade). Common to both Commerce and Humanities streams.',
    guide: `## CBSE Economics Class 11 & 12 — Complete Guide

Economics is one of the most versatile subjects — it is taken by both Commerce and Humanities students in CBSE. The course is split between Microeconomics (the behaviour of individuals and firms) and Macroeconomics (the economy as a whole).

## Class 11 Economics
**Statistics for Economics**: Collection of data, organisation, presentation (tables, bar graphs, frequency distributions), measures of central tendency (mean, median, mode), measures of dispersion (range, quartile deviation, standard deviation), correlation and index numbers. **Introductory Microeconomics**: Introduction to economy and economics; Theory of consumer behaviour (utility, indifference curves, budget constraints, consumer equilibrium, demand and its elasticities); Production and Cost (production function, total/average/marginal product, laws of returns, types of costs, supply and its elasticities).

## Class 12 Economics
**Macroeconomics**: National Income — GDP, GNP, NNP, NI at factor cost and market prices, methods of measurement (value-added, expenditure, income). Circular flow. Money and Banking — money supply, credit creation, Central Bank (RBI) functions, monetary policy. Government Budget — revenue and capital budget, fiscal deficit, revenue deficit, primary deficit. Balance of Payments — current account, capital account, exchange rates, foreign exchange market. **Microeconomics (continued)**: Market equilibrium and price determination (demand-supply), price controls, Forms of Market — perfect competition, monopoly, monopolistic competition, oligopoly.

## Exam Relevance
CUET: Economics is a high-value paper for BA/B.Com admissions. IIM Indore IPM: Economics questions in aptitude section. CBSE Board: 80 marks theory — numerical questions on GDP, elasticity, and statistics carry significant weight.

## Study Strategy
For micro, draw diagrams carefully — indifference curves, budget lines, production possibility curves, market equilibrium. For macro, practise GDP calculations and circular flow problems. Statistics for Economics (Class 11) has predictable formulae — memorise and practise them for full marks.`,
    academicLevels: ['higher-secondary'],
    topicIds: [
      'veda-topic-cbse-ec-demand',
      'veda-topic-cbse-ec-production-costs',
      'veda-topic-cbse-ec-market-forms',
      'veda-topic-cbse-ec-national-income',
      'veda-topic-cbse-ec-money-banking',
    ],
    courseIds: [],
    examIds: [],
    relatedSubjectIds: ['veda-subject-cbse-accountancy', 'veda-subject-cbse-history'],
    tags: ['economics', 'CBSE', 'Class 11', 'Class 12', 'microeconomics', 'macroeconomics', 'national income', 'commerce', 'humanities'],
    color: '#0f766e',
    updatedAt: '2026-09-16',
  },

  // ── Humanities / Arts Stream ───────────────────────────────────────────

  {
    id: 'veda-subject-cbse-history',
    slug: 'cbse-class-11-12-history',
    title: 'History — CBSE Class 11 & 12',
    shortTitle: 'CBSE History',
    description: 'Complete CBSE History for Class 11 and 12 — World History (ancient civilisations, medieval empires, colonialism, modern transformations) and Indian History (Indus Valley to Independence). Core Humanities subject for UPSC and BA entrances.',
    guide: `## CBSE History Class 11 & 12 — Complete Guide

CBSE History is unique in its scope — it is world history, not just Indian history. The textbooks Themes in World History (Class 11) and Themes in Indian History (Class 12) are structured thematically rather than chronologically, requiring students to analyse causes, consequences, and changes rather than memorise dates.

## Class 11 History — Themes in World History
The 11 themes include: Writing and City Life (Mesopotamia), Empire (Rome), Nomadic Empires (Mongols), The Three Orders (Medieval Europe, feudalism), Changing Cultural Traditions (Renaissance), Displacing Indigenous Peoples (Americas, Australia), Paths to Modernisation (Japan, China). Each theme examines a specific time period and region and includes primary source analysis.

## Class 12 History — Themes in Indian History
Divided into three parts: **Part 1 (Ancient)**: Harappan Civilisation, Vedic society, Mauryan Empire (Ashoka), Vijayanagara Empire. **Part 2 (Medieval)**: Bhakti and Sufi traditions, Mughal court chronicles, colonial land revenue (Agrarian relations). **Part 3 (Modern)**: Revolt of 1857, Mahatma Gandhi and the national movement, Partition and its oral histories, Constituent Assembly debates and the making of the Constitution.

## Exam Relevance
UPSC CSE Preliminary and Mains: History is a core optional and GS paper subject. CUET: History is a key humanities domain paper. BA (History) admissions at DU, JNU, AMU, BHU. CBSE Board: 80 marks — 3 types of questions: source analysis, short answer, and long essay.

## Study Strategy
Do not skip the sources (documents, images, maps) in NCERT chapters — CBSE board always asks 4 marks on source analysis. For Class 12, learn the specific context and significance of each primary document. For UPSC aspirants, supplement with standard reference texts after completing NCERT thoroughly.`,
    academicLevels: ['higher-secondary'],
    topicIds: [
      'veda-topic-cbse-hi-ancient-civ',
      'veda-topic-cbse-hi-medieval-world',
      'veda-topic-cbse-hi-colonialism',
      'veda-topic-cbse-hi-independence',
      'veda-topic-cbse-hi-modern-world',
    ],
    courseIds: [],
    examIds: [],
    relatedSubjectIds: ['veda-subject-cbse-political-science', 'veda-subject-cbse-geography'],
    tags: ['history', 'CBSE', 'Class 11', 'Class 12', 'world history', 'Indian history', 'UPSC', 'humanities'],
    color: '#92400e',
    updatedAt: '2026-09-16',
  },

  {
    id: 'veda-subject-cbse-political-science',
    slug: 'cbse-class-11-12-political-science',
    title: 'Political Science — CBSE Class 11 & 12',
    shortTitle: 'Political Science',
    description: 'Complete CBSE Political Science for Class 11 and 12 — Indian Constitution, Democratic Politics, Political Theory, and Contemporary World Politics. Essential for UPSC, BA Political Science, and law school entrances.',
    guide: `## CBSE Political Science Class 11 & 12 — Complete Guide

Political Science in CBSE is taught through two parallel textbooks each year: one focused on Indian politics and one on political theory or world politics. This dual approach gives students both theoretical grounding and practical application.

## Class 11 Political Science
**Indian Constitution at Work**: Making of the Constitution, key features, Preamble (sovereignty, socialism, secularism, democracy, republic), Fundamental Rights (Articles 12–35), DPSPs, Fundamental Duties, Parliament (Lok Sabha, Rajya Sabha), Executive (President, PM, Council of Ministers), Judiciary (Supreme Court, High Courts, judicial review), Federalism (Centre-State relations, linguistic reorganisation), Local Government. **Political Theory**: Freedom, equality, social justice, rights, nationality, secularism, peace, and development.

## Class 12 Political Science
**Contemporary World Politics**: Cold War (bipolar world, US-USSR rivalry, Non-Alignment Movement), end of bipolarity (dissolution of USSR), New centres of power (EU, ASEAN, China), South Asia, International organisations (UN, IMF, World Bank), globalisation, environment and natural resources as political issues, security in contemporary world. **Politics in India since Independence**: Nation-building challenges (partition, integration of states), one-party dominance (Congress era), politics of planned development, India's external relations, challenges to Congress (1967–1977), Emergency and after, rise of new social movements, regional aspirations and coalitions, recent developments.

## Exam Relevance
UPSC CSE: Political Science is both a GS topic and a popular optional paper. CLAT (Law Entrance): Includes legal aptitude and political awareness. BA Political Science at DU, JNU. CBSE Board: 80 marks — case-study based and essay questions.

## Study Strategy
The NCERT Political Science textbooks are extremely well-written — read them cover to cover. For Class 12 Contemporary World Politics, create a timeline of Cold War events. For the Indian politics book, use newspaper editorial reading to connect theory to current events.`,
    academicLevels: ['higher-secondary'],
    topicIds: [
      'veda-topic-cbse-ps-constitution',
      'veda-topic-cbse-ps-rights',
      'veda-topic-cbse-ps-federalism',
      'veda-topic-cbse-ps-cold-war',
      'veda-topic-cbse-ps-foreign-policy',
    ],
    courseIds: [],
    examIds: [],
    relatedSubjectIds: ['veda-subject-cbse-history', 'veda-subject-cbse-economics'],
    tags: ['political science', 'CBSE', 'Class 11', 'Class 12', 'Indian Constitution', 'Cold War', 'UPSC', 'humanities', 'CLAT'],
    color: '#1e3a5f',
    updatedAt: '2026-09-16',
  },

  {
    id: 'veda-subject-cbse-geography',
    slug: 'cbse-class-11-12-geography',
    title: 'Geography — CBSE Class 11 & 12',
    shortTitle: 'CBSE Geography',
    description: 'Complete CBSE Geography for Class 11 and 12 — Physical Geography (geomorphology, climatology, oceanography), Human Geography (population, resources, settlements), and India: Physical + Economic Geography.',
    guide: `## CBSE Geography Class 11 & 12 — Complete Guide

CBSE Geography is a rich interdisciplinary subject combining physical science and social science. The three-textbook structure covers Fundamentals of Physical Geography, India: Physical Environment, and Human Geography concepts alongside India's economic and human geography in Class 12.

## Class 11 Geography
**Fundamentals of Physical Geography**: Interior of the Earth (layers, plate tectonics, earthquakes, volcanoes), Landforms and Geomorphology (weathering, erosion, fluvial, glacial, arid, coastal landforms), Atmosphere (composition, layers, temperature, pressure, winds, humidity, precipitation, weather systems), Water (ocean currents, tides, hydrological cycle), Biosphere (vegetation, ecosystems). **India: Physical Environment**: Geological history of India, physiographic divisions (Himalaya, Northern Plains, Peninsular Plateau, Coastal Plains, Islands), drainage systems (Himalayan vs Peninsular rivers), climate (monsoon — onset, retreat, types), natural vegetation and soils, natural hazards.

## Class 12 Geography
**Fundamentals of Human Geography**: Population distribution and density, human development index, human settlements (rural-urban), land resources (agriculture), water resources, mineral resources, energy resources, industries (iron & steel, cotton, IT), transport (roads, rail, air, water), trade and tourism. **India: Human Geography**: Population (Census 2011, distribution, density, growth, sex ratio, literacy, migration, tribes), Human settlements, Land use, Agriculture (Green Revolution, food security, types of farming), Industries (location factors, types, NW industrial region, Mumbai-Pune, Southern region), Transport and communication, International trade.

## Exam Relevance
UPSC CSE Geography: Both Prelims (Physical and Indian geography) and Mains (as optional or GS). CUET: Geography domain paper. Teaching entrance exams (TET, CTET). CBSE Board: 80 marks theory + 20 marks map work (mandatory).

## Study Strategy
Map work carries 20 marks in the board exam — never skip it. For physical geography, understanding processes (why glaciers form, how monsoons develop) is more important than memorising facts. Carry an atlas and always locate places on the map when you encounter them in the text.`,
    academicLevels: ['higher-secondary'],
    topicIds: [
      'veda-topic-cbse-ge-interior-landforms',
      'veda-topic-cbse-ge-climate',
      'veda-topic-cbse-ge-india-physical',
      'veda-topic-cbse-ge-india-resources',
      'veda-topic-cbse-ge-human-geo',
    ],
    courseIds: [],
    examIds: [],
    relatedSubjectIds: ['veda-subject-cbse-history', 'veda-subject-cbse-economics'],
    tags: ['geography', 'CBSE', 'Class 11', 'Class 12', 'physical geography', 'India geography', 'UPSC', 'humanities'],
    color: '#166534',
    updatedAt: '2026-09-16',
  },
];
