import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { CursorState } from '@/types';

interface DesignPhilosophyProps {
  setCursorState: (state: CursorState) => void;
}

export const DesignPhilosophy: React.FC<DesignPhilosophyProps> = ({ setCursorState }) => {
  const principles = [
    {
      num: "01",
      title: "CLARITY OVER NOISE",
      desc: "Every visual element must have a defined reason to exist. Ruthlessly eliminate superfluous ornamentation to amplify core brand messaging.",
      accent: "#FFFFFF",
    },
    {
      num: "02",
      title: "VISUAL HIERARCHY",
      desc: "Direct user attention instinctively within the first 1.2 seconds through contrast, scale, typographic weight, and focal color balances.",
      accent: "#A100FF",
    },
    {
      num: "03",
      title: "STORY-DRIVEN PACING",
      desc: "Whether a multi-slide carousel or a 15-second motion reel, construct emotional arcs that hook, educate, and provoke decisive action.",
      accent: "#FF4D00",
    },
    {
      num: "04",
      title: "SYSTEM CONSISTENCY",
      desc: "Design scalable brand tokens and atomic UI systems that remain flawless across print CMYK, social aspect ratios, and responsive screens.",
      accent: "#00E5FF",
    },
    {
      num: "05",
      title: "MEASURABLE IMPACT",
      desc: "Beauty without conversion is vanity. Design visual assets engineered to elevate click-through rates, brand prestige, and viewer retention.",
      accent: "#10B981",
    },
  ];

  return (
    <section className="relative py-28 px-6 md:px-12 bg-[#000000] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2 font-mono text-xs text-[#A100FF] tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>// CORE DESIGN ETHOS</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white">
              DESIGN PHILOSOPHY
            </h2>
          </div>

          <p className="font-sans text-sm text-[#A7A7A7] max-w-md">
            Five non-negotiable creative tenets governing every brand identity, campaign, and digital experience I build.
          </p>
        </div>

        {/* 5 Principles Stack */}
        <div className="divide-y divide-white/10">
          {principles.map((p, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setCursorState('EXPLORE')}
              onMouseLeave={() => setCursorState('NORMAL')}
              className="py-10 md:py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6 group hover:bg-white/[0.02] transition-colors px-4 rounded-2xl cursor-pointer"
            >
              <div className="flex items-start md:items-center space-x-6 md:space-x-12">
                <span className="font-mono text-sm md:text-base text-[#6F6F6F] group-hover:text-white transition-colors">
                  {p.num}
                </span>
                <h3
                  className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight transition-transform duration-300 group-hover:translate-x-3"
                  style={{ color: p.accent }}
                >
                  {p.title}
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#A7A7A7] max-w-lg leading-relaxed lg:text-right">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
