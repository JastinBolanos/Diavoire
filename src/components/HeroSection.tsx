import React from 'react';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';
import { CUSTOMER_AVATARS } from '../data/jewelry';
import { FuturisticRingHero } from './FuturisticRingHero';
import { FallingJewelsRain } from './FallingJewelsRain';
import { JewelryItem } from '../types';

interface HeroSectionProps {
  onExplore: () => void;
  onShopNewArrivals: () => void;
  onSelectProduct?: (item: JewelryItem) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplore,
  onShopNewArrivals,
  onSelectProduct,
}) => {
  return (
    <section className="relative w-full flex-1 flex items-center px-4 md:px-8 py-2 md:py-4 z-10 overflow-hidden">
      <FallingJewelsRain
        onSelectJewel={(jewel) => {
          if (onSelectProduct) {
            onSelectProduct(jewel);
          } else {
            onExplore();
          }
        }}
      />

      <div className="max-w-[1920px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-20">
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center text-left space-y-3.5 md:space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(6,182,212,0.8)]">
              TIMELESS BEAUTY. PRECIOUS MOMENTS.
            </span>
          </div>

          {/* Main Display Headline */}
          <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-normal tracking-tight text-white leading-[1.12]">
            Exceptional Jewelry, <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(56,189,248,0.7)] font-medium">
              Made to Shine
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg font-light">
            Discover our exquisite collection of fine jewelry, crafted with passion, designed for forever.
          </p>

          {/* Dual Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              id="btn-hero-explore-collection"
              onClick={onExplore}
              className="group relative px-6 sm:px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_30px_rgba(6,182,212,0.55)] hover:shadow-[0_0_40px_rgba(6,182,212,0.8)] border border-cyan-300/30 transition-all duration-300 flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button
              id="btn-hero-shop-new"
              onClick={onShopNewArrivals}
              className="px-6 sm:px-7 py-3 rounded-xl bg-[#0a102a]/80 hover:bg-[#101940] text-slate-100 hover:text-white font-semibold text-xs sm:text-sm tracking-wider uppercase border border-cyan-500/30 hover:border-cyan-400 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all duration-300 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              SHOP NEW ARRIVALS
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs text-slate-300">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {CUSTOMER_AVATARS.map((c, i) => (
                  <img
                    key={i}
                    src={c.img}
                    alt={c.name}
                    referrerPolicy="no-referrer"
                    className="w-7 h-7 rounded-full border-2 border-[#030712] object-cover shadow"
                  />
                ))}
              </div>
              <span className="ml-2.5 font-medium text-slate-200 text-xs">
                50,000+ Happy Customers
              </span>
            </div>

            <div className="flex items-center gap-1.5 border-l border-slate-700/60 pl-4">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span className="font-bold text-white text-xs">4.8</span>
              <span className="text-slate-400 text-[11px]">(2,500+ Reviews)</span>
            </div>

            <div className="hidden sm:flex items-center gap-1 text-cyan-400 border-l border-slate-700/60 pl-4 font-medium text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Trusted by Thousands</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 xl:col-span-7 flex items-center justify-center relative min-h-[260px] sm:min-h-[340px] lg:min-h-[420px] xl:min-h-[480px] w-full">
          <FuturisticRingHero onExplore={onExplore} />
        </div>
      </div>
    </section>
  );
};
