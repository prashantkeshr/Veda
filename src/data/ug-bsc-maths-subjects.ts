import type { Subject } from '../models';

export const bscMathsSubjectsData: Subject[] = [
  {
    id: 'veda-subject-bsc-ma-real-analysis',
    slug: 'bsc-maths-real-analysis',
    title: 'Real Analysis',
    shortTitle: 'Real Analysis',
    description: 'Sequences and series, continuity, differentiation, Riemann integration, and uniform convergence.',
    guide: `## Overview
Real Analysis is the rigorous foundation of Calculus — it teaches you to prove every result you assumed in school. It is the most important subject for IIT JAM Mathematics and competitive exams.

## What You Will Learn
### Real Number System
Completeness axiom, infimum and supremum, Archimedean property, density of rationals.

### Sequences & Series
Convergence, Cauchy criterion, subsequences, Bolzano-Weierstrass theorem. Series: absolute and conditional convergence, tests (ratio, root, Raabe's), power series, radius of convergence.

### Limits & Continuity
ε-δ definition, algebra of limits, squeeze theorem. Types of discontinuity, intermediate value theorem, extreme value theorem, uniform continuity.

### Differentiation
Mean value theorems (Rolle, Lagrange, Cauchy), Taylor's theorem with remainder, L'Hôpital's rule.

### Riemann Integration
Riemann sums, Darboux upper/lower integrals, integrability criteria, Fundamental Theorem of Calculus.

### Sequences of Functions
Pointwise vs uniform convergence, interchange of limits, Weierstrass M-test.

## IIT JAM Weightage
Real Analysis is the **most heavily weighted section** — typically 20–25% of JAM MA marks.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bsc-ma-sequences-series', 'veda-topic-bsc-ma-continuity-differentiability', 'veda-topic-bsc-ma-riemann-integration'],
    courseIds: [],
    examIds: ['veda-exam-jam-mathematics', 'veda-exam-cuet-ug'],
    relatedSubjectIds: ['veda-subject-bsc-ma-calculus', 'veda-subject-bsc-ma-algebra'],
    tags: ['real-analysis', 'sequences', 'continuity', 'riemann-integral', 'jam-maths'],
    color: '#7c2d12',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bsc-ma-algebra',
    slug: 'bsc-maths-abstract-algebra',
    title: 'Abstract Algebra',
    shortTitle: 'Abstract Algebra',
    description: 'Group theory, ring theory, and field theory — the language of modern mathematics.',
    guide: `## Overview
Abstract Algebra generalises arithmetic by studying sets with operations abstractly. Group theory has applications from quantum mechanics to cryptography; ring and field theory underlie coding theory and number theory.

## What You Will Learn
### Group Theory
Definition, examples (Z, Q*, GL(n,R), S_n, D_n, Z_n). Subgroups, cyclic groups, cosets, Lagrange's theorem. Normal subgroups and quotient groups. Group homomorphisms and isomorphism theorems. Cayley's theorem. Sylow theorems.

### Rings & Ideals
Rings, integral domains, fields. Ring homomorphisms. Ideals: principal, prime, maximal. Quotient rings. Euclidean domains → PID → UFD hierarchy.

### Polynomial Rings
R[x] and its structure. Irreducibility criteria (Eisenstein, Rational Root), factorisation in Z[x] and Q[x].

### Field Theory
Field extensions, degree [K:F]. Algebraic elements, minimal polynomial. Splitting fields. Finite fields GF(p^n).

## IIT JAM Weightage
Algebra (Groups & Rings) accounts for **15–20%** of JAM MA.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bsc-ma-group-theory', 'veda-topic-bsc-ma-rings-fields', 'veda-topic-bsc-ma-isomorphism-theorems'],
    courseIds: [],
    examIds: ['veda-exam-jam-mathematics', 'veda-exam-cuet-ug'],
    relatedSubjectIds: ['veda-subject-bsc-ma-linear-algebra', 'veda-subject-bsc-ma-real-analysis'],
    tags: ['group-theory', 'ring-theory', 'field-theory', 'sylow', 'jam-maths'],
    color: '#7c2d12',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bsc-ma-linear-algebra',
    slug: 'bsc-maths-linear-algebra',
    title: 'Linear Algebra',
    shortTitle: 'Linear Algebra',
    description: 'Vector spaces, linear transformations, eigenvalues, diagonalisation, inner product spaces, and Jordan canonical form.',
    guide: `## Overview
Linear Algebra is the mathematics of straight lines, planes, and higher-dimensional spaces. It is the most widely applied branch of pure mathematics — used in machine learning, quantum mechanics, and engineering.

## What You Will Learn
### Vector Spaces
Definition, subspaces, span, linear independence, basis and dimension, coordinate vectors.

### Linear Transformations
Kernel and image, rank-nullity theorem, matrix of a linear transformation, change of basis.

### Eigenvalues & Eigenvectors
Characteristic polynomial, eigenspaces, diagonalisation, geometric vs algebraic multiplicity, Cayley-Hamilton theorem.

### Inner Product Spaces
Inner product, norm, orthogonality. Gram-Schmidt orthogonalisation. QR decomposition. Spectral theorem (real symmetric and Hermitian matrices).

### Canonical Forms
Minimal polynomial, invariant subspaces, Jordan canonical form.

### Applications
Least squares, singular value decomposition (SVD), linear systems (Gaussian elimination, LU decomposition).

## IIT JAM Weightage
Linear Algebra accounts for **15–20%** of JAM MA — eigenvalues and canonical forms are heavily tested.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bsc-ma-vector-spaces', 'veda-topic-bsc-ma-eigenvalues', 'veda-topic-bsc-ma-inner-product'],
    courseIds: [],
    examIds: ['veda-exam-jam-mathematics', 'veda-exam-cuet-ug'],
    relatedSubjectIds: ['veda-subject-bsc-ma-algebra', 'veda-subject-bsc-ma-real-analysis'],
    tags: ['linear-algebra', 'eigenvalues', 'vector-spaces', 'jordan-form', 'svd', 'jam-maths'],
    color: '#7c2d12',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bsc-ma-calculus',
    slug: 'bsc-maths-calculus',
    title: 'Multivariable Calculus & Differential Equations',
    shortTitle: 'Calculus & ODE',
    description: 'Partial derivatives, multiple integrals, vector calculus (Green, Stokes, Gauss), ODEs, and PDEs.',
    guide: `## Overview
Multivariable Calculus extends single-variable calculus to functions of several variables — the natural language for physics, engineering, and economics. Differential equations model every dynamic system.

## What You Will Learn
### Multivariable Functions
Limits, continuity, partial derivatives, chain rule, gradient, directional derivative, total differential. Maxima/minima, Lagrange multipliers.

### Multiple Integrals
Double and triple integrals, change of order, polar/cylindrical/spherical coordinates, Jacobians.

### Vector Calculus
Line integrals, surface integrals, Green's theorem, Stokes' theorem, Gauss divergence theorem.

### Ordinary Differential Equations
First-order (separable, exact, linear, Bernoulli). Second-order linear with constant coefficients (homogeneous and non-homogeneous, method of undetermined coefficients, variation of parameters). Power series solutions (Frobenius method). Systems of ODEs.

### Partial Differential Equations
Wave equation, heat equation, Laplace equation — method of separation of variables, Fourier series solutions.

## IIT JAM Weightage
Calculus + Differential Equations accounts for **20–25%** of JAM MA.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bsc-ma-vector-calculus', 'veda-topic-bsc-ma-ode', 'veda-topic-bsc-ma-pde'],
    courseIds: [],
    examIds: ['veda-exam-jam-mathematics', 'veda-exam-cuet-ug'],
    relatedSubjectIds: ['veda-subject-bsc-ma-real-analysis', 'veda-subject-bsc-ma-linear-algebra'],
    tags: ['calculus', 'vector-calculus', 'ode', 'pde', 'stokes-theorem', 'jam-maths'],
    color: '#7c2d12',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bsc-ma-probability',
    slug: 'bsc-maths-probability-statistics',
    title: 'Probability & Statistics',
    shortTitle: 'Probability',
    description: 'Probability theory, random variables, distributions, expectation, hypothesis testing, and regression.',
    guide: `## Overview
Probability is the mathematics of uncertainty — Statistics is how we learn from data. Both are essential for data science, machine learning, economics, and research.

## What You Will Learn
### Probability Theory
Sample space, events, axioms. Conditional probability, Bayes' theorem, independence. Combinatorics for probability.

### Random Variables
Discrete and continuous RVs, PMF, PDF, CDF. Standard distributions: Bernoulli, Binomial, Geometric, Poisson, Uniform, Normal, Exponential, Gamma.

### Expectation & Variance
Expected value, variance, standard deviation, moment generating functions, characteristic function.

### Joint Distributions
Joint, marginal, conditional distributions. Covariance, correlation. Sums of random variables, Central Limit Theorem.

### Statistical Inference
Point estimation (MLE, method of moments). Confidence intervals. Hypothesis testing (z-test, t-test, chi-square, F-test). Regression analysis.

## IIT JAM Weightage
Probability and Statistics accounts for **10–15%** of JAM MA.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bsc-ma-probability-distributions', 'veda-topic-bsc-ma-expectation', 'veda-topic-bsc-ma-statistical-inference'],
    courseIds: [],
    examIds: ['veda-exam-jam-mathematics', 'veda-exam-cuet-ug'],
    relatedSubjectIds: ['veda-subject-bsc-ma-real-analysis', 'veda-subject-bsc-ma-calculus'],
    tags: ['probability', 'statistics', 'distributions', 'hypothesis-testing', 'clt', 'jam-maths'],
    color: '#7c2d12',
    updatedAt: '2026-09-16',
  },
];
