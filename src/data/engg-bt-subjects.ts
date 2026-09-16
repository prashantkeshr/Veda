import type { Subject } from '../models';

export const btSubjectsData: Subject[] = [
  {
    id: 'veda-subject-bt-biochemistry',
    slug: 'biotech-biochemistry',
    title: 'Biochemistry',
    shortTitle: 'Biochemistry',
    description: 'Structure and function of biomolecules — proteins, carbohydrates, lipids, nucleic acids — and metabolic pathways.',
    guide: `## Overview
Biochemistry is the chemistry of living systems. It explains how molecular structure determines biological function, and how cells extract and use energy. It is the scientific foundation of biotechnology, medicine, and pharmaceutical research.

## What You Will Learn
### Biomolecule Structure
Amino acids: classification, properties, peptide bonds. Protein structure levels (primary through quaternary). Carbohydrates: monosaccharides, glycosidic bonds, polysaccharides (starch, glycogen, cellulose). Lipids: fatty acids, triglycerides, phospholipids, sterols.

### Enzymes
Enzyme kinetics: Michaelis-Menten equation, Km, Vmax. Lineweaver-Burk plot. Enzyme inhibition: competitive, non-competitive, uncompetitive. Allosteric regulation.

### Metabolism — Catabolism
Glycolysis (10 steps, net 2 ATP). Pyruvate oxidation. Citric acid (Krebs) cycle. Electron transport chain and oxidative phosphorylation (ATP synthase, Mitchell's chemiosmotic theory). β-oxidation of fatty acids.

### Metabolism — Anabolism
Gluconeogenesis and its regulation vs glycolysis. Fatty acid synthesis (acetyl-CoA carboxylase). Amino acid biosynthesis overview.

### Nucleic Acid Biochemistry
DNA double helix — Watson-Crick model. DNA replication: enzymes (helicase, primase, DNA pol I, III, ligase). RNA types and functions. Transcription and post-transcriptional processing.

## GATE BT Weightage
Biochemistry accounts for **15–18 marks** in GATE BT — the highest single section.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-bt-bc-metabolism',
      'veda-topic-bt-bc-enzymes',
      'veda-topic-bt-bc-biomolecules',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-bt', 'veda-exam-neet'],
    relatedSubjectIds: ['veda-subject-bt-genetics', 'veda-subject-bt-bioprocess'],
    tags: ['biochemistry', 'enzymes', 'metabolism', 'krebs-cycle', 'gate-bt'],
    color: '#14532d',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bt-genetics',
    slug: 'biotech-molecular-genetics',
    title: 'Molecular Biology & Genetics',
    shortTitle: 'Mol. Genetics',
    description: 'DNA replication, transcription, translation, gene regulation, genetic engineering tools, and genomics.',
    guide: `## Overview
Molecular Biology & Genetics is the heart of modern biotechnology — understanding the central dogma and how to manipulate it has enabled gene therapy, CRISPR editing, and recombinant protein production.

## What You Will Learn
### DNA Replication
Prokaryotic replication: ori, Okazaki fragments, proofreading (3'→5' exonuclease). Eukaryotic replication: multiple origins, telomeres, telomerase.

### Transcription & RNA Processing
Prokaryotic: sigma factor, promoter (–10 and –35), termination (rho-independent and rho-dependent). Eukaryotic: RNA Pol II, TATA box, capping, polyadenylation, splicing (snRNPs, lariat). mRNA stability.

### Translation
Ribosomes (70S in prokaryotes, 80S in eukaryotes). Genetic code: codon table, degeneracy, wobble base pairing. Initiation, elongation (peptidyl transferase), termination. Post-translational modifications.

### Gene Regulation
Lac operon and Trp operon. Activators and repressors. Eukaryotic gene regulation: chromatin remodelling, histone modification, enhancers, silencers.

### Genetic Engineering Tools
Restriction enzymes (recognition sites, sticky/blunt ends). Vectors: plasmid, bacteriophage, cosmid, BAC, YAC. PCR: primers, extension, denaturation cycles. Southern, Northern, Western blotting. DNA sequencing (Sanger, NGS).

### Genomics & Bioinformatics Basics
Genome organisation. Transposons. Human Genome Project. BLAST and sequence alignment overview.

## GATE BT Weightage
Molecular Biology & Genetics accounts for **12–15 marks** in GATE BT.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-bt-gen-dna',
      'veda-topic-bt-gen-expression',
      'veda-topic-bt-gen-recombinant',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-bt'],
    relatedSubjectIds: ['veda-subject-bt-biochemistry', 'veda-subject-bt-bioinformatics'],
    tags: ['molecular-biology', 'genetics', 'crispr', 'pcr', 'gene-regulation', 'gate-bt'],
    color: '#14532d',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bt-bioprocess',
    slug: 'biotech-bioprocess-engineering',
    title: 'Bioprocess Engineering',
    shortTitle: 'Bioprocess',
    description: 'Microbial kinetics, bioreactor design, sterilisation, downstream processing, and industrial fermentation.',
    guide: `## Overview
Bioprocess Engineering scales up biological reactions from flask to factory — combining microbiology, engineering, and economics to produce antibiotics, vaccines, ethanol, and recombinant proteins.

## What You Will Learn
### Microbial Kinetics
Monod equation for microbial growth. Specific growth rate (μ), yield coefficient (Y), maintenance coefficient. Batch, fed-batch, and continuous (chemostat) cultures. Productivity and dilution rate.

### Bioreactor Design
Stirred tank bioreactor (STR): oxygen transfer, k_La, OTR, OUR. Power input: ungassed, gassed (Michel-Miller correlation). Mixing time. Bubble column and airlift bioreactors. Scale-up criteria.

### Sterilisation
Thermal death kinetics. Del factor. Batch sterilisation (T-t profile). Continuous sterilisation. HTST and UHT. Filter sterilisation.

### Downstream Processing
Cell disruption methods. Centrifugation: sigma factor, particle sedimentation. Filtration: cake and membrane filtration. Chromatography: ion exchange, affinity, size exclusion, HIC. Precipitation. Crystallisation. Spray drying.

### Industrial Fermentation Examples
Antibiotic (penicillin) production. Recombinant protein (insulin) production. Ethanol fermentation. Amino acid (lysine, glutamic acid) production. Citric acid production.

## GATE BT Weightage
Bioprocess Engineering accounts for **10–12 marks** in GATE BT.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-bt-bp-fermentation',
      'veda-topic-bt-bp-bioreactors',
      'veda-topic-bt-bp-downstream',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-bt'],
    relatedSubjectIds: ['veda-subject-bt-biochemistry', 'veda-subject-ch-reaction-engg'],
    tags: ['bioprocess', 'bioreactor', 'fermentation', 'downstream-processing', 'gate-bt'],
    color: '#14532d',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-bt-bioinformatics',
    slug: 'biotech-bioinformatics',
    title: 'Bioinformatics',
    shortTitle: 'Bioinformatics',
    description: 'Sequence alignment, database tools, structural bioinformatics, phylogenetics, and machine learning in biology.',
    guide: `## Overview
Bioinformatics is where biology meets computing — making sense of the massive datasets generated by genomics, proteomics, and structural biology. It is a fast-growing career path intersecting biology, statistics, and software engineering.

## What You Will Learn
### Biological Databases
GenBank, UniProt, PDB, Ensembl. Database formats (FASTA, FASTQ, PDB). Accessing and querying databases programmatically.

### Sequence Alignment
Pairwise alignment: Needleman-Wunsch (global), Smith-Waterman (local). Scoring matrices: PAM, BLOSUM. BLAST and FASTA heuristics. Multiple sequence alignment: ClustalW, MUSCLE, MAFFT.

### Phylogenetics
Distance-based methods: UPGMA, Neighbour-Joining. Character-based: Maximum Parsimony, Maximum Likelihood, Bayesian inference. Tree topology, bootstrap support.

### Structural Bioinformatics
Protein structure prediction: homology modelling (MODELLER, Swiss-Model), ab initio (Rosetta), deep learning (AlphaFold2). Secondary structure prediction. Molecular docking: AutoDock basics.

### Genomics & Transcriptomics
NGS data analysis pipeline: quality control (FastQC, Trimmomatic), alignment (BWA, STAR), variant calling (GATK), differential expression (DESeq2, edgeR). ChIP-seq and ATAC-seq concepts.

### ML in Bioinformatics
Feature engineering for biological data. Classification: SVM, random forests for gene expression. Deep learning: CNN for sequence motifs, GNN for protein structure.

## Career Value
Bioinformatics skills are in high demand at genomics companies (Strand Life Sciences, Genomics India), pharma, and research institutes.`,
    academicLevels: ['undergraduate', 'postgraduate'],
    topicIds: [
      'veda-topic-bt-bi-sequence',
      'veda-topic-bt-bi-databases',
      'veda-topic-bt-bi-ml',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-bt'],
    relatedSubjectIds: ['veda-subject-bt-genetics', 'veda-subject-cs-dsa'],
    tags: ['bioinformatics', 'sequence-alignment', 'blast', 'alphafold', 'genomics', 'gate-bt'],
    color: '#14532d',
    updatedAt: '2026-09-16',
  },
];
