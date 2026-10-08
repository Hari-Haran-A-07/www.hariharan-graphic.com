import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
  forceShow?: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete, forceShow = false }) => {
  const [phase, setPhase] = useState<
    'initial' | 'monogram' | 'separated' | 'designer' | 'sublabel' | 'finishing' | 'done'
  >('initial');

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && !forceShow) {
      onComplete();
      return;
    }

    // Check sessionStorage
    const hasSeenIntro = sessionStorage.getItem('hha_intro_viewed_v2');
    if (hasSeenIntro && !forceShow) {
      onComplete();
      return;
    }

    // Sequence timings
    const t0 = setTimeout(() => setPhase('monogram'), 200);
    const t1 = setTimeout(() => setPhase('separated'), 800);
    const t2 = setTimeout(() => setPhase('designer'), 1500);
    const t3 = setTimeout(() => setPhase('sublabel'), 2100);
    const t4 = setTimeout(() => setPhase('finishing'), 2700);
    const t5 = setTimeout(() => {
      setPhase('done');
      sessionStorage.setItem('hha_intro_viewed_v2', 'true');
      onComplete();
    }, 3200);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete, forceShow]);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-[#000000] flex flex-col items-center justify-center overflow-hidden transition-opacity duration-700 ease-in-out scanlines ${
        phase === 'finishing' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background kinetic particles & grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      <div className="noise-overlay" />

      {/* Center glowing chromatic aura */}
      <div className="absolute w-96 h-96 rounded-full bg-radial from-[#A100FF]/20 via-[#7C3AED]/10 to-transparent blur-3xl animate-pulse-glow" />

      {/* Main Kinetic Typography Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        
        {/* Stage 1: HHA Monogram */}
        {phase === 'monogram' && (
          <div className="font-display font-extrabold text-7xl md:text-9xl tracking-tighter text-white animate-in zoom-in-95 duration-500">
            H<span className="text-[#A100FF]">H</span>A
          </div>
        )}

        {/* Stage 2: H A R I   H A R A N */}
        {phase === 'separated' && (
          <div className="font-display font-bold text-4xl md:text-7xl tracking-[0.25em] md:tracking-[0.35em] text-white animate-in fade-in slide-in-from-bottom-3 duration-500">
            H A R I <span className="text-[#A100FF]">H A R A N</span>
          </div>
        )}

        {/* Stage 3: GRAPHIC DESIGNER */}
        {(phase === 'designer' || phase === 'sublabel' || phase === 'finishing') && (
          <div className="flex flex-col items-center space-y-4">
            <div className="font-display font-black text-4xl md:text-8xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5F5F5] to-[#A100FF] animate-in fade-in zoom-in-90 duration-500">
              GRAPHIC DESIGNER
            </div>
            
            <div className="font-mono text-xs md:text-sm tracking-[0.2em] text-[#00E5FF] uppercase">
              VISUAL DESIGNER • UI/UX • VIDEO EDITOR • CREATIVE TECH
            </div>
          </div>
        )}

        {/* Technical Subtext & System Loader */}
        <div className="mt-16 flex flex-col items-center space-y-3">
          <div className="flex items-center space-x-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00E5FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00E5FF]"></span>
            </span>
            <span className="font-mono text-xs text-[#A7A7A7] tracking-widest">
              LOADING CREATIVE SYSTEM...
            </span>
          </div>

          <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#A100FF] via-[#00E5FF] to-[#FF4D00] animate-marquee" style={{ width: '200%' }} />
          </div>

          <div className="font-mono text-[10px] text-[#6F6F6F] tracking-widest pt-2">
            ASSETS / MOTION / BRAND / DIGITAL / CODE
          </div>
        </div>

      </div>

      {/* Skip Button for quick user exploration */}
      <button
        onClick={() => {
          sessionStorage.setItem('hha_intro_viewed_v2', 'true');
          onComplete();
        }}
        className="absolute bottom-8 right-8 font-mono text-xs text-white/40 hover:text-white transition-colors duration-200 uppercase tracking-widest px-3 py-1.5 border border-white/10 rounded-full hover:border-white/40"
      >
        SKIP INTRO [ESC]
      </button>
    </div>
  );
};
