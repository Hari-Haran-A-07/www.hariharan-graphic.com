import React, { useState } from 'react';
import { Sparkles, Grid, FolderLock, ArrowUpRight } from 'lucide-react';
import { ProjectItem, ProjectCategory, CursorState } from '@/types';
import { ProjectCard } from './ProjectCard';
import { useTransitionRouter } from '@/context/TransitionContext';

interface SelectedWorkProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  onNavigateVault: () => void;
  setCursorState: (state: CursorState) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({
  projects,
  onSelectProject,
  onNavigateVault,
  setCursorState,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('ALL');
  const { navigateWithTransition } = useTransitionRouter();

  const categories: ProjectCategory[] = [
    'ALL',
    'BRANDING',
    'SOCIAL MEDIA',
    'UI/UX',
    'WEB',
    'MOTION',
    'AI CREATIVE',
    'EXPERIMENTAL',
  ];

  const filteredProjects =
    selectedCategory === 'ALL'
      ? projects
      : projects.filter(p => p.category === selectedCategory);

  const handleProjectSelect = (project: ProjectItem) => {
    navigateWithTransition({
      title: `LOADING / ${project.title}`,
      category: `${project.category} • ${project.number} CASE STUDY`,
      action: () => onSelectProject(project),
    });
  };

  return (
    <section id="work" className="relative py-28 px-6 md:px-12 bg-[#000000]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2 font-mono text-xs text-[#A100FF] tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>// VISUAL ARCHIVE</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white">
              SELECTED WORK
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#A7A7A7] mt-2 max-w-xl">
              A visual archive of identities, campaigns, interfaces, motion and experiments.
            </p>
          </div>

          {/* Quick Access to Creative Vault */}
          <button
            onClick={() =>
              navigateWithTransition({
                title: 'LOADING / CREATIVE VAULT',
                category: 'CANVA & GOOGLE DRIVE ASSET ARCHIVE',
                action: onNavigateVault,
              })
            }
            onMouseEnter={() => setCursorState('EXPLORE')}
            onMouseLeave={() => setCursorState('NORMAL')}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 text-white font-mono text-xs transition-all self-start md:self-auto"
          >
            <FolderLock className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>OPEN COMPLETE CREATIVE VAULT (12+ ASSETS)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Dynamic Category Filter Bar */}
        <div className="py-8 flex items-center justify-between overflow-x-auto gap-3">
          <div className="flex items-center space-x-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono text-xs px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-white text-black font-bold shadow-lg shadow-white/10 scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-[#A7A7A7] hover:text-white border border-white/5'
                }`}
              >
                {cat}
                {cat === 'ALL' && ` (${projects.length})`}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-2 font-mono text-xs text-[#6F6F6F]">
            <Grid className="w-4 h-4" />
            <span>MASONRY GRID</span>
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={handleProjectSelect}
              setCursorState={setCursorState}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
