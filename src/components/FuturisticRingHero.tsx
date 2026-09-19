import React, { useState, useEffect } from 'react';
import { Sparkles, Eye, ShieldCheck, Diamond, Zap, Info } from 'lucide-react';

interface FuturisticRingHeroProps {
  onExplore: () => void;
}

export const FuturisticRingHero: React.FC<FuturisticRingHeroProps> = ({ onExplore }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const HOTSPOTS = [
    {
      id: 1,
      title: '5.42 CT Royal Sapphire',
      desc: 'Unheated Ceylon origin, cushion-cut with VVS1 clarity and celestial brilliance.',
      top: '32%',
      left: '52%',
    },
    {
      id: 2,
      title: 'Micro-Pavé Halo & Band',
      desc: '120 precision-set round brilliant diamonds, D-Color, Flawless optical alignment.',
      top: '55%',
      left: '32%',
    },
    {
      id: 3,
      title: '950 Pure Platinum Shank',
      desc: 'Aerospace-grade solid platinum cathedral setting with hidden diamond collar.',
      top: '68%',
      left: '68%',
    },
  ];

  return (
    <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] lg:min-h-[420px] flex items-center justify-center select-none overflow-visible pointer-events-auto">
      {/* 1. Floating Holographic Crystals (As in NOVARA.png reference) */}
      <div
        className="absolute top-2 right-8 w-16 h-28 rounded-lg bg-gradient-to-br from-purple-500/20 via-indigo-600/10 to-transparent border border-purple-400/25 backdrop-blur-sm rotate-[25deg] shadow-[0_0_25px_rgba(168,85,247,0.25)] pointer-events-none transition-transform duration-700"
        style={{
          transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px) rotate(25deg)`,
        }}
      />
      <div
        className="absolute bottom-12 left-4 w-12 h-20 rounded-md bg-gradient-to-tr from-cyan-400/20 via-sky-500/10 to-transparent border border-cyan-400/25 backdrop-blur-sm -rotate-[20deg] shadow-[0_0_20px_rgba(6,182,212,0.2)] pointer-events-none transition-transform duration-700"
        style={{
          transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px) rotate(-20deg)`,
        }}
      />
      <div
        className="absolute top-8 left-12 w-8 h-14 rounded bg-gradient-to-b from-blue-400/15 to-purple-600/10 border border-blue-300/25 rotate-[45deg] pointer-events-none"
        style={{
          transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px) rotate(45deg)`,
        }}
      />

      {/* 2. Interactive Hotspot Markers Over the Epic Background Ring */}
      {HOTSPOTS.map((spot) => {
        const isActive = activeHotspot === spot.id;

        return (
          <div
            key={spot.id}
            style={{ top: spot.top, left: spot.left }}
            className="absolute z-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            onMouseEnter={() => setActiveHotspot(spot.id)}
            onMouseLeave={() => setActiveHotspot(null)}
            onClick={onExplore}
          >
            {/* Glowing Pulse Rings */}
            <div className="relative flex items-center justify-center">
              <span className="w-8 h-8 rounded-full bg-cyan-400/30 animate-ping absolute" />
              <span className="w-5 h-5 rounded-full bg-cyan-500/50 absolute group-hover:scale-125 transition-transform" />
              <div className="w-3.5 h-3.5 rounded-full bg-white border border-cyan-300 flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,1)]">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              </div>
            </div>

            {/* Floating Tooltip Callout */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-56 p-2.5 rounded-xl bg-slate-950/90 border border-cyan-400/50 backdrop-blur-xl shadow-[0_10px_25px_rgba(2,6,23,0.9)] transition-all duration-300 pointer-events-none z-40 ${
                isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
              }`}
            >
              <div className="flex items-center gap-1.5 text-cyan-300 font-bold text-xs font-tech tracking-wider uppercase pb-1 border-b border-white/10">
                <Diamond className="w-3 h-3 text-cyan-400" />
                <span>{spot.title}</span>
              </div>
              <p className="text-slate-300 text-[10px] leading-tight pt-1 font-light">
                {spot.desc}
              </p>
              {/* Arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-950/90" />
            </div>
          </div>
        );
      })}

      {/* 3. Dynamic Sparkle Gleams that follow parallax cursor */}
      <div
        className="absolute top-[28%] right-[42%] w-6 h-6 text-white pointer-events-none animate-pulse opacity-90 transition-transform duration-300"
        style={{
          transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px)`,
        }}
      >
        <Sparkles className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,1)]" />
      </div>
      <div
        className="absolute top-[36%] right-[22%] w-5 h-5 text-cyan-300 pointer-events-none animate-ping opacity-80 transition-transform duration-500 delay-150"
        style={{
          transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)`,
        }}
      >
        <Sparkles className="w-full h-full drop-shadow-[0_0_12px_rgba(6,182,212,1)]" />
      </div>

      {/* 4. Interactive Telemetry / Inspection HUD Pill at Bottom Right */}
      <div
        onClick={onExplore}
        className="absolute bottom-2 right-4 sm:right-8 bg-slate-950/85 hover:bg-slate-900/95 backdrop-blur-xl border border-cyan-400/40 hover:border-cyan-300 rounded-xl px-3.5 py-2 shadow-[0_0_25px_rgba(6,182,212,0.25)] flex items-center gap-3 transition-all cursor-pointer group hover:scale-[1.03]"
      >
        <div className="relative flex items-center justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping absolute" />
          <span className="w-2 h-2 rounded-full bg-cyan-400 relative" />
        </div>
        <div className="text-left">
          <div className="text-[10px] sm:text-xs font-tech text-cyan-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <span>SOLARIS NOCTURNE</span>
            <span className="text-slate-500">•</span>
            <span className="text-fuchsia-300">5.42 CT</span>
          </div>
          <div className="text-[9px] text-slate-400 font-mono tracking-tight flex items-center gap-2">
            <span>VVS1 ROYAL SAPPHIRE</span>
            <span className="text-cyan-400/80">INSPECT 3D</span>
          </div>
        </div>
        <Eye className="w-4 h-4 text-cyan-400 group-hover:text-cyan-200 transition-colors ml-1" />
      </div>
    </div>
  );
};
