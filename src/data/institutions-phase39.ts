import type { Institution } from '../models';

export const institutionsPhase39Data: Institution[] = [

  // ── IIMs (6) ─────────────────────────────────────────────────────────
  {
    id: 'inst-iim-ahmedabad',
    slug: 'iim-ahmedabad',
    name: 'Indian Institute of Management Ahmedabad',
    shortName: 'IIM Ahmedabad',
    description: 'India\'s #1 management institution (NIRF), consistently ranked among Asia\'s best business schools, known for its case-study pedagogy, PGP programme, and legendary alumni network.',
    guide: `## About IIM Ahmedabad
Indian Institute of Management Ahmedabad (IIMA), established in 1961 in collaboration with Harvard Business School, is India's premier management institution. Located on a Louis Kahn-designed campus in Ahmedabad, Gujarat, IIMA is consistently ranked #1 in India (NIRF) and among the top 50 globally.

## Programmes
- **PGP (MBA equivalent):** 2-year flagship programme; batch size ~400 per year
- **PGP-FABM:** Agriculture and Business Management specialisation
- **PGPX:** 1-year Executive MBA for professionals with 5+ years experience
- **Ph.D / FPM:** Fellow Programme in Management (doctoral level)
- **MDP:** Management Development Programmes for executives

## Admission
PGP admission is through CAT score + Writing Ability Test (WAT) + Personal Interview (PI). IIMA typically requires a CAT percentile of 99%+ for general category shortlisting. PGPX requires GMAT/GRE.

## Why IIMA
IIMA alumni (called A-Batchers) occupy C-suite positions across India's largest corporations, government bodies, and international firms. Notable alumni include Vikram Pandit (ex-Citigroup CEO), KV Kamath (NDB President), and numerous RBI governors and Cabinet ministers.`,
    type: 'institute',
    category: 'autonomous',
    city: 'Ahmedabad',
    state: 'Gujarat',
    countryId: 'IN',
    established: 1961,
    nirfRank: 1,
    naacGrade: 'A++',
    programmeIds: ['prog-mba', 'prog-phd'],
    streamIds: ['stream-management'],
    admissionExams: ['CAT', 'GMAT', 'GRE'],
    courseIds: [],
    website: 'https://www.iima.ac.in',
    tags: ['iim ahmedabad', 'iima', 'cat', 'mba', 'management', 'ahmedabad', 'nirf rank 1 management', 'pgp'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-iim-bangalore',
    slug: 'iim-bangalore',
    name: 'Indian Institute of Management Bangalore',
    shortName: 'IIM Bangalore',
    description: 'India\'s #2 IIM (NIRF), located in Bengaluru\'s tech hub — known for its strong focus on entrepreneurship, public policy, and ties to India\'s startup ecosystem.',
    guide: `## About IIM Bangalore
Indian Institute of Management Bangalore (IIMB), established in 1973, is located in Bengaluru (Karnataka). Consistently ranked #2 in India (NIRF Management), IIMB is the IIM closest to India's technology and startup hub, making it particularly strong in entrepreneurship, digital business, and tech-management.

## Programmes
- **PGP:** 2-year MBA-equivalent flagship programme; batch ~450/year
- **PGPEM:** Evening MBA for working professionals (3 years)
- **PGPBA:** Business Analytics specialisation
- **EPGP:** 1-year Executive MBA (requires 5+ years experience)
- **Ph.D / FPM:** Fellow Programme in Management

## Admission
CAT score followed by Essay Writing + Personal Interview. IIMB shortlists applicants with CAT 99%+ percentile for general category.

## Strengths
IIMB's NSRCEL (NS Raghavan Centre for Entrepreneurial Learning) has incubated 300+ startups. Its proximity to Bengaluru's tech corridor gives students unmatched exposure to technology companies, VCs, and global firms with India operations.`,
    type: 'institute',
    category: 'autonomous',
    city: 'Bengaluru',
    state: 'Karnataka',
    countryId: 'IN',
    established: 1973,
    nirfRank: 2,
    programmeIds: ['prog-mba', 'prog-phd'],
    streamIds: ['stream-management'],
    admissionExams: ['CAT', 'GMAT'],
    courseIds: [],
    website: 'https://www.iimb.ac.in',
    tags: ['iim bangalore', 'iimb', 'cat', 'mba', 'management', 'bengaluru', 'nirf rank 2 management', 'pgp', 'startup'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-iim-calcutta',
    slug: 'iim-calcutta',
    name: 'Indian Institute of Management Calcutta',
    shortName: 'IIM Calcutta',
    description: 'India\'s first IIM (1961), NIRF #3 in management — known for its finance specialisation, placement record in financial services, and the iconic Joka campus.',
    guide: `## About IIM Calcutta
Indian Institute of Management Calcutta (IIMC), established in 1961, was India's first IIM, set up with the collaboration of MIT Sloan School of Management. Located in Joka, on the southern outskirts of Kolkata, West Bengal, IIMC is ranked #3 in NIRF Management.

## Programmes
- **MBA (PGDM):** 2-year flagship; batch ~480/year
- **PGDM-Business Analytics:** 2-year analytics-focused programme
- **MBA-Ex (PGPEX):** 1-year Executive MBA
- **Ph.D / FPM:** Fellow Programme in Management (doctoral)

## Finance Capital of Indian B-schools
IIMC is historically the #1 recruiting destination for investment banks and financial services firms in India. JPMorgan, Goldman Sachs, BCG, McKinsey, and Bain consistently recruit at IIMC. Finance roles account for ~35% of placements.

## Admission
CAT score + Written Analysis Test (WAT) + Personal Interview. Shortlisting cutoff: typically 99%+ CAT for general category.`,
    type: 'institute',
    category: 'autonomous',
    city: 'Kolkata',
    state: 'West Bengal',
    countryId: 'IN',
    established: 1961,
    nirfRank: 3,
    programmeIds: ['prog-mba', 'prog-phd'],
    streamIds: ['stream-management'],
    admissionExams: ['CAT', 'GMAT'],
    courseIds: [],
    website: 'https://www.iimcal.ac.in',
    tags: ['iim calcutta', 'iimc', 'cat', 'mba', 'management', 'kolkata', 'nirf rank 3 management', 'finance', 'joka'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-iim-lucknow',
    slug: 'iim-lucknow',
    name: 'Indian Institute of Management Lucknow',
    shortName: 'IIM Lucknow',
    description: 'NIRF #4 IIM, located in Lucknow, UP — known for its marketing, FMCG, and rural management specialisations, and the landmark campus in Sitapur Road.',
    guide: `## About IIM Lucknow
Indian Institute of Management Lucknow (IIML), established in 1984, is located on a 185-acre campus on Sitapur Road, Lucknow, Uttar Pradesh. Ranked #4 in NIRF Management, IIML is particularly known for its marketing specialisation and strong campus recruitment from FMCG companies.

## Programmes
- **PGP:** 2-year MBA-equivalent flagship; batch ~450/year
- **PGP-SM:** Strategic Management specialisation
- **PGP-ABM:** Agribusiness Management (Noida campus)
- **iEMBA:** Part-time Executive MBA (Noida campus)
- **Ph.D / FPM:** Fellow Programme in Management

## Admission
CAT score followed by WAT + PI. Shortlisting cutoff: typically 97–99%+ CAT.

## Marketing Powerhouse
IIML has historically been a top destination for marketing and FMCG roles — HUL, ITC, P&G, and Nestle are regular recruiters. Its alumni network includes senior executives across consumer goods, retail, and media companies.`,
    type: 'institute',
    category: 'autonomous',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    countryId: 'IN',
    established: 1984,
    nirfRank: 4,
    programmeIds: ['prog-mba', 'prog-phd'],
    streamIds: ['stream-management'],
    admissionExams: ['CAT', 'GMAT'],
    courseIds: [],
    website: 'https://www.iiml.ac.in',
    tags: ['iim lucknow', 'iiml', 'cat', 'mba', 'management', 'lucknow', 'nirf rank 4 management', 'marketing', 'fmcg'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-iim-kozhikode',
    slug: 'iim-kozhikode',
    name: 'Indian Institute of Management Kozhikode',
    shortName: 'IIM Kozhikode',
    description: 'NIRF #5 IIM, set on a picturesque hillside campus in Kerala — known for its liberal management education philosophy and leadership in humanities-integrated management.',
    guide: `## About IIM Kozhikode
Indian Institute of Management Kozhikode (IIMK), established in 1996, is located on a 100-acre hillside campus in Kunnamangalam, Kozhikode, Kerala. Ranked #5 in NIRF Management, IIMK is the southernmost original IIM and is known for its interdisciplinary, humanities-integrated approach to management education.

## Programmes
- **PGP:** 2-year MBA-equivalent flagship; batch ~400/year
- **PGP-Finance:** Finance specialisation cohort
- **EPGP:** 1-year Executive MBA
- **Ph.D / FPM:** Fellow Programme in Management

## Admission
CAT score + WAT + PI. Typical shortlisting cutoff: 96%+ CAT.

## Distinctive Approach
IIMK is known for integrating liberal arts, philosophy, and cultural studies into management education — unique among IIMs. Its Management Development Centre and Center for Innovation, Entrepreneurship and Leadership (CIEL) support startup and innovation activities.`,
    type: 'institute',
    category: 'autonomous',
    city: 'Kozhikode',
    state: 'Kerala',
    countryId: 'IN',
    established: 1996,
    nirfRank: 5,
    programmeIds: ['prog-mba', 'prog-phd'],
    streamIds: ['stream-management'],
    admissionExams: ['CAT', 'GMAT'],
    courseIds: [],
    website: 'https://www.iimk.ac.in',
    tags: ['iim kozhikode', 'iimk', 'cat', 'mba', 'management', 'kozhikode', 'kerala', 'nirf rank 5 management'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-iim-indore',
    slug: 'iim-indore',
    name: 'Indian Institute of Management Indore',
    shortName: 'IIM Indore',
    description: 'NIRF #6 IIM, located in Indore, MP — known for its IPM (Integrated Programme in Management), the first 5-year integrated management degree in India.',
    guide: `## About IIM Indore
Indian Institute of Management Indore (IIMI), established in 1996, is located on a 193-acre campus in Rau, Indore, Madhya Pradesh. Ranked #6 in NIRF Management, IIMI is most notably home to the IPM — India's first integrated 5-year BA+MBA programme for students entering directly after Class 12.

## Programmes
- **PGP:** 2-year MBA-equivalent flagship; batch ~550/year (among the largest IIM batches)
- **IPM:** 5-year Integrated Programme in Management (BA + MBA) — for Class 12 students via IPMAT
- **EPGP:** 1-year Executive MBA
- **Ph.D / FPM:** Fellow Programme in Management

## Admission
PGP: CAT score + WAT + PI. Shortlisting: ~95–97%+ CAT.
IPM: IPMAT (IIM Indore's own entrance test for Class 12 students) — a pathway to an IIM degree without clearing CAT.

## IPM — A Unique Opportunity
The IPM at IIM Indore allows Class 12 students to enter an IIM directly — spending 3 years studying economics/management/social sciences and 2 years in the PGP. This is the most unique feature of IIMI and has significantly raised its profile.`,
    type: 'institute',
    category: 'autonomous',
    city: 'Indore',
    state: 'Madhya Pradesh',
    countryId: 'IN',
    established: 1996,
    nirfRank: 6,
    programmeIds: ['prog-mba', 'prog-ba', 'prog-phd'],
    streamIds: ['stream-management'],
    admissionExams: ['CAT', 'IPMAT', 'GMAT'],
    courseIds: [],
    website: 'https://www.iimidr.ac.in',
    tags: ['iim indore', 'iimi', 'cat', 'mba', 'management', 'indore', 'ipm', 'ipmat', 'nirf rank 6 management'],
    updatedAt: '2026-09-01',
  },

  // ── More IITs (6) ─────────────────────────────────────────────────────
  {
    id: 'inst-iit-bhubaneswar',
    slug: 'iit-bhubaneswar',
    name: 'Indian Institute of Technology Bhubaneswar',
    shortName: 'IIT Bhubaneswar',
    description: 'One of the second-generation IITs (2008), located in Argul, near Bhubaneswar, Odisha — growing rapidly with new departments, research labs, and a fully developed permanent campus.',
    guide: `## About IIT Bhubaneswar
IIT Bhubaneswar (IIT BBS), established in 2008, is located on a 936-acre permanent campus in Argul, Odisha. It is one of the 8 new-generation IITs set up under the 11th Five-Year Plan to expand premium engineering education across India.

## Programmes
B.Tech (4 years) in CS, EE, ME, CE, Chemical Engineering, Earth Sciences, Physics, and more. M.Tech, M.Sc, and Ph.D in several disciplines.

## Admission
B.Tech admission through JEE Advanced. M.Tech via GATE. M.Sc via JAM.

## Campus
IIT BBS moved to its permanent campus in 2018. The campus features modern infrastructure, hostels, sports complex, and research facilities. The Eastern India location provides good placement options with PSUs and growing IT companies in Bhubaneswar-Cuttack corridor.`,
    type: 'institute',
    category: 'iit',
    city: 'Bhubaneswar',
    state: 'Odisha',
    countryId: 'IN',
    established: 2008,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Advanced', 'GATE', 'JAM'],
    courseIds: [],
    website: 'https://www.iitbbs.ac.in',
    tags: ['iit bhubaneswar', 'iit bbs', 'bhubaneswar', 'odisha', 'jee advanced', 'engineering'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-iit-gandhinagar',
    slug: 'iit-gandhinagar',
    name: 'Indian Institute of Technology Gandhinagar',
    shortName: 'IIT Gandhinagar',
    description: 'One of the new-generation IITs (2008), located in Palaj, Gandhinagar, Gujarat — known for its liberal arts-integrated engineering education model and design thinking curriculum.',
    guide: `## About IIT Gandhinagar
IIT Gandhinagar (IITGN), established in 2008, is located on a 400-acre campus on the banks of the Sabarmati river in Palaj, Gandhinagar, Gujarat. It is widely regarded as one of the most innovative of the newer IITs, with a distinctive educational philosophy that blends engineering with design, arts, and humanities.

## Distinctive Curriculum
IITGN's B.Tech curriculum includes compulsory liberal arts courses, design thinking modules, and a unique "Open Elective" system. Students are encouraged to explore art, music, philosophy, and history alongside engineering subjects — making it one of the most liberal IIT environments.

## Programmes
B.Tech in CS, EE, ME, CE, Chemical Engineering, Materials Science. M.Tech, M.A. (Cognitive Science, Society and Culture), Ph.D.

## Admission
B.Tech through JEE Advanced. M.Tech via GATE. MA programmes through GATE and other scores.`,
    type: 'institute',
    category: 'iit',
    city: 'Gandhinagar',
    state: 'Gujarat',
    countryId: 'IN',
    established: 2008,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Advanced', 'GATE', 'JAM'],
    courseIds: [],
    website: 'https://www.iitgn.ac.in',
    tags: ['iit gandhinagar', 'iitgn', 'gandhinagar', 'gujarat', 'jee advanced', 'engineering', 'liberal arts'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-iit-indore',
    slug: 'iit-indore',
    name: 'Indian Institute of Technology Indore',
    shortName: 'IIT Indore',
    description: 'Second-generation IIT (2009) in Simrol, Indore, MP — known for strong research output, a growing number of departments, and a fast-developing permanent campus.',
    guide: `## About IIT Indore
IIT Indore (IITI), established in 2009, is located on a 501-acre permanent campus in Simrol, Indore, Madhya Pradesh. Ranked consistently among the better new-generation IITs, IITI has established strong research programmes and grown its department count rapidly.

## Programmes
B.Tech in CS, EE, ME, CE, Chemical Engineering, Metallurgy, Mathematics & Computing, Economics. M.Tech, M.Sc, Ph.D.

## Research
IIT Indore has strong research groups in photonics, quantum computing, materials science, and AI. The institute publishes research in top international journals and attracts funding from DST, SERB, and international agencies.

## Admission
B.Tech through JEE Advanced. M.Tech via GATE. M.Sc via JAM. The CS branch at IIT Indore typically requires JEE Advanced rank under 3500.`,
    type: 'institute',
    category: 'iit',
    city: 'Indore',
    state: 'Madhya Pradesh',
    countryId: 'IN',
    established: 2009,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Advanced', 'GATE', 'JAM'],
    courseIds: [],
    website: 'https://www.iiti.ac.in',
    tags: ['iit indore', 'iiti', 'indore', 'madhya pradesh', 'jee advanced', 'engineering'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-iit-jodhpur',
    slug: 'iit-jodhpur',
    name: 'Indian Institute of Technology Jodhpur',
    shortName: 'IIT Jodhpur',
    description: 'New-generation IIT (2008) in Karwar, Jodhpur, Rajasthan — known for its desert campus architecture, growing STEM research, and programmes in AI & Data Science.',
    guide: `## About IIT Jodhpur
IIT Jodhpur (IITJ), established in 2008, is located on a 852-acre campus in Karwar, about 30 km from Jodhpur city centre, Rajasthan. The campus architecture is inspired by Rajasthani fort design — a distinctive visual identity among IITs.

## Programmes
B.Tech in CS (with AI/ML specialisation), EE, ME, Bioscience, Chemistry. M.Tech, M.Sc (AI & Data Science, Physics, Chemistry), Ph.D. IIT Jodhpur also offers one of the few dedicated B.Tech in AI & Data Science programmes among IITs.

## Admission
B.Tech through JEE Advanced. M.Tech via GATE. M.Sc via JAM. The AI & Data Science B.Tech programme has attracted strong JEE ranks.

## Desert Research Hub
IIT Jodhpur has active research in solar energy, water management, and desert ecosystem sciences — leveraging its Thar Desert location for real-world sustainability research.`,
    type: 'institute',
    category: 'iit',
    city: 'Jodhpur',
    state: 'Rajasthan',
    countryId: 'IN',
    established: 2008,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Advanced', 'GATE', 'JAM'],
    courseIds: [],
    website: 'https://www.iitj.ac.in',
    tags: ['iit jodhpur', 'iitj', 'jodhpur', 'rajasthan', 'jee advanced', 'engineering', 'ai data science'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-iit-patna',
    slug: 'iit-patna',
    name: 'Indian Institute of Technology Patna',
    shortName: 'IIT Patna',
    description: 'Second-generation IIT (2008) in Bihta, Patna, Bihar — serving Eastern India with growing departments in engineering and sciences and an emerging research culture.',
    guide: `## About IIT Patna
IIT Patna (IITP), established in 2008, is located on a 501-acre campus in Bihta, approximately 30 km from Patna city, Bihar. It serves students from Bihar and the broader Eastern India region and has established a reputation for quality engineering education.

## Programmes
B.Tech in CS, EE, ME, CE, Chemical Engineering, Mathematics & Computing. M.Tech, M.Sc (Mathematics, Chemistry, Physics), Ph.D.

## Admission
B.Tech through JEE Advanced. M.Tech via GATE. M.Sc via JAM.

## Research & Industry Connect
IIT Patna has active MoUs with PSUs and technology companies, and maintains good placement records in IT, core engineering, and research sectors. The institute hosts several DST-funded research projects in AI, materials science, and microelectronics.`,
    type: 'institute',
    category: 'iit',
    city: 'Patna',
    state: 'Bihar',
    countryId: 'IN',
    established: 2008,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Advanced', 'GATE', 'JAM'],
    courseIds: [],
    website: 'https://www.iitp.ac.in',
    tags: ['iit patna', 'iitp', 'patna', 'bihar', 'jee advanced', 'engineering', 'eastern india'],
    updatedAt: '2026-09-01',
  },

  // ── Central Universities (3) ──────────────────────────────────────────
  {
    id: 'inst-jnu-delhi',
    slug: 'jnu-delhi',
    name: 'Jawaharlal Nehru University',
    shortName: 'JNU Delhi',
    description: 'India\'s premier research university (NIRF #3 Overall), located in New Delhi — renowned for social sciences, humanities, international studies, and strong postgraduate research culture.',
    guide: `## About JNU
Jawaharlal Nehru University (JNU), established in 1969, is located on a 1,019-acre campus in South-West Delhi. Ranked #3 overall in NIRF, JNU is India's foremost research-oriented university, particularly in social sciences, humanities, languages, and international studies. It is a central university under the Ministry of Education.

## Schools and Programmes
JNU has 11 Schools covering International Studies, Social Sciences, Language, Literature & Culture Studies, Life Sciences, Physical Sciences, Computer & Systems Sciences, and more. Admission is primarily to postgraduate (M.A., M.Sc.) and doctoral (M.Phil/Ph.D) programmes.

## Unique Culture
JNU is known for its highly subsidised residential programme (among India's most affordable), a vibrant intellectual and political culture, and an exceptionally high research publication rate per faculty. The campus hosts 9,000+ students and 600+ faculty.

## Admission
M.A./M.Sc through CUET-PG (Common University Entrance Test — Postgraduate). Ph.D through JNUET (JNU Entrance Test). The campus is highly competitive — admission in many programmes requires a top CUET rank.`,
    type: 'university',
    category: 'central-university',
    city: 'New Delhi',
    state: 'Delhi',
    countryId: 'IN',
    established: 1969,
    nirfRank: 3,
    naacGrade: 'A++',
    programmeIds: ['prog-ma', 'prog-msc', 'prog-phd'],
    streamIds: ['stream-arts', 'stream-science'],
    admissionExams: ['CUET-PG', 'JNUET'],
    courseIds: [],
    website: 'https://www.jnu.ac.in',
    tags: ['jnu', 'jawaharlal nehru university', 'new delhi', 'social sciences', 'humanities', 'cuet', 'nirf rank 3', 'central university'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-du-delhi',
    slug: 'university-of-delhi',
    name: 'University of Delhi',
    shortName: 'Delhi University',
    description: 'India\'s largest central university (est. 1922) with 90 colleges and 3 lakh+ students — offering undergraduate and postgraduate programmes across all streams through CUET.',
    guide: `## About Delhi University
University of Delhi (DU), established in 1922, is India's largest and most geographically diverse central university. With 90+ affiliated colleges across Delhi (North Campus: Hindu, Miranda, St. Stephen's, Ramjas; South Campus: Lady Shri Ram, SRCC, Gargi, etc.), DU educates over 3 lakh students at any given time.

## Key Colleges
- **For Science/Commerce:** SRCC (commerce), Hindu College, Kirori Mal
- **For Humanities:** Lady Shri Ram (LSR), Miranda House, Hindu College
- **For Professional:** Faculty of Law (LLB), Faculty of Medical Sciences
- Miranda House and LSR consistently rank among India's top colleges in NIRF

## Programmes
B.A., B.Sc., B.Com., B.Tech (limited), LLB, M.A., M.Sc., M.Com., Ph.D, and many others across 90+ colleges. DU offers 4-year B.Sc./ B.A. programmes under the NEP 2020 framework.

## Admission
CUET-UG (Common University Entrance Test — Undergraduate) for all UG admissions since 2022. Cut-offs at top colleges like SRCC and Miranda House are among the highest in India (often 99%+ in Class 12 plus high CUET score).`,
    type: 'university',
    category: 'central-university',
    city: 'New Delhi',
    state: 'Delhi',
    countryId: 'IN',
    established: 1922,
    nirfRank: 11,
    naacGrade: 'A++',
    programmeIds: ['prog-ba', 'prog-bsc', 'prog-bcom', 'prog-ma', 'prog-msc', 'prog-phd', 'prog-ballb'],
    streamIds: ['stream-arts', 'stream-science', 'stream-commerce', 'stream-law'],
    admissionExams: ['CUET-UG', 'CUET-PG'],
    courseIds: [],
    website: 'https://www.du.ac.in',
    tags: ['delhi university', 'du', 'north campus', 'south campus', 'cuet', 'srcc', 'miranda house', 'new delhi', 'central university'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-hcu-hyderabad',
    slug: 'hyderabad-central-university',
    name: 'University of Hyderabad',
    shortName: 'Hyderabad Central University',
    description: 'Central University of Hyderabad (est. 1974) — a leading research university in Social Sciences, Humanities, and Sciences, consistently ranked among India\'s top 10 universities.',
    guide: `## About University of Hyderabad
University of Hyderabad (UoH), also known as Hyderabad Central University (HCU), established in 1974, is a premier central university located on a 2,300-acre campus in Gachibowli, Hyderabad, Telangana. Ranked consistently in India's top 10 universities (NIRF), UoH is particularly strong in social sciences, humanities, computational linguistics, and life sciences.

## Schools and Departments
UoH has 16 Schools including: School of Social Sciences, School of Humanities, School of Physics, School of Life Sciences, School of Computer & Information Sciences, School of Chemistry, School of Economics, and School of Communication.

## Research Culture
UoH has produced many national award-winning researchers and is known for its doctoral programmes. The Centre for Neural and Cognitive Sciences and Department of Computational Linguistics have national reputations.

## Admission
CUET-PG for M.A./M.Sc programmes. UoH also uses its own UHRH (UoH Research/Honours) tests for some programmes. Ph.D through UoH Entrance Test.`,
    type: 'university',
    category: 'central-university',
    city: 'Hyderabad',
    state: 'Telangana',
    countryId: 'IN',
    established: 1974,
    nirfRank: 9,
    naacGrade: 'A+',
    programmeIds: ['prog-ma', 'prog-msc', 'prog-phd'],
    streamIds: ['stream-arts', 'stream-science'],
    admissionExams: ['CUET-PG'],
    courseIds: [],
    website: 'https://www.uohyd.ac.in',
    tags: ['hyderabad central university', 'hcu', 'university of hyderabad', 'uoh', 'hyderabad', 'telangana', 'central university', 'social sciences'],
    updatedAt: '2026-09-01',
  },

  // ── More NITs (4) ─────────────────────────────────────────────────────
  {
    id: 'inst-nit-durgapur',
    slug: 'nit-durgapur',
    name: 'National Institute of Technology Durgapur',
    shortName: 'NIT Durgapur',
    description: 'NIT Durgapur (est. 1960) in West Bengal — one of the oldest NITs, known for metallurgy, mining, and chemical engineering, with strong placement in core industries and IT.',
    guide: `## About NIT Durgapur
National Institute of Technology Durgapur (NITD), established in 1960 as Regional Engineering College Durgapur, is one of India's oldest NITs. Located in the industrial town of Durgapur, West Bengal, NITD is particularly strong in metallurgical, chemical, and mining engineering — reflecting the steel and mining industry belt surrounding it.

## Programmes
B.Tech in CS, EE, ME, CE, Chemical Engineering, Metallurgy, Biotech. M.Tech, MCA, M.Sc, MBA, Ph.D.

## Admission
B.Tech through JEE Main; NIT rank-wise typically requires Rank 8,000–25,000 depending on branch. M.Tech via GATE.

## Placements
NIT Durgapur has strong placement in core industries (Tata Steel, SAIL, ONGC) and IT companies (TCS, Infosys, Wipro, Cognizant). Being in West Bengal also gives access to Kolkata's growing IT sector.`,
    type: 'institute',
    category: 'nit',
    city: 'Durgapur',
    state: 'West Bengal',
    countryId: 'IN',
    established: 1960,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd', 'prog-mba'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Main', 'GATE'],
    courseIds: [],
    website: 'https://www.nitdgp.ac.in',
    tags: ['nit durgapur', 'nitd', 'durgapur', 'west bengal', 'jee main', 'engineering', 'metallurgy'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-mnnit-allahabad',
    slug: 'mnnit-allahabad',
    name: 'Motilal Nehru National Institute of Technology Allahabad',
    shortName: 'MNNIT Allahabad',
    description: 'MNNIT Allahabad (est. 1961) — one of the oldest and most prestigious NITs, located in Prayagraj (Allahabad), UP, known for strong CS and EE departments and Allahabad-region academia connections.',
    guide: `## About MNNIT Allahabad
Motilal Nehru National Institute of Technology (MNNIT) Allahabad, established in 1961 as MNREC, is located in Prayagraj, Uttar Pradesh. One of the top NITs in India, MNNIT is named after Motilal Nehru and is particularly known for its Computer Science, Electronics, and Electrical Engineering departments.

## Programmes
B.Tech in CS, ECE, EE, ME, CE, Chemical, Production & Industrial, Biotechnology, Information Technology. M.Tech, MCA, M.Sc (Mathematics, Physics, Chemistry), MBA, Ph.D.

## Admission
B.Tech through JEE Main; typical rank for CS: 3,000–8,000. M.Tech via GATE. MCA through NIMCET.

## Academia Connection
MNNIT benefits from its location in Prayagraj, home to Allahabad University (one of India's oldest universities), IIM Lucknow (nearby), and CDRI. This academic cluster creates strong networks for research and higher education pathways.`,
    type: 'institute',
    category: 'nit',
    city: 'Prayagraj',
    state: 'Uttar Pradesh',
    countryId: 'IN',
    established: 1961,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd', 'prog-mba', 'prog-mca'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Main', 'GATE', 'NIMCET'],
    courseIds: [],
    website: 'https://www.mnnit.ac.in',
    tags: ['mnnit allahabad', 'mnnit', 'prayagraj', 'allahabad', 'uttar pradesh', 'jee main', 'engineering', 'nit'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-nit-kurukshetra',
    slug: 'nit-kurukshetra',
    name: 'National Institute of Technology Kurukshetra',
    shortName: 'NIT Kurukshetra',
    description: 'NIT Kurukshetra (est. 1963) in Haryana — known for strong electrical, mechanical, and civil engineering departments, with good PSU placement due to proximity to Delhi-NCR.',
    guide: `## About NIT Kurukshetra
National Institute of Technology Kurukshetra (NIT KKR), established in 1963 as Regional Engineering College Kurukshetra, is located in Kurukshetra, Haryana. It is one of the well-regarded NITs, particularly known for Electrical, Mechanical, Civil, and Computer Science engineering.

## Programmes
B.Tech in CS, EE, ME, CE, ECE, Chemical, IT. M.Tech, MCA, MBA, M.Sc (Physics, Maths, Chemistry), Ph.D.

## Admission
B.Tech through JEE Main; typical rank: 5,000–20,000 depending on branch. M.Tech via GATE.

## Location Advantage
Located 170 km from Delhi, NIT Kurukshetra benefits from proximity to Delhi-NCR's industrial and IT belt. PSU recruitment (BHEL, Power Grid, NTPC) is strong due to Haryana's power and manufacturing industries. The campus is adjacent to the historic Kurukshetra city — home to one of India's most significant heritage sites.`,
    type: 'institute',
    category: 'nit',
    city: 'Kurukshetra',
    state: 'Haryana',
    countryId: 'IN',
    established: 1963,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd', 'prog-mba', 'prog-mca'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Main', 'GATE'],
    courseIds: [],
    website: 'https://www.nitkkr.ac.in',
    tags: ['nit kurukshetra', 'nitkkr', 'kurukshetra', 'haryana', 'jee main', 'engineering', 'nit'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-nit-silchar',
    slug: 'nit-silchar',
    name: 'National Institute of Technology Silchar',
    shortName: 'NIT Silchar',
    description: 'NIT Silchar (est. 1967) in Assam — the premier NIT in Northeast India, serving students from the 8 North-Eastern states with strong engineering and science programmes.',
    guide: `## About NIT Silchar
National Institute of Technology Silchar (NIT Silchar), established in 1967 as Regional Engineering College Silchar, is located in Silchar, Assam. As the premier technical institution in Northeast India, NIT Silchar plays a critical role in providing quality engineering education to students from Assam, Manipur, Nagaland, Meghalaya, Tripura, Mizoram, Arunachal Pradesh, and Sikkim.

## Programmes
B.Tech in CS, ECE, EE, ME, CE, Chemical Engineering, Electronics & Instrumentation, Maths & Computing. M.Tech, MCA, M.Sc, Ph.D.

## Admission
B.Tech through JEE Main. M.Tech via GATE.

## Northeast India Hub
NIT Silchar is the only NIT in the Barak Valley region and has a special intake quota for students from NE states. The campus has a strong alumni network in IT and PSUs, and maintains placement partnerships with Tata Consultancy Services, Infosys, Wipro, and government enterprises.`,
    type: 'institute',
    category: 'nit',
    city: 'Silchar',
    state: 'Assam',
    countryId: 'IN',
    established: 1967,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd', 'prog-mca'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Main', 'GATE'],
    courseIds: [],
    website: 'https://www.nits.ac.in',
    tags: ['nit silchar', 'nits', 'silchar', 'assam', 'northeast india', 'jee main', 'engineering', 'nit'],
    updatedAt: '2026-09-01',
  },

  // ── Regional AIIMS (2) ────────────────────────────────────────────────
  {
    id: 'inst-aiims-bhopal',
    slug: 'aiims-bhopal',
    name: 'All India Institute of Medical Sciences Bhopal',
    shortName: 'AIIMS Bhopal',
    description: 'Regional AIIMS (est. 2012) in Madhya Pradesh — one of the 6 new AIIMS set up under PMSSY, offering MBBS, MD/MS, and Ph.D programmes in a modern campus in Saket Nagar, Bhopal.',
    guide: `## About AIIMS Bhopal
All India Institute of Medical Sciences (AIIMS) Bhopal, established in 2012 under the Pradhan Mantri Swasthya Suraksha Yojana (PMSSY), is located in Saket Nagar, Bhopal, Madhya Pradesh. It is one of six regional AIIMS established simultaneously to bring AIIMS-quality medical education to different regions of India.

## Programmes
- **MBBS:** 5.5-year programme (4.5 years academic + 1 year internship); 100 seats
- **MD/MS/MCh/DM:** Postgraduate medical specialisation
- **B.Sc (Nursing), B.Sc (Paramedical)**
- **Ph.D:** In Basic Medical Sciences

## Admission
MBBS through NEET-UG (National Eligibility cum Entrance Test — Undergraduate). PG through NEET-PG / INI-CET.

## Central India Coverage
AIIMS Bhopal is the primary super-speciality healthcare reference centre for Madhya Pradesh and Chhattisgarh. It provides tertiary care across Oncology, Cardiology, Neurology, and Trauma, alongside teaching and research functions.`,
    type: 'institute',
    category: 'aiims',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    countryId: 'IN',
    established: 2012,
    programmeIds: ['prog-mbbs', 'prog-phd'],
    streamIds: ['stream-medical'],
    admissionExams: ['NEET-UG', 'NEET-PG', 'INI-CET'],
    courseIds: [],
    website: 'https://www.aiimsbhopal.edu.in',
    tags: ['aiims bhopal', 'aiims', 'bhopal', 'madhya pradesh', 'neet', 'mbbs', 'medical', 'pmssy'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-aiims-jodhpur',
    slug: 'aiims-jodhpur',
    name: 'All India Institute of Medical Sciences Jodhpur',
    shortName: 'AIIMS Jodhpur',
    description: 'Regional AIIMS (est. 2012) in Basni, Jodhpur, Rajasthan — serving Western Rajasthan and providing tertiary healthcare, MBBS education, and medical research in the desert region.',
    guide: `## About AIIMS Jodhpur
All India Institute of Medical Sciences (AIIMS) Jodhpur, established in 2012 under PMSSY, is located in Basni Phase 2, Jodhpur, Rajasthan. It is the premier medical institution in Western Rajasthan, providing MBBS and postgraduate medical education alongside super-speciality clinical care.

## Programmes
- **MBBS:** 5.5-year programme; 100 seats per year
- **MD/MS/MCh/DM:** Postgraduate medical specialisation
- **B.Sc Nursing, B.Sc Paramedical**
- **Ph.D:** Basic Medical Sciences

## Admission
MBBS through NEET-UG. PG through NEET-PG / INI-CET. AIIMS Jodhpur has an OPD of 2,000+ patients/day and serves as the tertiary referral hospital for Rajasthan's desert western districts.

## Desert Medicine Research
AIIMS Jodhpur has active research in heat-related illnesses, snake envenomation (prevalent in desert ecosystems), fluorosis, and diseases common to arid environments — contributing uniquely to the national medical knowledge base.`,
    type: 'institute',
    category: 'aiims',
    city: 'Jodhpur',
    state: 'Rajasthan',
    countryId: 'IN',
    established: 2012,
    programmeIds: ['prog-mbbs', 'prog-phd'],
    streamIds: ['stream-medical'],
    admissionExams: ['NEET-UG', 'NEET-PG', 'INI-CET'],
    courseIds: [],
    website: 'https://www.aiimsjodhpur.edu.in',
    tags: ['aiims jodhpur', 'aiims', 'jodhpur', 'rajasthan', 'neet', 'mbbs', 'medical', 'pmssy'],
    updatedAt: '2026-09-01',
  },

  // ── More IISERs (2) ───────────────────────────────────────────────────
  {
    id: 'inst-iiser-bhopal',
    slug: 'iiser-bhopal',
    name: 'Indian Institute of Science Education and Research Bhopal',
    shortName: 'IISER Bhopal',
    description: 'IISER Bhopal (est. 2008) in Madhya Pradesh — one of 7 IISERs dedicated to science research and education, offering BS-MS dual degree and Ph.D programmes.',
    guide: `## About IISER Bhopal
Indian Institute of Science Education and Research (IISER) Bhopal, established in 2008, is located on a 200-acre permanent campus in Bhauri, Bhopal, Madhya Pradesh. Like all IISERs, it is dedicated to research-integrated science education and does not offer engineering or management programmes.

## Programmes
- **BS-MS (5-year dual degree):** The flagship programme integrating B.Sc + M.Sc in Biology, Chemistry, Physics, Mathematics, Earth & Environmental Sciences, and Interdisciplinary disciplines
- **Ph.D:** In all science disciplines
- **iPhD:** Integrated Ph.D (direct entry from B.Sc)

## Admission
BS-MS through KVPY (Kishore Vaigyanik Protsahan Yojana) / IISER Aptitude Test (IAT) / JEE Advanced. Ph.D through CSIR-NET, GATE, JEST, or IISER own test.

## Research
IISER Bhopal has active research groups in quantum materials, chemical biology, astrophysics, and atmospheric science. The institute publishes in top international journals and has an active SURGE summer research programme for UG students.`,
    type: 'institute',
    category: 'iiser',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    countryId: 'IN',
    established: 2008,
    programmeIds: ['prog-msc', 'prog-phd'],
    streamIds: ['stream-science'],
    admissionExams: ['IAT', 'JEE Advanced', 'KVPY', 'CSIR-NET', 'GATE'],
    courseIds: [],
    website: 'https://www.iiserb.ac.in',
    tags: ['iiser bhopal', 'iiserb', 'bhopal', 'madhya pradesh', 'science', 'research', 'bs-ms', 'iat'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-iiser-tirupati',
    slug: 'iiser-tirupati',
    name: 'Indian Institute of Science Education and Research Tirupati',
    shortName: 'IISER Tirupati',
    description: 'IISER Tirupati (est. 2015) in Andhra Pradesh — youngest of the IISERs, with a developing campus and growing BS-MS and Ph.D programmes in pure and applied sciences.',
    guide: `## About IISER Tirupati
Indian Institute of Science Education and Research (IISER) Tirupati, established in 2015, is located in Tirupati, Andhra Pradesh. It is the 7th and newest IISER, still in an early-growth phase compared to its predecessors. The institute operates from a transitional campus while its permanent campus is being built.

## Programmes
- **BS-MS (5-year dual degree):** Biology, Chemistry, Physics, Mathematics, Data Science and Interdisciplinary Sciences
- **Ph.D:** In core science disciplines

## Admission
BS-MS through IISER Aptitude Test (IAT) / JEE Advanced / KVPY. Ph.D through CSIR-NET, GATE, JEST.

## Growing Institution
Despite being young, IISER Tirupati has attracted dedicated faculty and builds on IISER Hyderabad's mentoring. Being in Tirupati — a major pilgrimage city in AP — creates an unusual academic environment. Research focus includes materials science, computational biology, and physics of living systems.`,
    type: 'institute',
    category: 'iiser',
    city: 'Tirupati',
    state: 'Andhra Pradesh',
    countryId: 'IN',
    established: 2015,
    programmeIds: ['prog-msc', 'prog-phd'],
    streamIds: ['stream-science'],
    admissionExams: ['IAT', 'JEE Advanced', 'KVPY', 'CSIR-NET', 'GATE'],
    courseIds: [],
    website: 'https://www.iisertirupati.ac.in',
    tags: ['iiser tirupati', 'iiser ap', 'tirupati', 'andhra pradesh', 'science', 'research', 'bs-ms', 'iat'],
    updatedAt: '2026-09-01',
  },

  // ── More NLUs (2) ─────────────────────────────────────────────────────
  {
    id: 'inst-nliu-bhopal',
    slug: 'nliu-bhopal',
    name: 'National Law Institute University Bhopal',
    shortName: 'NLIU Bhopal',
    description: 'NLIU Bhopal (est. 1997) — NIRF #7 NLU in Madhya Pradesh, offering a 5-year BA LLB through CLAT and known for corporate law and human rights specialisations.',
    guide: `## About NLIU Bhopal
National Law Institute University (NLIU) Bhopal, established in 1997, is located in Bhopal, Madhya Pradesh. It is ranked #7 in NIRF Law and is one of the original National Law Universities established across India to provide standardised quality legal education.

## Programmes
- **5-year BA LLB (Hons.):** The flagship programme admitted through CLAT
- **LLM:** 1-year postgraduate law programme (specialisations in Corporate Law, Criminal Law, Human Rights)
- **Ph.D in Law**

## Admission
5-year BA LLB through CLAT. NLIU Bhopal typically requires top 600–800 CLAT ranks for general category. LLM through CLAT-PG.

## Strengths
NLIU Bhopal is known for its Corporate Law and Human Rights Law faculty. Its Moot Court Committee and Legal Aid Clinic are active student bodies. The institute maintains strong alumni presence in Madhya Pradesh's High Court and corporate law firms.`,
    type: 'institute',
    category: 'nlu',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    countryId: 'IN',
    established: 1997,
    nirfRank: 7,
    programmeIds: ['prog-ballb', 'prog-llm', 'prog-phd'],
    streamIds: ['stream-law'],
    admissionExams: ['CLAT', 'CLAT-PG'],
    courseIds: [],
    website: 'https://www.nliu.ac.in',
    tags: ['nliu bhopal', 'nliu', 'bhopal', 'madhya pradesh', 'law', 'clat', 'llb', 'nirf rank 7 law'],
    updatedAt: '2026-09-01',
  },

  {
    id: 'inst-hnlu-raipur',
    slug: 'hnlu-raipur',
    name: 'Hidayatullah National Law University Raipur',
    shortName: 'HNLU Raipur',
    description: 'HNLU Raipur (est. 2003) in Chhattisgarh — NIRF #5 NLU, known for constitutional law, labour law, and its location in India\'s tribal belt, offering unique perspectives on access to justice.',
    guide: `## About HNLU Raipur
Hidayatullah National Law University (HNLU) Raipur, established in 2003, is located in Raipur, Chhattisgarh. Named after Justice Mohammad Hidayatullah (17th Chief Justice of India and 6th Vice President), HNLU is ranked #5 in NIRF Law.

## Programmes
- **5-year BA LLB (Hons.):** Through CLAT; batch ~120/year
- **LLM:** 1-year PG law (specialisations in Business Laws, Criminal Justice, Constitutional & Administrative Law)
- **Ph.D in Law**

## Admission
5-year BA LLB through CLAT. HNLU typically requires top 500–600 CLAT ranks for general category.

## Distinctive Perspective
Located in Chhattisgarh, HNLU has a distinctive focus on tribal laws, forest rights, labour laws, and natural resource management — areas highly relevant to the legal landscape of Central India. Its Human Rights and Access to Justice programmes are nationally recognised.`,
    type: 'institute',
    category: 'nlu',
    city: 'Raipur',
    state: 'Chhattisgarh',
    countryId: 'IN',
    established: 2003,
    nirfRank: 5,
    programmeIds: ['prog-ballb', 'prog-llm', 'prog-phd'],
    streamIds: ['stream-law'],
    admissionExams: ['CLAT', 'CLAT-PG'],
    courseIds: [],
    website: 'https://www.hnlu.ac.in',
    tags: ['hnlu raipur', 'hnlu', 'raipur', 'chhattisgarh', 'law', 'clat', 'llb', 'nirf rank 5 law', 'tribal law'],
    updatedAt: '2026-09-01',
  },
];
