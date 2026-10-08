import { AiWorkflowStep } from '@/types';

export const aiWorkflowSteps: AiWorkflowStep[] = [
  {
    stepNumber: "01",
    title: "PROMPT ARCHITECTURE",
    tool: "ChatGPT / Claude",
    instruction: "Engineer structured multi-variable prompt matrices incorporating lighting, camera angles, textures, and aesthetic moodboards.",
    outputDescription: "High-specificity token parameters and negative prompt exclusions.",
    promptSample: "cinematic raw photograph, brutalist architecture monolith, obsidian and titanium materials, soft volumetric morning light, octane render, 8k --ar 16:9 --style raw",
  },
  {
    stepNumber: "02",
    title: "SYNTHESIS & GENERATION",
    tool: "Adobe Firefly & Midjourney",
    instruction: "Generate multiple seed variations across varied aspect ratios with strict adherence to brand color palettes.",
    outputDescription: "Batch of high-resolution latent space image candidates.",
    promptSample: "Generating 8 candidate variations across seed iterations [489102 to 489110]",
  },
  {
    stepNumber: "03",
    title: "CURATION & SELECTION",
    tool: "Art Direction Matrix",
    instruction: "Filter seeds based on compositional balance, focal point clarity, rule-of-thirds alignment, and visual hierarchy.",
    outputDescription: "Top 2 hero compositions selected for production pipeline.",
    promptSample: "Selection filter: Composition Grade A+, Dynamic Range 92%, Zero Artifacting",
  },
  {
    stepNumber: "04",
    title: "MOTION SYNTHESIS",
    tool: "Runway Gen-2 & Kling AI",
    instruction: "Apply generative motion models with precise camera director prompts (pan, tilt, zoom, volumetric mist).",
    outputDescription: "Living 4-second motion loops and camera sweeps.",
    promptSample: "Camera: Slow continuous push-in at 0.5x speed, smooth particle turbulence",
  },
  {
    stepNumber: "05",
    title: "COMPOSITING & RETOUCHING",
    tool: "Adobe Photoshop & Illustrator",
    instruction: "Manual frequency separation, anatomical artifact cleaning, color grade correction, and vector typography overlay.",
    outputDescription: "Cleaned commercial-ready asset with zero AI hallucinations.",
    promptSample: "Photoshop Layers: Clean Plate + Frequency Separation + Color LUT + Vector Lockup",
  },
  {
    stepNumber: "06",
    title: "FINAL MULTI-PLATFORM EXPORT",
    tool: "Canva Pro & Premiere Pro",
    instruction: "Format finalized creative systems into ready-to-deploy web banners, social carousels, pitch deck slides, and video reels.",
    outputDescription: "Omnichannel production package ready for brand campaign launch.",
    promptSample: "Assets packaged: 9:16 Reel, 4:5 Carousel, 16:9 Banner, Vector PDF Master",
  },
];

export const aiExplorationShowcases = [
  {
    id: "ai-synth-01",
    title: "Monolithic Cyber-Architecture",
    category: "SURREAL ARCHITECTURE",
    tools: ["Adobe Firefly", "Runway Gen-2", "Photoshop"],
    prompt: "brutalist monolith structure rising out of liquid obsidian, glowing neon violet internal core, volumetric haze, Hasselblad medium format --ar 16:9",
    colorScheme: ["#000000", "#7C3AED", "#00E5FF"],
    description: "Exploration of brutalist geometric masses merged with luminous particle interiors for luxury tech brand campaigns.",
  },
  {
    id: "ai-synth-02",
    title: "Organic Biomorphic Fluid Branding",
    category: "GENERATIVE IDENTITIES",
    tools: ["Adobe Firefly", "Illustrator", "Canva"],
    prompt: "biomorphic iridescent fluid typography, macro droplets, studio softbox illumination, clean background, minimal luxury --ar 1:1",
    colorScheme: ["#050505", "#A100FF", "#F5F5F5"],
    description: "Custom biomorphic letterforms generated through text-to-image seeds and hand-traced into vector SVG paths in Illustrator.",
  },
  {
    id: "ai-synth-03",
    title: "Kinetic Holographic Product Staging",
    category: "PRODUCT CONCEPT",
    tools: ["Kling AI", "Premiere Pro", "Photoshop"],
    prompt: "futuristic titanium luxury watch floating inside a rotating holographic forcefield, studio lighting, hyper-realistic reflections --ar 9:16",
    colorScheme: ["#080808", "#FF4D00", "#FFFFFF"],
    description: "3D product teaser simulation generated using Kling AI camera motion controls and edited in Premiere Pro with sound synchronization.",
  },
];
