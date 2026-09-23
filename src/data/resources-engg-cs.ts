import type { Resource } from '../models';

const base = {
  courseIds: [] as string[], branchIds: [] as string[], semesterIds: [] as string[],
  institutionIds: [] as string[], relatedResourceIds: [] as string[], prerequisiteIds: [] as string[],
  verificationStatus: 'verified' as const, contentStatus: 'published' as const,
  language: 'en', academicLevel: 'undergraduate' as const,
  createdAt: '2025-01-01', updatedAt: '2025-01-01',
};

export const resourcesEnggCsData: Resource[] = [

  // ── DSA – Arrays, Linked Lists, Stacks & Queues ─────────────────────────────
  {
    ...base, id: 'veda-rc-dsa-01', slug: 'cs-dsa-arrays-gfg',
    title: 'Data Structures – Array, Linked List, Stack, Queue | GeeksforGeeks',
    description: 'Comprehensive tutorials covering array operations, singly/doubly linked lists, stack applications, circular queues, and deque — with code examples in C, C++, Java, and Python.',
    type: 'website', url: 'https://www.geeksforgeeks.org/data-structures/',
    subjectIds: ['veda-subject-cs-dsa'], topicIds: ['veda-topic-cs-arrays-linked-lists'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'beginner', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['arrays', 'linked-list', 'stack', 'queue', 'dsa', 'gate-cs'],
    seoTitle: 'Array, Linked List, Stack, Queue Tutorials – GfG', seoDescription: 'Free in-depth tutorials on all linear data structures with GATE-relevant examples.',
  },
  {
    ...base, id: 'veda-rc-dsa-02', slug: 'cs-dsa-arrays-khan-algorithms',
    title: 'Intro to Algorithms & Data Structures – Khan Academy',
    description: 'Binary search, sorting, and fundamental algorithm analysis concepts with interactive exercises — ideal for GATE CS beginners building intuition before deep-diving into complexity.',
    type: 'website', url: 'https://www.khanacademy.org/computing/computer-science/algorithms',
    subjectIds: ['veda-subject-cs-dsa'], topicIds: ['veda-topic-cs-arrays-linked-lists', 'veda-topic-cs-sorting-searching'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'beginner', source: 'Khan Academy', provider: 'Khan Academy',
    tags: ['algorithms', 'binary-search', 'sorting', 'gate-cs', 'beginner'],
    seoTitle: 'Intro to Algorithms – Khan Academy', seoDescription: 'Free Khan Academy algorithms course with sorting, binary search, and complexity basics.',
  },
  {
    ...base, id: 'veda-rc-dsa-03', slug: 'cs-dsa-visualgo-linear',
    title: 'Linear Data Structures Visualiser – VisuAlgo',
    description: 'Animated, step-by-step visualisation of linked list, stack, queue, and deque operations. Invaluable for understanding pointer manipulation and memory layout visually.',
    type: 'website', url: 'https://visualgo.net/en/list',
    subjectIds: ['veda-subject-cs-dsa'], topicIds: ['veda-topic-cs-arrays-linked-lists'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'beginner', source: 'VisuAlgo', provider: 'VisuAlgo',
    tags: ['linked-list', 'stack', 'queue', 'visualisation', 'interactive'],
    seoTitle: 'Linked List Visualiser – VisuAlgo', seoDescription: 'Interactive animated visualisation of linked list and linear data structure operations.',
  },

  // ── DSA – Trees & Graphs ─────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rc-dsa-04', slug: 'cs-dsa-trees-gfg',
    title: 'Trees – Binary Tree, BST, Heap, AVL | GeeksforGeeks',
    description: 'Complete tree data structures tutorial: binary tree traversals, BST insert/delete, AVL rotations, min/max heap, B-trees, and segment trees. Hundreds of GATE-level practice problems included.',
    type: 'website', url: 'https://www.geeksforgeeks.org/binary-tree-data-structure/',
    subjectIds: ['veda-subject-cs-dsa'], topicIds: ['veda-topic-cs-trees-graphs'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['binary-tree', 'bst', 'heap', 'avl', 'traversal', 'gate-cs'],
    seoTitle: 'Trees – BST, Heap, AVL Tutorials | GfG', seoDescription: 'In-depth tree data structure tutorials with GATE-level problems on BST and heaps.',
  },
  {
    ...base, id: 'veda-rc-dsa-05', slug: 'cs-dsa-graphs-gfg',
    title: 'Graph Data Structure & BFS, DFS, Dijkstra, MST | GeeksforGeeks',
    description: "Graph representations, BFS, DFS, Dijkstra's SSSP, Bellman-Ford, Prim's/Kruskal's MST, topological sort, and strongly connected components — all GATE CS syllabus topics.",
    type: 'website', url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/',
    subjectIds: ['veda-subject-cs-dsa'], topicIds: ['veda-topic-cs-trees-graphs'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['graphs', 'bfs', 'dfs', 'dijkstra', 'mst', 'topological-sort'],
    seoTitle: 'Graph Algorithms – BFS, DFS, Dijkstra | GfG', seoDescription: 'Complete graph algorithms guide for GATE CS: traversal, shortest paths, and MST.',
  },
  {
    ...base, id: 'veda-rc-dsa-06', slug: 'cs-dsa-trees-visualgo',
    title: 'BST & Heap Visualiser – VisuAlgo',
    description: 'Animated BST insert/delete/search and heap operations. Watching pointer updates and rotations in motion is the fastest way to internalise tree algorithms.',
    type: 'website', url: 'https://visualgo.net/en/bst',
    subjectIds: ['veda-subject-cs-dsa'], topicIds: ['veda-topic-cs-trees-graphs'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'VisuAlgo', provider: 'VisuAlgo',
    tags: ['bst', 'heap', 'avl', 'visualisation', 'interactive'],
    seoTitle: 'BST & Heap Visualiser – VisuAlgo', seoDescription: 'Step-by-step animated BST and heap operations to master pointer updates and rotations.',
  },

  // ── DSA – Sorting & Searching ────────────────────────────────────────────────
  {
    ...base, id: 'veda-rc-dsa-07', slug: 'cs-sorting-gfg',
    title: 'Sorting Algorithms – Merge, Quick, Heap, Radix | GeeksforGeeks',
    description: 'All GATE-relevant sorting algorithms: bubble, insertion, selection, merge, quick, heap, counting, radix, and bucket sort. Analysis of time/space complexity with proof sketches.',
    type: 'website', url: 'https://www.geeksforgeeks.org/sorting-algorithms/',
    subjectIds: ['veda-subject-cs-dsa'], topicIds: ['veda-topic-cs-sorting-searching'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['merge-sort', 'quick-sort', 'heap-sort', 'radix', 'counting', 'gate-cs'],
    seoTitle: 'Sorting Algorithms – Merge, Quick, Heap | GfG', seoDescription: 'Complete sorting algorithms guide with complexity analysis for GATE CS.',
  },
  {
    ...base, id: 'veda-rc-dsa-08', slug: 'cs-sorting-visualgo',
    title: 'Sorting Algorithms Visualiser – VisuAlgo',
    description: 'Side-by-side animated comparison of all sorting algorithms. Observe each swap/comparison in real time — the most effective way to understand why merge sort beats quick sort in the worst case.',
    type: 'website', url: 'https://visualgo.net/en/sorting',
    subjectIds: ['veda-subject-cs-dsa'], topicIds: ['veda-topic-cs-sorting-searching'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'beginner', source: 'VisuAlgo', provider: 'VisuAlgo',
    tags: ['sorting', 'visualisation', 'interactive', 'merge-sort', 'quick-sort'],
    seoTitle: 'Sorting Algorithms Visualiser – VisuAlgo', seoDescription: 'Animated visualisations of every sorting algorithm to understand comparisons and swaps.',
  },

  // ── DSA – Dynamic Programming ────────────────────────────────────────────────
  {
    ...base, id: 'veda-rc-dsa-09', slug: 'cs-dp-gfg',
    title: 'Dynamic Programming – 0/1 Knapsack, LCS, LIS, Edit Distance | GfG',
    description: 'Complete DP tutorial: overlapping subproblems, optimal substructure, memoisation vs tabulation. Classic problems — 0/1 Knapsack, LCS, LIS, Edit Distance, Matrix Chain Multiplication, Coin Change.',
    type: 'website', url: 'https://www.geeksforgeeks.org/dynamic-programming/',
    subjectIds: ['veda-subject-cs-dsa'], topicIds: ['veda-topic-cs-dynamic-programming'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'advanced', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['dynamic-programming', 'knapsack', 'lcs', 'edit-distance', 'memoization'],
    seoTitle: 'Dynamic Programming Tutorial – Knapsack, LCS, LIS | GfG', seoDescription: 'Comprehensive DP guide with all classic problems and GATE-level recurrences.',
  },
  {
    ...base, id: 'veda-rc-dsa-10', slug: 'cs-dp-cp-algorithms',
    title: 'Dynamic Programming – CP Algorithms',
    description: 'Rigorous algorithmic treatment of DP: recurrence derivation, state design, segment trees, and advanced techniques (SOS DP, divide-and-conquer optimisation). Great depth for GATE rank improvement.',
    type: 'website', url: 'https://cp-algorithms.com/dynamic_programming/intro-to-dp.html',
    subjectIds: ['veda-subject-cs-dsa'], topicIds: ['veda-topic-cs-dynamic-programming'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'advanced', source: 'CP Algorithms', provider: 'CP Algorithms',
    tags: ['dynamic-programming', 'recurrence', 'state-design', 'advanced'],
    seoTitle: 'Dynamic Programming – CP Algorithms Reference', seoDescription: 'Rigorous CP Algorithms DP tutorial with state design and recurrence analysis.',
  },

  // ── OS – Processes, Threads & Synchronisation ────────────────────────────────
  {
    ...base, id: 'veda-rc-os-01', slug: 'cs-os-processes-gfg',
    title: 'Processes, Threads & Synchronisation | GeeksforGeeks',
    description: 'Process lifecycle, PCB, context switching, threads vs processes, race conditions, critical section problem, Peterson\'s solution, mutex, semaphores, and classic IPC problems.',
    type: 'website', url: 'https://www.geeksforgeeks.org/operating-systems/',
    subjectIds: ['veda-subject-cs-os'], topicIds: ['veda-topic-cs-os-processes'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['process', 'threads', 'semaphore', 'mutex', 'synchronisation', 'gate-cs'],
    seoTitle: 'OS Processes, Threads & Synchronisation | GfG', seoDescription: 'Complete OS guide covering process states, semaphores, and IPC for GATE CS.',
  },
  {
    ...base, id: 'veda-rc-os-02', slug: 'cs-os-processes-nptel',
    title: 'Operating Systems – NPTEL IIT Bombay',
    description: 'Full operating systems course covering process management, synchronisation, memory, file systems, and I/O subsystems. Aligns directly with GATE CS OS syllabus by IIT Bombay faculty.',
    type: 'video', url: 'https://nptel.ac.in/courses/106101183',
    subjectIds: ['veda-subject-cs-os'], topicIds: ['veda-topic-cs-os-processes', 'veda-topic-cs-os-scheduling', 'veda-topic-cs-os-memory', 'veda-topic-cs-os-file-systems'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'IIT Bombay', provider: 'NPTEL',
    tags: ['operating-systems', 'process', 'memory', 'gate-cs', 'NPTEL'],
    seoTitle: 'Operating Systems – NPTEL IIT Bombay', seoDescription: 'IIT Bombay NPTEL OS course covering full GATE CS operating systems syllabus.',
  },

  // ── OS – CPU Scheduling ───────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rc-os-03', slug: 'cs-os-scheduling-gfg',
    title: 'CPU Scheduling – FCFS, SJF, SRTF, Round Robin, Priority | GfG',
    description: 'Every scheduling algorithm explained: Gantt chart construction, calculating TAT, waiting time, and response time. Includes solved GATE previous-year numericals.',
    type: 'website', url: 'https://www.geeksforgeeks.org/cpu-scheduling-in-operating-systems/',
    subjectIds: ['veda-subject-cs-os'], topicIds: ['veda-topic-cs-os-scheduling'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['cpu-scheduling', 'fcfs', 'sjf', 'round-robin', 'gantt', 'gate-cs'],
    seoTitle: 'CPU Scheduling Algorithms – GATE CS | GfG', seoDescription: 'FCFS, SJF, Round Robin scheduling tutorials with Gantt charts and GATE numericals.',
  },

  // ── OS – Memory Management ────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rc-os-04', slug: 'cs-os-memory-gfg',
    title: 'Memory Management & Virtual Memory – Paging, TLB, LRU | GfG',
    description: 'Paging and page tables, multi-level paging, TLB effective memory access time (EMAT), page replacement algorithms (FIFO, Optimal, LRU), Belady\'s anomaly, and thrashing prevention.',
    type: 'website', url: 'https://www.geeksforgeeks.org/virtual-memory-in-operating-system/',
    subjectIds: ['veda-subject-cs-os'], topicIds: ['veda-topic-cs-os-memory'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['paging', 'tlb', 'emat', 'lru', 'page-replacement', 'virtual-memory'],
    seoTitle: 'Memory Management & Paging for GATE CS | GfG', seoDescription: 'Paging, TLB EMAT formula, and page replacement algorithms for GATE OS numericals.',
  },

  // ── OS – File Systems ─────────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rc-os-05', slug: 'cs-os-filesystems-gfg',
    title: 'File Systems & Disk Scheduling | GeeksforGeeks',
    description: 'File allocation methods (contiguous, linked, indexed), UNIX inode, directory structures, disk scheduling algorithms (FCFS, SSTF, SCAN, C-SCAN), RAID levels 0/1/5/6.',
    type: 'website', url: 'https://www.geeksforgeeks.org/file-systems-in-operating-system/',
    subjectIds: ['veda-subject-cs-os'], topicIds: ['veda-topic-cs-os-file-systems'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['file-systems', 'inode', 'disk-scheduling', 'sstf', 'scan', 'raid'],
    seoTitle: 'File Systems & Disk Scheduling for GATE CS | GfG', seoDescription: 'File allocation methods, disk scheduling algorithms, and RAID for GATE OS.',
  },

  // ── DBMS – Relational Model & Algebra ────────────────────────────────────────
  {
    ...base, id: 'veda-rc-db-01', slug: 'cs-dbms-relational-gfg',
    title: 'Relational Model, Keys & Relational Algebra | GeeksforGeeks',
    description: 'Relations, tuples, attributes, domain. Superkey, candidate key, primary key, foreign key. Relational algebra: σ (select), π (project), ⋈ (join), ×, ∪, −. Division and relational calculus.',
    type: 'website', url: 'https://www.geeksforgeeks.org/dbms/',
    subjectIds: ['veda-subject-cs-dbms'], topicIds: ['veda-topic-cs-db-relational'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['relational-model', 'relational-algebra', 'keys', 'candidate-key', 'dbms'],
    seoTitle: 'Relational Model & Algebra for GATE CS | GfG', seoDescription: 'Complete relational model tutorial with algebra operators and key definitions for GATE.',
  },
  {
    ...base, id: 'veda-rc-db-02', slug: 'cs-dbms-nptel',
    title: 'Database Management Systems – NPTEL IIT Madras',
    description: 'Full DBMS course by IIT Madras: relational model, SQL, normalisation, transactions, query processing, and indexing. One of the most comprehensive free DBMS courses aligned with GATE CS.',
    type: 'video', url: 'https://nptel.ac.in/courses/106106093',
    subjectIds: ['veda-subject-cs-dbms'], topicIds: ['veda-topic-cs-db-relational', 'veda-topic-cs-db-sql', 'veda-topic-cs-db-normalization', 'veda-topic-cs-db-transactions'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'IIT Madras', provider: 'NPTEL',
    tags: ['dbms', 'relational-model', 'sql', 'normalisation', 'gate-cs', 'NPTEL'],
    seoTitle: 'DBMS – NPTEL IIT Madras', seoDescription: 'IIT Madras NPTEL DBMS course: relational model, SQL, normalisation, and transactions.',
  },

  // ── DBMS – SQL ────────────────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rc-db-03', slug: 'cs-sql-w3schools',
    title: 'SQL Tutorial – W3Schools',
    description: 'Interactive SQL tutorial: DDL, DML, SELECT with WHERE/GROUP BY/HAVING, all join types, subqueries, aggregate functions, views, and indexes. Run every query in the in-browser SQL editor.',
    type: 'website', url: 'https://www.w3schools.com/sql/',
    subjectIds: ['veda-subject-cs-dbms'], topicIds: ['veda-topic-cs-db-sql'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'beginner', source: 'W3Schools', provider: 'W3Schools',
    tags: ['sql', 'joins', 'group-by', 'having', 'aggregate', 'subquery'],
    seoTitle: 'SQL Tutorial – W3Schools Interactive', seoDescription: 'Interactive SQL tutorial with runnable examples covering all DDL, DML, and query concepts.',
  },
  {
    ...base, id: 'veda-rc-db-04', slug: 'cs-sql-sqlzoo',
    title: 'SQL Practice – SQLZoo',
    description: 'Hands-on SQL practice platform with 10 graded sections from SELECT basics to subqueries and window functions. The best free resource for building GATE-level SQL query fluency.',
    type: 'website', url: 'https://sqlzoo.net/wiki/SQL_Tutorial',
    subjectIds: ['veda-subject-cs-dbms'], topicIds: ['veda-topic-cs-db-sql'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'SQLZoo', provider: 'SQLZoo',
    tags: ['sql', 'practice', 'joins', 'aggregate', 'subquery', 'interactive'],
    seoTitle: 'SQL Practice Exercises – SQLZoo', seoDescription: 'Interactive SQL practice from basics to advanced joins, subqueries, and window functions.',
  },

  // ── DBMS – Normalisation ──────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rc-db-05', slug: 'cs-normalisation-gfg',
    title: 'Database Normalisation – 1NF, 2NF, 3NF, BCNF | GeeksforGeeks',
    description: 'Functional dependencies, Armstrong axioms, attribute closure (X+), candidate key finding, 1NF through BCNF normal forms, lossless-join and dependency-preserving decomposition.',
    type: 'website', url: 'https://www.geeksforgeeks.org/introduction-of-database-normalization/',
    subjectIds: ['veda-subject-cs-dbms'], topicIds: ['veda-topic-cs-db-normalization'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['normalisation', 'functional-dependencies', '1nf', '2nf', '3nf', 'bcnf'],
    seoTitle: 'DB Normalisation – 1NF to BCNF for GATE CS | GfG', seoDescription: 'Attribute closure, BCNF decomposition, and lossless-join decomposition for GATE DBMS.',
  },

  // ── DBMS – Transactions & Concurrency ────────────────────────────────────────
  {
    ...base, id: 'veda-rc-db-06', slug: 'cs-transactions-gfg',
    title: 'Transactions, ACID & Serializability | GeeksforGeeks',
    description: 'ACID properties, transaction states, conflict and view serializability, precedence graph, two-phase locking (2PL), deadlock detection/prevention, and undo/redo log recovery.',
    type: 'website', url: 'https://www.geeksforgeeks.org/transaction-management-in-dbms/',
    subjectIds: ['veda-subject-cs-dbms'], topicIds: ['veda-topic-cs-db-transactions'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'advanced', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['transactions', 'acid', 'serializability', '2pl', 'deadlock', 'recovery'],
    seoTitle: 'Transactions & Concurrency Control for GATE CS | GfG', seoDescription: 'ACID, 2PL, precedence graph, and undo/redo recovery for GATE DBMS transactions.',
  },

  // ── CN – OSI & Network Models ─────────────────────────────────────────────────
  {
    ...base, id: 'veda-rc-net-01', slug: 'cs-cn-osi-gfg',
    title: 'OSI Model – All 7 Layers Explained | GeeksforGeeks',
    description: 'OSI layer functions, data encapsulation at each layer, PDU names, protocols at each layer, and comparison with the TCP/IP model. Frequently tested in GATE CS.',
    type: 'website', url: 'https://www.geeksforgeeks.org/layers-of-osi-model/',
    subjectIds: ['veda-subject-cs-networks'], topicIds: ['veda-topic-cs-net-osi'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'beginner', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['osi-model', 'network-layers', 'encapsulation', 'protocols', 'gate-cs'],
    seoTitle: 'OSI Model – 7 Layers for GATE CS | GfG', seoDescription: 'Complete OSI model guide with layer functions, PDUs, and protocol examples for GATE.',
  },
  {
    ...base, id: 'veda-rc-net-02', slug: 'cs-cn-nptel',
    title: 'Computer Networks – NPTEL IIT Kharagpur',
    description: 'Full computer networks course: data link layer, network layer (IP, routing), transport layer (TCP/UDP), application layer, and network security. Perfect for GATE CS CN preparation.',
    type: 'video', url: 'https://nptel.ac.in/courses/106105081',
    subjectIds: ['veda-subject-cs-networks'], topicIds: ['veda-topic-cs-net-osi', 'veda-topic-cs-net-tcp-ip', 'veda-topic-cs-net-routing', 'veda-topic-cs-net-security'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'IIT Kharagpur', provider: 'NPTEL',
    tags: ['computer-networks', 'tcp', 'ip', 'routing', 'gate-cs', 'NPTEL'],
    seoTitle: 'Computer Networks – NPTEL IIT Kharagpur', seoDescription: 'Full NPTEL CN course covering OSI, TCP/IP, routing, and security for GATE CS.',
  },

  // ── CN – TCP/IP ───────────────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rc-net-03', slug: 'cs-cn-tcp-gfg',
    title: 'TCP/IP – Handshake, Flow Control, Congestion Control | GfG',
    description: 'TCP three-way handshake, connection teardown, flow control (sliding window, Go-Back-N, Selective Repeat), congestion control (Slow Start, AIMD), UDP vs TCP, and socket programming basics.',
    type: 'website', url: 'https://www.geeksforgeeks.org/tcp-ip-model/',
    subjectIds: ['veda-subject-cs-networks'], topicIds: ['veda-topic-cs-net-tcp-ip'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['tcp', 'ip', 'handshake', 'flow-control', 'sliding-window', 'congestion'],
    seoTitle: 'TCP/IP – Sliding Window, Congestion Control | GfG', seoDescription: 'TCP handshake, flow control, and congestion control for GATE CN numericals.',
  },

  // ── CN – Routing ──────────────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rc-net-04', slug: 'cs-cn-routing-gfg',
    title: 'Routing Algorithms – RIP, OSPF, BGP, Dijkstra | GeeksforGeeks',
    description: 'Distance vector (Bellman-Ford / RIP), link state (Dijkstra / OSPF), path vector (BGP), subnetting, CIDR, VLSM, and IP addressing — full GATE CN routing coverage.',
    type: 'website', url: 'https://www.geeksforgeeks.org/routing-algorithms-in-computer-networks/',
    subjectIds: ['veda-subject-cs-networks'], topicIds: ['veda-topic-cs-net-routing'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['routing', 'rip', 'ospf', 'bgp', 'dijkstra', 'subnetting', 'cidr'],
    seoTitle: 'Routing Algorithms – GATE CS CN | GfG', seoDescription: 'Distance vector, link state routing, subnetting, and IP addressing for GATE CN.',
  },

  // ── CN – Network Security ─────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rc-net-05', slug: 'cs-cn-security-gfg',
    title: 'Network Security – Symmetric, Asymmetric, Digital Signatures | GfG',
    description: 'Symmetric (AES, DES) and asymmetric (RSA) encryption, digital signatures, hash functions (MD5, SHA), SSL/TLS, firewalls, IDS, and common attacks (man-in-the-middle, replay).',
    type: 'website', url: 'https://www.geeksforgeeks.org/network-security/',
    subjectIds: ['veda-subject-cs-networks'], topicIds: ['veda-topic-cs-net-security'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['network-security', 'rsa', 'aes', 'ssl', 'digital-signature', 'hash'],
    seoTitle: 'Network Security – Encryption & Digital Signatures | GfG', seoDescription: 'Symmetric/asymmetric encryption, digital signatures, and SSL/TLS for GATE CN.',
  },

  // ── TOC – Finite Automata ─────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rc-toc-01', slug: 'cs-toc-automata-gfg',
    title: 'Theory of Computation – DFA, NFA, ε-NFA | GeeksforGeeks',
    description: 'Deterministic and non-deterministic finite automata, ε-NFA to NFA to DFA conversion, minimisation, regular expressions, regular grammars, and pumping lemma for regular languages.',
    type: 'website', url: 'https://www.geeksforgeeks.org/theory-of-computation-automata/',
    subjectIds: ['veda-subject-cs-toc'], topicIds: ['veda-topic-cs-toc-automata'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['dfa', 'nfa', 'automata', 'regular-expressions', 'pumping-lemma', 'gate-cs'],
    seoTitle: 'DFA, NFA & Finite Automata for GATE CS | GfG', seoDescription: 'DFA/NFA construction, minimisation, and regular languages for GATE Theory of Computation.',
  },
  {
    ...base, id: 'veda-rc-toc-02', slug: 'cs-toc-nptel',
    title: 'Theory of Computation – NPTEL IIT Madras',
    description: 'Formal languages, finite automata, pushdown automata, Turing machines, and complexity classes (P, NP, NP-Complete). Textbook-quality lectures aligned precisely with GATE CS TOC syllabus.',
    type: 'video', url: 'https://nptel.ac.in/courses/106106049',
    subjectIds: ['veda-subject-cs-toc'], topicIds: ['veda-topic-cs-toc-automata', 'veda-topic-cs-toc-grammars', 'veda-topic-cs-toc-turing', 'veda-topic-cs-toc-complexity'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'IIT Madras', provider: 'NPTEL',
    tags: ['theory-of-computation', 'automata', 'turing-machine', 'np-complete', 'NPTEL'],
    seoTitle: 'Theory of Computation – NPTEL IIT Madras', seoDescription: 'Full NPTEL TOC course: automata, PDAs, Turing machines, and complexity for GATE CS.',
  },

  // ── TOC – Context-Free Grammars ────────────────────────────────────────────────
  {
    ...base, id: 'veda-rc-toc-03', slug: 'cs-toc-grammars-gfg',
    title: 'Context-Free Grammars, PDA & Pushdown Automata | GfG',
    description: 'CFG derivations, parse trees, ambiguity, Chomsky Normal Form (CNF), Greibach Normal Form (GNF), pushdown automata (PDA), CYK parsing algorithm, and pumping lemma for CFLs.',
    type: 'website', url: 'https://www.geeksforgeeks.org/introduction-to-context-free-grammars/',
    subjectIds: ['veda-subject-cs-toc'], topicIds: ['veda-topic-cs-toc-grammars'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['cfg', 'pda', 'cnf', 'ambiguity', 'parse-tree', 'pumping-lemma'],
    seoTitle: 'CFG & PDA for GATE CS | GfG', seoDescription: 'Context-free grammars, CNF conversion, and PDA construction for GATE TOC.',
  },

  // ── TOC – Turing Machines ──────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rc-toc-04', slug: 'cs-toc-turing-gfg',
    title: 'Turing Machines, Decidability & Halting Problem | GfG',
    description: 'Turing machine definition and computation, variants (multi-tape, non-deterministic, universal TM), decidable and semi-decidable languages, halting problem, and reductions.',
    type: 'website', url: 'https://www.geeksforgeeks.org/turing-machine-in-toc/',
    subjectIds: ['veda-subject-cs-toc'], topicIds: ['veda-topic-cs-toc-turing'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'advanced', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['turing-machine', 'decidability', 'halting-problem', 'reduction', 'toc'],
    seoTitle: 'Turing Machines & Decidability for GATE CS | GfG', seoDescription: 'Turing machine computation, halting problem, and decidability reductions for GATE.',
  },

  // ── TOC – Complexity ───────────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rc-toc-05', slug: 'cs-toc-complexity-gfg',
    title: 'P, NP, NP-Complete & NP-Hard | GeeksforGeeks',
    description: 'Time complexity classes P and NP, polynomial-time verification vs solving, NP-completeness via reduction, Cook-Levin theorem, NP-hard problems (SAT, 3-SAT, Clique, Vertex Cover).',
    type: 'website', url: 'https://www.geeksforgeeks.org/np-completeness-set-1/',
    subjectIds: ['veda-subject-cs-toc'], topicIds: ['veda-topic-cs-toc-complexity'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'advanced', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['np-complete', 'np-hard', 'polynomial-reduction', 'sat', 'complexity'],
    seoTitle: 'P, NP & NP-Completeness for GATE CS | GfG', seoDescription: 'NP-completeness, reductions, and complexity classes for GATE Theory of Computation.',
  },

  // ── Digital Logic – Boolean Algebra ───────────────────────────────────────────
  {
    ...base, id: 'veda-rc-dl-01', slug: 'cs-dl-boolean-gfg',
    title: 'Boolean Algebra, Logic Gates & Karnaugh Maps | GfG',
    description: 'Boolean laws, De Morgan\'s theorems, canonical forms (SOP/POS), Karnaugh map minimisation (up to 6 variables), Quine-McCluskey method, and hazard-free circuit design.',
    type: 'website', url: 'https://www.geeksforgeeks.org/digital-electronics-logic-design-tutorials/',
    subjectIds: ['veda-subject-cs-digital-logic'], topicIds: ['veda-topic-cs-dl-boolean'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'beginner', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['boolean-algebra', 'logic-gates', 'k-map', 'sop', 'pos', 'de-morgan'],
    seoTitle: 'Boolean Algebra & K-Maps for GATE CS | GfG', seoDescription: 'Boolean minimisation, K-maps, and SOP/POS forms for GATE digital logic.',
  },
  {
    ...base, id: 'veda-rc-dl-02', slug: 'cs-dl-nptel',
    title: 'Digital Logic Design – NPTEL IIT Bombay',
    description: 'Number systems, Boolean algebra, combinational circuits (adders, MUX, decoder), sequential circuits (flip-flops, counters, shift registers), and basic computer organisation.',
    type: 'video', url: 'https://nptel.ac.in/courses/117105080',
    subjectIds: ['veda-subject-cs-digital-logic'], topicIds: ['veda-topic-cs-dl-boolean', 'veda-topic-cs-dl-combinational', 'veda-topic-cs-dl-sequential'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'beginner', source: 'IIT Bombay', provider: 'NPTEL',
    tags: ['digital-logic', 'boolean', 'flip-flops', 'counters', 'NPTEL'],
    seoTitle: 'Digital Logic Design – NPTEL IIT Bombay', seoDescription: 'NPTEL digital logic course covering Boolean algebra, combinational, and sequential circuits.',
  },

  // ── Digital Logic – Combinational Circuits ─────────────────────────────────────
  {
    ...base, id: 'veda-rc-dl-03', slug: 'cs-dl-combinational-gfg',
    title: 'Combinational Circuits – Adder, MUX, Decoder, Comparator | GfG',
    description: 'Half adder, full adder, ripple carry and carry look-ahead adder, multiplexers (MUX), demultiplexers, encoders, decoders, priority encoders, and comparators with truth tables and logic diagrams.',
    type: 'website', url: 'https://www.geeksforgeeks.org/combinational-circuits/',
    subjectIds: ['veda-subject-cs-digital-logic'], topicIds: ['veda-topic-cs-dl-combinational'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['combinational', 'adder', 'mux', 'decoder', 'encoder', 'comparator'],
    seoTitle: 'Combinational Circuits for GATE CS | GfG', seoDescription: 'Adders, MUX, decoders, and combinational circuit design for GATE digital logic.',
  },

  // ── Digital Logic – Sequential Circuits ───────────────────────────────────────
  {
    ...base, id: 'veda-rc-dl-04', slug: 'cs-dl-sequential-gfg',
    title: 'Sequential Circuits – Flip-Flops, Counters, Shift Registers | GfG',
    description: 'SR, JK, D, and T flip-flops; state tables and excitation tables; synchronous and asynchronous counters; ring and Johnson counters; shift registers (SISO, SIPO, PISO, PIPO); sequence detectors.',
    type: 'website', url: 'https://www.geeksforgeeks.org/sequential-circuits/',
    subjectIds: ['veda-subject-cs-digital-logic'], topicIds: ['veda-topic-cs-dl-sequential'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['sequential', 'flip-flop', 'counter', 'shift-register', 'state-table'],
    seoTitle: 'Sequential Circuits – Flip-Flops & Counters | GfG', seoDescription: 'Flip-flop types, state tables, counters, and shift registers for GATE digital logic.',
  },

  // ── Digital Logic – CPU Organisation ──────────────────────────────────────────
  {
    ...base, id: 'veda-rc-dl-05', slug: 'cs-dl-cpu-gfg',
    title: 'Computer Organisation & CPU Architecture | GeeksforGeeks',
    description: 'Von Neumann architecture, instruction cycle, ALU design, instruction formats, addressing modes (immediate, direct, indirect, indexed), instruction pipelining, hazards, and cache organisation.',
    type: 'website', url: 'https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/',
    subjectIds: ['veda-subject-cs-digital-logic'], topicIds: ['veda-topic-cs-dl-cpu'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['cpu', 'pipelining', 'addressing-modes', 'instruction-cycle', 'cache', 'alu'],
    seoTitle: 'Computer Organisation & CPU Architecture | GfG', seoDescription: 'Instruction cycle, pipelining, addressing modes, and cache organisation for GATE CS.',
  },
  {
    ...base, id: 'veda-rc-dl-06', slug: 'cs-dl-cpu-nptel',
    title: 'Computer Organisation & Architecture – NPTEL IIT Madras',
    description: 'Detailed CPU design: datapath, control unit, pipelining (5-stage RISC), hazards and forwarding, memory hierarchy (cache and virtual memory), I/O subsystems.',
    type: 'video', url: 'https://nptel.ac.in/courses/106106092',
    subjectIds: ['veda-subject-cs-digital-logic'], topicIds: ['veda-topic-cs-dl-cpu'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'IIT Madras', provider: 'NPTEL',
    tags: ['computer-organisation', 'pipelining', 'cache', 'risc', 'NPTEL'],
    seoTitle: 'Computer Organisation – NPTEL IIT Madras', seoDescription: 'NPTEL CO course: pipelining, hazards, cache, and memory hierarchy for GATE CS.',
  },

  // ── Compiler Design – Lexical Analysis ────────────────────────────────────────
  {
    ...base, id: 'veda-rc-cd-01', slug: 'cs-compiler-lexical-gfg',
    title: 'Compiler Design – Lexical Analysis & LEX Tool | GfG',
    description: 'Phases of compilation, lexical analyser (scanner), tokens, lexemes, and patterns. Regular expression to DFA for lexer construction, LEX tool usage, and FIRST/FOLLOW sets introduction.',
    type: 'website', url: 'https://www.geeksforgeeks.org/phases-of-a-compiler/',
    subjectIds: ['veda-subject-cs-compiler'], topicIds: ['veda-topic-cs-cd-lexical'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['compiler-design', 'lexical-analysis', 'tokens', 'lex', 'scanner', 'gate-cs'],
    seoTitle: 'Compiler Design – Lexical Analysis for GATE CS | GfG', seoDescription: 'Compiler phases, lexical analyser, and token recognition for GATE compiler design.',
  },
  {
    ...base, id: 'veda-rc-cd-02', slug: 'cs-compiler-nptel',
    title: 'Compiler Design – NPTEL IIT Kanpur',
    description: 'Complete compiler construction course: lexical analysis, parsing (LL, LR, LALR), semantic analysis, intermediate code generation, optimisation, and code generation. Full GATE CD syllabus.',
    type: 'video', url: 'https://nptel.ac.in/courses/106104123',
    subjectIds: ['veda-subject-cs-compiler'], topicIds: ['veda-topic-cs-cd-lexical', 'veda-topic-cs-cd-parsing', 'veda-topic-cs-cd-semantic', 'veda-topic-cs-cd-codegen'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'IIT Kanpur', provider: 'NPTEL',
    tags: ['compiler-design', 'parsing', 'semantic-analysis', 'code-generation', 'NPTEL'],
    seoTitle: 'Compiler Design – NPTEL IIT Kanpur', seoDescription: 'Full NPTEL compiler course: lexical, parsing, semantic, and code generation for GATE.',
  },

  // ── Compiler Design – Parsing ──────────────────────────────────────────────────
  {
    ...base, id: 'veda-rc-cd-03', slug: 'cs-compiler-parsing-gfg',
    title: 'Parsing – LL(1), LR(0), SLR, CLR, LALR | GeeksforGeeks',
    description: 'Top-down (recursive descent, LL(1)) and bottom-up parsing (LR(0), SLR(1), CLR(1), LALR(1)). FIRST and FOLLOW sets, parse table construction, shift-reduce conflicts — all GATE CD topics.',
    type: 'website', url: 'https://www.geeksforgeeks.org/introduction-to-syntax-analysis-in-compiler-design/',
    subjectIds: ['veda-subject-cs-compiler'], topicIds: ['veda-topic-cs-cd-parsing'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'advanced', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['parsing', 'll1', 'lr0', 'slr', 'lalr', 'first-follow', 'parse-table'],
    seoTitle: 'LL(1), SLR, LALR Parsing for GATE CS | GfG', seoDescription: 'Parse table construction, FIRST/FOLLOW sets, and LR parsing for GATE compiler design.',
  },

  // ── Compiler Design – Semantic & Code Gen ─────────────────────────────────────
  {
    ...base, id: 'veda-rc-cd-04', slug: 'cs-compiler-semantic-gfg',
    title: 'Semantic Analysis & Code Generation | GeeksforGeeks',
    description: 'Semantic analysis: type checking, symbol table, scope rules, attribute grammars. Intermediate code (three-address code, DAG), code optimisation (CSE, dead code, loop invariant), and target code generation.',
    type: 'website', url: 'https://www.geeksforgeeks.org/intermediate-code-generation-in-compiler-design/',
    subjectIds: ['veda-subject-cs-compiler'], topicIds: ['veda-topic-cs-cd-semantic', 'veda-topic-cs-cd-codegen'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'advanced', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['semantic-analysis', 'three-address-code', 'code-optimisation', 'dag', 'symbol-table'],
    seoTitle: 'Semantic Analysis & Code Generation for GATE CS | GfG', seoDescription: 'Symbol table, three-address code, and code optimisation for GATE compiler design.',
  },

  // ── Software Engineering – SDLC ────────────────────────────────────────────────
  {
    ...base, id: 'veda-rc-se-01', slug: 'cs-se-sdlc-gfg',
    title: 'Software Development Life Cycle – Waterfall, Spiral, Prototyping | GfG',
    description: 'SDLC models: waterfall, incremental, spiral, prototype, RAD. Software requirements (SRS), function point analysis, software metrics, effort estimation (COCOMO), risk management.',
    type: 'website', url: 'https://www.geeksforgeeks.org/software-development-life-cycle-sdlc/',
    subjectIds: ['veda-subject-cs-se'], topicIds: ['veda-topic-cs-se-sdlc'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'beginner', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['sdlc', 'waterfall', 'spiral', 'cocomo', 'function-point', 'srs'],
    seoTitle: 'SDLC Models & Software Metrics for GATE CS | GfG', seoDescription: 'SDLC models, COCOMO estimation, and software metrics for GATE software engineering.',
  },

  // ── Software Engineering – Agile ───────────────────────────────────────────────
  {
    ...base, id: 'veda-rc-se-02', slug: 'cs-se-agile-atlassian',
    title: 'Agile Development Guide – Scrum, Kanban, Sprint | Atlassian',
    description: 'Atlassian\'s comprehensive Agile guide: Scrum ceremonies (sprint planning, daily standup, review, retrospective), Kanban board design, velocity, story points, and team roles.',
    type: 'website', url: 'https://www.atlassian.com/agile',
    subjectIds: ['veda-subject-cs-se'], topicIds: ['veda-topic-cs-se-agile'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'beginner', source: 'Atlassian', provider: 'Atlassian',
    tags: ['agile', 'scrum', 'kanban', 'sprint', 'user-story', 'velocity'],
    seoTitle: 'Agile, Scrum & Kanban Guide – Atlassian', seoDescription: 'Atlassian\'s authoritative Agile guide covering Scrum, Kanban, and sprint ceremonies.',
  },

  // ── Software Engineering – Testing ─────────────────────────────────────────────
  {
    ...base, id: 'veda-rc-se-03', slug: 'cs-se-testing-gfg',
    title: 'Software Testing – Unit, Integration, Black-Box, White-Box | GfG',
    description: 'Testing levels (unit, integration, system, acceptance), black-box vs white-box techniques, equivalence partitioning, boundary value analysis, code coverage criteria, mutation testing.',
    type: 'website', url: 'https://www.geeksforgeeks.org/software-testing-basics/',
    subjectIds: ['veda-subject-cs-se'], topicIds: ['veda-topic-cs-se-testing'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['software-testing', 'black-box', 'white-box', 'equivalence', 'code-coverage'],
    seoTitle: 'Software Testing – Black-Box & White-Box | GfG', seoDescription: 'Software testing levels, black-box/white-box techniques, and code coverage for GATE SE.',
  },

  // ── Software Engineering – Design Patterns ─────────────────────────────────────
  {
    ...base, id: 'veda-rc-se-04', slug: 'cs-se-design-patterns-refguru',
    title: 'Design Patterns – Creational, Structural, Behavioural | Refactoring Guru',
    description: 'All 23 Gang-of-Four design patterns explained with UML diagrams, code examples, and applicability. Singleton, Factory, Observer, Strategy, Decorator, MVC — all clearly explained.',
    type: 'website', url: 'https://refactoring.guru/design-patterns',
    subjectIds: ['veda-subject-cs-se'], topicIds: ['veda-topic-cs-se-design-patterns'],
    examIds: ['veda-exam-gate-cs'],
    difficulty: 'intermediate', source: 'Refactoring Guru', provider: 'Refactoring Guru',
    tags: ['design-patterns', 'singleton', 'factory', 'observer', 'strategy', 'gof'],
    seoTitle: 'Design Patterns – Gang of Four | Refactoring Guru', seoDescription: 'All 23 GoF design patterns with UML diagrams and real code examples.',
  },
];
