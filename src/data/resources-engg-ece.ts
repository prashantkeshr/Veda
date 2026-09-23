import type { Resource } from '../models';

const base = {
  courseIds: [] as string[], branchIds: [] as string[], semesterIds: [] as string[],
  institutionIds: [] as string[], relatedResourceIds: [] as string[], prerequisiteIds: [] as string[],
  verificationStatus: 'verified' as const, contentStatus: 'published' as const,
  language: 'en', academicLevel: 'undergraduate' as const,
  createdAt: '2025-01-01', updatedAt: '2025-01-01',
};

export const resourcesEnggEceData: Resource[] = [

  // ── Analog Circuits – Diodes ───────────────────────────────────────────────────
  {
    ...base, id: 'veda-rece-ac-01', slug: 'ece-diodes-khan',
    title: 'Diodes – PN Junction, I-V Characteristics, Zener | Khan Academy',
    description: 'PN junction diode: depletion region, forward/reverse bias, I-V characteristic, ideal vs practical diode model, Zener diode and voltage regulation, breakdown mechanisms.',
    type: 'website', url: 'https://www.khanacademy.org/science/ap-physics-2/ap-circuits-topic',
    subjectIds: ['veda-subject-ece-analog'], topicIds: ['veda-topic-ece-ac-diodes'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'beginner', source: 'Khan Academy', provider: 'Khan Academy',
    tags: ['diode', 'pn-junction', 'zener', 'i-v-characteristic', 'gate-ece'],
    seoTitle: 'Diodes & PN Junction for GATE ECE | Khan Academy', seoDescription: 'PN junction, Zener diode, and I-V characteristics for GATE ECE analog circuits.',
  },
  {
    ...base, id: 'veda-rece-ac-02', slug: 'ece-analog-circuits-nptel',
    title: 'Analog Electronic Circuits – NPTEL IIT Bombay',
    description: 'Diodes, BJTs, FETs, amplifier analysis, frequency response, feedback, operational amplifiers, and oscillators. Complete GATE ECE analog circuits syllabus from IIT Bombay faculty.',
    type: 'video', url: 'https://nptel.ac.in/courses/117102062',
    subjectIds: ['veda-subject-ece-analog'], topicIds: ['veda-topic-ece-ac-diodes', 'veda-topic-ece-ac-bjt', 'veda-topic-ece-ac-fet', 'veda-topic-ece-ac-opamp'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'IIT Bombay', provider: 'NPTEL',
    tags: ['analog-circuits', 'bjt', 'fet', 'opamp', 'feedback', 'NPTEL'],
    seoTitle: 'Analog Electronic Circuits – NPTEL IIT Bombay', seoDescription: 'Full NPTEL analog circuits course for GATE ECE: diodes, BJTs, FETs, and op-amps.',
  },

  // ── Analog Circuits – BJT ──────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rece-ac-03', slug: 'ece-bjt-electronics-tutorials',
    title: 'BJT – Transistor Biasing, h-Parameters, Amplifiers | ET',
    description: 'NPN/PNP BJT operation, DC biasing (fixed, voltage divider), small-signal model (h-parameter), CE/CB/CC amplifier configurations, gain, input/output resistance, and frequency response.',
    type: 'website', url: 'https://www.electronics-tutorials.ws/transistor/tran_1.html',
    subjectIds: ['veda-subject-ece-analog'], topicIds: ['veda-topic-ece-ac-bjt'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'Electronics Tutorials', provider: 'Electronics Tutorials',
    tags: ['bjt', 'transistor', 'biasing', 'h-parameters', 'ce-amplifier'],
    seoTitle: 'BJT Transistor – Biasing & Amplifiers for GATE ECE | ET', seoDescription: 'BJT biasing, h-parameter model, and CE/CB/CC amplifier analysis for GATE ECE.',
  },

  // ── Analog Circuits – FET (MOSFET/JFET) ───────────────────────────────────────
  {
    ...base, id: 'veda-rece-ac-04', slug: 'ece-mosfet-electronics-tutorials',
    title: 'MOSFET & JFET – Characteristics, Small-Signal Model | ET',
    description: 'JFET pinch-off, MOSFET (enhancement and depletion mode) drain characteristics, threshold voltage, transconductance gm, CS/CG/CD amplifier small-signal analysis.',
    type: 'website', url: 'https://www.electronics-tutorials.ws/transistor/tran_6.html',
    subjectIds: ['veda-subject-ece-analog'], topicIds: ['veda-topic-ece-ac-fet'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'Electronics Tutorials', provider: 'Electronics Tutorials',
    tags: ['mosfet', 'jfet', 'threshold-voltage', 'transconductance', 'cs-amplifier'],
    seoTitle: 'MOSFET & JFET for GATE ECE | Electronics Tutorials', seoDescription: 'MOSFET characteristics, threshold voltage, and CS amplifier analysis for GATE ECE.',
  },

  // ── Analog Circuits – Op-Amp ───────────────────────────────────────────────────
  {
    ...base, id: 'veda-rece-ac-05', slug: 'ece-opamp-electronics-tutorials',
    title: 'Op-Amp – Inverting, Non-Inverting, Integrator, Differentiator | ET',
    description: 'Ideal op-amp characteristics, inverting/non-inverting amplifier, difference amplifier, summing amplifier, integrator, differentiator, comparator, and Schmitt trigger applications.',
    type: 'website', url: 'https://www.electronics-tutorials.ws/opamp/opamp_1.html',
    subjectIds: ['veda-subject-ece-analog'], topicIds: ['veda-topic-ece-ac-opamp'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'Electronics Tutorials', provider: 'Electronics Tutorials',
    tags: ['opamp', 'inverting-amplifier', 'integrator', 'comparator', 'schmitt-trigger'],
    seoTitle: 'Op-Amp Circuits – Inverting, Integrator for GATE ECE | ET', seoDescription: 'Op-amp amplifier configurations, integrator, and comparator for GATE ECE analog.',
  },

  // ── Digital Electronics – Logic Gates ─────────────────────────────────────────
  {
    ...base, id: 'veda-rece-de-01', slug: 'ece-logic-gates-gfg',
    title: 'Logic Gates – AND, OR, NOT, NAND, NOR, XOR, XNOR | GfG',
    description: 'Truth tables, Boolean expressions, universal gates (NAND, NOR), XOR/XNOR properties, transistor-level CMOS implementation, logic levels, fan-out, and propagation delay.',
    type: 'website', url: 'https://www.geeksforgeeks.org/digital-logic-gate-tutorials/',
    subjectIds: ['veda-subject-ece-digital'], topicIds: ['veda-topic-ece-de-logic-gates'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'beginner', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['logic-gates', 'nand', 'nor', 'xor', 'cmos', 'boolean'],
    seoTitle: 'Logic Gates – NAND, NOR, XOR for GATE ECE | GfG', seoDescription: 'Logic gate truth tables, Boolean expressions, and CMOS implementation for GATE ECE.',
  },
  {
    ...base, id: 'veda-rece-de-02', slug: 'ece-digital-electronics-nptel',
    title: 'Digital Circuits & Systems – NPTEL IIT Madras',
    description: 'Logic families, combinational circuits, sequential circuits, memories (SRAM, DRAM, ROM), and programmable logic. Complete GATE ECE digital electronics syllabus.',
    type: 'video', url: 'https://nptel.ac.in/courses/117106086',
    subjectIds: ['veda-subject-ece-digital'], topicIds: ['veda-topic-ece-de-logic-gates', 'veda-topic-ece-de-combinational', 'veda-topic-ece-de-sequential', 'veda-topic-ece-de-memories'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'IIT Madras', provider: 'NPTEL',
    tags: ['digital-circuits', 'sequential', 'combinational', 'memory', 'NPTEL'],
    seoTitle: 'Digital Circuits & Systems – NPTEL IIT Madras', seoDescription: 'NPTEL digital electronics course for GATE ECE: combinational, sequential, and memories.',
  },

  // ── Digital Electronics – Combinational ────────────────────────────────────────
  {
    ...base, id: 'veda-rece-de-03', slug: 'ece-combinational-circuits-gfg',
    title: 'Combinational Circuits – MUX, Decoder, Half/Full Adder | GfG',
    description: 'Half adder, full adder, carry look-ahead adder, subtractor, multiplexers (2:1 to 16:1), demultiplexers, binary encoders and decoders, comparators — with logic diagram implementations.',
    type: 'website', url: 'https://www.geeksforgeeks.org/combinational-circuits/',
    subjectIds: ['veda-subject-ece-digital'], topicIds: ['veda-topic-ece-de-combinational'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['combinational', 'mux', 'decoder', 'adder', 'subtractor'],
    seoTitle: 'Combinational Circuits – MUX & Adders for GATE ECE | GfG', seoDescription: 'MUX, decoder, and adder combinational circuits for GATE ECE digital electronics.',
  },

  // ── Digital Electronics – Sequential ───────────────────────────────────────────
  {
    ...base, id: 'veda-rece-de-04', slug: 'ece-sequential-circuits-gfg',
    title: 'Sequential Circuits – Flip-Flops, Registers, Counters | GfG',
    description: 'SR, JK, D, T flip-flops, state tables and excitation tables, synchronous/asynchronous counters, shift registers, sequence detectors, and Mealy vs Moore machine design.',
    type: 'website', url: 'https://www.geeksforgeeks.org/sequential-circuits/',
    subjectIds: ['veda-subject-ece-digital'], topicIds: ['veda-topic-ece-de-sequential'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['sequential', 'flip-flop', 'counter', 'shift-register', 'mealy-moore'],
    seoTitle: 'Sequential Circuits – Flip-Flops & Counters for GATE ECE | GfG', seoDescription: 'Flip-flops, counters, and Mealy/Moore machines for GATE ECE digital circuits.',
  },

  // ── Digital Electronics – Memories ─────────────────────────────────────────────
  {
    ...base, id: 'veda-rece-de-05', slug: 'ece-memories-gfg',
    title: 'Memory Devices – SRAM, DRAM, ROM, PROM, EPROM | GfG',
    description: 'Static and dynamic RAM cell structure, ROM types (mask, PROM, EPROM, EEPROM, Flash), memory organisation (address/data bus width), cache memory concepts, and memory interfacing.',
    type: 'website', url: 'https://www.geeksforgeeks.org/ram-and-rom-types-of-memory/',
    subjectIds: ['veda-subject-ece-digital'], topicIds: ['veda-topic-ece-de-memories'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['sram', 'dram', 'rom', 'eprom', 'flash', 'memory-organisation'],
    seoTitle: 'Memory Devices – SRAM, DRAM, ROM for GATE ECE | GfG', seoDescription: 'SRAM, DRAM, and ROM types, organisation, and interfacing for GATE ECE.',
  },

  // ── Communications – Analog Modulation ─────────────────────────────────────────
  {
    ...base, id: 'veda-rece-cm-01', slug: 'ece-communications-nptel',
    title: 'Principles of Communication – NPTEL IIT Madras',
    description: 'Analog modulation (AM, FM, PM), demodulation, noise in analog systems, digital modulation (ASK, FSK, PSK, QAM), BER vs SNR, channel coding, and spread spectrum. Full GATE ECE comm syllabus.',
    type: 'video', url: 'https://nptel.ac.in/courses/117106115',
    subjectIds: ['veda-subject-ece-comms'], topicIds: ['veda-topic-ece-cm-analog-mod', 'veda-topic-ece-cm-digital-mod', 'veda-topic-ece-cm-noise', 'veda-topic-ece-cm-multiplexing'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'IIT Madras', provider: 'NPTEL',
    tags: ['communications', 'am', 'fm', 'psk', 'qam', 'ber', 'NPTEL'],
    seoTitle: 'Principles of Communication – NPTEL IIT Madras', seoDescription: 'Full NPTEL communications course for GATE ECE: analog/digital modulation and noise.',
  },
  {
    ...base, id: 'veda-rece-cm-02', slug: 'ece-am-fm-gfg',
    title: 'Analog Modulation – AM, FM, PM, SSB, DSB | GeeksforGeeks',
    description: 'AM modulation index, power in AM signal, DSB-SC and SSB-SC, FM deviation, bandwidth (Carson\'s rule), FM demodulation (discriminator), phase modulation, and WBFM vs NBFM.',
    type: 'website', url: 'https://www.geeksforgeeks.org/analog-modulation/',
    subjectIds: ['veda-subject-ece-comms'], topicIds: ['veda-topic-ece-cm-analog-mod'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['am', 'fm', 'ssb', 'modulation-index', 'carsons-rule', 'bandwidth'],
    seoTitle: 'Analog Modulation – AM, FM, SSB for GATE ECE | GfG', seoDescription: 'AM modulation index, FM bandwidth by Carson\'s rule, and SSB for GATE ECE communications.',
  },

  // ── Communications – Digital Modulation ────────────────────────────────────────
  {
    ...base, id: 'veda-rece-cm-03', slug: 'ece-digital-modulation-gfg',
    title: 'Digital Modulation – ASK, FSK, PSK, QPSK, QAM | GfG',
    description: 'ASK, FSK, BPSK, DPSK, QPSK, and QAM: bandwidth requirements, BER performance, constellation diagrams, Shannon capacity, Nyquist rate, and ISI. Fundamental GATE ECE digital comm topics.',
    type: 'website', url: 'https://www.geeksforgeeks.org/digital-modulation/',
    subjectIds: ['veda-subject-ece-comms'], topicIds: ['veda-topic-ece-cm-digital-mod'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['psk', 'qam', 'qpsk', 'bpsk', 'ber', 'constellation', 'digital-modulation'],
    seoTitle: 'Digital Modulation – PSK, QAM, BER for GATE ECE | GfG', seoDescription: 'ASK, FSK, PSK, QAM, and BER analysis for GATE ECE digital communications.',
  },

  // ── Communications – Noise ──────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rece-cm-04', slug: 'ece-noise-gfg',
    title: 'Noise – Thermal, Shot, Figure of Merit, SNR | GeeksforGeeks',
    description: 'Thermal noise (Johnson-Nyquist), shot noise, noise figure, noise temperature, cascaded systems (Friis formula), signal-to-noise ratio (SNR), and noise in AM/FM demodulators.',
    type: 'website', url: 'https://www.geeksforgeeks.org/noise-in-communication-systems/',
    subjectIds: ['veda-subject-ece-comms'], topicIds: ['veda-topic-ece-cm-noise'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['noise', 'thermal-noise', 'noise-figure', 'snr', 'friis-formula'],
    seoTitle: 'Noise – Thermal Noise, SNR & Noise Figure for GATE ECE | GfG', seoDescription: 'Thermal noise, noise figure, Friis formula, and SNR for GATE ECE communications.',
  },

  // ── Communications – Multiplexing ───────────────────────────────────────────────
  {
    ...base, id: 'veda-rece-cm-05', slug: 'ece-multiplexing-gfg',
    title: 'Multiplexing – TDM, FDM, WDM, PCM, Sampling | GfG',
    description: 'Frequency division multiplexing (FDM), time division multiplexing (TDM), pulse code modulation (PCM), sampling theorem, quantisation noise, companding, and wavelength division multiplexing (WDM).',
    type: 'website', url: 'https://www.geeksforgeeks.org/multiplexing-and-demultiplexing-in-computer-networks/',
    subjectIds: ['veda-subject-ece-comms'], topicIds: ['veda-topic-ece-cm-multiplexing'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['tdm', 'fdm', 'pcm', 'sampling', 'quantisation', 'companding'],
    seoTitle: 'Multiplexing – TDM, FDM, PCM for GATE ECE | GfG', seoDescription: 'TDM, FDM, PCM, and sampling theorem for GATE ECE communications and signals.',
  },

  // ── EM Theory – Static Fields ───────────────────────────────────────────────────
  {
    ...base, id: 'veda-rece-em-01', slug: 'ece-electromagnetics-nptel',
    title: 'Electromagnetic Theory – NPTEL IIT Madras',
    description: "Vector calculus review, Coulomb's law, Gauss's law, electric potential, Laplace/Poisson equation, Biot-Savart, Ampere's law, Faraday's law, Maxwell's equations, and plane wave propagation.",
    type: 'video', url: 'https://nptel.ac.in/courses/117106153',
    subjectIds: ['veda-subject-ece-em'], topicIds: ['veda-topic-ece-em-static-fields', 'veda-topic-ece-em-waves', 'veda-topic-ece-em-transmission-lines', 'veda-topic-ece-em-antennas'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'IIT Madras', provider: 'NPTEL',
    tags: ['electromagnetics', 'maxwells-equations', 'wave-propagation', 'NPTEL'],
    seoTitle: 'Electromagnetic Theory – NPTEL IIT Madras', seoDescription: 'Full NPTEL EM theory course for GATE ECE: static fields, waves, and transmission lines.',
  },
  {
    ...base, id: 'veda-rece-em-02', slug: 'ece-em-static-fields-gfg',
    title: 'Electrostatics – Coulomb, Gauss, Laplace, Electric Potential | GfG',
    description: "Coulomb's law, electric field intensity E, Gauss's law (integral and differential form), work and potential, boundary conditions, Laplace's equation solutions, method of images.",
    type: 'website', url: 'https://www.geeksforgeeks.org/electromagnetic-field-theory/',
    subjectIds: ['veda-subject-ece-em'], topicIds: ['veda-topic-ece-em-static-fields'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['electrostatics', 'coulombs-law', 'gauss-law', 'laplace', 'electric-potential'],
    seoTitle: 'Electrostatics – Coulomb, Gauss for GATE ECE | GfG', seoDescription: "Coulomb's law, Gauss's law, and electrostatic potential for GATE ECE EM theory.",
  },

  // ── EM Theory – Wave Propagation ────────────────────────────────────────────────
  {
    ...base, id: 'veda-rece-em-03', slug: 'ece-em-waves-allabout',
    title: "Maxwell's Equations & Plane Wave Propagation | All About Circuits",
    description: "Maxwell's four equations in differential and integral form, wave equation derivation, plane wave in lossless and lossy media, skin depth, wave impedance, and Poynting vector.",
    type: 'website', url: 'https://www.allaboutcircuits.com/technical-articles/maxwells-equations/',
    subjectIds: ['veda-subject-ece-em'], topicIds: ['veda-topic-ece-em-waves'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'All About Circuits', provider: 'All About Circuits',
    tags: ['maxwells-equations', 'plane-wave', 'skin-depth', 'poynting-vector'],
    seoTitle: "Maxwell's Equations & Plane Waves for GATE ECE | All About Circuits", seoDescription: "Maxwell's equations and plane wave propagation for GATE ECE electromagnetic theory.",
  },

  // ── EM Theory – Transmission Lines ─────────────────────────────────────────────
  {
    ...base, id: 'veda-rece-em-04', slug: 'ece-transmission-lines-allabout',
    title: 'Transmission Line Theory – Impedance, VSWR, Smith Chart | All About Circuits',
    description: 'Transmission line equations, characteristic impedance Z₀, reflection coefficient Γ, VSWR, quarter-wave transformer, Smith chart basics, and impedance matching techniques.',
    type: 'website', url: 'https://www.allaboutcircuits.com/textbook/alternating-current/chpt-14/',
    subjectIds: ['veda-subject-ece-em'], topicIds: ['veda-topic-ece-em-transmission-lines'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'All About Circuits', provider: 'All About Circuits',
    tags: ['transmission-line', 'vswr', 'smith-chart', 'reflection-coefficient', 'impedance-matching'],
    seoTitle: 'Transmission Lines – VSWR & Smith Chart for GATE ECE', seoDescription: 'Transmission line impedance, VSWR, and Smith chart for GATE ECE electromagnetics.',
  },

  // ── EM Theory – Antennas ─────────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rece-em-05', slug: 'ece-antennas-gfg',
    title: 'Antennas – Dipole, Gain, Directivity, Effective Area | GfG',
    description: 'Antenna parameters: radiation resistance, gain, directivity, effective aperture, half-power beamwidth (HPBW), half-wave dipole, quarter-wave monopole, Hertzian dipole, Friis transmission equation.',
    type: 'website', url: 'https://www.geeksforgeeks.org/antenna-theory/',
    subjectIds: ['veda-subject-ece-em'], topicIds: ['veda-topic-ece-em-antennas'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['antennas', 'gain', 'directivity', 'dipole', 'hpbw', 'friis'],
    seoTitle: 'Antennas – Gain, Dipole & Friis Equation for GATE ECE | GfG', seoDescription: 'Antenna gain, directivity, dipole, and Friis transmission equation for GATE ECE.',
  },

  // ── VLSI – CMOS ──────────────────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rece-vlsi-01', slug: 'ece-vlsi-nptel',
    title: 'VLSI Design – NPTEL IIT Madras',
    description: 'CMOS process, MOSFET scaling, static CMOS logic, pass-transistor logic, dynamic CMOS, MOS capacitances, delay estimation, power dissipation (static and dynamic), and floor planning.',
    type: 'video', url: 'https://nptel.ac.in/courses/117106154',
    subjectIds: ['veda-subject-ece-vlsi'], topicIds: ['veda-topic-ece-vlsi-cmos', 'veda-topic-ece-vlsi-logic', 'veda-topic-ece-vlsi-layout', 'veda-topic-ece-vlsi-timing'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'advanced', source: 'IIT Madras', provider: 'NPTEL',
    tags: ['vlsi', 'cmos', 'mosfet-scaling', 'power-dissipation', 'NPTEL'],
    seoTitle: 'VLSI Design – NPTEL IIT Madras', seoDescription: 'NPTEL VLSI design course for GATE ECE: CMOS logic, timing, and power analysis.',
  },
  {
    ...base, id: 'veda-rece-vlsi-02', slug: 'ece-cmos-gfg',
    title: 'CMOS Logic Design – Inverter, NAND, NOR, Pass-Transistor | GfG',
    description: 'CMOS inverter DC characteristics (VTC), static CMOS NAND/NOR gates, transmission gates, pseudo-NMOS, dynamic CMOS (domino logic), and stick diagram representation.',
    type: 'website', url: 'https://www.geeksforgeeks.org/cmos-full-form/',
    subjectIds: ['veda-subject-ece-vlsi'], topicIds: ['veda-topic-ece-vlsi-cmos', 'veda-topic-ece-vlsi-logic'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'advanced', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['cmos', 'inverter', 'vtc', 'nand-gate', 'transmission-gate', 'domino'],
    seoTitle: 'CMOS Logic – Inverter VTC & Gates for GATE ECE | GfG', seoDescription: 'CMOS inverter characteristics, static logic gates, and transmission gates for GATE ECE.',
  },

  // ── VLSI – Layout & Timing ────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rece-vlsi-03', slug: 'ece-vlsi-layout-timing-gfg',
    title: 'VLSI Layout Rules, Propagation Delay & Setup/Hold Time | GfG',
    description: 'Design rules for CMOS layout (lambda-based), Elmore delay model, propagation delay tpd, setup and hold time constraints, clock skew, timing closure, and metastability.',
    type: 'website', url: 'https://www.geeksforgeeks.org/vlsi-full-form/',
    subjectIds: ['veda-subject-ece-vlsi'], topicIds: ['veda-topic-ece-vlsi-layout', 'veda-topic-ece-vlsi-timing'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'advanced', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['vlsi-layout', 'elmore-delay', 'setup-time', 'hold-time', 'clock-skew'],
    seoTitle: 'VLSI Layout & Timing – Setup/Hold Time for GATE ECE | GfG', seoDescription: 'CMOS layout rules, Elmore delay, and setup/hold time for GATE ECE VLSI design.',
  },

  // ── Microprocessors – 8085 ─────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rece-mp-01', slug: 'ece-8085-neso',
    title: '8085 Microprocessor – Architecture, Instruction Set, Programs | Neso Academy',
    description: 'Intel 8085 architecture (ALU, registers, flags, buses), pin description, addressing modes, complete instruction set (data transfer, arithmetic, logical, branch), interrupt structure, and assembly programs.',
    type: 'video', url: 'https://www.youtube.com/playlist?list=PLBlnK6fEyqRjCZnDkHuMHk6bdq4V26OmL',
    subjectIds: ['veda-subject-ece-microprocessors'], topicIds: ['veda-topic-ece-mp-8085'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'Neso Academy', provider: 'YouTube',
    tags: ['8085', 'microprocessor', 'instruction-set', 'addressing-modes', 'assembly'],
    seoTitle: '8085 Microprocessor – Neso Academy Full Playlist', seoDescription: 'Complete 8085 microprocessor course by Neso Academy: architecture, instructions, and programs.',
  },
  {
    ...base, id: 'veda-rece-mp-02', slug: 'ece-8085-gfg',
    title: '8085 Microprocessor – Architecture, Registers & Interrupts | GfG',
    description: 'Intel 8085 block diagram, registers (A, B, C, D, E, H, L, SP, PC, flags), bus structure, instruction formats, interrupt types (TRAP, RST, INTR), and timing diagrams.',
    type: 'website', url: 'https://www.geeksforgeeks.org/intel-8085-microprocessor/',
    subjectIds: ['veda-subject-ece-microprocessors'], topicIds: ['veda-topic-ece-mp-8085'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['8085', 'registers', 'interrupts', 'trap', 'timing-diagram'],
    seoTitle: '8085 Microprocessor Architecture & Interrupts | GfG', seoDescription: '8085 architecture, registers, interrupt structure, and timing for GATE ECE.',
  },

  // ── Microprocessors – 8086 ─────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rece-mp-03', slug: 'ece-8086-gfg',
    title: '8086 Microprocessor – Segmented Memory, Protected Mode | GfG',
    description: 'Intel 8086 architecture, 20-bit segmented addressing (CS:IP, DS, SS, ES), memory segmentation, real vs protected mode, coprocessor interface, and comparison with 8085.',
    type: 'website', url: 'https://www.geeksforgeeks.org/intel-8086-microprocessor/',
    subjectIds: ['veda-subject-ece-microprocessors'], topicIds: ['veda-topic-ece-mp-8086'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['8086', 'segmented-memory', '20-bit-addressing', 'real-mode', 'protected-mode'],
    seoTitle: '8086 Microprocessor – Segmented Memory for GATE ECE | GfG', seoDescription: '8086 architecture, segmented addressing, and memory organisation for GATE ECE.',
  },

  // ── Microprocessors – ARM ───────────────────────────────────────────────────────
  {
    ...base, id: 'veda-rece-mp-04', slug: 'ece-arm-nptel',
    title: 'ARM Microprocessors & Embedded Systems – NPTEL',
    description: 'ARM architecture (Cortex-M series), RISC principles, load-store architecture, Thumb instruction set, pipeline, interrupt handling (NVIC), and peripheral interfacing (GPIO, UART, SPI, I²C).',
    type: 'video', url: 'https://nptel.ac.in/courses/117101112',
    subjectIds: ['veda-subject-ece-microprocessors'], topicIds: ['veda-topic-ece-mp-arm', 'veda-topic-ece-mp-embedded'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'NPTEL', provider: 'NPTEL',
    tags: ['arm', 'cortex-m', 'risc', 'embedded', 'uart', 'spi', 'NPTEL'],
    seoTitle: 'ARM Microprocessors & Embedded Systems – NPTEL', seoDescription: 'ARM architecture, RISC, and embedded peripherals for GATE ECE microprocessors.',
  },
  {
    ...base, id: 'veda-rece-mp-05', slug: 'ece-embedded-systems-gfg',
    title: 'Embedded Systems – Real-Time OS, Interrupts, ADC/DAC | GfG',
    description: 'Embedded system characteristics, real-time constraints, RTOS (task scheduling, semaphores), ADC and DAC interfacing, DMA, memory-mapped I/O, and sensor interfacing examples.',
    type: 'website', url: 'https://www.geeksforgeeks.org/introduction-to-embedded-systems/',
    subjectIds: ['veda-subject-ece-microprocessors'], topicIds: ['veda-topic-ece-mp-embedded'],
    examIds: ['veda-exam-gate-ece'],
    difficulty: 'intermediate', source: 'GeeksforGeeks', provider: 'GeeksforGeeks',
    tags: ['embedded-systems', 'rtos', 'adc', 'dac', 'dma', 'sensor-interfacing'],
    seoTitle: 'Embedded Systems – RTOS & ADC/DAC for GATE ECE | GfG', seoDescription: 'Embedded systems, RTOS, and ADC/DAC interfacing for GATE ECE microprocessors.',
  },
];
