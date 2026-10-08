import React, { useState } from 'react';
import { Mail, MapPin, Send, ArrowUpRight, CheckCircle2, Sparkles, Download } from 'lucide-react';
import { profileInfo } from '@/data/portfolioData';
import { ApiService } from '@/lib/api';
import { CursorState } from '@/types';

interface ContactSectionProps {
  onOpenResume: () => void;
  setCursorState: (state: CursorState) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume, setCursorState }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Brand Identity',
    budget: '$1,000 - $3,000',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ success: boolean; text: string } | null>(null);

  const projectTypes = [
    'Brand Identity',
    'Social Media Carousels',
    'Short-Form Video & Reels',
    'UI/UX Prototyping',
    'Web Portal & Assets',
    'Creative AI Exploration',
  ];

  const budgets = [
    '< $1,000',
    '$1,000 - $3,000',
    '$3,000 - $5,000',
    '$5,000+',
    'Full-Time / Contract',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback(null);

    const res = await ApiService.submitInquiry(formData);
    setSubmitting(false);

    if (res.success) {
      setFeedback({ success: true, text: res.message });
      setFormData({
        name: '',
        email: '',
        projectType: 'Brand Identity',
        budget: '$1,000 - $3,000',
        message: '',
      });
    } else {
      setFeedback({ success: false, text: 'Transmission failed. Please email suryahari971@gmail.com directly.' });
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 bg-[#000000] border-t border-white/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#A100FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Massive Editorial Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 font-mono text-xs text-[#00E5FF] tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>// START A CONVERSATION</span>
          </div>

          <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-white leading-none">
            HAVE AN IDEA? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E879F9] to-[#A100FF]">
              LET'S MAKE IT VISIBLE.
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#A7A7A7] max-w-2xl mt-4">
            Available for junior creative roles, international MNC design positions, branding campaigns, motion video projects, and high-impact design collaborations.
          </p>
        </div>

        {/* Contact Grid: Details + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
          
          {/* Left: Contact Info & Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/10 space-y-6">
              <h3 className="font-display font-bold text-xl text-white">Direct Coordinates</h3>

              <div className="space-y-4 font-sans text-sm text-[#A7A7A7]">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-[#A100FF] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-mono text-xs text-[#6F6F6F]">PRIMARY EMAIL</div>
                    <a
                      href={`mailto:${profileInfo.email}`}
                      className="text-white hover:text-[#00E5FF] font-medium transition-colors break-all"
                    >
                      {profileInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#00E5FF] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-mono text-xs text-[#6F6F6F]">LOCATION</div>
                    <div className="text-white font-medium">{profileInfo.location}</div>
                  </div>
                </div>
              </div>

              {/* Channels */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="font-mono text-xs text-[#6F6F6F] uppercase">// CHANNELS</div>
                
                <div className="flex flex-col space-y-2">
                  <a
                    href={profileInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs transition-colors"
                  >
                    <span>LinkedIn Profile</span>
                    <ArrowUpRight className="w-4 h-4 text-[#A7A7A7]" />
                  </a>

                  <a
                    href={profileInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-mono text-xs transition-colors"
                  >
                    <span>GitHub Archive</span>
                    <ArrowUpRight className="w-4 h-4 text-[#A7A7A7]" />
                  </a>

                  <a
                    href={profileInfo.canvaVaultUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 text-[#00C4CC] font-mono text-xs transition-colors"
                  >
                    <span>Canva Projects Library</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <button
                onClick={onOpenResume}
                className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs border border-white/15 transition-colors flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4 text-[#00E5FF]" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right: Interactive Inquiry Terminal (7 Cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 md:p-10 rounded-3xl bg-[#0A0A0A] border border-white/15 shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-mono text-xs text-white uppercase font-bold">// TRANSMISSION TERMINAL</span>
                <span className="font-mono text-xs text-[#10B981] flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span>ONLINE // PHP REST READY</span>
                </span>
              </div>

              {/* Project Type Selector */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-[#A7A7A7]">01. SELECT INQUIRY DOMAIN</label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`font-mono text-xs px-3.5 py-1.5 rounded-full transition-all ${
                        formData.projectType === type
                          ? 'bg-[#A100FF] text-white font-semibold shadow-md'
                          : 'bg-white/5 text-[#A7A7A7] hover:text-white border border-white/5'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-[#A7A7A7]">02. ESTIMATED BUDGET / ENGAGEMENT</label>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`font-mono text-xs px-3.5 py-1.5 rounded-full transition-all ${
                        formData.budget === b
                          ? 'bg-[#00E5FF] text-black font-bold shadow-md'
                          : 'bg-white/5 text-[#A7A7A7] hover:text-white border border-white/5'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-mono text-xs text-[#A7A7A7]">03. YOUR NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Sterling"
                    className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3.5 text-white font-sans text-sm focus:outline-none focus:border-[#A100FF] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-[#A7A7A7]">04. EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@agency.com"
                    className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3.5 text-white font-sans text-sm focus:outline-none focus:border-[#A100FF] transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-[#A7A7A7]">05. PROJECT DETAILS & OBJECTIVES</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your brand, deliverables required, target timeline, or role..."
                  className="w-full bg-[#141414] border border-white/10 rounded-xl p-4 text-white font-sans text-sm focus:outline-none focus:border-[#A100FF] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                onMouseEnter={() => setCursorState('OPEN')}
                onMouseLeave={() => setCursorState('NORMAL')}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#A100FF] via-[#7C3AED] to-[#00E5FF] hover:opacity-95 text-white font-display font-bold text-sm tracking-wider uppercase transition-all shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 hover:scale-[1.01]"
              >
                {submitting ? (
                  <span>TRANSMITTING INQUIRY...</span>
                ) : (
                  <>
                    <span>TRANSMIT INQUIRY</span>
                    <Send className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>

              {/* Feedback Alert */}
              {feedback && (
                <div
                  className={`p-4 rounded-2xl border font-mono text-xs flex items-center space-x-2 ${
                    feedback.success
                      ? 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30'
                      : 'bg-red-950/40 text-red-300 border-red-500/30'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{feedback.text}</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
