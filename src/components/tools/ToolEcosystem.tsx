import React, { useState } from 'react';
import { Sparkles, Layers, Box, Cpu, Video, Code, Palette, CheckCircle2 } from 'lucide-react';
import { toolEcosystem } from '@/data/toolData';
import { ToolItem, CursorState } from '@/types';

interface ToolEcosystemProps {
  setCursorState: (state: CursorState) => void;
}

export const ToolEcosystem: React.FC<ToolEcosystemProps> = ({ setCursorState }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'DESIGN', 'VIDEO & MOTION', 'AI & GENERATIVE', 'DEVELOPMENT'];

  const filteredTools =
    activeCategory === 'ALL'
      ? toolEcosystem
      : toolEcosystem.filter(t => t.category === activeCategory);

  return (
    <section id="expertise" className="relative py-28 px-6 md:px-12 bg-[#050505] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2 font-mono text-xs text-[#A100FF] tracking-widest uppercase mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>// CREATIVE & TECHNICAL STACK</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white">
              TOOL ECOSYSTEM
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#A7A7A7] mt-2 max-w-xl">
              An integrated visual production pipeline spanning vector branding, cinematic video editing, generative AI, and modern web engineering.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-white text-black font-bold shadow-md scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-[#A7A7A7] hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Tool Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTools.map(tool => (
            <div
              key={tool.id}
              onMouseEnter={() => setCursorState('EXPLORE')}
              onMouseLeave={() => setCursorState('NORMAL')}
              className="p-6 rounded-3xl bg-[#0A0A0A] border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-display font-black text-lg text-white border border-white/10 group-hover:scale-110 transition-transform shadow-lg"
                    style={{ backgroundColor: `${tool.accent}20`, borderColor: tool.accent }}
                  >
                    <span style={{ color: tool.accent }}>
                      {tool.name.charAt(0)}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] text-[#A7A7A7] px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                    {tool.badge}
                  </span>
                </div>

                <div>
                  <h4 className="font-display font-bold text-lg text-white group-hover:text-[#A100FF] transition-colors">
                    {tool.name}
                  </h4>
                  <div className="font-mono text-xs text-[#00E5FF] mt-0.5">
                    {tool.role}
                  </div>
                </div>

                <p className="font-sans text-xs text-[#A7A7A7] leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10 font-mono text-[10px] text-[#6F6F6F]">
                <span>{tool.category}</span>
                <span className="text-[#10B981] flex items-center space-x-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>PRODUCTION READY</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
