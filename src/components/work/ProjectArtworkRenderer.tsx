import {
  Layers, Sparkles, Play, Globe, ShieldCheck, ArrowRight, Activity, Smartphone, Eye,
  Flame, Gauge, Coffee, Utensils, Construction, Trophy, Terminal, Code2, Radio, ShoppingBag, Cpu, CheckCircle2
} from 'lucide-react';
import { ProjectItem } from '@/types';

interface ProjectArtworkRendererProps {
  project: ProjectItem;
}

export const ProjectArtworkRenderer: React.FC<ProjectArtworkRendererProps> = ({ project }) => {
  switch (project.id) {
    case 'social-media-strategy-hub':
      return (
        <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#120D1D] via-[#0A0A0A] to-[#050505] p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
          
          {/* Top Carousel Slide Miniatures */}
          <div className="flex items-center space-x-3 z-10 overflow-x-auto pb-2">
            {[
              { title: "THE HOOK", tag: "SLIDE 01", col: "border-[#A100FF]" },
              { title: "THE PROBLEM", tag: "SLIDE 02", col: "border-white/20" },
              { title: "THE MATRIX", tag: "SLIDE 03", col: "border-white/20" },
              { title: "CASE PROOF", tag: "SLIDE 04", col: "border-[#00E5FF]" },
            ].map((slide, i) => (
              <div
                key={i}
                className={`w-28 h-36 shrink-0 rounded-xl bg-black/60 border ${slide.col} p-2.5 flex flex-col justify-between shadow-xl`}
              >
                <div className="font-mono text-[8px] text-[#A7A7A7]">{slide.tag}</div>
                <div className="font-display font-bold text-xs text-white leading-tight">{slide.title}</div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#A100FF]" style={{ width: `${(i + 1) * 25}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Center Graphic Specimen */}
          <div className="z-10 py-4">
            <div className="font-mono text-[10px] text-[#A100FF] tracking-widest">
              ASPECT RATIOS: 1080×1350 (4:5) • 1080×1080 (1:1) • 1080×1920 (9:16)
            </div>
            <div className="font-display font-black text-2xl text-white mt-1">
              HIGH-RETENTION CAROUSEL & REEL MATRIX
            </div>
          </div>

          {/* Bottom Badges */}
          <div className="flex items-center justify-between z-10 font-mono text-[10px] text-[#A7A7A7] border-t border-white/10 pt-3">
            <span className="text-[#00E5FF]">CANVA PRO + FIGMA SYNC</span>
            <span className="text-[#10B981]">+22% CTR ENGAGEMENT</span>
          </div>
        </div>
      );

    case 'kieyverse-brand-portal':
      return (
        <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#120824] via-[#08080C] to-black p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C3AED]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Corporate Wordmark Geometry */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-[#7C3AED] flex items-center justify-center font-display font-black text-sm text-white">
                K
              </div>
              <span className="font-display font-bold text-sm tracking-wider text-white">KIEYVERSE</span>
            </div>
            <span className="font-mono text-[10px] text-[#A7A7A7] px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
              BRAND MANUAL 2026
            </span>
          </div>

          {/* Print & Web Mockup Overlay */}
          <div className="z-10 py-4 grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-black/70 border border-white/15 flex flex-col justify-between">
              <span className="font-mono text-[9px] text-[#7C3AED]">LOGOMARK</span>
              <div className="w-8 h-8 rounded-full border-2 border-[#7C3AED] mx-auto my-1 flex items-center justify-center font-black text-xs text-white">
                KV
              </div>
              <span className="font-mono text-[8px] text-center text-[#6F6F6F]">GOLDEN RATIO</span>
            </div>
            <div className="p-3 rounded-xl bg-black/70 border border-white/15 flex flex-col justify-between">
              <span className="font-mono text-[9px] text-[#00E5FF]">PRINT CMYK</span>
              <div className="space-y-1 my-1">
                <div className="h-1.5 w-full bg-[#7C3AED] rounded" />
                <div className="h-1.5 w-2/3 bg-[#00E5FF] rounded" />
                <div className="h-1.5 w-4/5 bg-white/40 rounded" />
              </div>
              <span className="font-mono text-[8px] text-center text-[#6F6F6F]">BROCHURES</span>
            </div>
            <div className="p-3 rounded-xl bg-black/70 border border-white/15 flex flex-col justify-between">
              <span className="font-mono text-[9px] text-[#10B981]">WEB PORTAL</span>
              <div className="font-mono text-[10px] text-white text-center font-bold">28% FASTER</div>
              <span className="font-mono text-[8px] text-center text-[#6F6F6F]">REACT + SEO</span>
            </div>
          </div>

          <div className="flex items-center justify-between z-10 font-mono text-[10px] text-[#A7A7A7] border-t border-white/10 pt-3">
            <span>CMYK PRINT + DIGITAL BANNERS</span>
            <span className="text-[#00E5FF]">PRODUCTION PLATFORM</span>
          </div>
        </div>
      );

    case 'sambaleaf-cloud-kitchen':
      return (
        <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#240A00] via-[#100502] to-black p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-60 h-60 bg-[#FF4D00]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between z-10">
            <span className="font-display font-bold text-sm text-[#FF4D00] flex items-center space-x-1.5">
              <span>🌿 SAMBALEAF GOURMET</span>
            </span>
            <span className="font-mono text-[10px] text-[#F59E0B] px-2 py-0.5 rounded bg-[#F59E0B]/10 border border-[#F59E0B]/20">
              CULINARY BRANDING
            </span>
          </div>

          {/* Food Presentation UI Frame */}
          <div className="z-10 p-4 rounded-2xl bg-black/60 border border-[#FF4D00]/20 my-2 space-y-2.5">
            <div className="flex justify-between items-center">
              <div className="font-display font-bold text-base text-white">ROYAL BANANA LEAF MEAL</div>
              <div className="font-mono text-xs text-[#FF4D00] font-bold">₹349</div>
            </div>
            <p className="font-sans text-[11px] text-[#A7A7A7]">
              Sensory brand packaging, tamper-proof delivery boxes, and 3-step rapid checkout UI.
            </p>
            <div className="flex items-center space-x-2 pt-1 font-mono text-[9px] text-[#10B981]">
              <span>★ 4.9 RATED PACKAGING</span>
              <span>•</span>
              <span>100% VECTOR DIE-LINES</span>
            </div>
          </div>

          <div className="flex items-center justify-between z-10 font-mono text-[10px] text-[#A7A7A7] border-t border-white/10 pt-3">
            <span>PACKAGING • QR MENUS • APP UI</span>
            <span className="text-[#FF4D00]">CANVA & FIGMA</span>
          </div>
        </div>
      );

    case 'luxury-raw-visuals':
      return (
        <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#111111] via-[#050505] to-black p-6 relative overflow-hidden flex flex-col justify-between border border-white/5">
          <div className="flex items-center justify-between z-10">
            <span className="font-display font-black tracking-[0.25em] text-xs text-white">LUXURY.RAW</span>
            <span className="font-mono text-[10px] text-[#A7A7A7]">HAUTE HORLOGERIE</span>
          </div>

          {/* Luxury Product Stage */}
          <div className="z-10 my-4 text-center py-6 border-y border-white/10 relative">
            <div className="font-display font-black text-4xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-[#6F6F6F]">
              CHRONO TITANIUM
            </div>
            <div className="font-mono text-xs text-[#A7A7A7] tracking-widest mt-1">
              $4,250 USD • LIMITED ATELIER EDITION
            </div>
          </div>

          <div className="flex items-center justify-between z-10 font-mono text-[10px] text-[#A7A7A7]">
            <span className="text-white">EDITORIAL DARK MODE</span>
            <span className="text-[#00E5FF]">SUB-20MS CHECKOUT</span>
          </div>
        </div>
      );

    case 'hmd-hire-my-driver':
      return (
        <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#00171F] via-[#000B0F] to-black p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-2 font-display font-bold text-sm text-white">
              <Smartphone className="w-4 h-4 text-[#00E5FF]" />
              <span>HMD MOBILITY</span>
            </div>
            <span className="font-mono text-[10px] text-[#10B981] flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>POLICE VERIFIED CHAUFFEURS</span>
            </span>
          </div>

          {/* Chauffeur Card Prototype */}
          <div className="z-10 p-3.5 rounded-2xl bg-black/70 border border-[#00E5FF]/30 my-2 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-display font-bold text-sm text-white">Karthik R. (Chauffeur)</div>
                <div className="font-mono text-[10px] text-[#A7A7A7]">12 Yrs Exp • 4.9 ★ (420 Trips)</div>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] flex items-center justify-center font-bold text-xs">
                ETA 4m
              </div>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-[#00E5FF] w-3/4" />
            </div>
          </div>

          <div className="flex items-center justify-between z-10 font-mono text-[10px] text-[#A7A7A7] border-t border-white/10 pt-3">
            <span>FIGMA PROTOTYPE + MERN</span>
            <span className="text-[#00E5FF]">+30% WORKFLOW SPEED</span>
          </div>
        </div>
      );

    case 'v2v-telemetry-dashboard':
      return (
        <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#1C0800] via-[#0A0502] to-black p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between z-10">
            <span className="font-mono text-xs text-[#FF4D00] flex items-center space-x-1.5">
              <Activity className="w-3.5 h-3.5" />
              <span>V2V RADAR TELEMETRY</span>
            </span>
            <span className="font-mono text-[10px] text-[#00E5FF]">&lt;5MS LATENCY</span>
          </div>

          {/* Radar Screen Visual */}
          <div className="z-10 relative flex items-center justify-center py-6">
            <div className="w-32 h-32 rounded-full border border-[#FF4D00]/40 flex items-center justify-center relative">
              <div className="w-20 h-20 rounded-full border border-[#00E5FF]/40 animate-ping opacity-25" />
              <div className="w-2 h-2 rounded-full bg-[#FF4D00]" />
              <div className="absolute top-4 right-6 w-2 h-2 rounded-full bg-[#00E5FF]" />
              <div className="absolute bottom-6 left-8 w-2 h-2 rounded-full bg-[#00E5FF]" />
            </div>
          </div>

          <div className="flex items-center justify-between z-10 font-mono text-[10px] text-[#A7A7A7] border-t border-white/10 pt-3">
            <span>SOCKET TELEMETRY + HUD</span>
            <span className="text-[#FF4D00]">COLLISION WARNING</span>
          </div>
        </div>
      );

    case 'tech-lms-platform':
      return (
        <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#140A26] via-[#090514] to-black p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between z-10">
            <span className="font-display font-bold text-sm text-white">TECH LMS ENTERPRISE</span>
            <span className="font-mono text-[10px] text-[#10B981] px-2 py-0.5 rounded bg-[#10B981]/10 border border-[#10B981]/20">
              KYC VERIFIED &lt;2s
            </span>
          </div>

          <div className="z-10 p-3.5 rounded-2xl bg-black/60 border border-purple-500/20 my-2 space-y-2">
            <div className="font-display font-bold text-xs text-white">ADVANCED GENERATIVE AI PIPELINES</div>
            <div className="flex justify-between font-mono text-[10px] text-[#A7A7A7]">
              <span>Progress: 88%</span>
              <span className="text-[#A100FF]">Verified Certificate</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#A100FF] to-[#00E5FF] w-[88%]" />
            </div>
          </div>

          <div className="flex items-center justify-between z-10 font-mono text-[10px] text-[#A7A7A7] border-t border-white/10 pt-3">
            <span>SPRING BOOT + REACT + MONGODB</span>
            <span className="text-[#A100FF]">88% TEST COVERAGE</span>
          </div>
        </div>
      );

    case 'motion-reels-visuals-2026':
      return (
        <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#240A00] via-[#0F0400] to-black p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between z-10">
            <span className="font-display font-bold text-sm text-[#FF4D00] flex items-center space-x-1.5">
              <Play className="w-4 h-4 fill-current" />
              <span>MOTION REEL 2026</span>
            </span>
            <span className="font-mono text-[10px] text-white px-2 py-0.5 rounded bg-white/10">
              9:16 VERTICAL
            </span>
          </div>

          {/* Sound Wave Beat Pacing */}
          <div className="z-10 py-4 flex items-center justify-center space-x-1.5">
            {[40, 70, 100, 45, 90, 60, 85, 30, 95, 50, 80, 100, 35, 75].map((h, i) => (
              <div
                key={i}
                className="w-1.5 bg-gradient-to-t from-[#FF4D00] to-[#FFB088] rounded-full"
                style={{ height: `${h * 0.5}px` }}
              />
            ))}
          </div>

          <div className="flex items-center justify-between z-10 font-mono text-[10px] text-[#A7A7A7] border-t border-white/10 pt-3">
            <span>PREMIERE + CAPCUT + AE</span>
            <span className="text-[#FF4D00]">SOUND-SYNCED PACING</span>
          </div>
        </div>
      );

    case 'ai-creative-explorations':
      return (
        <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#061B24] via-[#030D12] to-black p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="flex items-center justify-between z-10">
            <span className="font-mono text-xs text-[#00E5FF] flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI × ART DIRECTION</span>
            </span>
            <span className="font-mono text-[10px] text-[#A100FF]">FIREFLY + RUNWAY + KLING</span>
          </div>

          <div className="z-10 p-3 rounded-xl bg-black/70 border border-[#00E5FF]/20 my-2">
            <div className="font-mono text-[9px] text-[#A7A7A7] leading-relaxed">
              PROMPT: "biomorphic obsidian structure, glowing violet core, octane render, 8k --ar 16:9"
            </div>
          </div>

          <div className="flex items-center justify-between z-10 font-mono text-[10px] text-[#A7A7A7] border-t border-white/10 pt-3">
            <span>PROMPT ENGINEERING + RETOUCHING</span>
            <span className="text-[#00E5FF]">ZERO ARTIFACTING</span>
          </div>
        </div>
      );

    case 'ak-racing-motorsport':
      return (
        <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#1C0505] via-[#0D0202] to-black p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-72 h-72 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Racing Header */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              <span className="font-display font-black text-sm tracking-widest text-red-500 flex items-center space-x-1">
                <Flame className="w-4 h-4 fill-current text-red-500 animate-pulse" />
                <span>AK RACING // LE MANS 499P</span>
              </span>
            </div>
            <span className="font-mono text-[10px] text-red-400 px-2.5 py-1 rounded-full bg-red-950/80 border border-red-500/40">
              #50 / #62 HYPERCAR
            </span>
          </div>

          {/* Center Speedometer & Telemetry Stage */}
          <div className="z-10 py-2 grid grid-cols-3 gap-3 my-auto">
            <div className="p-3 rounded-2xl bg-black/80 border border-red-500/20 flex flex-col justify-between text-center">
              <span className="font-mono text-[9px] text-[#A7A7A7]">VELOCITY</span>
              <div className="font-display font-black text-2xl text-white tracking-tighter">
                342 <span className="text-xs text-red-400 font-normal">KM/H</span>
              </div>
              <span className="font-mono text-[8px] text-red-400">MAX STRAIGHT</span>
            </div>

            <div className="p-3 rounded-2xl bg-black/80 border border-red-500/30 flex flex-col justify-between text-center shadow-lg shadow-red-950/40">
              <span className="font-mono text-[9px] text-red-400">GEAR / TACHO</span>
              <div className="font-display font-black text-3xl text-red-500">6</div>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-400 to-red-500 h-full w-[88%]" />
              </div>
              <span className="font-mono text-[8px] text-[#A7A7A7]">8,500 RPM</span>
            </div>

            <div className="p-3 rounded-2xl bg-black/80 border border-red-500/20 flex flex-col justify-between text-center">
              <span className="font-mono text-[9px] text-[#A7A7A7]">TELEMETRY</span>
              <div className="font-mono font-bold text-xs text-emerald-400">V6 HYBRID</div>
              <span className="font-mono text-[8px] text-cyan-400">3D LIVERY SYNC</span>
            </div>
          </div>

          {/* Bottom Audio Dyno & Stack Bar */}
          <div className="flex items-center justify-between z-10 font-mono text-[10px] text-[#A7A7A7] border-t border-red-950/60 pt-3">
            <span className="text-red-400 flex items-center space-x-1">
              <Gauge className="w-3.5 h-3.5" />
              <span>REAL-TIME FIRE TELEMETRY</span>
            </span>
            <span className="text-emerald-400">WEBGL + AUDIO SYNTH</span>
          </div>
        </div>
      );

    case 'hot-cool-shake':
      return (
        <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#261305] via-[#120802] to-black p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Beverage Lab Header */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="font-display font-black text-sm tracking-wider text-amber-400 flex items-center space-x-1.5">
                <Coffee className="w-4 h-4 text-amber-400" />
                <span>HOT COOL SHAKE // BEVERAGE LAB</span>
              </span>
            </div>
            <span className="font-mono text-[10px] text-amber-300 px-2.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/40">
              VIRTUAL EXTRACTION
            </span>
          </div>

          {/* Center Chamber & Temperature Gauges */}
          <div className="z-10 py-2 grid grid-cols-3 gap-3 my-auto">
            <div className="p-3 rounded-2xl bg-black/80 border border-amber-500/20 flex flex-col justify-between text-center">
              <span className="font-mono text-[9px] text-[#A7A7A7]">COLD BREW</span>
              <div className="font-display font-black text-xl text-cyan-400">-5°C</div>
              <span className="font-mono text-[8px] text-cyan-300">NITRO CHILL</span>
            </div>

            <div className="p-3 rounded-2xl bg-black/80 border border-amber-500/30 flex flex-col justify-between text-center shadow-lg shadow-amber-950/50">
              <span className="font-mono text-[9px] text-amber-400">HOT ESPRESSO</span>
              <div className="font-display font-black text-xl text-amber-500">92°C</div>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-400 to-red-500 h-full w-[92%]" />
              </div>
              <span className="font-mono text-[8px] text-[#A7A7A7]">GOLD EXTRACTION</span>
            </div>

            <div className="p-3 rounded-2xl bg-black/80 border border-amber-500/20 flex flex-col justify-between text-center">
              <span className="font-mono text-[9px] text-[#A7A7A7]">DISPATCH</span>
              <div className="font-mono font-bold text-xs text-emerald-400">CLIMATE SYNC</div>
              <span className="font-mono text-[8px] text-amber-300">MERN ENGINE</span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between z-10 font-mono text-[10px] text-[#A7A7A7] border-t border-amber-950/60 pt-3">
            <span className="text-amber-400">MERN STACK + REAL-TIME LAB</span>
            <span className="text-emerald-400">LIVE AT HOTCOOLSHAKE-IN.VERCEL.APP</span>
          </div>
        </div>
      );

    case 'friends-fried-chicken':
      return (
        <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#2E1202] via-[#140601] to-black p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-72 h-72 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Food Tech Header */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
              <span className="font-display font-black text-sm tracking-wider text-orange-400 flex items-center space-x-1.5">
                <Utensils className="w-4 h-4 text-orange-500" />
                <span>FFC // FRIENDS FRIED CHICKEN</span>
              </span>
            </div>
            <span className="font-mono text-[10px] text-amber-300 px-2.5 py-1 rounded-full bg-orange-950/80 border border-orange-500/40">
              FOOD-TECH CUSTOMIZER
            </span>
          </div>

          {/* Center Crunch Acoustics & Oil Bath Telemetry */}
          <div className="z-10 py-2 grid grid-cols-3 gap-3 my-auto">
            <div className="p-3 rounded-2xl bg-black/80 border border-orange-500/20 flex flex-col justify-between text-center">
              <span className="font-mono text-[9px] text-[#A7A7A7]">CRISPY INDEX</span>
              <div className="font-display font-black text-2xl text-amber-400">98.4%</div>
              <span className="font-mono text-[8px] text-emerald-400">CRUNCH ACOUSTICS</span>
            </div>

            <div className="p-3 rounded-2xl bg-black/80 border border-orange-500/30 flex flex-col justify-between text-center shadow-lg shadow-orange-950/50">
              <span className="font-mono text-[9px] text-orange-400">FRYER QUEUE</span>
              <div className="font-display font-black text-xl text-orange-500">375°F</div>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-full w-[94%]" />
              </div>
              <span className="font-mono text-[8px] text-[#A7A7A7]">ACTIVE KITCHEN</span>
            </div>

            <div className="p-3 rounded-2xl bg-black/80 border border-orange-500/20 flex flex-col justify-between text-center">
              <span className="font-mono text-[9px] text-[#A7A7A7]">CUSTOMIZER</span>
              <div className="font-mono font-bold text-xs text-amber-300">SPICE MATRIX</div>
              <span className="font-mono text-[8px] text-orange-400">3D BUILDER</span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between z-10 font-mono text-[10px] text-[#A7A7A7] border-t border-orange-950/60 pt-3">
            <span className="text-orange-400">YOU CREATE IT. WE FRY IT.</span>
            <span className="text-emerald-400">LIVE AT FFC-INDOL.VERCEL.APP</span>
          </div>
        </div>
      );

    case 'sri-neya-crane':
      return (
        <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#262002] via-[#120F01] to-black p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Industrial Header */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-ping" />
              <span className="font-display font-black text-sm tracking-wider text-yellow-400 flex items-center space-x-1.5">
                <Construction className="w-4 h-4 text-yellow-400" />
                <span>SRI NEYA CRANE SERVICES // SNC</span>
              </span>
            </div>
            <span className="font-mono text-[10px] text-yellow-300 px-2.5 py-1 rounded-full bg-yellow-950/80 border border-yellow-500/40">
              HEAVY RIGGING 250T
            </span>
          </div>

          {/* Center Crane Boom & Capacity Gauges */}
          <div className="z-10 py-2 grid grid-cols-3 gap-3 my-auto">
            <div className="p-3 rounded-2xl bg-black/80 border border-yellow-500/20 flex flex-col justify-between text-center">
              <span className="font-mono text-[9px] text-[#A7A7A7]">RIGGING TONNAGE</span>
              <div className="font-display font-black text-2xl text-yellow-400">250T</div>
              <span className="font-mono text-[8px] text-amber-400">HYDRAULIC CRANES</span>
            </div>

            <div className="p-3 rounded-2xl bg-black/80 border border-yellow-500/30 flex flex-col justify-between text-center shadow-lg shadow-yellow-950/50">
              <span className="font-mono text-[9px] text-yellow-400">BOOM EXTENSION</span>
              <div className="font-display font-black text-xl text-yellow-500">72M</div>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-400 to-yellow-300 h-full w-[85%]" />
              </div>
              <span className="font-mono text-[8px] text-[#A7A7A7]">45° BOOM RADIUS</span>
            </div>

            <div className="p-3 rounded-2xl bg-black/80 border border-yellow-500/20 flex flex-col justify-between text-center">
              <span className="font-mono text-[9px] text-[#A7A7A7]">DISPATCH</span>
              <div className="font-mono font-bold text-xs text-emerald-400">24/7 HIGHWAY</div>
              <span className="font-mono text-[8px] text-yellow-300">BREAKDOWN GPS</span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between z-10 font-mono text-[10px] text-[#A7A7A7] border-t border-yellow-950/60 pt-3">
            <span className="text-yellow-400">INDUSTRIAL MOBILE CRANES & RECOVERY</span>
            <span className="text-emerald-400">LIVE AT WWWSNCIN.VERCEL.APP</span>
          </div>
        </div>
      );

    case 'ipl-mega-auction-2026':
      return (
        <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#081738] via-[#040C1D] to-black p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top IPL Header */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-ping" />
              <span className="font-display font-black text-sm tracking-wider text-yellow-400 flex items-center space-x-1.5">
                <Trophy className="w-4 h-4 text-yellow-400" />
                <span>IPL MEGA AUCTION 2026 // LIVE</span>
              </span>
            </div>
            <span className="font-mono text-[10px] text-yellow-300 px-2.5 py-1 rounded-full bg-blue-950/80 border border-yellow-500/40">
              MARQUEE SET #01
            </span>
          </div>

          {/* Center Live Bidding Paddle & Hammer Stage */}
          <div className="z-10 py-2 grid grid-cols-3 gap-3 my-auto">
            <div className="p-3 rounded-2xl bg-black/80 border border-yellow-500/20 flex flex-col justify-between text-center">
              <span className="font-mono text-[9px] text-[#A7A7A7]">CURRENT BID</span>
              <div className="font-display font-black text-2xl text-yellow-400">₹18.50 CR</div>
              <span className="font-mono text-[8px] text-cyan-400">BIDDER: CSK</span>
            </div>

            <div className="p-3 rounded-2xl bg-black/80 border border-blue-500/30 flex flex-col justify-between text-center shadow-lg shadow-blue-950/50">
              <span className="font-mono text-[9px] text-cyan-400">HAMMER CLOCK</span>
              <div className="font-display font-black text-xl text-white">00:04</div>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-400 to-yellow-400 h-full w-[75%]" />
              </div>
              <span className="font-mono text-[8px] text-amber-300">GOING TWICE...</span>
            </div>

            <div className="p-3 rounded-2xl bg-black/80 border border-yellow-500/20 flex flex-col justify-between text-center">
              <span className="font-mono text-[9px] text-[#A7A7A7]">TEAM PURSE</span>
              <div className="font-mono font-bold text-xs text-emerald-400">₹32.4 CR REM</div>
              <span className="font-mono text-[8px] text-yellow-300">2 RTM CARDS</span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between z-10 font-mono text-[10px] text-[#A7A7A7] border-t border-blue-950/60 pt-3">
            <span className="text-yellow-400">REAL-TIME BIDDING SIMULATOR & PURSE BALANCES</span>
            <span className="text-emerald-400">GITHUB PAGES LIVE</span>
          </div>
        </div>
      );

    case 'novitas-2k26-hong-kong':
      return (
        <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#1C052B] via-[#0B0212] to-black p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-72 h-72 bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Symposium Header */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-display font-black text-sm tracking-wider text-white flex items-center space-x-1.5">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>NOVITAS 2K26 // HONG KONG</span>
              </span>
            </div>
            <span className="font-mono text-[10px] text-fuchsia-300 px-2.5 py-1 rounded-full bg-fuchsia-950/80 border border-fuchsia-500/40">
              INT'L SYMPOSIUM
            </span>
          </div>

          {/* Center Technical Tracks & Registration Stage */}
          <div className="z-10 py-2 grid grid-cols-3 gap-3 my-auto">
            <div className="p-3 rounded-2xl bg-black/80 border border-fuchsia-500/20 flex flex-col justify-between text-center">
              <span className="font-mono text-[9px] text-[#A7A7A7]">TRACKS</span>
              <div className="font-display font-black text-xl text-fuchsia-400">08 EVENTS</div>
              <span className="font-mono text-[8px] text-cyan-400">AI & CYBERSEC</span>
            </div>

            <div className="p-3 rounded-2xl bg-black/80 border border-cyan-500/30 flex flex-col justify-between text-center shadow-lg shadow-fuchsia-950/50">
              <span className="font-mono text-[9px] text-cyan-400">REGISTRATIONS</span>
              <div className="font-display font-black text-xl text-white">500+</div>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 h-full w-[85%]" />
              </div>
              <span className="font-mono text-[8px] text-emerald-300">QR PASS ACTIVE</span>
            </div>

            <div className="p-3 rounded-2xl bg-black/80 border border-fuchsia-500/20 flex flex-col justify-between text-center">
              <span className="font-mono text-[9px] text-[#A7A7A7]">DELEGATES</span>
              <div className="font-mono font-bold text-xs text-amber-300">GLOBAL SUMMIT</div>
              <span className="font-mono text-[8px] text-fuchsia-300">CYBER AESTHETIC</span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between z-10 font-mono text-[10px] text-[#A7A7A7] border-t border-fuchsia-950/60 pt-3">
            <span className="text-cyan-400">INTERNATIONAL SYMPOSIUM PLATFORM</span>
            <span className="text-emerald-400">GITHUB PAGES LIVE</span>
          </div>
        </div>
      );

    case 'clothyy-luxury-fashion':
      return (
        <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#1A160F] via-[#0D0B07] to-black p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Fashion Maison Header */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-200 animate-pulse" />
              <span className="font-display font-black text-sm tracking-widest text-[#E5D2BA] flex items-center space-x-1.5">
                <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                <span>CLOTHYYY.COM // GLOBAL MAISON</span>
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#D4AF37] px-2.5 py-1 rounded-full bg-amber-950/60 border border-amber-500/30">
              POLYGLOT MESH
            </span>
          </div>

          {/* Center Polyglot & Curated Drops Stage */}
          <div className="z-10 py-2 grid grid-cols-3 gap-3 my-auto">
            <div className="p-3 rounded-2xl bg-black/80 border border-white/10 flex flex-col justify-between text-center">
              <span className="font-mono text-[9px] text-[#A7A7A7]">POLYGLOT</span>
              <div className="font-display font-black text-xl text-white">11 LANGS</div>
              <span className="font-mono text-[8px] text-[#D4AF37]">MICROSERVICES</span>
            </div>

            <div className="p-3 rounded-2xl bg-black/80 border border-[#D4AF37]/30 flex flex-col justify-between text-center shadow-lg shadow-amber-950/40">
              <span className="font-mono text-[9px] text-[#D4AF37]">CURRENCIES</span>
              <div className="font-mono font-bold text-sm text-white">USD • EUR • JPY</div>
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div className="bg-gradient-to-r from-amber-200 to-[#D4AF37] h-full w-[90%]" />
              </div>
              <span className="font-mono text-[8px] text-[#A7A7A7]">REAL-TIME FX</span>
            </div>

            <div className="p-3 rounded-2xl bg-black/80 border border-white/10 flex flex-col justify-between text-center">
              <span className="font-mono text-[9px] text-[#A7A7A7]">FITTING ROOM</span>
              <div className="font-mono font-bold text-xs text-emerald-400">3D VIRTUAL</div>
              <span className="font-mono text-[8px] text-[#A7A7A7]">RUNWAY DROPS</span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between z-10 font-mono text-[10px] text-[#A7A7A7] border-t border-white/10 pt-3">
            <span className="text-[#D4AF37]">HIGH-FASHION POLYGLOT ARCHITECTURE</span>
            <span className="text-emerald-400">PRODUCTION DEPLOYMENT</span>
          </div>
        </div>
      );

    case 'hariharan-fullstack-portfolio':
      return (
        <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#041F10] via-[#020D07] to-black p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Top Terminal Header */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono font-black text-sm tracking-wider text-emerald-400 flex items-center space-x-1.5">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>HARI HARAN A // FULL STACK TERMINAL</span>
              </span>
            </div>
            <span className="font-mono text-[10px] text-emerald-300 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40">
              SYS_STATUS: ONLINE
            </span>
          </div>

          {/* Center Bash Command & Architecture Metrics */}
          <div className="z-10 py-2 space-y-2 my-auto">
            <div className="p-3 rounded-2xl bg-black/85 border border-emerald-500/20 font-mono text-xs space-y-1">
              <div className="text-emerald-400 flex items-center space-x-2">
                <span className="text-[#A7A7A7]">hari@portfolio:~$</span>
                <span className="text-white font-bold">./launch-ecosystem.sh --mode=production</span>
              </div>
              <div className="text-[#A7A7A7] text-[10px] pl-4">
                [OK] Microservices linked • [OK] 33 Repositories indexed • [OK] 99.9% Uptime
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 rounded-xl bg-black/60 border border-emerald-500/20 text-center">
                <div className="font-mono text-[9px] text-[#A7A7A7]">LATENCY</div>
                <div className="font-mono font-bold text-xs text-emerald-400">14ms</div>
              </div>
              <div className="p-2 rounded-xl bg-black/60 border border-emerald-500/20 text-center">
                <div className="font-mono text-[9px] text-[#A7A7A7]">CGPA</div>
                <div className="font-mono font-bold text-xs text-cyan-400">8.6 / 10</div>
              </div>
              <div className="p-2 rounded-xl bg-black/60 border border-emerald-500/20 text-center">
                <div className="font-mono text-[9px] text-[#A7A7A7]">STACK</div>
                <div className="font-mono font-bold text-xs text-purple-400">FULL-STACK</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex items-center justify-between z-10 font-mono text-[10px] text-[#A7A7A7] border-t border-emerald-950/60 pt-3">
            <span className="text-emerald-400">SOFTWARE ENGINEER • FULL STACK ARCHITECT</span>
            <span className="text-cyan-400">VERCEL DEPLOYMENT LIVE</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full min-h-[280px] bg-gradient-to-br from-[#121216] via-[#0A0A0E] to-black p-6 relative overflow-hidden flex flex-col justify-between">
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ backgroundColor: project.accentColor || '#A100FF' }}
          />

          {/* Top Status Banner */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center space-x-2">
              <span
                className="w-2.5 h-2.5 rounded-full animate-ping"
                style={{ backgroundColor: project.accentColor || '#00E5FF' }}
              />
              <span className="font-mono text-xs font-bold text-white tracking-wider">
                {project.title}
              </span>
            </div>

            {project.liveDemoUrl ? (
              <span className="font-mono text-[10px] text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>LIVE PRODUCTION</span>
              </span>
            ) : (
              <span className="font-mono text-[10px] text-[#A100FF] px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30">
                ACTIVE REPOSITORY
              </span>
            )}
          </div>

          {/* Middle Stage Card Preview */}
          <div className="z-10 my-3 p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2.5">
            <div className="flex items-center justify-between font-mono text-[10px] text-[#A7A7A7]">
              <span className="text-[#00E5FF]">ENGINEERING STACK</span>
              <span>YEAR {project.year}</span>
            </div>
            
            <div className="flex flex-wrap gap-1.5">
              {project.tools.slice(0, 5).map((tool, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[9px] text-white/90 px-2 py-0.5 rounded bg-white/5 border border-white/10"
                >
                  {tool}
                </span>
              ))}
            </div>

            <p className="font-sans text-xs text-[#A7A7A7] line-clamp-2 leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="flex items-center justify-between z-10 font-mono text-[10px] text-[#A7A7A7] border-t border-white/10 pt-3">
            <span className="text-white/60 truncate max-w-[200px]">
              {project.liveDemoUrl ? project.liveDemoUrl.replace('https://', '') : `github.com/Hari-Haran-A-07`}
            </span>
            <span className="text-emerald-400 flex items-center space-x-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>VERIFIED ASSET</span>
            </span>
          </div>
        </div>
      );
  }
};
