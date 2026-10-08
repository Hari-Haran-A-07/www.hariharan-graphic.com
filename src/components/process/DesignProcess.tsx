import React, { useState } from 'react';
import { Sparkles, ArrowDown, CheckCircle2, Layers } from 'lucide-react';
import { CursorState } from '@/types';

interface DesignProcessProps {
  setCursorState: (state: CursorState) => void;
}

export const DesignProcess: React.FC<DesignProcessProps> = ({ setCursorState }) => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    { name: "DISCOVER", action: "Client Vision & Market Brief", deliverables: "Stakeholder interviews, brand positioning goals" },
    { name: "DEFINE", action: "Problem Scope & Target Persona", deliverables: "Visual scope, timeline roadmap, audience parameters" },
    { name: "RESEARCH", action: "Visual Audit & Competitive Moodboards", deliverables: "Aesthetic benchmarks, color landscape analysis" },
    { name: "CONCEPT", action: "Identity Sketches & Wireframes", deliverables: "Low-fi sketches, typographic pairings, structural hierarchy" },
    { name: "DESIGN", action: "Vector Geometry & High-Fidelity Mockups", deliverables: "Figma UI tokens, Illustrator master vectors, Canva kits" },
    { name: "ITERATE", action: "Client Review & Feedback Tuning", deliverables: "Micro-adjustments, accessibility contrast checks" },
    { name: "DELIVER", action: "Multi-Format Export & Launch Kits", deliverables: "CMYK print-ready files, 9:16 reels, Web assets" },
    { name: "MEASURE", action: "Engagement Analytics & Post-Launch QA", deliverables: "Click-through validation, user engagement uplift" },
  ];

  return (
    <section className="relative py-28 px-6 md:px-12 bg-[#050505] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2 font-mono text-xs text-[#00E5FF] tracking-widest uppercase mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>// PRODUCTION PIPELINE</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white">
              DESIGN PROCESS
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#A7A7A7] mt-2 max-w-xl">
              An 8-stage rigorous methodology transforming raw ideas into high-converting visual systems.
            </p>
          </div>

          <div className="font-mono text-xs text-[#10B981] flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>STANDARDIZED STUDIO WORKFLOW</span>
          </div>
        </div>

        {/* 8-Stage Interactive Roadmap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stages.map((stage, idx) => {
            const isActive = activeStage === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStage(idx)}
                onMouseEnter={() => setCursorState('EXPLORE')}
                onMouseLeave={() => setCursorState('NORMAL')}
                className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[220px] ${
                  isActive
                    ? 'bg-white/15 border-white/40 shadow-2xl scale-105'
                    : 'bg-white/5 border-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#A100FF] font-bold">STAGE 0{idx + 1}</span>
                  {idx < stages.length - 1 && (
                    <ArrowDown className="w-3.5 h-3.5 text-[#6F6F6F] rotate-[-45deg]" />
                  )}
                </div>

                <div>
                  <h4 className="font-display font-black text-xl md:text-2xl text-white tracking-tight mt-4">
                    {stage.name}
                  </h4>
                  <p className="font-sans font-medium text-xs text-[#00E5FF] mt-1">
                    {stage.action}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 font-sans text-[11px] text-[#A7A7A7]">
                  {stage.deliverables}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
