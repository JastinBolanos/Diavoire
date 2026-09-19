import React from 'react';

interface DiavoireLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'emblem' | 'stacked';
  subtitle?: string;
  className?: string;
  glow?: boolean;
}

export const DiavoireLogo: React.FC<DiavoireLogoProps> = ({
  size = 'md',
  variant = 'full',
  subtitle = 'HAUTE JOAILLERIE',
  className = '',
  glow = true,
}) => {
  // Dimensions for emblem
  const emblemSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  // Font sizes for brand name and subtitle
  const titleSizes = {
    sm: 'text-lg tracking-[0.2em]',
    md: 'text-xl md:text-2xl tracking-[0.22em]',
    lg: 'text-3xl tracking-[0.24em]',
    xl: 'text-4xl tracking-[0.26em]',
  };

  const subSizes = {
    sm: 'text-[7.5px] tracking-[0.38em]',
    md: 'text-[8.5px] md:text-[9.5px] tracking-[0.42em]',
    lg: 'text-[11px] tracking-[0.45em]',
    xl: 'text-[13px] tracking-[0.48em]',
  };

  return (
    <div
      className={`inline-flex items-center select-none group cursor-pointer ${
        variant === 'stacked' ? 'flex-col text-center gap-2.5' : 'gap-3'
      } ${className}`}
    >
      {/* Bespoke Clean Geometric Diamond Emblem (2 Solid Colors: White & Cyan) */}
      <div
        className={`relative ${emblemSizes[size]} shrink-0 transition-transform duration-300 group-hover:scale-105`}
      >
        {glow && (
          <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-sm pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity" />
        )}
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_8px_rgba(0,229,255,0.25)] transition-transform duration-300"
        >
          {/* Crown Table (Solid White) */}
          <polygon points="20,12 44,12 38,24 26,24" fill="#FFFFFF" />

          {/* Crown Star & Kite Facets (Solid Cyan) */}
          <polygon points="20,12 26,24 9,24" fill="#00E5FF" />
          <polygon points="44,12 55,24 38,24" fill="#00E5FF" />

          {/* Crown Outer Bezels (Solid White) */}
          <polygon points="20,12 9,24 6,24" fill="#FFFFFF" />
          <polygon points="44,12 58,24 55,24" fill="#FFFFFF" />

          {/* Pavilion Center Triangle (Solid White) */}
          <polygon points="26,26 38,26 32,54" fill="#FFFFFF" />

          {/* Pavilion Mid Facets (Solid Cyan) */}
          <polygon points="9,26 26,26 32,54" fill="#00E5FF" />
          <polygon points="38,26 55,26 32,54" fill="#00E5FF" />

          {/* Pavilion Outer Facets (Solid White) */}
          <polygon points="6,26 9,26 32,54" fill="#FFFFFF" />
          <polygon points="55,26 58,26 32,54" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Typography: Haute Joaillerie Wordmark */}
      {variant !== 'emblem' && (
        <div className={`flex flex-col ${variant === 'stacked' ? 'items-center' : 'items-start'}`}>
          <div className="flex items-center gap-1.5">
            <span
              className={`font-cinzel font-bold text-white group-hover:text-cyan-100 transition-colors duration-300 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] ${titleSizes[size]}`}
            >
              DIAVOIRE
            </span>
          </div>

          <div
            className={`flex items-center gap-1.5 font-sans font-semibold text-slate-400 group-hover:text-cyan-300/90 transition-colors duration-300 -mt-0.5 ${subSizes[size]}`}
          >
            <span>{subtitle}</span>
          </div>
        </div>
      )}
    </div>
  );
};
