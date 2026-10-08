import React, { useState, useEffect } from 'react';
import { ProjectItem, VaultAsset, CursorState } from '@/types';
import { ApiService } from '@/lib/api';
import { CustomCursor } from '@/components/common/CustomCursor';
import { CinematicTransition } from '@/components/transitions/CinematicTransition';
import { useTransitionRouter } from '@/context/TransitionContext';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { ResumeModal } from '@/components/common/ResumeModal';
import { CertificateModal } from '@/components/common/CertificateModal';

import { Hero } from '@/components/hero/Hero';
import { KineticIdentity } from '@/components/hero/KineticIdentity';
import { EditorialMarquee } from '@/components/hero/EditorialMarquee';

import { SelectedWork } from '@/components/work/SelectedWork';
import { ProjectDetailModal } from '@/components/work/ProjectDetailModal';
import { CreativeVaultView } from '@/components/vault/CreativeVaultView';

import { MotionLabSection } from '@/components/motion/MotionLabSection';
import { AiCreativeLab } from '@/components/ai/AiCreativeLab';
import { DesignPhilosophy } from '@/components/philosophy/DesignPhilosophy';
import { DesignProcess } from '@/components/process/DesignProcess';
import { ToolEcosystem } from '@/components/tools/ToolEcosystem';
import { ExperienceSection } from '@/components/experience/ExperienceSection';
import { AboutSection } from '@/components/about/AboutSection';
import { ContactSection } from '@/components/contact/ContactSection';
import { AdminDashboard } from '@/components/admin/AdminDashboard';

export function App() {
  const { isTransitioning, replayIntro, navigateWithTransition } = useTransitionRouter();
  const [cursorState, setCursorState] = useState<CursorState>('NORMAL');
  
  // Projects & Vault Data
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [vaultAssets, setVaultAssets] = useState<VaultAsset[]>([]);
  
  // Modals & Navigation States
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [isVaultOpen, setIsVaultOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [activeCertUrl, setActiveCertUrl] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  const loadData = async () => {
    const fetchedProjects = await ApiService.getProjects();
    setProjects(fetchedProjects);
    const fetchedVault = await ApiService.getVaultAssets();
    setVaultAssets(fetchedVault);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Track active section on scroll for intelligent navbar highlights
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sectionIds = ['hero', 'work', 'expertise', 'motion-lab', 'ai-lab', 'experience', 'about', 'contact'];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#000000] text-[#F5F5F5] selection:bg-[#A100FF] selection:text-white font-sans">
      
      {/* High-Precision Dynamic Interactive Cursor */}
      <CustomCursor cursorState={cursorState} />

      {/* Cinematic Transition Master System (7-sec Entry + 4-sec Route Nav & Reload) */}
      <CinematicTransition />

      {/* Main Portfolio Architecture */}
      <div className={isTransitioning ? 'opacity-90 filter blur-[1px] transition-all duration-500' : 'opacity-100 transition-opacity duration-700'}>
        
        {/* Sticky Intelligent Header */}
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenAdmin={() => setIsAdminOpen(true)}
          onNavigateVault={() => setIsVaultOpen(true)}
          setCursorState={setCursorState}
          activeSection={activeSection}
        />

        {/* 01. Hero Section */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onNavigateVault={() => setIsVaultOpen(true)}
          setCursorState={setCursorState}
        />

        {/* 02. Kinetic Identity Statement */}
        <KineticIdentity setCursorState={setCursorState} />

        {/* 03. Infinite Marquee */}
        <EditorialMarquee />

        {/* 04. Selected Work Gallery */}
        <SelectedWork
          projects={projects}
          onSelectProject={project => setActiveProject(project)}
          onNavigateVault={() => setIsVaultOpen(true)}
          setCursorState={setCursorState}
        />

        {/* 05. Motion Lab */}
        <MotionLabSection setCursorState={setCursorState} />

        {/* 06. AI × Design Lab */}
        <AiCreativeLab setCursorState={setCursorState} />

        {/* 07. Design Philosophy */}
        <DesignPhilosophy setCursorState={setCursorState} />

        {/* 08. Design Process */}
        <DesignProcess setCursorState={setCursorState} />

        {/* 09. Tool Ecosystem */}
        <ToolEcosystem setCursorState={setCursorState} />

        {/* 10. Experience Timeline */}
        <ExperienceSection
          onViewCertificate={url => setActiveCertUrl(url)}
          setCursorState={setCursorState}
        />

        {/* 11. About & Bio */}
        <AboutSection
          onOpenResume={() =>
            navigateWithTransition({
              title: 'LOADING / RESUME ARCHIVE',
              category: 'CURRICULUM VITAE • EXECUTIVE PDF',
              action: () => setIsResumeOpen(true),
            })
          }
          setCursorState={setCursorState}
        />

        {/* 12. Contact Terminal */}
        <ContactSection
          onOpenResume={() =>
            navigateWithTransition({
              title: 'LOADING / RESUME ARCHIVE',
              category: 'CURRICULUM VITAE • EXECUTIVE PDF',
              action: () => setIsResumeOpen(true),
            })
          }
          setCursorState={setCursorState}
        />

        {/* 13. Agency Footer */}
        <Footer
          onOpenResume={() => setIsResumeOpen(true)}
          onNavigateVault={() => setIsVaultOpen(true)}
          onReplayIntro={replayIntro}
          setCursorState={setCursorState}
        />

      </div>

      {/* Cinematic Case Study Modal (/work/:id) */}
      {activeProject && (
        <ProjectDetailModal
          project={activeProject}
          allProjects={projects}
          onClose={() => setActiveProject(null)}
          onSelectNextProject={next => setActiveProject(next)}
          setCursorState={setCursorState}
        />
      )}

      {/* Dedicated Creative Vault View (/creative-vault) */}
      {isVaultOpen && (
        <CreativeVaultView
          assets={vaultAssets}
          onClose={() => setIsVaultOpen(false)}
          setCursorState={setCursorState}
        />
      )}

      {/* Executive Resume Modal & PDF Viewer */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onViewCertificate={url => {
          setIsResumeOpen(false);
          setActiveCertUrl(url);
        }}
      />

      {/* Verified Certificate Modal */}
      <CertificateModal
        isOpen={!!activeCertUrl}
        certUrl={activeCertUrl}
        onClose={() => setActiveCertUrl(null)}
      />

      {/* Admin Creative CMS Dashboard */}
      <AdminDashboard
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        projects={projects}
        onRefreshProjects={loadData}
        setCursorState={setCursorState}
      />

    </div>
  );
}

export default App;
