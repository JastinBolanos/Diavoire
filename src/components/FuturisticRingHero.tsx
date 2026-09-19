import React, { useState, useEffect } from 'react';
import { Sparkles, Diamond, Maximize2, ShieldCheck, Flame } from 'lucide-react';
import { FlankingDiamond } from './FlankingDiamond';

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
      title: '5.42 CT Center Solitaire',
      desc: 'Type IIa chemical purity, D-Color, VVS1 clarity with maximum light refraction and fiery dispersion.',
      top: '44%',
      left: '50%',
      badge: '5.42 CT CENTER',
    },
    {
      id: 4,
      title: 'Twin Flanking Brilliant Diamonds',
      desc: 'Symmetrical 1.65 CT companion diamonds flanking both sides of the center stone, completing the Trilogy harmony.',
      top: '43%',
      left: '30%',
      badge: 'TWIN 1.65 CT FLANKS',
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
        <div className="w-[340px] sm:w-[460px] md:w-[540px] lg:w-[620px] xl:w-[720px] 2xl:w-[800px] h-[340px] sm:h-[460px] md:h-[540px] lg:h-[620px] xl:h-[720px] 2xl:h-[800px] rounded-full bg-gradient-to-tr from-cyan-500/25 via-sky-400/20 to-purple-600/25 blur-3xl opacity-75 animate-pulse transition-all duration-700" />
        {/* Subtle secondary prismatic halo */}
        <div className="absolute w-[280px] sm:w-[380px] md:w-[440px] lg:w-[520px] xl:w-[600px] 2xl:w-[680px] h-[280px] sm:h-[380px] md:h-[440px] lg:h-[520px] xl:h-[600px] 2xl:h-[680px] rounded-full bg-cyan-400/15 blur-2xl pointer-events-none" />
      </div>

      {/* Main Ring Showcase Container with 3D Depth and Tilt */}
      <div
        className="relative group cursor-pointer w-full max-w-[340px] sm:max-w-[460px] md:max-w-[540px] lg:max-w-[620px] xl:max-w-[720px] 2xl:max-w-[800px] flex items-center justify-center transition-all duration-300"
        style={{
          perspective: '1200px',
        }}
        onClick={() => setIsZoomed(!isZoomed)}
      >
        {/* Flanking Side Diamond - LEFT (Exquisite, smaller than the center solitaire) */}
        <FlankingDiamond side="left" mousePos={mousePos} onClick={onExplore} />

        {/* Flanking Side Diamond - RIGHT (Exquisite, smaller than the center solitaire) */}
        <FlankingDiamond side="right" mousePos={mousePos} onClick={onExplore} />

        {/* Ring Image Frame with High Clarity Lighting */}
        <div
          className="relative w-full aspect-square flex items-center justify-center transition-transform duration-500 ease-out z-10"
          style={{
            transform: `rotateX(${-mousePos.y * 0.45}deg) rotateY(${mousePos.x * 0.45}deg) scale(${
              isZoomed ? 1.15 : 1.0
            })`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Circular Image Clipping Portal Container */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-400/40 shadow-[0_0_60px_rgba(6,182,212,0.5),inset_0_0_40px_rgba(6,182,212,0.25)]">
            {/* Ultra High-Definition Crystal Clear Diamond Ring */}
            <img
              src="/ultra-diamond-ring.jpg"
              alt="Diavoire Solaris Nocturne 5.42 CT Flawless Diamond Ring"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter contrast-[1.08] brightness-[1.06] select-none pointer-events-auto rounded-full"
              loading="eager"
            />

            {/* Prismatic Light Flare Overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/10 via-transparent to-white/15 opacity-60 pointer-events-none mix-blend-screen" />

            {/* Subtle inner circular rim glow */}
            <div className="absolute inset-0 rounded-full border border-cyan-300/30 pointer-events-none" />
          </div>

          {/* Left Companion Flank Diamond on Ring Setting */}
          <div
            className="absolute top-[43%] left-[33%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-15"
            style={{
              transform: `translate(${mousePos.x * 0.45}px, ${mousePos.y * 0.45}px)`,
            }}
          >
            <div className="relative w-8 h-8 sm:w-11 sm:h-11 rounded-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-cyan-400/40 blur-sm animate-pulse" />
              <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-white via-cyan-100 to-sky-300 border border-white/95 shadow-[0_0_18px_rgba(255,255,255,1),0_0_28px_rgba(6,182,212,0.85)] flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-cyan-500" />
              </div>
            </div>
          </div>

          {/* Right Companion Flank Diamond on Ring Setting */}
          <div
            className="absolute top-[43%] right-[33%] translate-x-1/2 -translate-y-1/2 pointer-events-none z-15"
            style={{
              transform: `translate(${mousePos.x * 0.45}px, ${mousePos.y * 0.45}px)`,
            }}
          >
            <div className="relative w-8 h-8 sm:w-11 sm:h-11 rounded-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-cyan-400/40 blur-sm animate-pulse" />
              <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-white via-cyan-100 to-sky-300 border border-white/95 shadow-[0_0_18px_rgba(255,255,255,1),0_0_28px_rgba(6,182,212,0.85)] flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-cyan-500" />
              </div>
            </div>
          </div>

          {/* Sparkle Glint 1 (Center Diamond Fire) */}
          <div
            className="absolute top-[41%] left-[49%] -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse z-20"
            style={{
              transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px)`,
            }}
          >
            <div className="w-8 h-8 rounded-full bg-white blur-[2px] opacity-70 absolute -inset-1 animate-ping" />
            <Sparkles className="w-7 h-7 text-white drop-shadow-[0_0_15px_rgba(255,255,255,1)] relative z-10" />
          </div>

          {/* Sparkle Glint 2 (Pavé Halo Edge Refraction) */}
          <div
            className="absolute top-[27%] left-[34%] pointer-events-none z-20"
            style={{
              transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)`,
              animation: 'jewelGlint 3s infinite ease-in-out',
            }}
          >
            <Sparkles className="w-5 h-5 text-cyan-300 drop-shadow-[0_0_12px_rgba(6,182,212,1)]" />
          </div>

          {/* Sparkle Glint 3 (Platinum Shank Highlight) */}
          <div
            className="absolute bottom-[28%] right-[32%] pointer-events-none animate-pulse z-20"
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
      </div>
    </div>
  );
};
