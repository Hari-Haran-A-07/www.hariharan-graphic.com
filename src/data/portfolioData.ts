import {
  ProjectItem,
  ExperienceItem,
  CertificationItem,
  EducationItem,
  MetricItem,
} from '@/types';

export const profileInfo = {
  name: "HARI HARAN A",
  title: "Junior Graphic Designer & Video Editor",
  tagline: "DESIGN × MOTION × TECHNOLOGY",
  heroHeadline: "DESIGNING IDEAS INTO VISUAL EXPERIENCES.",
  heroSubheadline: "I DESIGN VISUAL EXPERIENCES THAT MAKE BRANDS IMPOSSIBLE TO IGNORE.",
  roles: [
    "Graphic Designer",
    "Visual Designer",
    "UI/UX Designer",
    "Video Editor",
    "Creative Technologist",
  ],
  location: "Dindigul, Tamil Nadu, India",
  email: "suryahari971@gmail.com",
  linkedin: "https://www.linkedin.com/in/ahari-haran07",
  github: "https://github.com/Hari-Haran-A-07",
  canvaVaultUrl: "https://www.canva.com/projects",
  googleDriveVaultUrl: "https://drive.google.com/drive/folders/1E5QzQExQ-VeI8l4lAMfZomgqZhzWsFBd",
  resumePdfUrl: "/assets/Hari_Haran_A_Resume.pdf",
  bio: "Hari Haran A is a creative, detail-oriented and versatile Junior Graphic Designer & Video Editor with an academic foundation in Computer Science and Business Systems. Merging visual design principles with deep digital engineering understanding, he creates impactful brand identities, engaging social media campaigns, high-converting UI/UX interfaces, and cinematic motion reels.",
};

export const verifiedMetrics: MetricItem[] = [
  {
    id: "m1",
    value: "22%",
    label: "Engagement Uplift",
    sublabel: "Achieved across social media campaigns & digital marketing assets",
    verifiedSource: "Kieyverse Marketing Campaign",
  },
  {
    id: "m2",
    value: "30%",
    label: "Workflow Acceleration",
    sublabel: "Faster prototype-to-production handoff via modular design systems",
    verifiedSource: "MITA IT Automations",
  },
  {
    id: "m3",
    value: "25%",
    label: "Load Latency Reduction",
    sublabel: "Optimized responsive assets & modular component rendering",
    verifiedSource: "Dot Com Infoway",
  },
  {
    id: "m4",
    value: "8.6",
    label: "Academic CGPA",
    sublabel: "B.Tech in Computer Science and Business Systems (2022–2026)",
    verifiedSource: "SSM Institute of Eng. & Tech.",
  },
  {
    id: "m5",
    value: "40+",
    label: "Defects Resolved",
    sublabel: "Cross-device UI inconsistencies & responsiveness fixes",
    verifiedSource: "Dot Com Infoway QA",
  },
  {
    id: "m6",
    value: "99.9%",
    label: "Uptime & Delivery",
    sublabel: "Precision in delivering brand assets & digital products on schedule",
    verifiedSource: "Techzon Wide Delivery",
  },
];

export const selectedProjects: ProjectItem[] = [
  {
    id: "social-media-strategy-hub",
    number: "001",
    title: "SOCIAL MEDIA STRATEGY & CONTENT HUB",
    subtitle: "Omnichannel Social Content System, Carousels & Motion Preview Engine",
    category: "SOCIAL MEDIA",
    year: "2026",
    client: "Creative Studio & Omnichannel Brands",
    tools: ["Figma", "Canva", "Adobe Photoshop", "Premiere Pro", "React.js"],
    thumbnail: "social-media-hub",
    badge: "Featured System",
    featured: true,
    layoutStyle: "full-width",
    accentColor: "#A100FF",
    canvaUrl: "https://www.canva.com/projects",
    driveUrl: "https://drive.google.com/drive/folders/1E5QzQExQ-VeI8l4lAMfZomgqZhzWsFBd",
    figmaUrl: "https://www.figma.com",
    githubUrl: "https://github.com/Hari-Haran-A-07/SOCIALMEDIA-STRATEGY-SYSTEM-",
    liveDemoUrl: "https://socialmedia-strategy-system.vercel.app",
    hasLiveDemo: true,
    summary:
      "A complete social media creative infrastructure designed to produce high-engagement Instagram/LinkedIn carousel systems, promotional motion reels, aspect-ratio calibrated templates, and a dynamic creative preview dashboard.",
    problem:
      "Omnichannel brands face fragmented creative consistency, misaligned typography hierarchies across different aspect ratios (9:16, 1:1, 4:5, 16:9), and slow asset approval workflows.",
    concept:
      "Constructed a unified design framework that bridges static carousel design with motion video rhythm, utilizing standardized typography tokens, dynamic contrast ratios, and modular visual hooks.",
    visualDirection:
      "Ultra-modern editorial aesthetic with high-contrast monochrome foundations, vibrant violet-to-cyan focal gradients, bold display numbers, and tactile UI card frames.",
    typography: [
      { fontFamily: "Space Grotesk", usage: "Headline Hook & Slide Numbers", sample: "THE 5 RULES OF RETENTION", weight: "Bold 700" },
      { fontFamily: "Inter", usage: "Body Copy & Key Takeaways", sample: "Visual hierarchy dictates user attention within the first 1.2 seconds.", weight: "Medium 500" },
      { fontFamily: "JetBrains Mono", usage: "Metadata & Slide Timings", sample: "SLIDE 01/08 • 1080x1350px", weight: "Regular 400" },
    ],
    colorSystem: [
      { name: "Obsidian Core", hex: "#0A0A0A", role: "Primary Background" },
      { name: "Electric Violet", hex: "#A100FF", role: "Focal Accent & Highlights" },
      { name: "Cyan Spark", hex: "#00E5FF", role: "Data Visualization & Key Badges" },
      { name: "Pure White", hex: "#FFFFFF", role: "High-Contrast Typography" },
    ],
    designProcess: [
      {
        title: "01 — Content Taxonomy & Hook Architecture",
        description: "Formulated carousel slide patterns: 1 Hook -> 2 Agitate -> 3 Framework -> 4 Proof -> 5 CTA.",
        deliverables: ["Wireframe Storyboards", "Hook Matrix", "Pacing Guidelines"],
      },
      {
        title: "02 — Visual Grid & Aspect-Ratio Calibration",
        description: "Engineered Figma & Canva component templates formatted for Instagram portrait (1080x1350) and LinkedIn documents.",
        deliverables: ["Figma Component Library", "Canva Master Templates", "Export Presets"],
      },
      {
        title: "03 — Motion Reel Transitions & Audio Sync",
        description: "Edited micro-video snippets in Premiere Pro & CapCut synced to beat drops and on-screen kinetic captions.",
        deliverables: ["9:16 Video Reels", "Sound Wave Visualizers", "CapCut Presets"],
      },
      {
        title: "04 — Creative Preview Dashboard",
        description: "Built an interactive React interface allowing stakeholders to preview carousels in real-time before publication.",
        deliverables: ["React Interactive Previewer", "Asset Downloader", "Approval Pipeline"],
      },
    ],
    keyFeatures: [
      "10+ Multi-slide carousel systems with high visual retention",
      "Aspect-ratio auto-fitting (1:1, 4:5, 9:16, 16:9)",
      "Motion reel transition mockups with kinetic captioning",
      "Instant export to Canva, Figma, and print-ready formats",
      "Interactive social feed simulator for live campaign staging",
    ],
    results: [
      "22% verified uplift in user engagement and click-through rates",
      "Reduced content turnaround time from 4 days to under 6 hours",
      "Zero typography distortion across mobile and tablet viewports",
    ],
    metrics: [
      "22% Engagement Growth",
      "100% Mobile Optimized",
      "4 Multi-Format Templates",
    ],
  },
  {
    id: "kieyverse-brand-portal",
    number: "002",
    title: "KIEYVERSE DIGITAL MARKETING IDENTITY",
    subtitle: "Complete Brand Identity, Corporate Collateral & Web Marketing Assets",
    category: "BRANDING",
    year: "2026",
    client: "Kieyverse Technologies",
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "HTML5", "CSS3", "React.js"],
    thumbnail: "kieyverse-brand",
    badge: "Agency Case Study",
    featured: true,
    layoutStyle: "split-screen",
    accentColor: "#7C3AED",
    canvaUrl: "https://www.canva.com/projects",
    driveUrl: "https://drive.google.com/drive/folders/1E5QzQExQ-VeI8l4lAMfZomgqZhzWsFBd",
    githubUrl: "https://github.com/Hari-Haran-A-07/kiey-verse.in",
    liveDemoUrl: "https://kiey-verse.in",
    summary:
      "Full corporate brand identity overhaul for Kieyverse, encompassing logo geometry, brand guidelines, marketing brochures, service one-pagers, display banners, and a responsive web portal.",
    problem:
      "Kieyverse required a modern, enterprise-grade brand presence to pitch tech and digital marketing solutions to international clients with confidence and authority.",
    concept:
      "The visual identity balances technological precision with artistic sophistication, using geometric logomarks, deep cosmic purples, and razor-sharp print and web layouts.",
    visualDirection:
      "Minimalist tech corporate styling, structured grid alignments, polished typography scales, and high-impact digital promotional collateral.",
    typography: [
      { fontFamily: "Syne", usage: "Corporate Wordmark & Master Display", sample: "KIEYVERSE INNOVATION", weight: "Bold 700" },
      { fontFamily: "Inter", usage: "Marketing Collateral & Proposals", sample: "Next-generation digital marketing and frontend engineering.", weight: "Regular 400" },
      { fontFamily: "JetBrains Mono", usage: "Technical Service Specifications", sample: "SPEC-2026 // B2B PORTAL", weight: "Medium 500" },
    ],
    colorSystem: [
      { name: "Deep Space", hex: "#050505", role: "Brand Base" },
      { name: "Kiey Purple", hex: "#7C3AED", role: "Primary Signature Hue" },
      { name: "Neon Lilac", hex: "#C084FC", role: "Secondary Accents & Highlights" },
      { name: "Titanium White", hex: "#F5F5F5", role: "Typography & Clean Space" },
    ],
    designProcess: [
      {
        title: "01 — Logo Geometrics & Vector Grid",
        description: "Created scalable vector emblems in Illustrator with golden ratio proportions and responsive lockups.",
        deliverables: ["Primary & Secondary Logomarks", "Favicon Suite", "Clearspace Guidelines"],
      },
      {
        title: "02 — Print & Corporate Collateral Suite",
        description: "Engineered CMYK print-ready brochures, business cards, letterheads, and service one-pagers.",
        deliverables: ["Print-Ready PDF Kits", "Vector Infographics", "Brand Identity Manual"],
      },
      {
        title: "03 — Web Banners & Social Campaign Assets",
        description: "Designed 30+ promotional digital banners, LinkedIn banners, and promotional carousels.",
        deliverables: ["Ad Creatives", "Display Network Sets", "Social Cover Templates"],
      },
      {
        title: "04 — High-Performance Web Portal",
        description: "Implemented the official React web portal with 28% reduced latency and 22% engagement uplift.",
        deliverables: ["React Web Platform", "SEO Metadata Setup", "Interactive Services Catalog"],
      },
    ],
    keyFeatures: [
      "Comprehensive 32-page corporate brand guideline manual",
      "Vector logo suite with dark, light, monochrome, and inverted lockups",
      "Print-ready CMYK brochures and trade show one-pagers",
      "Digital ad creative templates in all standard IAB display ratios",
      "Live production website at kiey-verse.in",
    ],
    results: [
      "22% verified increase in customer engagement and inquiries",
      "28% reduction in initial webpage load latency",
      "100% brand consistency achieved across all digital and print touchpoints",
    ],
    metrics: [
      "22% Engagement Uplift",
      "28% Faster Page Load",
      "32-Page Brand Book",
    ],
  },
  {
    id: "sambaleaf-cloud-kitchen",
    number: "003",
    title: "SAMBALEAF CLOUD KITCHEN",
    subtitle: "Culinary Brand Identity, Vibrant Food Visuals & Digital Ordering Experience",
    category: "BRANDING",
    year: "2025",
    client: "Sambaleaf Gourmet Kitchen",
    tools: ["Figma", "Adobe Illustrator", "Photoshop", "React.js", "Node.js", "MongoDB"],
    thumbnail: "sambaleaf-kitchen",
    badge: "Brand & UI/UX",
    featured: true,
    layoutStyle: "portrait",
    accentColor: "#FF4D00",
    canvaUrl: "https://www.canva.com/projects",
    driveUrl: "https://drive.google.com/drive/folders/1E5QzQExQ-VeI8l4lAMfZomgqZhzWsFBd",
    figmaUrl: "https://www.figma.com",
    githubUrl: "https://github.com/Hari-Haran-A-07/www.sambaleaf.com",
    liveDemoUrl: "https://www-sambaleaf-com.vercel.app",
    hasLiveDemo: true,
    summary:
      "Vibrant culinary brand identity and UI/UX ordering system for a gourmet cloud kitchen, combining organic leaf aesthetics with appetizing fiery color palettes and seamless digital ordering.",
    problem:
      "Cloud kitchens depend entirely on digital visuals to evoke taste, appetite, and trust since customers cannot physically visit a dining room.",
    concept:
      "Designed a sensory-rich brand system that uses warm spice tones, rich textures, enticing food photography mockups, and a frictionless 3-step checkout flow.",
    visualDirection:
      "Warm, fiery, modern Indian gourmet tone. Rich turmeric, spicy chili orange, and forest leaf green accents paired with deep charcoal backdrops.",
    typography: [
      { fontFamily: "Syne", usage: "Gourmet Menu Titles & Restaurant Signage", sample: "SAMBALEAF SIGNATURES", weight: "Bold 700" },
      { fontFamily: "Space Grotesk", usage: "Price Tags & Category Tabs", sample: "ROYAL BIRYANI • ₹349", weight: "Medium 500" },
      { fontFamily: "Inter", usage: "Dish Descriptions & Ingredient Lists", sample: "Slow-cooked aromatic spices infused in organic banana leaf wraps.", weight: "Regular 400" },
    ],
    colorSystem: [
      { name: "Chili Flame", hex: "#FF4D00", role: "Primary Appetite Trigger" },
      { name: "Leaf Green", hex: "#10B981", role: "Organic & Fresh Accents" },
      { name: "Turmeric Gold", hex: "#F59E0B", role: "Special Offers & Badges" },
      { name: "Charcoal Slate", hex: "#121212", role: "Menu Background" },
    ],
    designProcess: [
      {
        title: "01 — Culinary Identity & Moodboarding",
        description: "Explored organic leaf motifs intertwined with traditional Indian spice aesthetics.",
        deliverables: ["Brand Moodboard", "Emblem Sketches", "Packaging Mockups"],
      },
      {
        title: "02 — Menu Cards & Packaging Design",
        description: "Created tamper-evident box packaging, takeaway bags, and QR menu collateral.",
        deliverables: ["Packaging Die-lines", "Printable QR Stands", "Digital Menu Cards"],
      },
      {
        title: "03 — Digital Ordering UI/UX Wireframes",
        description: "Designed high-conversion mobile ordering interface with one-click dish customization.",
        deliverables: ["Figma Wireframes", "Interactive Prototype", "Design System"],
      },
    ],
    keyFeatures: [
      "Custom food photography treatment & appetizing visual filters",
      "Dynamic menu card layout with dietary allergen badges",
      "Mobile-first ordering UI with live order tracking visuals",
      "Complete packaging system (boxes, pouches, labels, tape)",
    ],
    results: [
      "Zero drop-off during 3-step checkout prototype tests",
      "Consistent visual identity across Swiggy, Zomato, and direct web",
    ],
    metrics: [
      "3-Step Fast Checkout",
      "100% Vector Packaging",
      "Complete Brand Suite",
    ],
  },
  {
    id: "luxury-raw-visuals",
    number: "004",
    title: "LUXURY.RAW E-COMMERCE EXPERIENCE",
    subtitle: "High-End Luxury Visual Design, Editorial Product Cards & Dark Mode Showcase",
    category: "UI/UX",
    year: "2026",
    client: "Luxury.Raw Haute Couture",
    tools: ["Figma", "Adobe Photoshop", "React.js", "Spring Boot", "CSS3"],
    thumbnail: "luxury-raw",
    badge: "Editorial Luxury",
    featured: true,
    layoutStyle: "landscape",
    accentColor: "#F5F5F5",
    githubUrl: "https://github.com/Hari-Haran-A-07/Lux.raw",
    liveDemoUrl: "https://hari-haran-a-07.github.io/Lux.raw/",
    hasLiveDemo: true,
    driveUrl: "https://drive.google.com/drive/folders/1E5QzQExQ-VeI8l4lAMfZomgqZhzWsFBd",
    summary:
      "Editorial, dark-mode luxury e-commerce experience designed for high-value merchandise, featuring razor-sharp product cards, minimal typography hierarchy, fluid hover interactions, and microservices checkout.",
    problem:
      "Luxury buyers expect an emotional, cinematic browsing experience akin to high-fashion print magazines rather than crowded retail marketplaces.",
    concept:
      "Eliminated all visual clutter. Utilized large monochrome imagery, generous negative space, subtle gold/titanium micro-lines, and slow graceful transitions.",
    visualDirection:
      "Monochromatic haute-couture editorial. Ultra-deep blacks, muted silver borders, titanium typography, and high-grain product spotlights.",
    typography: [
      { fontFamily: "Syne", usage: "Editorial Collection Titles", sample: "CHRONOGRAPH VOL. 07", weight: "SemiBold 600" },
      { fontFamily: "Space Grotesk", usage: "Product Specifications & Price", sample: "USD $4,250 • LIMITED TO 50 UNITS", weight: "Regular 400" },
      { fontFamily: "Inter", usage: "Artisanal Storytelling", sample: "Handcrafted from aerospace-grade titanium with sapphire crystal.", weight: "Light 300" },
    ],
    colorSystem: [
      { name: "Absolute Black", hex: "#000000", role: "Canvas Background" },
      { name: "Titanium Mist", hex: "#E5E5E5", role: "Primary Text" },
      { name: "Muted Chrome", hex: "#404040", role: "Grid Dividers" },
      { name: "Gold Dust", hex: "#D4AF37", role: "Exclusivity Seal" },
    ],
    designProcess: [
      {
        title: "01 — Editorial Visual Language",
        description: "Created oversized typography layouts inspired by Vogue and high-fashion ateliers.",
        deliverables: ["Visual Moodboard", "Typography Specs", "Grid Architecture"],
      },
      {
        title: "02 — Product Presentation & Interaction Design",
        description: "Engineered 360-degree product hover states, smooth image sliders, and sticky detail panels.",
        deliverables: ["Figma Interaction Kit", "Micro-Animations", "Card Variants"],
      },
      {
        title: "03 — Full-Stack Implementation",
        description: "Connected the React frontend to Spring Boot microservices with sub-20ms checkout validation.",
        deliverables: ["Production Storefront", "Secure Checkout", "Inventory Sync"],
      },
    ],
    keyFeatures: [
      "Editorial magazine layout with oversized product photography",
      "Dynamic multi-angle product preview with zoom lens",
      "Sub-20ms cart checkout validation speed",
      "Zero clutter dark-mode aesthetic with custom audio micro-feedback",
    ],
    results: [
      "Sub-20ms cart transaction speed",
      "Praise for high-fashion aesthetic across design showcases",
    ],
    metrics: [
      "Sub-20ms Cart Speed",
      "100% Dark Editorial",
      "Zero Clutter UI",
    ],
  },
  {
    id: "hmd-hire-my-driver",
    number: "005",
    title: "HMD — HIRE MY DRIVER UI/UX",
    subtitle: "On-Demand Chauffeur Booking App, Driver Profiles & Trip Tracking Flow",
    category: "UI/UX",
    year: "2025",
    client: "HMD Mobility Services",
    tools: ["Figma", "Adobe Illustrator", "MERN Stack", "Responsive Prototyping"],
    thumbnail: "hmd-mobility",
    badge: "Mobile UI/UX",
    featured: true,
    layoutStyle: "magazine",
    accentColor: "#00E5FF",
    driveUrl: "https://drive.google.com/drive/folders/1E5QzQExQ-VeI8l4lAMfZomgqZhzWsFBd",
    figmaUrl: "https://www.figma.com",
    summary:
      "Comprehensive mobile-first UI/UX design and prototyping for an on-demand driver hiring platform, featuring verified chauffeur profiles, instant fare calculation, real-time trip tracking, and driver rating UI.",
    problem:
      "Users hiring temporary drivers need immediate verification of credentials, crystal-clear pricing, and real-time safety tracking without cumbersome onboarding.",
    concept:
      "Designed a clean, trust-inspiring mobile interface featuring badge-verified driver cards, live GPS map overlays, emergency SOS triggers, and one-tap re-booking.",
    visualDirection:
      "Crisp safety-first mobility UI. Electric cyan accents on dark graphite cards, clear typography badges, and smooth tactile buttons.",
    typography: [
      { fontFamily: "Space Grotesk", usage: "Booking Headers & ETA Timers", sample: "CHAUFFEUR ARRIVING IN 4 MIN", weight: "Bold 700" },
      { fontFamily: "Inter", usage: "Profile Details & Reviews", sample: "Verified Commercial License • 4.9 ★ (342 Trips)", weight: "Medium 500" },
      { fontFamily: "JetBrains Mono", usage: "Trip ID & Telemetry", sample: "TRIP #HMD-9821 // OTP: 4092", weight: "Medium 500" },
    ],
    colorSystem: [
      { name: "Deep Graphite", hex: "#0D0D0D", role: "Mobile Viewport Surface" },
      { name: "Safety Cyan", hex: "#00E5FF", role: "Primary Action & Live GPS" },
      { name: "Emerald Verified", hex: "#10B981", role: "Driver Verification Badges" },
      { name: "Clean White", hex: "#FFFFFF", role: "Primary Readable Text" },
    ],
    designProcess: [
      {
        title: "01 — User Journey & Persona Mapping",
        description: "Mapped 3 critical flows: Immediate City Trip, Outstation Booking, and Corporate Chauffeur.",
        deliverables: ["User Journey Maps", "Information Architecture", "Wireframe Flows"],
      },
      {
        title: "02 — Component Design & Verification UI",
        description: "Created modular driver card components displaying police clearance, ratings, and vehicle expertise.",
        deliverables: ["Figma Component Library", "Driver Card Variants", "Rating System"],
      },
      {
        title: "03 — Interactive Prototype & Map Integration",
        description: "Built high-fidelity mobile prototype with interactive trip status animations.",
        deliverables: ["Figma Clickable Prototype", "Map UI Overlays", "SOS Safety Flow"],
      },
    ],
    keyFeatures: [
      "Verified driver profile cards with photo, background-check badge, and ratings",
      "Live interactive GPS trip tracking mockup with ETA calculations",
      "Transparent fare estimate breakdown with instant promo code application",
      "SOS emergency trigger and one-tap live trip sharing with family",
    ],
    results: [
      "30% workflow improvement from prototype to production specifications",
      "Unanimous positive user feedback during pilot usability tests",
    ],
    metrics: [
      "30% Workflow Boost",
      "4.9★ UI Satisfaction",
      "5 Core Mobile Flows",
    ],
  },
  {
    id: "v2v-telemetry-dashboard",
    number: "006",
    title: "REAL-TIME V2V TELEMETRY INTERFACE",
    subtitle: "Vehicle-to-Vehicle Collision Avoidance, Map Telematics & Node Visualizer",
    category: "WEB",
    year: "2025",
    client: "Automotive IoT Research",
    tools: ["Figma", "Adobe Illustrator", "Python", "Socket Programming", "React.js"],
    thumbnail: "v2v-telemetry",
    badge: "IoT Telematics",
    featured: false,
    layoutStyle: "split-screen",
    accentColor: "#FF4D00",
    driveUrl: "https://drive.google.com/drive/folders/1E5QzQExQ-VeI8l4lAMfZomgqZhzWsFBd",
    summary:
      "Futuristic telemetry and diagnostic interface for real-time vehicle-to-vehicle communication, collision warning indicators, live node proximity radar, and microsecond packet telemetry.",
    problem:
      "Automotive telematics systems generate massive streams of raw socket data that must be rendered intuitively without overwhelming test operators or vehicle pilots.",
    concept:
      "Engineered an aerospace-inspired HUD dashboard that translates complex multi-threaded socket packets into immediate visual warnings, radar vectors, and telemetry graphs.",
    visualDirection:
      "High-tech mission control aesthetic. Dark radar grids, hazard orange warning pulses, neon cyan node beacons, and monospace telemetry metrics.",
    typography: [
      { fontFamily: "Space Grotesk", usage: "Telemetry Dashboard Headers", sample: "V2V ACTIVE RADAR: MESH DENSITY 14 NODES", weight: "Bold 700" },
      { fontFamily: "JetBrains Mono", usage: "Live Telemetry & Packet Data", sample: "NODE_04 // DISTANCE: 12.4M // LATENCY: 3.8MS", weight: "Regular 400" },
    ],
    colorSystem: [
      { name: "Cockpit Black", hex: "#080808", role: "HUD Background" },
      { name: "Hazard Orange", hex: "#FF4D00", role: "Proximity Alerts & Warnings" },
      { name: "Radar Cyan", hex: "#00E5FF", role: "Connected Node Beacons" },
      { name: "Telemetry Muted", hex: "#888888", role: "Background Grid Lines" },
    ],
    keyFeatures: [
      "Interactive 2D radar screen mapping surrounding vehicle nodes",
      "Sub-5ms telemetry broadcast latency indicators",
      "Dynamic audio-visual collision avoidance alert triggers",
      "Packet loss diagnostic graphs with live frame validation",
    ],
    results: [
      "Sub-5ms telemetry rendering between node clusters",
      "Zero packet drop rate under simulated high mesh density",
    ],
    metrics: [
      "Sub-5ms Latency",
      "100% Packet Accuracy",
      "Real-Time Radar HUD",
    ],
  },
  {
    id: "tech-lms-platform",
    number: "007",
    title: "TECH LMS ENTERPRISE LEARNING PORTAL",
    subtitle: "Educational UI, Course Cards, Automated KYC Verification & RBAC Dashboard",
    category: "WEB",
    year: "2026",
    client: "Enterprise EdTech",
    tools: ["Figma", "React.js", "Spring Boot", "Python", "MongoDB", "OpenAPI"],
    thumbnail: "tech-lms",
    badge: "Enterprise EdTech",
    featured: false,
    layoutStyle: "portrait",
    accentColor: "#A100FF",
    githubUrl: "https://github.com/Hari-Haran-A-07/Tech.lms",
    driveUrl: "https://drive.google.com/drive/folders/1E5QzQExQ-VeI8l4lAMfZomgqZhzWsFBd",
    summary:
      "Enterprise learning management system featuring modular course cards, interactive student progress visualizations, asynchronous KYC student verification, and role-based permissions.",
    problem:
      "EdTech portals frequently suffer from confusing navigation hierarchies and slow document verification for enterprise student enrollment.",
    concept:
      "Created an intuitive student-first UI with gamified progress dials, instant certificate generators, and automated KYC status banners backed by 88% test coverage.",
    visualDirection:
      "Modern academic enterprise UI. Clean dark slate cards, purple progress indicators, accessible typography scales, and intuitive course preview drawers.",
    typography: [
      { fontFamily: "Space Grotesk", usage: "Course Titles & Module Headings", sample: "ADVANCED GENERATIVE AI SYSTEMS", weight: "Bold 700" },
      { fontFamily: "Inter", usage: "Curriculum Details & Transcripts", sample: "12 Modules • 48 Hours • Verified Industry Certificate", weight: "Regular 400" },
    ],
    colorSystem: [
      { name: "Academic Dark", hex: "#0E0E10", role: "Portal Background" },
      { name: "Mastery Purple", hex: "#A100FF", role: "Active Progress & Badges" },
      { name: "Success Mint", hex: "#10B981", role: "KYC Verified Indicator" },
    ],
    keyFeatures: [
      "Dynamic interactive course card grid with video preview modals",
      "Real-time KYC verification progress tracker",
      "Role-Based Access Control (RBAC) admin controls",
      "Interactive curriculum roadmap with milestone unlocks",
    ],
    results: [
      "88% automated test suite coverage achieved",
      "Under 2-second automated document validation pipeline",
    ],
    metrics: [
      "88% Test Coverage",
      "<2s KYC Speed",
      "Enterprise RBAC",
    ],
  },
  {
    id: "motion-reels-visuals-2026",
    number: "008",
    title: "KINETIC MOTION REELS & VIDEO SHOWCASE",
    subtitle: "Short-Form Video Edits, Sound-Synced Transitions & Product Teasers",
    category: "MOTION",
    year: "2026",
    client: "Creative Brands & Agency Clients",
    tools: ["Adobe Premiere Pro", "After Effects", "CapCut", "DaVinci Resolve", "Canva"],
    thumbnail: "motion-reels",
    badge: "Motion Lab",
    featured: true,
    layoutStyle: "split-screen",
    accentColor: "#FF4D00",
    canvaUrl: "https://www.canva.com/projects",
    driveUrl: "https://drive.google.com/drive/folders/1E5QzQExQ-VeI8l4lAMfZomgqZhzWsFBd",
    summary:
      "A cinematic compilation of high-energy social media reels, product walkthrough videos, motion poster typography, and beat-synchronized visual cuts engineered for maximum retention.",
    problem:
      "Audience drop-off in short-form video occurs within the first 1.5 seconds if pacing, visual transitions, and audio sync are not meticulously art-directed.",
    concept:
      "Applied strict visual rhythm principles: dynamic speed ramping, custom match-cuts, kinetic text overlays, and bass-aligned SFX to maximize watch time.",
    visualDirection:
      "Fast-paced cinematic editorial. Glitch transitions, seamless zoom transitions, 3D text tracking, and punchy audio-visual synchronization.",
    typography: [
      { fontFamily: "Syne", usage: "On-Screen Kinetic Impact Words", sample: "UNSTOPPABLE MOTION", weight: "Bold 800" },
      { fontFamily: "Space Grotesk", usage: "Video Captions & Lower Thirds", sample: "HARI HARAN • VIDEO EDITOR", weight: "Bold 700" },
    ],
    colorSystem: [
      { name: "Cinema Black", hex: "#030303", role: "Letterbox Canvas" },
      { name: "Motion Flame", hex: "#FF4D00", role: "Focal Transitions" },
      { name: "Neon Glow", hex: "#00E5FF", role: "Kinetic Captions" },
    ],
    keyFeatures: [
      "Short-form Instagram Reels & YouTube Shorts with 85%+ retention",
      "Precision sound design and beat-matched cuts",
      "Product teaser animations and 3D camera pan simulations",
      "Social media video templates ready for client repurposing",
    ],
    results: [
      "Consistently achieved higher retention rates on social platforms",
      "Rapid workflow using pre-configured CapCut and Premiere Pro presets",
    ],
    metrics: [
      "85%+ Retention Rate",
      "Sound-Synced Pacing",
      "Multi-Platform 9:16",
    ],
  },
  {
    id: "ai-creative-explorations",
    number: "009",
    title: "AI × DESIGN EXPERIMENTAL SYSTEMS",
    subtitle: "Generative Art Direction, Prompt Engineering Pipelines & Hybrid Media",
    category: "AI CREATIVE",
    year: "2026",
    client: "Creative AI Research",
    tools: ["Adobe Firefly", "Runway", "Kling", "ChatGPT", "Photoshop", "Illustrator"],
    thumbnail: "ai-explorations",
    badge: "AI × Design",
    featured: true,
    layoutStyle: "magazine",
    accentColor: "#00E5FF",
    canvaUrl: "https://www.canva.com/projects",
    driveUrl: "https://drive.google.com/drive/folders/1E5QzQExQ-VeI8l4lAMfZomgqZhzWsFBd",
    summary:
      "Experimental visual project exploring the intersection of generative AI algorithms and traditional art direction: prompt engineering, image synthesis, upscaling, vectorization, and video generation.",
    problem:
      "Raw AI-generated imagery often lacks consistent art direction, suffers from anatomical defects, and fails brand coherence without expert designer intervention.",
    concept:
      "Pioneered a hybrid workflow: Designer-guided prompt architecture -> Multiple seed generations -> Manual Photoshop compositing -> Color grading -> Final vector integration.",
    visualDirection:
      "Futuristic surrealism, cybernetic aesthetics, volumetric lighting, hyper-detailed texture rendering, and geometric balance.",
    typography: [
      { fontFamily: "Space Grotesk", usage: "AI Prompt Parameter Tags", sample: "--AR 16:9 --V 6.0 --STYLIZED 750", weight: "Medium 500" },
      { fontFamily: "JetBrains Mono", usage: "Generation Seeds & Pipeline Logic", sample: "PROMPT_ENGINE // SEED #89410294", weight: "Regular 400" },
    ],
    colorSystem: [
      { name: "Void Dark", hex: "#060608", role: "AI Canvas Base" },
      { name: "Synthetic Cyan", hex: "#00E5FF", role: "Neural Node Accent" },
      { name: "Plasma Violet", hex: "#A100FF", role: "Latent Space Gradient" },
    ],
    keyFeatures: [
      "Multi-stage prompt generation pipeline with parameter tuning",
      "Hybrid retouching workflow eliminating AI artifacts",
      "Motion generation using Runway Gen-2 & Kling for living posters",
      "Brand-aligned creative assets ready for commercial deployment",
    ],
    results: [
      "10x acceleration in visual concept prototyping",
      "Seamless integration into production branding and campaign workflows",
    ],
    metrics: [
      "10x Ideation Speed",
      "Zero AI Artifacts",
      "Runway + Firefly + Kling",
    ],
  },
  {
    id: "ak-racing-motorsport",
    number: "010",
    title: "AJITH KUMAR RACING (AK RACING) MOTORSPORT PLATFORM",
    subtitle: "Official Le Mans 499P Hypercar (#50 / #62), Real-Time Car Customizer Studio & Fire Telemetry",
    category: "WEB",
    year: "2026",
    client: "Ajith Kumar Racing (AKR) Motorsport",
    tools: ["Three.js", "WebGL", "JavaScript ES6+", "Web Audio API", "Tailwind CSS"],
    thumbnail: "ak-racing",
    badge: "3D Motorsport",
    featured: true,
    layoutStyle: "split-screen",
    accentColor: "#EF4444",
    githubUrl: "https://github.com/Hari-Haran-A-07/AK-RACING-",
    liveDemoUrl: "https://racing-three-flax.vercel.app",
    hasLiveDemo: true,
    summary:
      "A premier next-generation motorsports digital platform engineered for Ajith Kumar Racing, complete with the Official 24 Hours of Le Mans Ferrari 499P Hypercar (#50 / #62), real-time 3D livery customizer, fire speedometer automation, and procedural V6 hybrid engine audio synthesis.",
    problem:
      "Motorsport websites are typically static brochures that fail to convey the sensory adrenaline of high-downforce prototype racing, hybrid engine acceleration, and aerodynamic telemetry.",
    concept:
      "Constructed a high-octane 3D digital paddock featuring procedural WebGL race car models, dynamic lighting shaders, interactive color/livery switches, live tachometer RPM sweeps, and bass-driven engine rev acoustics.",
    visualDirection:
      "Aggressive Scuderia racing red paired with forged carbon fiber blacks, hazard telemetry orange, neon pit-lane cyan indicators, and aerodynamic carbon-weave gridlines.",
    typography: [
      { fontFamily: "Syne", usage: "Paddock Display & Hypercar Wordmarks", sample: "LE MANS 499P // HYBRID V6", weight: "ExtraBold 800" },
      { fontFamily: "Space Grotesk", usage: "Telemetry Gauges & Speed Readouts", sample: "342 KM/H • GEAR 6 • 8,500 RPM", weight: "Bold 700" },
      { fontFamily: "JetBrains Mono", usage: "Pit-Wall Telemetry Stream", sample: "LAP_TIME: 03:22.492 // SECTOR_03 PURPLE", weight: "Medium 500" },
    ],
    colorSystem: [
      { name: "Scuderia Red", hex: "#EF4444", role: "Hypercar Primary Livery" },
      { name: "Carbon Void", hex: "#080404", role: "Paddock Night Backdrop" },
      { name: "Fire Amber", hex: "#F59E0B", role: "Exhaust Fire & RPM Redline" },
      { name: "Pit Neon Cyan", hex: "#06B6D4", role: "Hybrid Battery Recovery Status" },
    ],
    designProcess: [
      {
        title: "01 — 3D Hypercar CAD Modeling & Shader Setup",
        description: "Optimized Le Mans 499P hypercar polygon topology for 60fps browser rendering with custom clear-coat reflections.",
        deliverables: ["Optimized 3D Mesh", "PBR Carbon Materials", "Real-Time Reflection Probes"],
      },
      {
        title: "02 — Interactive Livery & Studio Customizer",
        description: "Engineered real-time paint swatches allowing race enthusiasts to switch between iconic Scuderia red, stealth black, and custom racing numbers.",
        deliverables: ["Real-Time Texture Swapper", "Camera Orbit Controls", "Custom Livery Presets"],
      },
      {
        title: "03 — Web Audio V6 Hybrid Dyno Synthesizer",
        description: "Programmed Web Audio API oscillators to generate procedural engine revs, turbo spooling whistles, and exhaust overrun pops.",
        deliverables: ["Procedural Audio Engine", "RPM Throttle Link", "Spatial Sound Node"],
      },
      {
        title: "04 — Live Vercel Production Deployment",
        description: "Deployed to Vercel with responsive mobile touch controls and 60fps WebGL canvas optimization.",
        deliverables: ["Vercel Edge Deployment", "Touch Gesture Controls", "Cross-Device QA"],
      },
    ],
    keyFeatures: [
      "Official 24 Hours of Le Mans 499P Hypercar (#50 / #62) interactive 3D showcase",
      "Real-time Livery Customizer Studio with instant paint & aerodynamic trim toggle",
      "Fire Speedometer & Tachometer with active redline pulse animation",
      "Procedural Web Audio API engine sound dyno simulator",
      "Live deployment online at racing-three-flax.vercel.app",
    ],
    results: [
      "60fps smooth WebGL rendering maintained on mobile and desktop viewports",
      "Sub-1.2s initial asset payload through progressive asset decimation",
      "High user engagement with average session duration exceeding 4.2 minutes",
    ],
    metrics: [
      "60fps WebGL",
      "342 KM/H Telemetry",
      "100% Interactive 3D",
    ],
  },
  {
    id: "hot-cool-shake",
    number: "011",
    title: "HOT COOL SHAKE — INTERNATIONAL COFFEE & BEVERAGE",
    subtitle: "Virtual Coffee Laboratory, Temperature Chamber Automation & Real-Time Climate Order Tracking",
    category: "WEB",
    year: "2026",
    client: "Hot Cool Shake International",
    tools: ["React.js", "Node.js", "Express.js", "MongoDB", "MERN Stack", "Tailwind CSS"],
    thumbnail: "hot-cool-shake",
    badge: "MERN Commerce",
    featured: true,
    layoutStyle: "split-screen",
    accentColor: "#F59E0B",
    githubUrl: "https://github.com/Hari-Haran-A-07/hotcoolshake.in",
    liveDemoUrl: "https://hotcoolshake-in.vercel.app",
    hasLiveDemo: true,
    summary:
      "An international premium coffee and beverage web application built on the MERN Stack featuring an interactive Virtual Coffee Laboratory, accelerated temperature chamber automation (-5°C to 95°C), real-time climate-locked order tracking, and an administrative command center.",
    problem:
      "Beverage e-commerce platforms often fail to communicate temperature-sensitive freshness, craft brewing customization, and international multi-beverage flavor nuances online.",
    concept:
      "Designed an interactive digital brewing laboratory allowing customers to simulate extraction temperatures, milk froth ratios, espresso bean origins, and real-time insulated cold-chain logistics dispatch.",
    visualDirection:
      "Rich artisanal coffee tones: dark espresso obsidian, roasted caramel amber, frothy cream, and crisp neon iced cyan accents.",
    typography: [
      { fontFamily: "Syne", usage: "Gourmet Beverage Headings", sample: "VIRTUAL COFFEE LAB // NITRO COLD BREW", weight: "Bold 700" },
      { fontFamily: "Space Grotesk", usage: "Temperature Gauges & Order Codes", sample: "-5°C NITRO EXTRACTION • BATCH #892", weight: "Medium 500" },
      { fontFamily: "Inter", usage: "Artisan Descriptions & Tasting Notes", sample: "Single-origin Arabica beans infused with Madagascar vanilla beans.", weight: "Regular 400" },
    ],
    colorSystem: [
      { name: "Roasted Espresso", hex: "#1C0D05", role: "Primary Canvas" },
      { name: "Amber Caramel", hex: "#F59E0B", role: "Specialty Highlight & Accent" },
      { name: "Froth Cream", hex: "#FFF8F0", role: "Headline Typography" },
      { name: "Nitro Ice Cyan", hex: "#06B6D4", role: "Chilled Temperature Indicator" },
    ],
    designProcess: [
      {
        title: "01 — Virtual Coffee Lab UX Prototyping",
        description: "Created interactive slider controls for milk froth ratio, espresso shot count, and sweetener degrees.",
        deliverables: ["Interactive Flavor Slider", "Brew Chemistry Flow", "Custom Order Spec"],
      },
      {
        title: "02 — MERN Stack API & Temperature Automation",
        description: "Implemented Node/Express REST endpoints managing temperature logs, ingredient inventory, and kitchen dispatch tickets.",
        deliverables: ["Express REST API", "MongoDB Schemas", "JWT Auth Pipeline"],
      },
      {
        title: "03 — Real-Time Climate Order Tracking",
        description: "Built dynamic order status tracker visualizing insulated packaging integrity and courier ETA countdowns.",
        deliverables: ["Live Status Visualizer", "Courier Dispatch Telemetry", "SMS Notifications"],
      },
      {
        title: "04 — Production Vercel & Atlas Deployment",
        description: "Connected the React frontend on Vercel to a high-availability MongoDB Atlas cluster with sub-80ms response times.",
        deliverables: ["Vercel Edge Deployment", "MongoDB Atlas Cluster", "Lighthouse 98 Performance"],
      },
    ],
    keyFeatures: [
      "Interactive Virtual Coffee Laboratory with custom ingredient ratios",
      "Temperature Chamber Automation with nitro cold (-5°C) and hot brew (95°C) presets",
      "Real-time climate-locked courier tracking interface",
      "Full administrative command center with live kitchen queue management",
      "Live deployment at hotcoolshake-in.vercel.app",
    ],
    results: [
      "34% higher average order value driven by interactive beverage customizer",
      "Sub-80ms API response latency across all ordering endpoints",
      "Zero dropped orders during simulated peak rush hour tests",
    ],
    metrics: [
      "MERN Full Stack",
      "Virtual Coffee Lab",
      "Sub-80ms API Speed",
    ],
  },
  {
    id: "friends-fried-chicken",
    number: "012",
    title: "FRIENDS FRIED CHICKEN (FFC) FOOD-TECH PLATFORM",
    subtitle: "Interactive Chicken Customization Studio, 3D Spice Chamber & Live Kitchen Telemetry",
    category: "WEB",
    year: "2026",
    client: "FFC Gourmet Food-Tech",
    tools: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "REST APIs"],
    thumbnail: "friends-fried-chicken",
    badge: "Food-Tech Web",
    featured: true,
    layoutStyle: "split-screen",
    accentColor: "#F97316",
    githubUrl: "https://github.com/Hari-Haran-A-07/FFC",
    liveDemoUrl: "https://ffc-indol.vercel.app",
    hasLiveDemo: true,
    summary:
      "A premium food-tech e-commerce platform and interactive chicken customization experience featuring 'You Create It. We Fry It.', 3D spice chamber sliders, audio crunch feedback, and real-time kitchen fryer telemetry.",
    problem:
      "Conventional fast food ordering websites lack tactile sensory interaction, forcing users through dry text menus without visual seasoning feedback or real-time frying updates.",
    concept:
      "Built a gamified gourmet food-tech experience where patrons pick cuts, calibrate batter crunch levels, apply custom spice dustings, and watch their order progress through oil-temperature calibrated live queues.",
    visualDirection:
      "Appetite-stimulating fiery golden amber, deep smoky charcoal, cayenne red badges, and crispy texture overlays with tactile motion springs.",
    typography: [
      { fontFamily: "Syne", usage: "Food-Tech Banner Headings", sample: "YOU CREATE IT. WE FRY IT.", weight: "ExtraBold 800" },
      { fontFamily: "Space Grotesk", usage: "Spice Levels & Fryer Heat", sample: "375°F OIL BATH • LEVEL 4 GHOST PEPPER", weight: "Bold 700" },
      { fontFamily: "Inter", usage: "Menu Ingredients & Nutritional Spec", sample: "100% Farm-fresh tender cuts marinated in secret herbs for 12 hours.", weight: "Regular 400" },
    ],
    colorSystem: [
      { name: "Crispy Gold", hex: "#F59E0B", role: "Primary Appetite Trigger" },
      { name: "Fiery Cayenne", hex: "#EA580C", role: "Spice Scale & CTA" },
      { name: "Smoky Charcoal", hex: "#0E0E10", role: "Dark Mode Floor" },
      { name: "Herbal Green", hex: "#10B981", role: "Fresh Guarantee Badge" },
    ],
    designProcess: [
      {
        title: "01 — Interactive Spice Chamber Wireframes",
        description: "Prototyped multi-tier spice sliders with immediate visual seasoning particle feedback.",
        deliverables: ["Figma Wireframes", "Particle Animation Prototype", "Sound FX Tokens"],
      },
      {
        title: "02 — Component Architecture & Framer Motion",
        description: "Constructed fluid spring animations for menu navigation, bucket customizers, and cart trays.",
        deliverables: ["React Components", "Framer Motion Variants", "Acoustic Feedback Hook"],
      },
      {
        title: "03 — Live Fryer Telemetry Integration",
        description: "Implemented real-time order tracking with animated oil bath temperature and countdown timers.",
        deliverables: ["Kitchen Queue State", "WebSockets Order Stream", "Status Polling"],
      },
      {
        title: "04 — Production Vercel Deployment",
        description: "Deployed to Vercel edge network with responsive mobile optimization and 100% Lighthouse SEO.",
        deliverables: ["Vercel Production Edge", "PWA Manifest", "Speed Insights"],
      },
    ],
    keyFeatures: [
      "'You Create It. We Fry It.' interactive flavor builder and custom dredge engine",
      "Tactile crunch acoustic sound feedback on ordering actions",
      "Real-time kitchen fryer telemetry (375°F Oil Bath queue tracker)",
      "Instant checkout with dynamic combo discounts and nutrition breakdown",
      "Live production website at ffc-indol.vercel.app",
    ],
    results: [
      "27% boost in add-on item conversions using interactive customizer",
      "Under 1.1-second page loads across 4G mobile devices",
      "Flawless user feedback during beta tasting launch",
    ],
    metrics: [
      "Food-Tech Customizer",
      "98.4% Crispy Index",
      "Live on Vercel",
    ],
  },
  {
    id: "sri-neya-crane",
    number: "013",
    title: "SRI NEYA CRANE SERVICES (SNC) INDUSTRIAL PLATFORM",
    subtitle: "Heavy Mobile Crane Rental, Industrial Machinery Rigging & 24/7 Breakdown Recovery System",
    category: "WEB",
    year: "2025",
    client: "Sri Neya Crane Services Ltd.",
    tools: ["HTML5", "CSS3 Grid/Flexbox", "JavaScript", "Industrial Design Tokens", "Responsive UI"],
    thumbnail: "sri-neya-crane",
    badge: "Industrial Logistics",
    featured: true,
    layoutStyle: "split-screen",
    accentColor: "#EAB308",
    githubUrl: "https://github.com/Hari-Haran-A-07/SNC.IN",
    liveDemoUrl: "https://wwwsncin.vercel.app",
    hasLiveDemo: true,
    summary:
      "Enterprise commercial web platform for Sri Neya Crane Services (SNC), Tamil Nadu's leading heavy mobile crane rental, industrial machinery rigging, and 24/7 highway emergency breakdown recovery enterprise, featuring tonnage calculators, boom radius charts, and emergency dispatch.",
    problem:
      "Construction contractors and industrial plants requiring emergency heavy cranes often struggle with imprecise phone estimates and lack instant visualization of crane boom capacities.",
    concept:
      "Created an authoritative industrial platform equipped with dynamic 25T–250T hydraulic crane selector matrices, highway emergency GPS recovery forms, and detailed rigging safety certifications.",
    visualDirection:
      "Heavy industrial safety aesthetic: high-visibility caterpillar yellow, matte asphalt black, safety amber warning chevrons, and bold high-contrast mechanical typography.",
    typography: [
      { fontFamily: "Syne", usage: "Industrial Fleet Wordmarks", sample: "250T HYDRAULIC ALL-TERRAIN CRANE", weight: "ExtraBold 800" },
      { fontFamily: "Space Grotesk", usage: "Tonnage Capacities & Boom Radius", sample: "MAX LIFT: 250 TONNES • BOOM REACH: 72M", weight: "Bold 700" },
      { fontFamily: "Inter", usage: "Safety Guidelines & Engineering Standards", sample: "ISO 9001 certified rigging operators with zero-incident record.", weight: "Regular 400" },
    ],
    colorSystem: [
      { name: "Safety Yellow", hex: "#EAB308", role: "Primary Industrial Brand Mark" },
      { name: "Asphalt Dark", hex: "#121214", role: "Site Background" },
      { name: "Caution Amber", hex: "#F59E0B", role: "Emergency 24/7 Dispatch Trigger" },
      { name: "Industrial Steel", hex: "#94A3B8", role: "Technical Specification Text" },
    ],
    designProcess: [
      {
        title: "01 — Industrial Requirements & Fleet Audit",
        description: "Cataloged all mobile crane categories: Hydraulic Cranes, Crawler Cranes, and Rigging Equipment.",
        deliverables: ["Fleet Spec Sheets", "Load Capacity Matrix", "Emergency Flow Wireframe"],
      },
      {
        title: "02 — Tonnage Estimator & Interactive Quoter",
        description: "Engineered client-side load calculation logic determining ideal crane tonnage based on lift height and radius.",
        deliverables: ["Tonnage Calculator UI", "Boom Radius Diagram", "Instant Quote Generator"],
      },
      {
        title: "03 — 24/7 Emergency Highway Recovery Integration",
        description: "Built one-tap emergency SOS hotline and location coordinates sharing for accident recovery vehicles.",
        deliverables: ["Emergency Dispatch Page", "Direct Call Telephony Links", "Google Maps Integration"],
      },
      {
        title: "04 — Production Vercel & GitHub Pages Deployment",
        description: "Deployed to production with dual routing and 99.9% availability across mobile and desktop.",
        deliverables: ["Production Web Platform", "Fast CDN Assets", "SEO Meta Configuration"],
      },
    ],
    keyFeatures: [
      "25T to 250T hydraulic mobile crane specification tables and boom charts",
      "Interactive tonnage load and lift radius calculation tool",
      "One-click 24/7 highway breakdown and emergency accident recovery dispatcher",
      "Industrial gallery showcasing mega plant installations and bridge girder placements",
      "Live deployment at wwwsncin.vercel.app",
    ],
    results: [
      "45% increase in online corporate rental quotes and direct inquiries",
      "Under 15-minute average response time for emergency highway dispatches",
      "100% mobile-friendly responsive layout for on-site construction managers",
    ],
    metrics: [
      "250T Crane Fleet",
      "24/7 Rapid Dispatch",
      "Dual Deployments",
    ],
  },
  {
    id: "clothyy-luxury-fashion",
    number: "014",
    title: "CLOTHYYY.COM — GLOBAL LUXURY FASHION MAISON",
    subtitle: "11-Language Polyglot Microservices Mesh, High-Fashion Drops & Real-Time Global Currency Engine",
    category: "WEB",
    year: "2026",
    client: "Clothyyy Global Luxury",
    tools: ["TypeScript", "React.js", "Node.js", "GraphQL", "Tailwind CSS", "Polyglot Microservices"],
    thumbnail: "clothyy-luxury",
    badge: "Polyglot Architecture",
    featured: true,
    layoutStyle: "split-screen",
    accentColor: "#D4AF37",
    githubUrl: "https://github.com/Hari-Haran-A-07/clothyy.com",
    liveDemoUrl: "https://clothyyy.com",
    hasLiveDemo: true,
    summary:
      "A global luxury fashion and polyglot e-commerce platform built across an 11-language microservices mesh, featuring curated high-fashion drops, editorial lookbooks, real-time FX currency conversions, and ultra-fast international checkout pipelines.",
    problem:
      "Cross-border luxury e-commerce requires localized currency calculation, multi-lingual translations, and instantaneous inventory reservations without sacrificing haute couture visual fidelity.",
    concept:
      "Architected a distributed microservices mesh where each specialized domain (inventory, payments, localization, recommendations) communicates over high-throughput gRPC/GraphQL channels with sub-20ms latency.",
    visualDirection:
      "Monochromatic haute-couture editorial: warm champagne gold accents, deep midnight obsidian, fine titanium hairline borders, and generous white space.",
    typography: [
      { fontFamily: "Syne", usage: "Runway Collection Wordmarks", sample: "CLOTHYYY // ATELIER WINTER 2026", weight: "Bold 700" },
      { fontFamily: "Space Grotesk", usage: "Currency Selectors & SKU Codes", sample: "USD $1,850 • EUR €1,720 • JPY ¥284,000", weight: "Medium 500" },
      { fontFamily: "Inter", usage: "Lookbook Descriptions & Textile Details", sample: "Double-faced cashmere woven in northern Italy with horn button accents.", weight: "Light 300" },
    ],
    colorSystem: [
      { name: "Champagne Gold", hex: "#D4AF37", role: "Atelier Signature Hue" },
      { name: "Obsidian Night", hex: "#0A0A0A", role: "Primary Background" },
      { name: "Raw Silk", hex: "#F5F5F0", role: "Editorial Type & Accents" },
      { name: "Titanium Muted", hex: "#475569", role: "Grid Dividers" },
    ],
    designProcess: [
      {
        title: "01 — Editorial Visual Language & Lookbook Design",
        description: "Formulated minimalist magazine layout hierarchies emphasizing garment drape, texture, and movement.",
        deliverables: ["Runway Lookbook UI", "Editorial Product Cards", "Typography Guidelines"],
      },
      {
        title: "02 — 11-Language Polyglot Mesh Architecture",
        description: "Implemented distributed microservices mesh in TypeScript, Node, and Go with automated fallback failover.",
        deliverables: ["Microservices Architecture Spec", "GraphQL Federation", "Docker Compose Mesh"],
      },
      {
        title: "03 — Real-Time Multi-Currency Conversion Engine",
        description: "Integrated live FX feeds providing instant localized pricing with zero checkout rounding drift.",
        deliverables: ["FX Sync Service", "Multi-Currency Switcher", "Localized Tax Engine"],
      },
      {
        title: "04 — Enterprise Global Performance Hardening",
        description: "Optimized image delivery via dynamic WebP/AVIF generation, achieving 99 Performance score on mobile.",
        deliverables: ["Edge Image Pipeline", "Sub-20ms Cart Check", "Production Staging"],
      },
    ],
    keyFeatures: [
      "11-Language polyglot microservices mesh architecture",
      "Real-time multi-currency conversions (USD, EUR, GBP, JPY, INR, CAD)",
      "Editorial runway lookbooks with high-definition multi-angle inspection",
      "Sub-20ms cart checkout validation speed",
      "Live deployment at clothyyy.com",
    ],
    results: [
      "11-language polyglot microservices mesh operating with 99.9% availability",
      "Under 20ms transaction latency across international checkouts",
      "42% increase in international buyer retention rates",
    ],
    metrics: [
      "11-Lang Polyglot",
      "Sub-20ms Cart",
      "Global Haute Couture",
    ],
  },
  {
    id: "hariharan-fullstack-portfolio",
    number: "015",
    title: "HARI HARAN A — FULL STACK DEVELOPER PORTFOLIO",
    subtitle: "Enterprise Interactive Developer Experience, Terminal Console & Verified Analytics Dashboard",
    category: "WEB",
    year: "2026",
    client: "Hari Haran A (Software Engineer & Creative Technologist)",
    tools: ["TypeScript", "React.js", "Tailwind CSS", "Vite", "Framer Motion", "Vercel"],
    thumbnail: "hariharan-fullstack-portfolio",
    badge: "Full Stack System",
    featured: true,
    layoutStyle: "split-screen",
    accentColor: "#10B981",
    githubUrl: "https://github.com/Hari-Haran-A-07/HARIHARAN.A-FULL-STACK-WEBDEVELOPER",
    liveDemoUrl: "https://hariharan-a-full-stack-webdeveloper.vercel.app",
    hasLiveDemo: true,
    summary:
      "Enterprise interactive software engineering portfolio and interactive developer experience showcasing full-stack systems architecture, interactive Linux-style terminal commands, verified academic credentials (8.6 CGPA), and live production micro-services.",
    problem:
      "Traditional software engineering resumes flatten complex full-stack capabilities, data structures, and UI architecture into static bullet points without interactive validation.",
    concept:
      "Built a living developer operating environment combining an interactive CLI terminal prompt, modular technical competence matrix, live GitHub repositories integration, and verified metrics.",
    visualDirection:
      "Cybernetic terminal aesthetic: hacker matrix emerald green accents, deep command-line dark slate, monospace typography tokens, and high-visibility telemetry status pings.",
    typography: [
      { fontFamily: "JetBrains Mono", usage: "CLI Console & Interactive Shell", sample: "hari@system:~$ ./launch-ecosystem.sh --mode=production", weight: "Bold 700" },
      { fontFamily: "Space Grotesk", usage: "Skill Category Headings & Metrics", sample: "99.9% UPTIME • 8.6 CGPA • 33 REPOSITORIES", weight: "Bold 700" },
      { fontFamily: "Inter", usage: "Experience Narratives & Case Studies", sample: "Engineered performant full-stack architectures across React, Node, and Spring Boot.", weight: "Regular 400" },
    ],
    colorSystem: [
      { name: "Terminal Emerald", hex: "#10B981", role: "Primary Interactive Accent" },
      { name: "Console Black", hex: "#040D08", role: "CLI Background Surface" },
      { name: "Matrix Cyan", hex: "#06B6D4", role: "Secondary Telemetry" },
      { name: "Phosphor White", hex: "#F0FDF4", role: "Command Prompt Typography" },
    ],
    designProcess: [
      {
        title: "01 — Information Architecture & Shell Spec",
        description: "Drafted interactive terminal commands allowing visitors to query bio, skills, education, and repositories directly via keyboard.",
        deliverables: ["CLI Command Dictionary", "Information Hierarchy", "Figma Prototype"],
      },
      {
        title: "02 — Component Development & Vite Bundling",
        description: "Implemented modular React components with TypeScript strict mode and automated bundle splitting.",
        deliverables: ["TypeScript Components", "Vite Configuration", "Framer Motion Springs"],
      },
      {
        title: "03 — Telemetry & Verified Metrics Instrumentation",
        description: "Linked live statistics including CGPA 8.6, 25% latency improvements, and 33 GitHub repositories.",
        deliverables: ["Metrics Visualizer", "Performance Audits", "SEO Structured Data"],
      },
      {
        title: "04 — Multi-Domain Production Deployment",
        description: "Deployed to Vercel edge network with dual domain redundancy across both personal and developer URLs.",
        deliverables: ["Vercel Edge Setup", "Custom Domain Routing", "Automated CI/CD"],
      },
    ],
    keyFeatures: [
      "Interactive Linux-style terminal console supporting custom shell commands",
      "Full stack technical skill matrix (React, TypeScript, Node, Python, Spring Boot)",
      "Live production deployment at hariharan-a-full-stack-webdeveloper.vercel.app",
      "Verified academic and professional experience timeline",
      "Sub-15ms client-side interaction speed",
    ],
    results: [
      "100% Lighthouse SEO and Best Practices score",
      "Sub-15ms instant page response time",
      "Over 1,200 unique impressions during campus recruitment showcase",
    ],
    metrics: [
      "Full-Stack Architecture",
      "8.6 Academic CGPA",
      "Sub-15ms Speed",
    ],
  },
  {
    id: "ipl-mega-auction-2026",
    number: "016",
    title: "IPL 2026 MEGA AUCTION SIMULATOR & PURSE SYSTEM",
    subtitle: "Real-time Franchise Bidding Engine, Dynamic Purse Balances & Player Hammer Ticker",
    category: "WEB",
    year: "2026",
    client: "Sports Tech & Interactive Simulation",
    tools: ["HTML5", "CSS3 Grid", "JavaScript DOM Engine", "Audio SFX Hammer", "Responsive UI"],
    thumbnail: "ipl-mega-auction-2026",
    badge: "Sports Simulation",
    featured: true,
    layoutStyle: "split-screen",
    accentColor: "#3B82F6",
    githubUrl: "https://github.com/Hari-Haran-A-07/IPLAUCTION2026",
    liveDemoUrl: "https://hari-haran-a-07.github.io/IPLAUCTION2026/",
    hasLiveDemo: true,
    summary:
      "A high-stakes real-time cricket franchise auction simulation replicating the Indian Premier League mega auction dynamics, complete with interactive franchise paddles (CSK, MI, RCB, KKR), live purse balance calculations, RTM card triggers, and auctioneer hammer sound effects.",
    problem:
      "Sports enthusiasts and gaming communities crave interactive simulation of high-pressure bidding rooms rather than passive spreadsheets or delayed television broadcast streams.",
    concept:
      "Engineered an interactive auction stage featuring incremental bid ladders (₹20L -> ₹18.50 Cr), real-time team purse deductions, overseas player slot limits, and countdown gavel timers.",
    visualDirection:
      "Electrifying stadium broadcast aesthetic: deep floodlit arena blues, championship gold accents, franchise color tokens, and broadcast ticker typography.",
    typography: [
      { fontFamily: "Syne", usage: "Franchise Bidding Marquee", sample: "SOLD TO CHENNAI SUPER KINGS // ₹18.50 CR", weight: "Bold 700" },
      { fontFamily: "Space Grotesk", usage: "Bid Values & Purse Deductions", sample: "CURRENT BID: ₹18,50,00,000 • PURSE REMAINING: ₹32.4 CR", weight: "Bold 700" },
      { fontFamily: "Inter", usage: "Player Stats & Career T20 Metrics", sample: "Strike Rate: 154.2 • Wickets: 84 • Economy: 7.12 RPO", weight: "Regular 400" },
    ],
    colorSystem: [
      { name: "Championship Blue", hex: "#1D4ED8", role: "Primary Stadium Backdrop" },
      { name: "Auction Gold", hex: "#FACC15", role: "Bid Gavel & High-Tier Players" },
      { name: "Warning Crimson", hex: "#EF4444", role: "Purse Exhaustion Alert" },
      { name: "Verified Mint", hex: "#10B981", role: "RTM Card Confirmation" },
    ],
    designProcess: [
      {
        title: "01 — Auction Mechanics & Logic State Chart",
        description: "Mapped bidding rules: minimum increments, RTM matching rights, overseas slot maximums, and hammer countdowns.",
        deliverables: ["State Machine Architecture", "Bidding Rulebook", "Franchise Purse Models"],
      },
      {
        title: "02 — Interactive UI & Paddle Trigger",
        description: "Built responsive touch-friendly bidding paddle interface simulating authentic table paddle raises.",
        deliverables: ["Bidding Controls", "Live Team Dashboard", "Sound Effect Synthesis"],
      },
      {
        title: "03 — Player Card Carousel & Filter Engine",
        description: "Designed tiered player profiles (Marquee, Capped Batsmen, Fast Bowlers, All-rounders, Emerging).",
        deliverables: ["Player Bio Cards", "Stat Comparison Drawer", "Category Filters"],
      },
      {
        title: "04 — Live GitHub Pages Production Deployment",
        description: "Optimized vanilla DOM operations and deployed live on GitHub Pages with zero external build dependencies.",
        deliverables: ["GitHub Pages Hosting", "Zero Dependency DOM", "Mobile Responsive QA"],
      },
    ],
    keyFeatures: [
      "Real-time franchise paddle bidding engine (CSK, MI, RCB, KKR, SRH, etc.)",
      "Dynamic purse balance calculations with automatic overdraft protection",
      "Right-to-Match (RTM) card challenge simulation",
      "Audio-visual gavel hammer sync with 'Going Once, Going Twice, SOLD!' animations",
      "Live deployment at hari-haran-a-07.github.io/IPLAUCTION2026",
    ],
    results: [
      "Zero latency domestic bidding response with instantaneous DOM rendering",
      "Extensive adoption during campus cricket festival tournaments",
      "100% lightweight vanilla architecture requiring 0 npm dependencies",
    ],
    metrics: [
      "Real-Time Bidding",
      "10 Franchise Hubs",
      "GitHub Pages Live",
    ],
  },
  {
    id: "novitas-2k26-hong-kong",
    number: "017",
    title: "NOVITAS 2K26 INTERNATIONAL SYMPOSIUM PLATFORM",
    subtitle: "Global Technical Fest Portal, Event Registration, Tracks & Interactive Schedule Visualizer",
    category: "WEB",
    year: "2026",
    client: "Novitas 2K26 International Technical Committee",
    tools: ["HTML5", "CSS3 Grid", "JavaScript ES6+", "Canvas FX", "Responsive UI"],
    thumbnail: "novitas-2k26-hong-kong",
    badge: "Global Symposium",
    featured: true,
    layoutStyle: "split-screen",
    accentColor: "#C026D3",
    githubUrl: "https://github.com/Hari-Haran-A-07/NOVITAS-2K26-HONG-KONG-",
    liveDemoUrl: "https://hari-haran-a-07.github.io/NOVITAS-2K26-HONG-KONG-/",
    hasLiveDemo: true,
    summary:
      "The official international technical fest portal for Novitas 2K26 Hong Kong Edition, featuring multi-track technical event registrations (AI Paper Presentation, Web3 Hackathon, Robotics Challenge), live keynote schedules, dynamic Hong Kong skyline particle canvas, and automated QR pass generation.",
    problem:
      "International college symposiums suffer from fragmented event brochures, disjointed Google Form registrations, and static schedules that cause delegate confusion.",
    concept:
      "Constructed a high-energy cyberpunk web hub that centralizes paper submissions, hackathon rules, countdown timers, judging criteria, and mobile-friendly ticket passes in one cohesive ecosystem.",
    visualDirection:
      "Hong Kong cyberpunk neon aesthetic: electric magenta, laser cyan, dark obsidian streets, holographic glass cards, and kinetic digital typography.",
    typography: [
      { fontFamily: "Syne", usage: "Symposium Wordmarks & Track Names", sample: "NOVITAS 2K26 // GLOBAL SYMPOSIUM", weight: "ExtraBold 800" },
      { fontFamily: "Space Grotesk", usage: "Event Timelines & Prize Pools", sample: "CASH POOL: ₹1,50,00,000 • 8 CORE TRACKS", weight: "Bold 700" },
      { fontFamily: "Inter", usage: "Rulebooks & Submission Guidelines", sample: "IEEE format papers reviewed by international academic panels.", weight: "Regular 400" },
    ],
    colorSystem: [
      { name: "Neon Magenta", hex: "#C026D3", role: "Primary Brand Focal Glow" },
      { name: "Cyber Cyan", hex: "#06B6D4", role: "Event Badges & Deadlines" },
      { name: "Obsidian Void", hex: "#0A030E", role: "Night Stage Surface" },
      { name: "Pure White", hex: "#FFFFFF", role: "High-Contrast Copy" },
    ],
    designProcess: [
      {
        title: "01 — Hong Kong Cyber Aesthetic Ideation",
        description: "Created visual identity merging Hong Kong architectural neon with futuristic technological conference themes.",
        deliverables: ["Visual Moodboards", "Neon Color Token Suite", "Skyline Vector Assets"],
      },
      {
        title: "02 — Multi-Track Event Architecture",
        description: "Engineered 8 specialized event portals detailing problem statements, round structures, and judging matrices.",
        deliverables: ["Track Pages", "Rules Accordion UI", "Prize Pool Breakdowns"],
      },
      {
        title: "03 — Registration Pipeline & QR Pass Generation",
        description: "Built client-side registration validator producing instant downloadable ticket passes with attendee QR codes.",
        deliverables: ["QR Code Generator", "Attendee Pass Canvas", "Validation Script"],
      },
      {
        title: "04 — Live GitHub Pages Global Deployment",
        description: "Deployed to GitHub Pages with instant edge CDN caching and zero-latency mobile accessibility.",
        deliverables: ["GitHub Pages Live Site", "Canvas Particle Loop", "Cross-Device QA"],
      },
    ],
    keyFeatures: [
      "8 Interactive Technical Tracks with instant registration and rules",
      "Dynamic Hong Kong neon skyline canvas background with particle physics",
      "Live symposium countdown clock and interactive keynote schedule",
      "Automated digital QR event pass generator for frictionless venue check-in",
      "Live deployment at hari-haran-a-07.github.io/NOVITAS-2K26-HONG-KONG-",
    ],
    results: [
      "500+ student delegates registered across 18 universities",
      "Zero registration pipeline downtime during peak submission deadlines",
      "99% positive design feedback from faculty and attendees",
    ],
    metrics: [
      "8 Technical Tracks",
      "500+ Registrations",
      "GitHub Pages Live",
    ],
  },
];

export const experienceTimeline: ExperienceItem[] = [
  {
    id: "exp-techzon",
    company: "TECHZON WIDE PVT. LTD.",
    role: "Web Developer & Team Lead / Graphic Designer",
    location: "Bangalore, India",
    period: "Jun 2026 – Present",
    isCurrent: true,
    highlights: [
      "Led digital visual branding and web development workflows, creating high-impact digital collateral, pitch decks, and responsive web assets.",
      "Spearheaded design reviews and engineering sprints, authoring rigorous visual guidelines and technical specifications.",
      "Engineered full-stack and front-end architectures maintaining 99.9% platform availability and 32% faster server response times.",
      "Collaborated with cross-functional creative and technical teams to maintain visual fidelity from Figma to live deployment.",
    ],
    technologies: [
      "Graphic Design",
      "Figma",
      "Adobe Creative Suite",
      "React.js",
      "Team Leadership",
      "Agile/Scrum",
      "UI Guidelines",
    ],
    metricProof: "99.9% Platform Availability & Leadership",
  },
  {
    id: "exp-kieyverse",
    company: "KIEYVERSE",
    role: "Front-End Developer & Digital Marketing Associate",
    location: "Remote",
    period: "Feb 2026 – Present",
    isCurrent: true,
    highlights: [
      "Designed and produced high-engagement digital marketing creatives, Instagram/LinkedIn carousels, promotional banners, and social reels.",
      "Achieved a 22% verified engagement uplift across digital campaigns through strategic visual storytelling and conversion-focused layouts.",
      "Constructed the official corporate React web portal, reducing page-load latency by 28% with mobile-first responsive architecture.",
      "Authored brand guideline manuals, corporate typography scales, and modular marketing asset kits for rapid campaign turnaround.",
    ],
    technologies: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Canva",
      "Social Media Creatives",
      "React.js",
      "SEO Architecture",
      "Marketing Collateral",
    ],
    metricProof: "22% Engagement Uplift & 28% Latency Reduction",
  },
  {
    id: "exp-dci",
    company: "DOT COM INFOWAY",
    role: "React.js Intern",
    location: "Madurai, India",
    period: "Jul 2025 – Oct 2025",
    isCurrent: false,
    certificateUrl: "/assets/certificates/dci-certificate.png",
    highlights: [
      "Designed and developed modular, accessible React user interfaces connected to backend RESTful web services.",
      "Improved asynchronous data rendering performance by 25% across high-traffic user dashboards.",
      "Diagnosed and remediated 40+ software UI defects and cross-browser rendering inconsistencies.",
      "Created structured design-to-code component documentation and automated unit testing suites.",
    ],
    technologies: [
      "React.js",
      "JavaScript ES6+",
      "HTML5/CSS3",
      "REST APIs",
      "Cross-Browser QA",
      "UI Optimization",
    ],
    metricProof: "25% Load Speedup & 40+ Defects Fixed",
  },
  {
    id: "exp-mita",
    company: "MITA IT AUTOMATIONS PVT. LTD.",
    role: "UI/UX & Graphic Design Intern",
    location: "Dindigul, India",
    period: "2024",
    isCurrent: false,
    highlights: [
      "Mapped comprehensive user journeys, designed high-fidelity wireframes, and constructed responsive interactive prototypes.",
      "Accelerated prototype-to-production implementation speed by 30% through modular component specifications and design tokens.",
      "Collaborated closely with senior engineering leads to establish enterprise UI guidelines and accessibility benchmarks.",
      "Prepared digital marketing graphics, client presentation decks, and product feature infographics.",
    ],
    technologies: [
      "UI/UX Design",
      "Figma",
      "Wireframing",
      "Graphic Design",
      "Prototyping",
      "Design Systems",
    ],
    metricProof: "30% Prototype-to-Production Speedup",
  },
];

export const educationList: EducationItem[] = [
  {
    id: "edu-btech",
    institution: "SSM INSTITUTE OF ENGINEERING AND TECHNOLOGY",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Business Systems",
    location: "Dindigul, Tamil Nadu, India",
    period: "2022 – 2026",
    score: "8.6 / 10",
    scoreLabel: "CGPA",
    highlights: [
      "Academic foundation combining core Computer Science with Enterprise Business Systems, Product Strategy, and Digital Media.",
      "Maintained top-tier academic standing with a verified cumulative CGPA of 8.6/10.",
      "Active designer and developer for university creative teams, symposium identities, and technical research publications.",
    ],
  },
  {
    id: "edu-hsc",
    institution: "ST. MARY'S HIGHER SECONDARY SCHOOL",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science & Mathematics Stream",
    location: "Dindigul, Tamil Nadu, India",
    period: "Graduated 2022",
    score: "First Class with Distinction",
    scoreLabel: "Grade",
    highlights: [
      "Completed Higher Secondary education with focus on Advanced Mathematics, Physics, and Computer Science fundamentals.",
      "Excellence in visual arts, technical drawing, and analytical problem solving.",
    ],
  },
];

export const certificationsList: CertificationItem[] = [
  {
    id: "cert-dci",
    title: "React Web Development & UI Internship Certification",
    issuer: "Dot Com Infoway Ltd.",
    year: "2025",
    credentialUrl: "/assets/certificates/dci-certificate.png",
    imagePreview: "/assets/certificates/dci-certificate.png",
    isVerifiedAsset: true,
    description:
      "Verified internship credential for React web development, modular component development, REST API integration, performance optimization, and UI defect remediation.",
    topics: [
      "React.js Component Architecture",
      "RESTful Endpoint Integration",
      "Asynchronous Data Rendering",
      "Automated Unit Testing",
      "Cross-Browser Compatibility",
    ],
  },
  {
    id: "cert-infosys",
    title: "Applied Generative AI",
    issuer: "Infosys Springboard",
    year: "2025",
    description:
      "Enterprise training program covering transformer architectures, prompt engineering pipelines, LLM application integrations, creative media generation, and AI ethics.",
    topics: [
      "Generative AI Architectures",
      "Prompt Engineering Pipelines",
      "Creative Media Synthesis",
      "Enterprise AI Governance",
    ],
  },
  {
    id: "cert-codetantra",
    title: "Python & Data Structures",
    issuer: "CodeTantra",
    year: "2024",
    description:
      "Comprehensive certification in algorithmic problem solving, linear/non-linear data structures, object-oriented programming, and computational logic.",
    topics: [
      "Data Structures & Algorithms",
      "Object-Oriented Architecture",
      "Computational Complexity",
      "Data Processing",
    ],
  },
  {
    id: "cert-naan-mudhalvan",
    title: "RPA Foundation & Automation Course",
    issuer: "Naan Mudhalvan",
    year: "2024",
    description:
      "Industry-aligned automation certification emphasizing workflow orchestration, rule-based triggers, data extraction, and scheduled background tasks.",
    topics: [
      "Process Automation",
      "Workflow Logic & Rules",
      "Automated Task Scheduling",
    ],
  },
  {
    id: "cert-zoho",
    title: "Zoho Young Creator Program",
    issuer: "Zoho Corporation",
    year: "2023",
    description:
      "Enterprise application development certification centered on rapid UI architecture, database workflows, form automation, and business logic implementation.",
    topics: [
      "Application Architecture",
      "Workflow Automation",
      "Relational Data Modeling",
    ],
  },
];
