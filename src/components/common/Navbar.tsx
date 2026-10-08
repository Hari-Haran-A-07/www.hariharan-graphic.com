import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight, Lock, Sparkles, FolderLock } from 'lucide-react';
import { CursorState } from '@/types';
import { useTransitionRouter } from '@/context/TransitionContext';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenAdmin: () => void;
  onNavigateVault: () => void;
  setCursorState: (state: CursorState) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenAdmin,
  onNavigateVault,
  setCursorState,
  activeSection,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navigateWithTransition } = useTransitionRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: 'WORK',
      title: 'LOADING / SELECTED WORK',
      category: 'BRANDING • SOCIAL MEDIA • UI/UX • MOTION',
      href: '#work',
    },
    {
      label: 'CREATIVE VAULT',
      title: 'LOADING / CREATIVE VAULT',
      category: 'CANVA & GOOGLE DRIVE ASSET ARCHIVE',
      action: onNavigateVault,
      isVault: true,
    },
    {
      label: 'EXPERTISE',
      title: 'LOADING / TOOL ECOSYSTEM',
      category: 'CREATIVE STACK & TECHNICAL CAPABILITIES',
      href: '#expertise',
    },
    {
      label: 'MOTION LAB',
      title: 'LOADING / MOTION LAB',
      category: '9:16 REELS • PACING • SOUND SYNCHRONIZATION',
      href: '#motion-lab',
    },
    {
      label: 'AI × DESIGN',
      title: 'LOADING / AI × DESIGN LAB',
      category: 'GENERATIVE AI & PROMPT ENGINEERING',
      href: '#ai-lab',
    },
    {
      label: 'EXPERIENCE',
      title: 'LOADING / EXPERIENCE TIMELINE',
      category: 'BACKGROUND • CERTIFICATIONS • JOURNEY',
      href: '#experience',
    },
    {
      label: 'ABOUT',
      title: 'LOADING / ABOUT & BIO',
      category: 'DESIGN PHILOSOPHY • CREATIVE STORY',
      href: '#about',
    },
    {
      label: 'CONTACT',
      title: 'LOADING / CONTACT TERMINAL',
      category: 'INQUIRIES & COLLABORATION',
      href: '#contact',
    },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setMobileMenuOpen(false);
    navigateWithTransition({
      title: item.title,
      category: item.category,
      href: item.href,
      action: item.action,
    });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/60'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Monogram & Status Badge */}
          <button
            onClick={() =>
              navigateWithTransition({
                title: 'LOADING / STUDIO HERO',
                category: 'GRAPHIC DESIGNER • HARI HARAN A',
                href: '#hero',
              })
            }
            onMouseEnter={() => setCursorState('VIEW')}
            onMouseLeave={() => setCursorState('NORMAL')}
            className="group flex items-center space-x-3.5 focus:outline-none text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#171717] to-[#0A0A0A] border border-white/15 flex items-center justify-center font-display font-extrabold text-lg text-white group-hover:border-[#A100FF] transition-all duration-300 group-hover:scale-105">
              H<span className="text-[#A100FF]">H</span>
            </div>
            
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-bold text-sm tracking-wider text-white group-hover:text-[#A100FF] transition-colors">
                HARI HARAN A
              </span>
              <span className="font-mono text-[9px] text-[#A7A7A7] tracking-widest flex items-center space-x-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse"></span>
                <span>CREATIVE STUDIO</span>
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navItems.map((item, idx) => {
              const isActive = activeSection === item.href?.replace('#', '');
              return (
                <button
                  key={idx}
                  onClick={() => handleNavClick(item)}
                  onMouseEnter={() => setCursorState('EXPLORE')}
                  onMouseLeave={() => setCursorState('NORMAL')}
                  className={`font-mono text-xs px-3 py-1.5 rounded-full transition-all duration-200 flex items-center space-x-1.5 ${
                    item.isVault
                      ? 'text-[#A7A7A7] hover:text-white hover:bg-white/10 group'
                      : isActive
                      ? 'text-white bg-white/15 font-semibold shadow-xs'
                      : 'text-[#A7A7A7] hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.isVault && (
                    <FolderLock className="w-3 h-3 text-[#A100FF] group-hover:scale-110 transition-transform" />
                  )}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            
            {/* Download Resume Button */}
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
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-mono text-xs px-4 py-2.5 rounded-full border border-white/15 hover:border-white/40 transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>RESUME</span>
            </button>

            {/* Let's Talk CTA */}
            <button
              onClick={() =>
                navigateWithTransition({
                  title: 'LOADING / CONTACT TERMINAL',
                  category: 'INQUIRIES & COLLABORATION',
                  href: '#contact',
                })
              }
              onMouseEnter={() => setCursorState('OPEN')}
              onMouseLeave={() => setCursorState('NORMAL')}
              className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-[#A100FF] to-[#7C3AED] hover:from-[#B120FF] hover:to-[#8B4CF7] text-white font-display font-semibold text-xs px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-purple-950/40 hover:scale-105"
            >
              <span>LET'S COLLABORATE</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Admin CMS Access */}
            <button
              onClick={() =>
                navigateWithTransition({
                  title: 'LOADING / ADMIN CMS',
                  category: 'CREATIVE CONTENT MANAGEMENT SYSTEM',
                  action: onOpenAdmin,
                })
              }
              title="Admin Creative CMS"
              aria-label="Admin Creative CMS"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-[#A7A7A7] hover:text-white transition-colors"
            >
              <Lock className="w-3.5 h-3.5" />
            </button>

          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() =>
                navigateWithTransition({
                  title: 'LOADING / RESUME ARCHIVE',
                  category: 'CURRICULUM VITAE • EXECUTIVE PDF',
                  action: onOpenResume,
                })
              }
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white"
              title="Resume"
            >
              <Download className="w-4 h-4 text-[#00E5FF]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Fullscreen Mobile Animated Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#000000]/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 md:hidden animate-in fade-in slide-in-from-top-6 duration-300">
          <div className="flex flex-col space-y-5">
            <div className="font-mono text-[10px] text-[#A100FF] tracking-widest uppercase">
              // NAVIGATION DIRECTORY
            </div>
            {navItems.map((item, idx) => (
              <div key={idx}>
                <button
                  onClick={() => handleNavClick(item)}
                  className="font-display font-bold text-2xl text-left text-white hover:text-[#A100FF] flex items-center justify-between w-full"
                >
                  <span>{item.label}</span>
                  {item.isVault ? (
                    <Sparkles className="w-4 h-4 text-[#A100FF]" />
                  ) : (
                    <span className="font-mono text-xs text-[#6F6F6F]">0{idx + 1}</span>
                  )}
                </button>
              </div>
            ))}
          </div>

          <div className="flex flex-col space-y-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigateWithTransition({
                  title: 'LOADING / RESUME ARCHIVE',
                  category: 'CURRICULUM VITAE • EXECUTIVE PDF',
                  action: onOpenResume,
                });
              }}
              className="w-full py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-mono text-xs flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4 text-[#00E5FF]" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigateWithTransition({
                  title: 'LOADING / ADMIN CMS',
                  category: 'CREATIVE CONTENT MANAGEMENT',
                  action: onOpenAdmin,
                });
              }}
              className="w-full py-3 rounded-xl bg-black border border-white/15 text-[#A7A7A7] font-mono text-xs flex items-center justify-center space-x-2"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>ADMIN CREATIVE DASHBOARD</span>
            </button>

            <div className="font-mono text-[10px] text-center text-[#6F6F6F] pt-2">
              HARI HARAN A • DINDIGUL, TAMIL NADU, INDIA
            </div>
          </div>
        </div>
      )}
    </>
  );
};
