import type { Subject } from '../models';

export const csSubjectsData: Subject[] = [
  {
    id: 'veda-subject-cs-dsa',
    slug: 'cs-data-structures-algorithms',
    title: 'Data Structures & Algorithms',
    shortTitle: 'DSA',
    description: 'Arrays, linked lists, stacks, queues, trees, graphs, sorting, searching, and algorithm complexity analysis.',
    guide: `## Overview
Data Structures & Algorithms is the bedrock of computer science — every software system, from a search engine to an operating system, is built on these primitives. Mastery here is the single biggest factor in GATE CS rank and software-engineering interviews.

## What You Will Learn
### Linear Data Structures
Arrays and linked lists (singly, doubly, circular), stacks (LIFO) and queues (FIFO, deque, priority queue). Understand amortised analysis for dynamic arrays.

### Non-Linear Data Structures
Binary trees, BSTs, heaps, hash tables (chaining vs open addressing), and graphs (directed, undirected, weighted). Learn when to choose which structure.

### Core Algorithms
Sorting: bubble, insertion, merge sort O(n log n), quick sort (average O(n log n)), heap sort, radix/counting sort. Searching: linear, binary, interpolation.

### Graph Algorithms
BFS and DFS traversals, Dijkstra's SSSP, Bellman-Ford, Floyd-Warshall, Prim's and Kruskal's MST, topological sort.

### Dynamic Programming
Overlapping subproblems and optimal substructure. Classic problems: 0/1 Knapsack, LCS, LIS, Edit Distance, Matrix Chain Multiplication.

### Algorithm Analysis
Time complexity (Big-O, Ω, Θ), space complexity, recurrence relations (Master Theorem).

## GATE CS Weightage
DSA is the highest-weightage area in GATE CS — typically **12–15 marks** per paper. Focus heavily on trees, graphs, and dynamic programming.

## Study Tips
- Implement every data structure from scratch once
- Solve at least 200 problems on LeetCode / CSES before GATE
- For GATE: past-paper questions on BST operations, graph traversals, DP recurrences are highly repetitive`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-cs-arrays-linked-lists',
      'veda-topic-cs-trees-graphs',
      'veda-topic-cs-sorting-searching',
      'veda-topic-cs-dynamic-programming',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-cs'],
    relatedSubjectIds: ['veda-subject-cs-toc', 'veda-subject-cs-os', 'veda-subject-engg-maths'],
    tags: ['dsa', 'algorithms', 'data-structures', 'gate-cs', 'programming'],
    color: '#1e3a5f',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-cs-os',
    slug: 'cs-operating-systems',
    title: 'Operating Systems',
    shortTitle: 'OS',
    description: 'Process management, scheduling, memory management, file systems, synchronisation, and deadlock.',
    guide: `## Overview
Operating Systems form the invisible layer between hardware and software. Understanding OS internals is essential for GATE CS, system-programming interviews, and any serious software-engineering role.

## What You Will Learn
### Process & Thread Management
Process concept, PCB, states and transitions. Threads vs processes, multithreading models. Context switching overhead.

### CPU Scheduling
FCFS, SJF (preemptive/non-preemptive), Round Robin, Priority Scheduling, Multilevel Queue. Criteria: CPU utilisation, throughput, waiting time, turnaround time.

### Synchronisation
Race conditions, critical section problem. Peterson's solution, semaphores (binary and counting), mutex locks. Classic problems: Producer-Consumer, Readers-Writers, Dining Philosophers.

### Deadlock
Necessary conditions (Coffman conditions). Prevention, Avoidance (Banker's Algorithm), Detection and Recovery.

### Memory Management
Logical vs physical address space. Contiguous allocation, fragmentation. Paging, segmentation, paged segmentation. Page replacement: FIFO, LRU, Optimal. Thrashing.

### File Systems
File concepts, access methods. Directory structure. Allocation methods: contiguous, linked, indexed. Free-space management. UNIX inode structure.

## GATE CS Weightage
OS typically contributes **8–10 marks**. Deadlock, scheduling algorithms, and page replacement are most frequently tested.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-cs-os-processes',
      'veda-topic-cs-os-scheduling',
      'veda-topic-cs-os-memory',
      'veda-topic-cs-os-file-systems',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-cs'],
    relatedSubjectIds: ['veda-subject-cs-dsa', 'veda-subject-cs-digital-logic'],
    tags: ['operating-systems', 'scheduling', 'memory-management', 'gate-cs'],
    color: '#1e3a5f',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-cs-dbms',
    slug: 'cs-database-management',
    title: 'Database Management Systems',
    shortTitle: 'DBMS',
    description: 'Relational model, SQL, normalisation, transactions, concurrency control, indexing, and query optimisation.',
    guide: `## Overview
DBMS is the discipline of organising, storing, and retrieving data reliably and efficiently. Every business application — from banking to e-commerce — depends on a well-designed database.

## What You Will Learn
### Relational Model
Relations, tuples, attributes, domains, keys (primary, candidate, foreign). Relational algebra (select, project, join, set operations). Relational calculus.

### SQL
DDL (CREATE, ALTER, DROP), DML (SELECT, INSERT, UPDATE, DELETE), aggregations (GROUP BY, HAVING), joins (INNER, LEFT, RIGHT, FULL), subqueries, views, triggers.

### Normalisation
Functional dependencies, closure, canonical cover. 1NF → 2NF → 3NF → BCNF. Decomposition: lossless-join and dependency-preserving properties.

### Transactions & Concurrency
ACID properties. Serializability (conflict and view). Concurrency control: 2PL, timestamp ordering, MVCC. Recovery: log-based, shadow paging.

### Storage & Indexing
B-tree and B+-tree indexes, hashing (static and dynamic), query optimisation basics.

## GATE CS Weightage
DBMS accounts for **8–10 marks** per paper. Normalisation and transaction concurrency questions are most predictable.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-cs-db-relational',
      'veda-topic-cs-db-sql',
      'veda-topic-cs-db-normalization',
      'veda-topic-cs-db-transactions',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-cs'],
    relatedSubjectIds: ['veda-subject-cs-dsa', 'veda-subject-cs-os'],
    tags: ['dbms', 'sql', 'normalisation', 'transactions', 'gate-cs'],
    color: '#1e3a5f',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-cs-networks',
    slug: 'cs-computer-networks',
    title: 'Computer Networks',
    shortTitle: 'CN',
    description: 'OSI and TCP/IP models, protocols (HTTP, TCP, UDP, IP, DNS), routing, switching, and network security basics.',
    guide: `## Overview
Computer Networks explains how billions of devices communicate reliably across the internet. It is a consistent GATE CS contributor and essential background for cloud, distributed systems, and DevOps roles.

## What You Will Learn
### Layered Architecture
OSI 7-layer and TCP/IP 5-layer models. Role and protocols at each layer.

### Data Link Layer
Framing, error detection (CRC, checksum), error correction (Hamming). MAC protocols: CSMA/CD (Ethernet), CSMA/CA (Wi-Fi). Sliding window protocols: Go-Back-N, Selective Repeat. Spanning Tree Protocol.

### Network Layer
IPv4/IPv6 addressing and subnetting (CIDR). Routing algorithms: Dijkstra (OSPF), Bellman-Ford (RIP). NAT, ARP, ICMP.

### Transport Layer
TCP (connection-oriented, reliable, congestion control — slow start, AIMD) vs UDP (connectionless, unreliable). Port numbers, flow control, three-way handshake.

### Application Layer
DNS, HTTP/HTTPS, SMTP/IMAP, FTP. Client-server vs P2P.

### Network Security
Symmetric vs asymmetric encryption. TLS/SSL. Firewalls, IDS/IPS.

## GATE CS Weightage
Networks accounts for **7–9 marks**. Subnetting, sliding window, and TCP handshake are frequently tested.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-cs-net-osi',
      'veda-topic-cs-net-tcp-ip',
      'veda-topic-cs-net-routing',
      'veda-topic-cs-net-security',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-cs'],
    relatedSubjectIds: ['veda-subject-cs-os', 'veda-subject-cs-dbms'],
    tags: ['computer-networks', 'tcp-ip', 'routing', 'gate-cs'],
    color: '#1e3a5f',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-cs-toc',
    slug: 'cs-theory-of-computation',
    title: 'Theory of Computation',
    shortTitle: 'TOC',
    description: 'Finite automata, regular expressions, context-free grammars, pushdown automata, Turing machines, decidability, and complexity.',
    guide: `## Overview
Theory of Computation asks: "What can computers compute, and how efficiently?" It provides the mathematical foundation for compiler design, AI, cryptography, and the limits of computation.

## What You Will Learn
### Finite Automata
DFA and NFA, ε-NFA, subset construction (NFA → DFA conversion). Regular expressions and their equivalence to FA. Pumping lemma for regular languages.

### Context-Free Languages
Context-free grammars (CFG), parse trees, ambiguity. Pushdown automata (PDA) — deterministic and non-deterministic. CYK algorithm. Pumping lemma for CFLs.

### Turing Machines
TM definition, language recognition vs decision. Variants: multi-tape, non-deterministic, universal TM. Church-Turing thesis.

### Decidability
Recursive vs recursively enumerable languages. Undecidable problems: Halting Problem, Post Correspondence Problem. Reductions.

### Complexity Theory
P vs NP, NP-completeness, Cook-Levin theorem, NP-hard problems (SAT, 3-SAT, Clique, Vertex Cover).

## GATE CS Weightage
TOC accounts for **7–9 marks** and is often the differentiator in top ranks. Focus on closure properties and CFL vs regular language identification.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-cs-toc-automata',
      'veda-topic-cs-toc-grammars',
      'veda-topic-cs-toc-turing',
      'veda-topic-cs-toc-complexity',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-cs'],
    relatedSubjectIds: ['veda-subject-cs-compiler', 'veda-subject-cs-dsa'],
    tags: ['theory-of-computation', 'automata', 'turing-machine', 'np-hard', 'gate-cs'],
    color: '#1e3a5f',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-cs-digital-logic',
    slug: 'cs-digital-logic-computer-organisation',
    title: 'Digital Logic & Computer Organisation',
    shortTitle: 'DLCO',
    description: 'Boolean algebra, logic gates, combinational and sequential circuits, CPU architecture, memory hierarchy, pipelining, and I/O.',
    guide: `## Overview
Digital Logic bridges electronics and computing. Computer Organisation explains how a CPU works. Together they form the hardware foundation that every programmer and system designer needs.

## What You Will Learn
### Boolean Algebra & Logic Gates
Axioms, De Morgan's laws, SOP and POS forms, Karnaugh maps (2, 3, 4 variables), Quine-McCluskey method.

### Combinational Circuits
Multiplexers, demultiplexers, encoders, decoders, adders (half, full, ripple-carry, carry-lookahead), subtractors, comparators.

### Sequential Circuits
Latches and flip-flops (SR, D, JK, T). Registers, counters (synchronous, asynchronous, ripple). Finite state machines (Moore vs Mealy).

### CPU Architecture
Instruction set architecture (RISC vs CISC). Data-path, ALU, control unit. Addressing modes. Instruction formats.

### Pipelining
5-stage pipeline (IF, ID, EX, MEM, WB). Data hazards, control hazards, structural hazards. Forwarding, stalling, branch prediction.

### Memory Hierarchy
SRAM vs DRAM, cache (direct-mapped, set-associative, fully associative), cache performance. Virtual memory, page tables, TLB.

## GATE CS Weightage
DLCO accounts for **7–9 marks**. Pipelining hazards and cache mapping are the most tested areas.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-cs-dl-boolean',
      'veda-topic-cs-dl-combinational',
      'veda-topic-cs-dl-sequential',
      'veda-topic-cs-dl-cpu',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-cs'],
    relatedSubjectIds: ['veda-subject-cs-os', 'veda-subject-cs-compiler'],
    tags: ['digital-logic', 'computer-organisation', 'pipelining', 'cache', 'gate-cs'],
    color: '#1e3a5f',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-cs-compiler',
    slug: 'cs-compiler-design',
    title: 'Compiler Design',
    shortTitle: 'CD',
    description: 'Lexical analysis, parsing (LL, LR), syntax-directed translation, intermediate code, and code generation.',
    guide: `## Overview
Compiler Design bridges Theory of Computation and programming-language implementation. It appears consistently in GATE CS and teaches systematic software engineering through the lens of language translation.

## What You Will Learn
### Lexical Analysis
Tokens, lexemes, patterns. Regular expressions → NFA → DFA. LEX/Flex basics.

### Parsing
Top-down parsing: Recursive descent, LL(1) — FIRST and FOLLOW sets, parsing table. Bottom-up parsing: SLR(1), LALR(1), LR(1) — handle, item sets, ACTION/GOTO tables. YACC/Bison basics.

### Semantic Analysis
Attribute grammars (synthesised and inherited). Symbol tables. Type checking and type inference.

### Intermediate Code Generation
Three-address code, quadruples, triples. DAG representation. Backpatching for control flow.

### Code Optimisation
Local and global optimisation. Peephole, constant folding, dead-code elimination, common-subexpression elimination. Loop optimisation (invariant code motion, strength reduction, loop unrolling).

### Code Generation
Register allocation, instruction selection. Basic blocks and flow graphs.

## GATE CS Weightage
Compiler Design accounts for **5–7 marks**. LL/LR parsing and FIRST/FOLLOW are most tested.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-cs-cd-lexical',
      'veda-topic-cs-cd-parsing',
      'veda-topic-cs-cd-semantic',
      'veda-topic-cs-cd-codegen',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-cs'],
    relatedSubjectIds: ['veda-subject-cs-toc', 'veda-subject-cs-digital-logic'],
    tags: ['compiler-design', 'parsing', 'lexical-analysis', 'gate-cs'],
    color: '#1e3a5f',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-cs-se',
    slug: 'cs-software-engineering',
    title: 'Software Engineering',
    shortTitle: 'SE',
    description: 'SDLC models, requirement engineering, design patterns, testing, project management, and agile methodologies.',
    guide: `## Overview
Software Engineering provides the principles and practices for building large, reliable software systems. It covers the full lifecycle — from requirement elicitation to maintenance — and is a minor-but-scoring GATE CS section.

## What You Will Learn
### Software Development Life Cycle
Waterfall, Spiral, Iterative, RAD models. Agile — Scrum sprints, Kanban, XP practices.

### Requirement Engineering
Functional and non-functional requirements, use-case modelling, user stories.

### Software Design
Coupling and cohesion. SOLID principles. Design patterns: Creational (Singleton, Factory, Builder), Structural (Adapter, Facade, Decorator), Behavioural (Observer, Strategy, Command).

### Testing
Levels: unit, integration, system, acceptance. White-box (statement, branch, path coverage) vs black-box (BVA, equivalence partitioning). Regression, performance, security testing.

### Project Management
Effort estimation: COCOMO, function point analysis. Gantt charts, CPM, PERT. Risk management.

### Software Quality
SQA, CMM/CMMI levels, ISO 9001, six-sigma for software.

## GATE CS Weightage
SE accounts for **3–5 marks** — manageable theory section requiring understanding over memorisation.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-cs-se-sdlc',
      'veda-topic-cs-se-agile',
      'veda-topic-cs-se-testing',
      'veda-topic-cs-se-design-patterns',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-cs'],
    relatedSubjectIds: ['veda-subject-cs-dbms', 'veda-subject-cs-os'],
    tags: ['software-engineering', 'agile', 'testing', 'design-patterns', 'gate-cs'],
    color: '#1e3a5f',
    updatedAt: '2026-09-16',
  },
];
