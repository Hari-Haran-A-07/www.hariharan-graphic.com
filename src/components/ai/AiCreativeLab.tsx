import React, { useState } from 'react';
import { Sparkles, Terminal, Cpu, ArrowRight, Layers, Sliders, Copy, Check } from 'lucide-react';
import { aiWorkflowSteps, aiExplorationShowcases } from '@/data/aiLabData';
import { CursorState } from '@/types';
import { CrystalizedBall, BallPreset } from '@/components/ui/CrystalizedBall';

interface AiCreativeLabProps {
  setCursorState: (state: CursorState) => void;
}

export const AiCreativeLab: React.FC<AiCreativeLabProps> = ({ setCursorState }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeShowcase, setActiveShowcase] = useState(0);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const showcase = aiExplorationShowcases[activeShowcase];

  const getShowcasePreset = (idx: number): { preset: BallPreset; color: string } => {
    switch (idx) {
      case 0:
        return { preset: 'nebula', color: '#9478FF' };
      case 1:
        return { preset: 'aurora', color: '#5CFFC8' };
      case 2:
      default:
        return { preset: 'ember', color: '#FF8A2A' };
    }
  };

  const currentOrbConfig = getShowcasePreset(activeShowcase);

  const copyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <section id="ai-lab" className="relative py-28 px-6 md:px-12 bg-[#000000] border-t border-white/10 overflow-hidden">
      {/* Background Neural Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#A100FF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2 font-mono text-xs text-[#00E5FF] tracking-widest uppercase mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>// GENERATIVE ART DIRECTION</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white">
              AI × DESIGN LAB
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#A7A7A7] mt-2 max-w-xl">
              Pioneering hybrid creative workflows: prompt engineering, generative synthesis, art direction, and artifact-free compositing.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 font-mono text-xs text-[#A7A7A7]">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white">ADOBE FIREFLY</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#00E5FF]">RUNWAY GEN-2</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#A100FF]">KLING AI</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#10A37F]">CHATGPT</span>
          </div>
        </div>

        {/* 6-Stage Workflow Sequence Bar */}
        <div className="space-y-6">
          <div className="font-mono text-xs text-[#A7A7A7] tracking-widest uppercase">
            // 6-STAGE CREATIVE AI PIPELINE
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {aiWorkflowSteps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setCursorState('EXPLORE')}
                  onMouseLeave={() => setCursorState('NORMAL')}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between min-h-[160px] ${
                    isActive
                      ? 'bg-gradient-to-b from-[#A100FF]/20 to-black border-[#A100FF] shadow-xl scale-105'
                      : 'bg-white/5 border-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="flex justify-between items-center font-mono text-xs">
                    <span className="text-[#00E5FF] font-bold">{step.stepNumber}</span>
                    <span className="text-[10px] text-[#A7A7A7]">{step.tool.split(' ')[0]}</span>
                  </div>

                  <div>
                    <div className="font-display font-bold text-sm text-white leading-tight mt-3">
                      {step.title}
                    </div>
                    <p className="font-sans text-[11px] text-[#A7A7A7] mt-1 line-clamp-2">
                      {step.instruction}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Terminal Breakdown */}
          <div className="p-6 md:p-8 rounded-3xl bg-[#0C0C0E] border border-white/10 space-y-4">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-[#00E5FF] flex items-center space-x-2">
                <Terminal className="w-4 h-4" />
                <span>PIPELINE STAGE {aiWorkflowSteps[activeStep].stepNumber}: {aiWorkflowSteps[activeStep].title}</span>
              </span>
              <span className="text-[#A100FF]">TOOL: {aiWorkflowSteps[activeStep].tool}</span>
            </div>

            <p className="font-sans text-sm text-white leading-relaxed">
              {aiWorkflowSteps[activeStep].instruction}
            </p>

            <div className="p-4 rounded-xl bg-black/80 border border-white/10 font-mono text-xs text-[#10B981] space-y-1">
              <div className="text-[10px] text-[#A7A7A7]">// PROMPT & EXECUTION ARTIFACT:</div>
              <div>{aiWorkflowSteps[activeStep].promptSample}</div>
            </div>
          </div>
        </div>

        {/* Interactive Prompt-to-Visual Exploration Studio */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#0F081C] via-[#08080C] to-black border border-white/15 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="font-mono text-xs text-[#00E5FF] uppercase">STUDIO CASE STUDY</div>
              <h3 className="font-display font-black text-2xl md:text-4xl text-white mt-1">
                {showcase.title}
              </h3>
            </div>

            {/* Showcase Selector */}
            <div className="flex items-center space-x-2">
              {aiExplorationShowcases.map((sc, sIdx) => (
                <button
                  key={sc.id}
                  onClick={() => setActiveShowcase(sIdx)}
                  className={`font-mono text-xs px-3 py-1.5 rounded-full transition-colors ${
                    activeShowcase === sIdx
                      ? 'bg-white text-black font-bold'
                      : 'bg-white/5 text-[#A7A7A7] hover:text-white'
                  }`}
                >
                  EXP 0{sIdx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Prompt Console */}
            <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#A100FF]">SYNTHESIS PROMPT PARAMETERS</span>
                    <button
                      onClick={() => copyPrompt(showcase.prompt)}
                      className="font-mono text-[10px] text-white flex items-center space-x-1 hover:text-[#00E5FF]"
                    >
                      {copiedPrompt ? <Check className="w-3 h-3 text-[#10B981]" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedPrompt ? 'COPIED' : 'COPY PROMPT'}</span>
                    </button>
                  </div>

                  <div className="font-mono text-xs text-[#F5F5F5] leading-relaxed p-3 bg-white/5 rounded-xl border border-white/5">
                    "{showcase.prompt}"
                  </div>
                </div>

                <p className="font-sans text-xs sm:text-sm text-[#A7A7A7] leading-relaxed">
                  {showcase.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {showcase.tools.map((t, idx) => (
                  <span key={idx} className="font-mono text-[10px] text-white px-3 py-1 rounded-full bg-white/10 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive WebGL Generative Neural Stage */}
            <div
              className="lg:col-span-6 rounded-3xl bg-black border border-white/15 p-6 flex flex-col justify-between min-h-[360px] relative overflow-hidden group cursor-pointer"
              onMouseEnter={() => setCursorState('EXPLORE')}
              onMouseLeave={() => setCursorState('NORMAL')}
            >
              {/* Center WebGL Crystal Ball */}
              <div className="absolute inset-0 z-0">
                <CrystalizedBall
                  preset={currentOrbConfig.preset}
                  color={currentOrbConfig.color}
                  size={0.7}
                  crackle={0.8}
                  fill={0.5}
                  interactive={true}
                  hoverStrength={0.75}
                  glow={1.0}
                  flares={0.6}
                  sparks={0.5}
                />
              </div>

              <div className="flex items-center justify-between z-10 pointer-events-none">
                <span className="font-mono text-xs text-[#00E5FF] px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#00E5FF]/30">
                  {showcase.category}
                </span>
                <span className="font-mono text-[10px] text-[#10B981] px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#10B981]/30">
                  GRADE A+ ART DIRECTION
                </span>
              </div>

              <div className="z-10 text-center pointer-events-none my-auto">
                <div className="font-display font-black text-3xl tracking-tight text-white drop-shadow-md">
                  NEURAL SYNTHESIS CORE
                </div>
                <div className="font-mono text-xs text-[#A7A7A7] mt-1">
                  Touch or drag cursor to manipulate latent energy field
                </div>
              </div>

              <div className="flex items-center justify-between z-10 border-t border-white/10 pt-3 font-mono text-[10px] text-[#A7A7A7] bg-black/40 backdrop-blur-xs px-2 rounded-lg pointer-events-none">
                <span>PRESET: {currentOrbConfig.preset.toUpperCase()}</span>
                <span className="text-white">COMMERCIAL READY</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
