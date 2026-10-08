import React, { useState, useEffect } from 'react';
import { ArrowRight, Layers, Sparkles } from 'lucide-react';
import { CursorState } from '@/types';

interface KineticIdentityProps {
  setCursorState: (state: CursorState) => void;
}

export const KineticIdentity: React.FC<KineticIdentityProps> = ({ setCursorState }) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: "BRAND", desc: "Strategic Identity & Visual Positioning", color: "#A100FF" },
    { label: "STORY", desc: "Narrative Arc, Tone & Copywriting", color: "#C084FC" },
    { label: "DESIGN", desc: "Visual Hierarchy, Typography & Layout", color: "#00E5FF" },
    { label: "MOTION", desc: "Rhythm, Transitions & Audio Synchronization", color: "#FF4D00" },
    { label: "EXPERIENCE", desc: "Interactive Prototyping & Engagement", color: "#10B981" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section className="relative py-28 px-6 md:px-12 bg-[#050505] border-y border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Sub-header */}
        <div className="flex items-center space-x-2 font-mono text-xs text-[#A100FF] tracking-widest uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>// CREATIVE IDENTITY STATEMENT</span>
        </div>

        {/* Master Statement */}
        <div className="space-y-2">
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#6F6F6F]">
            I DON'T JUST MAKE GRAPHICS.
          </h2>
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white">
            I BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A100FF] via-[#00E5FF] to-white">VISUAL SYSTEMS.</span>
          </h2>
        </div>

        {/* Sequential Word Reveal Framework */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="font-mono text-xs text-[#A7A7A7] tracking-widest uppercase mb-8">
            // THE 5-PILLAR METHODOLOGY
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => {
                    setActiveStep(idx);
                    setCursorState('EXPLORE');
                  }}
                  onMouseLeave={() => setCursorState('NORMAL')}
                  className={`p-6 rounded-2xl transition-all duration-500 cursor-pointer border ${
                    isActive
                      ? 'bg-white/10 border-white/30 shadow-2xl scale-105'
                      : 'bg-white/5 border-white/5 opacity-60 hover:opacity-90'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#6F6F6F]">0{idx + 1}</span>
                    {idx < steps.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-[#6F6F6F] hidden md:block" />
                    )}
                  </div>

                  <div
                    className="font-display font-black text-2xl md:text-3xl tracking-tight mt-4 transition-colors"
                    style={{ color: isActive ? step.color : '#FFFFFF' }}
                  >
                    {step.label}
                  </div>

                  <p className="font-sans text-xs text-[#A7A7A7] mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
