import type { Resource } from '../models';

/**
 * Tamil-language supporting video resources.
 * Sources: GATE Tamizhan (popular Tamil GATE channel), Unacademy Tamil,
 * and subject-specific Tamil YouTube channels.
 *
 * Rule: English source documents are ALWAYS shown — these are SUPPLEMENTARY
 * explanation videos in Tamil for students who prefer Tamil medium instruction.
 */

const base = {
  courseIds: [] as string[], branchIds: [] as string[], semesterIds: [] as string[],
  institutionIds: [] as string[], relatedResourceIds: [] as string[], prerequisiteIds: [] as string[],
  verificationStatus: 'community' as const, contentStatus: 'published' as const,
  language: 'ta',
  academicLevel: 'undergraduate' as const,
  createdAt: '2025-01-01', updatedAt: '2025-01-01',
};

export const resourcesTamilData: Resource[] = [

  // ════════════════════════════════════════════════════════════════════════
  //  ENGINEERING MATHEMATICS (Tamil)
  // ════════════════════════════════════════════════════════════════════════

  {
    ...base, id: 'veda-ta-dc-01', slug: 'tamil-differential-calculus-gate-tamizhan',
    title: 'வகை நுண்கணிதம் (Differential Calculus) – GATE Tamizhan',
    description: 'GATE Tamizhan தமிழில்: வரம்புகள், வகையீடுகள், சங்கிலி விதி, Rolle தேற்றம், சராசரி மதிப்பு தேற்றம். GATE ME/CE தேர்வுக்கு தயாரிப்பு.',
    type: 'video', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-engg-maths'], topicIds: ['veda-topic-differential-calculus'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ['calculus', 'tamil', 'GATE', 'differential calculus', 'GATE Tamizhan', 'வகை நுண்கணிதம்'],
    seoTitle: 'Differential Calculus Tamil – GATE Tamizhan', seoDescription: 'Tamil differential calculus video series by GATE Tamizhan for GATE preparation.',
  },
  {
    ...base, id: 'veda-ta-em-01', slug: 'tamil-engineering-maths-full-gate-tamizhan',
    title: 'Engineering Mathematics Full Course – GATE Tamizhan Tamil',
    description: 'GATE Tamizhan தமிழ் Engineering Mathematics: நுண்கணிதம், நேரியல் இயற்கணிதம், வகை சமன்பாடுகள், நிகழ்தகவு & புள்ளியியல். GATE ME/CE முழு பாடத்திட்டம்.',
    type: 'course', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-engg-maths'],
    topicIds: ['veda-topic-differential-calculus', 'veda-topic-integral-calculus', 'veda-topic-linear-algebra', 'veda-topic-differential-equations', 'veda-topic-probability-statistics'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ['engineering mathematics', 'tamil', 'GATE', 'full course', 'GATE Tamizhan'],
    seoTitle: 'Engineering Mathematics Tamil – GATE Tamizhan Full Course', seoDescription: 'Complete Tamil engineering mathematics course by GATE Tamizhan for GATE ME/CE.',
  },
  {
    ...base, id: 'veda-ta-la-01', slug: 'tamil-linear-algebra-gate-tamizhan',
    title: 'நேரியல் இயற்கணிதம் (Linear Algebra) – GATE Tamizhan Tamil',
    description: 'GATE Tamizhan தமிழில்: அணிகள், தர நிர்ணயம், சொந்த மதிப்புகள், Cayley-Hamilton. GATE ME/CE க்கு.',
    type: 'video', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-engg-maths'], topicIds: ['veda-topic-linear-algebra'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ['linear algebra', 'tamil', 'GATE', 'matrices', 'eigenvalues', 'GATE Tamizhan'],
    seoTitle: 'Linear Algebra Tamil – GATE Tamizhan', seoDescription: 'Tamil linear algebra with matrices and eigenvalues by GATE Tamizhan.',
  },
  {
    ...base, id: 'veda-ta-ode-01', slug: 'tamil-ode-gate-tamizhan',
    title: 'வகை சமன்பாடுகள் (ODE) – GATE Tamizhan Tamil',
    description: 'GATE Tamizhan தமிழில்: முதல் வரிசை ODE, இரண்டாம் வரிசை ODE, Laplace மாற்றம், GATE நிலை கேள்விகள்.',
    type: 'video', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-engg-maths'], topicIds: ['veda-topic-differential-equations'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ['ODE', 'tamil', 'GATE', 'Laplace transform', 'differential equations', 'GATE Tamizhan'],
    seoTitle: 'ODE Tamil – GATE Tamizhan Differential Equations', seoDescription: 'Tamil ODE lectures by GATE Tamizhan covering first and second order equations.',
  },
  {
    ...base, id: 'veda-ta-prob-01', slug: 'tamil-probability-statistics-gate-tamizhan',
    title: 'நிகழ்தகவு & புள்ளியியல் – GATE Tamizhan Tamil',
    description: 'GATE Tamizhan தமிழில்: நேர்மாறு பரம்பல், Binomial, Poisson, Normal பரம்பல்கள், Bayes தேற்றம், GATE தரவியல் கேள்விகள்.',
    type: 'video', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-engg-maths'], topicIds: ['veda-topic-probability-statistics'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ['probability', 'statistics', 'tamil', 'GATE', 'distributions', 'GATE Tamizhan'],
    seoTitle: 'Probability & Statistics Tamil – GATE Tamizhan', seoDescription: 'Tamil probability and statistics for GATE by GATE Tamizhan.',
  },
  {
    ...base, id: 'veda-ta-num-01', slug: 'tamil-numerical-methods-gate-tamizhan',
    title: 'எண்ணிய முறைகள் (Numerical Methods) – GATE Tamizhan Tamil',
    description: 'GATE Tamizhan தமிழில்: Newton-Raphson, இரு-பிரிவு முறை, Gauss Elimination, RK4. GATE தேர்வு எண்ணிய கேள்விகள்.',
    type: 'video', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-engg-maths'], topicIds: ['veda-topic-numerical-methods'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ['numerical methods', 'tamil', 'GATE', 'Newton-Raphson', 'RK4', 'GATE Tamizhan'],
    seoTitle: 'Numerical Methods Tamil – GATE Tamizhan', seoDescription: 'Tamil numerical methods for GATE by GATE Tamizhan.',
  },
  {
    ...base, id: 'veda-ta-cv-01', slug: 'tamil-complex-variables-gate-tamizhan',
    title: 'கலப்பு மாறிகள் (Complex Variables) – GATE Tamizhan Tamil',
    description: 'GATE Tamizhan தமிழில்: Cauchy-Riemann சமன்பாடுகள், பகுப்பாய்வு செயல்பாடுகள், வளைவு தொகையீடு, மீதி தேற்றம்.',
    type: 'video', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-engg-maths'], topicIds: ['veda-topic-complex-variables'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ['complex variables', 'tamil', 'GATE', 'Cauchy-Riemann', 'residue theorem', 'GATE Tamizhan'],
    seoTitle: 'Complex Variables Tamil – GATE Tamizhan', seoDescription: 'Tamil complex variables for GATE by GATE Tamizhan.',
  },

  // ════════════════════════════════════════════════════════════════════════
  //  ENGINEERING THERMODYNAMICS (Tamil)
  // ════════════════════════════════════════════════════════════════════════

  {
    ...base, id: 'veda-ta-tsp-01', slug: 'tamil-thermodynamics-basics-gate-tamizhan',
    title: 'வெப்பவியல் அடிப்படைகள் – GATE Tamizhan Tamil',
    description: 'GATE Tamizhan தமிழில்: வெப்பவியல் அமைப்புகள், பண்புகள், நிலை, செயல்முறை, பூஜ்யம்/முதல் விதி. GATE ME தேர்வு.',
    type: 'video', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-engg-thermo'], topicIds: ['veda-topic-thermo-systems-properties', 'veda-topic-first-law'],
    examIds: ['veda-exam-gate-me'],
    difficulty: 'beginner', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ['thermodynamics', 'tamil', 'GATE ME', 'system', 'first law', 'GATE Tamizhan'],
    seoTitle: 'Thermodynamics Basics Tamil – GATE Tamizhan', seoDescription: 'Tamil thermodynamics basics by GATE Tamizhan for GATE ME.',
  },
  {
    ...base, id: 'veda-ta-fl-01', slug: 'tamil-first-law-thermodynamics-gate-tamizhan',
    title: 'வெப்பவியல் முதல் விதி (SFEE) – GATE Tamizhan Tamil',
    description: 'GATE Tamizhan தமிழில்: முதல் விதி, உள் ஆற்றல், SFEE, enthalpy, நளிகல் / விசையாழி / சுருக்கி பயன்பாடுகள்.',
    type: 'video', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-engg-thermo'], topicIds: ['veda-topic-first-law'],
    examIds: ['veda-exam-gate-me'],
    difficulty: 'intermediate', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ['first law', 'SFEE', 'tamil', 'GATE ME', 'enthalpy', 'GATE Tamizhan'],
    seoTitle: 'First Law Thermodynamics Tamil – GATE Tamizhan SFEE', seoDescription: 'Tamil first law and SFEE by GATE Tamizhan for GATE ME.',
  },
  {
    ...base, id: 'veda-ta-sl-01', slug: 'tamil-second-law-entropy-gate-tamizhan',
    title: 'இரண்டாம் விதி & ஆட்கலவாய்மை – GATE Tamizhan Tamil',
    description: 'GATE Tamizhan தமிழில்: Kelvin-Planck கூற்று, Carnot சுழற்சி, ஆட்கலவாய்மை, T-s வரைபடம். GATE எண்ணிய கேள்விகள்.',
    type: 'video', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-engg-thermo'], topicIds: ['veda-topic-second-law-entropy'],
    examIds: ['veda-exam-gate-me'],
    difficulty: 'intermediate', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ['second law', 'entropy', 'tamil', 'GATE ME', 'Carnot', 'GATE Tamizhan'],
    seoTitle: 'Second Law & Entropy Tamil – GATE Tamizhan', seoDescription: 'Tamil second law and entropy by GATE Tamizhan for GATE ME.',
  },
  {
    ...base, id: 'veda-ta-gpc-01', slug: 'tamil-gas-power-cycles-gate-tamizhan',
    title: 'வாயு சக்தி சுழற்சிகள்: Otto, Diesel, Brayton – Tamil',
    description: 'GATE Tamizhan தமிழில்: Otto, Diesel, Brayton சுழற்சிகள்; P-V மற்றும் T-s வரைபடங்கள், வெப்ப திறன் சூத்திரங்கள்.',
    type: 'video', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-engg-thermo'], topicIds: ['veda-topic-gas-power-cycles'],
    examIds: ['veda-exam-gate-me'],
    difficulty: 'intermediate', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ['Otto cycle', 'Diesel cycle', 'Brayton cycle', 'tamil', 'GATE ME', 'GATE Tamizhan'],
    seoTitle: 'Gas Power Cycles Tamil – Otto Diesel Brayton | GATE Tamizhan', seoDescription: 'Tamil gas power cycles by GATE Tamizhan for GATE ME.',
  },
  {
    ...base, id: 'veda-ta-tc-01', slug: 'tamil-rankine-cycle-gate-tamizhan',
    title: 'Rankine சுழற்சி – GATE Tamizhan Tamil',
    description: 'GATE Tamizhan தமிழில்: Rankine சுழற்சி பகுப்பாய்வு, h-s வரைபடம், நீராவி அட்டவணை பயன்பாடு, மீண்டும் சூடாக்கல், மீளுருவாக்கம்.',
    type: 'video', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-engg-thermo'], topicIds: ['veda-topic-thermo-cycles'],
    examIds: ['veda-exam-gate-me'],
    difficulty: 'intermediate', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ['Rankine cycle', 'tamil', 'GATE ME', 'steam power', 'GATE Tamizhan'],
    seoTitle: 'Rankine Cycle Tamil – GATE Tamizhan', seoDescription: 'Tamil Rankine cycle and steam power by GATE Tamizhan.',
  },
  {
    ...base, id: 'veda-ta-ht-01', slug: 'tamil-heat-transfer-gate-tamizhan',
    title: 'வெப்ப இடமாற்றம் (Heat Transfer) – GATE Tamizhan Tamil',
    description: 'GATE Tamizhan தமிழில்: வெப்பக் கடத்தல் (Fourier விதி), வெப்ப வழிச்செலுத்தல் (Newton விதி), கதிர் வீச்சு (Stefan-Boltzmann), வெப்பப் பரிமாற்றிகள்.',
    type: 'video', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-engg-thermo'], topicIds: ['veda-topic-heat-transfer-intro'],
    examIds: ['veda-exam-gate-me'],
    difficulty: 'intermediate', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ['heat transfer', 'tamil', 'GATE ME', 'conduction', 'convection', 'GATE Tamizhan'],
    seoTitle: 'Heat Transfer Tamil – GATE Tamizhan', seoDescription: 'Tamil heat transfer: conduction, convection, radiation by GATE Tamizhan.',
  },

  // ════════════════════════════════════════════════════════════════════════
  //  FLUID MECHANICS (Tamil)
  // ════════════════════════════════════════════════════════════════════════

  {
    ...base, id: 'veda-ta-fp-01', slug: 'tamil-fluid-properties-gate-tamizhan',
    title: 'திரவ பண்புகள் (Fluid Properties) – GATE Tamizhan Tamil',
    description: 'GATE Tamizhan தமிழில்: பாகுத்தன்மை, Newton பாகுத்தன்மை விதி, மேற்பரப்பு இழுவிசை, தந்துகி விசை. GATE ME/CE.',
    type: 'video', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-fluid-mech'], topicIds: ['veda-topic-fluid-properties'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'beginner', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ['fluid properties', 'viscosity', 'tamil', 'GATE', 'surface tension', 'GATE Tamizhan'],
    seoTitle: 'Fluid Properties Tamil – GATE Tamizhan', seoDescription: 'Tamil fluid properties including viscosity and surface tension by GATE Tamizhan.',
  },
  {
    ...base, id: 'veda-ta-fs-01', slug: 'tamil-fluid-statics-gate-tamizhan',
    title: 'திரவ நிலையியல் (Fluid Statics) – GATE Tamizhan Tamil',
    description: 'GATE Tamizhan தமிழில்: ஜலவியல் அழுத்தம், Archimedes கொள்கை, மிதவை, Pascal விதி, U-குழாய் அளவீட்டி.',
    type: 'video', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-fluid-mech'], topicIds: ['veda-topic-fluid-statics'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'beginner', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ['fluid statics', 'tamil', 'GATE', 'Archimedes', 'buoyancy', 'GATE Tamizhan'],
    seoTitle: 'Fluid Statics Tamil – GATE Tamizhan', seoDescription: 'Tamil fluid statics including Archimedes principle by GATE Tamizhan.',
  },
  {
    ...base, id: 'veda-ta-bern-01', slug: 'tamil-bernoulli-equation-gate-tamizhan',
    title: "Bernoulli சமன்பாடு – GATE Tamizhan Tamil",
    description: 'GATE Tamizhan தமிழில்: Bernoulli கொள்கை, தொடர்ச்சி சமன்பாடு, Venturimeter, Pitot குழாய். GATE ME/CE எண்ணிய கேள்விகள்.',
    type: 'video', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-fluid-mech'], topicIds: ['veda-topic-bernoulli-equation'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ["Bernoulli's equation", 'tamil', 'GATE', 'Venturimeter', 'GATE Tamizhan'],
    seoTitle: "Bernoulli's Equation Tamil – GATE Tamizhan", seoDescription: "Tamil Bernoulli's equation and flow measurement by GATE Tamizhan.",
  },
  {
    ...base, id: 'veda-ta-pf-01', slug: 'tamil-pipe-flow-gate-tamizhan',
    title: 'குழாய் ஓட்டம் – Darcy-Weisbach | GATE Tamizhan Tamil',
    description: 'GATE Tamizhan தமிழில்: Darcy-Weisbach சமன்பாடு, Moody வரைபடம், உராய்வு கணிப்பு, குழாய் வலையமைப்பு.',
    type: 'video', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-fluid-mech'], topicIds: ['veda-topic-pipe-flow'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ['pipe flow', 'Darcy-Weisbach', 'tamil', 'GATE', 'GATE Tamizhan'],
    seoTitle: 'Pipe Flow Tamil – GATE Tamizhan Darcy-Weisbach', seoDescription: 'Tamil pipe flow and Darcy-Weisbach equation by GATE Tamizhan.',
  },

  // ════════════════════════════════════════════════════════════════════════
  //  STRENGTH OF MATERIALS (Tamil)
  // ════════════════════════════════════════════════════════════════════════

  {
    ...base, id: 'veda-ta-ss-01', slug: 'tamil-stress-strain-gate-tamizhan',
    title: 'அழுத்தம் & விகாரம் (Stress & Strain) – GATE Tamizhan Tamil',
    description: 'GATE Tamizhan தமிழில்: அச்சு அழுத்தம், Hooke விதி, Poisson விகிதம், Mohr வட்டம், முக்கிய அழுத்தங்கள். GATE ME/CE.',
    type: 'video', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-som'], topicIds: ['veda-topic-stress-strain'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ['stress strain', 'tamil', 'GATE', "Mohr's circle", 'GATE Tamizhan'],
    seoTitle: "Stress & Strain Tamil – GATE Tamizhan Mohr's Circle", seoDescription: "Tamil stress-strain and Mohr's circle by GATE Tamizhan.",
  },
  {
    ...base, id: 'veda-ta-bs-01', slug: 'tamil-sfd-bmd-gate-tamizhan',
    title: 'வெட்டு விசை & வளைவு திருப்பு வரைபடம் – GATE Tamizhan Tamil',
    description: 'GATE Tamizhan தமிழில்: SFD & BMD வரைதல், பல்வேறு சுமைகளுக்கு, flexure சூத்திரம், நடுநிலை அச்சு.',
    type: 'video', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-som'], topicIds: ['veda-topic-bending-shear'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ['SFD', 'BMD', 'tamil', 'GATE', 'bending moment', 'shear force', 'GATE Tamizhan'],
    seoTitle: 'SFD BMD Tamil – GATE Tamizhan Beams', seoDescription: 'Tamil SFD and BMD diagrams for beams by GATE Tamizhan.',
  },
  {
    ...base, id: 'veda-ta-tor-01', slug: 'tamil-torsion-gate-tamizhan',
    title: 'முறுக்கு (Torsion) – GATE Tamizhan Tamil',
    description: 'GATE Tamizhan தமிழில்: வட்ட as T/J = τ/r = Gθ/L, துருவ quầy moment, திசை இயக்கத்தாகம் P=2πNT/60. GATE ME/CE.',
    type: 'video', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-som'], topicIds: ['veda-topic-torsion'],
    examIds: ['veda-exam-gate-me', 'veda-exam-gate-ce'],
    difficulty: 'intermediate', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ['torsion', 'tamil', 'GATE', 'polar moment', 'power transmission', 'GATE Tamizhan'],
    seoTitle: 'Torsion Tamil – GATE Tamizhan Shaft', seoDescription: 'Tamil torsion in shafts and power transmission by GATE Tamizhan.',
  },

  // ════════════════════════════════════════════════════════════════════════
  //  ENGINEERING PHYSICS (Tamil)
  // ════════════════════════════════════════════════════════════════════════

  {
    ...base, id: 'veda-ta-mech-01', slug: 'tamil-mechanics-kinematics-jee',
    title: 'இயக்கவியல் & இயக்கவிதிகள் – Tamil JEE Physics',
    description: 'தமிழில் JEE Physics: இயக்கவியல் (1D/2D), Newton விதிகள், வேலை-ஆற்றல் தேற்றம், சுழற்சி இயக்கம். JEE Main/Advanced.',
    type: 'video', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-engg-physics'], topicIds: ['veda-topic-mechanics-kinematics'],
    examIds: ['veda-exam-jee-main', 'veda-exam-jee-advanced'],
    difficulty: 'intermediate', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ['mechanics', 'kinematics', 'tamil', 'JEE', "Newton's laws", 'GATE Tamizhan'],
    seoTitle: 'Mechanics Tamil – JEE Physics GATE Tamizhan', seoDescription: 'Tamil mechanics and kinematics for JEE by GATE Tamizhan.',
  },
  {
    ...base, id: 'veda-ta-elec-01', slug: 'tamil-electrostatics-jee',
    title: 'மின்னிலைவியல் (Electrostatics) – Tamil JEE Physics',
    description: 'தமிழில் JEE Physics: Coulomb விதி, மின் புலம், Gauss விதி, மின் திறன், மின்தேக்கி, மின்கடத்தா. JEE Main/Advanced.',
    type: 'video', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-engg-physics'], topicIds: ['veda-topic-electrostatics'],
    examIds: ['veda-exam-jee-main', 'veda-exam-jee-advanced'],
    difficulty: 'intermediate', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ['electrostatics', 'tamil', 'JEE', "Coulomb's law", "Gauss's law", 'GATE Tamizhan'],
    seoTitle: 'Electrostatics Tamil – JEE Physics GATE Tamizhan', seoDescription: 'Tamil electrostatics for JEE by GATE Tamizhan.',
  },
  {
    ...base, id: 'veda-ta-mp-01', slug: 'tamil-modern-physics-jee',
    title: 'நவீன இயற்பியல் (Modern Physics) – Tamil JEE',
    description: 'தமிழில் JEE Physics: ஒளி மின் விளைவு, de Broglie அலைநீளம், Bohr மாதிரி, கதிரியக்கம், அணுக்கரு பிளவு/இணைவு.',
    type: 'video', url: 'https://www.youtube.com/@GATETamizhan',
    subjectIds: ['veda-subject-engg-physics'], topicIds: ['veda-topic-modern-physics'],
    examIds: ['veda-exam-jee-main', 'veda-exam-jee-advanced'],
    difficulty: 'intermediate', source: 'GATE Tamizhan', provider: 'YouTube',
    tags: ['modern physics', 'tamil', 'JEE', 'Bohr model', 'radioactivity', 'GATE Tamizhan'],
    seoTitle: 'Modern Physics Tamil – JEE GATE Tamizhan', seoDescription: 'Tamil modern physics for JEE by GATE Tamizhan.',
  },
];
