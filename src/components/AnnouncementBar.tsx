import React from 'react';
import { Package, RefreshCw, ShieldCheck, Crown } from 'lucide-react';

interface AnnouncementBarProps {
  onOpenVip: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onOpenVip }) => {
  return (
    <div className="w-full bg-[#02050f]/90 border-b border-blue-950/40 text-xs py-1.5 px-4 md:px-8 text-slate-300 flex items-center justify-between z-30 select-none">
      {/* Left benefits */}
      <div className="flex items-center gap-6 md:gap-10 overflow-x-auto no-scrollbar py-0.5">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
            <Package className="w-3.5 h-3.5" />
          </div>
          <span className="font-medium text-slate-200">Free Insured Shipping</span>
          <span className="text-slate-500 hidden sm:inline">On all orders over $100</span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
            <RefreshCw className="w-3.5 h-3.5" />
          </div>
          <span className="font-medium text-slate-200">30-Day Easy Returns</span>
          <span className="text-slate-500 hidden sm:inline">Love it or return it</span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="w-5 h-5 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
          <span className="font-medium text-slate-200">Lifetime Warranty</span>
          <span className="text-slate-500 hidden sm:inline">On all fine jewelry</span>
        </div>
      </div>

      {/* Right VIP CTA */}
      <button
        id="btn-vip-announcement"
        onClick={onOpenVip}
        className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-medium shrink-0 transition-colors ml-4 hover:scale-105 transform duration-150 group cursor-pointer"
      >
        <Crown className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform" />
        <span className="text-[11px] sm:text-xs">Join VIP Club & Get 10% Off</span>
      </button>
    </div>
  );
};
