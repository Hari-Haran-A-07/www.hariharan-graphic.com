import React, { useEffect, useState, useRef } from 'react';
import { useTransitionRouter } from '@/context/TransitionContext';
import { soundFx } from '@/lib/soundFx';
import { Volume2, VolumeX, Sparkles, ArrowRight, ShieldCheck, Compass } from 'lucide-react';
import './CinematicTransition.css';

export const CinematicTransition: React.FC = () => {
  const {
    isTransitioning,
    transitionMode,
    destination,
    soundMuted,
    toggleSound,
    completeTransition,
    skipTransition,
  } = useTransitionRouter();

  // Elapsed time in milliseconds
  const [elapsedMs, setElapsedMs] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Workflow steps for 4.0s - 5.0s of 7s intro
  const workflowSteps = [
    { title: 'IDEA', color: '#A100FF' },
    { title: 'DESIGN', color: '#7C3AED' },
    { title: 'EDIT', color: '#FF4D00' },
    { title: 'MOTION', color: '#00E5FF' },
    { title: 'EXPERIENCE', color: '#10B981' },
  ];

  // Creative transition words for 1.0s - 2.0s of 4s nav
  const navWords = ['HHA', 'DESIGN', 'CREATE', 'MOVE'];

  // Master Clock Loop
  useEffect(() => {
    if (!isTransitioning) return;

    const totalDuration = transitionMode === 'INTRO_7S' ? 7000 : 4000;
    const startTime = performance.now();

    // Trigger initial whoosh
    if (transitionMode === 'INTRO_7S') {
      soundFx.playWhoosh(1.4, 80, 40);
    } else {
      soundFx.playWhoosh(0.8, 140, 50);
    }

    let animationFrameId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      setElapsedMs(elapsed);

      // Interpolate progress percentage
      if (transitionMode === 'INTRO_7S') {
        if (elapsed < 5000) {
          // 0 to 5s: gradual progress up to 60%
          setDisplayProgress(Math.min(60, Math.floor((elapsed / 5000) * 60)));
        } else if (elapsed < 6000) {
          // 5s to 6s: fast acceleration from 60% to 100%
          const pct = 60 + Math.floor(((elapsed - 5000) / 1000) * 40);
          setDisplayProgress(Math.min(100, pct));
        } else {
          setDisplayProgress(100);
        }
      } else {
        // NAV_4S: 0 to 3s counts to 100%
        if (elapsed < 3000) {
          setDisplayProgress(Math.min(100, Math.floor((elapsed / 3000) * 100)));
        } else {
          setDisplayProgress(100);
        }
      }

      // Audio cues at key milestones
      if (transitionMode === 'INTRO_7S') {
        if (Math.abs(elapsed - 1000) < 20) soundFx.playDigitalBlip(900);
        if (Math.abs(elapsed - 2000) < 20) soundFx.playDigitalBlip(1200);
        if (Math.abs(elapsed - 4000) < 20) soundFx.playRiser(1.0);
        if (Math.abs(elapsed - 6000) < 20) soundFx.playRevealSweep();
      } else if (transitionMode === 'NAV_4S') {
        if (Math.abs(elapsed - 1000) < 20) soundFx.playDigitalBlip(1100);
        if (Math.abs(elapsed - 2000) < 20) soundFx.playDigitalBlip(1400);
        if (Math.abs(elapsed - 3000) < 20) soundFx.playRevealSweep();
      }

      if (elapsed >= totalDuration) {
        completeTransition();
      } else {
        animationFrameId = requestAnimationFrame(tick);
      }
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isTransitioning, transitionMode, completeTransition]);

  // High Performance 60FPS Ambient Particle Canvas
  useEffect(() => {
    if (!isTransitioning) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate Particles
    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.6,
      speedY: -(Math.random() * 0.8 + 0.3),
      opacity: Math.random() * 0.7 + 0.2,
      color: Math.random() > 0.6 ? '#A100FF' : Math.random() > 0.3 ? '#00E5FF' : '#FFFFFF',
    }));

    let animId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render drifting particles
      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = p.size > 1.5 ? 8 : 0;
        ctx.shadowColor = p.color;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [isTransitioning]);

  if (!isTransitioning) return null;

  const seconds = elapsedMs / 1000;

  return (
    <div
      className={`fixed inset-0 z-[999999] pointer-events-auto bg-[#000000] text-[#F5F5F5] flex flex-col items-center justify-between select-none overflow-hidden transition-all duration-500 cinematic-overlay ${
        (transitionMode === 'INTRO_7S' && seconds >= 6.3) ||
        (transitionMode === 'NAV_4S' && seconds >= 3.4)
          ? 'animate-shutter-reveal pointer-events-none'
          : 'opacity-100'
      }`}
    >
      {/* Background Interactive Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Futuristic Blueprint Reticle Grid & Noise Overlay */}
      <div className="absolute inset-0 reticle-grid opacity-20 pointer-events-none z-1" />
      <div className="noise-overlay z-2" />
      <div className="laser-scanner z-3" />
      <div className="reticle-center-cross z-2 opacity-40" />

      {/* Ambient Pulsing Nebula Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-radial from-[#A100FF]/25 via-[#7C3AED]/10 to-transparent blur-3xl pointer-events-none animate-pulse-glow z-1" />

      {/* TOP STATUS BAR: Technical Header, Audio Toggle & System Status */}
      <header className="relative z-10 w-full px-6 md:px-12 py-6 flex items-center justify-between border-b border-white/10 text-xs font-mono">
        <div className="flex items-center space-x-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-ping" />
          <span className="text-[#A7A7A7] tracking-widest hidden sm:inline">SYSTEM:</span>
          <span className="text-white font-bold tracking-wider">HHA CREATIVE ARCHITECTURE</span>
          <span className="text-white/20 hidden sm:inline">|</span>
          <span className="text-[#A100FF] tracking-widest hidden md:inline">2026 ACTIVE CORE</span>
        </div>

        <div className="flex items-center space-x-4">
          {/* Audio Mute/Unmute Toggle */}
          <button
            onClick={toggleSound}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-[#A7A7A7] hover:text-white transition-all"
            title={soundMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
          >
            {soundMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#FF4D00]" />
                <span className="text-[10px] tracking-widest">AUDIO OFF</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span className="text-[10px] tracking-widest text-[#00E5FF]">AUDIO ON</span>
              </>
            )}
          </button>

          <div className="font-mono text-xs text-[#00E5FF] bg-[#00E5FF]/10 px-3 py-1 rounded-full border border-[#00E5FF]/20">
            {transitionMode === 'INTRO_7S' ? 'FIRST ENTRY INTRO' : 'PORTAL ROUTING'}
          </div>
        </div>
      </header>

      {/* =========================================================================
          MODE A: FIRST WEBSITE ENTRY — 7 SECOND CINEMATIC SEQUENCE
          ========================================================================= */}
      {transitionMode === 'INTRO_7S' && (
        <main className="relative z-10 my-auto flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl">
          
          {/* 0.0s — 1.0s: Pure Black Screen, Film Grain, Subtle Grid & Coordinates */}
          {seconds < 1.0 && (
            <div className="flex flex-col items-center space-y-4 animate-in fade-in duration-500">
              <div className="font-mono text-xs text-[#6F6F6F] tracking-[0.3em] uppercase">
                // INITIALIZING CREATIVE MATRIX
              </div>
              <div className="flex items-center space-x-3 font-mono text-[11px] text-[#A7A7A7]">
                <Compass className="w-3.5 h-3.5 text-[#A100FF]" />
                <span>COORDINATES: 10.3624° N, 77.9695° E</span>
              </div>
            </div>
          )}

          {/* 1.0s — 2.0s: HHA Vector Geometric Monogram Formation */}
          {seconds >= 1.0 && seconds < 2.0 && (
            <div className="flex flex-col items-center space-y-6 animate-in zoom-in-95 duration-500">
              {/* SVG Animated Stroke Monogram */}
              <div className="relative w-48 h-32 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 300 150" fill="none">
                  {/* Left H */}
                  <path
                    d="M 40 20 L 40 130 M 40 75 L 110 75 M 110 20 L 110 130"
                    stroke="#FFFFFF"
                    strokeWidth="10"
                    strokeLinecap="round"
                    className="animate-stroke-draw"
                  />
                  {/* Center H */}
                  <path
                    d="M 125 35 L 125 115 M 125 75 L 175 75 M 175 35 L 175 115"
                    stroke="#A100FF"
                    strokeWidth="10"
                    strokeLinecap="round"
                    className="animate-stroke-draw"
                  />
                  {/* Right A */}
                  <path
                    d="M 195 130 L 235 20 L 275 130 M 210 95 L 260 95"
                    stroke="#00E5FF"
                    strokeWidth="10"
                    strokeLinecap="round"
                    className="animate-stroke-draw"
                  />
                </svg>
                {/* Geometric Bracket Accents */}
                <div className="absolute -inset-4 border border-white/10 rounded-2xl pointer-events-none" />
              </div>

              <div className="font-mono text-xs text-[#A7A7A7] tracking-[0.4em] uppercase">
                VECTOR STROKES • GEOMETRIC FRAGMENTS
              </div>
            </div>
          )}

          {/* 2.0s — 3.0s: Transform HHA -> HARI HARAN A */}
          {seconds >= 2.0 && seconds < 3.0 && (
            <div className="flex flex-col items-center space-y-4 animate-letter-explode">
              <div className="font-mono text-xs text-[#A100FF] tracking-widest uppercase">
                // CREATIVE IDENTITY
              </div>
              <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-[0.15em] text-white">
                HARI HARAN <span className="text-[#A100FF]">A</span>
              </h1>
              <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent" />
            </div>
          )}

          {/* 3.0s — 4.0s: Transform into GRAPHIC DESIGNER & Reveal Multi-Disciplines */}
          {seconds >= 3.0 && seconds < 4.0 && (
            <div className="flex flex-col items-center space-y-5 animate-in fade-in zoom-in-95 duration-500">
              <div className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F5F5] to-[#A100FF]">
                GRAPHIC DESIGNER
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
                <span className="font-mono text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-[#A100FF]/15 border border-[#A100FF]/30 text-white animate-in slide-in-from-left-4 duration-300">
                  VISUAL DESIGNER
                </span>
                <span className="font-mono text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-[#FF4D00]/15 border border-[#FF4D00]/30 text-white animate-in slide-in-from-bottom-4 duration-400">
                  VIDEO EDITOR
                </span>
                <span className="font-mono text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-[#00E5FF]/15 border border-[#00E5FF]/30 text-white animate-in slide-in-from-right-4 duration-500">
                  CREATIVE TECHNOLOGIST
                </span>
              </div>
            </div>
          )}

          {/* 4.0s — 5.0s: Creative Workflow Pipeline (IDEA -> DESIGN -> EDIT -> MOTION -> EXPERIENCE) */}
          {seconds >= 4.0 && seconds < 5.0 && (
            <div className="flex flex-col items-center space-y-8 animate-in fade-in duration-300 w-full">
              <div className="font-mono text-xs text-[#00E5FF] tracking-widest uppercase flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>// CREATIVE WORKFLOW PIPELINE</span>
              </div>

              {/* Sequential Horizontal Motion Workflow */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 w-full">
                {workflowSteps.map((step, idx) => {
                  const stepStartTime = 4.0 + idx * 0.2;
                  const isActive = seconds >= stepStartTime;
                  return (
                    <React.Fragment key={idx}>
                      <div
                        className={`transition-all duration-300 px-4 py-3 rounded-2xl border flex items-center space-x-2 ${
                          isActive
                            ? 'bg-white/10 border-white/40 scale-105 shadow-xl text-white'
                            : 'bg-white/5 border-white/10 opacity-30 text-[#6F6F6F] scale-95'
                        }`}
                        style={{
                          borderColor: isActive ? step.color : undefined,
                          boxShadow: isActive ? `0 0 20px ${step.color}40` : undefined,
                        }}
                      >
                        <span className="font-mono text-[10px]" style={{ color: step.color }}>
                          0{idx + 1}
                        </span>
                        <span className="font-display font-bold text-sm sm:text-base tracking-wider">
                          {step.title}
                        </span>
                      </div>

                      {idx < workflowSteps.length - 1 && (
                        <ArrowRight
                          className={`w-4 h-4 transition-opacity duration-300 hidden sm:inline ${
                            isActive ? 'text-white opacity-80' : 'text-[#6F6F6F] opacity-20'
                          }`}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          )}

          {/* 5.0s — 6.0s: System Loader & Animated Progress 00% -> 100% */}
          {seconds >= 5.0 && seconds < 6.0 && (
            <div className="flex flex-col items-center space-y-6 animate-in fade-in zoom-in-95 duration-400 w-full max-w-md">
              <div className="font-mono text-xs text-[#A7A7A7] tracking-[0.25em] uppercase flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                <span>LOADING CREATIVE SYSTEM...</span>
              </div>

              {/* High Precision Progress Bar */}
              <div className="w-full space-y-2">
                <div className="w-full h-3 bg-white/10 rounded-full p-0.5 border border-white/15 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#A100FF] via-[#00E5FF] to-[#FF4D00] transition-all duration-75 shadow-lg shadow-purple-500/50"
                    style={{ width: `${displayProgress}%` }}
                  />
                </div>
                
                <div className="flex justify-between items-center font-mono text-xs text-[#A7A7A7]">
                  <span>00%</span>
                  <span className="text-xl font-bold font-display text-white">{displayProgress}%</span>
                  <span>100%</span>
                </div>
              </div>

              <div className="font-mono text-[10px] text-[#6F6F6F] tracking-[0.2em]">
                BRAND / VISUAL / MOTION / DIGITAL / CODE
              </div>
            </div>
          )}

          {/* 6.0s — 7.0s: Welcome Statement & Cinematic Portal Reveal */}
          {seconds >= 6.0 && (
            <div className="flex flex-col items-center space-y-6 animate-in zoom-in-90 fade-in duration-500">
              <div className="font-mono text-xs text-[#00E5FF] tracking-[0.3em] uppercase">
                // SYSTEM READY
              </div>
              <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white leading-tight">
                WELCOME TO MY <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A100FF] via-[#E879F9] to-[#00E5FF]">
                  CREATIVE WORLD
                </span>
              </h2>
              <div className="font-mono text-xs text-[#A7A7A7] tracking-widest">
                ENTERING STUDIO PORTFOLIO...
              </div>
            </div>
          )}

        </main>
      )}

      {/* =========================================================================
          MODE B: INTERNAL NAVIGATION / RELOAD — 4 SECOND CINEMATIC SEQUENCE
          ========================================================================= */}
      {transitionMode === 'NAV_4S' && (
        <main className="relative z-10 my-auto flex flex-col items-center justify-center text-center px-6 w-full max-w-4xl">
          
          {/* STEP 1: 0.0s – 1.0s: Current Page Exit & Transition Shutter */}
          {seconds < 1.0 && (
            <div className="flex flex-col items-center space-y-4 animate-curtain-exit">
              <div className="font-mono text-xs text-[#6F6F6F] tracking-[0.3em] uppercase">
                // ROUTING ARCHIVE
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="w-6 h-6 border-2 border-[#A100FF] border-t-transparent rounded-full animate-spin" />
              </div>
            </div>
          )}

          {/* STEP 2: 1.0s – 2.0s: Creative Mark Sequence (HHA -> DESIGN -> CREATE -> MOVE) */}
          {seconds >= 1.0 && seconds < 2.0 && (
            <div className="flex flex-col items-center space-y-6 animate-in fade-in duration-300">
              <div className="font-mono text-xs text-[#A100FF] tracking-widest uppercase">
                // CREATIVE TRANSITION
              </div>

              {/* Kinetic Fast Flip Wordmark */}
              <div className="font-display font-black text-6xl sm:text-8xl tracking-tight text-white chromatic-text">
                {navWords[Math.min(navWords.length - 1, Math.floor((seconds - 1.0) * 4))]}
              </div>

              <div className="flex items-center space-x-2 font-mono text-xs text-[#00E5FF]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SYNCHRONIZING CANVAS ASSETS</span>
              </div>
            </div>
          )}

          {/* STEP 3: 2.0s – 3.0s: Destination Identification HUD Readout */}
          {seconds >= 2.0 && seconds < 3.0 && (
            <div className="flex flex-col items-center space-y-6 animate-in zoom-in-95 duration-400 w-full">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 font-mono text-xs text-[#00E5FF] uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>DESTINATION IDENTIFIED</span>
              </div>

              {/* Dynamic Target Title */}
              <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white uppercase">
                {destination?.title || 'LOADING / PORTFOLIO'}
              </h2>

              {/* Category / Context Sub-text */}
              <p className="font-mono text-xs sm:text-sm text-[#A7A7A7] max-w-lg">
                {destination?.category || 'INTERACTIVE CREATIVE ENVIRONMENT'}
              </p>

              {/* Mini Synchronized Gauge */}
              <div className="w-64 space-y-1.5 pt-2">
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#A100FF] to-[#00E5FF] transition-all duration-75"
                    style={{ width: `${displayProgress}%` }}
                  />
                </div>
                <div className="flex justify-between font-mono text-[10px] text-[#6F6F6F]">
                  <span>BUFFERING</span>
                  <span>{displayProgress}%</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: 3.0s – 4.0s: Destination Reveal Curtain */}
          {seconds >= 3.0 && (
            <div className="flex flex-col items-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="font-mono text-xs text-[#00E5FF] tracking-widest uppercase">
                // UNVEILING DESTINATION
              </div>
              <div className="font-display font-bold text-3xl sm:text-5xl text-white">
                READY
              </div>
            </div>
          )}

        </main>
      )}

      {/* BOTTOM TECHNICAL BAR: Progress & Instant Skip Button */}
      <footer className="relative z-10 w-full px-6 md:px-12 py-6 flex items-center justify-between border-t border-white/10 text-xs font-mono text-[#6F6F6F]">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-[#A7A7A7]">TIMELINE:</span>
            <span className="text-white font-bold">{seconds.toFixed(2)}s</span>
            <span className="text-[#6F6F6F]">/ {transitionMode === 'INTRO_7S' ? '7.00s' : '4.00s'}</span>
          </div>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline text-[#00E5FF]">60 FPS WEBAUDIO SYNC</span>
        </div>

        {/* Skip Button for Instant Navigation Exploration */}
        <button
          onClick={skipTransition}
          className="font-mono text-xs text-white/50 hover:text-white transition-all uppercase tracking-widest px-4 py-2 border border-white/15 rounded-full hover:border-white/50 hover:bg-white/10 flex items-center space-x-2"
        >
          <span>SKIP [{transitionMode === 'INTRO_7S' ? 'INTRO' : 'TRANSITION'}]</span>
          <span className="text-[10px] text-[#00E5FF] bg-white/10 px-1.5 py-0.5 rounded">ESC</span>
        </button>
      </footer>
    </div>
  );
};
