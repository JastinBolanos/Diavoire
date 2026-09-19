import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Gem, 
  Compass, 
  Layers, 
  Award, 
  CheckCircle2, 
  Microscope,
  Cpu,
  Flame
} from 'lucide-react';

export const CraftsmanshipSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'CUT' | 'COLOR' | 'CLARITY' | 'CARAT'>('CUT');

  const PILLARS = [
    {
      id: 'CUT' as const,
      label: 'Super Ideal Cut',
      icon: Sparkles,
      tag: 'Triple Excellent Polish & Symmetry',
      headline: 'The Optical Architecture of Scintillation',
      desc: 'Each diamond facet is cut to sub-micron mathematical tolerances, maximizing total internal reflection so light enters the crown and returns as a blaze of chromatic fire.',
      specs: [
        { name: 'Table Percentage', value: '54% - 57%' },
        { name: 'Crown Angle', value: '34.0° - 35.0°' },
        { name: 'Pavilion Angle', value: '40.6° - 41.0°' },
        { name: 'Hearts & Arrows', value: '100% Optical Coherence' },
      ],
      visualQuote: '“Light should never leak through the pavilion; it must ignite from within.”',
    },
    {
      id: 'COLOR' as const,
      label: 'D-F Colorless Spectrum',
      icon: Flame,
      tag: 'The Purest Ice Gradient',
      headline: 'Zero Hue Distortion in Ambient Light',
      desc: 'Only diamonds ranked in the highest D, E, and F colorless grades enter the Diavoire vaults. Set exclusively in neutral 950 platinum bezels to preserve absolute icy radiance.',
      specs: [
        { name: 'Master Grading', value: 'D-Color (100% Colorless)' },
        { name: 'Secondary Tier', value: 'E-F Exceptional White' },
        { name: 'Fluorescence', value: 'None to Faint (Zero Haze)' },
        { name: 'Setting Alloy', value: '950 Cold-Poured Platinum' },
      ],
      visualQuote: '“Like frozen glacial water trapped under crystalline starlight.”',
    },
    {
      id: 'CLARITY' as const,
      label: 'FL to VVS1 Purity',
      icon: Microscope,
      tag: '10x Gemological Scrutiny',
      headline: 'Micro-Inclusions Completely Invisible',
      desc: 'Under 10x binocular gemological microscopes, our stones exhibit pristine crystal matrices. Less than 0.1% of global diamonds meet our structural clarity threshold.',
      specs: [
        { name: 'Inclusions', value: 'None visible at 10x magnification' },
        { name: 'Surface Blemishes', value: 'Zero naturals or laser drills' },
        { name: 'Durability Index', value: '10.0 Mohs Hardness Scale' },
        { name: 'Transparency', value: 'Type IIa (Ultra-pure Carbon)' },
      ],
      visualQuote: '“Pure crystalline carbon without cosmic imperfections.”',
    },
    {
      id: 'CARAT' as const,
      label: 'Ethical Origin & GIA Trace',
      icon: ShieldCheck,
      tag: 'Blockchain Kimberley Compliant',
      headline: 'Full Provenance from Mine to Vault',
      desc: 'Every gemstone carries a tamper-proof GIA or IGI digital passport with laser inscription on the girdle, guaranteeing fair-trade provenance and conflict-free origin.',
      specs: [
        { name: 'Certification', value: 'GIA & IGI Laser Micro-Inscribed' },
        { name: 'Chain of Custody', value: 'Blockchain Verified Digital Ledger' },
        { name: 'Precious Metals', value: '100% Recycled RJC-Certified Alloys' },
        { name: 'Conflict-Free', value: 'Kimberley Process 100% Compliant' },
      ],
      visualQuote: '“Luxury that honors both the artisan and the Earth.”',
    },
  ];

  const currentPillar = PILLARS.find((p) => p.id === activeTab) || PILLARS[0];

  return (
    <section className="relative py-24 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full max-w-[1920px] mx-auto z-10 border-t border-white/5">
      {/* Subtle radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-cyan-950/20 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
          <Award className="w-3.5 h-3.5 text-cyan-400" />
          <span>THE DIAVOIRE ATELIER STANDARD</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-light tracking-tight">
          Precision Gemology & The 4Cs
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed font-light">
          We reject 99.4% of candidate rough diamonds. Only stones meeting our exacting physics-based refraction standards are selected for our high jewelry archive.
        </p>
      </div>

      {/* 4 Pillars Interactive Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {PILLARS.map((pillar) => {
          const Icon = pillar.icon;
          const isActive = activeTab === pillar.id;

          return (
            <button
              key={pillar.id}
              onClick={() => setActiveTab(pillar.id)}
              className={`p-4 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between ${
                isActive
                  ? 'bg-[#09122c] border-cyan-400/80 shadow-[0_0_25px_rgba(6,182,212,0.25)] -translate-y-1'
                  : 'bg-slate-950/40 hover:bg-slate-900/60 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-xl ${isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-900 text-slate-400'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-cyan-400/80 uppercase">
                  {pillar.id}
                </span>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white font-serif">{pillar.label}</h4>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">{pillar.tag}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Pillar Content Panel */}
      <div className="bg-[#050b1d]/90 border border-cyan-500/30 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(2,6,23,0.8)] backdrop-blur-xl relative overflow-hidden">
        {/* Ambient glow accent inside panel */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Technical Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ATELIER CRITERIA: {currentPillar.tag}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-white font-light">
              {currentPillar.headline}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {currentPillar.desc}
            </p>

            <blockquote className="p-4 rounded-xl bg-slate-950/70 border-l-2 border-cyan-400 text-slate-300 text-xs sm:text-sm italic font-serif">
              {currentPillar.visualQuote}
            </blockquote>

            {/* Micro-Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-400/30 text-cyan-300 text-[11px] font-mono">
                <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                GIA Triple Excellent
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-400/30 text-purple-300 text-[11px] font-mono">
                <CheckCircle2 className="w-3 h-3 text-purple-400" />
                Laser Inscribed Girdle
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-400/30 text-blue-300 text-[11px] font-mono">
                <CheckCircle2 className="w-3 h-3 text-blue-400" />
                100% Conflict-Free
              </span>
            </div>
          </div>

          {/* Right Column: Spec Grid with Cyberpunk Aesthetic */}
          <div className="lg:col-span-5 bg-slate-950/80 rounded-2xl p-6 border border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <span>GEMOLOGICAL TELEMETRY</span>
              <span className="text-slate-500">ISO-24016</span>
            </div>

            <div className="space-y-3">
              {currentPillar.specs.map((s, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 text-xs">
                  <span className="text-slate-400 font-light">{s.name}</span>
                  <span className="font-mono text-white font-semibold text-right">{s.value}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-[11px] text-slate-500 font-mono flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Certified under independent gemological double-blind audit.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
