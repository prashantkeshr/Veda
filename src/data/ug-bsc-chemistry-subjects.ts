import type { Subject } from '../models';

export const bscChemistrySubjectsData: Subject[] = [
  {
    id: 'veda-subject-bsc-cy-physical',
    slug: 'bsc-chemistry-physical',
    title: 'Physical Chemistry',
    shortTitle: 'Physical Chem',
    description: 'Quantum chemistry, chemical thermodynamics, kinetics, electrochemistry, and spectroscopy.',
    guide: `## Overview
Physical Chemistry applies physics to chemistry — it explains why reactions happen, how fast they go, and what drives equilibrium. It is the most mathematically rigorous branch of chemistry.

## What You Will Learn
### Quantum Chemistry
Particle-in-a-box, harmonic oscillator, hydrogen atom solutions. Atomic orbitals. Molecular orbital theory (MO theory): LCAO, bonding and antibonding, molecular orbital diagrams for H₂, O₂, N₂. Hybrid orbitals.

### Chemical Thermodynamics
First law: ΔU, ΔH, Hess's law. Second law: entropy, Gibbs free energy, equilibrium condition. Chemical potential, activity, activity coefficients. Phase rule, Clausius-Clapeyron equation.

### Chemical Kinetics
Rate laws, integrated rate equations (0th, 1st, 2nd order). Arrhenius equation, activation energy. Reaction mechanisms, steady-state approximation. Enzyme kinetics (Michaelis-Menten).

### Electrochemistry
Galvanic cells, EMF, Nernst equation. Standard electrode potentials. Concentration cells. Electrolysis, Faraday's laws. Debye-Hückel theory.

### Spectroscopy (Basic)
Beer-Lambert law, UV-Vis, IR fundamentals. Rotational and vibrational spectra of diatomics.

## IIT JAM Chemistry
Physical Chemistry accounts for **~40%** of JAM CY marks.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bsc-cy-quantum-chem', 'veda-topic-bsc-cy-thermo-kinetics', 'veda-topic-bsc-cy-electrochemistry'],
    courseIds: [],
    examIds: ['veda-exam-jam-chemistry', 'veda-exam-cuet-ug'],
    relatedSubjectIds: ['veda-subject-bsc-cy-organic', 'veda-subject-bsc-cy-spectroscopy'],
    tags: ['physical-chemistry', 'quantum-chemistry', 'thermodynamics', 'kinetics', 'electrochemistry'],
    color: '#064e3b',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bsc-cy-organic',
    slug: 'bsc-chemistry-organic',
    title: 'Organic Chemistry',
    shortTitle: 'Organic Chem',
    description: 'Reaction mechanisms, stereochemistry, functional group chemistry, named reactions, and retrosynthesis.',
    guide: `## Overview
Organic Chemistry is the chemistry of carbon compounds — it underlies pharmaceuticals, agrochemicals, polymers, and life itself. Mechanism mastery is the key to solving any organic problem.

## What You Will Learn
### Electronic Effects & Structure
Hybridisation, resonance, induction, hyperconjugation. Aromaticity (Hückel rule). HOMO-LUMO concept.

### Stereochemistry
Constitutional isomers, stereoisomers, enantiomers, diastereomers. R/S configuration (CIP rules). E/Z notation. Optical activity, racemic mixtures, resolution.

### Reaction Mechanisms
SN1, SN2, E1, E2, E1cb — factors determining mechanism. Electrophilic addition to alkenes (Markovnikov, anti-Markovnikov, halogenation, hydration). Electrophilic aromatic substitution (nitration, halogenation, Friedel-Crafts). Nucleophilic acyl substitution.

### Functional Group Reactions
Alcohols, ethers, aldehydes, ketones, carboxylic acids and derivatives, amines. Named reactions: Grignard, Wittig, Diels-Alder, Aldol, Cannizzaro, Beckmann rearrangement.

### Retrosynthesis
Disconnection approach, synthons, building blocks. Multi-step synthesis design.

## IIT JAM Chemistry
Organic Chemistry accounts for **~35%** of JAM CY.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bsc-cy-mechanisms', 'veda-topic-bsc-cy-stereochemistry', 'veda-topic-bsc-cy-named-reactions'],
    courseIds: [],
    examIds: ['veda-exam-jam-chemistry', 'veda-exam-cuet-ug'],
    relatedSubjectIds: ['veda-subject-bsc-cy-physical', 'veda-subject-bsc-cy-spectroscopy'],
    tags: ['organic-chemistry', 'mechanisms', 'stereochemistry', 'named-reactions', 'synthesis'],
    color: '#064e3b',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bsc-cy-inorganic',
    slug: 'bsc-chemistry-inorganic',
    title: 'Inorganic Chemistry',
    shortTitle: 'Inorganic Chem',
    description: 'Periodic trends, coordination chemistry, organometallics, main group chemistry, and solid state.',
    guide: `## Overview
Inorganic Chemistry covers the chemistry of all elements — from the hydrogen bomb to the catalysts in your car. Coordination chemistry is central to bioinorganic chemistry and drug design.

## What You Will Learn
### Periodic Table & Atomic Structure
Electronic configurations, periodic trends (IE, EA, radii). VSEPR theory, hybridisation, molecular geometry. Bent's rule.

### Coordination Chemistry
Coordination compounds: nomenclature, isomerism (structural, geometric, optical). Crystal Field Theory (CFT): d-orbital splitting, Δ, CFSE, high-spin/low-spin. Spectrochemical series. Magnetic properties. Jahn-Teller distortion.

### Reaction Mechanisms of Complexes
Substitution reactions: square planar (trans effect) and octahedral. Electron transfer reactions.

### Organometallic Chemistry
18-electron rule, metal carbonyls, metallocenes (ferrocene), Wilkinson's catalyst. Catalytic cycles (hydrogenation, hydroformylation).

### Main Group Chemistry
Chemistry of s-block (alkali and alkaline earth metals) and p-block elements (boron, carbon, nitrogen, oxygen, halogen, noble gas families). Hydrides, oxides, halides.

### Solid State
Crystal systems, unit cells, packing efficiency, ionic radii ratios, Born-Haber cycle.

## IIT JAM Chemistry
Inorganic Chemistry accounts for **~25%** of JAM CY.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bsc-cy-coordination', 'veda-topic-bsc-cy-cft', 'veda-topic-bsc-cy-organometallics'],
    courseIds: [],
    examIds: ['veda-exam-jam-chemistry', 'veda-exam-cuet-ug'],
    relatedSubjectIds: ['veda-subject-bsc-cy-physical', 'veda-subject-bsc-cy-spectroscopy'],
    tags: ['inorganic-chemistry', 'coordination', 'crystal-field', 'organometallic', 'solid-state'],
    color: '#064e3b',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bsc-cy-spectroscopy',
    slug: 'bsc-chemistry-spectroscopy',
    title: 'Spectroscopy & Analytical Chemistry',
    shortTitle: 'Spectroscopy',
    description: 'UV-Vis, IR, NMR, and Mass Spectrometry — tools for structure determination; chromatographic separations.',
    guide: `## Overview
Spectroscopy is how chemists identify unknown compounds and verify structures. NMR is the most powerful technique — mastering spectrum interpretation is essential for all chemistry roles.

## What You Will Learn
### UV-Vis Spectroscopy
Beer-Lambert law (A = εcl), chromophores, auxochromes, conjugation effects on λ_max. Electronic transitions (π→π*, n→π*). UV-Vis in quantitative analysis.

### IR Spectroscopy
Molecular vibrations: stretching and bending. Functional group characteristic absorptions (OH ~3300, C=O ~1715, N-H ~3300-3400, C≡N ~2200 cm⁻¹). Fingerprint region.

### NMR Spectroscopy
¹H NMR: chemical shift (δ, ppm), reference TMS. Shielding and deshielding. Integration (relative number of protons). Spin-spin coupling (J, n+1 rule, Pascal's triangle). ¹³C NMR basics. 2D NMR concepts (COSY, HMBC).

### Mass Spectrometry
Molecular ion (M⁺), base peak, fragmentation patterns. McLafferty rearrangement, retro-Diels-Alder. High-resolution MS: exact mass for formula determination.

### Analytical Chemistry
pH, buffers, titrations (acid-base, redox, complexometric). Chromatography: TLC, column, GC, HPLC — principles and applications.

## IIT JAM Chemistry
Spectroscopy is embedded in both organic and physical chemistry sections.`,
    academicLevels: ['undergraduate'],
    topicIds: ['veda-topic-bsc-cy-nmr', 'veda-topic-bsc-cy-ir-mass-spec', 'veda-topic-bsc-cy-analytical'],
    courseIds: [],
    examIds: ['veda-exam-jam-chemistry', 'veda-exam-cuet-ug'],
    relatedSubjectIds: ['veda-subject-bsc-cy-organic', 'veda-subject-bsc-cy-physical'],
    tags: ['spectroscopy', 'nmr', 'ir', 'mass-spec', 'analytical-chemistry'],
    color: '#064e3b',
    updatedAt: '2026-09-16',
  },
];
