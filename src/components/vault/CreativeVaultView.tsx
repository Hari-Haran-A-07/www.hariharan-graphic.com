import React, { useState, useMemo } from 'react';
import {
  FolderLock, Search, Filter, ArrowUpRight, Grid, LayoutGrid,
  Sparkles, ExternalLink, Download, FileText, Image as ImageIcon, Video, X
} from 'lucide-react';
import { VaultAsset, CursorState } from '@/types';

interface CreativeVaultViewProps {
  assets: VaultAsset[];
  onClose: () => void;
  setCursorState: (state: CursorState) => void;
}

export const CreativeVaultView: React.FC<CreativeVaultViewProps> = ({
  assets,
  onClose,
  setCursorState,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('ALL WORK');
  const [activeFormat, setActiveFormat] = useState<string>('ALL');
  const [selectedAsset, setSelectedAsset] = useState<VaultAsset | null>(null);

  const categories = [
    'ALL WORK',
    'GRAPHIC DESIGN',
    'SOCIAL MEDIA',
    'BRANDING',
    'UI/UX',
    'VIDEO',
    'MOTION',
    'PRESENTATIONS',
    'AI EXPERIMENTS',
    'PERSONAL EXPERIMENTS',
  ];

  const formats = ['ALL', 'CANVA', 'DRIVE', 'FIGMA', 'VIDEO', 'IMAGE'];

  const filteredAssets = useMemo(() => {
    return assets.filter(item => {
      const matchCategory = activeCategory === 'ALL WORK' || item.category === activeCategory;
      const matchFormat = activeFormat === 'ALL' || item.format === activeFormat;
      const matchQuery =
        searchQuery.trim() === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchFormat && matchQuery;
    });
  }, [assets, activeCategory, activeFormat, searchQuery]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#000000] text-[#F5F5F5] flex flex-col justify-start animate-in fade-in duration-300">
      
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 bg-[#080808]/95 backdrop-blur-xl border-b border-white/10 px-6 md:px-12 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-3.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A100FF] to-[#7C3AED] flex items-center justify-center text-white">
            <FolderLock className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-display font-black text-xl text-white">
              CREATIVE VAULT
            </h2>
            <p className="font-mono text-xs text-[#00E5FF]">
              Central Digital Asset Library • {filteredAssets.length} Assets Active
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs border border-white/15 transition-all"
        >
          <span>CLOSE VAULT [ESC]</span>
          <X className="w-4 h-4" />
        </button>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto w-full px-6 md:px-12 py-12 space-y-10">
        
        {/* Vault Banner */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-950/30 via-[#101010] to-[#0A0A0A] border border-purple-500/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="font-mono text-xs text-[#A100FF] tracking-widest uppercase flex items-center space-x-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OFFICIAL WORK REPOSITORIES</span>
            </div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
              Canva & Google Drive Unified Archive
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#A7A7A7] max-w-2xl">
              Direct access to public vector assets, social carousels, video reels, presentation decks, and UI design kits.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="https://www.canva.com/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-3 rounded-full bg-[#00C4CC] text-black font-display font-bold text-xs hover:scale-105 transition-transform"
            >
              <span>CANVA REPOSITORY</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="https://drive.google.com/drive/folders/1E5QzQExQ-VeI8l4lAMfZomgqZhzWsFBd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-3 rounded-full bg-[#FF4D00] text-white font-display font-bold text-xs hover:scale-105 transition-transform"
            >
              <span>GOOGLE DRIVE FOLDER</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Search & Filters Controls */}
        <div className="space-y-4">
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6F6F6F]" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search across carousels, brand books, pitch decks, Figma kits, video reels, or tools..."
              className="w-full bg-[#0E0E0E] border border-white/10 rounded-2xl pl-12 pr-4 py-4 font-sans text-sm text-white placeholder-[#6F6F6F] focus:outline-none focus:border-[#A100FF] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-[#A7A7A7] hover:text-white"
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Categories Chips */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-white text-black font-bold shadow-md scale-105'
                    : 'bg-white/5 hover:bg-white/10 text-[#A7A7A7] hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Format Chips */}
          <div className="flex items-center space-x-2 overflow-x-auto">
            <span className="font-mono text-[10px] text-[#6F6F6F] uppercase tracking-wider pr-2">FORMAT:</span>
            {formats.map((fmt, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFormat(fmt)}
                className={`font-mono text-[11px] px-3 py-1 rounded-lg transition-colors ${
                  activeFormat === fmt
                    ? 'bg-[#A100FF] text-white font-semibold'
                    : 'bg-white/5 text-[#A7A7A7] hover:text-white'
                }`}
              >
                {fmt}
              </button>
            ))}
          </div>

        </div>

        {/* Vault Asset Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssets.map(asset => (
            <div
              key={asset.id}
              onClick={() => setSelectedAsset(asset)}
              onMouseEnter={() => setCursorState('VIEW')}
              onMouseLeave={() => setCursorState('NORMAL')}
              className="p-6 rounded-3xl bg-[#0A0A0A] border border-white/10 hover:border-[#A100FF]/40 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between space-y-6 cursor-pointer group"
            >
              {/* Asset Header Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#00E5FF] px-2.5 py-0.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 uppercase">
                    {asset.format}
                  </span>
                  <span className="font-mono text-xs text-[#6F6F6F]">{asset.year}</span>
                </div>

                <h4 className="font-display font-bold text-xl text-white group-hover:text-[#A100FF] transition-colors leading-snug">
                  {asset.title}
                </h4>

                <p className="font-sans text-xs text-[#A7A7A7] leading-relaxed line-clamp-2">
                  {asset.description}
                </p>
              </div>

              {/* Tags & Dimensions */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                {asset.dimensions && (
                  <div className="font-mono text-[10px] text-[#6F6F6F]">
                    DIMENSIONS: {asset.dimensions}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {asset.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[9px] text-[#A7A7A7] px-2 py-0.5 rounded bg-white/5 border border-white/5"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                {/* Direct Action Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <span className="font-mono text-xs text-white group-hover:text-[#00E5FF] flex items-center space-x-1">
                    <span>INSPECT ASSET</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>

                  <div className="flex items-center space-x-2">
                    {asset.canvaUrl && (
                      <a
                        href={asset.canvaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="px-2.5 py-1 rounded bg-[#00C4CC]/10 text-[#00C4CC] font-mono text-[10px] hover:bg-[#00C4CC]/20"
                      >
                        CANVA
                      </a>
                    )}
                    {asset.driveUrl && (
                      <a
                        href={asset.driveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="px-2.5 py-1 rounded bg-[#FF4D00]/10 text-[#FFB088] font-mono text-[10px] hover:bg-[#FF4D00]/20"
                      >
                        DRIVE
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAssets.length === 0 && (
          <div className="py-20 text-center space-y-3">
            <p className="font-display font-bold text-lg text-white">No assets matched your search filter.</p>
            <button
              onClick={() => {
                setActiveCategory('ALL WORK');
                setActiveFormat('ALL');
                setSearchQuery('');
              }}
              className="font-mono text-xs text-[#00E5FF] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

      </main>

      {/* Asset Detail Lightbox Modal */}
      {selectedAsset && (
        <div className="fixed inset-0 z-60 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#0A0A0A] border border-white/15 rounded-3xl p-8 space-y-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-xs text-[#A100FF] uppercase">{selectedAsset.category} • {selectedAsset.format}</span>
                <h3 className="font-display font-bold text-2xl text-white mt-1">{selectedAsset.title}</h3>
              </div>
              <button
                onClick={() => setSelectedAsset(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="font-sans text-sm text-[#A7A7A7] leading-relaxed">
              {selectedAsset.description}
            </p>

            <div className="p-4 rounded-2xl bg-[#111111] space-y-2 font-mono text-xs text-[#A7A7A7]">
              <div>YEAR: {selectedAsset.year}</div>
              <div>DIMENSIONS: {selectedAsset.dimensions || 'Dynamic / Multi-Format'}</div>
              <div>TOOLS: {selectedAsset.tools.join(', ')}</div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {selectedAsset.canvaUrl && (
                <a
                  href={selectedAsset.canvaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-5 py-3 rounded-full bg-[#00C4CC] text-black font-display font-bold text-xs hover:scale-105 transition-transform"
                >
                  <span>OPEN IN CANVA</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {selectedAsset.driveUrl && (
                <a
                  href={selectedAsset.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-5 py-3 rounded-full bg-[#FF4D00] text-white font-display font-bold text-xs hover:scale-105 transition-transform"
                >
                  <span>OPEN ON GOOGLE DRIVE</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {selectedAsset.figmaUrl && (
                <a
                  href={selectedAsset.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-5 py-3 rounded-full bg-white/10 text-white font-mono text-xs border border-white/20 hover:bg-white/20"
                >
                  <span>OPEN FIGMA FILE</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
