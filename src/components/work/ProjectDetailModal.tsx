import React, { useEffect, useState } from 'react';
import {
  X, ArrowRight, ArrowLeft, ArrowUpRight, Copy, Check,
  Layers, Palette, Type, CheckCircle2
} from 'lucide-react';
import { ProjectItem, CursorState } from '@/types';
import { ProjectArtworkRenderer } from './ProjectArtworkRenderer';
import { useTransitionRouter } from '@/context/TransitionContext';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  allProjects: ProjectItem[];
  onClose: () => void;
  onSelectNextProject: (nextProject: ProjectItem) => void;
  setCursorState: (state: CursorState) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  allProjects,
  onClose,
  onSelectNextProject,
  setCursorState: _setCursorState,
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const { navigateWithTransition } = useTransitionRouter();

  const currentIndex = project ? allProjects.findIndex(p => p.id === project.id) : 0;
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  const handleNext = () => {
    if (!nextProject) return;
    navigateWithTransition({
      title: `LOADING / ${nextProject.title}`,
      category: `${nextProject.category} • ${nextProject.number} CASE STUDY`,
      action: () => onSelectNextProject(nextProject),
    });
  };

  const handlePrev = () => {
    if (!prevProject) return;
    navigateWithTransition({
      title: `LOADING / ${prevProject.title}`,
      category: `${prevProject.category} • ${prevProject.number} CASE STUDY`,
      action: () => onSelectNextProject(prevProject),
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, handleNext, handlePrev]);

  if (!project) return null;

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-2xl flex flex-col justify-start animate-in fade-in duration-300">
      
      {/* Sticky Case Study Top Bar */}
      <div className="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10 px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onClose}
            className="flex items-center space-x-2 font-mono text-xs text-[#A7A7A7] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ARCHIVE [ESC]</span>
          </button>
          <span className="hidden sm:inline text-white/20">|</span>
          <span className="hidden sm:inline font-mono text-xs text-[#00E5FF]">
            {project.number} / {project.category}
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center space-x-2 font-mono text-xs text-[#A7A7A7]">
            <button
              onClick={handlePrev}
              className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 hover:text-white"
            >
              ← PREV
            </button>
            <button
              onClick={handleNext}
              className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 hover:text-white"
            >
              NEXT →
            </button>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Case Study Article Body */}
      <article className="max-w-6xl mx-auto w-full px-6 md:px-12 py-16 space-y-24">
        
        {/* 01 — COVER HERO */}
        <section className="space-y-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs text-white px-3.5 py-1 rounded-full bg-white/10 border border-white/20">
              {project.number}
            </span>
            <span className="font-mono text-xs text-[#A100FF] px-3.5 py-1 rounded-full bg-[#A100FF]/10 border border-[#A100FF]/30 uppercase font-semibold">
              {project.category}
            </span>
            <span className="font-mono text-xs text-[#A7A7A7] px-3 py-1 rounded-full bg-white/5 border border-white/10">
              YEAR {project.year}
            </span>
            {project.client && (
              <span className="font-mono text-xs text-[#00E5FF] px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30">
                CLIENT: {project.client}
              </span>
            )}
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-none">
            {project.title}
          </h1>

          <p className="font-mono text-base md:text-xl text-[#00E5FF]">
            {project.subtitle}
          </p>

          {/* Large Visual Cover Stage */}
          <div className="w-full rounded-3xl overflow-hidden border border-white/15 bg-[#0D0D0D] shadow-2xl min-h-[380px]">
            <ProjectArtworkRenderer project={project} />
          </div>
        </section>

        {/* 02 — PROJECT OVERVIEW & 03 — CREATIVE PROBLEM */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
          <div className="space-y-4">
            <div className="font-mono text-xs text-[#A100FF] tracking-widest uppercase">
              // 02 — PROJECT OVERVIEW
            </div>
            <h3 className="font-display font-bold text-2xl text-white">Strategic Summary</h3>
            <p className="font-sans text-sm md:text-base text-[#A7A7A7] leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div className="space-y-4">
            <div className="font-mono text-xs text-[#FF4D00] tracking-widest uppercase">
              // 03 — THE CREATIVE PROBLEM
            </div>
            <h3 className="font-display font-bold text-2xl text-white">The Design Challenge</h3>
            <p className="font-sans text-sm md:text-base text-[#A7A7A7] leading-relaxed">
              {project.problem}
            </p>
          </div>
        </section>

        {/* 04 — CONCEPT & 05 — VISUAL DIRECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
          {project.concept && (
            <div className="space-y-4">
              <div className="font-mono text-xs text-[#00E5FF] tracking-widest uppercase">
                // 04 — CREATIVE CONCEPT
              </div>
              <h3 className="font-display font-bold text-2xl text-white">Concept & Narrative</h3>
              <p className="font-sans text-sm md:text-base text-[#A7A7A7] leading-relaxed">
                {project.concept}
              </p>
            </div>
          )}

          {project.visualDirection && (
            <div className="space-y-4">
              <div className="font-mono text-xs text-[#10B981] tracking-widest uppercase">
                // 05 — VISUAL DIRECTION
              </div>
              <h3 className="font-display font-bold text-2xl text-white">Aesthetic Language</h3>
              <p className="font-sans text-sm md:text-base text-[#A7A7A7] leading-relaxed">
                {project.visualDirection}
              </p>
            </div>
          )}
        </section>

        {/* 06 — TYPOGRAPHY SYSTEM */}
        {project.typography && project.typography.length > 0 && (
          <section className="space-y-6 pt-12 border-t border-white/10">
            <div className="font-mono text-xs text-[#A100FF] tracking-widest uppercase flex items-center space-x-2">
              <Type className="w-4 h-4" />
              <span>// 06 — TYPOGRAPHY HIERARCHY</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.typography.map((t, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <div className="font-mono text-[10px] text-[#A7A7A7]">{t.usage}</div>
                  <div className="font-display font-bold text-xl text-white">{t.fontFamily}</div>
                  <div className="font-mono text-xs text-[#00E5FF]">{t.weight}</div>
                  <div className="p-3 rounded-xl bg-black/60 border border-white/5 font-sans text-xs text-white/90 italic">
                    "{t.sample}"
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 07 — COLOR SYSTEM */}
        {project.colorSystem && project.colorSystem.length > 0 && (
          <section className="space-y-6 pt-12 border-t border-white/10">
            <div className="font-mono text-xs text-[#FF4D00] tracking-widest uppercase flex items-center space-x-2">
              <Palette className="w-4 h-4" />
              <span>// 07 — COLOR SYSTEM (CLICK HEX TO COPY)</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.colorSystem.map((c, idx) => (
                <button
                  key={idx}
                  onClick={() => copyToClipboard(c.hex)}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 text-left transition-all space-y-3 group"
                >
                  <div
                    className="w-full h-16 rounded-xl border border-white/10 shadow-inner flex items-end justify-end p-2"
                    style={{ backgroundColor: c.hex }}
                  >
                    {copiedHex === c.hex ? (
                      <span className="px-2 py-0.5 rounded bg-black text-white text-[9px] font-mono flex items-center space-x-1">
                        <Check className="w-2.5 h-2.5 text-[#10B981]" />
                        <span>COPIED</span>
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-white/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-white">{c.name}</div>
                    <div className="font-mono text-xs text-[#A7A7A7]">{c.hex}</div>
                    <div className="font-sans text-[11px] text-[#6F6F6F] mt-0.5">{c.role}</div>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* 08 — DESIGN PROCESS */}
        {project.designProcess && project.designProcess.length > 0 && (
          <section className="space-y-8 pt-12 border-t border-white/10">
            <div className="font-mono text-xs text-[#00E5FF] tracking-widest uppercase flex items-center space-x-2">
              <Layers className="w-4 h-4" />
              <span>// 08 — DESIGN PROCESS & DELIVERABLES</span>
            </div>

            <div className="space-y-6">
              {project.designProcess.map((step, idx) => (
                <div key={idx} className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 space-y-3">
                  <h4 className="font-display font-bold text-lg text-white">{step.title}</h4>
                  <p className="font-sans text-sm text-[#A7A7A7]">{step.description}</p>
                  {step.deliverables && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {step.deliverables.map((del, dIdx) => (
                        <span
                          key={dIdx}
                          className="font-mono text-[10px] text-[#00E5FF] px-2.5 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20"
                        >
                          ✓ {del}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 11 — RESULTS & IMPACT METRICS */}
        {project.results && project.results.length > 0 && (
          <section className="space-y-6 pt-12 border-t border-white/10">
            <div className="font-mono text-xs text-[#10B981] tracking-widest uppercase flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>// 11 — VERIFIED RESULTS & CLIENT IMPACT</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.results.map((res, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-[#10B981]/20 space-y-2">
                  <div className="w-8 h-8 rounded-full bg-[#10B981]/10 text-[#10B981] flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <p className="font-sans font-medium text-sm text-white">{res}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 12 — SOURCE / EXTERNAL PROJECT LINKS */}
        <section className="p-8 rounded-3xl bg-gradient-to-br from-purple-950/40 via-[#101010] to-black border border-purple-500/20 space-y-6">
          <div className="font-mono text-xs text-[#A100FF] tracking-widest uppercase">
            // 12 — PROJECT ASSET REPOSITORIES
          </div>

          <h3 className="font-display font-bold text-2xl text-white">
            Access Original Creative Work & Files
          </h3>

          <div className="flex flex-wrap gap-4">
            {project.canvaUrl && (
              <a
                href={project.canvaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#00C4CC] text-black font-display font-bold text-xs hover:scale-105 transition-transform"
              >
                <span>OPEN ON CANVA</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}

            {project.driveUrl && (
              <a
                href={project.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#FF4D00] text-white font-display font-bold text-xs hover:scale-105 transition-transform"
              >
                <span>VIEW ON GOOGLE DRIVE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}

            {project.figmaUrl && (
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs border border-white/20"
              >
                <span>OPEN IN FIGMA</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs border border-white/20"
              >
                <span>GITHUB REPO</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#00E5FF] text-black font-display font-bold text-xs hover:scale-105 transition-transform"
              >
                <span>LIVE WEBSITE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </section>

        {/* 13 — NEXT PROJECT NAVIGATOR */}
        <section className="pt-16 border-t border-white/10">
          <div className="font-mono text-xs text-[#6F6F6F] tracking-widest uppercase mb-4">
            // 13 — UP NEXT
          </div>

          <div
            onClick={handleNext}
            className="p-8 md:p-12 rounded-3xl bg-[#0F0F0F] border border-white/15 hover:border-[#A100FF]/50 transition-all cursor-pointer group flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div>
              <span className="font-mono text-xs text-[#A100FF]">{nextProject.number} / {nextProject.category}</span>
              <h3 className="font-display font-black text-3xl md:text-5xl text-white group-hover:text-[#A100FF] transition-colors mt-2">
                {nextProject.title}
              </h3>
              <p className="font-sans text-sm text-[#A7A7A7] mt-1">{nextProject.subtitle}</p>
            </div>

            <div className="w-14 h-14 rounded-full bg-white/10 group-hover:bg-[#A100FF] text-white flex items-center justify-center transition-all group-hover:scale-110 shrink-0">
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>
        </section>

      </article>

    </div>
  );
};
