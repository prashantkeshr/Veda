import type { Stream } from '../models';

export const streamsData: Stream[] = [
  {
    id: 'stream-science-pcm',
    slug: 'science-pcm',
    name: 'Science (PCM)',
    shortName: 'PCM',
    description: 'Physics, Chemistry, Mathematics stream for Class 11–12 students aiming for engineering, architecture, and pure sciences.',
    guide: `## About Science (PCM) Stream
The PCM stream — Physics, Chemistry, and Mathematics — is chosen by students in Class 11–12 who aspire to pursue engineering, architecture, applied sciences, or data science. It is the gateway to India's most prestigious engineering institutions.

## Core Subjects
- **Physics**: Mechanics, Thermodynamics, Electromagnetism, Optics, Modern Physics
- **Chemistry**: Physical Chemistry, Organic Chemistry, Inorganic Chemistry
- **Mathematics**: Calculus, Algebra, Coordinate Geometry, Trigonometry, Vectors, Probability

## Optional Subjects (Common Additions)
- **Computer Science / Informatics Practices**: Recommended for IT/CSE aspirants
- **Physical Education, Economics, Psychology**: Popular optional add-ons
- **English**: Compulsory in all boards

## Career Pathways After PCM
- **Engineering (B.Tech/B.E.)**: Via JEE Main (NITs/IIITs/CFTIs) or JEE Advanced (IITs/IISc)
- **Architecture (B.Arch)**: Via JEE Main Paper 2 / NATA
- **B.Sc Mathematics/Physics/Statistics**: Via university entrance exams or merit
- **IISER/IISc BS Research**: Via JEE Advanced/KVPY
- **Data Science, Computer Science (BCA/B.Sc CS)**: Via university-level entrance or merit
- **Defence (NDA)**: Via UPSC NDA written + SSB interview
- **Merchant Navy**: Via IMU CET

## Competitive Exams Directly Linked
JEE Main, JEE Advanced, BITSAT, VITEEE, SRMJEE, MH-CET (Engineering), KCET, AP EAMCET, TS EAMCET, WBJEE, MHTCET, GUJCET, COMEDK, UPSEE.`,
    academicLevels: ['higher-secondary'],
    coreSubjects: ['Physics', 'Chemistry', 'Mathematics'],
    programmeIds: ['prog-btech', 'prog-be', 'prog-bsc', 'prog-barch', 'prog-bca'],
    boardIds: ['board-cbse', 'board-icse', 'board-ap', 'board-karnataka', 'board-maharashtra', 'board-tamilnadu', 'board-telangana'],
    careers: ['Software Engineer', 'Mechanical Engineer', 'Civil Engineer', 'Electrical Engineer', 'Data Scientist', 'Architect', 'Research Scientist'],
    tags: ['pcm', 'science stream', 'jee', 'engineering', 'class 11', 'class 12', 'iit', 'nit'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'stream-science-pcb',
    slug: 'science-pcb',
    name: 'Science (PCB)',
    shortName: 'PCB',
    description: 'Physics, Chemistry, Biology stream for Class 11–12 students aiming for medicine, dentistry, pharmacy, and life sciences.',
    guide: `## About Science (PCB) Stream
The PCB stream — Physics, Chemistry, and Biology — is chosen by students who aspire to pursue medicine, dentistry, pharmacy, nursing, veterinary science, and life sciences. It is the primary pathway for India's medical entrance exams.

## Core Subjects
- **Physics**: Mechanics, Properties of Matter, Thermodynamics, Optics, Modern Physics
- **Chemistry**: Physical Chemistry, Organic Chemistry, Inorganic Chemistry, Biomolecules
- **Biology (Botany + Zoology)**: Cell Biology, Genetics, Ecology, Human Physiology, Plant Physiology, Evolution

## Career Pathways After PCB
- **MBBS**: Via NEET UG (only pathway for Government Medical Colleges in India)
- **BDS (Dentistry)**: Via NEET UG
- **BAMS/BHMS/BUMS (Ayurveda, Homeopathy, Unani)**: Via NEET UG
- **B.Pharma (Pharmacy)**: Via GPAT or state pharmacy entrance
- **B.Sc Life Sciences / Biotechnology / Biochemistry**: Via university admissions
- **B.Sc Nursing**: Via direct admission or NEET-based state admissions
- **Veterinary Sciences (B.V.Sc.)**: Via NEET UG (from 2024)
- **IISER BS Research (Biology)**: Via KVPY/JEE Advanced/IAT

## Competitive Exams Directly Linked
NEET UG (primary gateway), AIIMS (merged with NEET), JIPMER (merged with NEET), state-level medical entrance tests.

## NEET UG: The Critical Exam
From 2020, NEET UG is the single national medical entrance examination for all MBBS/BDS seats across India. Approximately 20+ lakh students appear annually for about 1.7 lakh MBBS seats. A NEET score of 600+ is required for government MBBS seats.`,
    academicLevels: ['higher-secondary'],
    coreSubjects: ['Physics', 'Chemistry', 'Biology'],
    programmeIds: ['prog-mbbs', 'prog-bsc', 'prog-bpharm'],
    boardIds: ['board-cbse', 'board-icse', 'board-ap', 'board-karnataka', 'board-maharashtra', 'board-tamilnadu', 'board-telangana'],
    careers: ['Doctor (MBBS)', 'Dentist', 'Pharmacist', 'Nurse', 'Biotechnologist', 'Research Scientist', 'Veterinarian'],
    tags: ['pcb', 'science stream', 'neet', 'mbbs', 'medical', 'class 11', 'class 12', 'biology'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'stream-science-pcmb',
    slug: 'science-pcmb',
    name: 'Science (PCMB)',
    shortName: 'PCMB',
    description: 'Physics, Chemistry, Mathematics AND Biology — for students keeping both engineering (JEE) and medical (NEET) options open.',
    guide: `## About Science (PCMB) Stream
The PCMB stream — Physics, Chemistry, Mathematics, AND Biology — is taken by students who want to keep both engineering (JEE Main/Advanced) and medical (NEET) options open simultaneously. It is a rigorous choice that requires managing five core subjects.

## Why Choose PCMB
- Flexibility: can appear for both JEE and NEET
- Wider career options: engineering, medicine, research, pharmacy
- Particularly useful if uncertain between PCM and PCB tracks

## Challenges
- Higher workload than PCM or PCB alone (essentially studying for both)
- Requires strong time management and self-discipline
- Not available at all schools — some boards only allow PCM or PCB

## Boards Offering PCMB
Karnataka (PCMB is a specific group in PUC), Tamil Nadu (PCMB group), Maharashtra, and some CBSE schools allow all four subjects together.

## Recommended Only For
Students who are genuinely interested in both biology and mathematics, and who have strong academic capability to handle five theory subjects at the Class 12 board level.`,
    academicLevels: ['higher-secondary'],
    coreSubjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    programmeIds: ['prog-btech', 'prog-mbbs', 'prog-bsc'],
    boardIds: ['board-cbse', 'board-karnataka', 'board-tamilnadu', 'board-maharashtra'],
    careers: ['Doctor', 'Engineer', 'Research Scientist', 'Biotechnologist'],
    tags: ['pcmb', 'science stream', 'jee', 'neet', 'class 11', 'class 12', 'flexible'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'stream-commerce',
    slug: 'commerce',
    name: 'Commerce',
    shortName: 'Commerce',
    description: 'Accountancy, Business Studies, and Economics stream for Class 11–12 — gateway to CA, MBA, BBA, B.Com, and financial careers.',
    guide: `## About Commerce Stream
The Commerce stream for Class 11–12 covers Accountancy, Business Studies, and Economics, with optional subjects like Mathematics, Statistics, and Computer Applications. It is the gateway to careers in finance, business management, accounting, and banking.

## Core Subjects
- **Accountancy**: Financial Accounting, Company Accounts, Cash Flow Statements, Financial Statement Analysis
- **Business Studies**: Business Organisation, Finance, Marketing, HR, Entrepreneurship
- **Economics**: Micro and Macro Economics, Indian Economic Development, Statistics for Economics
- **Mathematics (Optional but Important)**: Recommended for CA/banking/MBA aspirants — required for many Commerce entrance exams

## Career Pathways After Commerce
- **CA (Chartered Accountancy)**: Via ICAI Foundation after Class 12 — one of India's most prestigious professional qualifications
- **B.Com / B.Com (Hons.)**: Via university merit admissions, DU SOL, etc.
- **BBA / BBM**: Via university entrance exams or merit
- **MBA**: Via CAT/MAT/XAT after BBA/B.Com/any graduation
- **Banking / Finance**: Via IBPS, SBI PO, RBI Grade B examinations
- **CS (Company Secretary)**: Via ICSI Foundation
- **CMA**: Via ICMAI
- **B.A. Economics (Hons.)**: Via CUET or university entrance

## Competitive Exams
CUET (DU/central university admissions), SET (Symbiosis), NPAT (NMIMS), IPU CET, CA Foundation, CS Foundation.

## Mathematics in Commerce
While not mandatory in all boards, Mathematics in Class 11–12 Commerce is strongly recommended for students aspiring for CA, MBA, or banking careers. It opens doors to B.Com (Hons.) at premier colleges like SRCC and LSR at DU.`,
    academicLevels: ['higher-secondary'],
    coreSubjects: ['Accountancy', 'Business Studies', 'Economics'],
    programmeIds: ['prog-bcom', 'prog-bba', 'prog-mba', 'prog-mcom'],
    boardIds: ['board-cbse', 'board-icse', 'board-maharashtra', 'board-tamilnadu', 'board-karnataka', 'board-up'],
    careers: ['Chartered Accountant', 'MBA Graduate', 'Banking Professional', 'Financial Analyst', 'Company Secretary', 'Entrepreneur'],
    tags: ['commerce stream', 'accountancy', 'ca', 'mba', 'bcom', 'class 11', 'class 12', 'finance'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'stream-arts',
    slug: 'arts-humanities',
    name: 'Arts / Humanities',
    shortName: 'Arts',
    description: 'History, Political Science, Geography, Sociology, and Literature stream — gateway to UPSC Civil Services, Law, Journalism, Social Work, and Liberal Arts careers.',
    guide: `## About Arts / Humanities Stream
The Arts (or Humanities) stream for Class 11–12 includes History, Political Science, Geography, Sociology, Economics, Literature (Hindi/English/Regional), Philosophy, and Psychology. Despite being underestimated by many, Arts is the most direct pathway to UPSC Civil Services, Law, Journalism, Social Work, and Liberal Arts.

## Core Subjects (Typical CBSE Arts Stream)
- **History**: Ancient, Medieval, Modern Indian and World History
- **Political Science**: Indian Constitution, Comparative Government, International Relations
- **Geography**: Physical, Human, and Economic Geography
- **Economics**: (shared with Commerce) — Macro/Micro + Indian Economy
- **Sociology**: Society, Social Institutions, Social Change
- **Psychology**: Introduction to Psychology, Human Development, Sensation, Personality
- **English (Core/Elective)**: Literature and Language

## Career Pathways
- **UPSC Civil Services (IAS/IPS/IFS)**: Arts stream provides direct alignment with History, Political Science, Sociology, Geography as optionals
- **Law (LLB/BA LLB via CLAT)**: Political Science and Economics build a foundation for constitutional and economic law
- **Journalism & Mass Communication**: BA Mass Communication via entrance exams
- **BA/B.A. (Hons.) in any subject**: Delhi University (DU), Presidency, JNU, Hyderabad Central University
- **Teaching (BA + B.Ed)**: Arts graduates are in demand for school teaching careers
- **Social Work (BSW/MSW)**: Via direct admission or entrance
- **MA, M.Phil, Ph.D**: Research pathways in humanities

## UPSC Connection
The UPSC Civil Services examination has GS (General Studies) papers with significant humanities content. Arts stream students who study these subjects deeply have a natural edge. India's most prominent IAS/IPS officers have frequently come from Arts backgrounds.`,
    academicLevels: ['higher-secondary'],
    coreSubjects: ['History', 'Political Science', 'Geography', 'Sociology', 'Economics'],
    programmeIds: ['prog-ba', 'prog-ballb', 'prog-ma'],
    boardIds: ['board-cbse', 'board-icse', 'board-up', 'board-maharashtra', 'board-wb', 'board-tamilnadu'],
    careers: ['IAS/IPS Officer', 'Lawyer', 'Journalist', 'Social Worker', 'Teacher', 'Historian', 'Diplomat', 'Policy Analyst'],
    tags: ['arts stream', 'humanities', 'upsc', 'law', 'history', 'class 11', 'class 12', 'clat'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'stream-engineering',
    slug: 'engineering',
    name: 'Engineering',
    shortName: 'Engineering',
    description: 'Undergraduate and postgraduate engineering streams covering all branches from Computer Science to Civil, Mechanical, Electrical, and emerging disciplines.',
    guide: `## About Engineering as an Academic Stream
Engineering at the undergraduate level (B.Tech/B.E.) is a 4-year programme covering technical fundamentals followed by specialisation in a specific branch. India has 23 IITs, 31 NITs, 26 IIITs, and thousands of private engineering colleges offering B.Tech programmes.

## Major Engineering Branches
- **Computer Science & Engineering (CSE)**: Algorithms, Data Structures, Operating Systems, Databases, AI/ML
- **Electronics & Communication Engineering (ECE)**: Circuits, Signals, Communication Systems, VLSI
- **Electrical Engineering (EE/EEE)**: Power Systems, Control Systems, Electrical Machines
- **Mechanical Engineering (ME)**: Thermodynamics, Fluid Mechanics, Machine Design, Manufacturing
- **Civil Engineering (CE)**: Structural Engineering, Geotechnics, Transportation, Water Resources
- **Chemical Engineering (ChE)**: Process Engineering, Reaction Engineering, Mass Transfer
- **Information Technology (IT)**: Similar to CSE with more systems/networking focus
- **Aerospace Engineering**: Aerodynamics, Propulsion, Structures
- **Biomedical Engineering**: Bio-Instrumentation, Biomechanics, Medical Devices
- **Data Science & AI (Emerging Branch at IITs)**: Machine Learning, Deep Learning, Big Data

## Postgraduate Engineering (M.Tech/M.E.)
2-year M.Tech programmes are offered at IITs, NITs, IISc, and other institutes. GATE (Graduate Aptitude Test in Engineering) is the primary admission test, also providing PSU recruitment.

## Entry Through JEE
- **JEE Main**: Gateway to NITs, IIITs, CFTIs, and state engineering colleges
- **JEE Advanced**: Gateway to IITs (top ~2.5 lakh JEE Main qualifiers appear)
- State-level: KCET (Karnataka), AP EAMCET, TS EAMCET, WBJEE, MH-CET, GUJCET`,
    academicLevels: ['undergraduate', 'postgraduate'],
    coreSubjects: ['Mathematics', 'Physics', 'Chemistry', 'Engineering Drawing', 'Computer Science'],
    programmeIds: ['prog-btech', 'prog-be', 'prog-mtech', 'prog-me', 'prog-phd'],
    boardIds: [],
    careers: ['Software Engineer', 'Data Scientist', 'Mechanical Engineer', 'Civil Engineer', 'Electrical Engineer', 'Aerospace Engineer', 'Research Engineer'],
    tags: ['engineering', 'btech', 'jee', 'gate', 'iit', 'nit', 'cse', 'mechanical', 'electrical', 'civil'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'stream-medical',
    slug: 'medical',
    name: 'Medical',
    shortName: 'Medical',
    description: 'MBBS, BDS, BAMS, and allied health sciences — gateway through NEET UG to India\'s medical colleges.',
    guide: `## About Medical Stream
The Medical stream at the undergraduate level primarily covers MBBS (Bachelor of Medicine and Bachelor of Surgery), the most sought-after professional degree in India. MBBS admission is exclusively through NEET UG, which is held by NTA (National Testing Agency) annually.

## MBBS (5.5 Years)
- **Pre-Clinical (Year 1–1.5)**: Anatomy, Physiology, Biochemistry
- **Para-Clinical (Year 2–2.5)**: Pharmacology, Pathology, Microbiology, Forensic Medicine, Community Medicine
- **Clinical (Year 3–5)**: Internal Medicine, Surgery, Obstetrics & Gynaecology, Paediatrics, ENT, Ophthalmology, Psychiatry, Orthopaedics, Radiology, Dermatology
- **Internship (1 year)**: Rotating clinical posting across departments

## Allied Medical Programmes
- **BDS**: Dentistry (5 years via NEET UG)
- **BAMS/BHMS/BUMS**: Ayurveda, Homeopathy, Unani (5.5 years via NEET UG)
- **B.Pharma**: Pharmacy (4 years via GPAT/state)
- **B.Sc Nursing**: Nursing (4 years)
- **BMLT / BASLP**: Lab Technology, Speech-Language Pathology

## Postgraduate Medical: MD/MS
After MBBS, PG specialisation is through NEET PG and INI-CET (for AIIMS/JIPMER/PGI). MD (Medicine) and MS (Surgery) are 3-year programmes. Super-speciality (DM/M.Ch) requires another 3 years.

## NEET UG: The Gateway
NEET UG is the exclusive entrance for MBBS/BDS/BAMS/BHMS/BUMS seats across all private and government medical colleges in India. Approximately 20+ lakh students appear for ~1.7 lakh MBBS seats annually (Government: ~55,000 seats, Private: ~55,000 seats, Deemed: ~30,000 seats).`,
    academicLevels: ['undergraduate', 'postgraduate', 'professional'],
    coreSubjects: ['Biology', 'Chemistry', 'Physics', 'Anatomy', 'Physiology', 'Biochemistry'],
    programmeIds: ['prog-mbbs', 'prog-bsc', 'prog-bpharm', 'prog-phd'],
    boardIds: [],
    careers: ['Doctor (General Physician)', 'Surgeon', 'Specialist Doctor', 'Medical Researcher', 'Pharmacist', 'Dentist'],
    tags: ['medical', 'mbbs', 'neet', 'aiims', 'bds', 'medicine', 'healthcare'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'stream-law',
    slug: 'law',
    name: 'Law',
    shortName: 'Law',
    description: 'LLB, BA LLB, and LLM — entry via CLAT for NLUs or direct university admissions.',
    guide: `## About Law as an Academic Stream
Legal education in India is offered as a 5-year integrated BA LLB programme (after Class 12) or a 3-year LLB programme (after graduation). The 5-year pathway is preferred for students entering law directly from Class 12, while the 3-year LLB suits graduates from any discipline.

## 5-Year Integrated BA LLB (Hons.)
Offered at all National Law Universities (NLUs) and many private law schools. The programme combines Arts/Social Science foundation (years 1–2) with core legal subjects (years 3–5). Core areas include:
- Constitutional Law, Criminal Law, Contract Law, Tort Law
- Property Law, Family Law, Labour Law, Company Law
- International Law, Intellectual Property Law, Environmental Law

## CLAT: Common Law Admission Test
CLAT is the entrance examination for 24 National Law Universities in India. Conducted by the Consortium of NLUs, it tests:
- English Language, Current Affairs & General Knowledge
- Legal Reasoning, Logical Reasoning, Quantitative Techniques

NLSIU Bangalore, NLU Delhi (AILET), NALSAR Hyderabad, WBNUJS Kolkata, and NLU Jodhpur are the top 5 NLUs by NIRF ranking.

## Career Pathways in Law
- **Litigation**: District Court → High Court → Supreme Court as an Advocate
- **Corporate Law**: Law firms, in-house legal counsel at companies
- **Judiciary**: UPSC Civil Judge exam or High Court/Supreme Court clerk
- **Public Sector (Government Legal)**: Attorney General's office, PSU Legal Departments
- **Academia**: LLM → Ph.D → Law Professor
- **Policy/Think Tanks**: Legislative drafting, policy analysis
- **International Law**: UN, World Bank, arbitration bodies`,
    academicLevels: ['undergraduate', 'postgraduate', 'professional'],
    coreSubjects: ['Constitutional Law', 'Contract Law', 'Criminal Law', 'Property Law', 'International Law'],
    programmeIds: ['prog-ballb', 'prog-llb', 'prog-llm', 'prog-phd'],
    boardIds: [],
    careers: ['Advocate', 'Corporate Lawyer', 'Judge', 'Legal Consultant', 'Policy Analyst', 'Legal Academic'],
    tags: ['law', 'clat', 'llb', 'nlu', 'bar', 'advocacy', 'legal'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'stream-management',
    slug: 'management',
    name: 'Management / Business',
    shortName: 'Management',
    description: 'BBA, MBA, and management sciences — gateway to corporate leadership, entrepreneurship, and finance.',
    guide: `## About Management / Business Stream
Management education ranges from undergraduate BBA (Bachelor of Business Administration) to postgraduate MBA (Master of Business Administration). India has IIMs (Indian Institutes of Management), the world's best management institutes, alongside thousands of business schools.

## Undergraduate (BBA/BBM/BMS)
3-year programmes covering marketing, finance, HR, operations, and entrepreneurship. Entry through university entrance exams (IPU CET, CUET, SET, NPAT, NMIMS) or merit.

## Postgraduate MBA (2 Years)
The flagship management qualification. Entry through:
- **CAT (Common Admission Test)**: Primary exam for IIMs and top B-schools
- **XAT**: XLRI and 150+ institutions
- **SNAP**: Symbiosis institutes
- **NMAT**: NMIMS and partner B-schools
- **MAT/CMAT**: State and private B-schools

## IIM System
India has 21 IIMs. The original 6 (Ahmedabad, Bangalore, Calcutta, Lucknow, Kozhikode, Indore) are globally ranked. IIM Ahmedabad and IIM Bangalore consistently rank in Asia's top 10 business schools.

## Career Pathways
Finance (Investment Banking, PE/VC, Corporate Finance), Marketing, Management Consulting (McKinsey, BCG, Bain), Product Management at tech companies, General Management, Entrepreneurship.

## Why MBA
An MBA from a top institution (especially IIM-A, IIM-B, IIM-C) significantly accelerates career trajectory and enables domain transition from engineering, commerce, or arts into management and business.`,
    academicLevels: ['undergraduate', 'postgraduate'],
    coreSubjects: ['Business Studies', 'Economics', 'Accountancy', 'Quantitative Methods', 'Organisational Behaviour'],
    programmeIds: ['prog-bba', 'prog-mba', 'prog-phd'],
    boardIds: [],
    careers: ['Management Consultant', 'Investment Banker', 'Product Manager', 'Marketing Manager', 'Entrepreneur', 'General Manager'],
    tags: ['management', 'mba', 'bba', 'iim', 'cat', 'business', 'finance', 'marketing'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'stream-science-pure',
    slug: 'pure-science',
    name: 'Pure Sciences',
    shortName: 'Pure Science',
    description: 'B.Sc / BS-MS programmes in Physics, Chemistry, Mathematics, Biology — IISERs, IISc, Delhi University, Presidency and top science colleges.',
    guide: `## About Pure Sciences Stream
Pure Sciences at the undergraduate level covers B.Sc (3-year) or BS-MS (5-year integrated) programmes in fundamental disciplines: Physics, Chemistry, Mathematics, Biology, Statistics, and Earth Sciences. IISERs, IISc, Delhi University's SRCC/Kirori Mal/Miranda House, Presidency University, and St. Stephen's College are the premier pure science institutions.

## Why Choose Pure Sciences
- **Intellectual depth**: Pursue foundational knowledge for its own sake
- **Research pathway**: PhD at IISc, IISERs, JNU, or international universities
- **Flexibility**: Pure science graduates are valued in finance (actuarial, quant), data science, teaching, and academia
- **IISER BS-MS**: A world-class 5-year programme combining breadth and research depth

## B.Sc at Top Science Colleges
- Delhi University: B.Sc (H) Physics/Chemistry/Mathematics at St. Stephen's, Kirori Mal, Hansraj via CUET
- Presidency University Kolkata: B.Sc in Physics/Chemistry/Mathematics via State CET
- IISc Bangalore: 4-year BS Research (via JEE Advanced/KVPY)
- IISERs: 5-year BS-MS (via IAT/KVPY/JEE Advanced)
- Jadavpur University, BHU, HCU, JNTU: Various pure science programmes

## Career Pathways
- PhD and academic research (most direct pathway)
- Data Science, Quantitative Finance (Mathematics/Statistics)
- Scientific computing, simulation engineering
- Teaching (B.Sc + B.Ed + NET/SET)
- UPSC optional subject (Physics, Chemistry, or Mathematics)`,
    academicLevels: ['undergraduate', 'postgraduate', 'doctoral'],
    coreSubjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Statistics'],
    programmeIds: ['prog-bsc', 'prog-msc', 'prog-phd'],
    boardIds: [],
    careers: ['Research Scientist', 'Data Scientist', 'Quantitative Analyst', 'Science Teacher', 'Physicist', 'Chemist', 'Mathematician'],
    tags: ['pure science', 'bsc', 'iiser', 'iisc', 'kvpy', 'physics', 'chemistry', 'maths', 'research'],
    updatedAt: '2025-01-01',
  },
];
