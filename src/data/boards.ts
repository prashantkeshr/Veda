import type { Board } from '../models';

export const boardsData: Board[] = [
  {
    id: 'board-cbse',
    slug: 'cbse',
    name: 'Central Board of Secondary Education',
    shortName: 'CBSE',
    description: 'India\'s largest and most widely recognised school board, affiliated with over 25,000 schools across India and abroad.',
    guide: `## About CBSE
The Central Board of Secondary Education (CBSE) is India's most widely recognised national school board, functioning under the Government of India's Ministry of Education. With over 25,000 affiliated schools across India and more than 25 countries, CBSE sets the academic benchmark for millions of students every year.

## Curriculum & Syllabus
CBSE follows the National Curriculum Framework (NCF) and designs its curriculum to build conceptual clarity, scientific temperament, and real-world application skills. The board covers Classes 1 through 12. The curriculum is reviewed periodically in collaboration with NCERT (National Council of Educational Research and Training), which publishes the official textbooks used across CBSE schools.

## Classes and Examinations
CBSE conducts two major board examinations:
- **Class 10 (Secondary School Examination)**: Held annually in February–March
- **Class 12 (Senior School Certificate Examination)**: Held annually in February–March

Both exams follow a pattern that includes 80% marks from the written board exam and 20% from internal assessment (practical/projects). CBSE introduced Competency Based Questions from 2021 onwards, increasing the share of application-level MCQs and case-based questions.

## Streams After Class 10
After Class 10, CBSE students can choose from:
- **Science** (with Physics, Chemistry, Mathematics / Biology)
- **Commerce** (with Accountancy, Business Studies, Economics)
- **Arts/Humanities** (with History, Political Science, Geography, etc.)

## Why CBSE Matters for Competitive Exams
CBSE syllabus directly aligns with major national competitive examinations:
- **JEE Main & JEE Advanced** (Engineering entrance): Class 11–12 Physics, Chemistry, Mathematics
- **NEET UG** (Medical entrance): Class 11–12 Physics, Chemistry, Biology
- **NDA, CDS, SSC**: General studies covered in Class 10–12 curriculum
- **UPSC Civil Services**: General studies and optional subjects overlap significantly

## How to Use This Page
Browse CBSE subjects, sample question papers, previous year board papers, syllabus documents, and topic-wise study resources. Use the search to find specific topics relevant to your CBSE preparation.`,
    type: 'central',
    established: 1929,
    headquarters: 'New Delhi',
    classes: ['class-1','class-2','class-3','class-4','class-5','class-6','class-7','class-8','class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'science-pcmb', 'commerce', 'arts'],
    website: 'https://www.cbse.gov.in',
    tags: ['cbse', 'central board', 'ncert', 'class 10', 'class 12', 'jee', 'neet', 'india'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-icse',
    slug: 'icse',
    name: 'Indian Certificate of Secondary Education',
    shortName: 'ICSE / ISC',
    description: 'A rigorous and comprehensive school curriculum offered by CISCE, known for its detailed syllabus and focus on English proficiency.',
    guide: `## About ICSE/ISC
The Indian Certificate of Secondary Education (ICSE) and Indian School Certificate (ISC) are examinations conducted by the Council for the Indian School Certificate Examinations (CISCE), a private board established in 1958. ICSE is for Class 10 and ISC is for Class 12.

## CISCE vs CBSE
CISCE boards are often considered more comprehensive than CBSE in terms of breadth. The ICSE curriculum includes a wide range of subjects with a strong emphasis on English language proficiency and practical learning. However, CBSE is better aligned with competitive entrance exam syllabi.

## ICSE (Class 10) Examination
The ICSE exam covers:
- Compulsory subjects: English Language, English Literature, History & Civics, Geography, Mathematics, Science (Physics, Chemistry, Biology)
- Optional subjects: Computer Applications, Commercial Studies, Economics, Art, etc.

## ISC (Class 12) Examination
ISC offers three main streams:
- **Science**: Physics, Chemistry, Mathematics/Biology
- **Commerce**: Accounts, Commerce, Economics
- **Arts/Humanities**: History, Political Science, Sociology, etc.

## Strengths of ICSE/ISC
- Deep English language training — ideal for students targeting international education or literature
- Comprehensive internal assessment component
- Broad elective choices allow personalised academic focus
- Widely accepted by universities across India and internationally

## Competitive Exam Relevance
ISC Science stream students can appear for JEE and NEET without additional coaching for syllabus gaps, though CBSE has a slight edge in direct syllabus overlap. ISC provides excellent foundation for UPSC optional subjects like Literature, History, and Political Science.`,
    type: 'central',
    established: 1958,
    headquarters: 'New Delhi',
    classes: ['class-1','class-2','class-3','class-4','class-5','class-6','class-7','class-8','class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'commerce', 'arts'],
    website: 'https://www.cisce.org',
    tags: ['icse', 'isc', 'cisce', 'class 10', 'class 12', 'english medium', 'india'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-nios',
    slug: 'nios',
    name: 'National Institute of Open Schooling',
    shortName: 'NIOS',
    description: 'India\'s largest open schooling system, offering flexible secondary and senior secondary education for learners who cannot access mainstream schools.',
    guide: `## About NIOS
The National Institute of Open Schooling (NIOS) is a national open school in India under the Ministry of Education. It is the world's largest open schooling system, offering Secondary (Class 10) and Senior Secondary (Class 12) certification through open and distance learning.

## Who Should Choose NIOS
NIOS is ideal for:
- Students who couldn't complete regular schooling due to personal, financial, or health reasons
- Working individuals seeking formal secondary/senior secondary qualifications
- Students wanting to improve their board exam scores alongside regular schooling
- Learners in remote areas with limited access to conventional schools
- Students appearing for a specific subject to bridge gaps

## Examination Flexibility
NIOS allows students to:
- Appear for On Demand Examination (ODE) at any time of the year
- Take exams in multiple sittings (Credit Accumulation)
- Carry forward subject credits for up to 9 years
- Choose from a wide range of subjects and vocational courses

## Streams & Programmes
NIOS offers Secondary (equivalent to Class 10) and Senior Secondary (equivalent to Class 12) certificates recognised by COBSE (Council of Boards of School Education in India) and accepted by all universities in India.

## Recognition
NIOS certificates are recognised by:
- All Central and State universities in India
- UPSC and other government recruitment bodies
- Professional entrance examination boards (JEE, NEET, etc.)`,
    type: 'open-school',
    established: 1989,
    headquarters: 'Noida, Uttar Pradesh',
    classes: ['class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'commerce', 'arts'],
    website: 'https://www.nios.ac.in',
    tags: ['nios', 'open schooling', 'distance education', 'class 10', 'class 12', 'india'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-ib',
    slug: 'ib',
    name: 'International Baccalaureate',
    shortName: 'IB',
    description: 'A globally recognised rigorous educational framework offering PYP, MYP, DP, and CP programmes for students from 3 to 19 years.',
    guide: `## About the International Baccalaureate
The International Baccalaureate (IB) is a non-profit educational foundation founded in 1968 in Geneva, Switzerland. It offers four educational programmes recognised by universities worldwide, known for developing curious, knowledgeable, and caring young people.

## IB Programmes
1. **Primary Years Programme (PYP)**: Ages 3–12 — inquiry-based learning for young children
2. **Middle Years Programme (MYP)**: Ages 11–16 — interdisciplinary understanding and application
3. **Diploma Programme (DP)**: Ages 16–19 — equivalent to Class 11–12, university preparation
4. **Career-related Programme (CP)**: Ages 16–19 — academic study combined with career-focused learning

## IB Diploma Programme (IBDP) — Most Relevant for India
The IBDP is the most widely known IB programme, taken by students aged 16–19 and widely accepted for university admissions in India and internationally. Students take six subject groups and complete:
- **Theory of Knowledge (TOK)**: Critical thinking
- **Extended Essay (EE)**: Independent 4,000-word research essay
- **Creativity, Activity, Service (CAS)**: Extracurricular component

## IB in India
Over 200 IB World Schools operate in India, primarily in metro cities. IB Diploma holders are eligible for direct admission to Indian universities under UGC guidelines.

## IB vs CBSE/ISC
IB is significantly more expensive and available mainly in private international schools. It emphasises independent thinking, research, and international mindedness over rote learning. Students planning for abroad university admissions often prefer IB.`,
    type: 'international',
    established: 1968,
    headquarters: 'Geneva, Switzerland',
    classes: ['class-1','class-2','class-3','class-4','class-5','class-6','class-7','class-8','class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'commerce', 'arts'],
    website: 'https://www.ibo.org',
    tags: ['ib', 'international baccalaureate', 'ibdp', 'international school', 'global'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-cambridge',
    slug: 'cambridge-caie',
    name: 'Cambridge Assessment International Education',
    shortName: 'CAIE / IGCSE',
    description: 'UK-based international board offering IGCSE (Class 10 equivalent) and A-Levels (Class 12 equivalent), globally respected for rigour and international recognition.',
    guide: `## About Cambridge CAIE
Cambridge Assessment International Education (CAIE), part of the University of Cambridge, is one of the world's largest providers of international education programmes. It offers qualifications from early years to pre-university level, recognised by universities and employers worldwide.

## Key Qualifications
- **IGCSE (International General Certificate of Secondary Education)**: Class 9–10 equivalent, over 70 subjects available
- **Cambridge O-Level**: Alternative to IGCSE, offered in select regions
- **Cambridge AS & A Level**: Class 11–12 equivalent, highly respected university entry qualification
- **Cambridge International AS**: Half of A-Level, taken over one year

## IGCSE — What It Covers
IGCSE is taken by students aged 14–16 and is equivalent to CBSE Class 10. Students typically take 5–14 subjects including core subjects and electives. Known for its rigorous practical assessment and international curriculum.

## A-Levels — University Preparation
Cambridge A-Levels are taken at age 16–18 and are equivalent to Indian Class 12 Senior Secondary. They are among the most respected pre-university qualifications globally, accepted by IITs, NITs, and top Indian universities through DASA (Direct Admission of Students Abroad) and other mechanisms.

## Cambridge in India
CAIE has over 300 registered schools in India. Cambridge qualifications are recognised by the Association of Indian Universities (AIU) and accepted for admission to Indian colleges and universities.`,
    type: 'international',
    established: 1858,
    headquarters: 'Cambridge, United Kingdom',
    classes: ['class-6','class-7','class-8','class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'commerce', 'arts'],
    website: 'https://www.cambridgeinternational.org',
    tags: ['cambridge', 'caie', 'igcse', 'a-level', 'international school', 'global'],
    updatedAt: '2025-01-01',
  },
  // ── State Boards ──────────────────────────────────────────────────────
  {
    id: 'board-ap',
    slug: 'ap-bseap',
    name: 'Board of Secondary Education, Andhra Pradesh',
    shortName: 'AP BSE / BIEAP',
    description: 'Andhra Pradesh state board conducting SSC (Class 10) and Intermediate (Class 11–12) examinations for lakhs of students across AP.',
    guide: `## About AP BSE and BIEAP
Andhra Pradesh has two key regulatory bodies for school education: the Board of Secondary Education, Andhra Pradesh (BSEAP) for Class 10 (SSC), and the Board of Intermediate Education, Andhra Pradesh (BIEAP) for Classes 11–12 (Intermediate). Both operate under the AP government's School Education Department.

## SSC (Class 10) Examination
The SSC exam is one of the largest state board exams in Andhra Pradesh, with lakhs of students appearing each year. Key subjects include First Language (Telugu/Urdu/Hindi), Second Language, English, Mathematics, Science, and Social Studies.

## Intermediate (Classes 11–12)
Intermediate education in AP is divided into:
- **MPC** (Mathematics, Physics, Chemistry) — for Engineering aspirants
- **BiPC** (Biology, Physics, Chemistry) — for Medical aspirants
- **CEC** (Commerce, Economics, Civics) — for Commerce stream
- **HEC** (History, Economics, Civics) — for Arts stream

## Relevance for Competitive Exams
AP Intermediate MPC and BiPC syllabi are closely aligned with JEE Main and NEET patterns. AP produces one of the highest numbers of JEE and NEET qualifiers among Indian states.`,
    type: 'state',
    state: 'Andhra Pradesh',
    stateCode: 'AP',
    established: 1953,
    headquarters: 'Amaravati, Andhra Pradesh',
    classes: ['class-6','class-7','class-8','class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'commerce', 'arts'],
    website: 'https://bse.ap.gov.in',
    tags: ['andhra pradesh', 'ap board', 'bseap', 'bieap', 'ssc', 'intermediate', 'mpc', 'bipc'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-bihar',
    slug: 'bihar-bseb',
    name: 'Bihar School Examination Board',
    shortName: 'BSEB',
    description: 'One of India\'s largest state examination boards, conducting Matriculation (Class 10) and Intermediate (Class 12) exams for millions of Bihar students.',
    guide: `## About BSEB
The Bihar School Examination Board (BSEB), established in 1952 under the Bihar School Examination Act, is one of India's largest state examination bodies. It conducts Matriculation (Class 10) and Intermediate (Class 12) examinations for over 1.5 million students annually across Bihar.

## Matriculation (Class 10)
The Matric exam covers Hindi, English, Mathematics, Science, Social Science, and optional third language. The board examination is held in February each year.

## Intermediate (Class 12)
Intermediate examinations cover three main streams: Science (PCM or PCB), Commerce, and Arts. Science stream students frequently go on to appear for JEE and NEET.

## Medium of Instruction
Bihar Board exams are primarily conducted in Hindi medium, with English as a compulsory subject. This makes it accessible to the majority of students in rural and semi-urban Bihar.

## Significance
Bihar produces a significant number of UPSC Civil Services toppers. BSEB Matriculation and Intermediate results are recognised by all Indian universities and government employment boards.`,
    type: 'state',
    state: 'Bihar',
    stateCode: 'BR',
    established: 1952,
    headquarters: 'Patna, Bihar',
    classes: ['class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'commerce', 'arts'],
    website: 'https://biharboardonline.gov.in',
    tags: ['bihar board', 'bseb', 'matriculation', 'intermediate', 'patna'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-gujarat',
    slug: 'gujarat-gseb',
    name: 'Gujarat Secondary and Higher Secondary Education Board',
    shortName: 'GSEB',
    description: 'Gujarat state board conducting SSC (Class 10) and HSC (Class 12) examinations in Gujarati, Hindi, and English medium.',
    guide: `## About GSEB
The Gujarat Secondary and Higher Secondary Education Board (GSEB) is the state board of education for Gujarat, established in 1960. It conducts Secondary School Certificate (SSC) for Class 10 and Higher Secondary Certificate (HSC) for Class 12 examinations across Gujarat.

## Medium Options
GSEB offers examinations in three mediums:
- Gujarati medium (most common)
- Hindi medium
- English medium

## HSC Streams
- **Science** (General & Medical Group): PCM or PCB
- **Commerce**: Accounts, Economics, Organisation of Commerce
- **Arts**: History, Sociology, Psychology, etc.

## GSEB & Competitive Exams
Gujarat Board Science stream (HSC) is well-aligned with JEE and NEET preparation. The state government runs separate scholarship and entrance schemes like GUJCET (Gujarat Common Entrance Test) for engineering admissions to state-level colleges.`,
    type: 'state',
    state: 'Gujarat',
    stateCode: 'GJ',
    established: 1960,
    headquarters: 'Gandhinagar, Gujarat',
    classes: ['class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'commerce', 'arts'],
    website: 'https://gseb.org',
    tags: ['gujarat board', 'gseb', 'ssc', 'hsc', 'gujcet', 'gandhinagar'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-haryana',
    slug: 'haryana-hbse',
    name: 'Board of School Education, Haryana',
    shortName: 'HBSE',
    description: 'Haryana state board conducting Secondary (Class 10) and Senior Secondary (Class 12) examinations from Bhiwani.',
    guide: `## About HBSE
The Board of School Education Haryana (HBSE), headquartered in Bhiwani, is the statutory body for secondary and senior secondary education in Haryana. It conducts Class 10 and Class 12 board examinations for students across Haryana.

## Examination Structure
HBSE conducts board exams in March each year. Regular, private, and open school candidates can all appear. The board follows the NCERT-based curriculum for most subjects, making it moderately compatible with JEE and NEET preparation.

## Relevance
Haryana Board's curriculum is one of the more competitive state board syllabi in North India, and the state has produced significant numbers of IIT and medical college qualifiers. HBSE 12th certificates are recognised nationally.`,
    type: 'state',
    state: 'Haryana',
    stateCode: 'HR',
    established: 1969,
    headquarters: 'Bhiwani, Haryana',
    classes: ['class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'commerce', 'arts'],
    website: 'https://bseh.org.in',
    tags: ['haryana board', 'hbse', 'bhiwani', 'class 10', 'class 12'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-karnataka',
    slug: 'karnataka-kseab',
    name: 'Karnataka School Examination and Assessment Board',
    shortName: 'KSEAB / PUC',
    description: 'Karnataka state board conducting SSLC (Class 10) and PUC (Class 11–12) examinations across Karnataka.',
    guide: `## About KSEAB
The Karnataka School Examination and Assessment Board (KSEAB) conducts the Secondary School Leaving Certificate (SSLC) for Class 10 and oversees pre-university education in Karnataka. The Pre-University Course (PUC) for Classes 11–12 is regulated by the Department of Pre-University Education (DPUE), Karnataka.

## SSLC (Class 10)
Karnataka SSLC covers Kannada (First Language), English, Mathematics, Science, and Social Science. It is one of the major state examinations in South India with over 8 lakh students appearing annually.

## Pre-University Course (PUC) — Classes 11–12
PUC 1 and PUC 2 are equivalent to Class 11 and Class 12. The three main streams are:
- **Science (PCMB / PCM / PCB)**
- **Commerce (CEBA / SEBA)**
- **Arts (Humanities)**

## Competitive Exam Alignment
Karnataka's PUC Science syllabus is closely aligned with JEE and NEET, and the state conducts KCET (Karnataka Common Entrance Test) for admissions to state engineering and medical colleges.`,
    type: 'state',
    state: 'Karnataka',
    stateCode: 'KA',
    established: 1966,
    headquarters: 'Bengaluru, Karnataka',
    classes: ['class-8','class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'science-pcmb', 'commerce', 'arts'],
    website: 'https://kseab.karnataka.gov.in',
    tags: ['karnataka board', 'kseab', 'sslc', 'puc', 'kcet', 'bengaluru'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-kerala',
    slug: 'kerala-dhse',
    name: 'Directorate of Higher Secondary Education, Kerala',
    shortName: 'DHSE Kerala',
    description: 'Kerala state board for higher secondary education, known for high literacy and exam results, conducting SSLC (Class 10) and HSE (Class 12) exams.',
    guide: `## About DHSE Kerala
Kerala has two main educational bodies: the Board of Public Examinations (BPEKERALA) for Class 10 SSLC, and the Directorate of Higher Secondary Education (DHSE) for Class 11–12 (HSE). Kerala is known for having one of the highest literacy rates in India and consistently strong board examination results.

## SSLC (Class 10)
Kerala SSLC covers Malayalam (or other regional languages), English, Mathematics, Science (Physics, Chemistry, Biology), and Social Science. The grading system uses a 9-point grading scale.

## HSE (Class 12)
Kerala Higher Secondary Education offers streams including Science (PCM, PCB, PCMB), Commerce, and Humanities. Kerala also has vocational streams for technical education.

## Kerala's Educational Culture
Kerala schools emphasise depth of understanding and strong foundations. The state consistently ranks among the top in national literacy, school enrollment, and learning outcome assessments. Kerala Board students perform strongly in competitive exams, particularly in NEET (medical entrance).`,
    type: 'state',
    state: 'Kerala',
    stateCode: 'KL',
    established: 1990,
    headquarters: 'Thiruvananthapuram, Kerala',
    classes: ['class-8','class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'science-pcmb', 'commerce', 'arts'],
    website: 'https://dhsekerala.gov.in',
    tags: ['kerala board', 'dhse', 'sslc', 'hse', 'thiruvananthapuram', 'south india'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-mp',
    slug: 'madhya-pradesh-mpbse',
    name: 'Madhya Pradesh Board of Secondary Education',
    shortName: 'MPBSE',
    description: 'The school examination board of Madhya Pradesh, conducting Class 10 (High School) and Class 12 (Higher Secondary) board examinations.',
    guide: `## About MPBSE
The Madhya Pradesh Board of Secondary Education (MPBSE), established in 1965, is the statutory body governing school education examinations in Madhya Pradesh. It conducts the High School Examination (Class 10) and Higher Secondary Examination (Class 12) for approximately 20 lakh students annually.

## High School (Class 10) Examination
MP Board High School covers Hindi, English, Mathematics, Science, and Social Science. A special provision exists for Sanskrit as a third language.

## Higher Secondary (Class 12) Examination
Class 12 streams include Mathematics, Biology, Commerce, and Arts. The syllabus is largely Hindi-medium, with English-medium options available in select schools.

## MP Board and Competitive Exams
MPBSE's curriculum, while not as tightly aligned as CBSE for JEE/NEET preparation, provides sufficient foundation. Students often take additional coaching to bridge the gap. The state conducts MPPET (Madhya Pradesh Pre Engineering Test) for engineering college admissions.`,
    type: 'state',
    state: 'Madhya Pradesh',
    stateCode: 'MP',
    established: 1965,
    headquarters: 'Bhopal, Madhya Pradesh',
    classes: ['class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'commerce', 'arts'],
    website: 'https://mpbse.nic.in',
    tags: ['mp board', 'mpbse', 'bhopal', 'madhya pradesh', 'high school', 'higher secondary'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-maharashtra',
    slug: 'maharashtra-msbshse',
    name: 'Maharashtra State Board of Secondary and Higher Secondary Education',
    shortName: 'Maharashtra Board / SSC & HSC',
    description: 'One of India\'s largest state boards, conducting SSC (Class 10) and HSC (Class 12) examinations for over 16 lakh students each year across Maharashtra.',
    guide: `## About Maharashtra State Board
The Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE), established in 1965, is headquartered in Pune and conducts Secondary School Certificate (SSC, Class 10) and Higher Secondary Certificate (HSC, Class 12) examinations — among the largest state board examinations in India.

## SSC (Class 10) Examination
Maharashtra SSC covers English, Second Language (Marathi/Hindi/Urdu/etc.), Mathematics, Science & Technology, History & Political Science, and Geography & Economics.

## HSC (Class 12) Examination
HSC streams in Maharashtra:
- **Science**: Physics, Chemistry, Mathematics/Biology
- **Commerce**: Bookkeeping & Accountancy, Economics, Organisation of Commerce
- **Arts**: History, Political Science, Sociology, Geography

## Mumbai and Pune Divisions
The board operates through 9 divisional boards covering Mumbai, Pune, Nashik, Aurangabad, Amravati, Kolhapur, Latur, Nagpur, and Konkan. Maharashtra consistently ranks among the top states in HSC results.

## MH-CET Alignment
HSC Science students can appear for MH-CET (Maharashtra Common Entrance Test) for engineering and NEET for medical admissions. Maharashtra's HSC is well recognised nationally and internationally.`,
    type: 'state',
    state: 'Maharashtra',
    stateCode: 'MH',
    established: 1965,
    headquarters: 'Pune, Maharashtra',
    classes: ['class-8','class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'commerce', 'arts'],
    website: 'https://mahahsscboard.in',
    tags: ['maharashtra board', 'msbshse', 'ssc', 'hsc', 'pune', 'mumbai', 'mh-cet'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-punjab',
    slug: 'punjab-pseb',
    name: 'Punjab School Education Board',
    shortName: 'PSEB',
    description: 'Punjab state board conducting Secondary (Class 10) and Senior Secondary (Class 12) examinations across Punjab.',
    guide: `## About PSEB
The Punjab School Education Board (PSEB), headquartered in Mohali (SAS Nagar), conducts Class 10 Secondary and Class 12 Senior Secondary examinations for students across Punjab. Established in 1969, PSEB governs thousands of government and private schools in the state.

## Curriculum and Language
PSEB follows a Punjabi-medium curriculum primarily, with English and Hindi medium options available. Punjab is the first language and compulsory subject for all students, alongside English and other core subjects.

## Examination Structure
- Class 10: Punjabi, English, Mathematics, Science, Social Science
- Class 12: Commerce, Science, and Arts streams available

## Relevance and Recognition
PSEB certificates are recognised by all Indian universities. Science stream HSC students can appear for JEE, NEET, and Punjab state-level entrance exams including LEET (Lateral Entry Entrance Test) for polytechnic diploma holders.`,
    type: 'state',
    state: 'Punjab',
    stateCode: 'PB',
    established: 1969,
    headquarters: 'Mohali (SAS Nagar), Punjab',
    classes: ['class-3','class-4','class-5','class-6','class-7','class-8','class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'commerce', 'arts'],
    website: 'https://pseb.ac.in',
    tags: ['punjab board', 'pseb', 'mohali', 'chandigarh', 'punjabi medium'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-rajasthan',
    slug: 'rajasthan-rbse',
    name: 'Rajasthan Board of Secondary Education',
    shortName: 'RBSE',
    description: 'Rajasthan state board conducting Secondary (Class 10) and Senior Secondary (Class 12) examinations for millions of students across Rajasthan.',
    guide: `## About RBSE
The Rajasthan Board of Secondary Education (RBSE), headquartered in Ajmer, was established in 1957. It is one of India's oldest and largest state boards, conducting Secondary (Class 10) and Senior Secondary (Class 12) examinations for approximately 25 lakh students each year.

## Examination Pattern
RBSE conducts board exams in March. Secondary covers Hindi, English, Science, Mathematics, and Social Science. Senior Secondary offers Science, Commerce, and Arts streams. The medium is primarily Hindi, with English medium available in select schools.

## Kota: The Coaching Hub
Rajasthan, particularly Kota, is renowned as India's coaching capital. Thousands of RBSE students attend coaching institutes in Kota for JEE and NEET preparation, supplementing their board education with targeted entrance exam coaching.

## Higher Education Gateway
RBSE 12th is the qualification gateway to state-level admissions through BTER (Board of Technical Education Rajasthan) for polytechnic and RPET (Rajasthan Pre Engineering Test) for engineering colleges.`,
    type: 'state',
    state: 'Rajasthan',
    stateCode: 'RJ',
    established: 1957,
    headquarters: 'Ajmer, Rajasthan',
    classes: ['class-8','class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'commerce', 'arts'],
    website: 'https://rajeduboard.rajasthan.gov.in',
    tags: ['rajasthan board', 'rbse', 'ajmer', 'kota', 'jee', 'neet'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-tamilnadu',
    slug: 'tamilnadu-tnbse',
    name: 'Tamil Nadu Board of School Education',
    shortName: 'TNBSE',
    description: 'Tamil Nadu state board conducting SSLC (Class 10) and HSC (Class 12) examinations for millions of students across Tamil Nadu.',
    guide: `## About TNBSE
The Tamil Nadu Board of Secondary Education (TNBSE), under the School Education Department of the Tamil Nadu government, conducts Secondary School Leaving Certificate (SSLC) for Class 10 and Higher Secondary Certificate (HSC) for Class 12. Tamil Nadu consistently achieves high pass rates and produces top national performers.

## SSLC (Class 10) Examination
TN SSLC covers Tamil (First Language), English, Mathematics, Science, and Social Science. The board follows a grading system and has steadily evolved its examination pattern to emphasise application and analytical skills.

## HSC (Class 12) Examination
Tamil Nadu HSC streams:
- **Science**: PCM, PCB, PCBotany, PCZoology
- **Commerce**: Accounts, Economics, Commerce
- **Arts/Humanities**: Multiple subject combinations

## TN & Competitive Exams
Tamil Nadu conducts TNEA (Tamil Nadu Engineering Admissions) based on Class 12 marks for engineering colleges, and NEET for medical admissions. The state has a long tradition of excellence in engineering and medicine, with many government-run coaching centers for JEE/NEET.`,
    type: 'state',
    state: 'Tamil Nadu',
    stateCode: 'TN',
    established: 1910,
    headquarters: 'Chennai, Tamil Nadu',
    classes: ['class-6','class-7','class-8','class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'science-pcmb', 'commerce', 'arts'],
    website: 'https://dge.tn.gov.in',
    tags: ['tamil nadu board', 'tnbse', 'sslc', 'hsc', 'chennai', 'tnea'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-telangana',
    slug: 'telangana-bie',
    name: 'Board of Intermediate Education, Telangana',
    shortName: 'TSBIE / BIE Telangana',
    description: 'Telangana state board for Intermediate education (Classes 11–12), conducting IPE (Intermediate Public Examination) with strong JEE/NEET alignment.',
    guide: `## About TSBIE
The Telangana State Board of Intermediate Education (TSBIE), established after Telangana's formation in 2014 from Andhra Pradesh, conducts the Intermediate Public Examinations (IPE) for Classes 11–12. The board operates the TS Junior Inter (Class 11) and TS Senior Inter (Class 12) examinations.

## Intermediate Streams
- **MPC** (Mathematics, Physics, Chemistry): For engineering aspirants
- **BiPC** (Biology, Physics, Chemistry): For medical aspirants
- **MECS** (Mathematics, Economics, Commerce, Science): For Commerce stream
- **HEC** (History, Economics, Civics): For Arts stream
- **CEC** (Civics, Economics, Commerce)

## IPE Examination Pattern
Both years (Inter First Year and Inter Second Year) have theory and practical exams. The final board result combines both years for eligibility for central/state entrance exams.

## Hyderabad: Coaching Ecosystem
Hyderabad, particularly areas like Narayana, Sri Chaitanya, and FIITJEE clusters, has one of India's most concentrated JEE/NEET coaching ecosystems. Telangana's Intermediate MPC/BiPC students are among the most competitive for IIT JEE and NEET admissions nationally.`,
    type: 'state',
    state: 'Telangana',
    stateCode: 'TS',
    established: 2014,
    headquarters: 'Hyderabad, Telangana',
    classes: ['class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'commerce', 'arts'],
    website: 'https://tsbie.cgg.gov.in',
    tags: ['telangana board', 'tsbie', 'intermediate', 'mpc', 'bipc', 'hyderabad', 'jee', 'neet'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-up',
    slug: 'up-upmsp',
    name: 'Uttar Pradesh Madhyamik Shiksha Parishad',
    shortName: 'UPMSP / UP Board',
    description: 'World\'s largest school examination board by enrollment, conducting High School (Class 10) and Intermediate (Class 12) exams for over 55 lakh students in UP.',
    guide: `## About UPMSP
The Uttar Pradesh Madhyamik Shiksha Parishad (UPMSP), commonly known as UP Board, is the world's largest school examination board by student enrollment. It conducts the High School (Class 10) and Intermediate (Class 12) examinations for approximately 55 lakh students annually across Uttar Pradesh.

## High School (Class 10) Examination
UP Board Class 10 covers Hindi, English, Mathematics, Science, Social Science, and Sanskrit/computer/other languages. The exam is primarily Hindi-medium.

## Intermediate (Class 12) Examination
Class 12 streams include Science (PCM, PCB), Commerce, and Arts. The UP Board curriculum was significantly updated in 2018–2023 to align with NCERT standards, improving its compatibility with JEE and NEET preparation.

## Allahabad: UP Board Headquarters
UPMSP is headquartered in Prayagraj (Allahabad), Uttar Pradesh. The state produces a massive number of competitive exam aspirants every year, and Lucknow, Allahabad, and Varanasi are key centres for coaching.

## Recognition
UP Board certificates are accepted by all Indian universities and government services recruitment bodies. UPMSP has made digital improvements including online result portals and answer script checking reforms.`,
    type: 'state',
    state: 'Uttar Pradesh',
    stateCode: 'UP',
    established: 1921,
    headquarters: 'Prayagraj (Allahabad), Uttar Pradesh',
    classes: ['class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'commerce', 'arts'],
    website: 'https://upmsp.edu.in',
    tags: ['up board', 'upmsp', 'uttar pradesh', 'high school', 'intermediate', 'prayagraj'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-wb',
    slug: 'west-bengal-wbbse',
    name: 'West Bengal Board of Secondary Education',
    shortName: 'WBBSE / WBCHSE',
    description: 'West Bengal state boards conducting Madhyamik (Class 10) and Higher Secondary (Class 12) examinations for millions of Bengal students.',
    guide: `## About WBBSE and WBCHSE
West Bengal has two key boards: the West Bengal Board of Secondary Education (WBBSE) for Class 10 (Madhyamik) and the West Bengal Council of Higher Secondary Education (WBCHSE) for Class 12 (Higher Secondary, HS). Both are under the School Education Department of the West Bengal government.

## Madhyamik (Class 10) Examination
Madhyamik covers First Language (Bengali/Nepali/Hindi/Urdu/Santhali), Second Language (English), Mathematics, Physical Science, Life Science, and History & Geography.

## Higher Secondary (Class 12) Examination
HS streams include Science, Commerce, and Arts. The Science stream covers Physics, Chemistry, Mathematics/Biology, Computer Science, Nutrition, etc.

## Kolkata: Academic Excellence
West Bengal, particularly Kolkata, has a long tradition of academic and intellectual excellence. HS Science students perform well in JEE, and the state consistently produces UPSC toppers. Presidency University, Jadavpur University, and Calcutta University are premier state institutions.

## Regional Language Strength
WBBSE exams are available in multiple languages including Bengali, Hindi, Urdu, Nepali, Santhali, Odia, and Tamil, making it linguistically inclusive.`,
    type: 'state',
    state: 'West Bengal',
    stateCode: 'WB',
    established: 1951,
    headquarters: 'Kolkata, West Bengal',
    classes: ['class-5','class-6','class-7','class-8','class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'commerce', 'arts'],
    website: 'https://wbbse.wb.gov.in',
    tags: ['west bengal board', 'wbbse', 'wbchse', 'madhyamik', 'higher secondary', 'kolkata'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-odisha',
    slug: 'odisha-bseodisha',
    name: 'Board of Secondary Education, Odisha',
    shortName: 'BSE Odisha / CHSE',
    description: 'Odisha state board conducting Matriculation (Class 10) via BSE and Higher Secondary (Class 12) via CHSE Odisha.',
    guide: `## About BSE Odisha and CHSE
Odisha has two boards: the Board of Secondary Education Odisha (BSE Odisha) for Class 10 (Matriculation) and the Council of Higher Secondary Education Odisha (CHSE) for Class 12. Both operate under the School & Mass Education Department of the Odisha government.

## Matriculation (Class 10)
BSE Odisha Matric covers Odia, English, Mathematics, Science, and Social Science. The examination is conducted annually in March.

## Higher Secondary (Class 12)
CHSE Odisha offers Science, Commerce, and Arts streams for Class 11 and Class 12.

## Odisha's Engineering Tradition
Odisha has NIT Rourkela, IIT Bhubaneswar, and IISER Berhampur within the state, and the state sends a significant number of students to IITs and NITs through JEE. OJEE (Odisha Joint Entrance Examination) governs admissions to state engineering colleges.`,
    type: 'state',
    state: 'Odisha',
    stateCode: 'OD',
    established: 1956,
    headquarters: 'Cuttack, Odisha',
    classes: ['class-6','class-7','class-8','class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'commerce', 'arts'],
    website: 'https://bseodisha.ac.in',
    tags: ['odisha board', 'bse odisha', 'chse', 'matriculation', 'cuttack'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-himachal',
    slug: 'himachal-hpbose',
    name: 'Himachal Pradesh Board of School Education',
    shortName: 'HPBOSE',
    description: 'Himachal Pradesh state board conducting Secondary and Senior Secondary examinations from Dharamsala.',
    guide: `## About HPBOSE
The Himachal Pradesh Board of School Education (HPBOSE), headquartered in Dharamsala, Kangra, conducts the Secondary (Class 10) and Senior Secondary (Class 12) examinations for students across Himachal Pradesh. Established in 1969, the board follows a curriculum largely based on NCERT guidelines.

## Examination Structure
HPBOSE exams are conducted in March. Both Class 10 and Class 12 follow the standard National Curriculum Framework, making it relatively easy for students to transition to other boards or appear for national competitive examinations.

## Higher Education in HP
Himachal Pradesh is home to NIT Hamirpur, IIT Mandi, and several state universities. HP Board students can appear for JEE, NEET, and HP-CET for state-level engineering and medical admissions.`,
    type: 'state',
    state: 'Himachal Pradesh',
    stateCode: 'HP',
    established: 1969,
    headquarters: 'Dharamsala, Himachal Pradesh',
    classes: ['class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'commerce', 'arts'],
    website: 'https://hpbose.org',
    tags: ['himachal board', 'hpbose', 'dharamsala', 'kangra', 'himachal pradesh'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-jharkhand',
    slug: 'jharkhand-jac',
    name: 'Jharkhand Academic Council',
    shortName: 'JAC',
    description: 'Jharkhand state board conducting Matriculation (Class 10) and Intermediate (Class 12) examinations across Jharkhand.',
    guide: `## About JAC
The Jharkhand Academic Council (JAC), headquartered in Ranchi, conducts Matriculation (Class 10) and Intermediate (Class 12) examinations for students across Jharkhand. Established in 2003 after Jharkhand's formation as a separate state from Bihar, JAC governs school education examinations statewide.

## Examination Structure
JAC Matric (Class 10) and Intermediate (Class 12) exams follow the standard syllabus with Hindi as the primary medium. Science stream students can appear for JEE and NEET.

## IIT ISM Dhanbad
Jharkhand is home to IIT (ISM) Dhanbad, one of the oldest technical institutes in Asia, making it an important state for engineering education. JAC students from Jharkhand frequently aspire for IIT Dhanbad admissions.`,
    type: 'state',
    state: 'Jharkhand',
    stateCode: 'JH',
    established: 2003,
    headquarters: 'Ranchi, Jharkhand',
    classes: ['class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'commerce', 'arts'],
    website: 'https://jac.jharkhand.gov.in',
    tags: ['jharkhand board', 'jac', 'ranchi', 'jharkhand'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-uttarakhand',
    slug: 'uttarakhand-ubse',
    name: 'Uttarakhand Board of School Education',
    shortName: 'UBSE',
    description: 'Uttarakhand state board conducting Secondary (Class 10) and Senior Secondary (Class 12) examinations from Ramnagar.',
    guide: `## About UBSE
The Uttarakhand Board of School Education (UBSE), headquartered in Ramnagar, Nainital, conducts Class 10 and Class 12 board examinations for students across Uttarakhand. Established in 2001 after Uttarakhand's formation as a separate state from Uttar Pradesh.

## Curriculum and Recognition
UBSE follows a curriculum based on NCERT framework. Science stream students can appear for JEE, NEET, and Uttarakhand state entrance examinations (UTET, JEEP). IIT Roorkee is located within Uttarakhand, making it an aspirational institution for state students.`,
    type: 'state',
    state: 'Uttarakhand',
    stateCode: 'UK',
    established: 2001,
    headquarters: 'Ramnagar, Nainital, Uttarakhand',
    classes: ['class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'commerce', 'arts'],
    website: 'https://ubse.uk.gov.in',
    tags: ['uttarakhand board', 'ubse', 'ramnagar', 'uttarakhand', 'iit roorkee'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-assam',
    slug: 'assam-seba',
    name: 'Board of Secondary Education, Assam',
    shortName: 'SEBA / AHSEC',
    description: 'Assam state boards: SEBA for Secondary (Class 10) and AHSEC for Higher Secondary (Class 12) examinations across Assam.',
    guide: `## About SEBA and AHSEC
Assam has two educational boards: the Board of Secondary Education, Assam (SEBA) for Class 10 (High School Leaving Certificate — HSLC) and the Assam Higher Secondary Education Council (AHSEC) for Class 12 (Higher Secondary Final Examination — HSFE).

## HSLC (Class 10)
SEBA HSLC covers Assamese/Bengali/Bodo (First Language), English, Mathematics, General Science, and Social Studies.

## HSFE (Class 12)
AHSEC streams include Science, Commerce, and Arts. The Assam board emphasises regional language preservation while following the national curriculum framework.

## Higher Education in Assam
IIT Guwahati, one of the original IIT batch established in 1994, is located in Assam. Tezpur University and Gauhati University are other prominent institutions. AHSEC students can appear for JEE, NEET, and ASTU (Assam Science & Technology University) entrance tests.`,
    type: 'state',
    state: 'Assam',
    stateCode: 'AS',
    established: 1954,
    headquarters: 'Guwahati, Assam',
    classes: ['class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'commerce', 'arts'],
    website: 'https://sebaonline.org',
    tags: ['assam board', 'seba', 'ahsec', 'hslc', 'guwahati', 'northeast india'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-chhattisgarh',
    slug: 'chhattisgarh-cgbse',
    name: 'Chhattisgarh Board of Secondary Education',
    shortName: 'CGBSE',
    description: 'Chhattisgarh state board conducting High School (Class 10) and Higher Secondary (Class 12) examinations from Raipur.',
    guide: `## About CGBSE
The Chhattisgarh Board of Secondary Education (CGBSE), established in 2000 after Chhattisgarh's formation, conducts High School (Class 10) and Higher Secondary (Class 12) examinations across the state. The headquarters is in Raipur.

## Curriculum
CGBSE follows a curriculum based on NCERT guidelines with Hindi as the primary medium. Science stream students can appear for national competitive exams (JEE, NEET) and state-level examinations. IIT Bhilai (established 2016) is located in Chhattisgarh.`,
    type: 'state',
    state: 'Chhattisgarh',
    stateCode: 'CG',
    established: 2000,
    headquarters: 'Raipur, Chhattisgarh',
    classes: ['class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'commerce', 'arts'],
    website: 'https://cgbse.nic.in',
    tags: ['chhattisgarh board', 'cgbse', 'raipur', 'iit bhilai'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'board-goa',
    slug: 'goa-gbshse',
    name: 'Goa Board of Secondary and Higher Secondary Education',
    shortName: 'GBSHSE',
    description: 'Goa state board conducting Secondary School Certificate (SSC) and Higher Secondary Certificate (HSC) examinations across Goa.',
    guide: `## About GBSHSE
The Goa Board of Secondary and Higher Secondary Education (GBSHSE), based in Panaji, conducts SSC (Class 10) and HSC (Class 12) examinations for students in Goa. Known for its relatively small student population but high pass percentages, the board follows a curriculum aligned with the national framework.

## Streams and Recognition
Goa HSC offers Science, Commerce, and Arts streams. Goa board certificates are recognised nationally. IIT Goa (established 2016) and NIT Goa are located within the state, providing top-tier engineering options for Goa Board students.`,
    type: 'state',
    state: 'Goa',
    stateCode: 'GA',
    established: 1975,
    headquarters: 'Panaji, Goa',
    classes: ['class-9','class-10','class-11','class-12'],
    streams: ['science-pcm', 'science-pcb', 'commerce', 'arts'],
    website: 'https://gbshse.in',
    tags: ['goa board', 'gbshse', 'panaji', 'iit goa', 'nit goa'],
    updatedAt: '2025-01-01',
  },
];
