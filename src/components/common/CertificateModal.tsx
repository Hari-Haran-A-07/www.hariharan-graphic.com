import React from 'react';
import { X, Award, ExternalLink, CheckCircle2 } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  certUrl: string | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, certUrl, onClose }) => {
  if (!isOpen || !certUrl) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="relative w-full max-w-3xl bg-[#0A0A0A] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="p-5 md:px-6 bg-[#111111] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-white">
                VERIFIED CREDENTIAL PREVIEW
              </h4>
              <p className="font-mono text-xs text-[#10B981] flex items-center space-x-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Dot Com Infoway Ltd. • Official Certificate</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Image Frame */}
        <div className="p-6 flex flex-col items-center justify-center bg-black/50 overflow-y-auto max-h-[75vh]">
          <img
            src={certUrl}
            alt="Verified Certificate"
            className="max-h-[60vh] w-auto rounded-xl border border-white/15 shadow-2xl object-contain"
          />

          <div className="mt-4 flex items-center space-x-3">
            <a
              href={certUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 font-mono text-xs text-[#00E5FF] hover:underline"
            >
              <span>Open Full Resolution Image</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
