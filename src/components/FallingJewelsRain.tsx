import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { ALL_JEWELRY } from '../data/jewelry';
import { JewelryItem } from '../types';

interface FallingJewelConfig {
  id: string;
  item: JewelryItem;
  leftPercent: number;
  size: number;
  durationSec: number;
  delaySec: number;
  swayAmplitude: number;
  rotationSpeed: number;
  initialRotateZ: number;
  glowColor: string;
  shape: 'octagon' | 'round' | 'cushion';
}

interface FallingJewelsRainProps {
  onSelectJewel: (item: JewelryItem) => void;
}

export const FallingJewelsRain: React.FC<FallingJewelsRainProps> = ({ onSelectJewel }) => {
  const [hoveredJewelId, setHoveredJewelId] = useState<string | null>(null);

  const fallingJewels: FallingJewelConfig[] = [
    {
      id: 'fall-ring-1',
      item: ALL_JEWELRY.find((j) => j.id === 'dia-3') || ALL_JEWELRY[2],
      leftPercent: 12,
      size: 64,
      durationSec: 26,
      delaySec: 0,
      swayAmplitude: 16,
      rotationSpeed: 0.6,
      initialRotateZ: -12,
      glowColor: 'rgba(6,182,212,0.4)',
      shape: 'round',
    },
    {
      id: 'fall-necklace-1',
      item: ALL_JEWELRY.find((j) => j.id === 'dia-1') || ALL_JEWELRY[0],
      leftPercent: 84,
      size: 66,
      durationSec: 29,
      delaySec: 3.5,
      swayAmplitude: 18,
      rotationSpeed: 0.5,
      initialRotateZ: 15,
      glowColor: 'rgba(168,85,247,0.4)',
      shape: 'octagon',
    },
    {
      id: 'fall-ring-2',
      item: ALL_JEWELRY.find((j) => j.id === 'dia-2') || ALL_JEWELRY[1],
      leftPercent: 92,
      size: 70,
      durationSec: 25,
      delaySec: 8,
      swayAmplitude: 20,
      rotationSpeed: 0.7,
      initialRotateZ: 22,
      glowColor: 'rgba(16,185,129,0.4)',
      shape: 'cushion',
    },
    {
      id: 'fall-earring-1',
      item: ALL_JEWELRY.find((j) => j.id === 'dia-4') || ALL_JEWELRY[3],
      leftPercent: 22,
      size: 60,
      durationSec: 32,
      delaySec: 2,
      swayAmplitude: 14,
      rotationSpeed: 0.55,
      initialRotateZ: -18,
      glowColor: 'rgba(217,70,239,0.35)',
      shape: 'octagon',
    },
    {
      id: 'fall-bracelet-1',
      item: ALL_JEWELRY.find((j) => j.id === 'dia-5') || ALL_JEWELRY[4],
      leftPercent: 96,
      size: 65,
      durationSec: 28,
      delaySec: 12,
      swayAmplitude: 16,
      rotationSpeed: 0.6,
      initialRotateZ: 8,
      glowColor: 'rgba(56,189,248,0.35)',
      shape: 'round',
    },
    {
      id: 'fall-ring-3',
      item: ALL_JEWELRY.find((j) => j.id === 'dia-11') || ALL_JEWELRY[2],
      leftPercent: 78,
      size: 68,
      durationSec: 34,
      delaySec: 15,
      swayAmplitude: 20,
      rotationSpeed: 0.45,
      initialRotateZ: -25,
      glowColor: 'rgba(14,165,233,0.4)',
      shape: 'octagon',
    },
    {
      id: 'fall-ring-4',
      item: ALL_JEWELRY.find((j) => j.id === 'dia-8') || ALL_JEWELRY[1],
      leftPercent: 6,
      size: 62,
      durationSec: 27,
      delaySec: 6,
      swayAmplitude: 15,
      rotationSpeed: 0.7,
      initialRotateZ: 18,
      glowColor: 'rgba(245,158,11,0.4)',
      shape: 'cushion',
    },
    {
      id: 'fall-necklace-2',
      item: ALL_JEWELRY.find((j) => j.id === 'dia-6') || ALL_JEWELRY[0],
      leftPercent: 32,
      size: 68,
      durationSec: 36,
      delaySec: 18,
      swayAmplitude: 18,
      rotationSpeed: 0.5,
      initialRotateZ: -10,
      glowColor: 'rgba(99,102,241,0.4)',
      shape: 'round',
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20 perspective-jewel">
      {/* 3D Falling and Rotating Jewels Stream */}
      {fallingJewels.map((j) => {
        const isHovered = hoveredJewelId === j.id;

        return (
          <div
            key={j.id}
            className="absolute top-0 pointer-events-auto cursor-pointer select-none group"
            style={{
              left: `${j.leftPercent}%`,
              width: `${j.size}px`,
              height: `${j.size}px`,
              animation: `fallJewel ${j.durationSec}s cubic-bezier(0.4, 0.0, 0.2, 1) infinite`,
              animationDelay: `${j.delaySec}s`,
              animationPlayState: isHovered ? 'paused' : 'running',
              willChange: 'transform, opacity',
            }}
            onMouseEnter={() => setHoveredJewelId(j.id)}
            onMouseLeave={() => setHoveredJewelId(null)}
            onClick={() => onSelectJewel(j.item)}
          >
            {/* Jewel Card Container with 3D Spin and Faceted Crystal Border */}
            <div
              className={`relative w-full h-full p-1.5 rounded-2xl transition-transform duration-300 ${
                isHovered ? 'scale-125 z-40' : 'hover:scale-110'
              }`}
              style={{
                background:
                  'radial-gradient(circle at 35% 30%, rgba(30,58,138,0.25), rgba(2,6,23,0.92) 80%)',
                boxShadow: `0 0 16px ${j.glowColor}, inset 0 0 10px rgba(255,255,255,0.15)`,
                border: '1.5px solid rgba(255,255,255,0.3)',
              }}
            >
              {/* Jewel: High Definition Photographic Display */}
              <div className="w-full h-full rounded-xl overflow-hidden relative flex items-center justify-center bg-black/40">
                <img
                  src={j.item.image}
                  alt={j.item.name}
                  className="w-full h-full object-cover transform group-hover:rotate-12 transition-transform duration-500 filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
                  loading="eager"
                />

                {/* Refractive Diamond Shimmer on Gemstone */}
                <div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full blur-[1px] opacity-80 animate-pulse pointer-events-none"
                  style={{
                    boxShadow: '0 0 12px #fff, 0 0 20px #38bdf8',
                  }}
                />

                {/* Dynamic Prismatic Light Flare */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-white/30 opacity-60 pointer-events-none" />
              </div>

              {/* Stellar Sparkle Glint on Corner */}
              <div
                className="absolute -bottom-1 -left-1 w-3 h-3 text-cyan-200 pointer-events-none"
                style={{ animation: 'jewelGlint 2.5s infinite ease-in-out' }}
              >
                ✦
              </div>

              {/* Floating Tooltip on Hover to Inspect Details */}
              {isHovered && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 p-2 rounded-xl bg-slate-950/95 border border-cyan-400/60 shadow-[0_0_25px_rgba(6,182,212,0.6)] backdrop-blur-md text-left z-50 animate-in fade-in zoom-in-90 duration-150 pointer-events-none">
                  <div className="flex items-center justify-between text-[10px] text-cyan-300 font-mono mb-0.5">
                    <span className="uppercase tracking-wider">{j.item.category}</span>
                    <span className="font-bold text-white">${j.item.price.toLocaleString()}</span>
                  </div>
                  <div className="text-[11px] font-semibold text-white truncate leading-tight">
                    {j.item.name}
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-[9px] text-slate-400">
                    <Eye className="w-2.5 h-2.5 text-cyan-400" />
                    <span>Click to inspect</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
