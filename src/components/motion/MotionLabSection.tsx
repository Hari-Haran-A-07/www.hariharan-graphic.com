import React, { useState } from 'react';
import { Play, Sparkles, Film, ArrowUpRight, Volume2, Activity } from 'lucide-react';
import { motionLabItems } from '@/data/motionData';
import { MotionLabItem, CursorState } from '@/types';

interface MotionLabSectionProps {
  setCursorState: (state: CursorState) => void;
}

export const MotionLabSection: React.FC<MotionLabSectionProps> = ({ setCursorState }) => {
  const [activeItem, setActiveItem] = useState<MotionLabItem>(motionLabItems[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="motion-lab" className="relative py-28 px-6 md:px-12 bg-[#050505] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2 font-mono text-xs text-[#FF4D00] tracking-widest uppercase mb-3">
              <Film className="w-3.5 h-3.5" />
              <span>// EXPERIMENTAL MOTION LAB</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white">
              MOTION LAB
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#A7A7A7] mt-2 max-w-xl">
              Video reels, motion posters, kinetic transitions, rhythm pacing, and AI motion experiments.
            </p>
          </div>

          <div className="flex items-center space-x-3 font-mono text-xs text-[#00E5FF]">
            <Activity className="w-4 h-4 animate-pulse" />
            <span>SOUND-SYNCED VIDEO RHYTHM</span>
          </div>
        </div>

        {/* Cinematic Video Stage Player Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Visual Player Monitor (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0A0A0A] border border-white/15 overflow-hidden flex flex-col justify-between shadow-2xl relative group min-h-[420px]">
            
            {/* Visual Canvas Backdrop */}
            <div
              className={`w-full h-full min-h-[340px] bg-gradient-to-br ${activeItem.posterGradient} p-8 flex flex-col justify-between relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
              
              <div className="flex items-center justify-between z-10">
                <span className="font-mono text-xs text-[#FF4D00] px-3 py-1 rounded-full bg-black/60 border border-[#FF4D00]/30 font-semibold">
                  {activeItem.category} • {activeItem.aspect}
                </span>
                <span className="font-mono text-xs text-white px-3 py-1 rounded-full bg-black/60 border border-white/10">
                  DURATION {activeItem.duration}
                </span>
              </div>

              {/* Center Play Interaction Overlay */}
              <div className="z-10 text-center space-y-4 my-auto">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  onMouseEnter={() => setCursorState('PLAY')}
                  onMouseLeave={() => setCursorState('NORMAL')}
                  className="w-20 h-20 rounded-full bg-white text-black hover:bg-[#FF4D00] hover:text-white transition-all duration-300 flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </button>
                <div className="font-display font-black text-2xl md:text-3xl text-white">
                  {activeItem.title}
                </div>
              </div>

              {/* Sound Wave Frequency Visualizer */}
              <div className="flex items-center justify-between z-10 pt-4 border-t border-white/10">
                <div className="flex items-center space-x-1">
                  {[20, 45, 80, 60, 95, 30, 70, 100, 50, 85, 40, 90, 65, 35].map((h, i) => (
                    <div
                      key={i}
                      className="w-1 bg-[#FF4D00] rounded-full transition-all duration-300"
                      style={{ height: isPlaying ? `${(i % 5 + 2) * 6}px` : '6px' }}
                    />
                  ))}
                </div>
                <span className="font-mono text-[10px] text-[#A7A7A7]">PREMIERE PRO / CAPCUT ENGINE</span>
              </div>
            </div>

            {/* Stage Description & Tools */}
            <div className="p-6 bg-[#0E0E0E] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="font-sans text-xs text-[#A7A7A7] max-w-md">
                {activeItem.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {activeItem.tools.map((t, idx) => (
                  <span key={idx} className="font-mono text-[10px] text-white px-2 py-0.5 rounded bg-white/5 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Playlist & Keyframe Sequences (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="font-mono text-xs text-[#A7A7A7] tracking-widest uppercase">
              // MOTION REEL CATALOG
            </div>

            <div className="space-y-3 flex-1 overflow-y-auto max-h-[500px] pr-1">
              {motionLabItems.map(item => {
                const isSelected = activeItem.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setActiveItem(item);
                      setIsPlaying(true);
                    }}
                    onMouseEnter={() => setCursorState('VIEW')}
                    onMouseLeave={() => setCursorState('NORMAL')}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white/10 border-[#FF4D00]/50 shadow-lg'
                        : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-[#00E5FF]">{item.category}</span>
                      <span className="font-mono text-[10px] text-[#A7A7A7]">{item.duration}</span>
                    </div>

                    <div className="font-display font-bold text-base text-white mt-1">
                      {item.title}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {item.keyframes.map((kf, kIdx) => (
                        <span key={kIdx} className="font-mono text-[9px] text-[#A7A7A7] px-2 py-0.5 rounded bg-black/40">
                          {kf}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
