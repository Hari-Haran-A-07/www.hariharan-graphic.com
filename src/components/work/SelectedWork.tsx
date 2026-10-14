import React, { useState, useMemo } from 'react';
import { Sparkles, Grid, FolderLock, ArrowUpRight, Search, Radio, GitBranch, X } from 'lucide-react';
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
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'LIVE_DEMO'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const { navigateWithTransition } = useTransitionRouter();

  const categories: (ProjectCategory | 'LIVE_DEMO')[] = [
    'ALL',
    'LIVE_DEMO',
    'WEB',
    'BRANDING',
    'SOCIAL MEDIA',
    'UI/UX',
    'MOTION',
    'AI CREATIVE',
    'EXPERIMENTAL',
  ];

  const liveDemosCount = useMemo(() => projects.filter(p => !!p.liveDemoUrl).length, [projects]);
  const githubReposCount = useMemo(() => projects.filter(p => !!p.githubUrl).length, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      // Category filter
      if (selectedCategory === 'LIVE_DEMO') {
        if (!p.liveDemoUrl) return false;
      } else if (selectedCategory !== 'ALL' && p.category !== selectedCategory) {
        return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(query);
        const matchesSubtitle = p.subtitle.toLowerCase().includes(query);
        const matchesTools = p.tools.some(t => t.toLowerCase().includes(query));
        const matchesCategory = p.category.toLowerCase().includes(query);
        if (!matchesTitle && !matchesSubtitle && !matchesTools && !matchesCategory) {
          return false;
        }
      }

      return true;
    });
  }, [projects, selectedCategory, searchQuery]);

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
              A comprehensive archive of creative brand identities, interactive web applications, food-tech platforms, and live production deployments.
            </p>

            {/* Live Metrics Pills */}
            <div className="flex flex-wrap items-center gap-2 mt-5">
              <span className="font-mono text-xs text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center space-x-1.5 shadow-sm">
                <Radio className="w-3 h-3 animate-pulse text-emerald-400" />
                <span>{liveDemosCount} LIVE PROJECT DEMOS</span>
              </span>
              <a
                href="https://github.com/Hari-Haran-A-07"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#00E5FF] px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 hover:border-cyan-400 transition-colors flex items-center space-x-1.5"
              >
                <GitBranch className="w-3 h-3 text-[#00E5FF]" />
                <span>{githubReposCount}+ GITHUB REPOSITORIES</span>
                <ArrowUpRight className="w-2.5 h-2.5" />
              </a>
              <span className="font-mono text-xs text-purple-300 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30">
                {projects.length} CASE STUDIES
              </span>
            </div>
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

        {/* Dynamic Category Filter & Search Bar */}
        <div className="py-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/5">
          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 lg:pb-0">
            {categories.map((cat, idx) => {
              const isSelected = selectedCategory === cat;
              let label: string = cat;
              if (cat === 'LIVE_DEMO') label = `⚡ LIVE DEMOS (${liveDemosCount})`;
              else if (cat === 'ALL') label = `ALL (${projects.length})`;

              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={`font-mono text-xs px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 flex items-center space-x-1.5 ${
                    isSelected
                      ? cat === 'LIVE_DEMO'
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-400 text-black font-black shadow-lg shadow-emerald-500/25 scale-105'
                        : 'bg-white text-black font-bold shadow-lg shadow-white/10 scale-105'
                      : cat === 'LIVE_DEMO'
                        ? 'bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-400 border border-emerald-500/40'
                        : 'bg-white/5 hover:bg-white/10 text-[#A7A7A7] hover:text-white border border-white/5'
                  }`}
                >
                  {cat === 'LIVE_DEMO' && !isSelected && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
                  <span>{label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] max-w-sm">
            <Search className="w-4 h-4 text-[#A7A7A7] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by keyword, tool, or stack..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2 rounded-full bg-white/5 border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-[#A100FF] focus:bg-white/10 transition-all placeholder:text-[#6F6F6F]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A7A7A7] hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Project Grid or Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="py-24 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-white/5 mx-auto flex items-center justify-center text-[#A7A7A7]">
              <Search className="w-6 h-6 text-[#A100FF]" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">No projects found</h3>
            <p className="font-mono text-xs text-[#A7A7A7]">
              No matches found for "{searchQuery}". Try selecting "ALL" or searching a different term.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs border border-white/20 transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelectProject={handleProjectSelect}
                setCursorState={setCursorState}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
