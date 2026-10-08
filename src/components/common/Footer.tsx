import React from 'react';
import { ArrowUpRight, Download, Mail, MapPin, Globe, Sparkles, FolderLock, RotateCcw } from 'lucide-react';
import { profileInfo } from '@/data/portfolioData';
import { CursorState } from '@/types';
import { useTransitionRouter } from '@/context/TransitionContext';

interface FooterProps {
  onOpenResume: () => void;
  onNavigateVault: () => void;
  onReplayIntro: () => void;
  setCursorState: (state: CursorState) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenResume,
  onNavigateVault,
  onReplayIntro,
  setCursorState,
}) => {
  const { navigateWithTransition, replayIntro } = useTransitionRouter();

  const handleReplay = () => {
    onReplayIntro();
    replayIntro();
  };

  const navItems = [
    { label: '01 / SELECTED WORK', title: 'LOADING / SELECTED WORK', category: 'BRANDING • SOCIAL • UI/UX • MOTION', href: '#work' },
    { label: '02 / CREATIVE VAULT', title: 'LOADING / CREATIVE VAULT', category: 'CANVA & GOOGLE DRIVE ARCHIVES', action: onNavigateVault },
    { label: '03 / TOOL ECOSYSTEM', title: 'LOADING / TOOL ECOSYSTEM', category: 'CREATIVE & TECHNICAL STACK', href: '#expertise' },
    { label: '04 / MOTION LAB', title: 'LOADING / MOTION LAB', category: '9:16 REELS • PACING • SOUND SYNC', href: '#motion-lab' },
    { label: '05 / AI × DESIGN LAB', title: 'LOADING / AI × DESIGN LAB', category: 'GENERATIVE AI • PROMPT ENGINEERING', href: '#ai-lab' },
    { label: '06 / EXPERIENCE TIMELINE', title: 'LOADING / EXPERIENCE TIMELINE', category: 'BACKGROUND • CERTIFICATIONS • JOURNEY', href: '#experience' },
    { label: '07 / ABOUT & BIO', title: 'LOADING / ABOUT & BIO', category: 'DESIGN PHILOSOPHY • CREATIVE STORY', href: '#about' },
    { label: '08 / CONTACT', title: 'LOADING / CONTACT TERMINAL', category: 'INQUIRIES & COLLABORATION', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#050505] text-[#F5F5F5] border-t border-white/10 overflow-hidden pt-20 pb-12">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-radial from-[#A100FF]/15 to-transparent blur-3xl pointer-events-none" />
      <div className="noise-overlay" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Massive Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-16 border-b border-white/10 gap-8">
          <div>
            <div className="font-mono text-xs text-[#A100FF] tracking-widest uppercase mb-3 flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DESIGN × MOTION × TECHNOLOGY</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl tracking-tight text-white">
              HARI HARAN A
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#A7A7A7] tracking-wider mt-2">
              GRAPHIC DESIGNER • VISUAL DESIGNER • UI/UX • VIDEO EDITOR • CREATIVE TECHNOLOGIST
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={() =>
                navigateWithTransition({
                  title: 'LOADING / RESUME ARCHIVE',
                  category: 'CURRICULUM VITAE • EXECUTIVE PDF',
                  action: onOpenResume,
                })
              }
              onMouseEnter={() => setCursorState('OPEN')}
              onMouseLeave={() => setCursorState('NORMAL')}
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-mono text-xs px-6 py-3.5 rounded-full border border-white/20 transition-all duration-300 hover:scale-105"
            >
              <Download className="w-4 h-4 text-[#00E5FF]" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </button>

            <button
              onClick={() =>
                navigateWithTransition({
                  title: 'LOADING / CREATIVE VAULT',
                  category: 'CANVA & GOOGLE DRIVE ASSET ARCHIVE',
                  action: onNavigateVault,
                })
              }
              onMouseEnter={() => setCursorState('OPEN')}
              onMouseLeave={() => setCursorState('NORMAL')}
              className="flex items-center space-x-2 bg-gradient-to-r from-[#A100FF] to-[#7C3AED] text-white font-display font-semibold text-xs px-6 py-3.5 rounded-full shadow-lg shadow-purple-950/50 hover:scale-105 transition-all duration-300"
            >
              <FolderLock className="w-4 h-4" />
              <span>OPEN CREATIVE VAULT</span>
            </button>
          </div>
        </div>

        {/* Directory & Quick Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-white/10">
          
          {/* Col 1: Creative Pillars */}
          <div>
            <h4 className="font-mono text-xs text-white tracking-widest uppercase mb-4 text-[#00E5FF]">
              // DISCIPLINES
            </h4>
            <ul className="space-y-2.5 font-sans text-sm text-[#A7A7A7]">
              <li className="hover:text-white transition-colors">Visual Brand Identities</li>
              <li className="hover:text-white transition-colors">Social Media Strategy & Carousels</li>
              <li className="hover:text-white transition-colors">UI/UX Prototyping & Wireframing</li>
              <li className="hover:text-white transition-colors">Kinetic Motion & Video Editing</li>
              <li className="hover:text-white transition-colors">Creative AI & Prompt Engineering</li>
              <li className="hover:text-white transition-colors">Print & Digital Asset Preparation</li>
            </ul>
          </div>

          {/* Col 2: Navigation Map */}
          <div>
            <h4 className="font-mono text-xs text-white tracking-widest uppercase mb-4 text-[#A100FF]">
              // SITEMAP
            </h4>
            <ul className="space-y-2.5 font-mono text-xs text-[#A7A7A7]">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() =>
                      navigateWithTransition({
                        title: item.title,
                        category: item.category,
                        href: item.href,
                        action: item.action,
                      })
                    }
                    className="hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: External Repositories */}
          <div>
            <h4 className="font-mono text-xs text-white tracking-widest uppercase mb-4 text-[#FF4D00]">
              // ASSET ARCHIVES
            </h4>
            <ul className="space-y-3 font-sans text-sm text-[#A7A7A7]">
              <li>
                <a
                  href={profileInfo.canvaVaultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[#00C4CC] hover:underline"
                >
                  <Globe className="w-4 h-4" />
                  <span>Canva Projects Library</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={profileInfo.googleDriveVaultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[#FFB088] hover:underline"
                >
                  <Globe className="w-4 h-4" />
                  <span>Google Drive Creative Folder</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={profileInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-white"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#6F6F6F]" />
                </a>
              </li>
              <li>
                <a
                  href={profileInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-white"
                >
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#6F6F6F]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Inquiries */}
          <div>
            <h4 className="font-mono text-xs text-white tracking-widest uppercase mb-4 text-white">
              // LOCATION & CONTACT
            </h4>
            <div className="space-y-3 font-sans text-sm text-[#A7A7A7]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                <span>{profileInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#A100FF] shrink-0" />
                <a href={`mailto:${profileInfo.email}`} className="text-white hover:underline break-all">
                  {profileInfo.email}
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={handleReplay}
                  className="font-mono text-[11px] text-[#6F6F6F] hover:text-white underline underline-offset-4 tracking-wider flex items-center space-x-1.5"
                >
                  <RotateCcw className="w-3 h-3 text-[#A100FF]" />
                  <span>[REPLAY 7-SECOND OPENING INTRO]</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Technical Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#6F6F6F]">
          <div>
            © 2026 HARI HARAN A. ALL CREATIVE RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-2">
            <span>CINEMATIC TRANSITION SYSTEM</span>
            <span className="text-[#A100FF]">•</span>
            <span className="text-[#00E5FF]">LIGHTHOUSE 90+ READY</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
