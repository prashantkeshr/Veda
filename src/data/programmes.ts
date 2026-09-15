import type { Programme } from '../models';

export const programmesData: Programme[] = [
  {
    id: 'prog-btech',
    slug: 'btech',
    name: 'Bachelor of Technology',
    shortName: 'B.Tech',
    description: '4-year undergraduate engineering degree — India\'s most sought-after professional qualification, offered at IITs, NITs, IIITs, and thousands of engineering colleges.',
    guide: `## About B.Tech
Bachelor of Technology (B.Tech) is India's premier undergraduate engineering degree, offered over 4 years (8 semesters). It is the primary pathway for engineering careers in software, hardware, manufacturing, infrastructure, and emerging technologies.

## Programme Structure
**Year 1–2 (Foundation)**: Mathematics, Physics, Chemistry, Engineering Drawing, Basic Electronics, Computer Programming, Workshop Practice.
**Year 3–4 (Specialisation)**: Core branch subjects, laboratory work, electives, and a final-year project (B.Tech thesis).

## Major Branches
- Computer Science & Engineering (CSE) — most competitive
- Electronics & Communication Engineering (ECE)
- Electrical Engineering (EE) / Electrical & Electronics (EEE)
- Mechanical Engineering (ME)
- Civil Engineering (CE)
- Chemical Engineering (ChE)
- Information Technology (IT)
- Aerospace Engineering
- Biotechnology Engineering
- Data Science & AI (newer IIT branches)
- Mining Engineering, Petroleum Engineering (IIT ISM)
- Production/Industrial Engineering

## Admission Process
- **JEE Main**: For NITs, IIITs, and 25+ Centrally Funded Technical Institutions (CFTIs). Conducted by NTA twice a year (January and April). Eligibility: Class 12 Physics, Chemistry, Mathematics.
- **JEE Advanced**: For IITs and IISc. Requires qualifying JEE Main in the same year. Top 2.5 lakh JEE Main qualifiers are eligible.
- **State CETs**: KCET (Karnataka), AP EAMCET, TS EAMCET, MH-CET, WBJEE, GUJCET, etc. — for state government engineering colleges.
- **Institute-Specific**: BITSAT (BITS Pilani), VITEEE (VIT), SRMJEE, Manipal entrance.

## After B.Tech: Career Paths
- **Software/IT Industry**: Direct placement through campus recruitment (TCS, Infosys, Wipro, Amazon, Google, Microsoft)
- **Core Engineering**: Manufacturing, PSUs (BHEL, NTPC, ISRO, DRDO, Coal India — via GATE)
- **M.Tech / ME**: 2-year postgraduate specialisation via GATE
- **MBA**: Via CAT/XAT (popular for IIT graduates entering management consulting)
- **MS/PhD abroad**: USA, Germany, Canada, UK for research careers
- **UPSC Civil Services**: Many IITians and NIT graduates join Civil Services using Engineering as optional`,
    degree: 'bachelors',
    durationYears: 4,
    streamId: 'stream-engineering',
    academicLevel: 'undergraduate',
    eligibility: 'Class 12 with Physics, Chemistry, Mathematics (PCM). Minimum 75% aggregate (relaxed to 65% for SC/ST) for IITs/NITs.',
    admissionExams: ['JEE Main', 'JEE Advanced', 'BITSAT', 'VITEEE', 'KCET', 'AP EAMCET', 'TS EAMCET', 'MH-CET', 'WBJEE'],
    coreSubjects: ['Mathematics', 'Physics', 'Chemistry', 'Engineering Mechanics', 'Computer Programming'],
    topInstitutionIds: ['inst-iit-madras', 'inst-iit-delhi', 'inst-iit-bombay', 'inst-iit-kanpur', 'inst-nit-trichy', 'inst-nit-surathkal'],
    careers: ['Software Engineer', 'Data Scientist', 'Mechanical Engineer', 'Civil Engineer', 'Electrical Engineer', 'Aerospace Engineer', 'Management Consultant'],
    tags: ['btech', 'b.tech', 'engineering', 'jee', 'iit', 'nit', 'undergraduate', '4 year'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'prog-be',
    slug: 'be',
    name: 'Bachelor of Engineering',
    shortName: 'B.E.',
    description: '4-year undergraduate engineering degree — equivalent to B.Tech, offered by affiliating universities particularly in Karnataka, Maharashtra, and Tamil Nadu.',
    guide: `## About B.E. (Bachelor of Engineering)
Bachelor of Engineering (B.E.) is equivalent to B.Tech — both are 4-year undergraduate engineering programmes recognised by AICTE and UGC. The nomenclature differs based on the university: IITs award B.Tech, while many affiliating universities (VTU in Karnataka, Mumbai University, Anna University in Tamil Nadu, Pune University) award B.E.

## B.E. vs B.Tech
- **No functional difference**: Both are recognised by AICTE, UGC, and all government bodies
- **Government jobs**: B.E. and B.Tech are interchangeable for all PSU and government recruitment
- **GATE eligibility**: Both qualify equally for GATE
- **Nomenclature**: IITs, NITs, IIITs → B.Tech; VTU (Bengaluru) → B.E.; Anna University (Chennai) → B.E.

## Top Universities Awarding B.E.
- VTU (Visvesvaraya Technological University, Karnataka) — ~200 affiliated colleges
- Anna University (Tamil Nadu) — ~500+ affiliated colleges
- Mumbai University — ~300+ affiliated colleges
- Pune University (SPPU)

## Admission
For VTU-affiliated colleges: KCET or COMEDK. For Anna University: TNEA (based on Class 12 marks). For Mumbai University: MH-CET.`,
    degree: 'bachelors',
    durationYears: 4,
    streamId: 'stream-engineering',
    academicLevel: 'undergraduate',
    eligibility: 'Class 12 with Physics, Chemistry, Mathematics.',
    admissionExams: ['KCET', 'MH-CET', 'TNEA', 'COMEDK', 'JEE Main'],
    coreSubjects: ['Mathematics', 'Physics', 'Chemistry', 'Engineering Mechanics'],
    topInstitutionIds: [],
    careers: ['Software Engineer', 'Mechanical Engineer', 'Civil Engineer', 'Electrical Engineer'],
    tags: ['be', 'b.e.', 'engineering', 'vtu', 'anna university', 'undergraduate'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'prog-bsc',
    slug: 'bsc',
    name: 'Bachelor of Science',
    shortName: 'B.Sc',
    description: '3-year undergraduate science degree in Physics, Chemistry, Mathematics, Biology, Computer Science, Statistics, and other science disciplines.',
    guide: `## About B.Sc
Bachelor of Science (B.Sc) is a 3-year undergraduate degree in pure or applied science. It is the foundational qualification for careers in research, data science, teaching, and industry. Top B.Sc programmes in India are at IISc (BS Research, 4 years), IISERs (BS-MS, 5 years), Delhi University, Presidency University, and St. Stephen's College.

## Common B.Sc Specialisations
- B.Sc (Hons.) Physics, Chemistry, Mathematics, Zoology, Botany, Statistics
- B.Sc Computer Science / IT
- B.Sc Biotechnology, Biochemistry, Microbiology
- B.Sc Agriculture, Forestry, Food Technology
- B.Sc Data Science, Artificial Intelligence (newer programmes)
- B.Sc Nursing (4 years, different from typical B.Sc)

## B.Sc vs B.Tech
B.Sc is theoretical and research-oriented, while B.Tech is applied and industry-oriented. B.Sc graduates can pursue M.Sc (for academia/research) or switch to M.Tech (if B.Sc is in science), MCA, MBA, or UPSC.

## Premier B.Sc Institutions
- **IISc Bangalore**: 4-year BS Research (JEE Advanced/KVPY)
- **IISERs**: 5-year BS-MS (IAT/KVPY/JEE Advanced)
- **DU Colleges (St. Stephen's, Miranda House, Hansraj, Ramjas)**: 3-year B.Sc (Hons.) via CUET
- **Presidency University Kolkata**: Historic science institution

## Career After B.Sc
M.Sc (for research, teaching), M.Tech (for industry), MBA (for management), Ph.D (for research/academia), Data Science roles (with CS/Statistics B.Sc), Government jobs via SSC CGL, banking via IBPS.`,
    degree: 'bachelors',
    durationYears: 3,
    streamId: 'stream-science-pure',
    academicLevel: 'undergraduate',
    eligibility: 'Class 12 with science (PCM, PCB, or PCMB). CUET for central universities.',
    admissionExams: ['CUET', 'JEE Advanced', 'KVPY', 'IAT', 'State CETs'],
    coreSubjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Statistics'],
    topInstitutionIds: ['inst-iisc', 'inst-iiser-pune', 'inst-iiser-kolkata', 'inst-iiser-mohali'],
    careers: ['Research Scientist', 'Data Scientist', 'Science Teacher', 'Pharmacist (with further study)', 'Lab Analyst'],
    tags: ['bsc', 'b.sc', 'science', 'physics', 'chemistry', 'maths', 'biology', 'iiser', 'iisc', 'undergraduate'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'prog-bcom',
    slug: 'bcom',
    name: 'Bachelor of Commerce',
    shortName: 'B.Com',
    description: '3-year undergraduate degree in commerce, accountancy, finance, and business — foundation for CA, MBA, banking, and corporate finance careers.',
    guide: `## About B.Com
Bachelor of Commerce (B.Com) is a 3-year undergraduate degree covering accounting, finance, taxation, economics, business law, and management. It is one of India's most popular undergraduate degrees, especially in combination with CA (Chartered Accountancy) preparation.

## B.Com vs B.Com (Hons.)
- **B.Com**: General degree covering all commerce subjects broadly
- **B.Com (Hons.)**: Specialised depth in Accounting/Finance — preferred for CA article-ship and finance careers
- **B.Com (Hons.) at DU (SRCC, Kirori Mal)**: India's most competitive B.Com programme; SRCC cut-offs regularly exceed 99%

## Programme Coverage
**Year 1**: Financial Accounting, Business Laws, Business Mathematics/Statistics, Microeconomics
**Year 2**: Corporate Accounting, Income Tax, Company Law, Macroeconomics, Financial Management
**Year 3**: Advanced Accounting, Auditing, Cost Accounting, Banking, International Business, Electives

## B.Com + CA: The Power Combination
Most CA aspirants pursue B.Com simultaneously:
- B.Com provides academic qualification alongside CA Foundation/Intermediate/Final
- Exemptions may be available in some CA subjects based on B.Com marks
- B.Com (Hons.) with CA is the strongest commerce combination for finance careers

## Career Pathways
CA (Chartered Accountancy), CS (Company Secretary), CMA, MBA (via CAT — very popular), Banking (IBPS PO, SBI PO, RBI Grade B), Government services (SSC CGL, State PSC), Corporate Finance/Accounting roles.

## Admission
CUET for Delhi University and central universities. Maharashtra CET, state-level exams, or direct merit for other colleges.`,
    degree: 'bachelors',
    durationYears: 3,
    streamId: 'stream-commerce',
    academicLevel: 'undergraduate',
    eligibility: 'Class 12 (Commerce preferred, but any stream eligible at most colleges). Minimum 60% for top colleges.',
    admissionExams: ['CUET', 'IPU CET', 'State CETs'],
    coreSubjects: ['Financial Accounting', 'Business Studies', 'Economics', 'Corporate Law', 'Income Tax', 'Cost Accounting'],
    topInstitutionIds: [],
    careers: ['Chartered Accountant', 'Financial Analyst', 'Tax Consultant', 'Banking Professional', 'MBA Graduate', 'Company Secretary'],
    tags: ['bcom', 'b.com', 'commerce', 'accountancy', 'ca', 'mba', 'finance', 'undergraduate'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'prog-bba',
    slug: 'bba',
    name: 'Bachelor of Business Administration',
    shortName: 'BBA',
    description: '3-year undergraduate management degree — foundation for MBA and early entry into business, marketing, HR, and finance roles.',
    guide: `## About BBA
Bachelor of Business Administration (BBA) is a 3-year undergraduate management degree covering marketing, finance, HR, operations, and entrepreneurship. It is ideal for students who want to enter the management field directly after Class 12 or use it as a stepping stone to MBA.

## BBA Programme Structure
**Year 1**: Principles of Management, Business Communication, Financial Accounting, Microeconomics, Computer Applications
**Year 2**: Marketing Management, HRM, Business Law, Quantitative Methods, Entrepreneurship
**Year 3**: Strategic Management, International Business, Operations Management, Internship, Project

## BBA Specialisations
Finance, Marketing, HR, International Business, Digital Marketing, Entrepreneurship, Family Business Management, Analytics.

## BBA vs B.Com
- BBA is more management/strategy focused; B.Com is more accounting/finance focused
- BBA is better for marketing/management careers; B.Com + CA is better for accounting careers
- Both are valid MBA pathways

## Top BBA Institutions
- Christ University Bengaluru, Symbiosis BBA (SET), NMIMS BBA (NPAT), IP University (CET), Delhi University (BMS at DYAL), Amity, FLAME University

## Career After BBA
Most BBA graduates pursue MBA (2-3 years experience + CAT/XAT/GMAT). Direct entry into marketing, sales, HR, or operations roles is also common. BBA + CA (Commerce background) is a strong finance combination.`,
    degree: 'bachelors',
    durationYears: 3,
    streamId: 'stream-management',
    academicLevel: 'undergraduate',
    eligibility: 'Class 12 (any stream). Minimum 50-60% for most colleges.',
    admissionExams: ['SET (Symbiosis)', 'NPAT (NMIMS)', 'IPU CET', 'CUET', 'DU JAT', 'Christ University Entrance'],
    coreSubjects: ['Principles of Management', 'Marketing', 'Financial Accounting', 'Business Economics', 'HRM'],
    topInstitutionIds: [],
    careers: ['Business Analyst', 'Marketing Executive', 'HR Executive', 'Operations Manager', 'Entrepreneur', 'MBA Graduate'],
    tags: ['bba', 'management', 'marketing', 'mba', 'undergraduate', 'business administration'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'prog-ba',
    slug: 'ba',
    name: 'Bachelor of Arts',
    shortName: 'B.A.',
    description: '3-year undergraduate degree in humanities, social sciences, and liberal arts — foundation for UPSC, law, journalism, social work, and academic careers.',
    guide: `## About B.A.
Bachelor of Arts (B.A.) is a 3-year undergraduate degree covering humanities and social science subjects. It is the most flexible undergraduate degree, accepting students from any Class 12 stream (Science, Commerce, or Arts). B.A. programmes cover a wide range of subjects and pathways.

## Popular B.A. Subjects / Specialisations
- **B.A. (Hons.) History**: Deep study of ancient, medieval, modern Indian and world history — excellent for UPSC
- **B.A. (Hons.) Political Science**: Indian polity, comparative politics, international relations — UPSC aligned
- **B.A. (Hons.) Economics**: Micro/Macro economics, econometrics — gateway to M.A. Economics, MBA, or civil services
- **B.A. (Hons.) English**: Literature, linguistics — for journalism, teaching, UPSC English Literature optional
- **B.A. (Hons.) Geography**: Physical and human geography — UPSC Geography optional
- **B.A. (Hons.) Sociology/Psychology**: Social science research, welfare sector
- **B.A. (Hons.) Philosophy**: Critical thinking, UPSC optional
- **B.A. Liberal Arts / Humanities**: Interdisciplinary programmes at Ashoka, Flame, OP Jindal, Krea

## Premier B.A. Institutions
Delhi University (Miranda House, Lady Shri Ram, St. Stephen's, SRCC Economics) via CUET; Presidency University Kolkata; Jadavpur University; Christ University; JNU (via JNUEE); Hyderabad Central University.

## Career Pathways
- **UPSC Civil Services**: Most directly aligned degree — History, Political Science, Sociology, Geography, Economics as optionals
- **Law (LLB via CLAT)**: 3-year LLB after BA, or 5-year BA LLB integrated
- **Journalism & Mass Communication**: BA + PG Diploma / MA Mass Communication
- **MA → PhD → Academia**: Research career in humanities
- **Social Work (MSW)**: NGO, development sector careers
- **Banking & Finance**: Eligibility (any graduation) + IBPS PO

## B.A. + UPSC: The Classic Combination
Many India's top IAS/IPS officers have BA (Hons.) degrees. Arts subjects align directly with UPSC GS papers and optionals, making BA the most strategic degree for civil services aspirants.`,
    degree: 'bachelors',
    durationYears: 3,
    streamId: 'stream-arts',
    academicLevel: 'undergraduate',
    eligibility: 'Class 12 (any stream). CUET for DU/central universities.',
    admissionExams: ['CUET', 'JNUEE', 'State CETs'],
    coreSubjects: ['History', 'Political Science', 'Economics', 'Sociology', 'Geography', 'English'],
    topInstitutionIds: [],
    careers: ['IAS/IPS Officer', 'Journalist', 'Lawyer', 'Academic Researcher', 'Social Worker', 'Policy Analyst'],
    tags: ['ba', 'b.a.', 'arts', 'humanities', 'upsc', 'history', 'political science', 'undergraduate'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'prog-mbbs',
    slug: 'mbbs',
    name: 'Bachelor of Medicine, Bachelor of Surgery',
    shortName: 'MBBS',
    description: '5.5-year (4.5 year programme + 1 year mandatory internship) medical degree — India\'s most prestigious professional qualification, admitted exclusively through NEET UG.',
    guide: `## About MBBS
Bachelor of Medicine, Bachelor of Surgery (MBBS) is India's primary medical degree, equivalent to the M.D. degree in the USA. The programme is 5.5 years: 4.5 years of academic study followed by 1 year of compulsory rotating internship.

## Programme Structure
**Pre-Clinical Phase (Year 1–1.5)**
Anatomy, Physiology, Biochemistry — understanding the normal human body.

**Para-Clinical Phase (Year 2–2.5)**
Pathology (disease processes), Pharmacology (drugs), Microbiology (infectious agents), Forensic Medicine & Toxicology, Community Medicine, and clinical postings begin.

**Clinical Phase (Year 3–4.5)**
General Medicine, General Surgery, Obstetrics & Gynaecology (OBG), Paediatrics, ENT, Ophthalmology, Psychiatry, Orthopaedics, Dermatology, Radiology — hands-on patient care with theory.

**Internship (1 year)**
Rotating internship at the institute's hospital covering all major departments. Compulsory for full MBBS degree and MCI registration.

## NEET UG: The Only Gateway
From 2020, NEET UG (conducted by NTA) is the exclusive entrance for ALL MBBS seats in India — government, private, deemed, and central institutions (including AIIMS and JIPMER). Around 20+ lakh students appear for ~1.7 lakh MBBS seats.

## MBBS Seat Distribution
- Government Medical College seats: ~55,000 (extremely competitive)
- Central Institutions (AIIMS-14, JIPMER-2): ~1,100 seats
- Private/Deemed Medical Colleges: ~75,000+ seats (high fees: ₹10–25 lakh/year)
- Management Quota, NRI Quota: Available at private colleges

## After MBBS: Postgraduate
- **NEET PG**: For MD (Medicine) / MS (Surgery) — super-competitive, similar difficulty to NEET UG
- **INI-CET**: For AIIMS, JIPMER, PGI Chandigarh, NIMHANS — separate exam
- **USMLE**: For USA MD pathway
- **PLAB**: For UK GMC registration

## Required NEET Score for Government MBBS
- AIIMS Delhi: ~715-720+/720 (approx. top 50–100 rank)
- Top Government Medical Colleges: ~620-650+ for General category
- State Government colleges vary by state; some accept 550+`,
    degree: 'bachelors',
    durationYears: 6,
    streamId: 'stream-medical',
    academicLevel: 'professional',
    eligibility: 'Class 12 with Physics, Chemistry, Biology. Minimum 50% aggregate (40% for SC/ST/OBC). Must qualify NEET UG.',
    admissionExams: ['NEET UG'],
    coreSubjects: ['Anatomy', 'Physiology', 'Biochemistry', 'Pharmacology', 'Pathology', 'Microbiology', 'Medicine', 'Surgery'],
    topInstitutionIds: ['inst-aiims-delhi'],
    careers: ['General Physician', 'Specialist Doctor', 'Surgeon', 'Medical Researcher', 'Public Health Officer'],
    tags: ['mbbs', 'medicine', 'neet', 'aiims', 'medical college', 'doctor', 'undergraduate', 'professional'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'prog-ballb',
    slug: 'ba-llb',
    name: 'Bachelor of Arts, Bachelor of Laws (Integrated)',
    shortName: 'BA LLB',
    description: '5-year integrated law degree combining Arts/Social Sciences with legal studies — entry through CLAT for NLUs.',
    guide: `## About BA LLB (Integrated 5-Year)
The 5-year integrated BA LLB (Hons.) is India's most sought-after pre-law undergraduate programme. Introduced in India by NLSIU Bangalore in 1988, it combines 2 years of liberal arts education with 3 years of intensive legal studies. It is now the standard qualification for entering top law firms, judiciary, and corporate legal careers.

## Programme Structure
**Years 1–2 (Foundation Arts)**
Political Science, History, Economics, Sociology, English, Psychology, Philosophy — building the intellectual foundation for legal reasoning.

**Years 3–5 (Core Legal Studies)**
Constitutional Law, Criminal Law, Contract Law, Tort Law, Property Law, Family Law, Company Law, International Law, Environmental Law, IP Law, Administrative Law, Labour Law.

**Electives (Years 4–5)**
Corporate Law, International Arbitration, Cyber Law, Tax Law, Human Rights Law — depending on career interest.

**Moot Court & Internships**
Moot court competitions and summer internships at law firms/courts are mandatory components at top NLUs.

## Entry: CLAT (Common Law Admission Test)
CLAT is the gateway for 24 National Law Universities. Sections: English Language, GK & Current Affairs, Legal Reasoning, Logical Reasoning, Quantitative Techniques. Total: 120 marks. Top NLUs (NLSIU, WBNUJS, NALSAR, NLU Jodhpur) require approximately top 100-300 CLAT rank.

## Career After BA LLB
- **Litigation**: Enroll as Advocate with Bar Council → District Court → High Court → Supreme Court
- **Corporate Law Firms**: AZB, Cyril Amarchand, Trilegal, Khaitan & Co., SAM — the "Magic Circle" of Indian law
- **In-House Legal Counsel**: Corporations, PSUs, banks
- **Judiciary**: Civil Judge exam (State PSC) or Central Judiciary
- **LLM + PhD**: Academic career
- **UPSC Civil Services**: Law as a popular optional subject`,
    degree: 'integrated',
    durationYears: 5,
    streamId: 'stream-law',
    academicLevel: 'undergraduate',
    eligibility: 'Class 12 (any stream). Minimum 45% aggregate (40% for SC/ST). Age: not above 20 years (22 for SC/ST). Must qualify CLAT.',
    admissionExams: ['CLAT', 'AILET (for NLU Delhi)', 'LSAT India', 'MH CET Law'],
    coreSubjects: ['Constitutional Law', 'Contract Law', 'Criminal Law', 'Property Law', 'Administrative Law', 'International Law'],
    topInstitutionIds: ['inst-nlsiu-bangalore', 'inst-nlu-delhi', 'inst-nalsar-hyderabad'],
    careers: ['Advocate', 'Corporate Lawyer', 'In-House Counsel', 'Judge', 'Legal Researcher', 'Policy Analyst'],
    tags: ['ba llb', 'law', 'clat', 'nlu', 'integrated law', '5 year', 'legal'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'prog-bca',
    slug: 'bca',
    name: 'Bachelor of Computer Applications',
    shortName: 'BCA',
    description: '3-year undergraduate programme in computer applications, software development, and IT — designed for students without Class 12 Mathematics.',
    guide: `## About BCA
Bachelor of Computer Applications (BCA) is a 3-year undergraduate programme focused on software development, database management, web development, and computer science fundamentals. It is a practical alternative to B.Tech/B.Sc CS for students who want a computing career without the intense mathematics-heavy curriculum.

## Programme Coverage
**Year 1**: C Programming, Mathematics for CS, Digital Electronics, Data Structures, Operating Systems basics
**Year 2**: Java/Python, Database Management (SQL), Software Engineering, Computer Networks, Web Development (HTML/CSS/JS)
**Year 3**: Advanced Web (React/Angular), Mobile App Development, Cloud Computing, AI/ML basics, Project Work

## BCA vs B.Sc CS vs B.Tech CS
- **BCA**: Application-focused, less mathematical, widely available, 3 years
- **B.Sc CS**: More theoretical, mathematical — good for research pathway
- **B.Tech CS**: Engineering focus, heavy mathematics, 4 years — most valued by top tech companies

## Career After BCA
- **MCA (Master of Computer Applications)**: 2-year PG via NIMCET or university entrance — significantly boosts career value
- **M.Tech**: Some universities allow B.Sc/BCA graduates for M.Tech Computer Science
- **MBA**: BCA + MBA (IIM/top B-school via CAT) — common path for product management roles
- **Direct Industry Placement**: TCS, Wipro, Infosys, Cognizant hire BCA graduates for software testing, development, and support roles

## Top BCA Colleges
Christ University (Bengaluru), Symbiosis (Pune), IPU Delhi, IGNOU, BHU, Amity, and state universities across India.`,
    degree: 'bachelors',
    durationYears: 3,
    academicLevel: 'undergraduate',
    eligibility: 'Class 12 (any stream, but Math preferred). Minimum 50% aggregate.',
    admissionExams: ['IPU CET', 'CUET', 'Christ Entrance', 'Symbiosis SET', 'State CETs'],
    coreSubjects: ['C/C++ Programming', 'Data Structures', 'Database Management', 'Web Development', 'Software Engineering'],
    topInstitutionIds: [],
    careers: ['Software Developer', 'Web Developer', 'System Analyst', 'Database Administrator', 'IT Support Specialist'],
    tags: ['bca', 'computer applications', 'software', 'it', 'programming', 'undergraduate'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'prog-mtech',
    slug: 'mtech',
    name: 'Master of Technology',
    shortName: 'M.Tech',
    description: '2-year postgraduate engineering degree via GATE — offered at IITs, NITs, IISc, and thousands of engineering institutes across India.',
    guide: `## About M.Tech
Master of Technology (M.Tech) is a 2-year postgraduate engineering specialisation degree. It is the primary pathway for engineers who want to deepen expertise, move into research/R&D, or access PSU (Public Sector Undertaking) jobs. Admission is primarily through GATE (Graduate Aptitude Test in Engineering).

## GATE: The Gateway to M.Tech and PSUs
GATE is conducted jointly by IITs and IISc. A valid GATE score is used for:
1. **M.Tech admissions** at IITs, NITs, IISc, and 900+ institutes
2. **PSU recruitment** (BHEL, NTPC, ONGC, IOCL, Coal India, GAIL, HPCL — all recruit engineers via GATE score with 6-digit salaries)
3. **Junior Research Fellowship** (JRF) at IITs/IISc for PhD

## M.Tech Specialisations (Examples)
- M.Tech CSE: AI/ML, Data Science, Distributed Systems, Networks
- M.Tech ECE: VLSI Design, Signal Processing, Embedded Systems, RF
- M.Tech Mechanical: Thermal Engineering, Machine Design, Manufacturing, Robotics
- M.Tech Civil: Structural Engineering, Geotechnical, Transportation, Environmental
- M.Tech Chemical: Process Control, Petroleum, Polymer Technology

## M.Tech at IITs vs NITs
- IIT M.Tech is significantly more research-intensive with world-class faculty
- IIT M.Tech graduates command much higher industry salaries (₹15-30 LPA vs ₹8-15 LPA at NITs)
- IIT M.Tech offers HTRA (Half-Time Research Assistantship) stipend of ₹12,400/month

## Career After M.Tech
Industry (R&D, product development at ISRO, DRDO, top MNCs), Academia (PhD pathway at IITs/IISc), PSU management positions, Research & Innovation roles.`,
    degree: 'masters',
    durationYears: 2,
    streamId: 'stream-engineering',
    academicLevel: 'postgraduate',
    eligibility: 'B.Tech/B.E./B.Sc Engineering (any branch relevant to specialisation). GATE score required for IITs/NITs.',
    admissionExams: ['GATE'],
    coreSubjects: ['Advanced Algorithms', 'Research Methodology', 'Specialisation Subjects', 'Thesis Work'],
    topInstitutionIds: ['inst-iit-madras', 'inst-iit-delhi', 'inst-iit-bombay', 'inst-iisc'],
    careers: ['R&D Engineer', 'Research Scientist', 'PSU Engineer', 'Academic Researcher', 'Product Development Engineer'],
    tags: ['mtech', 'm.tech', 'gate', 'postgraduate', 'engineering', 'iit', 'nit', 'psu', 'research'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'prog-mba',
    slug: 'mba',
    name: 'Master of Business Administration',
    shortName: 'MBA',
    description: '2-year postgraduate management degree via CAT/XAT — IIMs, FMS Delhi, MDI Gurgaon, and XLRI are the top institutions.',
    guide: `## About MBA
Master of Business Administration (MBA) is India's most sought-after postgraduate management qualification. The 2-year full-time MBA from a top institution (IIMs, XLRI, FMS) dramatically accelerates career trajectories in consulting, investment banking, corporate leadership, and entrepreneurship.

## CAT: The Primary Gateway
The Common Admission Test (CAT), conducted by IIMs annually, is the primary entrance for MBA admission at IIMs and 1,200+ MBA programmes. Key sections: Verbal Ability & Reading Comprehension (VARC), Data Interpretation & Logical Reasoning (DILR), Quantitative Aptitude (QA).

## IIM Hierarchy (Rough Ranking)
- **IIM-A, B, C (ABC)**: World-class, median packages ₹25-35 LPA, global placements
- **IIM Lucknow, Kozhikode, Indore**: Top IIMs, packages ₹18-25 LPA
- **IIM Rohtak, Raipur, Ranchi, Shillong, Trichy, Udaipur, Visakhapatnam, Sirmaur, Nagpur, Bodh Gaya, Amritsar, Jammu, Sambalpur**: Newer IIMs
- **Non-IIM Top Schools**: FMS Delhi (₹26 LPA avg), MDI Gurgaon, XLRI Jamshedpur (XAT), ISB Hyderabad (GMAT), SP Jain Mumbai

## MBA Specialisations
Finance, Marketing, Human Resources, Operations, Strategy, Business Analytics, Entrepreneurship, Family Business.

## MBA Programme Structure
Year 1: Core courses — Accounting, Finance, Marketing, Operations, Strategy, OB, Economics, Statistics
Year 2: Specialisation electives, internship (Summer Internship in Year 1-2 gap), leadership projects

## Ideal Profile for Top IIMs
Academic excellence (Class 10: 85%+, Class 12: 85%+, Graduation: 7.5+ CGPA), 2-3 years relevant work experience, diverse background (Engineering graduates dominate; Arts/Commerce adds diversity score), CAT 99+ percentile for IIM-ABC.`,
    degree: 'masters',
    durationYears: 2,
    streamId: 'stream-management',
    academicLevel: 'postgraduate',
    eligibility: 'Any graduation (min. 50% for most IIMs; 45% for SC/ST). Work experience preferred but not mandatory.',
    admissionExams: ['CAT', 'XAT', 'SNAP', 'NMAT', 'GMAT', 'IIFT', 'MAT'],
    coreSubjects: ['Financial Management', 'Marketing Management', 'Operations Management', 'Organisational Behaviour', 'Business Strategy'],
    topInstitutionIds: [],
    careers: ['Management Consultant', 'Investment Banker', 'Product Manager', 'Marketing Manager', 'General Manager', 'Entrepreneur', 'VC/PE Professional'],
    tags: ['mba', 'cat', 'iim', 'management', 'postgraduate', 'finance', 'marketing', 'consulting'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'prog-msc',
    slug: 'msc',
    name: 'Master of Science',
    shortName: 'M.Sc',
    description: '2-year postgraduate science degree in Physics, Chemistry, Mathematics, Biology, Statistics, Computer Science — via JAM, CUET-PG, or university entrance.',
    guide: `## About M.Sc
Master of Science (M.Sc) is a 2-year postgraduate degree in basic or applied sciences. IIT M.Sc programmes (admission via JAM — Joint Admission to Master of Science) are among the most valued M.Sc programmes in India, equivalent to IIT B.Tech in career impact for science pathways.

## IIT JAM: The Key Entrance
JAM (Joint Admission to Master Programmes) is conducted by IITs for M.Sc admissions at IITs and IISc. Available subjects: Mathematics, Mathematical Statistics, Physics, Chemistry, Geology, Economics, Biotechnology, Computer Applications. A good JAM rank enables M.Sc at IIT Bombay, IIT Delhi, IIT Madras etc. — which is highly valued.

## M.Sc Subjects
Physics, Chemistry, Mathematics, Statistics, Computer Science, Biotechnology, Environmental Science, Life Sciences, Earth Sciences, etc.

## M.Sc at IITs vs Regular Universities
- IIT M.Sc (via JAM): Equivalent to IIT B.Tech in brand value for research and PhD pathways. Stipend available for research work. Excellent PhD placement at IITs, IISc, and international universities.
- Regular University M.Sc (DU, Hyderabad, JNU): Strong academic foundations, lower brand value for industry.

## Career After M.Sc
PhD (at IITs, IISc, TIFR, IISERs, or international universities), research positions, government labs (DAE, ISRO, DRDO — via JEST/NET), data science roles (Mathematics/Statistics M.Sc), teaching (UGC NET/SET for professorship), and government exams.`,
    degree: 'masters',
    durationYears: 2,
    streamId: 'stream-science-pure',
    academicLevel: 'postgraduate',
    eligibility: 'B.Sc or B.Tech (relevant branch). IIT M.Sc via JAM. University M.Sc via CUET-PG or entrance.',
    admissionExams: ['JAM', 'CUET-PG', 'JNUEE', 'HCU CET', 'TIFR GS', 'State CETs'],
    coreSubjects: ['Advanced Physics/Chemistry/Maths/Biology', 'Research Methodology', 'Specialisation Electives'],
    topInstitutionIds: ['inst-iit-madras', 'inst-iit-delhi', 'inst-iit-bombay', 'inst-iisc'],
    careers: ['Research Scientist', 'Data Scientist', 'Teacher/Professor', 'Government Scientist', 'Quantitative Analyst'],
    tags: ['msc', 'm.sc', 'jam', 'iit msc', 'postgraduate', 'science', 'physics', 'chemistry', 'mathematics', 'research'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'prog-phd',
    slug: 'phd',
    name: 'Doctor of Philosophy',
    shortName: 'Ph.D',
    description: '3–6 year doctoral research degree — the highest academic qualification, leading to careers in research, academia, and advanced R&D.',
    guide: `## About Ph.D
Doctor of Philosophy (Ph.D) is the highest academic degree awarded in India and globally. It involves 3–6 years of original research under faculty supervision, culminating in a thesis contribution to the field. Ph.D holders become professors, senior research scientists, and technical leaders.

## Ph.D in India: Top Institutions
- IITs (IIT Madras, IIT Bombay, IIT Delhi, IIT Kanpur, IIT Roorkee) — engineering and science
- IISc Bangalore — pure research (NIRF #1 Research)
- IISERs — basic science research
- TIFR Mumbai — theoretical sciences
- NCBS Bengaluru — biological sciences
- NISER Bhubaneswar, IACS Kolkata — science research
- JNU New Delhi — humanities, social sciences, life sciences
- IIMs (Ahmedabad, Bangalore, Calcutta) — management research

## Admission to Ph.D
- Engineering Ph.D: GATE score (for IITs/NITs) + written test + interview
- Science Ph.D: CSIR NET/JRF, GATE, JEST, KVPY BS-MS → Ph.D, JAM + Ph.D entrance
- Management Ph.D: CAT/GMAT/XAT + written test + interview

## Funding: Fellowships and Scholarships
- **UGC JRF**: ₹37,000/month + HRA (Humanities, Social Sciences, Commerce)
- **CSIR JRF**: ₹37,000/month (Science & Engineering)
- **DST INSPIRE**: ₹80,000/year fellowship for top BS/MS graduates
- **HTRA at IITs**: ₹28,000–37,000/month (GATE-qualified M.Tech/PhD students)
- **Prime Minister Research Fellowship (PMRF)**: ₹70,000–80,000/month for BTech graduates joining PhD directly at IITs/IISc

## Career After Ph.D
- **Academia**: Assistant Professor at IITs/NITs/IISc/Universities — requires Ph.D + post-doc typically
- **National Research Labs**: ISRO, DRDO, BARC, CSIR labs, NML, NCL
- **Industry R&D**: Google Research, Microsoft Research, Intel Labs, IBM Research
- **Post-Doc**: US/Europe/Singapore for 2–4 years before faculty position`,
    degree: 'doctoral',
    durationYears: 5,
    academicLevel: 'doctoral',
    eligibility: 'M.Tech/M.Sc/M.A./MBA (relevant field). Some IITs offer direct Ph.D after B.Tech (PMRF).',
    admissionExams: ['GATE', 'CSIR NET/JRF', 'UGC NET/JRF', 'JEST', 'TIFR GS', 'JAM + Interview'],
    coreSubjects: ['Research Methodology', 'Subject Specialisation', 'Technical Writing', 'Seminar Presentations'],
    topInstitutionIds: ['inst-iisc', 'inst-iit-madras', 'inst-iit-delhi', 'inst-iit-bombay', 'inst-iiser-pune'],
    careers: ['Professor', 'Senior Research Scientist', 'R&D Lead', 'Principal Scientist', 'Government Scientist'],
    tags: ['phd', 'doctorate', 'research', 'gate', 'csir net', 'iit', 'iisc', 'iiser', 'academic', 'doctoral'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'prog-llm',
    slug: 'llm',
    name: 'Master of Laws',
    shortName: 'LLM',
    description: '1–2 year postgraduate law degree for specialisation in corporate law, international law, criminal law, IP, or human rights law.',
    guide: `## About LLM
Master of Laws (LLM) is a 1–2 year postgraduate law degree designed for practising lawyers, recent law graduates, and those seeking academic careers in law. LLM enables specialisation in a specific legal field and is valued for academia, judicial services, and senior corporate law roles.

## LLM Specialisations
- Corporate & Commercial Law (most popular for law firm careers)
- Constitutional & Administrative Law (Judiciary/UPSC pathway)
- International Law & Human Rights
- Intellectual Property Law (IP litigation, tech companies)
- Criminal Law & Criminology
- Environmental Law
- Arbitration & Dispute Resolution
- Taxation Law

## Top LLM Institutions in India
NLSIU Bangalore, NLU Delhi, NALSAR Hyderabad, WBNUJS Kolkata, NLU Jodhpur, Campus Law Centre (Delhi University), Faculty of Law BHU, ILS Pune.

## LLM Abroad
LL.M. at Harvard Law School, Yale, Oxford, Cambridge, LSE, NYU, Columbia — for those pursuing international law careers. LSAT or application-based. 1-year programme. Expensive but internationally valuable.

## Career After LLM
Senior associate/partner at law firms, Academic positions (LL.M. + Ph.D for professorship), Judicial career with enhanced qualification, Legal consultant/advisor for corporates and government, International organisations (UN, WTO, ICC), LLM Ph.D pathway.`,
    degree: 'masters',
    durationYears: 1,
    streamId: 'stream-law',
    academicLevel: 'postgraduate',
    eligibility: 'LLB or BA LLB (5-year) from a recognised institution. Minimum 45-50% marks.',
    admissionExams: ['CLAT PG', 'University-specific entrance tests', 'LSAT India'],
    coreSubjects: ['Constitutional Law', 'Jurisprudence', 'Research Methodology', 'LLM Specialisation Electives'],
    topInstitutionIds: ['inst-nlsiu-bangalore', 'inst-nlu-delhi', 'inst-nalsar-hyderabad'],
    careers: ['Senior Advocate', 'Law Professor', 'Legal Consultant', 'International Law Expert', 'In-House Counsel'],
    tags: ['llm', 'law', 'postgraduate', 'nlu', 'corporate law', 'international law', 'legal education'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'prog-barch',
    slug: 'barch',
    name: 'Bachelor of Architecture',
    shortName: 'B.Arch',
    description: '5-year professional undergraduate degree in architecture — India\'s gateway to sustainable design, urban planning, and the built environment.',
    guide: `## About B.Arch
Bachelor of Architecture (B.Arch) is a 5-year professional undergraduate degree (unlike the 4-year B.Tech) that qualifies graduates for registration as licensed architects in India. Architecture combines creative design with structural engineering, environmental sustainability, and urban planning.

## Admission Pathways
- **JEE Main Paper 2 (B.Arch)**: For NIT (NIT Trichy B.Arch, MNIT Jaipur, NIT Calicut) and other AICTE-approved institutes. Paper 2B (B.Arch) tests Mathematics, Aptitude, and Drawing.
- **NATA (National Aptitude Test in Architecture)**: Conducted by CoA (Council of Architecture) — required for most private and state architecture schools.
- **JEE Advanced AA**: For IIT B.Arch/B.Des at IIT Kharagpur and IIT Roorkee.

## Programme Coverage
**Year 1–2**: Design fundamentals, Drawing, History of Architecture, Building Construction, Material Science
**Year 3**: Structural Systems, Environmental Design, Interior Design, Urban Design basics
**Year 4**: Advanced Design Studio, Urban Planning, Building Services, Electives
**Year 5**: Professional Practice, Dissertation, Thesis Design Project

## Career Pathways
- Private architectural practice (own firm or partner)
- Real estate development firm (Godrej, DLF, Lodha)
- Urban planning and government development authorities (NDDA, BMRDA, town planning)
- Heritage conservation
- Interior design, landscape design
- M.Arch (postgraduate specialisation) or M.Plan (Urban & Regional Planning)
- UPSC (Architecture as optional subject for UPSC CSE)

## Council of Architecture Registration
After B.Arch + 2 years of practical training, graduates can register with the Council of Architecture (CoA) to practice as licensed architects under the Architects Act, 1972.`,
    degree: 'bachelors',
    durationYears: 5,
    academicLevel: 'undergraduate',
    eligibility: 'Class 12 with Mathematics. JEE Main Paper 2 / NATA score required.',
    admissionExams: ['JEE Main Paper 2 (B.Arch)', 'NATA', 'JEE Advanced'],
    coreSubjects: ['Architectural Design', 'Building Construction', 'Structural Systems', 'History of Architecture', 'Environmental Design'],
    topInstitutionIds: ['inst-iit-kharagpur', 'inst-nit-trichy'],
    careers: ['Licensed Architect', 'Urban Planner', 'Interior Designer', 'Heritage Conservation Specialist', 'Real Estate Developer'],
    tags: ['barch', 'architecture', 'nata', 'jee main paper 2', 'design', 'urban planning', '5 year'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'prog-mca',
    slug: 'mca',
    name: 'Master of Computer Applications',
    shortName: 'MCA',
    description: '2-year (previously 3-year) postgraduate computing degree — NIMCET for NIT admissions.',
    guide: `## About MCA
Master of Computer Applications (MCA) is a 2-year postgraduate degree in computer science and software development (reduced from 3 to 2 years by AICTE in 2021). It is designed for graduates with a computing or mathematics background who want to build advanced software development expertise.

## NIMCET: NIT MCA Entrance
NIMCET (National Institute of Technology MCA Common Entrance Test) is the entrance exam for MCA at 11 NITs: NIT Trichy, NIT Warangal, NIT Rourkela, NIT Surathkal, MNIT Jaipur, NIT Allahabad, NIT Kurukshetra, etc. NIT MCA is considered the most prestigious MCA programme in India.

## Programme Coverage
Data Structures & Algorithms, Operating Systems, Database Management Systems (SQL/NoSQL), Computer Networks, Software Engineering, Web Development, Mobile App Development, Machine Learning, Cloud Computing, Big Data.

## MCA vs M.Tech CS
- MCA: Application-focused, 2 years, open to B.Sc/BCA graduates, NIMCET entry
- M.Tech CS: Research-focused, requires B.Tech/B.E., GATE entry — more prestigious

## Career After MCA
Software development (Java, Python, C++), systems analysis, database administration, project management. MCA from NIT is highly valued — packages comparable to B.Tech from average private engineering colleges. After NIT MCA: direct placement at TCS, Wipro, Infosys, Cognizant, Accenture, HCL, Amazon.`,
    degree: 'masters',
    durationYears: 2,
    academicLevel: 'postgraduate',
    eligibility: 'BCA / B.Sc CS / B.Sc IT / B.Sc Mathematics with basic CS exposure. Some colleges require Mathematics in Class 12.',
    admissionExams: ['NIMCET', 'University-specific entrance tests', 'IPU CET'],
    coreSubjects: ['Algorithms', 'Database Systems', 'Software Engineering', 'Computer Networks', 'Web Technology'],
    topInstitutionIds: ['inst-nit-trichy', 'inst-nit-warangal'],
    careers: ['Software Developer', 'Systems Analyst', 'Database Administrator', 'Web Developer', 'IT Project Manager'],
    tags: ['mca', 'master of computer applications', 'nimcet', 'nit mca', 'postgraduate', 'software', 'computing'],
    updatedAt: '2025-01-01',
  },
];
