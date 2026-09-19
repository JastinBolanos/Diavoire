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
      {/* Bespoke Geometric Emblem */}
      <div
        className={`relative ${emblemSizes[size]} shrink-0 transition-transform duration-500 group-hover:scale-105`}
      >
        {/* Ambient Halo & Aura */}
        {glow && (
          <>
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-md opacity-60 group-hover:opacity-100 group-hover:bg-cyan-400/30 transition-all duration-500" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-500/0 via-cyan-400/15 to-purple-500/20 blur-sm opacity-50 group-hover:opacity-80" />
          </>
        )}

        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full drop-shadow-[0_2px_12px_rgba(6,182,212,0.45)]"
        >
          <defs>
            {/* Linear Metallic Gradient */}
            <linearGradient id="diavoireStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#67e8f9" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#c084fc" stopOpacity="0.75" />
            </linearGradient>

            {/* Facet Light Refraction 1 */}
            <linearGradient id="facetHighlight" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0369a1" stopOpacity="0.05" />
            </linearGradient>

            {/* Facet Light Refraction 2 */}
            <linearGradient id="facetDeep" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#0e7490" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
            </linearGradient>

            {/* Core Gem Glow */}
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#082f49" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Outer Chamfered Cartier/Place Vendôme Octagonal Cartouche */}
          <polygon
            points="30,6 70,6 94,30 94,70 70,94 30,94 6,70 6,30"
            stroke="url(#diavoireStroke)"
            strokeWidth="1.75"
            strokeLinejoin="round"
            className="transition-all duration-500 group-hover:stroke-white"
          />

          {/* Inner Precision Bezel */}
          <polygon
            points="33,14 67,14 86,33 86,67 67,86 33,86 14,67 14,33"
            stroke="#38bdf8"
            strokeOpacity="0.35"
            strokeWidth="0.85"
            strokeDasharray="1.5 2"
          />

          {/* Background Facet Tints */}
          {/* Top table prism */}
          <polygon points="30,6 70,6 67,14 33,14" fill="url(#facetHighlight)" />
          {/* Right crown facets */}
          <polygon points="70,6 94,30 86,33 67,14" fill="url(#facetHighlight)" />
          <polygon points="94,30 94,70 86,67 86,33" fill="url(#facetDeep)" />
          {/* Left pavilion facets */}
          <polygon points="6,30 30,6 33,14 14,33" fill="url(#facetHighlight)" />
          <polygon points="6,30 6,70 14,67 14,33" fill="url(#facetDeep)" />
          {/* Bottom culet facets */}
          <polygon points="30,94 70,94 67,86 33,86" fill="url(#facetDeep)" />

          {/* THE ICONIC INTERLOCKING "D" SOLITAIRE CREST */}
          {/* Backbone of the "D" - Architectural Pillar */}
          <path
            d="M 32 22 L 39 22 L 39 78 L 32 78 Z"
            fill="url(#diavoireStroke)"
            className="transition-all duration-300"
          />
          <path
            d="M 39 22 L 44 26 L 44 74 L 39 78 Z"
            fill="#38bdf8"
            fillOpacity="0.4"
          />

          {/* The Sculpted Faceted Bow of the "D" */}
          {/* Outer Bow Polygon */}
          <path
            d="M 39 22 L 56 22 L 73 39 L 73 61 L 56 78 L 39 78 L 44 72 L 54 72 L 67 59 L 67 41 L 54 28 L 44 28 Z"
            fill="url(#diavoireStroke)"
            className="transition-all duration-300"
          />

          {/* Upper Facet of the D-Bow with Gem Light Refraction */}
          <polygon
            points="39,22 56,22 54,28 44,28"
            fill="#ffffff"
            fillOpacity="0.75"
          />
          <polygon
            points="56,22 73,39 67,41 54,28"
            fill="url(#facetHighlight)"
          />
          {/* Lower Facet of the D-Bow */}
          <polygon
            points="73,61 56,78 54,72 67,59"
            fill="#0284c7"
            fillOpacity="0.45"
          />

          {/* Center Solitaire Brilliant Star (L'Étoile Diavoire) */}
          {/* Radiant Aura */}
          <circle cx="53" cy="50" r="14" fill="url(#centerGlow)" />

          {/* 8-Pointed Star Diamond Cut Inside the "D" */}
          {/* Vertical & Horizontal diamond spikes */}
          <path
            d="M 53 38 Q 53 47 44 50 Q 53 53 53 62 Q 53 53 62 50 Q 53 47 53 38 Z"
            fill="#ffffff"
            className="drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
          />
          {/* Diagonal secondary facets */}
          <path
            d="M 53 43 Q 53 48 48 50 Q 53 52 53 57 Q 53 52 58 50 Q 53 48 53 43 Z"
            fill="#67e8f9"
            opacity="0.85"
            transform="rotate(45 53 50)"
          />

          {/* Central Point of Light (Sparkle Focus) */}
          <circle cx="53" cy="50" r="1.5" fill="#ffffff" />

          {/* Micro Corner Prongs / Haute Joaillerie Rivets */}
          <circle cx="30" cy="6" r="1.2" fill="#67e8f9" opacity="0.8" />
          <circle cx="70" cy="6" r="1.2" fill="#67e8f9" opacity="0.8" />
          <circle cx="94" cy="30" r="1.2" fill="#67e8f9" opacity="0.8" />
          <circle cx="94" cy="70" r="1.2" fill="#67e8f9" opacity="0.8" />
          <circle cx="70" cy="94" r="1.2" fill="#67e8f9" opacity="0.8" />
          <circle cx="30" cy="94" r="1.2" fill="#67e8f9" opacity="0.8" />
          <circle cx="6" cy="70" r="1.2" fill="#67e8f9" opacity="0.8" />
          <circle cx="6" cy="30" r="1.2" fill="#67e8f9" opacity="0.8" />

          {/* Diagonal Diamond Sparkle Flare at Apex (Subtle Shimmer) */}
          <g className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            <path
              d="M 70 6 L 72 2 L 74 6 L 78 8 L 74 10 L 72 14 L 70 10 L 66 8 Z"
              fill="#ffffff"
              className="drop-shadow-[0_0_4px_rgba(56,189,248,1)]"
            />
          </g>
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
