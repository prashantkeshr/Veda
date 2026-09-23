import type { Resource } from '../models';

const base = {
  courseIds: [] as string[], branchIds: [] as string[], semesterIds: [] as string[],
  institutionIds: [] as string[], relatedResourceIds: [] as string[], prerequisiteIds: [] as string[],
  verificationStatus: 'verified' as const, contentStatus: 'published' as const,
  language: 'en', academicLevel: 'undergraduate' as const,
  createdAt: '2025-01-01', updatedAt: '2025-01-01',
};

export const resourcesEnggBtData: Resource[] = [

  // ── Biochemistry – Metabolism ──────────────────────────────────────────────────
  {
    ...base, id: 'veda-rbt-bc-01', slug: 'bt-biochemistry-nptel',
    title: 'Biochemistry – NPTEL IIT Kharagpur',
    description: 'Biomolecules (carbohydrates, lipids, proteins, nucleic acids), enzyme kinetics (Michaelis-Menten), metabolic pathways (glycolysis, TCA, oxidative phosphorylation), and biosignalling.',
    type: 'video', url: 'https://nptel.ac.in/courses/102105035',
    subjectIds: ['veda-subject-bt-biochemistry'], topicIds: ['veda-topic-bt-bc-metabolism', 'veda-topic-bt-bc-enzymes', 'veda-topic-bt-bc-biomolecules'],
    examIds: ['veda-exam-gate-bt'],
    difficulty: 'intermediate', source: 'IIT Kharagpur', provider: 'NPTEL',
    tags: ['biochemistry', 'glycolysis', 'tca-cycle', 'enzyme-kinetics', 'NPTEL'],
    seoTitle: 'Biochemistry – NPTEL IIT Kharagpur', seoDescription: 'Full NPTEL biochemistry course for GATE BT: metabolic pathways and enzyme kinetics.',
  },
  {
    ...base, id: 'veda-rbt-bc-02', slug: 'bt-metabolism-khan',
    title: 'Cellular Respiration & Metabolic Pathways | Khan Academy',
    description: 'Glycolysis (10 steps, ATP yield), pyruvate oxidation, Krebs/TCA cycle (8 steps, NADH/FADH₂), oxidative phosphorylation (chemiosmosis, ATP synthase), and fermentation pathways.',
    type: 'website', url: 'https://www.khanacademy.org/science/ap-biology/cellular-energetics',
    subjectIds: ['veda-subject-bt-biochemistry'], topicIds: ['veda-topic-bt-bc-metabolism'],
    examIds: ['veda-exam-gate-bt'],
    difficulty: 'intermediate', source: 'Khan Academy', provider: 'Khan Academy',
    tags: ['glycolysis', 'tca-cycle', 'cellular-respiration', 'atp', 'fermentation'],
    seoTitle: 'Glycolysis, TCA Cycle & Cellular Respiration | Khan Academy', seoDescription: 'Metabolic pathways — glycolysis, TCA cycle, and oxidative phosphorylation for GATE BT.',
  },

  // ── Biochemistry – Enzymes ──────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rbt-bc-03', slug: 'bt-enzymes-khan',
    title: 'Enzyme Kinetics – Michaelis-Menten, Km, Vmax | Khan Academy',
    description: 'Enzyme active site and specificity, Michaelis-Menten kinetics, Lineweaver-Burk plot, enzyme inhibition (competitive, uncompetitive, mixed), allosteric regulation, and coenzymes.',
    type: 'website', url: 'https://www.khanacademy.org/science/ap-biology/cellular-energetics/enzyme-structure-and-catalysis/a/enzyme-kinetics',
    subjectIds: ['veda-subject-bt-biochemistry'], topicIds: ['veda-topic-bt-bc-enzymes'],
    examIds: ['veda-exam-gate-bt'],
    difficulty: 'intermediate', source: 'Khan Academy', provider: 'Khan Academy',
    tags: ['enzyme-kinetics', 'michaelis-menten', 'km', 'vmax', 'inhibition', 'allosteric'],
    seoTitle: 'Enzyme Kinetics – Michaelis-Menten for GATE BT | Khan Academy', seoDescription: 'Michaelis-Menten kinetics, Lineweaver-Burk plot, and enzyme inhibition for GATE BT.',
  },

  // ── Biochemistry – Biomolecules ─────────────────────────────────────────────────
  {
    ...base, id: 'veda-rbt-bc-04', slug: 'bt-biomolecules-khan',
    title: 'Biomolecules – Proteins, Nucleic Acids, Carbohydrates, Lipids | Khan Academy',
    description: 'Amino acid chemistry and protein structure (primary to quaternary), DNA and RNA structure (base pairs, double helix), carbohydrate anomers and glycosidic bonds, lipid classes and membrane structure.',
    type: 'website', url: 'https://www.khanacademy.org/science/ap-biology/chemistry-of-life',
    subjectIds: ['veda-subject-bt-biochemistry'], topicIds: ['veda-topic-bt-bc-biomolecules'],
    examIds: ['veda-exam-gate-bt'],
    difficulty: 'beginner', source: 'Khan Academy', provider: 'Khan Academy',
    tags: ['proteins', 'dna', 'rna', 'carbohydrates', 'lipids', 'amino-acids'],
    seoTitle: 'Biomolecules – Proteins, DNA, Lipids for GATE BT | Khan Academy', seoDescription: 'Protein structure, nucleic acids, and lipid chemistry for GATE BT biochemistry.',
  },

  // ── Genetics – DNA & Recombination ─────────────────────────────────────────────
  {
    ...base, id: 'veda-rbt-gen-01', slug: 'bt-genetics-nptel',
    title: 'Molecular Biology & Genetics – NPTEL IIT Madras',
    description: 'DNA replication, transcription, translation, gene regulation (lac operon, trp operon), mutation and repair, recombinant DNA technology (restriction enzymes, cloning vectors, PCR, Southern blot).',
    type: 'video', url: 'https://nptel.ac.in/courses/102106062',
    subjectIds: ['veda-subject-bt-genetics'], topicIds: ['veda-topic-bt-gen-dna', 'veda-topic-bt-gen-expression', 'veda-topic-bt-gen-recombinant'],
    examIds: ['veda-exam-gate-bt'],
    difficulty: 'intermediate', source: 'IIT Madras', provider: 'NPTEL',
    tags: ['genetics', 'dna-replication', 'recombinant-dna', 'pcr', 'NPTEL'],
    seoTitle: 'Molecular Biology & Genetics – NPTEL IIT Madras', seoDescription: 'NPTEL molecular biology for GATE BT: replication, transcription, and recombinant DNA.',
  },
  {
    ...base, id: 'veda-rbt-gen-02', slug: 'bt-dna-replication-khan',
    title: 'DNA Replication, Transcription & Translation | Khan Academy',
    description: 'DNA replication (leading/lagging strand, Okazaki fragments, enzymes), mRNA transcription (promoters, sigma factors, splicing), and protein translation (ribosome, codons, aminoacyl-tRNA).',
    type: 'website', url: 'https://www.khanacademy.org/science/ap-biology/gene-expression-and-regulation',
    subjectIds: ['veda-subject-bt-genetics'], topicIds: ['veda-topic-bt-gen-dna', 'veda-topic-bt-gen-expression'],
    examIds: ['veda-exam-gate-bt'],
    difficulty: 'intermediate', source: 'Khan Academy', provider: 'Khan Academy',
    tags: ['dna-replication', 'transcription', 'translation', 'okazaki', 'ribosome'],
    seoTitle: 'DNA Replication & Gene Expression for GATE BT | Khan Academy', seoDescription: 'DNA replication, transcription, and translation for GATE BT molecular biology.',
  },

  // ── Genetics – Gene Expression ──────────────────────────────────────────────────
  {
    ...base, id: 'veda-rbt-gen-03', slug: 'bt-gene-regulation-gfg',
    title: 'Gene Regulation – Operon Model, lac, trp, Eukaryotic Regulation | GfG',
    description: 'Prokaryotic gene regulation: lac operon (inducible), trp operon (repressible), catabolite repression. Eukaryotic regulation: enhancers, silencers, transcription factors, chromatin remodelling, and RNA processing.',
    type: 'website', url: 'https://www.geeksforgeeks.org/operon-model/',
    subjectIds: ['veda-subject-bt-genetics'], topicIds: ['veda-topic-bt-gen-expression'],
    examIds: ['veda-exam-gate-bt'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['operon', 'lac-operon', 'trp-operon', 'gene-regulation', 'enhancers'],
    seoTitle: 'Gene Regulation – lac operon for GATE BT | GfG', seoDescription: 'Lac operon, trp operon, and eukaryotic gene regulation for GATE BT genetics.',
  },

  // ── Genetics – Recombinant DNA ──────────────────────────────────────────────────
  {
    ...base, id: 'veda-rbt-gen-04', slug: 'bt-recombinant-dna-gfg',
    title: 'Recombinant DNA Technology – PCR, Cloning Vectors, CRISPR | GfG',
    description: 'Restriction endonucleases, gel electrophoresis, cloning vectors (plasmids, lambda phage, BAC, YAC), PCR (Taq polymerase, primers, cycles), Southern/Northern/Western blotting, and CRISPR-Cas9 basics.',
    type: 'website', url: 'https://www.geeksforgeeks.org/recombinant-dna-technology/',
    subjectIds: ['veda-subject-bt-genetics'], topicIds: ['veda-topic-bt-gen-recombinant'],
    examIds: ['veda-exam-gate-bt'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['recombinant-dna', 'pcr', 'cloning', 'restriction-enzyme', 'crispr'],
    seoTitle: 'Recombinant DNA – PCR & Cloning for GATE BT | GfG', seoDescription: 'Restriction enzymes, PCR, cloning vectors, and CRISPR for GATE BT biotechnology.',
  },

  // ── Bioprocess – Fermentation ────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rbt-bp-01', slug: 'bt-bioprocess-nptel',
    title: 'Bioprocess Engineering – NPTEL IIT Kharagpur',
    description: 'Microbial growth kinetics (Monod equation), batch/fed-batch/continuous fermentation, bioreactor design (CSTR, PFR), dissolved oxygen, sterilisation (thermal death kinetics), and downstream processing.',
    type: 'video', url: 'https://nptel.ac.in/courses/102105044',
    subjectIds: ['veda-subject-bt-bioprocess'], topicIds: ['veda-topic-bt-bp-fermentation', 'veda-topic-bt-bp-bioreactors', 'veda-topic-bt-bp-downstream'],
    examIds: ['veda-exam-gate-bt'],
    difficulty: 'intermediate', source: 'IIT Kharagpur', provider: 'NPTEL',
    tags: ['bioprocess', 'fermentation', 'bioreactor', 'monod', 'downstream', 'NPTEL'],
    seoTitle: 'Bioprocess Engineering – NPTEL IIT Kharagpur', seoDescription: 'NPTEL bioprocess course for GATE BT: fermentation kinetics, bioreactors, and DSP.',
  },
  {
    ...base, id: 'veda-rbt-bp-02', slug: 'bt-fermentation-gfg',
    title: 'Microbial Growth Kinetics & Fermentation | GeeksforGeeks',
    description: 'Monod equation, specific growth rate (μ), doubling time, growth phases (lag, exponential, stationary, decline), yield coefficient, batch vs continuous (chemostat) fermentation, and dilution rate D = μ.',
    type: 'website', url: 'https://www.geeksforgeeks.org/microbial-growth/',
    subjectIds: ['veda-subject-bt-bioprocess'], topicIds: ['veda-topic-bt-bp-fermentation'],
    examIds: ['veda-exam-gate-bt'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['microbial-growth', 'monod', 'chemostat', 'doubling-time', 'fermentation'],
    seoTitle: 'Microbial Growth Kinetics & Fermentation for GATE BT | GfG', seoDescription: 'Monod equation, growth phases, and chemostat fermentation for GATE BT bioprocess.',
  },

  // ── Bioprocess – Bioreactors ─────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rbt-bp-03', slug: 'bt-bioreactors-gfg',
    title: 'Bioreactor Design – Stirred Tank, Airlift, Mass Transfer | GfG',
    description: 'Stirred tank bioreactor (STR), airlift and bubble column reactors, kLa measurement (volumetric oxygen transfer coefficient), power input correlation, scale-up criteria, and immobilised cell reactors.',
    type: 'website', url: 'https://www.geeksforgeeks.org/bioreactor-design/',
    subjectIds: ['veda-subject-bt-bioprocess'], topicIds: ['veda-topic-bt-bp-bioreactors'],
    examIds: ['veda-exam-gate-bt'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['bioreactor', 'kla', 'stirred-tank', 'airlift', 'oxygen-transfer', 'scale-up'],
    seoTitle: 'Bioreactor Design & kLa for GATE BT | GfG', seoDescription: 'Stirred tank bioreactor design, oxygen transfer (kLa), and scale-up for GATE BT.',
  },

  // ── Bioprocess – Downstream Processing ────────────────────────────────────────
  {
    ...base, id: 'veda-rbt-bp-04', slug: 'bt-downstream-gfg',
    title: 'Downstream Processing – Centrifugation, Chromatography, UF | GfG',
    description: 'Cell disruption, centrifugation (sigma factor), precipitation (ammonium sulphate), membrane filtration (UF, MF), chromatography (ion exchange, gel filtration, affinity, hydrophobic interaction), and crystallisation.',
    type: 'website', url: 'https://www.geeksforgeeks.org/downstream-processing/',
    subjectIds: ['veda-subject-bt-bioprocess'], topicIds: ['veda-topic-bt-bp-downstream'],
    examIds: ['veda-exam-gate-bt'],
    difficulty: 'advanced', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['downstream-processing', 'chromatography', 'centrifugation', 'ultrafiltration'],
    seoTitle: 'Downstream Processing – Chromatography for GATE BT | GfG', seoDescription: 'Centrifugation, chromatography, and ultrafiltration in downstream processing for GATE BT.',
  },

  // ── Bioinformatics – Sequence Analysis ────────────────────────────────────────
  {
    ...base, id: 'veda-rbt-bi-01', slug: 'bt-bioinformatics-nptel',
    title: 'Bioinformatics – NPTEL IIT Madras',
    description: 'Pairwise and multiple sequence alignment (Needleman-Wunsch, Smith-Waterman, BLAST), phylogenetic tree construction, protein structure prediction, and genome assembly basics.',
    type: 'video', url: 'https://nptel.ac.in/courses/102106065',
    subjectIds: ['veda-subject-bt-bioinformatics'], topicIds: ['veda-topic-bt-bi-sequence', 'veda-topic-bt-bi-databases', 'veda-topic-bt-bi-ml'],
    examIds: ['veda-exam-gate-bt'],
    difficulty: 'intermediate', source: 'IIT Madras', provider: 'NPTEL',
    tags: ['bioinformatics', 'blast', 'alignment', 'phylogenetics', 'NPTEL'],
    seoTitle: 'Bioinformatics – NPTEL IIT Madras', seoDescription: 'NPTEL bioinformatics for GATE BT: sequence alignment, BLAST, and phylogenetics.',
  },
  {
    ...base, id: 'veda-rbt-bi-02', slug: 'bt-blast-ncbi',
    title: 'Sequence Analysis & BLAST – NCBI Learning Resources',
    description: 'NCBI BLAST tutorial: nucleotide and protein BLAST, E-value interpretation, alignment scoring (BLOSUM62, PAM), reading GenBank entries, and using Entrez databases for sequence retrieval.',
    type: 'website', url: 'https://www.ncbi.nlm.nih.gov/home/learn/',
    subjectIds: ['veda-subject-bt-bioinformatics'], topicIds: ['veda-topic-bt-bi-sequence', 'veda-topic-bt-bi-databases'],
    examIds: ['veda-exam-gate-bt'],
    difficulty: 'intermediate', source: 'NCBI', provider: 'NCBI',
    tags: ['blast', 'e-value', 'blosum', 'genbank', 'sequence-alignment', 'ncbi'],
    seoTitle: 'BLAST & Sequence Analysis – NCBI Tutorials', seoDescription: 'NCBI BLAST tutorial, E-value, and BLOSUM scoring for GATE BT bioinformatics.',
  },
  {
    ...base, id: 'veda-rbt-bi-03', slug: 'bt-bioinformatics-ml-gfg',
    title: 'Machine Learning in Bioinformatics – Clustering, SVM, Neural Nets | GfG',
    description: 'K-means and hierarchical clustering for gene expression, SVM for protein function prediction, hidden Markov models (HMM) for sequence profiles, and deep learning in genomics basics.',
    type: 'website', url: 'https://www.geeksforgeeks.org/machine-learning-in-bioinformatics/',
    subjectIds: ['veda-subject-bt-bioinformatics'], topicIds: ['veda-topic-bt-bi-ml'],
    examIds: ['veda-exam-gate-bt'],
    difficulty: 'advanced', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['ml-bioinformatics', 'hmm', 'clustering', 'svm', 'gene-expression'],
    seoTitle: 'ML in Bioinformatics – HMM & Clustering for GATE BT | GfG', seoDescription: 'K-means clustering, SVM, and HMM in bioinformatics for GATE BT bioinformatics.',
  },
];
