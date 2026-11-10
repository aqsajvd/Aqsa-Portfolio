import { Project, EducationItem, SkillItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Aqsa Javed',
  title: 'Product & Editorial Designer',
  headline: 'Multidisciplinary Product & Editorial Designer',
  specialization: 'Spatial Interaction, Editorial Publication & Visual Systems',
  institution: 'Woxsen University, School of Arts & Design',
  educationHeadline: 'MDes Candidate at Woxsen University · BSc Computer Science from BITS Pilani',
  location: 'Hyderabad, India (Available Worldwide)',
  email: 'aqsaj732@gmail.com',
  universityEmail: 'aqsa.javed_2028@woxsen.edu.in',
  whatsapp: '+92 346 7767445',
  whatsappLink: 'https://wa.me/923467767445',
  linkedin: 'https://www.linkedin.com/in/aqsa-javed89',
  website: 'https://aqsajaved.com',
  github: 'https://github.com/aqsajvd',
  behance: 'https://behance.net/aqsajaved',
  portraitImage: '/assets/profile/aqsa_profile.jpg',
  bioShort:
    'Product and editorial designer pursuing a Master of Design (M.Des) at Woxsen University with a background in Computer Science from BITS Pilani. Specializing in spatial interactions, assistive AI companions, and publication systems.',
  statement:
    'Bridging computational logic and human perception through spatial research, empathetic product design, and editorial craft.',
};

export const PROJECTS: Project[] = [
  {
    id: 'raahi-driver-drowsiness',
    title: 'RAAHI — Driver Drowsiness Detection App',
    kicker: 'Product Design · AI Safety Companion & ADAS Ergonomics',
    category: 'Product Design & HCI',
    disciplines: ['Product Design', 'HCI', 'AI Companion', 'Research'],
    year: '2026',
    role: 'Product & Interaction Designer',
    team: 'Aqsa Javed',
    publicationDetails: 'School of Arts & Design, Woxsen University, Hyderabad',
    duration: '8 Weeks UX & Presentation Research',
    tools: ['Figma Slides', 'Product Design', 'HCI Ergonomics', 'ADAS Interaction Models', '3D Companion Design'],
    coverImage: '/assets/projects/driver_drowsiness_cover.png',
    figmaUrl: 'https://www.figma.com/slides/1yxd6fB3wZeWLXaoihFZdb/Driver-Drowsiness--Copy-',
    galleryImages: [
      '/assets/projects/driver_drowsiness_cover.png',
    ],
    galleryCaptions: [
      'Cover: RAAHI — Driver Drowsiness Detection app featuring 3D AI Companion Mascot (Woxsen University)',
    ],
    aspectRatio: '16:9',
    shortDescription:
      'An intelligent in-cabin driver drowsiness detection and safety companion mobile app designed at Woxsen University. Features the expressive 3D mascot RAAHI, real-time driver fatigue monitoring, progressive audio-visual alerts, and cognitive safety ergonomics.',
    impactMetrics: [
      { label: 'Safety Track', value: 'ADAS Ergonomics' },
      { label: 'Core Mascot', value: '3D AI Companion' },
      { label: 'Presentation', value: 'Figma Slides' },
    ],
    accentColor: '#3B82F6',
    caseStudy: {
      heroTagline: 'Humanizing vehicular safety through an empathetic in-cabin AI companion.',
      executiveSummary:
        'RAAHI is a comprehensive driver drowsiness detection and assistive mobile companion designed at Woxsen University. Addressing long-haul fatigue and commuter micro-sleep accidents, RAAHI transforms dry warning alarms into an empathetic, progressive safety companion that monitors alertness, recommends rest breaks, and provides engaging auditory interventions.',
      clientContext: 'Product Design Innovation Project, School of Arts & Design, Woxsen University.',
      theProblem:
        'Drowsy driving causes over 20% of fatal roadway collisions worldwide. Conventional ADAS chime alerts either startle drivers into erratic steering maneuvers or are ignored due to alarm fatigue. The design challenge was to create an empathetic in-cabin companion that detects fatigue early and guides drivers safely toward rest stops.',
      researchAndInsights: {
        title: '01. Driver State & Fatigue Telemetry',
        subtitle: 'Understanding Eye Aspect Ratio (EAR), Yawn Frequencies & Head Nodding',
        content:
          'Researched non-intrusive sensor fusion techniques: smartphone front-camera facial landmark tracking (PERCLOS - percentage of eyelid closure), steering pattern erraticism, and time-of-day circadian rhythm dips (2 PM–4 PM and 2 AM–6 AM).',
        keyInsights: [
          'Harsh screeching buzzer alarms trigger panic reflex rather than calm corrective action.',
          'An expressive, friendly 3D robot character (RAAHI) builds emotional rapport and trust with solo drivers.',
          'Three-stage progressive alerting (Mild check-in → Conversational nudge → Urgent alarm & rest stop rerouting) prevents alarm desensitization.',
        ],
      },
      computationalSynthesis: {
        title: '02. Interaction Design & In-Cabin Ergonomics',
        subtitle: 'Glanceable UI & Hands-Free Conversational Voice UI',
        content:
          'Engineered a high-contrast dashboard display with massive glanceable typography and dark-mode-first color harmony to preserve driver night vision. Enabled voice-driven responses ("RAAHI, I am awake!") so drivers keep both hands on the wheel.',
      },
      solutionAndCraft: {
        title: '03. Visual Identity & The RAAHI Character',
        subtitle: 'Empathetic 3D Robot Mascot with Expressive Glowing Eyes',
        content:
          'Crafted the RAAHI visual persona in cobalt blue and clean white with emotive digital eyes that mirror alertness and compassion, making road safety feel like travelling with a caring co-pilot.',
      },
      outcomesAndLearnings: {
        title: '04. Academic Presentation & Industry Relevance',
        subtitle: 'Woxsen University Product Design Showcase',
        content:
          'Presented via a dedicated Figma Slides interactive deck demonstrating user journey flows, crisis state wireframes, and scalable ADAS integration.',
        metrics: [
          { label: 'Alert Stages', value: '3-Tier Progressive' },
          { label: 'Glance Latency', value: '<0.8s Recognition' },
        ],
      },
    },
  },
  {
    id: 'beyond-reality-vr-ar',
    title: 'Beyond Reality — The Evolution of VR and AR',
    kicker: 'Editorial Research · Spatial Interaction & HCI Publication',
    category: 'Spatial Design & Research',
    disciplines: ['Spatial Design', 'Research', 'Editorial', 'HCI'],
    year: '2026',
    role: 'Co-Author & Editorial Designer',
    team: 'Pamu Lowkya, Jeslyn Sijo, Aqsa Javed',
    publicationDetails: 'School of Arts & Design, Product Design Innovation, Woxsen University, India',
    duration: '16 Weeks Comprehensive Research',
    tools: ['Adobe InDesign', 'Photoshop', 'Spatial Interaction Frameworks', 'HCI Literature Synthesis', 'Design Systems'],
    coverImage: '/assets/projects/beyond_reality_cover_hq.png',
    pdfUrl: '/assets/aistudio/Final_Magazine_VR___AR_9aa001e7.pdf',
    galleryImages: [
      '/assets/projects/beyond_reality_cover_hq.png',
      '/assets/projects/beyond_reality_page_04.jpg',
      '/assets/projects/beyond_reality_page_05.jpg',
      '/assets/projects/beyond_reality_page_06.jpg',
      '/assets/projects/beyond_reality_page_07.jpg',
      '/assets/projects/beyond_reality_page_08.jpg',
      '/assets/projects/beyond_reality_page_09.jpg',
      '/assets/projects/beyond_reality_page_10.jpg',
      '/assets/projects/beyond_reality_page_46.jpg',
    ],
    galleryCaptions: [
      'Cover: Beyond Reality — The Evolution of VR and AR',
      'Author Note: Reflections on the six eras of immersion by Lowkya, Jeslyn, and Aqsa',
      'Contents: Mapping the six eras from Mind Before Screens to Spatial AI',
      'Introduction: Blurring the boundary between physical and digital spaces',
      'Spatial Future: Gestures, voice, and invisible interfaces',
      'Timeline (1838 — 1992): From Stereoscope to Virtual Fixtures',
      'Timeline (2012 — 2026): From Google Glass to Apple Vision Pro',
      'Era 01: Mind Before Screens — Making the Unreal Feel Real',
      'Living Between Realities: Everyday applications in navigation and healthcare',
    ],
    aspectRatio: '1:1',
    shortDescription:
      'A comprehensive 53-page research publication mapping six historical eras of immersion—from the 1838 Wheatstone Stereoscope to modern spatial computing with Apple Vision Pro and AI-driven realities.',
    impactMetrics: [
      { label: 'Publication Volume', value: '53 Pages' },
      { label: 'Historical Timeline', value: '1838 — 2026' },
      { label: 'Core Eras', value: '6 Eras' },
    ],
    accentColor: '#8B5CF6',
    caseStudy: {
      heroTagline: 'Exploring how technology continues to expand our perception of reality—and what might lie beyond it.',
      executiveSummary:
        'Beyond Reality is an extensive research publication produced at the School of Arts & Design, Woxsen University. Co-authored and designed by Pamu Lowkya, Jeslyn Sijo, and Aqsa Javed, it critically investigates the historical trajectory, ergonomics, interaction paradigms, and ethical questions surrounding augmented and virtual reality across six foundational eras.',
      clientContext: 'School of Arts & Design, Product Design Innovation, Woxsen University (Batch 2026-2028).',
      theProblem:
        'Immersive media is frequently misunderstood as a purely 21st-century headset gimmick. Designers lack a unified framework tracing how optical illusions, sensory cinema (Sensorama), tele-robotic data gloves (NASA VIEW), and spatial computing converge into modern human-computer interaction.',
      researchAndInsights: {
        title: '01. The Six Eras of Immersion Framework',
        subtitle: 'Chronological Synthesis of 188 Years of Spatial Experimentation',
        content:
          'Structured the research around six defining epochs: 1) Mind Before Screens (1838 Stereoscope, Sensorama, Telesphere Mask), 2) Creating Virtual Worlds (Sword of Damocles, DataGlove, NASA VIEW), 3) Emerging Realities (Virtuality Arcades, Virtual Fixtures), 4) The Touch Era (Google Glass, Oculus Rift DK1, Google Cardboard), 5) Spatial Perception (HoloLens, Pokémon GO, ARKit), and 6) Spatial Computing & AI (Apple Vision Pro, Meta Quest, Ray-Ban Meta AI).',
        keyInsights: [
          'Immersion evolved from fixed optical illusions into real-time, responsive environments that understand physical room geometry.',
          'The transition from handheld controllers to natural gestures and gaze tracking represents a return to intuitive human motor habits.',
          'Spatial AI introduces context-aware environmental understanding, transforming passive headsets into active ambient assistants.',
        ],
      },
      computationalSynthesis: {
        title: '02. Interaction Paradigms: From Pixels to Presence',
        subtitle: 'Analyzing Head Tracking, Degrees of Freedom (DoF) & Latency',
        content:
          'Investigated the technical milestones that enabled true spatial presence: 6-DoF optical tracking, real-time depth mapping via LiDAR/ToF sensors, spatial audio HRTF filtering, and ultra-low motion-to-photon latency (<20ms) required to eliminate vestibular disorientation.',
      },
      solutionAndCraft: {
        title: '03. Editorial Architecture & Typographic Layout',
        subtitle: 'Cybernetic Neon Aesthetics Paired with Clean Swiss Grid Systems',
        content:
          'Engineered a distinctive publication visual identity featuring deep space backgrounds, electric cyan and ultraviolet typography, dual-column narrative pacing, archival hardware photography, and interactive timeline spreads.',
      },
      outcomesAndLearnings: {
        title: '04. Academic Reception & Ethical Inquiry',
        subtitle: 'Living Between Realities: Addressing Privacy & Human Connection',
        content:
          'Beyond documenting technical breakthroughs, the publication interrogates critical ethical questions: sensory overload, biometric privacy, digital surveillance in private homes, and the risk of virtual escapism versus genuine human connection.',
        metrics: [
          { label: 'Archival Systems Analyzed', value: '24+ Hardware Platforms' },
          { label: 'Academic Distinction', value: 'School of Arts & Design' },
        ],
      },
    },
  },
  {
    id: 'hanging-garden-magazine',
    title: 'Hanging Garden: Bloom — Editorial Travel Magazine',
    kicker: 'Publication Design · Visual Curation & Storytelling',
    category: 'Editorial Design',
    disciplines: ['Editorial', 'Visual Identity', 'Storytelling', 'Photography'],
    year: '2025',
    role: 'Editorial Designer & Visual Curator',
    team: 'Aqsa Javed',
    publicationDetails: 'Woxsen University, Kamkole (aqsa.javed_2028@woxsen.edu.in)',
    duration: '6 Weeks',
    tools: ['Adobe InDesign', 'Editorial Typography', 'Curated Color Grading', 'Layout Architecture'],
    coverImage: '/assets/projects/hanging_garden_page_01.jpg',
    pdfUrl: '/assets/aistudio/Aqsa-Magazine_3a00bb79.pdf',
    galleryImages: [
      '/assets/projects/hanging_garden_page_01.jpg',
      '/assets/projects/hanging_garden_page_02.jpg',
      '/assets/projects/hanging_garden_page_03.jpg',
      '/assets/projects/hanging_garden_page_04.jpg',
    ],
    galleryCaptions: [
      'Cover: Stepping into Pink — Ascending into Pink at the Hanging Gardens',
      'Spread 01: Nature in Motion — A Ride Through the Garden & Lush Greenery',
      'Spread 02: Serenity — Cascading Waterfalls, Stone Pathways & Evening Lights',
      'Backcover: Curated and documented by Aqsa Javed, Woxsen University',
    ],
    aspectRatio: '2:3',
    shortDescription:
      'A curated visual travel magazine exploring the tranquil landscape, cascading waterfalls, and natural stone pathways of the Hanging Gardens with a mindful pink-palette editorial aesthetic.',
    impactMetrics: [
      { label: 'Editorial Spreads', value: '4 Curated Spreads' },
      { label: 'Palette Curation', value: 'Spring Pink & Stone' },
      { label: 'Story Themes', value: 'Mindful Travel & Calm' },
    ],
    accentColor: '#EC4899',
    caseStudy: {
      heroTagline: 'Stepping into Pink — A perspective on mindful travel and natural harmony.',
      executiveSummary:
        'Hanging Garden: Bloom is an editorial travel publication celebrating the architectural landscaping, cascading illuminated waterfalls, and peaceful flora of the Hanging Gardens. Designed by Aqsa Javed at Woxsen University, it combines evocative location photography with rhythmic typography.',
      clientContext: 'Editorial Travel Publication Project, Woxsen University, Kamkole.',
      theProblem:
        'Travel publications often rely on chaotic, commercialized layouts that overwhelm the reader. The design challenge was to create an editorial publication that physically communicates serenity, stillness, and mindful visual pacing.',
      researchAndInsights: {
        title: '01. Sensory Storytelling & Color Theory',
        subtitle: 'Curating the Spring Floral & Warm Stone Palette',
        content:
          'Centered the visual identity around the contrast between vibrant bougainvillea pinks, natural grey-slate stone retaining walls, warm evening pathway illumination, and cool mountain horizons. The palette instills tranquility before the reader even processes the body copy.',
        keyInsights: [
          'Asymmetrical text blocks mirror the natural curves of winding garden paths.',
          'Large-format photographic spreads create breathing room and immersion.',
          'Subtle caption hierarchy guides the reader through architectural highlights like the Hanging Cafe and illuminated waterfall steps.',
        ],
      },
      computationalSynthesis: {
        title: '02. Editorial Hierarchy & Micro-Copy Craft',
        subtitle: 'Balancing Evocative Headlines with Compact Editorial Pull-Quotes',
        content:
          'Utilized high-contrast serif headlines for section dividers ("Serenity", "Nature in Motion") paired with clean geometric sans-serif for reading comfort across multi-column captions.',
      },
      solutionAndCraft: {
        title: '03. Photographic Narrative Progression',
        subtitle: 'From Daytime Exploration to Evening Illumination',
        content:
          'Structured the editorial journey chronologically: starting with daytime train journeys through winding greenery, progressing to the cascading rocky water features, and culminating in the twilight glow of amber lanterns reflecting on water.',
      },
      outcomesAndLearnings: {
        title: '04. Visual Synthesis & Print Feasibility',
        subtitle: 'Woxsen University Academic Documentation',
        content:
          'Produced a print-ready publication with bleed considerations, color separation for coated stock, and cohesive backcover colophon credentials.',
        metrics: [
          { label: 'Visual Cohesion', value: '100% Curated' },
          { label: 'Editorial Discipline', value: 'Print & Digital Read' },
        ],
      },
    },
  },
  {
    id: 'ferrari-f40-poster',
    title: 'Ferrari F40 — Kinetic Typographic Poster',
    kicker: 'Graphic Design · Automotive Swiss Typography',
    category: 'Visual Identity & Posters',
    disciplines: ['Visual Identity', 'Typography', 'Graphic Design'],
    year: '2024',
    role: 'Graphic & Typographic Designer',
    team: 'Aqsa Javed',
    duration: '3 Weeks',
    tools: ['Adobe Illustrator', 'Photoshop', 'Swiss Grid Systems', 'Automotive Telemetry Typography'],
    coverImage: '/assets/projects/ferrari_f40_poster.png',
    galleryImages: ['/assets/projects/ferrari_f40_poster.png'],
    galleryCaptions: ['Ferrari F40 Kinetic Poster: Repetitive Typography & Telemetry Specs'],
    aspectRatio: '2:3',
    shortDescription:
      'High-impact editorial poster celebrating the iconic Ferrari F40. Features rhythmic typographic repetition, high-contrast racing red (#D40000), and precise automotive telemetry specs.',
    impactMetrics: [
      { label: 'Max Power', value: '441 BHP' },
      { label: 'Top Speed', value: '324 km/h' },
      { label: 'Displacement', value: '2936.25 cc V8' },
    ],
    accentColor: '#DC2626',
    caseStudy: {
      heroTagline: 'Pure mechanical ferocity immortalized through repetitive typographic rhythm.',
      executiveSummary:
        'A bold tribute to the Ferrari F40—the last supercar personally approved by Enzo Ferrari in 1987. This typographic exploration pairs visceral racing red with repetitive letterforms and technical telemetry readouts to capture velocity on a static canvas.',
      clientContext: 'Independent Automotive Design & Typographic Poster Exploration.',
      theProblem:
        'Automotive posters typically rely entirely on generic photography without typographic voice. The objective was to create a collectible design artifact where typography and machine telemetry hold equal visual weight.',
      researchAndInsights: {
        title: '01. Typographic Velocity & Repetition',
        subtitle: 'The Optical Rhythm of the Legendary Wordmark',
        content:
          'Repeated the iconic Ferrari logotype four times vertically, separated by crisp horizontal architectural rules. The repetition mimics the rumble of a twin-turbocharged V8 engine revving at high rpm.',
        keyInsights: [
          'High-contrast black letterforms on pure Ferrari scarlet red evoke power and racing pedigree.',
          'Lower-half technical data strip presents key mechanical benchmarks in Swiss modernist hierarchy.',
          'Rear perspective shot highlights the aggressive twin rear exhaust and iconic aerodynamic wing.',
        ],
      },
      computationalSynthesis: {
        title: '02. Telemetry Specification Architecture',
        subtitle: 'Engine & Performance Benchmark Data Strip',
        content:
          'Structured the engineering specifications across five balanced data columns: Model (F40), Engine (V8), Total Displacement (2936.25 cc), Maximum Power (441 BHP), and Top Speed (324 km/h).',
      },
      solutionAndCraft: {
        title: '03. Chromatic Intensity & Balance',
        subtitle: 'Precision Color Management and Asset Composition',
        content:
          'Tuned the red backdrop to match Ferrari Corsa Red (#D40000). Anchored the composition with Enzo Ferrari’s prancing horse crest at the crown and a descriptive historical paragraph at the base.',
      },
      outcomesAndLearnings: {
        title: '04. Visual Impact & Print Realization',
        subtitle: 'Collectible High-Resolution Art Print Formulation',
        content:
          'The finished design balances raw automotive aggression with refined graphic restraint, serving as a standout portfolio piece demonstrating poster layout mastery.',
        metrics: [
          { label: 'Color Balance', value: 'Corsa Red & Onyx' },
          { label: 'Grid Architecture', value: 'Swiss Telemetry' },
        ],
      },
    },
  },
];

export const SERVICES = [
  {
    title: 'Editorial & Publication Design',
    description: 'Complete book, magazine, and research publication layout design—including typography pacing, grid architecture, photo curation, and print-ready preparation.',
    icon: 'Layout',
    deliverables: ['Editorial Book Layouts', 'Print & Digital Magazine Design', 'Curated Photo Spreads', 'Cover & Colophon Architecture'],
    color: 'from-purple-500/10 to-indigo-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400',
  },
  {
    title: 'Spatial Interaction & HCI Research',
    description: 'In-depth UX research, historical synthesis, and conceptual interaction models for VR, AR, and spatial computing environments.',
    icon: 'Code',
    deliverables: ['HCI Literature Synthesis', 'Spatial Interaction Models', 'User Journey Mapping', 'Academic & Industry Research'],
    color: 'from-blue-500/10 to-cyan-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400',
  },
  {
    title: 'Visual Identity & Typographic Posters',
    description: 'High-impact Swiss-style posters, typography monographs, brand collateral, and brand identity systems built for cultural impact.',
    icon: 'Globe',
    deliverables: ['Typographic Posters', 'Editorial Identity Systems', 'Specimen Sheets & Tokens', 'Print & Screen Colophons'],
    color: 'from-rose-500/10 to-red-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400',
  },
  {
    title: 'UI/UX & Product Design',
    description: 'Human-centered digital product interfaces, wireframing, high-fidelity prototypes in Figma, and clean responsive frontends.',
    icon: 'ShoppingBag',
    deliverables: ['Figma Prototypes', 'Design Systems', 'Responsive Web Interfaces', 'Mobile App Ergonomics'],
    color: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Master of Design (M.Des) — Product Design Innovation',
    institution: 'Woxsen University, School of Arts & Design',
    location: 'Hyderabad, India',
    period: '2024 — 2026 (Batch of 2026-2028)',
    honors: 'Product Design Innovation & Editorial Research',
    description:
      'Pursuing postgraduate design studies focusing on Spatial Interaction, Human-Computer Interaction (HCI), Editorial Publications, and Cognitive Ergonomics.',
    highlights: [
      'Co-authored 53-page research publication: "Beyond Reality — Evolution of VR & AR"',
      'Authored & designed editorial publication: "Hanging Garden: Bloom"',
      'Researched spatial computing interfaces, immersion eras, and speculative design paradigms',
    ],
  },
  {
    degree: 'Bachelor of Science (BSc) in Computer Science',
    institution: 'BITS Pilani',
    location: 'Pilani / Hyderabad, India',
    period: '2019 — 2023',
    honors: 'Academic Distinction',
    description:
      'Comprehensive foundation in computer science, software engineering, algorithms, data structures, and human-computer interaction (HCI).',
    highlights: [
      'Bridged technological logic with human-centered product ergonomics',
      'Extensive coursework in Software Architecture, Interactive Systems, and HCI',
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'Aqsa brings an exceptional balance of deep academic research and refined visual execution. Her work on the 53-page Beyond Reality VR/AR publication demonstrates deep understanding of spatial interaction and editorial craft.',
    author: 'Design Faculty & Peer Review',
    role: 'School of Arts & Design',
    company: 'Woxsen University',
  },
  {
    quote:
      'The sensitivity to visual pacing, typography, and atmospheric photography in the Hanging Garden Bloom magazine is extraordinary. She transforms research into a compelling sensory experience.',
    author: 'Publication Reviewer',
    role: 'Editorial Curation',
    company: 'Design Colloquium',
  },
];

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'spatial-vr-ar',
    name: 'Spatial Interaction & VR/AR',
    category: 'Spatial Design & HCI',
    description: 'Investigating 6-DoF ergonomics, gaze/gesture interaction paradigms, and AI-driven spatial computing environments.',
    projectIds: ['beyond-reality-vr-ar'],
    proficiency: 'Core Research Specialization',
    color: 'from-purple-500/10 to-indigo-500/10 border-purple-500/30 text-purple-700 dark:text-purple-300',
  },
  {
    id: 'editorial-layout',
    name: 'Editorial Layout & Book Design',
    category: 'Publication & Print',
    description: 'Multi-spread grid architecture, typographic leading pacing, print-ready preflight, and colophon craft.',
    projectIds: ['beyond-reality-vr-ar', 'hanging-garden-magazine'],
    proficiency: 'Expert Publication Craft',
    color: 'from-rose-500/10 to-pink-500/10 border-rose-500/30 text-rose-700 dark:text-rose-300',
  },
  {
    id: 'swiss-typography',
    name: 'Swiss Typography & Grid Systems',
    category: 'Visual & Graphic Systems',
    description: 'Rigorous asymmetric grids, kinetic typographic repetition, and optical weight calibration.',
    projectIds: ['ferrari-f40-poster', 'beyond-reality-vr-ar'],
    proficiency: 'Advanced Typographic Mastery',
    color: 'from-red-500/10 to-amber-500/10 border-red-500/30 text-red-700 dark:text-red-300',
  },
  {
    id: 'product-adas-ux',
    name: 'Product Design & Assistive UX',
    category: 'Spatial Design & HCI',
    description: 'Empathetic in-cabin assistive AI companions, driver fatigue state mapping, and glanceable dashboard safety ergonomics.',
    projectIds: ['raahi-driver-drowsiness'],
    proficiency: 'Product Innovation Specialization',
    color: 'from-blue-500/10 to-indigo-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300',
  },
  {
    id: 'hci-research',
    name: 'HCI & Cognitive Ergonomics',
    category: 'Research & Methodology',
    description: 'Literature synthesis, sensory immersion models, motion-to-photon latency analysis, and driver fatigue telemetry.',
    projectIds: ['beyond-reality-vr-ar', 'raahi-driver-drowsiness'],
    proficiency: 'Academic Research Distinction',
    color: 'from-blue-500/10 to-cyan-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300',
  },
  {
    id: 'adobe-indesign',
    name: 'Adobe InDesign & Prepress',
    category: 'Software & Production',
    description: 'Master page systems, character/paragraph styles, bleed management, and coated stock print exports.',
    projectIds: ['beyond-reality-vr-ar', 'hanging-garden-magazine'],
    proficiency: 'Production Grade Tooling',
    color: 'from-fuchsia-500/10 to-purple-500/10 border-fuchsia-500/30 text-fuchsia-700 dark:text-fuchsia-300',
  },
  {
    id: 'adobe-illustrator',
    name: 'Adobe Illustrator & Vectors',
    category: 'Software & Production',
    description: 'Precision vector drafting, custom automotive telemetry diagrams, and timeline chronologies.',
    projectIds: ['ferrari-f40-poster', 'beyond-reality-vr-ar'],
    proficiency: 'Vector Precision Mastery',
    color: 'from-amber-500/10 to-orange-500/10 border-amber-500/30 text-amber-700 dark:text-amber-300',
  },
  {
    id: 'photoshop-color',
    name: 'Photoshop & Visual Curation',
    category: 'Visual & Graphic Systems',
    description: 'Archival hardware photograph restoration, Corsa Red chromatic balancing, and scenic landscape grading.',
    projectIds: ['hanging-garden-magazine', 'beyond-reality-vr-ar', 'ferrari-f40-poster'],
    proficiency: 'Sensory Image Curation',
    color: 'from-sky-500/10 to-blue-500/10 border-sky-500/30 text-sky-700 dark:text-sky-300',
  },
  {
    id: 'visual-storytelling',
    name: 'Visual Storytelling & Pacing',
    category: 'Publication & Print',
    description: 'Narrative arc choreography across physical pages and chronological timeline spreads.',
    projectIds: ['hanging-garden-magazine', 'beyond-reality-vr-ar'],
    proficiency: 'Conceptual Narrative Depth',
    color: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300',
  },
  {
    id: 'figma-systems',
    name: 'Figma & Design Tokens',
    category: 'Spatial Design & HCI',
    description: 'Interactive wireframes, auto-layout variants, spatial component models, and Figma Slides presentations.',
    projectIds: ['beyond-reality-vr-ar', 'raahi-driver-drowsiness', 'ferrari-f40-poster'],
    proficiency: 'Systemic Component Craft',
    color: 'from-indigo-500/10 to-violet-500/10 border-indigo-500/30 text-indigo-700 dark:text-indigo-300',
  },
];

