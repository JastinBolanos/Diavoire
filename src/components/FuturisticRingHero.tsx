import React, { useState, useEffect } from 'react';
import { Sparkles, Eye, Diamond, ZoomIn, ZoomOut, Maximize2, ShieldCheck, Flame } from 'lucide-react';

interface FuturisticRingHeroProps {
  onExplore: () => void;
}

export const FuturisticRingHero: React.FC<FuturisticRingHeroProps> = ({ onExplore }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    let rAF: number;
    let pendingX = 0;
    let pendingY = 0;
    let needsUpdate = false;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      pendingX = (e.clientX / innerWidth - 0.5) * 20;
      pendingY = (e.clientY / innerHeight - 0.5) * 20;

      if (!needsUpdate) {
        needsUpdate = true;
        rAF = requestAnimationFrame(() => {
          setMousePos({ x: pendingX, y: pendingY });
          needsUpdate = false;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rAF);
    };
  }, []);

  const HOTSPOTS = [
    {
      id: 1,
      title: '5.42 CT Flawless Center Solitaire',
      desc: 'Type IIa chemical purity, D-Color, VVS1 clarity with maximum light refraction and fiery dispersion.',
      top: '44%',
      left: '50%',
      badge: 'VVS1 CLARITY',
    },
    {
      id: 2,
      title: 'Dual Micro-Pavé Radiant Halo',
      desc: '128 precision laser-set round brilliant diamonds creating an uninterrupted celestial circle of light.',
      top: '28%',
      left: '38%',
      badge: '128 BRILLIANTS',
    },
    {
      id: 3,
      title: '950 Hand-Polished Platinum Shank',
      desc: 'Aerospace-grade solid platinum cathedral architecture engineered for eternal luster.',
      top: '72%',
      left: '64%',
      badge: 'PT 950 SOLID',
    },
  ];

  return (
    <div className="relative w-full flex items-center justify-center select-none overflow-visible py-2">
      {/* Dynamic Ambient Radiant Glow behind the Ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-[260px] sm:w-[340px] md:w-[400px] lg:w-[480px] xl:w-[520px] h-[260px] sm:h-[340px] md:h-[400px] lg:h-[480px] xl:h-[520px] rounded-full bg-gradient-to-tr from-cyan-500/25 via-sky-400/20 to-purple-600/25 blur-3xl opacity-75 animate-pulse transition-all duration-700" />
        {/* Subtle secondary prismatic halo */}
        <div className="absolute w-[220px] sm:w-[280px] lg:w-[360px] h-[220px] sm:h-[280px] lg:h-[360px] rounded-full bg-cyan-400/15 blur-2xl pointer-events-none" />
      </div>

      {/* Floating Holographic Crystal Prisms in the Background */}
      <div
        className="absolute -top-4 right-8 w-12 h-20 sm:w-16 sm:h-28 rounded-xl bg-gradient-to-br from-purple-500/25 via-indigo-600/15 to-transparent border border-purple-400/30 backdrop-blur-md rotate-[25deg] shadow-[0_0_25px_rgba(168,85,247,0.25)] pointer-events-none transition-transform duration-700"
        style={{
          transform: `translate(${mousePos.x * 0.35}px, ${mousePos.y * 0.35}px) rotate(25deg)`,
        }}
      />
      <div
        className="absolute -bottom-6 left-4 w-10 h-16 sm:w-14 sm:h-24 rounded-xl bg-gradient-to-tr from-cyan-400/25 via-sky-500/15 to-transparent border border-cyan-400/30 backdrop-blur-md -rotate-[20deg] shadow-[0_0_20px_rgba(6,182,212,0.2)] pointer-events-none transition-transform duration-700"
        style={{
          transform: `translate(${mousePos.x * -0.4}px, ${mousePos.y * -0.4}px) rotate(-20deg)`,
        }}
      />

      {/* Main Ring Showcase Container with 3D Depth and Tilt */}
      <div
        className="relative group cursor-pointer w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[530px] flex items-center justify-center transition-all duration-300"
        style={{
          perspective: '1200px',
        }}
        onClick={() => setIsZoomed(!isZoomed)}
      >
        {/* Ring Image Frame with High Clarity Lighting */}
        <div
          className="relative w-full aspect-square flex items-center justify-center rounded-3xl transition-transform duration-500 ease-out"
          style={{
            transform: `rotateX(${-mousePos.y * 0.45}deg) rotateY(${mousePos.x * 0.45}deg) scale(${
              isZoomed ? 1.15 : 1.0
            })`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Ultra High-Definition Crystal Clear Diamond Ring */}
          <img
            src="/ultra-diamond-ring.jpg"
            alt="Diavoire Solaris Nocturne 5.42 CT Flawless Diamond Ring"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(6,182,212,0.45)] contrast-[1.08] brightness-[1.06] select-none pointer-events-auto rounded-3xl"
            loading="eager"
          />

          {/* Prismatic Light Flare Overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/10 via-transparent to-white/15 opacity-60 pointer-events-none mix-blend-screen" />

          {/* Sparkle Glint 1 (Center Diamond Fire) */}
          <div
            className="absolute top-[41%] left-[49%] -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse"
            style={{
              transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px)`,
            }}
          >
            <div className="w-8 h-8 rounded-full bg-white blur-[2px] opacity-70 absolute -inset-1 animate-ping" />
            <Sparkles className="w-7 h-7 text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)] relative z-10" />
          </div>

          {/* Sparkle Glint 2 (Pavé Halo Edge Refraction) */}
          <div
            className="absolute top-[27%] left-[34%] pointer-events-none"
            style={{
              transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)`,
              animation: 'jewelGlint 3s infinite ease-in-out',
            }}
          >
            <Sparkles className="w-5 h-5 text-cyan-300 drop-shadow-[0_0_12px_rgba(6,182,212,1)]" />
          </div>

          {/* Sparkle Glint 3 (Platinum Shank Highlight) */}
          <div
            className="absolute bottom-[28%] right-[32%] pointer-events-none animate-pulse"
            style={{
              animationDuration: '2.5s',
            }}
          >
            <span className="text-white text-base drop-shadow-[0_0_10px_#fff]">✦</span>
          </div>

          {/* Interactive Hotspots Anchored directly on the Ring */}
          {HOTSPOTS.map((spot) => {
            const isActive = activeHotspot === spot.id;

            return (
              <div
                key={spot.id}
                style={{ top: spot.top, left: spot.left }}
                className="absolute z-30 -translate-x-1/2 -translate-y-1/2 cursor-pointer group/hotspot pointer-events-auto"
                onMouseEnter={(e) => {
                  e.stopPropagation();
                  setActiveHotspot(spot.id);
                }}
                onMouseLeave={(e) => {
                  e.stopPropagation();
                  setActiveHotspot(null);
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  onExplore();
                }}
              >
                {/* Glowing Pulse Rings */}
                <div className="relative flex items-center justify-center">
                  <span className="w-9 h-9 rounded-full bg-cyan-400/35 animate-ping absolute" />
                  <span className="w-6 h-6 rounded-full bg-cyan-500/50 absolute group-hover/hotspot:scale-135 transition-transform" />
                  <div className="w-4 h-4 rounded-full bg-white border border-cyan-300 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,1)]">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  </div>
                </div>

                {/* Floating Tooltip Callout */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-60 p-3 rounded-2xl bg-slate-950/95 border border-cyan-400/60 backdrop-blur-2xl shadow-[0_12px_30px_rgba(2,6,23,0.95)] transition-all duration-300 pointer-events-none z-40 ${
                    isActive
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-2 scale-95'
                  }`}
                >
                  <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                    <div className="flex items-center gap-1.5 text-cyan-300 font-bold text-xs font-tech tracking-wider uppercase">
                      <Diamond className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{spot.title}</span>
                    </div>
                  </div>
                  <div className="pt-1.5 flex items-center justify-between">
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                      {spot.badge}
                    </span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed pt-1.5 font-light">
                    {spot.desc}
                  </p>
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-6 border-transparent border-t-slate-950/95" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Macro Clarity Zoom Pill Button on the Ring */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsZoomed(!isZoomed);
          }}
          title={isZoomed ? 'Reset zoom' : 'Inspect 8K diamond clarity'}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/85 hover:bg-slate-900 border border-cyan-400/50 hover:border-cyan-300 text-cyan-300 text-xs font-medium backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
        >
          {isZoomed ? (
            <>
              <ZoomOut className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Macro Zoom: Active</span>
            </>
          ) : (
            <>
              <ZoomIn className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">8K Macro Clarity</span>
            </>
          )}
        </div>
      </div>

      {/* Telemetry Gemological Inspection HUD Pill at Bottom */}
      <div
        onClick={onExplore}
        className="absolute -bottom-2 right-2 sm:right-8 bg-slate-950/90 hover:bg-slate-900 backdrop-blur-2xl border border-cyan-400/50 hover:border-cyan-300 rounded-2xl px-4 py-2.5 shadow-[0_0_30px_rgba(6,182,212,0.35)] flex items-center gap-3.5 transition-all cursor-pointer group hover:scale-[1.03] z-20"
      >
        <div className="relative flex items-center justify-center">
          <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping absolute" />
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 relative" />
        </div>
        <div className="text-left">
          <div className="text-[11px] sm:text-xs font-tech text-cyan-300 font-bold uppercase tracking-wider flex items-center gap-2">
            <span>SOLARIS NOCTURNE</span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400 font-mono">5.42 CT</span>
          </div>
          <div className="text-[10px] text-slate-300 font-mono tracking-tight flex items-center gap-2">
            <span className="text-slate-400">D-FLAWLESS OPTICAL 8K</span>
            <span className="text-cyan-400 font-bold group-hover:underline">INSPECT ATELIER →</span>
          </div>
        </div>
        <Eye className="w-4 h-4 text-cyan-400 group-hover:text-cyan-200 transition-colors ml-1" />
      </div>
    </div>
  );
};
