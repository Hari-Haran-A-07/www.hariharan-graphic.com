export type ProjectCategory =
  | 'ALL'
  | 'BRANDING'
  | 'SOCIAL MEDIA'
  | 'UI/UX'
  | 'WEB'
  | 'MOTION'
  | 'VIDEO'
  | 'PRINT'
  | 'PRESENTATION'
  | 'AI CREATIVE'
  | 'EXPERIMENTAL';

export type CardLayoutStyle =
  | 'full-width'
  | 'split-screen'
  | 'portrait'
  | 'landscape'
  | 'magazine'
  | 'interactive';

export interface ColorSwatch {
  name: string;
  hex: string;
  role: string;
}

export interface TypographySpec {
  fontFamily: string;
  usage: string;
  sample: string;
  weight: string;
}

export interface CaseStudySection {
  title: string;
  description: string;
  deliverables?: string[];
  image?: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  year: string;
  client?: string;
  tools: string[];
  thumbnail: string;
  badge?: string;
  featured?: boolean;
  layoutStyle?: CardLayoutStyle;
  accentColor?: string;
  
  // External Creative Work Links (Canva, Drive, Figma, GitHub, etc.)
  canvaUrl?: string;
  driveUrl?: string;
  figmaUrl?: string;
  behanceUrl?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  videoUrl?: string;
  hasLiveDemo?: boolean;
  liveStatus?: 'ONLINE' | 'PRODUCTION' | 'PROTOTYPE';

  // Cinematic Case Study Details
  summary: string;
  problem: string;
  concept?: string;
  visualDirection?: string;
  solution?: string;
  typography?: TypographySpec[];
  colorSystem?: ColorSwatch[];
  designProcess?: CaseStudySection[];
  gallery?: string[];
  results?: string[];
  metrics?: string[];
  architecture?: string[];
  keyFeatures?: string[];
  nextProjectId?: string;
}

export interface VaultAsset {
  id: string;
  title: string;
  category: 'GRAPHIC DESIGN' | 'SOCIAL MEDIA' | 'BRANDING' | 'UI/UX' | 'VIDEO' | 'MOTION' | 'PRESENTATIONS' | 'AI EXPERIMENTS' | 'PERSONAL EXPERIMENTS';
  format: 'CANVA' | 'DRIVE' | 'FIGMA' | 'IMAGE' | 'VIDEO' | 'PDF';
  year: string;
  tools: string[];
  thumbnail: string;
  previewUrl?: string;
  canvaUrl?: string;
  driveUrl?: string;
  figmaUrl?: string;
  dimensions?: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  highlights: string[];
  technologies: string[];
  metricProof?: string;
  certificateUrl?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  credentialUrl?: string;
  imagePreview?: string;
  isVerifiedAsset?: boolean;
  description: string;
  topics: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  period: string;
  score: string;
  scoreLabel: string;
  highlights: string[];
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  verifiedSource: string;
}

export interface ToolItem {
  id: string;
  name: string;
  category: 'DESIGN' | 'VIDEO & MOTION' | 'AI & GENERATIVE' | 'DEVELOPMENT';
  role: string;
  badge: string;
  description: string;
  iconName: string;
  accent: string;
}

export interface MotionLabItem {
  id: string;
  title: string;
  category: 'REEL' | 'MOTION POSTER' | 'UI ANIMATION' | 'AI VIDEO' | 'BRAND MOTION';
  aspect: '9:16' | '16:9' | '1:1';
  duration: string;
  tools: string[];
  videoUrl?: string;
  posterGradient: string;
  description: string;
  keyframes: string[];
}

export interface AiWorkflowStep {
  stepNumber: string;
  title: string;
  tool: string;
  instruction: string;
  outputDescription: string;
  promptSample: string;
}

export type CursorState =
  | 'NORMAL'
  | 'VIEW'
  | 'DRAG'
  | 'OPEN'
  | 'PLAY'
  | 'EXPLORE';
