import type { Subject } from '../models';

export const bcaSubjectsData: Subject[] = [
  {
    id: 'veda-subject-bca-programming',
    slug: 'bca-programming-fundamentals',
    title: 'Programming Fundamentals (C & Python)',
    shortTitle: 'Programming',
    description: 'Variables, control flow, functions, arrays, pointers (C), and object-oriented programming (Python).',
    guide: `## Overview
Programming is the core skill of BCA — mastering at least one language fluently opens every technology career. C builds system-level understanding; Python is the gateway to data science, web, and AI.

## What You Will Learn
### C Programming
Data types, operators, control statements (if, switch, loops). Functions: recursion, call by value/reference. Arrays and strings. Pointers: arithmetic, pointers to functions, dynamic memory (malloc, calloc, free). Structures, unions, enums. File I/O.

### Python Fundamentals
Syntax, indentation, data types, lists, tuples, dictionaries, sets. Functions, lambda, map/filter/reduce. List comprehensions. Exception handling. File handling. Modules and packages (os, sys, math).

### Object-Oriented Programming (Python)
Classes and objects, __init__, self. Inheritance (single, multiple, multilevel). Polymorphism, method overriding. Encapsulation, dunder methods. Abstract classes (ABC module).

### Problem Solving
Algorithm design, flowcharts, pseudocode. Complexity basics (Big-O notation). Common algorithms: sorting (bubble, selection, insertion, merge, quick) and searching.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bca-c-programming', 'veda-topic-bca-python-oop', 'veda-topic-bca-problem-solving'],
    courseIds: [],
    examIds: ['veda-exam-cuet-ug', 'veda-exam-gate-cs'],
    relatedSubjectIds: ['veda-subject-bca-data-structures', 'veda-subject-bca-web-tech'],
    tags: ['c-programming', 'python', 'oop', 'algorithms', 'bca'],
    color: '#1e3a5f',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bca-data-structures',
    slug: 'bca-data-structures',
    title: 'Data Structures & Algorithms',
    shortTitle: 'DSA',
    description: 'Arrays, linked lists, stacks, queues, trees, graphs, sorting, searching, and algorithm analysis.',
    guide: `## Overview
Data Structures are how programs organise information efficiently; algorithms are how they process it. DSA is the most tested topic in every tech interview and the GATE CS exam.

## What You Will Learn
### Linear Structures
Arrays: 1D, 2D, operations. Linked list: singly, doubly, circular — insertion, deletion, reversal. Stack: LIFO, applications (infix-postfix, balanced parentheses). Queue: FIFO, circular queue, deque, priority queue.

### Non-Linear Structures
Binary Trees: traversals (inorder, preorder, postorder), BST — search, insert, delete. AVL trees: rotations. Heaps: min-heap, max-heap, heapsort. B-trees overview.

### Graphs
Representation (adjacency matrix, list). BFS, DFS, applications. Shortest paths: Dijkstra's, Bellman-Ford. Minimum spanning tree: Kruskal's, Prim's. Topological sorting.

### Hashing
Hash functions, collision resolution (chaining, open addressing).

### Sorting & Searching
O(n log n) algorithms: merge sort, quicksort, heapsort. O(n): counting sort, radix sort. Binary search, interpolation search.

### Algorithm Analysis
Time and space complexity, Big-O, Ω, Θ. Recurrences: Master theorem.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bca-trees-graphs', 'veda-topic-bca-sorting-hashing', 'veda-topic-bca-complexity'],
    courseIds: [],
    examIds: ['veda-exam-cuet-ug', 'veda-exam-gate-cs'],
    relatedSubjectIds: ['veda-subject-bca-programming', 'veda-subject-bca-database'],
    tags: ['data-structures', 'algorithms', 'trees', 'graphs', 'sorting', 'bca'],
    color: '#1e3a5f',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bca-database',
    slug: 'bca-database-management',
    title: 'Database Management Systems',
    shortTitle: 'DBMS',
    description: 'Relational model, SQL, normalisation, transactions, and NoSQL basics.',
    guide: `## Overview
DBMS is the backbone of every application — from banking to e-commerce. SQL is the most universally sought skill in software development.

## What You Will Learn
### Relational Model
Relations, attributes, tuples. Keys: super, candidate, primary, foreign. Integrity constraints. Relational algebra: select, project, join, union, difference.

### SQL
DDL: CREATE, ALTER, DROP. DML: SELECT, INSERT, UPDATE, DELETE. Joins: INNER, LEFT, RIGHT, FULL OUTER. Subqueries, aggregation (GROUP BY, HAVING), window functions basics. Views, indexes.

### Normalisation
Functional dependencies, closure, Armstrong's axioms. Normal forms: 1NF, 2NF, 3NF, BCNF, 4NF. Decomposition: lossless join, dependency preservation.

### Transactions
ACID properties. Concurrency control: locks (shared, exclusive), two-phase locking (2PL), timestamp ordering. Deadlock detection and prevention. Recovery: UNDO/REDO logging, checkpoints.

### NoSQL Basics
Document (MongoDB), key-value (Redis), column (Cassandra), graph (Neo4j) databases — when to use which.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bca-sql-relational', 'veda-topic-bca-normalisation', 'veda-topic-bca-transactions'],
    courseIds: [],
    examIds: ['veda-exam-cuet-ug', 'veda-exam-gate-cs'],
    relatedSubjectIds: ['veda-subject-bca-data-structures', 'veda-subject-bca-software-engg'],
    tags: ['dbms', 'sql', 'normalisation', 'transactions', 'nosql', 'bca'],
    color: '#1e3a5f',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bca-web-tech',
    slug: 'bca-web-technologies',
    title: 'Web Technologies',
    shortTitle: 'Web Tech',
    description: 'HTML5, CSS3, JavaScript, React/Vue basics, Node.js, REST APIs, and responsive design.',
    guide: `## Overview
Web development is the largest employer of BCA graduates. The modern web stack (HTML + CSS + JavaScript + a framework) powers every website and web app you use.

## What You Will Learn
### HTML5
Semantic elements, forms, tables, media elements, accessibility (ARIA). HTML5 APIs: Canvas, LocalStorage, Geolocation.

### CSS3
Box model, Flexbox, Grid, responsive design (media queries). CSS variables, transitions, animations. Bootstrap / Tailwind basics.

### JavaScript (Core)
ES6+: variables (let, const), arrow functions, destructuring, spread/rest, template literals. DOM manipulation, event handling. Asynchronous JS: callbacks, Promises, async/await. Fetch API.

### Frontend Frameworks
React: components, JSX, state, props, hooks (useState, useEffect). Vue.js basics. NPM and module bundlers (Vite, Webpack).

### Backend (Node.js)
Node.js runtime, Express.js framework. REST API design (GET, POST, PUT, DELETE). JSON. Connecting to MongoDB (Mongoose) and MySQL. JWT authentication basics.

### Deployment
Git and GitHub, hosting (Netlify, Vercel, Railway). HTTPS, CORS basics.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bca-html-css', 'veda-topic-bca-javascript', 'veda-topic-bca-react-nodejs'],
    courseIds: [],
    examIds: ['veda-exam-cuet-ug'],
    relatedSubjectIds: ['veda-subject-bca-programming', 'veda-subject-bca-software-engg'],
    tags: ['html', 'css', 'javascript', 'react', 'nodejs', 'web-development', 'bca'],
    color: '#1e3a5f',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bca-networking',
    slug: 'bca-computer-networks',
    title: 'Computer Networks',
    shortTitle: 'Networks',
    description: 'OSI model, TCP/IP, routing, switching, network security, and wireless networks.',
    guide: `## Overview
Computer Networks underpin the internet, cloud computing, and all distributed systems. Understanding networks is essential for system administration, cloud, and security roles.

## What You Will Learn
### Network Fundamentals
Types of networks (LAN, WAN, MAN, PAN). Network topologies. Transmission media.

### OSI & TCP/IP Models
7 OSI layers with protocols. TCP/IP 4-layer model. Encapsulation and decapsulation.

### Data Link & Network Layer
MAC addresses, ARP. Ethernet, CSMA/CD. IP addressing: IPv4 (classes, subnetting, VLSM, CIDR), IPv6 basics. Routing: static, RIP, OSPF, BGP.

### Transport & Application Layer
TCP: 3-way handshake, flow control (sliding window), congestion control. UDP. Ports and sockets. DNS, DHCP, HTTP/HTTPS, FTP, SMTP, POP3, IMAP.

### Network Security
Firewalls, IDS/IPS. VPN: IPSec, SSL/TLS. Cryptography: symmetric (AES), asymmetric (RSA), PKI. Common attacks: phishing, MITM, DoS/DDoS.

### Wireless Networks
WiFi (IEEE 802.11 a/b/g/n/ac/ax), Bluetooth, 4G/5G NR basics.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bca-osi-tcpip', 'veda-topic-bca-ip-routing', 'veda-topic-bca-network-security'],
    courseIds: [],
    examIds: ['veda-exam-cuet-ug', 'veda-exam-gate-cs'],
    relatedSubjectIds: ['veda-subject-bca-data-structures', 'veda-subject-bca-software-engg'],
    tags: ['computer-networks', 'osi', 'tcp-ip', 'routing', 'network-security', 'bca'],
    color: '#1e3a5f',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bca-software-engg',
    slug: 'bca-software-engineering',
    title: 'Software Engineering & Project Management',
    shortTitle: 'Software Engg',
    description: 'SDLC models, agile, UML, software testing, version control, and project management basics.',
    guide: `## Overview
Software Engineering transforms coding into professional product development — it is the difference between a script and a scalable system. Every tech company expects BCA graduates to understand the SDLC.

## What You Will Learn
### SDLC Models
Waterfall, V-model, Spiral, RAD. Agile: Scrum (sprints, backlog, retrospective), Kanban. Extreme Programming (XP).

### Requirements Engineering
Functional and non-functional requirements, use case diagrams, user stories. Requirements elicitation and documentation (SRS).

### UML Design
Use case, class, sequence, activity, state, and deployment diagrams. Object-oriented design (OOD) principles: SOLID. Design patterns: Singleton, Factory, Observer, MVC.

### Software Testing
Black-box: boundary value analysis, equivalence partitioning. White-box: statement, branch coverage. Unit, integration, system, acceptance testing. TDD basics. Selenium, Jest/JUnit overview.

### Project Management
Work breakdown structure (WBS), Gantt charts, PERT/CPM, effort estimation (function points, COCOMO). Risk management.

### Version Control
Git: init, clone, add, commit, push, pull, branch, merge, rebase, PR workflow. GitHub / GitLab.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bca-sdlc-agile', 'veda-topic-bca-uml-design-patterns', 'veda-topic-bca-testing'],
    courseIds: [],
    examIds: ['veda-exam-cuet-ug'],
    relatedSubjectIds: ['veda-subject-bca-database', 'veda-subject-bca-web-tech'],
    tags: ['software-engineering', 'sdlc', 'agile', 'uml', 'testing', 'git', 'bca'],
    color: '#1e3a5f',
    updatedAt: '2026-09-16',
  },
];
