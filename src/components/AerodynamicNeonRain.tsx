import React, { useEffect, useRef, useState } from 'react';

export type RainColorPalette = 'pearlescent-blue' | 'emerald-neon';

interface AerodynamicNeonRainProps {
  palette?: RainColorPalette;
  opacity?: number;
  zIndex?: number;
  enabled?: boolean;
}

interface Drop {
  layer: number;
  x: number;
  y: number;
  speed: number;
  spriteIndex: number;
  length: number;
}

interface PoolRipple {
  active: boolean;
  x: number;
  y: number;
  rx: number;
  ry: number;
  maxRx: number;
  alpha: number;
  color: string;
}

interface PoolSpark {
  active: boolean;
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
}

interface AmbientOrb {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  radius: number;
  speedX: number;
  speedY: number;
  phase: number;
  freq: number;
  alpha: number;
}

export const AerodynamicNeonRain: React.FC<AerodynamicNeonRainProps> = ({
  palette = 'pearlescent-blue',
  opacity = 0.95,
  zIndex = 1,
  enabled = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activePalette, setActivePalette] = useState<RainColorPalette>(palette);
  const [isVisible, setIsVisible] = useState(enabled);

  useEffect(() => {
    setActivePalette(palette);
  }, [palette]);

  useEffect(() => {
    setIsVisible(enabled);
  }, [enabled]);

  useEffect(() => {
    if (!isVisible) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isRunning = true;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let cssWidth = window.innerWidth;
    let cssHeight = window.innerHeight;

    const resizeCanvas = () => {
      cssWidth = window.innerWidth;
      cssHeight = window.innerHeight;
      canvas.width = Math.round(cssWidth * dpr);
      canvas.height = Math.round(cssHeight * dpr);
      canvas.style.width = `${cssWidth}px`;
      canvas.style.height = `${cssHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resizeCanvas();

    const WIND_TAN = 0.2217;
    const WIND_ANGLE = 12.5 * (Math.PI / 180);

    const BLUE_PALETTE = {
      colors: ['#00f0ff', '#7dd3fc', '#38bdf8', '#bae6fd'],
      primary: '#00f0ff',
      spark: '#e0f2fe',
      orb: 'rgba(56, 189, 248, 0.45)',
    };

    const GREEN_PALETTE = {
      colors: ['#00ff88', '#67eb34', '#4ade80', '#a7f3d0'],
      primary: '#00ff88',
      spark: '#dcfce7',
      orb: 'rgba(74, 222, 128, 0.45)',
    };

    const currentPalette = activePalette === 'emerald-neon' ? GREEN_PALETTE : BLUE_PALETTE;

    const layerConfigs = [
      { length: 24, width: 1.1, speedMin: 0.9, speedMax: 1.5, opacity: 0.22, count: 40, hasHead: false },
      { length: 42, width: 1.6, speedMin: 1.6, speedMax: 2.5, opacity: 0.65, count: 32, hasHead: false },
      { length: 62, width: 2.2, speedMin: 2.6, speedMax: 3.8, opacity: 0.9, count: 22, hasHead: true },
    ];

    const streakSprites: HTMLCanvasElement[][] = layerConfigs.map((cfg) => {
      return currentPalette.colors.map((color) => {
        const offCanvas = document.createElement('canvas');
        const dx = cfg.length * Math.sin(WIND_ANGLE);
        const dy = cfg.length * Math.cos(WIND_ANGLE);
        const pad = cfg.hasHead ? 8 : 4;
        const w = Math.ceil(dx + pad * 2);
        const h = Math.ceil(dy + pad * 2);

        offCanvas.width = Math.max(w, 1);
        offCanvas.height = Math.max(h, 1);
        const offCtx = offCanvas.getContext('2d');
        if (!offCtx) return offCanvas;

        const startX = pad;
        const startY = pad;
        const endX = pad + dx;
        const endY = pad + dy;

        const grad = offCtx.createLinearGradient(startX, startY, endX, endY);
        grad.addColorStop(0, 'rgba(255,255,255,0)');
        grad.addColorStop(0.5, color);
        grad.addColorStop(1, '#ffffff');

        offCtx.strokeStyle = grad;
        offCtx.lineWidth = cfg.width;
        offCtx.lineCap = 'round';
        offCtx.globalAlpha = cfg.opacity;

        offCtx.beginPath();
        offCtx.moveTo(startX, startY);
        offCtx.lineTo(endX, endY);
        offCtx.stroke();

        if (cfg.hasHead) {
          offCtx.globalAlpha = 1.0;
          const haloGrad = offCtx.createRadialGradient(endX, endY, 0, endX, endY, 4.5);
          haloGrad.addColorStop(0, '#ffffff');
          haloGrad.addColorStop(0.35, color);
          haloGrad.addColorStop(1, 'rgba(255,255,255,0)');
          offCtx.fillStyle = haloGrad;
          offCtx.beginPath();
          offCtx.arc(endX, endY, 4.5, 0, Math.PI * 2);
          offCtx.fill();

          offCtx.fillStyle = '#ffffff';
          offCtx.beginPath();
          offCtx.arc(endX, endY, 1.2, 0, Math.PI * 2);
          offCtx.fill();
        }

        return offCanvas;
      });
    });

    const orbSprite = document.createElement('canvas');
    orbSprite.width = 32;
    orbSprite.height = 32;
    const orbCtx = orbSprite.getContext('2d');
    if (orbCtx) {
      const grad = orbCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(0.25, currentPalette.primary);
      grad.addColorStop(0.7, currentPalette.orb);
      grad.addColorStop(1, 'rgba(0, 240, 255, 0)');
      orbCtx.fillStyle = grad;
      orbCtx.beginPath();
      orbCtx.arc(16, 16, 16, 0, Math.PI * 2);
      orbCtx.fill();
    }

    const drops: Drop[] = [];
    layerConfigs.forEach((cfg, layerIdx) => {
      const numColors = currentPalette.colors.length;
      for (let i = 0; i < cfg.count; i++) {
        const extraSlantWidth = cssHeight * WIND_TAN;
        drops.push({
          layer: layerIdx,
          x: Math.random() * (cssWidth + extraSlantWidth * 1.5) - extraSlantWidth,
          y: Math.random() * (cssHeight + 200) - 100,
          speed: cfg.speedMin + Math.random() * (cfg.speedMax - cfg.speedMin),
          spriteIndex: i % numColors,
          length: cfg.length,
        });
      }
    });

    const MAX_RIPPLES = 24;
    const ripplesPool: PoolRipple[] = Array.from({ length: MAX_RIPPLES }, () => ({
      active: false,
      x: 0,
      y: 0,
      rx: 0,
      ry: 0,
      maxRx: 0,
      alpha: 0,
      color: currentPalette.primary,
    }));

    const MAX_SPARKS = 36;
    const sparksPool: PoolSpark[] = Array.from({ length: MAX_SPARKS }, () => ({
      active: false,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      alpha: 0,
      color: currentPalette.spark,
    }));

    const spawnRipple = (x: number, y: number, maxRx: number, alpha: number) => {
      for (let i = 0; i < MAX_RIPPLES; i++) {
        const rip = ripplesPool[i];
        if (!rip.active) {
          rip.active = true;
          rip.x = x;
          rip.y = y;
          rip.rx = 2;
          rip.ry = 1;
          rip.maxRx = maxRx;
          rip.alpha = alpha;
          rip.color = currentPalette.primary;
          break;
        }
      }
    };

    const spawnSpark = (x: number, y: number, vx: number, vy: number) => {
      for (let i = 0; i < MAX_SPARKS; i++) {
        const sp = sparksPool[i];
        if (!sp.active) {
          sp.active = true;
          sp.x = x;
          sp.y = y;
          sp.vx = vx;
          sp.vy = vy;
          sp.alpha = 0.95;
          sp.color = currentPalette.spark;
          break;
        }
      }
    };

    const ORB_COUNT = 12;
    const orbs: AmbientOrb[] = [];
    for (let i = 0; i < ORB_COUNT; i++) {
      const x = Math.random() * cssWidth;
      const y = Math.random() * cssHeight;
      orbs.push({
        baseX: x,
        baseY: y,
        x,
        y,
        radius: 10 + Math.random() * 12,
        speedX: 0.08 + Math.random() * 0.18,
        speedY: 0.12 + Math.random() * 0.22,
        phase: Math.random() * Math.PI * 2,
        freq: 0.001 + Math.random() * 0.0015,
        alpha: 0.25 + Math.random() * 0.35,
      });
    }

    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout | null = null;
    const handleScroll = () => {
      isScrolling = true;
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 90);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    let resizeTimer: NodeJS.Timeout | null = null;
    const handleResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resizeCanvas();
      }, 100);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false;
      } else {
        isRunning = true;
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let lastTime = performance.now();

    const render = (now: number) => {
      if (!isRunning) return;

      const deltaMs = now - lastTime;
      lastTime = now;
      const dt = Math.min(deltaMs / 16.667, 1.8);

      ctx.clearRect(0, 0, cssWidth, cssHeight);
      ctx.globalCompositeOperation = 'lighter';

      const extraSlantWidth = cssHeight * WIND_TAN;

      for (let i = 0; i < drops.length; i++) {
        const d = drops[i];
        const dx = d.speed * WIND_TAN * dt;
        const dy = d.speed * dt;

        d.x += dx;
        d.y += dy;

        if (d.y >= cssHeight - 6) {
          if (d.layer >= 1 && !isScrolling) {
            const chance = d.layer === 2 ? 0.65 : 0.35;
            if (Math.random() < chance) {
              const maxRx = d.layer === 2 ? 18 + Math.random() * 8 : 12 + Math.random() * 5;
              spawnRipple(d.x, cssHeight - 4, maxRx, d.layer === 2 ? 0.75 : 0.45);

              const sparkCount = Math.random() < 0.5 ? 2 : 1;
              for (let s = 0; s < sparkCount; s++) {
                spawnSpark(
                  d.x,
                  cssHeight - 4,
                  (Math.random() - 0.45) * 2.2 + dx * 0.1,
                  -(Math.random() * 2.4 + 1.6)
                );
              }
            }
          }

          d.y = -d.length - Math.random() * 60;
          d.x = Math.random() * (cssWidth + extraSlantWidth * 1.5) - extraSlantWidth;
        }

        if (d.x > cssWidth + 80) {
          d.x = Math.random() * (cssWidth + extraSlantWidth * 1.5) - extraSlantWidth;
          d.y = -d.length - Math.random() * 60;
        }

        const layerSprites = streakSprites[d.layer];
        if (layerSprites && layerSprites.length > 0) {
          const sprite = layerSprites[d.spriteIndex % layerSprites.length];
          if (sprite) {
            ctx.drawImage(sprite, Math.round(d.x), Math.round(d.y));
          }
        }
      }

      if (!isScrolling) {
        ctx.lineWidth = 1.1;
        for (let r = 0; r < MAX_RIPPLES; r++) {
          const rip = ripplesPool[r];
          if (!rip.active) continue;

          rip.rx += (rip.maxRx - rip.rx) * 0.12 * dt + 0.25 * dt;
          rip.ry = rip.rx * 0.5;
          rip.alpha -= 0.028 * dt;

          if (rip.alpha <= 0.01 || rip.rx >= rip.maxRx) {
            rip.active = false;
            continue;
          }

          ctx.strokeStyle = rip.color;
          ctx.globalAlpha = Math.max(rip.alpha, 0);
          ctx.beginPath();
          ctx.ellipse(rip.x, rip.y, rip.rx, rip.ry, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      if (!isScrolling) {
        const gravity = 0.18;
        for (let s = 0; s < MAX_SPARKS; s++) {
          const sp = sparksPool[s];
          if (!sp.active) continue;

          sp.x += sp.vx * dt;
          sp.y += sp.vy * dt;
          sp.vy += gravity * dt;
          sp.alpha -= 0.035 * dt;

          if (sp.alpha <= 0.02 || sp.y > cssHeight + 4) {
            sp.active = false;
            continue;
          }

          ctx.fillStyle = sp.color;
          ctx.globalAlpha = Math.max(sp.alpha, 0);
          ctx.beginPath();
          ctx.arc(sp.x, sp.y, 1.1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      for (let i = 0; i < orbs.length; i++) {
        const orb = orbs[i];
        orb.phase += orb.freq * dt * 16.667;

        orb.x = orb.baseX + Math.sin(orb.phase) * 25;
        orb.y = orb.baseY + Math.cos(orb.phase * 0.7) * 18;

        orb.baseY -= orb.speedY * dt;
        orb.baseX += orb.speedX * dt;

        if (orb.baseY < -40) {
          orb.baseY = cssHeight + 30;
          orb.baseX = Math.random() * cssWidth;
        }
        if (orb.baseX > cssWidth + 40) {
          orb.baseX = -30;
        }

        ctx.globalAlpha = orb.alpha * (0.7 + Math.sin(orb.phase * 2) * 0.3);
        const drawSize = orb.radius * 2;
        ctx.drawImage(orbSprite, orb.x - orb.radius, orb.y - orb.radius, drawSize, drawSize);
      }

      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      if (resizeTimer) clearTimeout(resizeTimer);
    };
  }, [activePalette, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <canvas
        ref={canvasRef}
        id="aerodynamic-neon-rain-canvas"
        className="fixed inset-0 pointer-events-none select-none"
        style={{
          zIndex,
          opacity,
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />

      <div className="fixed bottom-4 left-4 z-40 flex items-center gap-2 pointer-events-auto">
        <div className="bg-slate-950/85 hover:bg-slate-900/95 backdrop-blur-xl border border-cyan-400/40 hover:border-cyan-300/80 rounded-full px-3 py-1.5 text-xs shadow-[0_0_20px_rgba(6,182,212,0.35)] flex items-center gap-2.5 transition-all duration-300">
          <button
            onClick={() => setActivePalette((prev) => (prev === 'pearlescent-blue' ? 'emerald-neon' : 'pearlescent-blue'))}
            title="Alternar paleta"
            className="flex items-center gap-1.5 font-mono text-[11px] text-cyan-300 hover:text-white transition-colors cursor-pointer"
          >
            <span
              className={`w-2 h-2 rounded-full ${
                activePalette === 'pearlescent-blue' ? 'bg-cyan-400 shadow-[0_0_8px_#38bdf8]' : 'bg-emerald-400 shadow-[0_0_8px_#34d399]'
              }`}
            />
            <span className="font-semibold uppercase tracking-wider">
              {activePalette === 'pearlescent-blue' ? 'Pearlescent' : 'Emerald'}
            </span>
          </button>

          <span className="text-slate-600">|</span>

          <button
            onClick={() => setIsVisible((prev) => !prev)}
            title="Toggle Atmosphere"
            className="text-[10px] text-slate-400 hover:text-cyan-200 transition-colors uppercase font-mono font-bold"
          >
            {isVisible ? 'ON' : 'OFF'}
          </button>
        </div>
      </div>
    </>
  );
};
