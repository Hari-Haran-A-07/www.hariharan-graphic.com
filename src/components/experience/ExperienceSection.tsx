import React from 'react';
import { Briefcase, Calendar, MapPin, Award, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { experienceTimeline } from '@/data/portfolioData';
import { CursorState } from '@/types';

interface ExperienceSectionProps {
  onViewCertificate: (url: string) => void;
  setCursorState: (state: CursorState) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  onViewCertificate,
  setCursorState,
}) => {
  return (
    <section id="experience" className="relative py-28 px-6 md:px-12 bg-[#000000] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2 font-mono text-xs text-[#A100FF] tracking-widest uppercase mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>// CAREER TRAJECTORY</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white">
              EXPERIENCE
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#A7A7A7] mt-2 max-w-xl">
              Verified professional roles driving visual design, digital marketing campaigns, and frontend engineering.
            </p>
          </div>

          <div className="font-mono text-xs text-[#10B981] flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>AUTHORITATIVE RESUME SOURCE</span>
          </div>
        </div>

        {/* Animated Timeline Cards */}
        <div className="space-y-8 relative">
          
          {/* Vertical Indicator Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#A100FF] via-[#00E5FF] to-white/10 pointer-events-none" />

          {experienceTimeline.map((item, idx) => (
            <div
              key={item.id}
              onMouseEnter={() => setCursorState('EXPLORE')}
              onMouseLeave={() => setCursorState('NORMAL')}
              className="relative md:pl-20 group"
            >
              {/* Timeline Bullet Node */}
              <div className="hidden md:flex absolute left-5 top-8 -translate-x-1/2 w-7 h-7 rounded-full bg-[#0A0A0A] border-2 border-[#A100FF] items-center justify-center group-hover:scale-125 transition-transform z-10">
                <div className="w-2 h-2 rounded-full bg-[#00E5FF]" />
              </div>

              {/* Content Card */}
              <div className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/10 hover:border-white/25 transition-all duration-300 hover:shadow-2xl space-y-6">
                
                {/* Role & Company Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-mono text-xs text-[#A100FF] font-semibold uppercase">
                        {item.role}
                      </span>
                      {item.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] font-mono text-[10px] border border-[#10B981]/30">
                          CURRENT ROLE
                        </span>
                      )}
                    </div>
                    <h3 className="font-display font-black text-2xl md:text-3xl text-white">
                      {item.company}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#A7A7A7]">
                    <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <Calendar className="w-3.5 h-3.5 text-[#00E5FF]" />
                      <span>{item.period}</span>
                    </span>
                    <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-[#FF4D00]" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Verified Metric Proof Banner */}
                {item.metricProof && (
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 font-mono text-xs text-[#00E5FF] flex items-center space-x-2">
                    <span className="font-bold text-[#A100FF]">KEY IMPACT:</span>
                    <span>{item.metricProof}</span>
                  </div>
                )}

                {/* Responsibilities & Highlights */}
                <ul className="space-y-3 font-sans text-sm text-[#A7A7A7]">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start space-x-3">
                      <span className="text-[#A100FF] shrink-0 mt-1 font-bold">•</span>
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies / Tools & Verified Certificate */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[10px] text-white px-2.5 py-1 rounded bg-white/5 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {item.certificateUrl && (
                    <button
                      onClick={() => onViewCertificate(item.certificateUrl!)}
                      className="font-mono text-xs text-[#00E5FF] hover:underline flex items-center space-x-1.5 shrink-0"
                    >
                      <Award className="w-4 h-4" />
                      <span>View Verified Credential ↗</span>
                    </button>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
