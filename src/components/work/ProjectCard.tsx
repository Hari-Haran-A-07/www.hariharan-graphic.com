import React from 'react';
import { ArrowUpRight, Globe, Layers, Eye, FolderLock, ExternalLink, Sparkles, GitBranch, Radio } from 'lucide-react';
import { ProjectItem, CursorState } from '@/types';
import { ProjectArtworkRenderer } from './ProjectArtworkRenderer';

interface ProjectCardProps {
  project: ProjectItem;
  onSelectProject: (project: ProjectItem) => void;
  setCursorState: (state: CursorState) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelectProject,
  setCursorState,
}) => {
  const getLayoutClasses = () => {
    switch (project.layoutStyle) {
      case 'full-width':
        return 'md:col-span-2 lg:col-span-3 min-h-[460px]';
      case 'split-screen':
        return 'md:col-span-2 min-h-[420px]';
      case 'magazine':
        return 'md:col-span-2 lg:col-span-2 min-h-[420px]';
      case 'landscape':
        return 'md:col-span-2 min-h-[380px]';
      case 'portrait':
      default:
        return 'col-span-1 min-h-[420px]';
    }
  };

  return (
    <div
      onClick={() => onSelectProject(project)}
      onMouseEnter={() => setCursorState('VIEW')}
      onMouseLeave={() => setCursorState('NORMAL')}
      className={`group relative rounded-3xl bg-[#0A0A0A] border border-white/10 hover:border-white/25 overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col justify-between cursor-pointer ${getLayoutClasses()}`}
    >
      {/* Background Subtle Gradient Aura on Hover */}
      <div
        className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${project.accentColor || '#A100FF'}25 0%, transparent 70%)`,
        }}
      />

      {/* Visual Artwork Showcase Area */}
      <div className="relative w-full flex-1 overflow-hidden bg-[#0F0F0F] rounded-t-3xl border-b border-white/10 group-hover:scale-[1.01] transition-transform duration-500">
        <ProjectArtworkRenderer project={project} />

        {/* Floating Category & Number Pills */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs text-white px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15">
              {project.number}
            </span>
            <span className="font-mono text-[10px] text-[#A100FF] px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-purple-500/30 uppercase">
              {project.category}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {project.liveDemoUrl && (
              <span className="font-mono text-[10px] text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-950/90 backdrop-blur-md border border-emerald-500/40 flex items-center space-x-1.5 shadow-lg shadow-emerald-950/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>LIVE DEMO</span>
              </span>
            )}
            {project.badge && (
              <span className="font-mono text-[10px] text-[#00E5FF] px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-cyan-500/30">
                {project.badge}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Content & Metadata Bottom Bar */}
      <div className="p-6 md:p-8 bg-[#0D0D0D] flex flex-col justify-between gap-6 z-10">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-display font-black text-xl md:text-2xl text-white group-hover:text-[#A100FF] transition-colors leading-tight">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-[#6F6F6F]">{project.year}</span>
          </div>

          <p className="font-mono text-xs text-[#00E5FF] mt-1">
            {project.subtitle}
          </p>

          <p className="font-sans text-xs text-[#A7A7A7] mt-3 leading-relaxed line-clamp-2">
            {project.summary}
          </p>
        </div>

        {/* Tools & Interactive Quick Links */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Tools Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tools.slice(0, 4).map((tool, idx) => (
              <span
                key={idx}
                className="font-mono text-[10px] text-[#A7A7A7] px-2 py-0.5 rounded bg-white/5 border border-white/10"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                title="Launch Live Demo Website"
                className="px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-black font-display font-black text-xs transition-all flex items-center space-x-1.5 shadow-lg shadow-emerald-500/25 hover:scale-105 active:scale-95"
              >
                <Radio className="w-3 h-3 text-black animate-pulse" />
                <span>LIVE DEMO</span>
                <ArrowUpRight className="w-3 h-3 text-black stroke-[3]" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                title="View Source on GitHub"
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-mono text-[11px] transition-all flex items-center space-x-1.5 hover:scale-105"
              >
                <GitBranch className="w-3 h-3 text-[#A100FF]" />
                <span>GITHUB</span>
              </a>
            )}

            {project.canvaUrl && (
              <a
                href={project.canvaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                title="View on Canva"
                className="px-2.5 py-1 rounded-full bg-[#00C4CC]/10 text-[#00C4CC] border border-[#00C4CC]/20 font-mono text-[10px] hover:bg-[#00C4CC]/20 transition-colors flex items-center space-x-1"
              >
                <span>CANVA</span>
                <ArrowUpRight className="w-2.5 h-2.5" />
              </a>
            )}

            {project.driveUrl && (
              <a
                href={project.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                title="View on Google Drive"
                className="px-2.5 py-1 rounded-full bg-[#FF4D00]/10 text-[#FFB088] border border-[#FF4D00]/20 font-mono text-[10px] hover:bg-[#FF4D00]/20 transition-colors flex items-center space-x-1"
              >
                <span>DRIVE</span>
                <ArrowUpRight className="w-2.5 h-2.5" />
              </a>
            )}

            <button
              onClick={() => onSelectProject(project)}
              className="flex items-center space-x-1.5 bg-white/10 group-hover:bg-white/20 text-white font-mono text-xs px-3.5 py-1.5 rounded-full border border-white/15 transition-all hover:scale-105"
            >
              <span>CASE STUDY</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
