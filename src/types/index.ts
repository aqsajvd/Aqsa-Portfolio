export interface CaseStudySection {
  title: string;
  subtitle?: string;
  content: string;
  keyInsights?: string[];
  metrics?: { label: string; value: string }[];
  highlightQuote?: string;
}

export interface Project {
  id: string;
  title: string;
  kicker: string;
  category: string;
  disciplines: string[];
  year: string;
  role: string;
  duration: string;
  tools: string[];
  coverImage: string;
  aspectRatio: string;
  shortDescription: string;
  impactMetrics: { label: string; value: string }[];
  accentColor: string;
  pdfUrl?: string;
  figmaUrl?: string;
  galleryImages?: string[];
  galleryCaptions?: string[];
  team?: string;
  publicationDetails?: string;
  caseStudy: {
    heroTagline: string;
    executiveSummary: string;
    clientContext: string;
    theProblem: string;
    researchAndInsights: CaseStudySection;
    computationalSynthesis: CaseStudySection;
    solutionAndCraft: CaseStudySection;
    outcomesAndLearnings: CaseStudySection;
    demoType?: 'telemetry' | 'audio-ambient' | 'transit-route' | 'portfolio-rebalance';
  };
}

export interface DualLensExample {
  title: string;
  scenario: string;
  csPerspective: {
    title: string;
    focus: string;
    description: string;
    codeSnippet?: string;
  };
  designPerspective: {
    title: string;
    focus: string;
    description: string;
    heuristic: string;
  };
  synthesis: string;
}

export interface ProcessStage {
  number: string;
  title: string;
  tagline: string;
  description: string;
  methods: string[];
  deliverables: string[];
  quote: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  honors: string;
  description: string;
  highlights: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  description: string;
  projectIds: string[];
  proficiency?: string;
  color?: string;
}

