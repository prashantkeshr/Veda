import type { Subject } from '../models';

export const aeSubjectsData: Subject[] = [
  {
    id: 'veda-subject-ae-aerodynamics',
    slug: 'aerospace-aerodynamics',
    title: 'Aerodynamics',
    shortTitle: 'Aerodynamics',
    description: 'Subsonic and supersonic flow, aerofoil theory, lift, drag, boundary layers, and compressible aerodynamics.',
    guide: `## Overview
Aerodynamics explains how air flows around bodies — and how that flow generates lift and drag. It is the defining subject of aerospace engineering, relevant for aircraft design, wind turbines, and even racing cars.

## What You Will Learn
### Basic Fluid Dynamics
Continuity, momentum, and energy equations for inviscid flow. Bernoulli's equation and its limits. Vorticity and irrotational flow. Stream function and velocity potential.

### Aerofoil Theory
NACA aerofoil nomenclature. Thin aerofoil theory — lift slope, zero-lift angle, pitching moment. Finite wing theory: induced drag, Oswald efficiency factor, aspect ratio effects. Prandtl's lifting-line theory.

### Boundary Layer Theory
Laminar and turbulent boundary layers. Boundary layer thickness, displacement thickness, momentum thickness. Skin friction. Transition and separation. Blasius solution.

### Compressible Flow
Speed of sound, Mach number. Isentropic flow relations. Normal shocks (Rankine-Hugoniot relations). Oblique shocks and expansion waves (Prandtl-Meyer). Choking in nozzles. Critical conditions.

### Transonic & Supersonic Aerodynamics
Critical Mach number, drag divergence. Wave drag. Area rule (Whitcomb). Supersonic aerofoil — diamond and double-wedge profiles.

## GATE AE Weightage
Aerodynamics is the core section of GATE AE — typically **20–25 marks**.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-ae-aero-fundamentals',
      'veda-topic-ae-aero-thin-airfoil',
      'veda-topic-ae-aero-compressible',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-ae'],
    relatedSubjectIds: ['veda-subject-fluid-mech', 'veda-subject-ae-propulsion'],
    tags: ['aerodynamics', 'aerofoil', 'compressible-flow', 'boundary-layer', 'gate-ae'],
    color: '#1e1b4b',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-ae-structures',
    slug: 'aerospace-aircraft-structures',
    title: 'Aircraft Structures',
    shortTitle: 'Structures',
    description: 'Aircraft structural components, stress analysis, thin-walled structures, vibrations, and composite materials.',
    guide: `## Overview
Aircraft Structures ensures the airframe can withstand flight loads — static, dynamic, and fatigue. It combines structural mechanics with materials science, and is crucial for GATE AE, ISRO, and DRDO.

## What You Will Learn
### Structural Analysis Fundamentals
Review of stress, strain, Mohr's circle, principal stresses. Torsion of circular and non-circular sections. Unsymmetric bending. Shear centre.

### Thin-Walled Structures
Open and closed thin-walled sections. Shear flow. Torsion of multi-cell closed sections (Bredt-Batho theory). Idealised structures.

### Aircraft Load Paths
Wing box beam, fuselage semi-monocoque. Spar, rib, stringer, skin panels. Load distribution in aircraft structures. V-n diagram and design load factors.

### Buckling
Euler column buckling. Plate buckling. Failure modes: local vs global buckling. Crippling stress.

### Structural Dynamics & Vibrations
Free and forced vibrations of SDOF and MDOF systems. Natural frequency, damping, resonance. Aeroelasticity basics — flutter, divergence, control reversal.

### Composite Materials
CFRP, GFRP: fibre and matrix properties. Classical laminate theory. Failure criteria (Tsai-Wu, max stress). Applications in modern aircraft (787, A350).

## GATE AE Weightage
Structures accounts for **15–18 marks** in GATE AE.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-ae-str-stress-analysis',
      'veda-topic-ae-str-vibrations',
      'veda-topic-ae-str-composite',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-ae'],
    relatedSubjectIds: ['veda-subject-som', 'veda-subject-ae-aerodynamics'],
    tags: ['aircraft-structures', 'thin-wall', 'composites', 'flutter', 'gate-ae'],
    color: '#1e1b4b',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-ae-propulsion',
    slug: 'aerospace-propulsion',
    title: 'Aerospace Propulsion',
    shortTitle: 'Propulsion',
    description: 'Gas turbine engines, rocket propulsion, thermodynamic cycle analysis, performance parameters, and nozzle design.',
    guide: `## Overview
Propulsion is what moves aircraft and spacecraft. Understanding gas turbines and rockets requires applying thermodynamics, fluid mechanics, and combustion — making it one of the most integrated aerospace subjects.

## What You Will Learn
### Gas Turbine Engines
Components: intake, compressor, combustion chamber, turbine, nozzle. Brayton cycle analysis. Turbofan, turbojet, turboprop, turboshaft variants. Bypass ratio, thermal and propulsive efficiency.

### Compressor & Turbine
Axial flow compressor: velocity triangles, work input, degree of reaction. Stall and surge. Axial flow turbine: nozzle and rotor work, stage loading.

### Combustion Chambers
Stoichiometry, equivalence ratio, flame temperature. Diffusion and premixed flames. Combustor design: primary zone, dilution zone.

### Rocket Propulsion
Thrust equation, specific impulse (Isp), mass flow rate. Chemical rocket fundamentals: propellants (solid, liquid, hybrid). Rocket nozzle (de Laval) design — area ratio, exit velocity.

### Rocket Performance
Tsiolkovsky rocket equation. Single-stage and multi-stage rockets. Staging optimisation.

### Ramjet & Scramjet
Operating principle, thermodynamic analysis. Limitations and application envelope.

## GATE AE Weightage
Propulsion contributes **12–15 marks** and is highly application-oriented.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-ae-prop-jet',
      'veda-topic-ae-prop-rocket',
      'veda-topic-ae-prop-turbomachinery',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-ae'],
    relatedSubjectIds: ['veda-subject-engg-thermo', 'veda-subject-ae-aerodynamics'],
    tags: ['propulsion', 'gas-turbine', 'rocket', 'specific-impulse', 'gate-ae'],
    color: '#1e1b4b',
    updatedAt: '2026-09-16',
  },
  {
    id: 'veda-subject-ae-flight-mech',
    slug: 'aerospace-flight-mechanics',
    title: 'Flight Mechanics',
    shortTitle: 'Flight Mechanics',
    description: 'Aircraft performance, static and dynamic stability, control surfaces, and equations of motion.',
    guide: `## Overview
Flight Mechanics describes how aircraft fly — their performance limits, stability in response to disturbances, and how control inputs shape the motion. It is the link between aerodynamics and aircraft design.

## What You Will Learn
### Aircraft Performance
Drag polar. Straight and level flight — stall speed, minimum drag speed. Range and endurance: Breguet equations. Climb: rate of climb, absolute and service ceiling. Turning flight, V-n diagram.

### Static Stability
Longitudinal static stability: stick-fixed and stick-free neutral points, static margin. Lateral-directional stability: dihedral effect, directional stability (weathercock effect).

### Control Surfaces
Elevator, aileron, rudder — deflection and moment generation. Control effectiveness and reversal. Hinge moments.

### Dynamic Stability
Equations of motion (linearised about trim). Longitudinal modes: phugoid (long-period), short-period. Lateral-directional modes: roll, Dutch roll, spiral divergence.

### Inertial Navigation Basics
Reference frames (body, wind, Earth). Euler angles (pitch, roll, yaw). Transformation matrices.

## GATE AE Weightage
Flight Mechanics accounts for **10–12 marks** in GATE AE. Performance calculations and stability conditions are most examined.`,
    academicLevels: ['undergraduate'],
    topicIds: [
      'veda-topic-ae-fm-stability',
      'veda-topic-ae-fm-performance',
      'veda-topic-ae-fm-control',
    ],
    courseIds: [],
    examIds: ['veda-exam-gate-ae'],
    relatedSubjectIds: ['veda-subject-ae-aerodynamics', 'veda-subject-ae-structures'],
    tags: ['flight-mechanics', 'stability', 'performance', 'control', 'gate-ae'],
    color: '#1e1b4b',
    updatedAt: '2026-09-16',
  },
];
