import React from 'react';
import { Diamond, Truck, RefreshCw, ShieldCheck, Gift } from 'lucide-react';

export const TrustBadgesBar: React.FC = () => {
  const badges = [
    {
      icon: Diamond,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-400/30 shadow-[0_0_12px_rgba(6,182,212,0.3)]',
      title: 'CERTIFIED DIAMONDS',
      subtitle: '100% conflict-free',
    },
    {
      icon: Truck,
      color: 'text-purple-400 bg-purple-500/10 border-purple-400/30 shadow-[0_0_12px_rgba(168,85,247,0.3)]',
      title: 'FREE INSURED SHIPPING',
      subtitle: 'On all orders',
    },
    {
      icon: RefreshCw,
      color: 'text-sky-400 bg-sky-500/10 border-sky-400/30 shadow-[0_0_12px_rgba(56,189,248,0.3)]',
      title: '30-DAY RETURNS',
      subtitle: 'Hassle-free returns',
    },
    {
      icon: ShieldCheck,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-400/30 shadow-[0_0_12px_rgba(99,102,241,0.3)]',
      title: 'LIFETIME WARRANTY',
      subtitle: 'On all fine jewelry',
    },
    {
      icon: Gift,
      color: 'text-blue-400 bg-blue-500/10 border-blue-400/30 shadow-[0_0_12px_rgba(59,130,246,0.3)]',
      title: 'LUXURY GIFT BOX',
      subtitle: 'On every order',
    },
  ];

  return (
    <div className="w-full px-4 md:px-8 pb-3 z-10 select-none">
      <div className="max-w-[1920px] mx-auto rounded-xl bg-slate-950/75 backdrop-blur-lg border border-blue-900/30 px-3 sm:px-6 py-2.5 shadow-lg">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 items-center justify-between">
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2.5 group hover:translate-x-0.5 transition-transform"
              >
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center border shrink-0 transition-transform group-hover:scale-105 ${b.color}`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-tech text-[10px] sm:text-[11px] font-bold tracking-wider text-white group-hover:text-cyan-200 transition-colors">
                    {b.title}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-slate-400 -mt-0.5">
                    {b.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
