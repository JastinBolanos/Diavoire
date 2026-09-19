import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface FlankingDiamondProps {
  side: 'left' | 'right';
  mousePos: { x: number; y: number };
  onClick?: () => void;
}

export const FlankingDiamond: React.FC<FlankingDiamondProps> = ({ side, mousePos, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isLeft = side === 'left';

  // Parallax multipliers
  const parallaxX = isLeft ? mousePos.x * 0.75 : mousePos.x * -0.75;
  const parallaxY = mousePos.y * 0.65;
  const baseRotation = isLeft ? -8 : 8;

  return (
    <div
      id={`flanking-diamond-${side}`}
      className={`absolute top-1/2 -translate-y-1/2 z-25 cursor-pointer select-none transition-transform duration-300 ${
        isLeft
          ? '-left-4 sm:-left-8 md:-left-12 lg:-left-16 xl:-left-20 2xl:-left-24'
          : '-right-4 sm:-right-8 md:-right-12 lg:-right-16 xl:-right-20 2xl:-right-24'
      }`}
      style={{
        transform: `translate(${parallaxX}px, calc(-50% + ${parallaxY}px))`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Floating Container with subtle continuous harmonic levitation */}
      <div
        className={`relative flex flex-col items-center justify-center ${
          isLeft ? 'animate-float-diamond-left' : 'animate-float-diamond-right'
        }`}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Soft Ambient Radiant Light Behind Side Diamond */}
        <div
          className={`absolute inset-0 rounded-full blur-2xl pointer-events-none transition-all duration-500 ${
            isLeft
              ? 'bg-gradient-to-tr from-cyan-500/35 via-sky-400/25 to-blue-600/30'
              : 'bg-gradient-to-tl from-purple-500/35 via-cyan-400/25 to-sky-500/30'
          } ${isHovered ? 'scale-135 opacity-100' : 'scale-100 opacity-70'}`}
        />

        {/* Real Macro Photographic Diamond Container - Sized smaller than center ring */}
        <div
          className={`relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-56 xl:h-56 2xl:w-60 2xl:h-60 transition-all duration-500 ease-out flex items-center justify-center ${
            isHovered ? 'scale-115 rotate-0' : 'scale-100'
          }`}
          style={{
            transform: isHovered
              ? 'scale(1.15) rotate(0deg)'
              : `rotate(${baseRotation}deg)`,
            filter: 'drop-shadow(0 15px 35px rgba(6, 182, 212, 0.45)) drop-shadow(0 0 25px rgba(255, 255, 255, 0.35))',
          }}
        >
          {/* Subtle Prismatic Ring Halo around the Real Diamond */}
          <div
            className="absolute -inset-1 rounded-full border border-cyan-400/50 opacity-80 pointer-events-none transition-opacity duration-300"
            style={{
              boxShadow: '0 0 22px rgba(6, 182, 212, 0.35), inset 0 0 8px rgba(56, 189, 248, 0.25)',
            }}
          />

          {/* Genuine Macro Photographic Diamond Gemstone */}
          <img
            src={isLeft ? '/flanking-diamond-left.png' : '/flanking-diamond-right.png'}
            alt={isLeft ? 'Brilliant Cut Flanking Diamond I - D Flawless' : 'Brilliant Cut Flanking Diamond II - Fancy Azure'}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain relative z-10 transition-transform duration-500 select-none pointer-events-none filter contrast-115 brightness-110 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
            draggable={false}
            loading="eager"
          />

          {/* Specular Light Reflection Sweep across the Diamond */}
          <div
            className={`absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none z-15 transition-opacity duration-500 mix-blend-overlay ${
              isHovered ? 'opacity-90' : 'opacity-30'
            }`}
          />

          {/* Dazzling Optical Glint Star on Corner of Side Diamond */}
          <div
            className="absolute top-1 right-1 sm:top-2 sm:right-2 pointer-events-none z-20"
            style={{
              animation: 'jewelGlint 2.8s infinite ease-in-out',
              animationDelay: isLeft ? '0.4s' : '1.8s',
            }}
          >
            <div className="w-5 h-5 rounded-full bg-white blur-[2px] opacity-80 absolute -inset-0.5 animate-ping" />
            <Sparkles className="w-6 h-6 text-white drop-shadow-[0_0_12px_rgba(255,255,255,1)]" />
          </div>

          {/* Secondary Prismatic Glint */}
          <div
            className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 pointer-events-none z-20"
            style={{
              animation: 'jewelGlint 3.4s infinite ease-in-out',
              animationDelay: isLeft ? '1.9s' : '0.6s',
            }}
          >
            <Sparkles className="w-4 h-4 text-cyan-300 drop-shadow-[0_0_10px_rgba(6,182,212,1)]" />
          </div>
        </div>
      </div>
    </div>
  );
};
