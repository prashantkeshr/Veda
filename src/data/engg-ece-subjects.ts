import type { Subject } from '../models';

export const eceSubjectsData: Subject[] = [
  {
    id: 'veda-subject-ece-analog',
    slug: 'ece-analog-circuits',
    title: 'Analog Circuits',
    shortTitle: 'Analog Circuits',
    description: 'Diodes, BJTs, MOSFETs, biasing, amplifiers, feedback, op-amp circuits, and oscillators.',
    guide: `## Overview
Analog Circuits deals with circuits that process continuous-valued signals. It is the heart of GATE ECE and underpins every radio, sensor interface, and audio system.

## What You Will Learn
### Semiconductor Devices
p-n junction diode — V-I characteristics, ideal diode model, small-signal model. Zener diode regulator. Special diodes (Schottky, varactor, LED, photodiode).

### Bipolar Junction Transistor (BJT)
NPN/PNP operation. DC biasing (fixed, self-bias, voltage-divider). Small-signal model (h-parameter, hybrid-π). CE, CB, CC amplifier configurations — gain, input/output impedance.

### MOSFET
Enhancement and depletion types. NMOS/PMOS characteristics. Biasing. Small-signal model. CS, CG, CD amplifiers.

### Multistage Amplifiers
Cascading, coupling (RC, direct). Differential amplifier, current mirrors.

### Feedback & Stability
Feedback types (series-shunt, shunt-series etc.). Effect on gain, bandwidth, impedance. Barkhausen criterion for oscillators. RC phase-shift, Hartley, Colpitts, Wien bridge oscillators.

### Op-Amp Circuits
Ideal op-amp, virtual short. Inverting/non-inverting amplifiers, summing, differentiator, integrator, comparator, Schmitt trigger, active filters.

## GATE ECE Weightage
Analog Circuits accounts for **12–15 marks** — the highest single section in GATE ECE.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-ece-ac-diodes',
      'veda-topic-ece-ac-bjt',
      'veda-topic-ece-ac-fet',
      'veda-topic-ece-ac-opamp',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-ece'],
    relatedSubjectIds: ['veda-subject-ece-digital', 'veda-subject-ee-circuit-theory'],
    tags: ['analog-circuits', 'bjt', 'mosfet', 'op-amp', 'amplifiers', 'gate-ece'],
    color: '#064e3b',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-ece-digital',
    slug: 'ece-digital-electronics',
    title: 'Digital Electronics',
    shortTitle: 'Digital Electronics',
    description: 'Number systems, Boolean algebra, combinational and sequential circuits, memories, and programmable logic devices.',
    guide: `## Overview
Digital Electronics is the foundation of all computing hardware. Understanding gates, flip-flops, and state machines prepares you for VLSI design, embedded systems, and FPGA programming.

## What You Will Learn
### Number Systems & Codes
Binary, octal, hexadecimal conversions. BCD, Gray code, excess-3 code. Signed number representation (2's complement).

### Boolean Algebra & Logic Gates
AND, OR, NOT, NAND, NOR, XOR, XNOR. De Morgan's theorems. SOP/POS minimisation with K-maps.

### Combinational Circuits
Half/full adder, subtractor, carry-lookahead adder. Multiplexers (2:1, 4:1, 8:1). Decoders, encoders, priority encoders. Comparators. Hazards and glitches.

### Sequential Circuits
Latches and flip-flops (SR, D, JK, T) — clocked, edge-triggered, master-slave. Timing diagrams, setup/hold times. Registers: SISO, SIPO, PISO, PIPO. Counters: ripple, synchronous, ring, Johnson.

### Memories & PLDs
ROM, RAM (SRAM vs DRAM). PLA, PAL, CPLD, FPGA — architecture and programming.

### ADC & DAC
R-2R ladder DAC. Successive approximation, flash, dual-slope ADC.

## GATE ECE Weightage
Digital Electronics accounts for **8–10 marks**. Flip-flop timing and state machine design are most tested.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-ece-de-logic-gates',
      'veda-topic-ece-de-combinational',
      'veda-topic-ece-de-sequential',
      'veda-topic-ece-de-memories',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-ece', 'veda-exam-gate-cs'],
    relatedSubjectIds: ['veda-subject-cs-digital-logic', 'veda-subject-ece-vlsi'],
    tags: ['digital-electronics', 'flip-flops', 'combinational', 'sequential', 'gate-ece'],
    color: '#064e3b',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-ece-comms',
    slug: 'ece-communication-systems',
    title: 'Communication Systems',
    shortTitle: 'Communications',
    description: 'Analog and digital modulation, noise analysis, information theory, and wireless communication fundamentals.',
    guide: `## Overview
Communication Systems explains how information travels over channels — from AM radio to 5G. It is a high-weightage GATE ECE topic and essential for telecom and wireless roles.

## What You Will Learn
### Analog Modulation
AM (DSB-SC, SSB, VSB), FM, PM. Modulation index, bandwidth, power. Superheterodyne receiver.

### Noise in Communication
Thermal noise, shot noise, SNR. Noise Figure, Friis formula. Receiver sensitivity.

### Digital Modulation
Baseband: NRZ, RZ, Manchester, AMI. Bandpass: ASK, FSK, BPSK, QPSK, QAM, MSK. Bit-error rate (BER) analysis.

### Multiplexing
FDM, TDM. PCM (sampling, quantisation, encoding). Delta modulation.

### Information Theory
Source entropy, channel capacity (Shannon-Hartley theorem), mutual information. Source coding: Huffman, Lempel-Ziv.

### Wireless Fundamentals
Fading (Rayleigh, Rician), multipath. OFDM basics. MIMO concept.

## GATE ECE Weightage
Communications accounts for **8–10 marks**. Modulation bandwidth, SNR, and BER calculations are most tested.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-ece-cm-analog-mod',
      'veda-topic-ece-cm-digital-mod',
      'veda-topic-ece-cm-noise',
      'veda-topic-ece-cm-multiplexing',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-ece'],
    relatedSubjectIds: ['veda-subject-ee-signals', 'veda-subject-ece-em'],
    tags: ['communications', 'modulation', 'digital-comms', 'shannon', 'gate-ece'],
    color: '#064e3b',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-ece-em',
    slug: 'ece-electromagnetics',
    title: 'Electromagnetics',
    shortTitle: 'EM',
    description: 'Electrostatics, magnetostatics, Maxwell\'s equations, plane waves, transmission lines, and antenna basics.',
    guide: `## Overview
Electromagnetics is the physics layer under all wireless systems — from RF circuits to RADAR and optical fibres. It is a conceptually demanding but high-reward GATE ECE subject.

## What You Will Learn
### Electrostatics & Magnetostatics
Coulomb's law, Gauss's law, Poisson's and Laplace's equations. Biot-Savart law, Ampere's law. Faraday's law, self and mutual inductance.

### Maxwell's Equations
Differential and integral forms. Displacement current. Boundary conditions at material interfaces.

### Plane Waves
Wave equation in free space and lossy media. Intrinsic impedance, propagation constant, attenuation. Polarisation. Poynting vector and power flow. Skin effect.

### Transmission Lines
Telegrapher's equations. Characteristic impedance Z₀, propagation constant. Voltage and current waves. Reflection coefficient, VSWR. Smith chart. Impedance matching: λ/4 transformer, stub.

### Waveguides
TE and TM modes in rectangular waveguide. Cutoff frequency, dominant mode (TE₁₀). Phase and group velocity.

### Antennas
Antenna parameters: gain, directivity, effective aperture, radiation resistance. Half-wave dipole, monopole. Antenna arrays.

## GATE ECE Weightage
Electromagnetics accounts for **8–10 marks**. Transmission lines (Smith chart) and plane wave propagation are most tested.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-ece-em-static-fields',
      'veda-topic-ece-em-waves',
      'veda-topic-ece-em-transmission-lines',
      'veda-topic-ece-em-antennas',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-ece'],
    relatedSubjectIds: ['veda-subject-ece-comms', 'veda-subject-ee-circuit-theory'],
    tags: ['electromagnetics', 'maxwell', 'transmission-lines', 'antennas', 'gate-ece'],
    color: '#064e3b',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-ece-vlsi',
    slug: 'ece-vlsi-design',
    title: 'VLSI Design',
    shortTitle: 'VLSI',
    description: 'CMOS technology, logic design with CMOS, static timing analysis, layout, and low-power design.',
    guide: `## Overview
VLSI (Very Large Scale Integration) Design is how billions of transistors are packed onto a chip. It bridges semiconductor physics with digital design — and is the gateway to fabless chip design careers at Intel, Qualcomm, ARM, and Indian semiconductor start-ups.

## What You Will Learn
### CMOS Technology
MOSFET device physics. CMOS process: n-well, twin-well. NMOS and PMOS transistor models. Threshold voltage, body effect.

### CMOS Logic Design
Static CMOS gates (inverter, NAND, NOR, complex gates). Transmission gates and pass transistors. Dynamic CMOS. Ratioed logic. Sizing for equal rise/fall.

### Sequential VLSI Circuits
CMOS flip-flops: static (TSPC), dynamic. Metastability and synchronizers.

### Static Timing Analysis
Setup and hold time. Clock skew, latency, jitter. Critical path. Timing closure.

### Physical Design
Layout design rules. Stick diagrams. Floorplanning, placement, routing. DRC and LVS verification.

### Low-Power Design
Sources of power: dynamic, short-circuit, leakage. Power reduction: clock gating, power gating, voltage scaling (DVFS).

## Career Value
VLSI is India's fastest-growing engineering sector — TSMC, Samsung, and dozens of Indian companies (Tata Elxsi, Wipro VLSI, Qualcomm India) are actively hiring.`,
    academicLevels: ['undergraduate', 'postgraduate'],
    topicIds: [
      'veda-topic-ece-vlsi-cmos',
      'veda-topic-ece-vlsi-logic',
      'veda-topic-ece-vlsi-layout',
      'veda-topic-ece-vlsi-timing',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-ece'],
    relatedSubjectIds: ['veda-subject-ece-digital', 'veda-subject-ece-analog'],
    tags: ['vlsi', 'cmos', 'chip-design', 'layout', 'gate-ece'],
    color: '#064e3b',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-ece-microprocessors',
    slug: 'ece-microprocessors',
    title: 'Microprocessors & Embedded Systems',
    shortTitle: 'Microprocessors',
    description: '8085/8086 architecture, instruction sets, ARM processors, memory interfacing, and embedded C programming.',
    guide: `## Overview
Microprocessors are the brains of embedded systems — from washing machines to spacecraft. This subject bridges digital hardware and software, and is essential for embedded and firmware engineering roles.

## What You Will Learn
### 8085 Architecture
Registers, ALU, control unit. Instruction set: data transfer, arithmetic, logical, branching. Timing diagrams. Interrupts. Memory and I/O interfacing.

### 8086 Architecture
Segmented memory model. Register set. Real mode. Instruction set highlights. BIU and EU pipeline. Interrupts (software and hardware).

### ARM Architecture
RISC design philosophy. ARM Cortex-M series. Thumb instruction set. Exception handling. NVIC (Nested Vectored Interrupt Controller).

### Embedded Systems Design
Microcontroller vs microprocessor. Peripherals: GPIO, UART, SPI, I²C, ADC, DAC, PWM, timers. RTOS concepts: tasks, scheduler, semaphores, queues.

### Embedded C Programming
Memory map, volatile, bit manipulation. Interrupt service routines (ISR). Bootloader basics.

## Industry Applications
Used in IoT devices, automotive ECUs, medical instruments, industrial PLCs — one of the broadest and most employable engineering skill sets.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-ece-mp-8085',
      'veda-topic-ece-mp-8086',
      'veda-topic-ece-mp-arm',
      'veda-topic-ece-mp-embedded',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-ece'],
    relatedSubjectIds: ['veda-subject-ece-digital', 'veda-subject-cs-os'],
    tags: ['microprocessors', '8085', '8086', 'arm', 'embedded', 'gate-ece'],
    color: '#064e3b',
    updatedAt: '2026-09-16',
  },
];
