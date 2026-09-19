import React, { useState } from 'react';
import { Sparkles, Eye } from 'lucide-react';
import { ALL_JEWELRY } from '../data/jewelry';
import { JewelryItem } from '../types';

interface FallingJewelConfig {
  id: string;
  item: JewelryItem;
  leftPercent: number; // Posición horizontal (0% - 100%)
  size: number; // Ancho/alto en px
  durationSec: number; // Tiempo de caída en s
  delaySec: number; // Retardo en s
  swayAmplitude: number; // Amplitud del balanceo lateral
  rotationSpeed: number; // Multiplicador de velocidad de rotación
  initialRotateZ: number;
  glowColor: string;
  shape: 'octagon' | 'round' | 'cushion';
}

interface FallingJewelsRainProps {
  onSelectJewel: (item: JewelryItem) => void;
}

export const FallingJewelsRain: React.FC<FallingJewelsRainProps> = ({ onSelectJewel }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredJewelId, setHoveredJewelId] = useState<string | null>(null);

  // Mapeamos joyas reales del catálogo para que caigan anillos, collares, colgantes y gemas
  const fallingJewels: FallingJewelConfig[] = [
    // 1. Solitaire Diamond Ring (Anillo de Diamante)
    {
      id: 'fall-ring-1',
      item: ALL_JEWELRY.find((j) => j.id === 'dia-3') || ALL_JEWELRY[2],
      leftPercent: 58,
      size: 78,
      durationSec: 13,
      delaySec: 0,
      swayAmplitude: 35,
      rotationSpeed: 1,
      initialRotateZ: -12,
      glowColor: 'rgba(6,182,212,0.6)',
      shape: 'round',
    },
    // 2. Diamond Infinity Pendant (Collar / Colgante)
    {
      id: 'fall-necklace-1',
      item: ALL_JEWELRY.find((j) => j.id === 'dia-1') || ALL_JEWELRY[0],
      leftPercent: 72,
      size: 72,
      durationSec: 15,
      delaySec: 2.5,
      swayAmplitude: 25,
      rotationSpeed: 0.8,
      initialRotateZ: 15,
      glowColor: 'rgba(168,85,247,0.6)',
      shape: 'octagon',
    },
    // 3. Colombian Emerald Halo Ring (Anillo Esmeralda)
    {
      id: 'fall-ring-2',
      item: ALL_JEWELRY.find((j) => j.id === 'dia-2') || ALL_JEWELRY[1],
      leftPercent: 86,
      size: 82,
      durationSec: 12,
      delaySec: 5,
      swayAmplitude: 40,
      rotationSpeed: 1.2,
      initialRotateZ: 22,
      glowColor: 'rgba(16,185,129,0.6)',
      shape: 'cushion',
    },
    // 4. Diamond Drop Earrings (Aretes Colgantes)
    {
      id: 'fall-earring-1',
      item: ALL_JEWELRY.find((j) => j.id === 'dia-4') || ALL_JEWELRY[3],
      leftPercent: 44,
      size: 68,
      durationSec: 16,
      delaySec: 1.2,
      swayAmplitude: 20,
      rotationSpeed: 0.9,
      initialRotateZ: -18,
      glowColor: 'rgba(217,70,239,0.5)',
      shape: 'octagon',
    },
    // 5. Tennis Bracelet (Pulsera de Diamantes)
    {
      id: 'fall-bracelet-1',
      item: ALL_JEWELRY.find((j) => j.id === 'dia-5') || ALL_JEWELRY[4],
      leftPercent: 93,
      size: 76,
      durationSec: 14,
      delaySec: 7,
      swayAmplitude: 30,
      rotationSpeed: 1.1,
      initialRotateZ: 8,
      glowColor: 'rgba(56,189,248,0.5)',
      shape: 'round',
    },
    // 6. Hyperion Blue Diamond Ring (Anillo Azul Espacial)
    {
      id: 'fall-ring-3',
      item: ALL_JEWELRY.find((j) => j.id === 'dia-7') || ALL_JEWELRY[2],
      leftPercent: 64,
      size: 85,
      durationSec: 17,
      delaySec: 9,
      swayAmplitude: 45,
      rotationSpeed: 0.7,
      initialRotateZ: -25,
      glowColor: 'rgba(14,165,233,0.7)',
      shape: 'octagon',
    },
    // 7. Aurelia Rose Gold Ring (Anillo Dorado)
    {
      id: 'fall-ring-4',
      item: ALL_JEWELRY.find((j) => j.id === 'dia-8') || ALL_JEWELRY[1],
      leftPercent: 80,
      size: 74,
      durationSec: 11.5,
      delaySec: 3.8,
      swayAmplitude: 28,
      rotationSpeed: 1.3,
      initialRotateZ: 18,
      glowColor: 'rgba(245,158,11,0.6)',
      shape: 'cushion',
    },
    // 8. Royal Sapphire Choker (Collar Choker de Zafiro)
    {
      id: 'fall-necklace-2',
      item: ALL_JEWELRY.find((j) => j.id === 'dia-9') || ALL_JEWELRY[0],
      leftPercent: 50,
      size: 84,
      durationSec: 18,
      delaySec: 11,
      swayAmplitude: 35,
      rotationSpeed: 0.85,
      initialRotateZ: -10,
      glowColor: 'rgba(99,102,241,0.7)',
      shape: 'round',
    },
    // 9. Celestial Diamond Glint (Diamante Luminoso en el lado izquierdo/central)
    {
      id: 'fall-ring-5',
      item: ALL_JEWELRY.find((j) => j.id === 'dia-6') || ALL_JEWELRY[3],
      leftPercent: 36,
      size: 65,
      durationSec: 15.5,
      delaySec: 6.2,
      swayAmplitude: 22,
      rotationSpeed: 1.0,
      initialRotateZ: 30,
      glowColor: 'rgba(6,182,212,0.5)',
      shape: 'octagon',
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20 perspective-jewel">
      {/* Botón sutil en esquina inferior del Hero para pausar o admirar la lluvia cósmica */}
      <div className="absolute top-4 right-4 sm:right-8 z-30 pointer-events-auto">
        <button
          onClick={() => setIsPaused(!isPaused)}
          title={isPaused ? 'Resume falling jewels' : 'Pause falling jewels'}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 text-[11px] font-mono tracking-wider backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-pointer group"
        >
          <Sparkles className={`w-3.5 h-3.5 text-cyan-400 ${isPaused ? '' : 'animate-spin'}`} />
          <span className="hidden sm:inline font-sans">
            {isPaused ? 'Jewels Fall: Paused' : 'Jewels Cascade: Active'}
          </span>
        </button>
      </div>

      {/* Conjunto de Joyas Cayendo y Rotando en 3D */}
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
              animationPlayState: isPaused || isHovered ? 'paused' : 'running',
              willChange: 'transform, opacity',
            }}
            onMouseEnter={() => setHoveredJewelId(j.id)}
            onMouseLeave={() => setHoveredJewelId(null)}
            onClick={() => onSelectJewel(j.item)}
          >
            {/* Jewel Card Container con Giro 3D y Borde de Cristal Facetado */}
            <div
              className={`relative w-full h-full p-1.5 rounded-2xl transition-transform duration-300 ${
                isHovered ? 'scale-125 z-40' : 'hover:scale-110'
              }`}
              style={{
                background:
                  'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.18), rgba(2,6,23,0.85) 75%)',
                boxShadow: `0 0 25px ${j.glowColor}, inset 0 0 15px rgba(255,255,255,0.2)`,
                border: '1.5px solid rgba(255,255,255,0.35)',
                backdropFilter: 'blur(8px)',
              }}
            >
              {/* Joya: Imagen en alta definición */}
              <div className="w-full h-full rounded-xl overflow-hidden relative flex items-center justify-center bg-black/40">
                <img
                  src={j.item.image}
                  alt={j.item.name}
                  className="w-full h-full object-cover transform group-hover:rotate-12 transition-transform duration-500 filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
                  loading="eager"
                />

                {/* Brillo de refracción sobre la gema */}
                <div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full blur-[1px] opacity-80 animate-pulse pointer-events-none"
                  style={{
                    boxShadow: '0 0 12px #fff, 0 0 20px #38bdf8',
                  }}
                />

                {/* Reflejo prismático dinámico */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-white/30 opacity-60 pointer-events-none" />
              </div>

              {/* Destello estelar parpadeante en esquina opuesta */}
              <div
                className="absolute -bottom-1 -left-1 w-3 h-3 text-cyan-200 pointer-events-none"
                style={{ animation: 'jewelGlint 2.5s infinite ease-in-out' }}
              >
                ✦
              </div>

              {/* Tooltip flotante al hacer hover para ver detalles */}
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
