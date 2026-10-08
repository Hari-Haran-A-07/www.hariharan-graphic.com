import React, { useState } from 'react';
import {
  Lock, Key, Plus, Edit2, Trash2, Save, X, Sparkles, Download
} from 'lucide-react';
import { ProjectItem, ProjectCategory, CursorState } from '@/types';
import { ApiService } from '@/lib/api';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  projects: ProjectItem[];
  onRefreshProjects: () => void;
  setCursorState: (state: CursorState) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  isOpen,
  onClose,
  projects,
  onRefreshProjects,
  setCursorState,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [authError, setAuthError] = useState('');
  
  // Editing / Creation state
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState<Partial<ProjectItem>>({
    number: `00${projects.length + 1}`,
    title: '',
    subtitle: '',
    category: 'BRANDING',
    year: '2026',
    client: '',
    tools: ['Figma', 'Adobe Illustrator', 'Canva'],
    thumbnail: 'new-project',
    summary: '',
    problem: '',
    concept: '',
    visualDirection: '',
    canvaUrl: '',
    driveUrl: '',
    figmaUrl: '',
    githubUrl: '',
    liveDemoUrl: '',
    featured: false,
    layoutStyle: 'portrait',
    accentColor: '#A100FF',
  });

  const [toolTagInput, setToolTagInput] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default PIN: 2026 or admin777 or hari2026
    if (pinInput === '2026' || pinInput === 'admin777' || pinInput === 'hari2026') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect PIN. (Hint: 2026)');
    }
  };

  const handleCreateNew = () => {
    setCurrentProject({
      id: `project-${Date.now()}`,
      number: `00${projects.length + 1}`,
      title: '',
      subtitle: '',
      category: 'BRANDING',
      year: '2026',
      client: '',
      tools: ['Canva', 'Figma', 'Photoshop'],
      thumbnail: 'custom-work',
      summary: '',
      problem: '',
      concept: '',
      visualDirection: '',
      canvaUrl: 'https://www.canva.com/projects',
      driveUrl: 'https://drive.google.com/drive/folders/1E5QzQExQ-VeI8l4lAMfZomgqZhzWsFBd',
      figmaUrl: '',
      githubUrl: '',
      liveDemoUrl: '',
      featured: true,
      layoutStyle: 'portrait',
      accentColor: '#A100FF',
    });
    setIsEditing(true);
    setStatusMessage('');
  };

  const handleEdit = (project: ProjectItem) => {
    setCurrentProject({ ...project });
    setIsEditing(true);
    setStatusMessage('');
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to remove this project?')) {
      await ApiService.deleteProject(id);
      onRefreshProjects();
      setStatusMessage('Project deleted successfully.');
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentProject.title || !currentProject.summary) {
      alert('Please fill out Project Title and Summary.');
      return;
    }

    const finalProject: ProjectItem = {
      id: currentProject.id || `proj-${Date.now()}`,
      number: currentProject.number || '001',
      title: currentProject.title,
      subtitle: currentProject.subtitle || 'Creative Case Study',
      category: (currentProject.category as ProjectCategory) || 'BRANDING',
      year: currentProject.year || '2026',
      client: currentProject.client || '',
      tools: currentProject.tools && currentProject.tools.length > 0 ? currentProject.tools : ['Figma', 'Canva'],
      thumbnail: currentProject.thumbnail || 'custom-project',
      summary: currentProject.summary,
      problem: currentProject.problem || 'Creative design challenge requiring structured branding.',
      concept: currentProject.concept || 'Clean visual system with high-contrast typography.',
      visualDirection: currentProject.visualDirection || 'Editorial minimalist branding.',
      canvaUrl: currentProject.canvaUrl || '',
      driveUrl: currentProject.driveUrl || '',
      figmaUrl: currentProject.figmaUrl || '',
      githubUrl: currentProject.githubUrl || '',
      liveDemoUrl: currentProject.liveDemoUrl || '',
      featured: currentProject.featured ?? false,
      layoutStyle: currentProject.layoutStyle || 'portrait',
      accentColor: currentProject.accentColor || '#A100FF',
    };

    await ApiService.saveProject(finalProject);
    onRefreshProjects();
    setIsEditing(false);
    setStatusMessage(`Project "${finalProject.title}" published successfully!`);
  };

  const addToolTag = () => {
    if (toolTagInput.trim()) {
      const current = currentProject.tools || [];
      if (!current.includes(toolTagInput.trim())) {
        setCurrentProject({ ...currentProject, tools: [...current, toolTagInput.trim()] });
      }
      setToolTagInput('');
    }
  };

  const removeToolTag = (tag: string) => {
    const current = currentProject.tools || [];
    setCurrentProject({ ...currentProject, tools: current.filter(t => t !== tag) });
  };

  const exportBackup = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(projects, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "hariharan_projects_backup.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-2xl flex flex-col justify-start p-4 md:p-8 animate-in fade-in duration-300">
      
      {/* Modal Container */}
      <div className="max-w-6xl mx-auto w-full bg-[#0A0A0A] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        
        {/* Header Bar */}
        <div className="p-6 bg-[#111111] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A100FF] to-[#7C3AED] flex items-center justify-center text-white">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white">
                ADMIN CREATIVE CMS
              </h3>
              <p className="font-mono text-xs text-[#00E5FF]">
                Asset Manager • Canva & Google Drive Synced
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {isAuthenticated && (
              <button
                onClick={exportBackup}
                title="Export JSON Backup"
                className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 text-[#A7A7A7] hover:text-white font-mono text-xs border border-white/10 flex items-center space-x-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">EXPORT BACKUP</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 flex-1 overflow-y-auto">
          
          {/* Unauthenticated PIN Screen */}
          {!isAuthenticated ? (
            <div className="max-w-md mx-auto py-16 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-purple-950/40 border border-purple-500/30 text-[#A100FF] flex items-center justify-center mx-auto">
                <Key className="w-8 h-8" />
              </div>

              <div>
                <h4 className="font-display font-bold text-2xl text-white">Enter Designer PIN</h4>
                <p className="font-mono text-xs text-[#A7A7A7] mt-1">
                  Authenticate to manage projects, Canva project links, and vault assets.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <input
                  type="password"
                  required
                  autoFocus
                  value={pinInput}
                  onChange={e => setPinInput(e.target.value)}
                  placeholder="Enter PIN (e.g. 2026)"
                  className="w-full bg-[#141414] border border-white/15 rounded-2xl p-4 text-center text-white font-mono text-lg tracking-widest focus:outline-none focus:border-[#A100FF]"
                />

                {authError && (
                  <p className="font-mono text-xs text-red-400">{authError}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#A100FF] to-[#7C3AED] text-white font-display font-bold text-sm tracking-wider uppercase hover:scale-[1.02] transition-transform shadow-xl"
                >
                  UNLOCK DASHBOARD
                </button>
              </form>
            </div>
          ) : (
            /* Authenticated Admin Dashboard */
            <div className="space-y-8">
              
              {/* Status Alert Banner */}
              {statusMessage && (
                <div className="p-4 rounded-2xl bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 font-mono text-xs flex items-center justify-between">
                  <span>{statusMessage}</span>
                  <button onClick={() => setStatusMessage('')} className="underline">Dismiss</button>
                </div>
              )}

              {/* Action Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <h4 className="font-display font-bold text-lg text-white">Project Archive ({projects.length})</h4>
                  <p className="font-mono text-xs text-[#A7A7A7]">Add new Canva/Drive projects or edit existing case studies.</p>
                </div>

                {!isEditing && (
                  <button
                    onClick={handleCreateNew}
                    className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#A100FF] to-[#7C3AED] text-white font-display font-bold text-xs hover:scale-105 transition-transform"
                  >
                    <Plus className="w-4 h-4" />
                    <span>ADD NEW PROJECT</span>
                  </button>
                )}
              </div>

              {/* Edit / Create Form */}
              {isEditing ? (
                <form onSubmit={handleSave} className="p-6 md:p-8 rounded-3xl bg-[#0E0E0E] border border-white/15 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="font-display font-bold text-lg text-white">
                      {currentProject.title ? `Editing: ${currentProject.title}` : 'Create New Project Record'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="text-xs font-mono text-[#A7A7A7] hover:text-white"
                    >
                      CANCEL
                    </button>
                  </div>

                  {/* Top Grid: Title, Category, Year, Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="sm:col-span-2 space-y-2">
                      <label className="font-mono text-xs text-[#A7A7A7]">PROJECT TITLE *</label>
                      <input
                        type="text"
                        required
                        value={currentProject.title || ''}
                        onChange={e => setCurrentProject({ ...currentProject, title: e.target.value })}
                        placeholder="e.g. OMNICHANNEL BRAND IDENTITY"
                        className="w-full bg-[#141414] border border-white/10 rounded-xl p-3 text-white font-sans text-sm focus:border-[#A100FF] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-xs text-[#A7A7A7]">CATEGORY</label>
                      <select
                        value={currentProject.category || 'BRANDING'}
                        onChange={e => setCurrentProject({ ...currentProject, category: e.target.value as ProjectCategory })}
                        className="w-full bg-[#141414] border border-white/10 rounded-xl p-3 text-white font-mono text-xs focus:border-[#A100FF] focus:outline-none"
                      >
                        {['BRANDING', 'SOCIAL MEDIA', 'UI/UX', 'WEB', 'MOTION', 'VIDEO', 'PRINT', 'PRESENTATION', 'AI CREATIVE', 'EXPERIMENTAL'].map(c => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-xs text-[#A7A7A7]">YEAR</label>
                      <input
                        type="text"
                        value={currentProject.year || '2026'}
                        onChange={e => setCurrentProject({ ...currentProject, year: e.target.value })}
                        className="w-full bg-[#141414] border border-white/10 rounded-xl p-3 text-white font-mono text-xs focus:border-[#A100FF] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Subtitle & Client */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="font-mono text-xs text-[#A7A7A7]">SUBTITLE / TAGLINE</label>
                      <input
                        type="text"
                        value={currentProject.subtitle || ''}
                        onChange={e => setCurrentProject({ ...currentProject, subtitle: e.target.value })}
                        placeholder="e.g. Social Content System & Carousel Templates"
                        className="w-full bg-[#141414] border border-white/10 rounded-xl p-3 text-white font-sans text-sm focus:border-[#A100FF] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-xs text-[#A7A7A7]">CLIENT / COMPANY</label>
                      <input
                        type="text"
                        value={currentProject.client || ''}
                        onChange={e => setCurrentProject({ ...currentProject, client: e.target.value })}
                        placeholder="e.g. Kieyverse / Techzon Wide"
                        className="w-full bg-[#141414] border border-white/10 rounded-xl p-3 text-white font-sans text-sm focus:border-[#A100FF] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Canva & Google Drive Integration Links */}
                  <div className="p-5 rounded-2xl bg-black/60 border border-purple-500/20 space-y-4">
                    <div className="font-mono text-xs text-[#A100FF] uppercase flex items-center space-x-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>EXTERNAL ASSET REPOSITORIES (CANVA & GOOGLE DRIVE)</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="font-mono text-xs text-[#00C4CC]">CANVA PROJECT URL</label>
                        <input
                          type="url"
                          value={currentProject.canvaUrl || ''}
                          onChange={e => setCurrentProject({ ...currentProject, canvaUrl: e.target.value })}
                          placeholder="https://www.canva.com/projects"
                          className="w-full bg-[#141414] border border-white/10 rounded-xl p-3 text-white font-mono text-xs focus:border-[#00C4CC] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="font-mono text-xs text-[#FFB088]">GOOGLE DRIVE FOLDER URL</label>
                        <input
                          type="url"
                          value={currentProject.driveUrl || ''}
                          onChange={e => setCurrentProject({ ...currentProject, driveUrl: e.target.value })}
                          placeholder="https://drive.google.com/drive/folders/..."
                          className="w-full bg-[#141414] border border-white/10 rounded-xl p-3 text-white font-mono text-xs focus:border-[#FF4D00] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                      <div className="space-y-1">
                        <label className="font-mono text-[10px] text-[#A7A7A7]">FIGMA URL</label>
                        <input
                          type="url"
                          value={currentProject.figmaUrl || ''}
                          onChange={e => setCurrentProject({ ...currentProject, figmaUrl: e.target.value })}
                          placeholder="https://figma.com/file/..."
                          className="w-full bg-[#141414] border border-white/10 rounded-xl p-2.5 text-white font-mono text-xs focus:border-white/40 focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="font-mono text-[10px] text-[#A7A7A7]">GITHUB URL</label>
                        <input
                          type="url"
                          value={currentProject.githubUrl || ''}
                          onChange={e => setCurrentProject({ ...currentProject, githubUrl: e.target.value })}
                          placeholder="https://github.com/..."
                          className="w-full bg-[#141414] border border-white/10 rounded-xl p-2.5 text-white font-mono text-xs focus:border-white/40 focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="font-mono text-[10px] text-[#A7A7A7]">LIVE DEMO URL</label>
                        <input
                          type="url"
                          value={currentProject.liveDemoUrl || ''}
                          onChange={e => setCurrentProject({ ...currentProject, liveDemoUrl: e.target.value })}
                          placeholder="https://kiey-verse.in"
                          className="w-full bg-[#141414] border border-white/10 rounded-xl p-2.5 text-white font-mono text-xs focus:border-white/40 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Summary & Problem */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="font-mono text-xs text-[#A7A7A7]">SUMMARY *</label>
                      <textarea
                        required
                        rows={3}
                        value={currentProject.summary || ''}
                        onChange={e => setCurrentProject({ ...currentProject, summary: e.target.value })}
                        placeholder="Comprehensive project description and strategy..."
                        className="w-full bg-[#141414] border border-white/10 rounded-xl p-3 text-white font-sans text-sm focus:border-[#A100FF] focus:outline-none resize-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-xs text-[#A7A7A7]">CREATIVE PROBLEM / CHALLENGE</label>
                      <textarea
                        rows={2}
                        value={currentProject.problem || ''}
                        onChange={e => setCurrentProject({ ...currentProject, problem: e.target.value })}
                        placeholder="The core design or branding obstacle..."
                        className="w-full bg-[#141414] border border-white/10 rounded-xl p-3 text-white font-sans text-sm focus:border-[#A100FF] focus:outline-none resize-none"
                      />
                    </div>
                  </div>

                  {/* Tools Tags Manager */}
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-[#A7A7A7]">TOOLS & SKILLS USED</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={toolTagInput}
                        onChange={e => setToolTagInput(e.target.value)}
                        onKeyDown={e => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            addToolTag();
                          }
                        }}
                        placeholder="e.g. Premiere Pro (Press Enter or Add)"
                        className="flex-1 bg-[#141414] border border-white/10 rounded-xl p-3 text-white font-mono text-xs focus:border-[#A100FF] focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={addToolTag}
                        className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs"
                      >
                        ADD
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {currentProject.tools?.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-full bg-white/10 text-white font-mono text-xs flex items-center space-x-1.5"
                        >
                          <span>{tag}</span>
                          <button
                            type="button"
                            onClick={() => removeToolTag(tag)}
                            className="text-red-400 hover:text-red-200"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center justify-end space-x-3 pt-6 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-[#A7A7A7] font-mono text-xs"
                    >
                      CANCEL
                    </button>
                    <button
                      type="submit"
                      className="flex items-center space-x-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#A100FF] to-[#7C3AED] text-white font-display font-bold text-xs hover:scale-105 transition-transform"
                    >
                      <Save className="w-4 h-4" />
                      <span>SAVE & PUBLISH PROJECT</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Projects List Table */
                <div className="divide-y divide-white/10 border border-white/10 rounded-3xl overflow-hidden bg-[#0D0D0D]">
                  {projects.map(proj => (
                    <div
                      key={proj.id}
                      className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-xs text-[#A100FF]">{proj.number}</span>
                          <span className="font-mono text-[10px] text-[#A7A7A7] px-2 py-0.5 rounded bg-white/5 uppercase">
                            {proj.category}
                          </span>
                        </div>
                        <div className="font-display font-bold text-base text-white">{proj.title}</div>
                        <div className="font-sans text-xs text-[#A7A7A7]">{proj.subtitle}</div>
                      </div>

                      <div className="flex items-center space-x-2 self-end sm:self-center">
                        <button
                          onClick={() => handleEdit(proj)}
                          className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-white transition-colors"
                          title="Edit Project"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(proj.id)}
                          className="p-2.5 rounded-xl bg-red-950/40 hover:bg-red-900/60 text-red-400 transition-colors"
                          title="Delete Project"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
