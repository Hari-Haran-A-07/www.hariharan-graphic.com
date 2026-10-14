import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Download, Sparkles, FolderLock, Play, Compass, Zap, Radio, GitBranch } from 'lucide-react';
import { CursorState } from '@/types';
import { CrystalizedBall, BallPreset } from '@/components/ui/CrystalizedBall';
import { useTransitionRouter } from '@/context/TransitionContext';

interface HeroProps {
  onOpenResume: () => void;
  onNavigateVault: () => void;
  setCursorState: (state: CursorState) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResume,
  onNavigateVault,
  setCursorState,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activePreset, setActivePreset] = useState<BallPreset>('plasma');
  const [ballColor, setBallColor] = useState('#A100FF');
  const { navigateWithTransition } = useTransitionRouter();

  const presets: { id: BallPreset; label: string; color: string }[] = [
    { id: 'plasma', label: 'PLASMA', color: '#A100FF' },
    { id: 'nebula', label: 'NEBULA', color: '#7C3AED' },
    { id: 'aurora', label: 'AURORA', color: '#00E5FF' },
    { id: 'ember', label: 'EMBER', color: '#FF4D00' },
    { id: 'solar', label: 'SOLAR', color: '#FFD36E' },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-32 pb-16 px-6 md:px-12 overflow-hidden bg-[#000000]"
    >
      {/* Dynamic Background Mesh Gradients */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full bg-radial from-[#A100FF]/15 via-[#7C3AED]/8 to-transparent blur-3xl pointer-events-none transition-transform duration-700 ease-out will-change-transform"
        style={{
          transform: `translate3d(calc(-50% + ${mousePos.x * 1.5}px), calc(-50% + ${mousePos.y * 1.5}px), 0)`,
        }}
      />
      
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="noise-overlay" />

      {/* Center Interactive WebGL Crystalized Ball Background Stage */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-3/5 h-[500px] lg:h-[700px] pointer-events-auto opacity-75 lg:opacity-90 transition-opacity duration-700 z-0"
        onMouseEnter={() => setCursorState('EXPLORE')}
        onMouseLeave={() => setCursorState('NORMAL')}
      >
        <CrystalizedBall
          preset={activePreset}
          color={ballColor}
          size={0.8}
          crackle={0.9}
          fill={0.5}
          interactive={true}
          hoverStrength={0.8}
          glow={1.1}
          flares={0.7}
          sparks={0.6}
        />

        {/* Interactive Preset Selector Overlay in Hero */}
        <div className="absolute bottom-6 right-6 lg:right-12 z-20 flex items-center space-x-1.5 p-1.5 rounded-full bg-black/70 backdrop-blur-xl border border-white/15 shadow-2xl">
          <span className="font-mono text-[9px] text-[#A7A7A7] px-2 flex items-center space-x-1">
            <Zap className="w-3 h-3 text-[#00E5FF]" />
            <span className="hidden sm:inline">ENERGY ORB:</span>
          </span>
          {presets.map(p => (
            <button
              key={p.id}
              onClick={() => {
                setActivePreset(p.id);
                setBallColor(p.color);
              }}
              className={`font-mono text-[10px] px-2.5 py-1 rounded-full transition-all ${
                activePreset === p.id
                  ? 'bg-white text-black font-bold shadow-md scale-105'
                  : 'text-[#A7A7A7] hover:text-white hover:bg-white/10'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Floating Design Studio Frames & Composition Badges */}
      <div
        className="hidden xl:block absolute top-36 right-16 z-20 transition-transform duration-500 ease-out pointer-events-none"
        style={{
          transform: `translate3d(${mousePos.x * -1.2}px, ${mousePos.y * -1.2}px, 0) rotate(2deg)`,
        }}
      >
        <div className="glass-panel p-4 rounded-2xl w-64 shadow-2xl space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-[#A7A7A7]">
            <span className="text-[#00E5FF] flex items-center space-x-1">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
              <span>ACTIVE SYSTEM</span>
            </span>
            <span>2026 // ED.01</span>
          </div>
          <div className="h-28 rounded-xl bg-gradient-to-br from-purple-900/40 via-black to-[#171717] border border-white/10 flex flex-col justify-between p-3 relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 font-display font-black text-6xl text-white/5 select-none">
              DESIGN
            </div>
            <span className="font-mono text-[10px] text-white/70">DESIGN × MOTION × TECH</span>
            <span className="font-display font-bold text-sm text-white">VISUAL STORYTELLER</span>
          </div>
          <div className="flex justify-between items-center font-mono text-[10px] text-[#A7A7A7]">
            <span>CANVA • ADOBE • FIGMA</span>
            <span className="text-[#10B981]">PROTOTYPE READY</span>
          </div>
        </div>
      </div>

      <div
        className="hidden xl:block absolute bottom-36 left-12 z-20 transition-transform duration-500 ease-out pointer-events-none"
        style={{
          transform: `translate3d(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px, 0) rotate(-3deg)`,
        }}
      >
        <div className="glass-panel p-3.5 rounded-2xl shadow-2xl flex items-center space-x-3 w-56">
          <div className="w-10 h-10 rounded-xl bg-[#FF4D00]/20 text-[#FF4D00] flex items-center justify-center font-bold">
            <Play className="w-4 h-4 fill-current" />
          </div>
          <div>
            <div className="font-display font-bold text-xs text-white">MOTION LAB 2026</div>
            <div className="font-mono text-[10px] text-[#A7A7A7]">9:16 REELS & PACING</div>
          </div>
        </div>
      </div>

      {/* Main Editorial Hero Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        
        {/* Top Discipline Tag & Live Status */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8">
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#A100FF]" />
            <span className="font-mono text-xs text-[#F5F5F5] tracking-widest uppercase">
              GRAPHIC DESIGNER / VIDEO EDITOR / CREATIVE TECHNOLOGIST
            </span>
          </div>

          <a
            href="#work"
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-mono text-xs hover:bg-emerald-900/60 transition-colors shadow-sm"
          >
            <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span className="font-bold">15+ LIVE DEMOS</span>
          </a>

          <a
            href="https://github.com/Hari-Haran-A-07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-[#00E5FF] font-mono text-xs hover:border-cyan-400 transition-colors"
          >
            <GitBranch className="w-3 h-3 text-[#00E5FF]" />
            <span>33+ GITHUB REPOSITORIES</span>
            <ArrowUpRight className="w-2.5 h-2.5" />
          </a>
        </div>

        {/* Oversized Cinematic Typography Headline */}
        <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.92] text-white max-w-5xl">
          DESIGNING IDEAS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E879F9] to-[#A100FF]">
            INTO VISUAL
          </span> <br />
          EXPERIENCES.
        </h1>

        {/* Hero Supporting Bio Statement */}
        <div className="mt-8 md:mt-10 max-w-2xl">
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#A7A7A7] font-normal leading-relaxed">
            I craft compelling brand identities, high-retention social campaigns, cinematic motion reels, and interactive digital interfaces that make brands impossible to ignore.
          </p>
          <p className="font-mono text-xs text-[#6F6F6F] mt-2">
            Graphic Designer • Visual Storyteller • UI/UX Designer • Video Editor • Creative Technologist
          </p>
        </div>

        {/* Action CTAs Cluster */}
        <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-4">
          
          {/* Primary CTA: Explore Work */}
          <button
            onClick={() =>
              navigateWithTransition({
                title: 'LOADING / SELECTED WORK',
                category: 'BRANDING • SOCIAL MEDIA • UI/UX • MOTION',
                href: '#work',
              })
            }
            onMouseEnter={() => setCursorState('VIEW')}
            onMouseLeave={() => setCursorState('NORMAL')}
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-[#A100FF] to-[#7C3AED] hover:from-[#B120FF] hover:to-[#8B4CF7] text-white font-display font-bold text-sm px-8 py-4 rounded-full shadow-2xl shadow-purple-950/60 hover:scale-105 transition-all duration-300"
          >
            <span>EXPLORE MY WORK</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>

          {/* Secondary CTA: Creative Vault */}
          <button
            onClick={() =>
              navigateWithTransition({
                title: 'LOADING / CREATIVE VAULT',
                category: 'CANVA & GOOGLE DRIVE ASSET ARCHIVE',
                action: onNavigateVault,
              })
            }
            onMouseEnter={() => setCursorState('EXPLORE')}
            onMouseLeave={() => setCursorState('NORMAL')}
            className="inline-flex items-center space-x-2.5 bg-white/10 hover:bg-white/20 text-white font-display font-semibold text-sm px-7 py-4 rounded-full border border-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-300 hover:scale-105"
          >
            <FolderLock className="w-4 h-4 text-[#00E5FF]" />
            <span>CREATIVE VAULT</span>
          </button>

          {/* Third CTA: Download Resume */}
          <button
            onClick={() =>
              navigateWithTransition({
                title: 'LOADING / RESUME ARCHIVE',
                category: 'CURRICULUM VITAE • EXECUTIVE PDF',
                action: onOpenResume,
              })
            }
            onMouseEnter={() => setCursorState('OPEN')}
            onMouseLeave={() => setCursorState('NORMAL')}
            className="inline-flex items-center space-x-2 bg-transparent hover:bg-white/5 text-[#A7A7A7] hover:text-white font-mono text-xs px-6 py-4 rounded-full border border-white/10 hover:border-white/25 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-[#A100FF]" />
            <span>DOWNLOAD RESUME (PDF)</span>
          </button>

          {/* Fourth CTA: Let's Collaborate */}
          <button
            onClick={() =>
              navigateWithTransition({
                title: 'LOADING / CONTACT TERMINAL',
                category: 'INQUIRIES & COLLABORATION',
                href: '#contact',
              })
            }
            onMouseEnter={() => setCursorState('OPEN')}
            onMouseLeave={() => setCursorState('NORMAL')}
            className="inline-flex items-center space-x-1.5 font-mono text-xs text-[#00E5FF] hover:text-white transition-colors underline underline-offset-8 px-2 py-4"
          >
            <span>LET'S COLLABORATE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>

      {/* Bottom Technical Bar & Scroll Indicator */}
      <div className="relative z-10 pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-white/10 text-xs font-mono text-[#6F6F6F] gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex items-center space-x-2 text-[#A7A7A7]">
            <Compass className="w-3.5 h-3.5 text-[#A100FF]" />
            <span>DINDIGUL, TN, INDIA</span>
          </span>
          <span>•</span>
          <span className="text-emerald-400 flex items-center space-x-1.5 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>15+ LIVE DEMOS</span>
          </span>
          <span>•</span>
          <a
            href="https://github.com/Hari-Haran-A-07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00E5FF] hover:underline flex items-center space-x-1"
          >
            <span>33 GITHUB REPOSITORIES</span>
          </a>
          <span>•</span>
          <span className="text-[#A7A7A7]">2026 ACTIVE PORTFOLIO</span>
        </div>

        <button
          onClick={() =>
            navigateWithTransition({
              title: 'LOADING / SELECTED WORK',
              category: 'BRANDING • SOCIAL MEDIA • UI/UX • MOTION',
              href: '#work',
            })
          }
          className="group inline-flex items-center space-x-2 text-[#A7A7A7] hover:text-white transition-colors"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-[#A100FF]" />
        </button>
      </div>

    </section>
  );
};
