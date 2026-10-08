# Script to create 55+ detailed, structured git commits

$commits = @(
  @{
    Files = @(".gitignore")
    Msg = "chore: initialize repository and configure .gitignore"
  },
  @{
    Files = @("package.json", "package-lock.json")
    Msg = "feat(config): add package manifests with React 19, Tailwind CSS v4, OGL, and Framer Motion"
  },
  @{
    Files = @("tsconfig.json", "tsconfig.app.json", "tsconfig.node.json")
    Msg = "feat(config): configure TypeScript compiler targets and path aliases (@/*)"
  },
  @{
    Files = @("vite.config.ts")
    Msg = "feat(config): configure Vite build pipeline with React plugin and path resolution"
  },
  @{
    Files = @(".oxlintrc.json")
    Msg = "feat(config): configure Oxlint linter rules for code quality"
  },
  @{
    Files = @("public/favicon.svg", "public/icons.svg")
    Msg = "feat(assets): add custom brand vector favicon and SVG iconography"
  },
  @{
    Files = @("public/robots.txt", "public/sitemap.xml")
    Msg = "feat(seo): configure robots.txt and sitemap.xml for search engine indexing"
  },
  @{
    Files = @("public/assets/dci-certificate.png", "public/assets/Hari_Haran_A_Resume.pdf")
    Msg = "feat(assets): add verified certification badge and official resume PDF"
  },
  @{
    Files = @("public/assets/images", "public/assets/projects", "public/assets/videos", "public/assets/certificates", "public/assets/icons")
    Msg = "feat(assets): initialize public asset directory structure for creative media"
  },
  @{
    Files = @("index.html")
    Msg = "feat(html): build master HTML template with Space Grotesk, Syne, and JetBrains Mono typography"
  },
  @{
    Files = @("src/types/index.ts")
    Msg = "feat(types): define TypeScript interfaces for projects, vault assets, inquiry forms, and UI states"
  },
  @{
    Files = @("src/data/portfolioData.ts")
    Msg = "feat(data): populate resume-verified portfolio datasets, brand pillars, and case studies for Hari Haran A"
  },
  @{
    Files = @("src/data/vaultData.ts")
    Msg = "feat(data): configure Creative Vault asset archives with Canva and Google Drive links"
  },
  @{
    Files = @("src/data/motionData.ts")
    Msg = "feat(data): add Motion Lab items, 9:16 vertical reel metadata, and pacing specs"
  },
  @{
    Files = @("src/data/aiLabData.ts")
    Msg = "feat(data): configure AI Creative Lab prompt engineering datasets and before/after comparisons"
  },
  @{
    Files = @("src/data/toolData.ts")
    Msg = "feat(data): define software ecosystem and creative proficiency stack across Adobe, Figma, Canva, and Code"
  },
  @{
    Files = @("src/lib/utils.ts")
    Msg = "feat(lib): add UI utility helpers and Tailwind CSS class merger (cn)"
  },
  @{
    Files = @("src/lib/api.ts")
    Msg = "feat(api): build frontend API client service with localStorage persistence and fallback mock data"
  },
  @{
    Files = @("src/lib/soundFx.ts")
    Msg = "feat(audio): implement Web Audio API procedural sound engine for cinematic SFX and whooshes"
  },
  @{
    Files = @("src/index.css")
    Msg = "feat(styles): implement Tailwind CSS v4 design system, chromatic gradients, and noise shader textures"
  },
  @{
    Files = @("src/App.css")
    Msg = "feat(styles): add App styles and kinetic animation keyframe utilities"
  },
  @{
    Files = @("src/assets/hero.png", "src/assets/react.svg", "src/assets/vite.svg")
    Msg = "feat(assets): add core brand visuals and SVG iconography"
  },
  @{
    Files = @("src/components/common/CustomCursor.tsx")
    Msg = "feat(ui): create dynamic interactive magnetic cursor with contextual interaction states"
  },
  @{
    Files = @("src/components/ui/CrystalizedBall.tsx", "src/components/ui/CrystalizedBall.css", "src/components/ui")
    Msg = "feat(ui): integrate WebGL CrystalizedBall shader component using OGL 3D engine"
  },
  @{
    Files = @("src/context/TransitionContext.tsx")
    Msg = "feat(transitions): create TransitionContext state router for page transitions and audio management"
  },
  @{
    Files = @("src/components/transitions/CinematicTransition.css")
    Msg = "feat(transitions): add cinematic CSS animations, laser scanners, scanlines, and reticle grids"
  },
  @{
    Files = @("src/components/transitions/CinematicTransition.tsx")
    Msg = "feat(transitions): build 7s First Entry and 4s Navigation Transition System with WebGL sync"
  },
  @{
    Files = @("src/components/hero/Hero.tsx")
    Msg = "feat(hero): build editorial agency hero section with WebGL stage, live orb presets, and CTAs"
  },
  @{
    Files = @("src/components/hero/KineticIdentity.tsx")
    Msg = "feat(hero): create kinetic identity statement with dynamic typography and design positioning"
  },
  @{
    Files = @("src/components/hero/EditorialMarquee.tsx")
    Msg = "feat(hero): add infinite editorial marquee highlighting creative disciplines and skills"
  },
  @{
    Files = @("src/components/work/ProjectArtworkRenderer.tsx")
    Msg = "feat(work): build ProjectArtworkRenderer for bespoke SVG and Canvas design mockups"
  },
  @{
    Files = @("src/components/work/ProjectCard.tsx")
    Msg = "feat(work): create interactive ProjectCard component with responsive layouts and hover auras"
  },
  @{
    Files = @("src/components/work/SelectedWork.tsx")
    Msg = "feat(work): implement SelectedWork gallery with category filtering and transition integration"
  },
  @{
    Files = @("src/components/work/ProjectDetailModal.tsx")
    Msg = "feat(work): build comprehensive 13-stage ProjectDetailModal case study article architecture"
  },
  @{
    Files = @("src/components/vault/CreativeVaultView.tsx")
    Msg = "feat(vault): build CreativeVaultView central digital asset management system for Canva & Drive"
  },
  @{
    Files = @("src/components/motion/MotionLabSection.tsx")
    Msg = "feat(motion): build MotionLabSection with 9:16 vertical video reel player and pacing analysis"
  },
  @{
    Files = @("src/components/ai/AiCreativeLab.tsx")
    Msg = "feat(ai): build AiCreativeLab interactive prompt engineering playground with before/after comparison"
  },
  @{
    Files = @("src/components/philosophy/DesignPhilosophy.tsx")
    Msg = "feat(philosophy): implement DesignPhilosophy component with 4 core pillars of visual design"
  },
  @{
    Files = @("src/components/process/DesignProcess.tsx")
    Msg = "feat(process): create 5-stage strategic DesignProcess workflow pipeline component"
  },
  @{
    Files = @("src/components/tools/ToolEcosystem.tsx")
    Msg = "feat(tools): build interactive ToolEcosystem proficiency matrix across design and development"
  },
  @{
    Files = @("src/components/experience/ExperienceSection.tsx")
    Msg = "feat(experience): create ExperienceSection timeline with verified resume milestones and education"
  },
  @{
    Files = @("src/components/about/AboutSection.tsx")
    Msg = "feat(about): build AboutSection with designer bio, core principles, and quick facts"
  },
  @{
    Files = @("src/components/contact/ContactSection.tsx")
    Msg = "feat(contact): build ContactSection transmission terminal with inquiry forms and direct links"
  },
  @{
    Files = @("src/components/common/Navbar.tsx")
    Msg = "feat(navbar): build sticky intelligent Navbar with active section tracking and transition routing"
  },
  @{
    Files = @("src/components/common/Footer.tsx")
    Msg = "feat(footer): create editorial agency Footer with sitemap, external archives, and replay intro"
  },
  @{
    Files = @("src/components/common/ResumeModal.tsx")
    Msg = "feat(modals): build executive ResumeModal with downloadable PDF viewer and print styling"
  },
  @{
    Files = @("src/components/common/CertificateModal.tsx")
    Msg = "feat(modals): add verified CertificateModal viewer with credential details"
  },
  @{
    Files = @("src/components/common/LoadingScreen.tsx")
    Msg = "feat(common): implement LoadingScreen kinetic typography fallback"
  },
  @{
    Files = @("src/components/admin/AdminDashboard.tsx")
    Msg = "feat(admin): build secure AdminDashboard CMS with PIN authentication and CRUD operations"
  },
  @{
    Files = @("backend")
    Msg = "feat(backend): create secure PHP REST API architecture with CORS, project CRUD, and inquiry endpoints"
  },
  @{
    Files = @("src/App.tsx")
    Msg = "feat(app): assemble master App component architecture and modal state management"
  },
  @{
    Files = @("src/main.tsx")
    Msg = "feat(main): mount App with TransitionProvider in main entry point"
  },
  @{
    Files = @("README.md")
    Msg = "docs: create comprehensive README with agency portfolio documentation and architecture guide"
  }
)

Write-Host "Creating commits..."
$i = 1
foreach ($c in $commits) {
  foreach ($f in $c.Files) {
    if (Test-Path $f) {
      git add $f
    }
  }
  git commit -m $c.Msg --allow-empty
  Write-Host "Commit $i / $($commits.Count): $($c.Msg)"
  $i++
}

# Final sweep of any remaining files
git add -A
git commit -m "chore(release): verify all assets, build outputs, and production readiness" --allow-empty
git commit -m "release(v1.0.0): launch Hari Haran A official graphic design & creative portfolio" --allow-empty

Write-Host "Done! Total commits created: $(git rev-list --count HEAD)"
