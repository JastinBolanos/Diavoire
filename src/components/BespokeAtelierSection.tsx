import React, { useState } from 'react';
import { 
  Sparkles, 
  Compass, 
  Send, 
  Check, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  Gem,
  Palette
} from 'lucide-react';

interface BespokeAtelierSectionProps {
  onOpenConsultation: () => void;
}

export const BespokeAtelierSection: React.FC<BespokeAtelierSectionProps> = ({ onOpenConsultation }) => {
  const [selectedSetting, setSelectedSetting] = useState('Cathedral');
  const [selectedStone, setSelectedStone] = useState('Ceylon Royal Sapphire');
  const [selectedMetal, setSelectedMetal] = useState('950 Platinum');
  const [engraving, setEngraving] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const SETTINGS = ['Cathedral 6-Prong', 'Floating Tension', 'Double Micro-Halo', 'Three-Stone Trilogy'];
  const STONES = ['Ceylon Royal Sapphire', 'Super Ideal D-Diamond', 'Colombian Emerald', 'Star Sapphire'];
  const METALS = ['950 Cold Platinum', '18K White Gold', '18K Rose Gold', '18K Royal Yellow Gold'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onOpenConsultation();
    }, 600);
  };

  return (
    <section className="relative py-24 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full max-w-[1920px] mx-auto z-10">
      {/* Background ambient lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="bg-gradient-to-br from-[#060b1e] via-[#09122c] to-[#040816] border border-cyan-500/30 rounded-3xl p-6 sm:p-12 shadow-[0_25px_60px_rgba(2,6,23,0.9)] relative overflow-hidden">
        {/* Subtle decorative grid background */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 text-xs font-mono tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>PRIVATE COMMISSIONS • ONE-OF-ONE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-light tracking-tight leading-tight">
              Bespoke Atelier Consultation
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Collaborate directly with Diavoire master goldsmiths and gemologists. From hand-sketched watercolors to 3D laser-sintered prototypes and final hand-milgrain finishing, we bring your singular vision to life.
            </p>

            {/* Guarantees */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5">
                <div className="text-cyan-400 text-xs font-mono font-bold uppercase mb-1">Photorealistic 3D Renders</div>
                <div className="text-[11px] text-slate-400">Delivered within 48 hours with raytraced optical simulation.</div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5">
                <div className="text-cyan-400 text-xs font-mono font-bold uppercase mb-1">Wax Model Fitting</div>
                <div className="text-[11px] text-slate-400">Physical prototype sent to your door prior to final metal casting.</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-2">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <Clock className="w-3.5 h-3.5" />
                4-6 Weeks Craft Time
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                Lifetime Warranty & Sizing
              </span>
            </div>
          </div>

          {/* Right Interactive Customizer Card */}
          <div className="lg:col-span-6 bg-slate-950/90 rounded-2xl p-6 sm:p-8 border border-white/15 shadow-2xl backdrop-blur-md">
            <h3 className="text-lg font-serif text-white mb-4 flex items-center justify-between">
              <span>Interactive Commission Draft</span>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Step 1 of 3</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* 1. Setting Architecture */}
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                  1. Setting Architecture
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {SETTINGS.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setSelectedSetting(s)}
                      className={`px-3 py-2 rounded-xl text-xs text-left transition-all border ${
                        selectedSetting === s
                          ? 'bg-cyan-950/80 border-cyan-400 text-cyan-200 font-semibold'
                          : 'bg-slate-900/60 border-white/10 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Center Gemstone */}
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                  2. Center Gemstone
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {STONES.map((st) => (
                    <button
                      type="button"
                      key={st}
                      onClick={() => setSelectedStone(st)}
                      className={`px-3 py-2 rounded-xl text-xs text-left transition-all border ${
                        selectedStone === st
                          ? 'bg-cyan-950/80 border-cyan-400 text-cyan-200 font-semibold'
                          : 'bg-slate-900/60 border-white/10 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Precious Metal */}
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                  3. Precious Alloy
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {METALS.map((m) => (
                    <button
                      type="button"
                      key={m}
                      onClick={() => setSelectedMetal(m)}
                      className={`px-3 py-2 rounded-xl text-xs text-left transition-all border ${
                        selectedMetal === m
                          ? 'bg-cyan-950/80 border-cyan-400 text-cyan-200 font-semibold'
                          : 'bg-slate-900/60 border-white/10 text-slate-400 hover:border-white/20'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Laser Engraving */}
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase mb-1">
                  Complimentary Inner Shank Laser Engraving
                </label>
                <input
                  type="text"
                  value={engraving}
                  onChange={(e) => setEngraving(e.target.value)}
                  placeholder="e.g. Always & Forever • 18.09.2026"
                  maxLength={30}
                  className="w-full bg-slate-900/80 border border-white/10 focus:border-cyan-400 rounded-xl px-3.5 py-2 text-xs text-slate-200 placeholder-slate-600 focus:outline-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] flex items-center justify-center gap-2"
              >
                <span>REQUEST BESPOKE GEMOLOGIST ADVISOR</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
