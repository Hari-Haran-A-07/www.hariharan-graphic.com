import React, { useState } from 'react';
import { X, Download, Eye, Award, Briefcase, GraduationCap, Sparkles, CheckCircle2, FileText } from 'lucide-react';
import { profileInfo, experienceTimeline, educationList, certificationsList, verifiedMetrics } from '@/data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewCertificate: (certUrl: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onViewCertificate }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'experience' | 'skills' | 'education'>('preview');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-[#0A0A0A] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        
        {/* Header Bar */}
        <div className="p-6 md:px-8 bg-[#111111] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A100FF] to-[#7C3AED] flex items-center justify-center text-white">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-white">
                HARI HARAN A — OFFICIAL RESUME
              </h3>
              <p className="font-mono text-xs text-[#A7A7A7]">
                Junior Graphic Designer & Video Editor • Verified PDF
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={profileInfo.resumePdfUrl}
              download="Hari_Haran_A_Resume.pdf"
              className="flex items-center space-x-2 bg-gradient-to-r from-[#A100FF] to-[#7C3AED] text-white font-mono text-xs px-4 py-2.5 rounded-full font-semibold hover:scale-105 transition-all shadow-md"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">DOWNLOAD PDF</span>
            </a>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center space-x-2 px-6 py-3 bg-[#0D0D0D] border-b border-white/10 overflow-x-auto">
          {[
            { id: 'preview', label: 'PDF DOCUMENT PREVIEW', icon: Eye },
            { id: 'experience', label: 'EXPERIENCE & METRICS', icon: Briefcase },
            { id: 'skills', label: 'CREATIVE & TECH SKILLS', icon: Sparkles },
            { id: 'education', label: 'EDUCATION & CERTS', icon: GraduationCap },
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-mono text-xs whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white/15 text-white font-semibold'
                    : 'text-[#A7A7A7] hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-[#A100FF]" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
          
          {/* Tab 1: PDF Document Viewer & Summary */}
          {activeTab === 'preview' && (
            <div className="space-y-6">
              {/* Highlight Banner */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#121212] to-black border border-purple-500/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h4 className="font-display font-bold text-lg text-white">
                    Verified Executive Resume Summary
                  </h4>
                  <p className="font-sans text-xs text-[#A7A7A7] mt-1 max-w-2xl">
                    Dual-domain creative practitioner combining Graphic Design, Motion Video Editing, and Full-Stack Engineering foundations from B.Tech Computer Science and Business Systems.
                  </p>
                </div>
                <div className="flex items-center space-x-3 shrink-0">
                  <div className="px-3.5 py-1.5 rounded-full bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 font-mono text-xs flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>VERIFIED 2026</span>
                  </div>
                </div>
              </div>

              {/* Embedded Document Frame / Object View */}
              <div className="w-full h-[520px] rounded-2xl border border-white/15 overflow-hidden bg-[#141414] relative flex flex-col items-center justify-center">
                <iframe
                  src={`${profileInfo.resumePdfUrl}#toolbar=0&navpanes=0`}
                  title="Hari Haran A Resume PDF"
                  className="w-full h-full border-none"
                />
              </div>

              <div className="flex justify-center">
                <a
                  href={profileInfo.resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#00E5FF] hover:underline flex items-center space-x-1.5"
                >
                  <span>Open PDF in separate browser window ↗</span>
                </a>
              </div>
            </div>
          )}

          {/* Tab 2: Experience & Verified Proof */}
          {activeTab === 'experience' && (
            <div className="space-y-6">
              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {verifiedMetrics.slice(0, 3).map(m => (
                  <div key={m.id} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="font-display font-extrabold text-3xl text-[#A100FF]">{m.value}</div>
                    <div className="font-sans font-semibold text-sm text-white mt-1">{m.label}</div>
                    <div className="font-mono text-[10px] text-[#A7A7A7] mt-0.5">{m.sublabel}</div>
                  </div>
                ))}
              </div>

              {/* Roles */}
              <div className="space-y-6">
                {experienceTimeline.map(exp => (
                  <div key={exp.id} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="font-display font-bold text-lg text-white">{exp.company}</h4>
                        <div className="font-mono text-xs text-[#00E5FF]">{exp.role}</div>
                      </div>
                      <div className="font-mono text-xs text-[#A7A7A7] px-3 py-1 rounded-full bg-white/5 border border-white/10 self-start sm:self-center">
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-2 font-sans text-xs text-[#A7A7A7]">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-[#A100FF] shrink-0 mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.certificateUrl && (
                      <div className="pt-2">
                        <button
                          onClick={() => onViewCertificate(exp.certificateUrl!)}
                          className="font-mono text-xs text-[#00E5FF] hover:underline flex items-center space-x-1.5"
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>View Verified Dot Com Infoway Certificate ↗</span>
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Skills & Tools */}
          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <h4 className="font-display font-bold text-base text-[#A100FF] flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span>CREATIVE & DESIGN MASTERY</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Graphic Design', 'Brand Guidelines', 'Social Media Carousels', 'Web Banners',
                    'Infographics', 'Typography & Composition', 'Color Theory', 'Pitch Decks',
                    'Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva Pro', 'Print CMYK',
                  ].map((s, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/10 font-mono text-xs text-white">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <h4 className="font-display font-bold text-base text-[#FF4D00] flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span>VIDEO, MOTION & AI</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Adobe Premiere Pro', 'After Effects Basics', 'CapCut Pro', 'DaVinci Resolve',
                    'Short-Form Reels', 'Sound Synchronization', 'Motion Transitions', 'Video Pacing',
                    'Adobe Firefly', 'Runway Gen-2', 'Kling AI', 'Prompt Engineering', 'ChatGPT',
                  ].map((s, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/10 font-mono text-xs text-white">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 md:col-span-2">
                <h4 className="font-display font-bold text-base text-[#00E5FF] flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span>DIGITAL DEVELOPMENT & ENGINEERING</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React.js', 'JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3',
                    'Responsive Web Assets', 'REST APIs', 'Spring Boot', 'Python', 'SQL',
                    'MongoDB', 'UI/UX Wireframing', 'Performance Optimization',
                  ].map((s, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/10 font-mono text-xs text-white">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Education & Certifications */}
          {activeTab === 'education' && (
            <div className="space-y-6">
              {/* Education */}
              <div className="space-y-4">
                <h4 className="font-mono text-xs text-[#00E5FF] tracking-widest uppercase">
                  // ACADEMIC DEGREES
                </h4>
                {educationList.map(edu => (
                  <div key={edu.id} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <div className="font-display font-bold text-base text-white">{edu.institution}</div>
                      <div className="font-mono text-xs text-[#A100FF]">{edu.period}</div>
                    </div>
                    <div className="font-sans text-xs text-[#F5F5F5]">
                      {edu.degree} — <span className="text-[#00E5FF]">{edu.field}</span>
                    </div>
                    <div className="font-mono text-xs text-[#10B981]">
                      {edu.scoreLabel}: {edu.score}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <h4 className="font-mono text-xs text-[#A100FF] tracking-widest uppercase">
                  // INDUSTRY CERTIFICATIONS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certificationsList.map(cert => (
                    <div key={cert.id} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                      <div className="font-display font-bold text-sm text-white">{cert.title}</div>
                      <div className="font-mono text-xs text-[#A7A7A7]">{cert.issuer} ({cert.year || '2024'})</div>
                      {cert.credentialUrl && (
                        <button
                          onClick={() => onViewCertificate(cert.credentialUrl!)}
                          className="font-mono text-[11px] text-[#00E5FF] hover:underline flex items-center space-x-1"
                        >
                          <Award className="w-3 h-3" />
                          <span>View Verified Certificate</span>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
