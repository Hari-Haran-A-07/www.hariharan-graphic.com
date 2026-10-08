import React from 'react';
import { Sparkles, GraduationCap, Compass, Layers, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { profileInfo, verifiedMetrics, educationList } from '@/data/portfolioData';
import { CursorState } from '@/types';

interface AboutSectionProps {
  onOpenResume: () => void;
  setCursorState: (state: CursorState) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume, setCursorState }) => {
  return (
    <section id="about" className="relative py-28 px-6 md:px-12 bg-[#050505] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header & Editorial Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Monogram */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2 font-mono text-xs text-[#A100FF] tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>// CREATIVE BIOGRAPHY</span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white leading-none">
              DESIGNER. <br />
              BUILDER. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A100FF] via-[#00E5FF] to-white">
                VISUAL THINKER.
              </span>
            </h2>

            <div className="p-6 rounded-3xl bg-[#0A0A0A] border border-white/10 space-y-3">
              <div className="font-mono text-xs text-[#00E5FF] uppercase">// CORE PHILOSOPHY</div>
              <p className="font-sans text-xs text-[#A7A7A7] leading-relaxed">
                "Where visual artistry meets computational logic — crafting brand assets, cinematic video cuts, and digital interfaces that drive measurable growth."
              </p>
              <div className="font-mono text-[10px] text-[#6F6F6F]">
                HARI HARAN A • DINDIGUL, TAMIL NADU, INDIA
              </div>
            </div>
          </div>

          {/* Right Column: In-depth Story & Disciplines */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 font-sans text-base sm:text-lg text-[#A7A7A7] leading-relaxed font-normal">
              <p>
                <strong className="text-white font-semibold">Hari Haran A</strong> is a creative, detail-oriented and versatile Junior Graphic Designer & Video Editor with an academic foundation in <span className="text-white font-medium">Computer Science and Business Systems (CGPA 8.6/10)</span> from SSM Institute of Engineering and Technology.
              </p>
              <p>
                Bridging the intersection of <span className="text-[#A100FF] font-semibold">DESIGN × MOTION × TECHNOLOGY</span>, Hari constructs complete visual systems: from precision vector logos and 32-page brand identity manuals, to high-converting social media carousel architectures, short-form motion reels, and accessible UI/UX prototypes.
              </p>
            </div>

            {/* Disciplines Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              {[
                { title: 'Graphic Design', sub: 'Typography & Layout' },
                { title: 'Brand Guidelines', sub: 'Vector & Print CMYK' },
                { title: 'Social Carousels', sub: 'Instagram & LinkedIn' },
                { title: 'Short-Form Video', sub: 'Premiere & CapCut' },
                { title: 'UI/UX Prototyping', sub: 'Figma Design Tokens' },
                { title: 'Creative AI', sub: 'Firefly, Runway & Kling' },
              ].map((disc, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="font-display font-bold text-sm text-white">{disc.title}</div>
                  <div className="font-mono text-[10px] text-[#00E5FF]">{disc.sub}</div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenResume}
                onMouseEnter={() => setCursorState('OPEN')}
                onMouseLeave={() => setCursorState('NORMAL')}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white text-black font-display font-bold text-xs hover:bg-[#A100FF] hover:text-white transition-all shadow-xl"
              >
                <span>READ COMPLETE EXECUTIVE RESUME</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Verified Visual Statistics Grid (Resume-Supported Only) */}
        <div className="space-y-6 pt-16 border-t border-white/10">
          <div className="font-mono text-xs text-[#10B981] tracking-widest uppercase flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>// VERIFIED RESUME PROOF POINTS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {verifiedMetrics.map(m => (
              <div
                key={m.id}
                className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/10 space-y-4 hover:border-white/25 transition-all"
              >
                <div className="font-display font-black text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E879F9] to-[#A100FF]">
                  {m.value}
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-white">{m.label}</h4>
                  <p className="font-sans text-xs text-[#A7A7A7] mt-1">{m.sublabel}</p>
                </div>
                <div className="font-mono text-[10px] text-[#00E5FF] pt-2 border-t border-white/5">
                  PROVEN AT: {m.verifiedSource}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Foundation Timeline */}
        <div className="space-y-6 pt-16 border-t border-white/10">
          <div className="font-mono text-xs text-[#A100FF] tracking-widest uppercase flex items-center space-x-2">
            <GraduationCap className="w-4 h-4" />
            <span>// ACADEMIC EDUCATION</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationList.map(edu => (
              <div key={edu.id} className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/10 space-y-4">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#00E5FF]">{edu.period}</span>
                  <span className="px-3 py-1 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                    {edu.scoreLabel}: {edu.score}
                  </span>
                </div>

                <div>
                  <h4 className="font-display font-bold text-xl text-white">{edu.institution}</h4>
                  <p className="font-mono text-xs text-[#A7A7A7] mt-0.5">{edu.degree} — {edu.field}</p>
                </div>

                <ul className="space-y-2 font-sans text-xs text-[#A7A7A7]">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-[#A100FF]">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
