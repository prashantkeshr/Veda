import type { Institution } from '../models';

export const institutionsPhase40Data: Institution[] = [

  // ── BITS Pilani campuses (3) ─────────────────────────────────────────
  {
    id: 'inst-bits-pilani',
    slug: 'bits-pilani',
    name: 'Birla Institute of Technology and Science, Pilani',
    shortName: 'BITS Pilani',
    description: 'India\'s top private engineering institution — NIRF #17 Overall, known for its unique BITSAT admission, practice school internship, and dual degree programmes.',
    guide: `## About BITS Pilani
Birla Institute of Technology and Science (BITS) Pilani, established in 1964 in Pilani, Rajasthan, is India's premier private engineering institution. Unlike IITs and NITs, BITS Pilani takes no government funding and conducts its own national entrance test — BITSAT. NIRF rank: #17 overall, #10 engineering.

## BITSAT — The Unique Entrance Route
BITSAT (BITS Aptitude Test) is an online computer-based test conducted by BITS. Unlike JEE, it can be taken multiple times in the exam window and the score depends on speed and accuracy. No negative marking for the extra 12 questions. Students with 12th board marks of 75%+ in Physics, Chemistry, Mathematics and PCM aggregate are eligible.

## Programmes
- **B.E. (Hons.):** Computer Science, Electrical & Electronics, Mechanical, Chemical, Electronics & Instrumentation, Manufacturing
- **B.Pharm (Hons.), M.Sc. (Hons.):** Physics, Chemistry, Mathematics, Economics, Biological Sciences
- **Dual Degree (B.E./B.Pharm + M.Sc.):** A flagship 5-year integrated programme
- **M.E., M.Pharm, MBA, Ph.D** (limited seats)

## Practice School — A National Differentiator
BITS Pilani's Practice School (PS-I and PS-II) places students in top companies (Google, Microsoft, Goldman Sachs, Schlumberger) for 6–8 month work stints, unlike typical summer internships. This is one of BITS's most valued unique features.

## Admission
BITSAT score + Class 12 marks (minimum 75% aggregate in PCM). Top CS students typically need 390+ BITSAT score for the Pilani campus.`,
    type: 'institute',
    category: 'deemed-university',
    city: 'Pilani',
    state: 'Rajasthan',
    countryId: 'IN',
    established: 1964,
    nirfRank: 17,
    naacGrade: 'A',
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd', 'prog-mba'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['BITSAT'],
    courseIds: [],
    website: 'https://www.bits-pilani.ac.in',
    tags: ['bits pilani', 'bits', 'bitsat', 'pilani', 'rajasthan', 'practice school', 'nirf rank 17', 'private engineering'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-bits-goa',
    slug: 'bits-goa',
    name: 'Birla Institute of Technology and Science, Goa',
    shortName: 'BITS Goa',
    description: 'BITS Pilani\'s Goa campus (est. 2004), offering the same BITS academic programmes with BITSAT admission, located in Zuarinagar, South Goa — known for its coastal campus and vibrant student life.',
    guide: `## About BITS Goa
BITS Goa, established in 2004 as the second campus of BITS Pilani, is located in Zuarinagar, South Goa. The campus follows the same academic structure as BITS Pilani, with identical BITSAT admission, curriculum, and the Practice School programme.

## Programmes
B.E. (Hons.) in Computer Science, EEE, Mechanical, Chemical, Electronics & Instrumentation. M.Sc. (Hons.) in Physics, Chemistry, Mathematics, Economics, Biological Sciences. 5-year Dual Degree (B.E. + M.Sc.).

## Admission
BITSAT score. The Goa campus generally admits students with BITSAT scores slightly lower than Pilani for the same branch (CS Goa typically needs 380+ vs 390+ for Pilani).

## Campus Life
Set against the beaches of South Goa, the campus offers a unique cultural environment. Its annual cultural fest (Waves) and technical fest (Quark) are large inter-college events. The beach proximity and Goa's cosmopolitan culture make BITS Goa a highly sought campus.`,
    type: 'institute',
    category: 'deemed-university',
    city: 'Vasco da Gama',
    state: 'Goa',
    countryId: 'IN',
    established: 2004,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['BITSAT'],
    courseIds: [],
    website: 'https://www.bits-pilani.ac.in/goa/',
    tags: ['bits goa', 'bits pilani goa', 'bitsat', 'goa', 'practice school', 'private engineering'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-bits-hyderabad',
    slug: 'bits-hyderabad',
    name: 'Birla Institute of Technology and Science, Hyderabad',
    shortName: 'BITS Hyderabad',
    description: 'BITS Pilani\'s Hyderabad campus (est. 2008) in Jawahar Nagar, Shamirpet — the largest BITS campus by intake, with same academic standards, BITSAT admission, and proximity to Hyderabad\'s tech sector.',
    guide: `## About BITS Hyderabad
BITS Hyderabad, established in 2008, is located in Jawahar Nagar, Shamirpet, Hyderabad, Telangana. The largest BITS campus by student intake, it follows the same curriculum and Practice School programme as BITS Pilani. Hyderabad's booming tech sector (Amazon, Google, Microsoft, Infosys, TCS all have major campuses nearby) makes BITS Hyderabad particularly well-placed for industry connections.

## Programmes
B.E. (Hons.) in CS, EEE, Mechanical, Civil, Chemical, Electronics & Instrumentation. M.Sc. (Hons.) in Physics, Chemistry, Mathematics, Economics, Biological Sciences. 5-year Dual Degree. M.E., Ph.D.

## Admission
BITSAT score. Hyderabad campus typically admits students with slightly lower BITSAT scores than Pilani for the same branch (CS Hyderabad: 370–380+).

## Industry Connect
Being in Hyderabad's HITEC City corridor means campus recruitment from Amazon (which has its largest India office nearby), Google, Microsoft, Infosys, and pharma giants like Dr. Reddy's and Natco.`,
    type: 'institute',
    category: 'deemed-university',
    city: 'Hyderabad',
    state: 'Telangana',
    countryId: 'IN',
    established: 2008,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['BITSAT'],
    courseIds: [],
    website: 'https://www.bits-pilani.ac.in/hyderabad/',
    tags: ['bits hyderabad', 'bits pilani hyderabad', 'bitsat', 'hyderabad', 'telangana', 'practice school', 'private engineering'],
    updatedAt: '2026-09-01',
  },

  // ── Top Deemed/Private Universities (3) ──────────────────────────────
  {
    id: 'inst-vit-vellore',
    slug: 'vit-vellore',
    name: 'Vellore Institute of Technology',
    shortName: 'VIT Vellore',
    description: 'India\'s largest private engineering university (est. 1984) in Vellore, Tamil Nadu — NIRF #11 Engineering, known for VITEEE admission, 100% placement record, and large international student base.',
    guide: `## About VIT Vellore
Vellore Institute of Technology (VIT), established in 1984 by G. Viswanathan, is one of India's most recognised private engineering universities. Located in Vellore, Tamil Nadu, VIT has a total student population of 50,000+ across its four campuses (Vellore, Chennai, Bhopal, Amaravati). NIRF Engineering rank: #11.

## VITEEE — The Entrance Test
VIT conducts VITEEE (VIT Engineering Entrance Examination), an online computer-based test. Students can apply directly to VIT without JEE scores. VITEEE admits approximately 7,000 students per year across all four campuses, with Vellore being the most prestigious.

## Programmes
B.Tech in 20+ specialisations including CS (with specialisations in AI, Cybersecurity, Data Science, Blockchain), ECE, EEE, Mechanical, Civil, Biotech, Chemical. M.Tech, MBA, M.Sc, Ph.D across all disciplines.

## Placements
VIT claims 100% placement for eligible students, with 800+ companies visiting annually. Top recruiters include Microsoft, Amazon, Goldman Sachs, Infosys, TCS, Wipro, and Cognizant. Average package (2024): ₹7–9 LPA.

## Admission
VITEEE score (preferred) or JEE Main score. Class 12 minimum 60% in PCM.`,
    type: 'university',
    category: 'deemed-university',
    city: 'Vellore',
    state: 'Tamil Nadu',
    countryId: 'IN',
    established: 1984,
    nirfRank: 11,
    naacGrade: 'A++',
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd', 'prog-mba'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['VITEEE', 'JEE Main'],
    courseIds: [],
    website: 'https://vit.ac.in',
    tags: ['vit vellore', 'vit', 'viteee', 'vellore', 'tamil nadu', 'nirf rank 11 engineering', 'private engineering', 'deemed university'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-manipal-mit',
    slug: 'manipal-institute-of-technology',
    name: 'Manipal Institute of Technology',
    shortName: 'MIT Manipal',
    description: 'India\'s oldest and most recognised private engineering institution (est. 1957), located in Manipal, Karnataka — known for MET admission, international research, and a globally respected degree.',
    guide: `## About MIT Manipal
Manipal Institute of Technology (MIT), established in 1957, is part of Manipal Academy of Higher Education (MAHE). Located in Manipal, Udupi, Karnataka, MIT is one of India's most globally recognised private engineering institutions with alumni across 100+ countries. NIRF Engineering rank: #25.

## Programmes
B.Tech in CS, ECE, EE, ME, Civil, Chemical, Aeronautical, Information Technology, Biomedical, and many more specialisations. M.Tech, M.Sc, Ph.D.

## MET — Manipal Entrance Test
MIT Manipal admits through the Manipal Entrance Test (MET), an online CBT conducted each year. Students with PCM in Class 12 (60%+) are eligible. JEE Main scores are also accepted for direct admission shortlisting.

## Global Standing
MIT Manipal has strong international collaborations with universities in the US, UK, Australia, and Europe. The campus at Manipal is internationally renowned as a "university town" — housing MAHE's medical, dental, pharmacy, and engineering colleges together.

## Placements
Regular recruiters include Google, Microsoft, Amazon, Qualcomm, Texas Instruments, Infosys, and Wipro. MIT Manipal's placement record is considered among the best for deemed universities.`,
    type: 'institute',
    category: 'deemed-university',
    city: 'Manipal',
    state: 'Karnataka',
    countryId: 'IN',
    established: 1957,
    nirfRank: 25,
    naacGrade: 'A++',
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['MET', 'JEE Main'],
    courseIds: [],
    website: 'https://manipal.edu/mit.html',
    tags: ['mit manipal', 'manipal institute of technology', 'met', 'manipal', 'karnataka', 'nirf rank 25', 'private engineering', 'mahe'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-thapar-patiala',
    slug: 'thapar-institute',
    name: 'Thapar Institute of Engineering and Technology',
    shortName: 'Thapar Institute',
    description: 'Deemed university (est. 1956) in Patiala, Punjab — NIRF #28 Engineering, known for its rigorous B.Tech programme admitted through JEE Main, strong core and IT placement, and NRI/management quota.',
    guide: `## About Thapar Institute
Thapar Institute of Engineering and Technology (TIET), established in 1956, is a deemed university located in Patiala, Punjab. Often called the "poor man's BITS" for its reputation, TIET is consistently ranked among the top 30 engineering institutions in India (NIRF #28).

## Programmes
B.E./B.Tech in CS, ECE, EE, ME, Civil, Chemical, Biotechnology, Engineering Physics, Mathematics & Computing. M.E., M.Sc, MBA, Ph.D.

## Admission
JEE Main scores form the primary basis for admission. Unlike BITS Pilani, Thapar uses JEE Main ranks (typically top 20,000–60,000 depending on branch). Also has management quota seats.

## Strengths
Thapar has strong placements in IT, banking tech, and core engineering. Campus is fully residential and the student-to-faculty ratio is low. Companies like Amazon, Microsoft, Goldman Sachs, JP Morgan, and Hero Group recruit here. Its MBA programme (1-year) at LMTSM is also nationally recognised.`,
    type: 'institute',
    category: 'deemed-university',
    city: 'Patiala',
    state: 'Punjab',
    countryId: 'IN',
    established: 1956,
    nirfRank: 28,
    naacGrade: 'A',
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd', 'prog-mba'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Main'],
    courseIds: [],
    website: 'https://www.thapar.edu',
    tags: ['thapar institute', 'tiet', 'patiala', 'punjab', 'jee main', 'nirf rank 28', 'private engineering', 'deemed university'],
    updatedAt: '2026-09-01',
  },

  // ── IIITs (3) ─────────────────────────────────────────────────────────
  {
    id: 'inst-iiit-hyderabad',
    slug: 'iiit-hyderabad',
    name: 'International Institute of Information Technology Hyderabad',
    shortName: 'IIIT Hyderabad',
    description: 'India\'s top IIIT (est. 1998) — a research university specialising in CS and computational sciences, known for its research output, alumni in top global tech companies, and Dual Degree + Ph.D. programmes.',
    guide: `## About IIIT Hyderabad
International Institute of Information Technology Hyderabad (IIIT-H), established in 1998, is a research-oriented not-for-profit institution located in Gachibowli, Hyderabad. Despite being a private entity, IIIT-H is nationally ranked among the top 5 CS-focused institutions in India and is considered on par with the better IITs for Computer Science research.

## Research First
IIIT-H is fundamentally a research university. Its research centres in AI, Machine Learning, Computer Vision, NLP, VLSI, and Computational Natural Sciences produce output published in top international conferences (ACL, CVPR, NeurIPS, ICCV). Many IIIT-H alumni are PhD students and faculty at MIT, Stanford, CMU, and major tech research labs.

## Programmes
- **B.Tech:** Computer Science and Engineering, Electronics & Communication Engineering
- **Dual Degree (B.Tech + M.S. by Research, 5 years):** The flagship; most admitted students pursue this
- **M.Tech, M.S. by Research, Ph.D:** Strong PG research programmes
- No MBA, no management courses — purely CS/ECE/sciences focus.

## Admission
UGEE (Undergraduate Entrance Exam for IIIT-H) — a research aptitude test. JEE Main ranks also considered. For B.Tech: typically UGEE + JEE rank within top 5,000 for CS.

## Alumni
IIIT-H alumni include top researchers at Google Brain, DeepMind, Microsoft Research, and Meta AI. The institute has a disproportionately high alumni impact relative to its small size (~1,000 UG students total).`,
    type: 'institute',
    category: 'autonomous',
    city: 'Hyderabad',
    state: 'Telangana',
    countryId: 'IN',
    established: 1998,
    nirfRank: 42,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-phd'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['UGEE', 'JEE Main'],
    courseIds: [],
    website: 'https://www.iiit.ac.in',
    tags: ['iiit hyderabad', 'iiith', 'gachibowli', 'hyderabad', 'cs research', 'ai ml', 'ugee', 'iiit'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-iiit-delhi',
    slug: 'iiit-delhi',
    name: 'Indraprastha Institute of Information Technology Delhi',
    shortName: 'IIIT Delhi',
    description: 'State IIIT (est. 2008) in Okhla, Delhi — one of the top IIITs, known for its CS and ECE programmes, research culture, and JAC Delhi admission process.',
    guide: `## About IIIT Delhi
Indraprastha Institute of Information Technology Delhi (IIIT-Delhi), established in 2008 by the Government of Delhi, is located in Okhla, New Delhi. It is a state IIIT and has rapidly become one of the most sought-after IIITs after IIIT Hyderabad.

## Programmes
B.Tech in CS (multiple specialisations: AI, Cybersecurity, Social Computing, Bioinformatics), ECE (multiple specialisations). M.Tech, Ph.D. Notable for offering B.Tech specialisations not found at most other institutions.

## Admission
IIIT Delhi admits through JAC Delhi (Joint Admission Counselling Delhi) — using JEE Main scores. General category: typically top 7,000–15,000 JEE Main rank for CS.

## Research
IIIT Delhi has active research groups in AI, cybersecurity, NLP, and computational biology. Its research output per student is among the highest of any IIIT. Funded by NCT of Delhi government with MoUs with AIIMS Delhi, making it unique for interdisciplinary research.`,
    type: 'institute',
    category: 'autonomous',
    city: 'New Delhi',
    state: 'Delhi',
    countryId: 'IN',
    established: 2008,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-phd'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Main', 'JAC Delhi'],
    courseIds: [],
    website: 'https://www.iiitd.ac.in',
    tags: ['iiit delhi', 'iiitd', 'indraprastha', 'okhla', 'new delhi', 'jac delhi', 'jee main', 'iiit'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-iiit-allahabad',
    slug: 'iiit-allahabad',
    name: 'Indian Institute of Information Technology Allahabad',
    shortName: 'IIIT Allahabad',
    description: 'Oldest IIIT (est. 1999) and Institute of National Importance, located in Prayagraj (Allahabad), UP — known for CS, ECE, and strong placement in IT companies.',
    guide: `## About IIIT Allahabad
Indian Institute of Information Technology (IIIT) Allahabad, established in 1999, is the oldest IIIT in India and the only IIIT with "Institute of National Importance" status. Located in Devghat, Jhalwa, Prayagraj, Uttar Pradesh, IIIT Allahabad has a well-established reputation in CS and ECE.

## Programmes
B.Tech in IT (Information Technology), ECE, and a distinctive B.Tech in Bioinformatics. M.Tech in CS, ECE, and IT. MBA (Technology Management). Ph.D.

## Admission
B.Tech through JoSAA counselling using JEE Main scores (IIIT Allahabad participates in the JoSAA system for government IIITs). Typically requires JEE Main rank under 10,000 for IT, under 15,000 for ECE.

## Placement
IIIT Allahabad has strong IT sector placement. Microsoft, Amazon, Samsung, TCS, Infosys, and Goldman Sachs recruit regularly. Average package: ₹10–14 LPA (2024 batch).`,
    type: 'institute',
    category: 'autonomous',
    city: 'Prayagraj',
    state: 'Uttar Pradesh',
    countryId: 'IN',
    established: 1999,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-phd', 'prog-mba'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Main', 'JoSAA'],
    courseIds: [],
    website: 'https://www.iiita.ac.in',
    tags: ['iiit allahabad', 'iiita', 'prayagraj', 'uttar pradesh', 'jee main', 'josaa', 'iiit', 'information technology'],
    updatedAt: '2026-09-01',
  },

  // ── State Engineering Colleges (4) ───────────────────────────────────
  {
    id: 'inst-jadavpur-university',
    slug: 'jadavpur-university',
    name: 'Jadavpur University',
    shortName: 'Jadavpur University',
    description: 'West Bengal\'s premier technical and general university (est. 1955) in Kolkata — NIRF #12 University, one of India\'s most affordable and highly ranked state universities for engineering, arts, and sciences.',
    guide: `## About Jadavpur University
Jadavpur University (JU), established in 1955 from the historic Jadavpur Technical School movement, is located in Jadavpur, Kolkata, West Bengal. Consistently ranked in India's top 12 universities (NIRF), JU offers engineering, arts, science, and social science programmes at a very low tuition fee (~₹2,000/year for B.E.).

## Programmes
- **Faculty of Engineering & Technology:** B.E. in CS, EE, ECE, ME, Civil, Chemical, Construction, IT, Power Engineering, Food Technology (8 branches)
- **Faculty of Arts:** B.A./M.A. in 11+ disciplines
- **Faculty of Science:** B.Sc./M.Sc. in Physics, Chemistry, Mathematics, Statistics, and more
- Ph.D across all faculties

## Admission
B.E. through WBJEE (West Bengal Joint Entrance Examination) + Class 12 marks. For engineering: JEE Main rank holders are also considered under special counselling. B.A./B.Sc. through merit-based admission or CUET.

## Legacy
JU alumni include Nobel laureate Amartya Sen (Economics), filmmakers, politicians, and top corporate leaders. Its engineering graduates have gone on to found startups, lead MNCs, and hold senior academic positions globally.`,
    type: 'university',
    category: 'state-university',
    city: 'Kolkata',
    state: 'West Bengal',
    countryId: 'IN',
    established: 1955,
    nirfRank: 12,
    naacGrade: 'A++',
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-ba', 'prog-ma', 'prog-msc', 'prog-phd'],
    streamIds: ['stream-engineering', 'stream-science', 'stream-arts'],
    admissionExams: ['WBJEE', 'JEE Main', 'CUET-UG'],
    courseIds: [],
    website: 'https://jadavpuruniversity.in',
    tags: ['jadavpur university', 'ju', 'kolkata', 'west bengal', 'wbjee', 'state university', 'affordable', 'nirf rank 12 university'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-dtu-delhi',
    slug: 'dtu-delhi',
    name: 'Delhi Technological University',
    shortName: 'DTU Delhi',
    description: 'Delhi\'s top state engineering university (est. 1941 as Delhi Polytechnic) in Rohini — admitted through JAC Delhi + JEE Main, NIRF #43 Engineering, with strong placements in IT and core engineering.',
    guide: `## About DTU Delhi
Delhi Technological University (DTU), originally established in 1941 as Delhi Polytechnic and upgraded to a university in 2009, is located in Rohini, New Delhi. It is the largest government engineering university in Delhi, enrolling ~2,000 students per year across undergraduate programmes.

## Programmes
B.Tech in CS, ECE, EE, ME, Civil, Chemical, Environmental Engineering, Software Engineering, Biotechnology, Mathematics & Computing, and more (13 branches). M.Tech, MBA, M.Sc, Ph.D.

## Admission
JAC Delhi (Joint Admission Counselling Delhi) using JEE Main scores — for Delhi residents. For CS at DTU: typically JEE Main rank under 8,000 for Delhi residents, much higher cutoff for non-Delhi candidates. Non-Delhi students have limited seats.

## Placement
DTU consistently produces top-tier placements in Delhi-NCR's tech industry. Regular recruiters: Amazon, Microsoft, Samsung, Qualcomm, Google, HSBC Tech, Goldman Sachs, and PSUs. Average package: ₹12–16 LPA (2024 CS batch).`,
    type: 'university',
    category: 'state-university',
    city: 'New Delhi',
    state: 'Delhi',
    countryId: 'IN',
    established: 1941,
    nirfRank: 43,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd', 'prog-mba'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Main', 'JAC Delhi'],
    courseIds: [],
    website: 'https://www.dtu.ac.in',
    tags: ['dtu delhi', 'delhi technological university', 'rohini', 'new delhi', 'jac delhi', 'jee main', 'state engineering', 'nirf rank 43'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-coep-pune',
    slug: 'coep-pune',
    name: 'College of Engineering Pune',
    shortName: 'COEP Pune',
    description: 'One of India\'s oldest engineering colleges (est. 1854) — now COEP Technological University — located in Shivajinagar, Pune, Maharashtra, known for affordable fees, MHT-CET admission, and strong alumni network.',
    guide: `## About COEP Pune
College of Engineering Pune (COEP), established in 1854 as Poona Civil Engineering College, is one of Asia's oldest engineering institutions. Now named COEP Technological University after gaining university status in 2022, it is located in Shivajinagar, Pune, Maharashtra. COEP alumni form one of India's most active engineering alumni networks.

## Programmes
B.Tech in CS, ECE, EE, ME, Civil, Chemical, Instrumentation, Production, Metallurgy. M.Tech, MBA, Ph.D.

## Admission
MHT-CET (Maharashtra's common entrance test) for Maharashtra students. JEE Main ranks also accepted (for non-Maharashtra and NRI seats). Fees are very affordable (government college rates, ~₹50,000–80,000/year).

## Strengths
COEP's proximity to Pune's automotive and IT industries (Tata Motors, Bajaj Auto, Cummins, Capgemini, Infosys) ensures strong placement. The college's motorsports team (COEP Motorsports) participates in international SAE competitions and is highly regarded.`,
    type: 'university',
    category: 'state-university',
    city: 'Pune',
    state: 'Maharashtra',
    countryId: 'IN',
    established: 1854,
    nirfRank: 56,
    naacGrade: 'A+',
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-phd', 'prog-mba'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['MHT-CET', 'JEE Main'],
    courseIds: [],
    website: 'https://www.coep.org.in',
    tags: ['coep pune', 'college of engineering pune', 'coep technological university', 'mht-cet', 'pune', 'maharashtra', 'oldest engineering college'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-anna-university',
    slug: 'anna-university',
    name: 'Anna University',
    shortName: 'Anna University',
    description: 'Tamil Nadu\'s apex state technical university (est. 1978) in Chennai — affiliates 700+ engineering colleges across TN, offers B.E./B.Tech through TANCET/JEE Main, and runs own campus programmes.',
    guide: `## About Anna University
Anna University, established in 1978 in Guindy, Chennai, Tamil Nadu, is the apex technical university of Tamil Nadu. It affiliates over 700 engineering colleges across the state under its umbrella, making it the university under which most Tamil Nadu engineering graduates receive their degree.

## Own Campus (CEG, ACT, MIT, SAP)
Anna University itself comprises four constituent colleges on the Guindy campus:
- **College of Engineering, Guindy (CEG):** One of India's oldest engineering colleges (est. 1794)
- **Alagappa College of Technology (ACT):** Chemical and process engineering
- **Madras Institute of Technology (MIT):** Aerospace, Automobile, Avionics
- **School of Architecture & Planning (SAP):** B.Arch, M.Arch

Admission to Anna University's own campus is through TANCET (Tamil Nadu Common Entrance Test) for M.E./MBA and merit-based/TNEA for B.E.

## Why It Matters for Students
Students across 700+ affiliated colleges graduate under the "Anna University" degree. GATE scores, JEE ranks, and TANCET scores determine admission to post-graduate programmes. The university sets the curriculum for all affiliated colleges.`,
    type: 'university',
    category: 'state-university',
    city: 'Chennai',
    state: 'Tamil Nadu',
    countryId: 'IN',
    established: 1978,
    nirfRank: 6,
    naacGrade: 'A++',
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-phd', 'prog-mba', 'prog-barch'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['TANCET', 'TNEA', 'JEE Main', 'GATE'],
    courseIds: [],
    website: 'https://www.annauniv.edu',
    tags: ['anna university', 'ceg guindy', 'tancet', 'tnea', 'chennai', 'tamil nadu', 'nirf rank 6 university', 'state university'],
    updatedAt: '2026-09-01',
  },

  // ── Medical Colleges (2) ──────────────────────────────────────────────
  {
    id: 'inst-cmc-vellore',
    slug: 'cmc-vellore',
    name: 'Christian Medical College Vellore',
    shortName: 'CMC Vellore',
    description: 'India\'s most prestigious private medical institution (est. 1900) — the only Indian medical college ranked in Times Higher Education World University Rankings, known for its missionary tradition of service and exceptional clinical training.',
    guide: `## About CMC Vellore
Christian Medical College (CMC) Vellore, established in 1900 by Dr. Ida Sophia Scudder, is one of India's most reputed and internationally recognised medical institutions. Located in Vellore, Tamil Nadu, CMC is unique in combining world-class medical education with a strong Christian ethos of service to the underserved.

## Programmes
- **MBBS:** 5.5-year programme; approximately 100 seats (CMC runs its own entrance test)
- **MD/MS/MCh/DM:** Postgraduate specialisation in all major medical disciplines
- **Nursing (B.Sc., M.Sc.):** Among India's best nursing schools
- **Allied Health Sciences:** Physiotherapy, Occupational Therapy, Medical Social Work
- **Ph.D:** In basic medical sciences and clinical research

## Admission
CMC Vellore does NOT use NEET alone — it has its own multi-round selection process that includes academic merit, Christian denominational quotas, and interviews. General category students can apply but the process is highly competitive and selective beyond just NEET score.

## Clinical Excellence
CMC Vellore is India's leading referral hospital for rare diseases, complex surgeries, and primary care in Tamil Nadu's rural hinterland. Its TB and HIV research programmes are globally recognised. The hospital treats 2,000+ OPD patients daily.`,
    type: 'college',
    category: 'deemed-university',
    city: 'Vellore',
    state: 'Tamil Nadu',
    countryId: 'IN',
    established: 1900,
    nirfRank: 3,
    naacGrade: 'A++',
    programmeIds: ['prog-mbbs', 'prog-phd'],
    streamIds: ['stream-medical'],
    admissionExams: ['NEET-UG', 'CMC Entrance', 'NEET-PG'],
    courseIds: [],
    website: 'https://www.cmch-vellore.edu',
    tags: ['cmc vellore', 'christian medical college', 'vellore', 'tamil nadu', 'neet', 'mbbs', 'medical', 'nirf rank 3 medical'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-jipmer-puducherry',
    slug: 'jipmer-puducherry',
    name: 'Jawaharlal Institute of Postgraduate Medical Education and Research',
    shortName: 'JIPMER Puducherry',
    description: 'Government of India\'s premier medical institution (est. 1823) in Puducherry — on par with AIIMS Delhi in ranking, known for its clinical excellence and JIPMER Entrance Exam (now replaced by NEET).',
    guide: `## About JIPMER Puducherry
Jawaharlal Institute of Postgraduate Medical Education and Research (JIPMER), established in 1823, is located in Puducherry (Pondicherry). It is one of India's oldest medical institutions and is an autonomous institution under the Ministry of Health and Family Welfare, Government of India. NIRF Medical rank: #4.

## Programmes
- **MBBS:** 5.5-year programme; 150 seats (75 general + 75 institutional/other quotas)
- **MD/MS:** Postgraduate specialisation in all major disciplines
- **B.Sc. and M.Sc. (Nursing):** Highly regarded nursing programmes
- **Ph.D:** In biomedical sciences and clinical research

## Admission
MBBS through NEET-UG since 2020 (JIPMER previously ran its own highly competitive entrance test). PG through INI-CET (Institute of National Importance Combined Entrance Test), shared with AIIMS, NIMHANS, PGI Chandigarh.

## Why JIPMER
JIPMER is considered equivalent to AIIMS for clinical training. Its Trauma Centre, Cancer Centre, and Super-Speciality services make it a major referral hospital for Tamil Nadu, Andhra Pradesh, and Kerala. Faculty-patient ratios are lower than most state medical colleges.`,
    type: 'institute',
    category: 'autonomous',
    city: 'Puducherry',
    state: 'Puducherry',
    countryId: 'IN',
    established: 1823,
    nirfRank: 4,
    naacGrade: 'A++',
    programmeIds: ['prog-mbbs', 'prog-phd'],
    streamIds: ['stream-medical'],
    admissionExams: ['NEET-UG', 'INI-CET', 'NEET-PG'],
    courseIds: [],
    website: 'https://jipmer.edu.in',
    tags: ['jipmer', 'jipmer puducherry', 'jawaharlal institute', 'puducherry', 'pondicherry', 'neet', 'mbbs', 'medical', 'nirf rank 4 medical', 'ini-cet'],
    updatedAt: '2026-09-01',
  },

  // ── Top Non-IIM Management Institutes (3) ────────────────────────────
  {
    id: 'inst-xlri-jamshedpur',
    slug: 'xlri-jamshedpur',
    name: 'XLRI – Xavier School of Management',
    shortName: 'XLRI Jamshedpur',
    description: 'India\'s oldest business school (est. 1949) in Jamshedpur — NIRF #7 Management, known for its HR and Business Management programmes, XAT entrance test, and strong ethical/values-based leadership tradition.',
    guide: `## About XLRI Jamshedpur
XLRI – Xavier School of Management (formerly Xavier Labour Relations Institute), established in 1949 by the Society of Jesus (Jesuits) in Jamshedpur, Jharkhand, is India's oldest business school. Consistently ranked #7 in NIRF Management, XLRI is particularly known for its Postgraduate Programme in Business Management (PGDM-BM) and Postgraduate Programme in Human Resource Management (PGDM-HRM).

## Programmes
- **PGDM-BM (Business Management):** 2-year flagship MBA equivalent; batch ~180/year
- **PGDM-HRM (Human Resource Management):** 2-year specialised HRM programme; unique among top B-schools
- **PGDM-GMP:** 15-month General Management Programme for executives (6+ years experience)
- **Ph.D / FPM:** Fellow Programme in Management

## XAT — The Entrance Test
XAT (Xavier Aptitude Test), conducted by XLRI, is accepted by 150+ B-schools in India. XAT is distinct from CAT in including a Decision Making section and an Essay. XLRI's own cutoff: typically XAT 96%+ for BM, 94%+ for HRM.

## Why XLRI
XLRI is the default choice for HR professionals, and its BM programme competes with IIM-L and IIM-K for consulting and FMCG roles. The Jamshedpur location (Tata Steel headquarters) gives students unique access to manufacturing industry insights.`,
    type: 'institute',
    category: 'deemed-university',
    city: 'Jamshedpur',
    state: 'Jharkhand',
    countryId: 'IN',
    established: 1949,
    nirfRank: 7,
    naacGrade: 'A++',
    programmeIds: ['prog-mba', 'prog-phd'],
    streamIds: ['stream-management'],
    admissionExams: ['XAT', 'GMAT'],
    courseIds: [],
    website: 'https://www.xlri.ac.in',
    tags: ['xlri jamshedpur', 'xlri', 'xat', 'mba', 'management', 'jamshedpur', 'jharkhand', 'nirf rank 7 management', 'hr management'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-mdi-gurugram',
    slug: 'mdi-gurugram',
    name: 'Management Development Institute Gurugram',
    shortName: 'MDI Gurugram',
    description: 'NIRF #8 management school (est. 1973) in Gurugram, Haryana — known for its PGP (MBA) programme, CAT + XAT + GMAT admission, and proximity to Delhi-NCR\'s corporate hub for excellent placements.',
    guide: `## About MDI Gurugram
Management Development Institute (MDI) Gurugram, established in 1973, is located in Mehrauli Road, Gurugram, Haryana. Consistently ranked #8 in NIRF Management, MDI is particularly valued for its location in Gurugram — India's corporate hub, home to Fortune 500 companies, tech giants, financial services firms, and startups.

## Programmes
- **PGPM (Post-Graduate Programme in Management):** 2-year MBA equivalent; batch ~240/year
- **PGPM-HRM:** HRM specialisation
- **PGPM-IB:** International Business specialisation
- **PGP-HR, PGP-IM (Part-time):** Working professionals programmes
- **Exec-PGP (Executive):** 1-year for professionals with 5+ years experience
- **Ph.D / FPM**

## Admission
PGPM through CAT score + Written Ability Test + Group Discussion + PI. Typical cutoff: 95%+ CAT for general category. XAT and GMAT scores also accepted.

## Corporate Location Advantage
MDI Gurugram's location in Gurugram's corporate district (DLF Cyber City, Udyog Vihar) allows students to attend industry lectures, mentoring sessions, and corporate visits with India's top companies. Its placement record is boosted by this proximity — FMCG, consulting, and BFSI firms prefer MDI for location-specific talent.`,
    type: 'institute',
    category: 'deemed-university',
    city: 'Gurugram',
    state: 'Haryana',
    countryId: 'IN',
    established: 1973,
    nirfRank: 8,
    naacGrade: 'A+',
    programmeIds: ['prog-mba', 'prog-phd'],
    streamIds: ['stream-management'],
    admissionExams: ['CAT', 'XAT', 'GMAT'],
    courseIds: [],
    website: 'https://www.mdi.ac.in',
    tags: ['mdi gurugram', 'mdi', 'cat', 'mba', 'management', 'gurugram', 'haryana', 'nirf rank 8 management', 'pgpm'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-spjimr-mumbai',
    slug: 'spjimr-mumbai',
    name: 'S.P. Jain Institute of Management and Research',
    shortName: 'SPJIMR Mumbai',
    description: 'NIRF #9 management school (est. 1981) in Andheri, Mumbai — known for its PGDM programme, social responsibility lens, Women in Leadership initiative, and strong Mumbai financial sector placement.',
    guide: `## About SPJIMR Mumbai
S.P. Jain Institute of Management and Research (SPJIMR), established in 1981, is located in Andheri (West), Mumbai, Maharashtra. Consistently ranked #9 in NIRF Management, SPJIMR is unique for its emphasis on social sensitivity, values-driven management education, and the inclusion of NGO/CSR projects as part of the curriculum.

## Programmes
- **PGDM (Post-Graduate Diploma in Management):** 2-year MBA equivalent; batch ~240/year
- **PGDM-Business Management (PGDM-BM):** Similar to the general PGDM
- **PGPM:** Part-time for working professionals
- **FPM (Fellow Programme in Management):** Doctoral programme

## Admission
CAT + WAT + PI. Typical cutoff: 90–95%+ CAT for general category (slightly lower than top-4 IIMs). SPJIMR also looks at academic trajectory and social initiatives beyond just CAT score.

## Distinctive Features
SPJIMR's "Do What You Are" philosophy emphasises personal values discovery. Its "Sampoorna" programme requires students to spend time working with NGOs and rural communities. The Women in Leadership track specifically supports women managers. Being in Mumbai gives students unparalleled access to India's financial capital.`,
    type: 'institute',
    category: 'deemed-university',
    city: 'Mumbai',
    state: 'Maharashtra',
    countryId: 'IN',
    established: 1981,
    nirfRank: 9,
    programmeIds: ['prog-mba', 'prog-phd'],
    streamIds: ['stream-management'],
    admissionExams: ['CAT', 'XAT', 'GMAT'],
    courseIds: [],
    website: 'https://www.spjimr.org',
    tags: ['spjimr mumbai', 'spjimr', 'cat', 'mba', 'management', 'mumbai', 'maharashtra', 'nirf rank 9 management', 'pgdm'],
    updatedAt: '2026-09-01',
  },

  // ── Central University (1) ────────────────────────────────────────────
  {
    id: 'inst-bhu-varanasi',
    slug: 'banaras-hindu-university',
    name: 'Banaras Hindu University',
    shortName: 'BHU Varanasi',
    description: 'Asia\'s largest residential university (est. 1916) in Varanasi — a central university offering education from Class 6 to doctoral level, spanning arts, sciences, commerce, law, medicine, engineering, and Sanskrit.',
    guide: `## About BHU
Banaras Hindu University (BHU), established in 1916 by Pandit Madan Mohan Malaviya, is one of India's most historic central universities. Located on the banks of the Ganga in Varanasi, Uttar Pradesh, BHU spans a 1,300-acre campus and is home to 35,000+ students. (Note: IIT (BHU) is a separate institute on the same campus.)

## Faculties and Institutes
BHU has 140+ departments across faculties:
- **Institute of Medical Sciences (IMS-BHU):** MBBS and postgraduate medical education (NEET-UG admission)
- **Faculty of Engineering & Technology:** B.Tech in multiple streams (now IIT-BHU, separate entity)
- **Faculty of Science:** B.Sc., M.Sc. in 20+ disciplines
- **Faculty of Arts, Social Sciences, Commerce, Law, Sanskrit:** Broad humanities and social sciences
- **Faculty of Agriculture:** One of India's best agriculture programmes

## Admission
CUET-UG for undergraduate programmes. CUET-PG for PG. BHU also conducts BHU-UET (UG Entrance Test) for some specialized programmes. IMS-BHU medical seats through NEET-UG.

## Significance
BHU is one of India's most culturally significant educational institutions — Gandhi, Nehru, and many national leaders have spoken on its grounds. Its Sanskrit department and Vedic studies programmes have no parallel in India.`,
    type: 'university',
    category: 'central-university',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    countryId: 'IN',
    established: 1916,
    nirfRank: 10,
    naacGrade: 'A++',
    programmeIds: ['prog-ba', 'prog-bsc', 'prog-bcom', 'prog-mbbs', 'prog-msc', 'prog-ma', 'prog-phd'],
    streamIds: ['stream-arts', 'stream-science', 'stream-medical', 'stream-commerce'],
    admissionExams: ['CUET-UG', 'CUET-PG', 'NEET-UG'],
    courseIds: [],
    website: 'https://www.bhu.ac.in',
    tags: ['bhu', 'banaras hindu university', 'varanasi', 'uttar pradesh', 'central university', 'cuet', 'neet', 'nirf rank 10 university', 'malaviya'],
    updatedAt: '2026-09-01',
  },
];
