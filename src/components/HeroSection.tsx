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
    <section className="relative w-full flex-1 flex items-center px-6 sm:px-10 lg:px-16 xl:px-20 py-4 sm:py-6 md:py-8 lg:py-10 z-10 overflow-hidden">
      <FallingJewelsRain
        onSelectJewel={(jewel) => {
          if (onSelectProduct) {
            onSelectProduct(jewel);
          } else {
            onExplore();
          }
        }}
      />

      <div className="max-w-[1920px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center relative z-20">
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8">
          <div className="inline-flex items-center gap-2">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-[0.25em] uppercase bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.85)]">
              TIMELESS BEAUTY. PRECIOUS MOMENTS.
            </span>
          </div>

          {/* Main Display Headline */}
          <h1 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-[5.5rem] font-normal tracking-tight text-white leading-[1.06]">
            Exceptional Jewelry, <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(56,189,248,0.75)] font-medium">
              Made to Shine
            </span>
          </h1>

          {/* Subheading / Description */}
          <p className="text-slate-200 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed max-w-3xl font-light">
            Discover our exquisite collection of fine jewelry, crafted with passion, designed for forever.
          </p>

          {/* Dual Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2 sm:pt-3">
            <button
              id="btn-hero-explore-collection"
              onClick={onExplore}
              className="group relative px-8 sm:px-10 md:px-11 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-base sm:text-lg md:text-xl tracking-wider uppercase shadow-[0_0_35px_rgba(6,182,212,0.6)] hover:shadow-[0_0_50px_rgba(6,182,212,0.9)] border border-cyan-300/40 transition-all duration-300 flex items-center gap-3 cursor-pointer hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1.5 transition-transform" />
              <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button
              id="btn-hero-shop-new"
              onClick={onShopNewArrivals}
              className="px-8 sm:px-10 md:px-11 py-4 sm:py-5 rounded-2xl bg-[#0a102a]/85 hover:bg-[#101940] text-slate-100 hover:text-white font-semibold text-base sm:text-lg md:text-xl tracking-wider uppercase border border-cyan-500/40 hover:border-cyan-300 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-all duration-300 cursor-pointer hover:scale-[1.03] active:scale-[0.98]"
            >
              SHOP NEW ARRIVALS
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-5 sm:gap-7 pt-3 sm:pt-4 text-slate-200">
            <div className="flex items-center">
              <div className="flex -space-x-2.5">
                {CUSTOMER_AVATARS.map((c, i) => (
                  <img
                    key={i}
                    src={c.img}
                    alt={c.name}
                    referrerPolicy="no-referrer"
                    className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-[#030712] object-cover shadow-lg"
                  />
                ))}
              </div>
              <span className="ml-3.5 font-medium text-slate-200 text-sm sm:text-base md:text-lg lg:text-xl">
                50,000+ Happy Customers
              </span>
            </div>

            <div className="flex items-center gap-2 border-l border-slate-700/80 pl-4 sm:pl-5">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
              <span className="font-bold text-white text-sm sm:text-base md:text-lg lg:text-xl">4.8</span>
              <span className="text-slate-400 text-xs sm:text-sm md:text-base font-normal">(2,500+ Reviews)</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-cyan-300 border-l border-slate-700/80 pl-4 sm:pl-5 font-medium text-xs sm:text-sm md:text-base">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span>Trusted by Thousands</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center relative min-h-[340px] sm:min-h-[460px] lg:min-h-[580px] xl:min-h-[660px] 2xl:min-h-[740px] w-full">
          <FuturisticRingHero onExplore={onExplore} />
        </div>
      </div>
    </section>
  );
};
