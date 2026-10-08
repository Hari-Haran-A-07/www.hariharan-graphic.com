import React from 'react';
import { ArrowUpRight, Globe, Layers, Eye, FolderLock, ExternalLink, Sparkles } from 'lucide-react';
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

          {project.badge && (
            <span className="font-mono text-[10px] text-[#00E5FF] px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-cyan-500/30">
              {project.badge}
            </span>
          )}
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
          <div className="flex items-center space-x-2 shrink-0">
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
              className="flex items-center space-x-1.5 bg-white/10 group-hover:bg-white/20 text-white font-mono text-xs px-3.5 py-1.5 rounded-full border border-white/15 transition-all"
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
