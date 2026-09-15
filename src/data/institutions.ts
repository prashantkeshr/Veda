import type { Institution } from '../models';

export const institutionsData: Institution[] = [
  // ── IITs (23) ────────────────────────────────────────────────────────
  {
    id: 'inst-iit-madras',
    slug: 'iit-madras',
    name: 'Indian Institute of Technology Madras',
    shortName: 'IIT Madras',
    description: 'India\'s top-ranked engineering institution (NIRF #1 overall 2023–24), located in Chennai, known for research excellence and premier placement outcomes.',
    guide: `## About IIT Madras
IIT Madras, established in 1959 with assistance from the West German government, is consistently ranked #1 in India's NIRF Engineering and Overall rankings. Located in a 617-acre wooded campus in Chennai, Tamil Nadu, IIT Madras is a pioneer in research-led engineering education.

## Programmes Offered
IIT Madras offers B.Tech (4 years), M.Tech (2 years), MBA, M.Sc, M.A., and Ph.D across all major engineering disciplines and sciences. The Dual Degree (B.Tech + M.Tech) in 5 years is a popular choice for meritorious students.

## Research and Innovation
IIT Madras has over 500 ongoing research projects funded by government and industry. Its Research Park (IITMRP) is India's first university-anchored research park, hosting 250+ companies. Key research areas: AI/ML, clean energy, ocean engineering, and healthcare technology.

## Admission
B.Tech admission is through JEE Advanced (top ~2500 rank for most branches). PG admissions via GATE (M.Tech), JAM (M.Sc), CAT (MBA), and CSAB.

## Campus Life
The fully residential campus houses deer, peacocks, and bonnet macaques — IITM is one of the very few urban universities with a significant wildlife sanctuary within its campus. Sports facilities, cultural events (Shaastra, Saarang), and ~160 student clubs make for an active student life.`,
    type: 'institute',
    category: 'iit',
    city: 'Chennai',
    state: 'Tamil Nadu',
    countryId: 'IN',
    established: 1959,
    nirfRank: 1,
    naacGrade: 'A++',
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd', 'prog-mba'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Advanced', 'GATE', 'JAM', 'CAT'],
    courseIds: [],
    website: 'https://www.iitm.ac.in',
    tags: ['iit madras', 'iit', 'chennai', 'nirf rank 1', 'jee advanced', 'engineering', 'research'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'inst-iit-delhi',
    slug: 'iit-delhi',
    name: 'Indian Institute of Technology Delhi',
    shortName: 'IIT Delhi',
    description: 'NIRF #2 engineering institution, located in South Delhi, known for its diverse research portfolio, startup ecosystem, and proximity to India\'s capital policy landscape.',
    guide: `## About IIT Delhi
Indian Institute of Technology Delhi (IITD), established in 1961, is located on a 325-acre campus in Hauz Khas, South Delhi. Consistently ranked #2 in India (NIRF), IIT Delhi is renowned for its strong industry connections, entrepreneurship ecosystem, and location advantage in the capital city.

## Programmes
B.Tech (4 years) in Computer Science, Electrical, Mechanical, Civil, Chemical, Biochemical Engineering and more. Dual Degree (B.Tech + M.Tech, 5 years). M.Tech, MBA (DMS), M.Sc, and Ph.D programmes across all departments.

## Research Excellence
IIT Delhi has over 500 faculty members working in cutting-edge research areas including semiconductor technology, AI, renewable energy, biomedical engineering, and textile technology. Its Bharti School of Telecom and Kusuma School of Biological Sciences are nationally prominent.

## Entrepreneurship
IIT Delhi's Foundation for Innovation and Technology Transfer (FITT) and Entrepreneurship Cell (E-Cell) have spawned 200+ startups. Notable alumni companies include InMobi, Housing.com, and UrbanClap.

## Admission
B.Tech through JEE Advanced. The Computer Science branch at IIT Delhi typically requires a JEE Advanced rank within top 100.`,
    type: 'institute',
    category: 'iit',
    city: 'New Delhi',
    state: 'Delhi',
    countryId: 'IN',
    established: 1961,
    nirfRank: 2,
    naacGrade: 'A++',
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd', 'prog-mba'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Advanced', 'GATE', 'JAM', 'CAT'],
    courseIds: [],
    website: 'https://home.iitd.ac.in',
    tags: ['iit delhi', 'iit', 'delhi', 'nirf rank 2', 'jee advanced', 'engineering'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'inst-iit-bombay',
    slug: 'iit-bombay',
    name: 'Indian Institute of Technology Bombay',
    shortName: 'IIT Bombay',
    description: 'NIRF #3, located in Mumbai, one of India\'s most prestigious engineering institutes — known for entrepreneurship, diversity, and world-class research.',
    guide: `## About IIT Bombay
Indian Institute of Technology Bombay (IITB), established in 1958 in Powai, Mumbai, is NIRF #3 and one of Asia's leading technical universities. With over 14,000 students and 620+ faculty, IIT Bombay is known for its research-intensive culture and vibrant student community.

## Programmes
B.Tech, Dual Degree (B.Tech+M.Tech), M.Tech, M.Sc, MBA (SJMSOM), MPhil, and Ph.D. The Computer Science and Electrical Engineering branches are among the most sought-after in the country.

## Research and Innovation
IIT Bombay's research spans nanoscience, energy systems, biosciences, AI, data science, and humanities. The SINE (Society for Innovation and Entrepreneurship) has incubated 250+ startups.

## Cultural Life
Techfest (Asia's largest science & technology festival) and Mood Indigo (Asia's largest college cultural festival) are iconic events. Mumbai's proximity adds networking advantages with India's financial capital.

## Admission
B.Tech through JEE Advanced — CSE branch requires approximately top 60–80 JEE Advanced rank. IIT Bombay is the most preferred IIT in JoSAA counselling due to Mumbai's appeal.`,
    type: 'institute',
    category: 'iit',
    city: 'Mumbai',
    state: 'Maharashtra',
    countryId: 'IN',
    established: 1958,
    nirfRank: 3,
    naacGrade: 'A++',
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd', 'prog-mba'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Advanced', 'GATE', 'JAM', 'CAT'],
    courseIds: [],
    website: 'https://www.iitb.ac.in',
    tags: ['iit bombay', 'iit', 'mumbai', 'powai', 'nirf rank 3', 'techfest', 'mood indigo'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'inst-iit-kanpur',
    slug: 'iit-kanpur',
    name: 'Indian Institute of Technology Kanpur',
    shortName: 'IIT Kanpur',
    description: 'NIRF #4, established in 1959 in Kanpur, UP — India\'s pioneer in computer science education and known for foundational engineering research.',
    guide: `## About IIT Kanpur
Indian Institute of Technology Kanpur (IITK), established in 1959, was the first institution in India to offer computer science education (1963) and PhD in Computer Science. Located in Kanpur, Uttar Pradesh, IITK is a research powerhouse known for foundational contributions across disciplines.

## Programmes
B.Tech (4 years), Dual Degree (B.Tech+M.Tech, 5 years), M.Tech, M.Sc, MBA, and Ph.D. IITK has a unique open elective system giving students flexibility to explore interdisciplinary courses.

## Research Strengths
Aerospace Engineering (one of few IITs offering AE), Materials Science, Nuclear Engineering, and Computer Science are particularly strong. IITK houses India's first Unmanned Aerial Vehicle research centre.

## IITK Alumni Impact
Alumni include prominent scientists, entrepreneurs, and industry leaders including Narayan Murthy (Infosys co-founder), Prithviraj Chavan (former CM Maharashtra), and P.V. Narasimha Rao connections.

## Admission
B.Tech through JEE Advanced. IITK is known for its rigorous curriculum and academic culture emphasising problem-solving over rote learning.`,
    type: 'institute',
    category: 'iit',
    city: 'Kanpur',
    state: 'Uttar Pradesh',
    countryId: 'IN',
    established: 1959,
    nirfRank: 4,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd', 'prog-mba'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Advanced', 'GATE', 'JAM'],
    courseIds: [],
    website: 'https://www.iitk.ac.in',
    tags: ['iit kanpur', 'iit', 'kanpur', 'uttar pradesh', 'nirf rank 4', 'computer science pioneer'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'inst-iit-kharagpur',
    slug: 'iit-kharagpur',
    name: 'Indian Institute of Technology Kharagpur',
    shortName: 'IIT Kharagpur',
    description: 'India\'s oldest IIT (1951), largest campus (2,100 acres), and NIRF #5 — the founding institute of the IIT system with widest programme diversity.',
    guide: `## About IIT Kharagpur
Indian Institute of Technology Kharagpur (IIT KGP), established in 1951, was the first IIT in India and remains the largest in terms of campus size (2,100 acres) and programme diversity. Located in Kharagpur, West Bengal, IIT KGP has 22 academic departments and 11 multi-disciplinary centres.

## Unique Programmes
IIT KGP offers unique programmes not found at most other IITs: Integrated M.Tech, BArch, Law (BBA+LLB), and specialisations in Mining Engineering, Ocean Engineering & Naval Architecture, and Geo-exploration.

## Research Heritage
IIT KGP alumni include Vinod Khosla (Sun Microsystems co-founder), Sundar Pichai (CEO, Alphabet/Google), and IAS/IPS officers of distinction. The institute has over 100 fully equipped research laboratories.

## Campus Life
The residential campus has multiple halls of residence (halls) with vibrant Spring Fest and Kshitij cultural and technical festivals. With a fully self-contained township structure, IIT KGP offers a unique residential campus experience.

## Admission
B.Tech and Integrated programmes through JEE Advanced. IIT KGP is noted for having both engineering and architecture programmes accessible via JEE.`,
    type: 'institute',
    category: 'iit',
    city: 'Kharagpur',
    state: 'West Bengal',
    countryId: 'IN',
    established: 1951,
    nirfRank: 5,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd', 'prog-barch'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Advanced', 'GATE', 'JAM'],
    courseIds: [],
    website: 'https://www.iitkgp.ac.in',
    tags: ['iit kharagpur', 'iit', 'kharagpur', 'west bengal', 'oldest iit', 'nirf rank 5', 'sundar pichai'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'inst-iit-roorkee',
    slug: 'iit-roorkee',
    name: 'Indian Institute of Technology Roorkee',
    shortName: 'IIT Roorkee',
    description: 'India\'s oldest technical institution (est. 1847), NIRF #6 — renamed as IIT in 2001, located in the Himalayan foothills of Roorkee, Uttarakhand.',
    guide: `## About IIT Roorkee
Indian Institute of Technology Roorkee (IITR), established in 1847 as the Thomason College of Civil Engineering, is the oldest technical institution in Asia and was renamed IIT Roorkee in 2001. Located in Roorkee, Uttarakhand at the foothills of the Himalayas, it consistently ranks among India's top 6 IITs.

## Heritage and Programmes
IITR has a unique heritage combining 175+ years of civil engineering excellence with modern computer science and electrical engineering capabilities. It offers B.Tech, M.Tech, MBA, M.Sc (Integrated), M.Arch, and Ph.D programmes across 22 academic departments.

## Key Departments
Civil Engineering, Earthquake Engineering, Hydrology, Electrical Engineering, Computer Science, and Earth Sciences are historically strong departments. The Earthquake Engineering department is internationally recognised for seismic research.

## Location Advantage
The Roorkee campus is a green 365-acre campus with natural surroundings. Its proximity to Rishikesh and the Ganga river makes it uniquely located among IITs for environmental and water research.

## Admission
B.Tech through JEE Advanced. IITR is popular for Civil, Electrical, and Mechanical branches.`,
    type: 'institute',
    category: 'iit',
    city: 'Roorkee',
    state: 'Uttarakhand',
    countryId: 'IN',
    established: 1847,
    nirfRank: 6,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd', 'prog-mba'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Advanced', 'GATE', 'JAM'],
    courseIds: [],
    website: 'https://www.iitr.ac.in',
    tags: ['iit roorkee', 'iit', 'roorkee', 'uttarakhand', 'oldest technical institute', 'earthquake engineering', 'nirf rank 6'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'inst-iit-guwahati',
    slug: 'iit-guwahati',
    name: 'Indian Institute of Technology Guwahati',
    shortName: 'IIT Guwahati',
    description: 'NIRF #7, established in 1994 on the banks of the Brahmaputra in Guwahati, Assam — the IIT of Northeast India.',
    guide: `## About IIT Guwahati
Indian Institute of Technology Guwahati (IITG), established in 1994, is located on a scenic 285-acre campus on the north bank of the Brahmaputra river in Guwahati, Assam. It is the first IIT in the northeastern region of India and serves as an academic anchor for the entire Northeast.

## Programmes
B.Tech, B.Des (Design), M.Tech, M.Des, MA (Dev Studies), MBA, M.Sc (Integrated 5-year), and Ph.D. IIT Guwahati has a unique Design programme and a School of Agro and Rural Technology for regionally relevant research.

## Research Focus
Key research areas include biosciences, earthquake engineering (given North India's seismicity), materials science, sustainable energy, and northeast India's indigenous resources. IITG has strong collaboration with international universities in Japan, US, and Europe.

## Campus Beauty
The campus overlooking the Brahmaputra is considered one of the most beautiful in the IIT system. Techniche (tech fest) and Alcheringa (cultural fest) are major annual events.`,
    type: 'institute',
    category: 'iit',
    city: 'Guwahati',
    state: 'Assam',
    countryId: 'IN',
    established: 1994,
    nirfRank: 7,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd', 'prog-mba'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Advanced', 'GATE', 'JAM'],
    courseIds: [],
    website: 'https://www.iitg.ac.in',
    tags: ['iit guwahati', 'iit', 'guwahati', 'assam', 'northeast india', 'brahmaputra'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'inst-iit-hyderabad',
    slug: 'iit-hyderabad',
    name: 'Indian Institute of Technology Hyderabad',
    shortName: 'IIT Hyderabad',
    description: 'NIRF #8 among newer IITs, located in Sangareddy, Telangana — known for innovation in AI, design thinking, and industry collaboration.',
    guide: `## About IIT Hyderabad
Indian Institute of Technology Hyderabad (IITH), established in 2008, is located in Kandi, Sangareddy district, Telangana. Ranked consistently in the top 10 IITs, IITH is known for its emphasis on research, innovation, and cross-disciplinary programmes including a unique Design programme co-developed with Japanese universities.

## Programmes
B.Tech, B.Des, M.Tech, M.Des, M.Sc, and Ph.D. IITH offers data science, AI, and mathematical sciences at the B.Tech level — ahead of many older IITs in adopting emerging technology programmes.

## Japan Connection
IITH has a unique partnership with 10 Japanese universities under the Japan-India collaboration on technical education, enabling dual-degree programmes, joint research, and faculty exchange.

## Research Focus
AI, machine learning, quantum computing, health informatics, and materials science are focus areas. The Entrepreneurship Cell has spawned significant tech startups from Hyderabad's tech ecosystem.`,
    type: 'institute',
    category: 'iit',
    city: 'Hyderabad',
    state: 'Telangana',
    countryId: 'IN',
    established: 2008,
    nirfRank: 8,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Advanced', 'GATE', 'JAM'],
    courseIds: [],
    website: 'https://www.iith.ac.in',
    tags: ['iit hyderabad', 'iit', 'hyderabad', 'telangana', 'ai', 'data science'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'inst-iit-ism-dhanbad',
    slug: 'iit-ism-dhanbad',
    name: 'Indian Institute of Technology (ISM) Dhanbad',
    shortName: 'IIT (ISM) Dhanbad',
    description: 'Asia\'s oldest mining institute (est. 1926), converted to IIT status in 2016 — specialised in Mining, Petroleum, Applied Geology, and Mineral engineering.',
    guide: `## About IIT (ISM) Dhanbad
The Indian School of Mines (ISM) Dhanbad, now IIT (ISM) Dhanbad since 2016, was established in 1926 and is one of Asia's oldest and most prestigious institutions for mining, mineral, and earth sciences engineering. Located in Dhanbad, Jharkhand — the heart of India's coalfields — it holds a unique legacy as India's go-to institute for mining and geological sciences.

## Unique Programmes
IIT (ISM) Dhanbad uniquely offers B.Tech in Mining Engineering, Mining Machinery Engineering, Petroleum Engineering, Applied Geology, and Mineral Engineering — programmes not commonly available at other IITs.

## Research Focus
Mining technology, underground construction, petroleum exploration, geotechnical engineering, and metallurgy are key research areas. The institute has strong connections with Coal India, ONGC, NMDC, and other mining/energy PSUs.

## Admission
JEE Advanced for B.Tech. Mining and Petroleum Engineering branches are specialised and attract students interested in the energy and mining sector.`,
    type: 'institute',
    category: 'iit',
    city: 'Dhanbad',
    state: 'Jharkhand',
    countryId: 'IN',
    established: 1926,
    nirfRank: 20,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Advanced', 'GATE'],
    courseIds: [],
    website: 'https://www.iitism.ac.in',
    tags: ['iit ism', 'ism dhanbad', 'mining engineering', 'petroleum engineering', 'dhanbad', 'jharkhand'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'inst-iit-bhu',
    slug: 'iit-bhu-varanasi',
    name: 'Indian Institute of Technology (BHU) Varanasi',
    shortName: 'IIT BHU',
    description: 'Located within the Banaras Hindu University campus in Varanasi, IIT BHU combines IIT engineering excellence with the cultural heritage of one of India\'s oldest universities.',
    guide: `## About IIT BHU
The Indian Institute of Technology (BHU) Varanasi, established under its IIT status in 2012 (formerly IT-BHU since 1919), is uniquely located within the sprawling 1,350-acre Banaras Hindu University campus in Varanasi, Uttar Pradesh. This gives it a distinctive cultural environment combining top-tier engineering with India's oldest academic tradition.

## Programmes
B.Tech, Dual Degree (B.Tech+M.Tech), M.Tech, M.Sc (Integrated), MBA, and Ph.D in all major engineering disciplines. IIT BHU also benefits from BHU's vast library, sports, and cultural facilities.

## Location: The Spiritual Capital
Varanasi is one of the world's oldest inhabited cities and India's cultural capital. The unique combination of technical education within BHU's campus provides students access to humanities, languages, fine arts, and a rich academic ecosystem beyond pure engineering.

## Admission
B.Tech through JEE Advanced. IIT BHU is a popular choice, especially for students from North India.`,
    type: 'institute',
    category: 'iit',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    countryId: 'IN',
    established: 1919,
    nirfRank: 13,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd', 'prog-mba'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Advanced', 'GATE', 'JAM'],
    courseIds: [],
    website: 'https://www.iitbhu.ac.in',
    tags: ['iit bhu', 'iit varanasi', 'banaras hindu university', 'varanasi', 'uttar pradesh'],
    updatedAt: '2025-01-01',
  },
  // ── Top NITs ─────────────────────────────────────────────────────────
  {
    id: 'inst-nit-trichy',
    slug: 'nit-trichy',
    name: 'National Institute of Technology Tiruchirappalli',
    shortName: 'NIT Trichy',
    description: 'India\'s top NIT (NIRF #9 overall), located in Tiruchirappalli, Tamil Nadu — known for its vibrant campus, strong alumni network, and exceptional placements.',
    guide: `## About NIT Trichy
National Institute of Technology Tiruchirappalli (NIT Trichy), established in 1964 as Regional Engineering College (REC) Trichy, was one of the first institutions to be elevated to NIT status. Consistently ranked #1 among NITs and in the top 10 overall (NIRF), NIT Trichy is often called the "MIT of the South."

## Programmes
B.Tech (4 years), M.Tech (2 years), M.Sc, MBA, and Ph.D across 15 departments. Key branches: Computer Science, Electronics & Communication, Electrical, Mechanical, Chemical, Civil, and Production Engineering.

## Campus Culture
NIT Trichy's campus spanning 800 acres is known for its lively sports culture, Pragyan (National Technical Festival), and Festember (Cultural Festival). The placement record is exceptional, with top companies consistently recruiting from all branches.

## Admission
B.Tech through JEE Main counselling via JOSAA/CSAB. NIT Trichy Computer Science typically requires a JEE Main rank within 1000-2000 (General category). GATE for M.Tech, CSIR/NET for Ph.D.`,
    type: 'institute',
    category: 'nit',
    city: 'Tiruchirappalli',
    state: 'Tamil Nadu',
    countryId: 'IN',
    established: 1964,
    nirfRank: 9,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd', 'prog-mba'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Main', 'GATE', 'JAM'],
    courseIds: [],
    website: 'https://www.nitt.edu',
    tags: ['nit trichy', 'nit', 'tiruchirappalli', 'tamil nadu', 'nirf rank 9', 'top nit', 'jee main'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'inst-nit-surathkal',
    slug: 'nit-surathkal',
    name: 'National Institute of Technology Karnataka',
    shortName: 'NIT Surathkal / NITK',
    description: 'NIRF #14, located on the coast of Arabian Sea in Surathkal, Karnataka — one of India\'s most scenic NIT campuses with strong engineering programmes.',
    guide: `## About NITK Surathkal
National Institute of Technology Karnataka (NITK), formerly Regional Engineering College Surathkal, is located on the Arabian Sea coast in Surathkal, Mangaluru, Karnataka. Established in 1960, NITK is consistently among the top 3 NITs nationally and is known for its picturesque beachside campus.

## Programmes
B.Tech, M.Tech, M.Sc, and Ph.D across 13 departments. Information Technology, Computer Science, Electronics, Electrical, Mechanical, Chemical, and Mining Engineering are key programmes.

## Campus Setting
The 295-acre campus adjacent to the Arabian Sea is one of the most unique in India. Incident (Technical Festival) and Ragam (Cultural Festival) are annual highlights.

## Admission
B.Tech through JEE Main. NITK Computer Science typically requires JEE Main rank within 3000-5000 (General category). GATE for M.Tech.`,
    type: 'institute',
    category: 'nit',
    city: 'Surathkal',
    state: 'Karnataka',
    countryId: 'IN',
    established: 1960,
    nirfRank: 14,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Main', 'GATE'],
    courseIds: [],
    website: 'https://www.nitk.ac.in',
    tags: ['nit surathkal', 'nitk', 'mangaluru', 'karnataka', 'arabian sea campus', 'jee main'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'inst-nit-warangal',
    slug: 'nit-warangal',
    name: 'National Institute of Technology Warangal',
    shortName: 'NIT Warangal',
    description: 'India\'s first NIT (est. 1959), NIRF top-15 — known for a highly active alumni network and technology entrepreneurship in Hyderabad\'s tech corridor.',
    guide: `## About NIT Warangal
National Institute of Technology Warangal (NITW), established in 1959 as the first REC in India (Regional Engineering College), is located in Warangal, Telangana. One of India's most prestigious NITs, NITW boasts a highly successful alumni network deeply integrated into Hyderabad and Bengaluru's tech industries.

## Programmes
B.Tech, M.Tech, MBA, MCA, M.Sc, and Ph.D across 13 departments. Computer Science, Electronics, Electrical, Mechanical, and Chemical Engineering are strong departments.

## Proximity to Hyderabad
Warangal's proximity to Hyderabad (150 km) gives NITW students excellent industry exposure. The alumni network in Hyderabad's IT sector is particularly strong, leading to consistent strong placements.

## Admission
B.Tech through JEE Main via JOSAA. NITW Computer Science requires approximately 3000-6000 JEE Main rank (General).`,
    type: 'institute',
    category: 'nit',
    city: 'Warangal',
    state: 'Telangana',
    countryId: 'IN',
    established: 1959,
    nirfRank: 26,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd', 'prog-mba', 'prog-mca'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Main', 'GATE'],
    courseIds: [],
    website: 'https://www.nitw.ac.in',
    tags: ['nit warangal', 'nit', 'warangal', 'telangana', 'first rec', 'jee main'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'inst-nit-calicut',
    slug: 'nit-calicut',
    name: 'National Institute of Technology Calicut',
    shortName: 'NIT Calicut / NITC',
    description: 'NIRF #23, located in Calicut (Kozhikode), Kerala — one of South India\'s premier NITs with a residential campus and strong placement culture.',
    guide: `## About NIT Calicut
National Institute of Technology Calicut (NITC), established in 1961, is located in Chathamangalam, Calicut, Kerala. Set on a lush 120-acre residential campus, NITC is consistently ranked among the top 5 NITs and is known for exceptional campus culture and placements.

## Programmes
B.Tech in 9 branches, M.Tech in 25 specialisations, MBA (2 years), M.Sc (2 years), and Ph.D. Computer Science and Engineering, Electronics & Communication, and Electrical Engineering are the most competitive branches.

## Campus Life
NITC has 100% residential campus culture. The Tathva (National Technical Festival) and Ragam (Cultural Festival) are well-known events. Kerala's educational culture adds a unique depth to campus academic environment.

## Admission
B.Tech through JEE Main via JOSAA. NITC Computer Science typically requires 5,000-8,000 JEE Main rank.`,
    type: 'institute',
    category: 'nit',
    city: 'Calicut (Kozhikode)',
    state: 'Kerala',
    countryId: 'IN',
    established: 1961,
    nirfRank: 23,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd', 'prog-mba'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Main', 'GATE'],
    courseIds: [],
    website: 'https://www.nitc.ac.in',
    tags: ['nit calicut', 'nitc', 'kozhikode', 'kerala', 'south india', 'jee main'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'inst-nit-rourkela',
    slug: 'nit-rourkela',
    name: 'National Institute of Technology Rourkela',
    shortName: 'NIT Rourkela',
    description: 'NIRF #16, located in Rourkela, Odisha — India\'s first institute to offer Biotechnology and Biomedical Engineering at B.Tech level.',
    guide: `## About NIT Rourkela
National Institute of Technology Rourkela (NITR), established in 1961, is located in Rourkela, Odisha. One of the largest NITs with 600+ faculty and 8,000+ students, NITR is known for its wide programme range and research focus. It was India's first institution to offer Biotechnology (1994) and Biomedical Engineering at B.Tech level.

## Programmes
B.Tech in 14 branches (unique: Biotechnology, Biomedical Engineering, Life Science Engineering), M.Tech, MBA, M.Sc (Integrated), and Ph.D. Mechanical Engineering and Chemical Engineering are historically strong.

## Research
NITR has national centres in biotechnology, materials, and environmental science. Strong industry connections with the nearby Rourkela Steel Plant (SAIL) are a distinctive advantage for Metallurgy and Chemical branches.

## Admission
B.Tech through JEE Main via JOSAA.`,
    type: 'institute',
    category: 'nit',
    city: 'Rourkela',
    state: 'Odisha',
    countryId: 'IN',
    established: 1961,
    nirfRank: 16,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd', 'prog-mba'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Main', 'GATE'],
    courseIds: [],
    website: 'https://www.nitrkl.ac.in',
    tags: ['nit rourkela', 'nit', 'rourkela', 'odisha', 'biotechnology', 'jee main'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'inst-mnit-jaipur',
    slug: 'mnit-jaipur',
    name: 'Malaviya National Institute of Technology Jaipur',
    shortName: 'MNIT Jaipur',
    description: 'NIRF #28, located in Jaipur, Rajasthan — one of India\'s top 10 NITs with a strong engineering tradition and vibrant Pink City campus.',
    guide: `## About MNIT Jaipur
Malaviya National Institute of Technology (MNIT) Jaipur, established in 1963 as Malaviya Regional Engineering College (MREC), is located in Jaipur, Rajasthan. Named after Malaviyaji (Madan Mohan Malaviya), MNIT is one of India's oldest and most prestigious NITs.

## Programmes
B.Tech (4 years), M.Tech (2 years), MBA (2 years), M.Sc (5-year integrated), and Ph.D across 12 departments. Computer Science, Electronics, Electrical, Mechanical, and Chemical Engineering are the core departments.

## Jaipur Advantage
Located in Jaipur — India's Pink City and the capital of Rajasthan — MNIT students benefit from proximity to Rajasthan's growing IT sector. MNIT is the primary engineering institution for the state.

## Admission
B.Tech through JEE Main via JOSAA. MNIT Jaipur is a popular choice for North India students.`,
    type: 'institute',
    category: 'nit',
    city: 'Jaipur',
    state: 'Rajasthan',
    countryId: 'IN',
    established: 1963,
    nirfRank: 28,
    programmeIds: ['prog-btech', 'prog-mtech', 'prog-msc', 'prog-phd', 'prog-mba'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Main', 'GATE'],
    courseIds: [],
    website: 'https://www.mnit.ac.in',
    tags: ['mnit jaipur', 'nit', 'jaipur', 'rajasthan', 'jee main'],
    updatedAt: '2025-01-01',
  },
  // ── IISc ────────────────────────────────────────────────────────────
  {
    id: 'inst-iisc',
    slug: 'iisc-bangalore',
    name: 'Indian Institute of Science',
    shortName: 'IISc Bangalore',
    description: 'India\'s premier research institution (#1 in research rankings), established in 1909 in Bengaluru — the fountainhead of Indian scientific research.',
    guide: `## About IISc
The Indian Institute of Science (IISc), established in 1909 by Jamsetji Tata with support from the Maharaja of Mysore, is India's premier research university and consistently ranks #1 in NIRF Research rankings. Located in a 400-acre campus in Bengaluru, IISc is a deemed university offering research-focused programmes.

## Programmes
IISc primarily offers postgraduate and doctoral programmes: M.Tech (Research), M.Sc (Research), M.Des, MBA, and Ph.D. It introduced a B.S. (Research) undergraduate programme in 2011 for top JEE Advanced and KVPY holders.

## Research Legacy
IISc has been instrumental in India's space, defence, and nuclear research programmes. The institute has produced many fellows of Royal Society London, National Academy of Sciences, and the C.V. Raman Nobel Prize in Physics. Current research spans materials science, AI, neuroscience, and energy systems.

## B.S. Research Programme
The 4-year B.S. Research programme is highly selective, admitting ~150 students annually from JEE Advanced and KVPY. Students can then seamlessly transition to IISc's Ph.D or M.Tech research programmes. This is considered one of India's best undergraduate science programmes.

## Admission
B.S. Research via JEE Advanced rank or KVPY scholarship. M.Tech Research and Ph.D via GATE/CSIR-NET/JEST.`,
    type: 'institute',
    category: 'iisc',
    city: 'Bengaluru',
    state: 'Karnataka',
    countryId: 'IN',
    established: 1909,
    nirfRank: 1,
    naacGrade: 'A++',
    programmeIds: ['prog-bsc', 'prog-mtech', 'prog-msc', 'prog-phd', 'prog-mba'],
    streamIds: ['stream-engineering', 'stream-science'],
    admissionExams: ['JEE Advanced', 'KVPY', 'GATE', 'CSIR NET', 'JEST'],
    courseIds: [],
    website: 'https://www.iisc.ac.in',
    tags: ['iisc', 'iisc bangalore', 'bengaluru', 'research', 'nirf rank 1 research', 'jee advanced', 'kvpy'],
    updatedAt: '2025-01-01',
  },
  // ── IISERs ──────────────────────────────────────────────────────────
  {
    id: 'inst-iiser-pune',
    slug: 'iiser-pune',
    name: 'Indian Institute of Science Education and Research Pune',
    shortName: 'IISER Pune',
    description: 'India\'s first IISER (2006), located in Pune, Maharashtra — an autonomous research university offering integrated BS-MS programmes in pure and applied sciences.',
    guide: `## About IISER Pune
The Indian Institute of Science Education and Research (IISER) Pune, established in 2006, was the first of the 7 IISERs set up by the Ministry of Education to create world-class science education and research institutions in India. Located in Pune, Maharashtra, IISER Pune is consistently ranked among India's best science universities.

## Mission
IISERs were established to bridge the gap between pure science education and research in India — providing the quality of IIT-type education but focused exclusively on basic sciences (Biology, Chemistry, Earth Sciences, Mathematics, and Physics).

## BS-MS Programme (5 years)
The flagship 5-year BS-MS (Integrated) programme admits top science students through KVPY, JEE Advanced, and IAT (IISER Aptitude Test). Students gain depth in one major while sampling all five IISER disciplines.

## Research Culture
IISER Pune has produced several notable international research papers. Faculty members have received prestigious fellowships including Shanti Swarup Bhatnagar Prize, INSA fellowship, and DST-INSPIRE positions. The institute has over 100 active research laboratories.

## Career Pathways
BS-MS graduates typically pursue Ph.D at IISc, IISERs, JNU, or top international universities. Some also join IITs/NITs for M.Tech or enter industry through specialised placements.

## Admission
BS-MS through KVPY Stream SA/SX, JEE Advanced rank, or IISER Aptitude Test (IAT). Ph.D through GATE/CSIR-NET/NBHM.`,
    type: 'institute',
    category: 'iiser',
    city: 'Pune',
    state: 'Maharashtra',
    countryId: 'IN',
    established: 2006,
    nirfRank: 15,
    programmeIds: ['prog-bsc', 'prog-msc', 'prog-phd'],
    streamIds: ['stream-science'],
    admissionExams: ['JEE Advanced', 'KVPY', 'IAT', 'GATE', 'CSIR NET'],
    courseIds: [],
    website: 'https://www.iiserpune.ac.in',
    tags: ['iiser pune', 'iiser', 'pune', 'maharashtra', 'bs-ms', 'basic science', 'kvpy', 'research'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'inst-iiser-kolkata',
    slug: 'iiser-kolkata',
    name: 'Indian Institute of Science Education and Research Kolkata',
    shortName: 'IISER Kolkata',
    description: 'One of India\'s top science research institutes, located in Mohanpur, West Bengal — known for strong physics, mathematics, and chemical sciences programmes.',
    guide: `## About IISER Kolkata
The Indian Institute of Science Education and Research Kolkata (IISER-K), established in 2006, is located in Mohanpur, Nadia district, West Bengal. One of the two oldest IISERs, IISER Kolkata has established itself as a nationally prominent basic science research institution.

## Programmes
5-year BS-MS programme in Biology, Chemistry, Earth Sciences, Mathematics, and Physics. Ph.D programmes in all disciplines.

## Research Strengths
IISER Kolkata has notable strengths in condensed matter physics, organic chemistry, computational mathematics, and ecology. The institute publishes in Nature, Science, and other top international journals regularly.

## Location and Culture
Located near Kalyani, West Bengal's academic-industrial corridor, IISER-K benefits from proximity to Kolkata's rich academic ecosystem. Students can access Kolkata University, Presidency University, and other premier institutions for collaborations.

## Admission
BS-MS through KVPY, JEE Advanced, or IAT. Ph.D through GATE/CSIR-NET/NBHM/JEST.`,
    type: 'institute',
    category: 'iiser',
    city: 'Mohanpur',
    state: 'West Bengal',
    countryId: 'IN',
    established: 2006,
    programmeIds: ['prog-bsc', 'prog-msc', 'prog-phd'],
    streamIds: ['stream-science'],
    admissionExams: ['JEE Advanced', 'KVPY', 'IAT', 'GATE', 'CSIR NET'],
    courseIds: [],
    website: 'https://www.iiserkol.ac.in',
    tags: ['iiser kolkata', 'iiser', 'kolkata', 'west bengal', 'bs-ms', 'basic science'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'inst-iiser-mohali',
    slug: 'iiser-mohali',
    name: 'Indian Institute of Science Education and Research Mohali',
    shortName: 'IISER Mohali',
    description: 'IISER in Mohali, Punjab — known for interdisciplinary science research in molecular biology, bioinformatics, and physical sciences.',
    guide: `## About IISER Mohali
The Indian Institute of Science Education and Research Mohali (IISER-M), established in 2007, is located in Knowledge City, Sector 81, Mohali, Punjab. Known for its interdisciplinary research bridging biology, chemistry, and physical sciences.

## Programmes
5-year BS-MS programme and Ph.D. IISER Mohali has a particular strength in biological sciences and chemical sciences, with notable interdisciplinary research in structural biology and bioinformatics.

## Research Environment
IISER Mohali's proximity to Chandigarh and PGI (Post-Graduate Institute of Medical Education and Research) offers unique opportunities for biomedical research collaborations.

## Admission
BS-MS through KVPY, JEE Advanced, or IAT.`,
    type: 'institute',
    category: 'iiser',
    city: 'Mohali',
    state: 'Punjab',
    countryId: 'IN',
    established: 2007,
    programmeIds: ['prog-bsc', 'prog-msc', 'prog-phd'],
    streamIds: ['stream-science'],
    admissionExams: ['JEE Advanced', 'KVPY', 'IAT', 'GATE', 'CSIR NET'],
    courseIds: [],
    website: 'https://www.iisermohali.ac.in',
    tags: ['iiser mohali', 'iiser', 'mohali', 'punjab', 'chandigarh', 'bs-ms'],
    updatedAt: '2025-01-01',
  },
  // ── AIIMS ────────────────────────────────────────────────────────────
  {
    id: 'inst-aiims-delhi',
    slug: 'aiims-delhi',
    name: 'All India Institute of Medical Sciences New Delhi',
    shortName: 'AIIMS Delhi',
    description: 'India\'s premier medical institution — NIRF #1 in Medical, established 1956, Ansari Nagar, New Delhi. MBBS admission through NEET UG with top-100 rank required.',
    guide: `## About AIIMS New Delhi
The All India Institute of Medical Sciences (AIIMS), New Delhi, established in 1956 by an Act of Parliament, is India's most prestigious medical institution and ranked #1 in NIRF Medical rankings year after year. Located in Ansari Nagar, New Delhi, AIIMS is a national institute of excellence in medical education, research, and healthcare.

## Programmes
MBBS (5.5 years including 1-year internship), B.Sc Nursing, B.Optometry, B.Sc Allied Health Sciences, M.Ch (super-speciality surgery), MD/MS (postgraduate medical specialities), DM, Ph.D, and various postdoctoral fellowships.

## Why AIIMS Delhi Stands Apart
AIIMS Delhi is not just a medical college — it is a tertiary care hospital, research centre, and policy institution simultaneously. It treats over 10,000 patients daily, trains 100+ MBBS students annually, and conducts research cited globally.

## AIIMS MBBS: India's Most Competitive Seat
Getting into AIIMS MBBS is considered India's most difficult undergraduate admission:
- Approximately 100 MBBS seats filled through NEET UG
- Historically required NEET rank in top 50-100 out of 20+ lakh candidates
- The 12 new AIIMS (collectively called "New AIIMS") together admit ~800+ students via NEET

## Research Excellence
AIIMS has pioneered surgical techniques, drug trials, and diagnostic protocols. Notable contributions: India's first heart transplant (1994), numerous oncology breakthroughs, and infectious disease research including during COVID-19.`,
    type: 'institute',
    category: 'aiims',
    city: 'New Delhi',
    state: 'Delhi',
    countryId: 'IN',
    established: 1956,
    nirfRank: 1,
    programmeIds: ['prog-mbbs', 'prog-bsc', 'prog-phd'],
    streamIds: ['stream-medical'],
    admissionExams: ['NEET UG', 'NEET PG', 'INI-CET'],
    courseIds: [],
    website: 'https://www.aiims.edu',
    tags: ['aiims delhi', 'aiims', 'medical', 'mbbs', 'new delhi', 'nirf rank 1 medical', 'neet'],
    updatedAt: '2025-01-01',
  },
  // ── NLUs ────────────────────────────────────────────────────────────
  {
    id: 'inst-nlsiu-bangalore',
    slug: 'nlsiu-bangalore',
    name: 'National Law School of India University',
    shortName: 'NLSIU Bangalore',
    description: 'India\'s #1 law school (NIRF #1 Law), established 1988 in Bengaluru — the founding NLU and pioneer of 5-year integrated BA LLB programmes in India.',
    guide: `## About NLSIU Bangalore
The National Law School of India University (NLSIU), Bengaluru, established in 1988, was India's first National Law University and is consistently ranked #1 in NIRF Law rankings. It pioneered the 5-year integrated BA LLB programme that has become the standard for legal education in India.

## Programmes
5-year integrated BA LLB (Honours) — the premier undergraduate law programme in India. 1-year LLM and Ph.D in Law.

## CLAT: The Gateway
Admission to NLSIU's BA LLB is through CLAT (Common Law Admission Test). Getting into NLS Bengaluru requires a CLAT rank within top 70-100 out of 80,000+ aspirants — one of India's most competitive admissions for professional programmes.

## Legacy and Alumni
NLSIU alumni hold positions as Supreme Court and High Court judges, senior advocates, law firm partners, IAS officers, and corporate counsel. The school has produced distinguished legal scholars and policy makers. Alumni include senior counsel at the Supreme Court of India.

## Research and Publications
The Indian Journal of Law and Technology (IJLT) and the Indian Journal of International Economic Law (IJIEL) are student-run publications from NLS Bengaluru with national and international recognition.`,
    type: 'institute',
    category: 'nlu',
    city: 'Bengaluru',
    state: 'Karnataka',
    countryId: 'IN',
    established: 1988,
    nirfRank: 1,
    naacGrade: 'A++',
    programmeIds: ['prog-ballb', 'prog-llm', 'prog-phd'],
    streamIds: ['stream-law'],
    admissionExams: ['CLAT', 'LSAT India'],
    courseIds: [],
    website: 'https://nls.ac.in',
    tags: ['nlsiu', 'nls bangalore', 'law', 'clat', 'llb', 'bengaluru', 'nirf rank 1 law'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'inst-nlu-delhi',
    slug: 'nlu-delhi',
    name: 'National Law University Delhi',
    shortName: 'NLU Delhi',
    description: 'India\'s #2 NLU (NIRF), located in Dwarka, New Delhi — known for its proximity to the Supreme Court and strong Delhi-based legal ecosystem connections.',
    guide: `## About NLU Delhi
National Law University, Delhi (NLU Delhi), established in 2008 by the Government of Delhi, is consistently ranked #2 in NIRF Law rankings. Located in Dwarka, near the Delhi High Court and Supreme Court, NLU Delhi offers unparalleled access to India's apex legal institutions.

## Programmes
5-year BA LLB (Hons.) and Ph.D in Law. NLU Delhi does NOT participate in CLAT — it conducts its own entrance test called AILET (All India Law Entrance Test).

## AILET: Unique Admission
Unlike other NLUs that use CLAT, NLU Delhi requires AILET. This makes it unique: aspirants need separate preparation. AILET admits approximately 80 students per year, requiring a top 80 AILET rank.

## Delhi Advantage
Located in the nation's capital, NLU Delhi students have direct access to the Supreme Court of India for moot court observations and internships with top law firms, regulatory bodies, and the government. This proximity to Delhi's legal ecosystem is a significant differentiator.`,
    type: 'institute',
    category: 'nlu',
    city: 'New Delhi',
    state: 'Delhi',
    countryId: 'IN',
    established: 2008,
    nirfRank: 2,
    programmeIds: ['prog-ballb', 'prog-llm', 'prog-phd'],
    streamIds: ['stream-law'],
    admissionExams: ['AILET', 'CLAT'],
    courseIds: [],
    website: 'https://nludelhi.ac.in',
    tags: ['nlu delhi', 'law', 'ailet', 'llb', 'new delhi', 'supreme court', 'nirf rank 2 law'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'inst-nalsar-hyderabad',
    slug: 'nalsar-hyderabad',
    name: 'NALSAR University of Law',
    shortName: 'NALSAR Hyderabad',
    description: 'India\'s #3 NLU (NIRF), located in Shamirpet, Hyderabad — known for corporate law, human rights research, and a vibrant moot court tradition.',
    guide: `## About NALSAR
The National Academy of Legal Studies and Research (NALSAR) University of Law, established in 1998, is located in Shamirpet, Hyderabad. Consistently ranked #3 in NIRF Law, NALSAR is particularly known for its strengths in corporate law, international law, and human rights.

## Programmes
5-year BA LLB (Hons.) through CLAT. LLM (specialisations in Corporate Law, International Law, Human Rights Law, IP Law). Ph.D in Law.

## Unique Features
NALSAR has a beautiful 50-acre campus and a strong Moot Court programme. NALSAR's law review and research journals are nationally respected. The institute has strong international MoUs for student exchange programmes.

## Admission
5-year BA LLB through CLAT. NALSAR typically requires top 200-300 CLAT rank for general category admission.`,
    type: 'institute',
    category: 'nlu',
    city: 'Hyderabad',
    state: 'Telangana',
    countryId: 'IN',
    established: 1998,
    nirfRank: 3,
    programmeIds: ['prog-ballb', 'prog-llm', 'prog-phd'],
    streamIds: ['stream-law'],
    admissionExams: ['CLAT'],
    courseIds: [],
    website: 'https://nalsar.ac.in',
    tags: ['nalsar', 'hyderabad', 'law', 'clat', 'llb', 'telangana', 'nirf rank 3 law'],
    updatedAt: '2025-01-01',
  },
];
