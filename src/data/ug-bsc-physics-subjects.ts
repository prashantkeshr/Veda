import type { Subject } from '../models';

export const bscPhysicsSubjectsData: Subject[] = [
  {
    id: 'veda-subject-bsc-ph-classical-mechanics',
    slug: 'bsc-physics-classical-mechanics',
    title: 'Classical Mechanics',
    shortTitle: 'Classical Mech',
    description: "Newton's laws, Lagrangian and Hamiltonian formulations, central force problems, rigid body dynamics, and special relativity.",
    guide: `## Overview
Classical Mechanics is the backbone of physics — it describes the motion of everything from billiard balls to planets. Mastering the Lagrangian and Hamiltonian formalisms is the gateway to Quantum Mechanics and Field Theory.

## What You Will Learn
### Newtonian Mechanics
Laws of motion, conservation of momentum and energy, variable mass problems, non-inertial frames, Coriolis and centrifugal forces.

### Lagrangian Mechanics
Generalized coordinates, constraints, Lagrange's equations, applications to pendulums, beads on rotating rods, and coupled oscillators. Virtual work and D'Alembert's principle.

### Hamiltonian Mechanics
Legendre transformation, Hamilton's equations, phase space, Poisson brackets, canonical transformations, action-angle variables.

### Central Force Problems
Effective potential, planetary orbits, Kepler's laws, Rutherford scattering.

### Rigid Body Dynamics
Moment of inertia tensor, Euler's equations, precession of a gyroscope, Euler angles.

### Special Relativity
Lorentz transformation, time dilation, length contraction, relativistic energy-momentum, 4-vectors.

## IIT JAM Weightage
Mechanics and mathematical methods together account for **25–30%** of IIT JAM Physics.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bsc-ph-lagrangian', 'veda-topic-bsc-ph-hamiltonian', 'veda-topic-bsc-ph-central-force'],
    courseIds: [],
    examIds: ['veda-exam-jam-physics', 'veda-exam-cuet-ug'],
    relatedSubjectIds: ['veda-subject-bsc-ph-quantum', 'veda-subject-bsc-ph-statistical'],
    tags: ['classical-mechanics', 'lagrangian', 'hamiltonian', 'special-relativity', 'jam-physics'],
    color: '#1e3a8a',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bsc-ph-em-theory',
    slug: 'bsc-physics-electromagnetic-theory',
    title: 'Electromagnetic Theory',
    shortTitle: 'EM Theory',
    description: "Maxwell's equations, electromagnetic waves, radiation, waveguides, and relativistic electrodynamics.",
    guide: `## Overview
Electromagnetic Theory unifies electricity and magnetism through Maxwell's equations — the most elegant set of equations in classical physics. It underpins all of optics, photonics, and communications.

## What You Will Learn
### Electrostatics
Coulomb's law, Gauss's law, potential theory, conductors, dielectrics, boundary value problems (Laplace, Poisson), method of images, multipole expansion.

### Magnetostatics
Biot-Savart law, Ampere's law, vector potential, magnetic materials.

### Time-Varying Fields
Faraday's law, displacement current, Maxwell's equations in integral and differential form.

### Electromagnetic Waves
Wave equation in free space, polarisation, energy and momentum (Poynting vector), reflection and refraction (Fresnel equations), total internal reflection.

### Waveguides & Cavities
TE, TM, TEM modes in rectangular waveguide; resonant cavities.

### Radiation
Hertz dipole radiation, radiation resistance, Larmor formula.

## IIT JAM Weightage
Electromagnetic Theory accounts for **20–25%** of JAM Physics.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bsc-ph-maxwell-equations', 'veda-topic-bsc-ph-em-waves-radiation', 'veda-topic-bsc-ph-boundary-value'],
    courseIds: [],
    examIds: ['veda-exam-jam-physics', 'veda-exam-cuet-ug'],
    relatedSubjectIds: ['veda-subject-bsc-ph-optics', 'veda-subject-bsc-ph-quantum'],
    tags: ['maxwell-equations', 'em-waves', 'electrostatics', 'magnetostatics', 'jam-physics'],
    color: '#1e3a8a',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bsc-ph-quantum',
    slug: 'bsc-physics-quantum-mechanics',
    title: 'Quantum Mechanics',
    shortTitle: 'Quantum Mech',
    description: "Wave functions, Schrödinger equation, operator formalism, angular momentum, perturbation theory, and identical particles.",
    guide: `## Overview
Quantum Mechanics replaces classical determinism with probability amplitudes — it explains atomic spectra, chemical bonding, semiconductors, and lasers. It is the foundation of all modern physics.

## What You Will Learn
### Foundations
Wave-particle duality, de Broglie hypothesis, uncertainty principle, wave function and its interpretation (Born rule), Schrödinger equation (time-dependent and time-independent).

### Simple Systems
Particle in a box (1D, 2D, 3D), harmonic oscillator (series solution and ladder operators), finite potential well, tunnelling.

### Operator Formalism
Operators, expectation values, commutators, Dirac bra-ket notation, Hermitian operators, simultaneous eigenstates.

### Angular Momentum
Orbital angular momentum L, eigenvalues ℓ(ℓ+1)ℏ² and mℏ, spherical harmonics. Spin-½, Pauli matrices. Addition of angular momenta, Clebsch-Gordan coefficients.

### Hydrogen Atom
Separation in spherical coordinates, quantum numbers (n, ℓ, m), energy levels, degeneracy, wavefunctions.

### Perturbation Theory
Time-independent perturbation (non-degenerate and degenerate), Stark effect, Zeeman effect. Time-dependent perturbation, Fermi's golden rule.

## IIT JAM Weightage
Quantum Mechanics accounts for **20–25%** of JAM Physics.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bsc-ph-schrodinger', 'veda-topic-bsc-ph-angular-momentum', 'veda-topic-bsc-ph-perturbation'],
    courseIds: [],
    examIds: ['veda-exam-jam-physics', 'veda-exam-cuet-ug'],
    relatedSubjectIds: ['veda-subject-bsc-ph-classical-mechanics', 'veda-subject-bsc-ph-statistical'],
    tags: ['quantum-mechanics', 'schrodinger', 'wave-function', 'angular-momentum', 'jam-physics'],
    color: '#1e3a8a',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bsc-ph-statistical',
    slug: 'bsc-physics-statistical-mechanics',
    title: 'Thermodynamics & Statistical Mechanics',
    shortTitle: 'Stat Mech',
    description: 'Laws of thermodynamics, entropy, thermodynamic potentials, and statistical distributions (MB, BE, FD).',
    guide: `## Overview
Statistical Mechanics bridges microscopic atomic behaviour to macroscopic thermodynamic properties — it explains why gases obey laws, why metals conduct, and how lasers work.

## What You Will Learn
### Classical Thermodynamics
Four laws, internal energy, enthalpy, entropy (second law), Carnot cycle efficiency. Thermodynamic potentials: G, A, H. Maxwell relations and their applications.

### Classical Statistical Mechanics
Phase space, Liouville's theorem, microcanonical, canonical, and grand canonical ensembles. Partition function Z and its connection to thermodynamic quantities.

### Maxwell-Boltzmann Statistics
Distribution function, speed distribution, equipartition theorem, specific heats of gases.

### Quantum Statistical Mechanics
Bose-Einstein statistics: photons, blackbody radiation (Planck's law), BE condensation. Fermi-Dirac statistics: free electron model, Fermi energy, electronic heat capacity.

### Phase Transitions
First and second order transitions, Landau theory, Ising model basics.

## IIT JAM Weightage
Thermodynamics and Statistical Mechanics account for **15–20%** of JAM Physics.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bsc-ph-ensembles', 'veda-topic-bsc-ph-quantum-statistics', 'veda-topic-bsc-ph-thermodynamic-potentials'],
    courseIds: [],
    examIds: ['veda-exam-jam-physics', 'veda-exam-cuet-ug'],
    relatedSubjectIds: ['veda-subject-bsc-ph-quantum', 'veda-subject-bsc-ph-classical-mechanics'],
    tags: ['statistical-mechanics', 'thermodynamics', 'partition-function', 'fermi-dirac', 'bose-einstein'],
    color: '#1e3a8a',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bsc-ph-optics',
    slug: 'bsc-physics-optics',
    title: 'Optics',
    shortTitle: 'Optics',
    description: 'Geometric optics, wave optics (interference, diffraction), polarisation, lasers, and optical fibers.',
    guide: `## Overview
Optics explains how light travels, bends, and creates images — from the human eye to fiber-optic networks and laser surgery.

## What You Will Learn
### Geometric Optics
Reflection, refraction, Snell's law, lenses and mirrors, prisms, optical instruments (microscope, telescope).

### Wave Optics — Interference
Huygens' principle, Young's double slit, thin film interference, Newton's rings, Michelson interferometer.

### Diffraction
Fraunhofer and Fresnel diffraction, single slit, double slit, diffraction grating (grating equation), resolving power (Rayleigh criterion).

### Polarisation
Plane, circular, elliptical polarisation. Brewster's angle, Malus's law, birefringence, wave plates (λ/4, λ/2), optical activity.

### Lasers
Stimulated emission, Einstein A and B coefficients, population inversion, optical cavity, types (He-Ne, ruby, semiconductor), properties (coherence, collimation, monochromaticity).

### Optical Fibers
Total internal reflection, step-index and graded-index fibers, numerical aperture, applications.

## IIT JAM Weightage
Optics accounts for **10–15%** of JAM Physics.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bsc-ph-interference', 'veda-topic-bsc-ph-diffraction', 'veda-topic-bsc-ph-lasers'],
    courseIds: [],
    examIds: ['veda-exam-jam-physics', 'veda-exam-cuet-ug'],
    relatedSubjectIds: ['veda-subject-bsc-ph-em-theory'],
    tags: ['optics', 'interference', 'diffraction', 'lasers', 'polarisation'],
    color: '#1e3a8a',
    updatedAt: '2026-09-16',
  },
];
