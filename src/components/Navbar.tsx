import React from 'react';
import { Search, User, Heart, ShoppingBag, Diamond } from 'lucide-react';
import { ActiveNavTab } from '../types';

interface NavbarProps {
  activeTab: ActiveNavTab;
  onSelectTab: (tab: ActiveNavTab) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  wishlistCount: number;
  cartCount: number;
  onOpenWishlist: () => void;
  onOpenCart: () => void;
  onOpenProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  searchQuery,
  onSearchChange,
  wishlistCount,
  cartCount,
  onOpenWishlist,
  onOpenCart,
  onOpenProfile,
}) => {
  const navItems: ActiveNavTab[] = [
    'HOME',
    'NECKLACES',
    'RINGS',
    'EARRINGS',
    'BRACELETS',
    'COLLECTIONS',
    'GIFTS',
    'SALE',
  ];

  return (
    <header className="w-full bg-[#020515]/85 backdrop-blur-md border-b border-white/[0.07] px-4 md:px-8 py-2.5 z-20 transition-all">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div 
          onClick={() => onSelectTab('HOME')}
          className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
        >
          {/* Geometric Diamond Emblem */}
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-900/60 to-purple-950/60 border border-cyan-400/40 flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] group-hover:border-cyan-300 transition-all duration-300">
            <Diamond className="w-5 h-5 text-cyan-300 stroke-[1.75] group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75" />
          </div>

          <div className="flex flex-col">
            <span className="font-cinzel text-xl md:text-2xl font-bold tracking-[0.18em] text-white group-hover:text-cyan-200 transition-colors drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              DIAVOIRE
            </span>
            <span className="text-[9px] tracking-[0.35em] text-slate-400 font-medium -mt-1 group-hover:text-cyan-300/80 transition-colors">
              FINE JEWELRY
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                id={`nav-item-${tab.toLowerCase()}`}
                onClick={() => onSelectTab(tab)}
                className={`relative px-3 py-1.5 text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-300 hover:text-cyan-200'
                }`}
              >
                {tab}
                {isActive && (
                  <div className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.9)]" />
                )}
                {tab === 'SALE' && (
                  <span className="ml-1.5 px-1 py-0.2 text-[9px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/40 rounded">
                    HOT
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Search & Actions */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* Futuristic Search Pill */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              id="input-search-jewelry"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search jewelry..."
              className="w-44 md:w-56 lg:w-64 pl-9 pr-4 py-1.5 text-xs rounded-full bg-slate-900/80 border border-white/15 focus:border-cyan-400/80 focus:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 text-slate-200 placeholder-slate-400 transition-all shadow-inner"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                ×
              </button>
            )}
          </div>

          {/* User Profile */}
          <button
            id="btn-user-profile"
            onClick={onOpenProfile}
            title="Account & Concierge"
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer border border-transparent hover:border-white/10"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Wishlist with Badge */}
          <button
            id="btn-wishlist-toggle"
            onClick={onOpenWishlist}
            title="Wishlist"
            className="relative w-8 h-8 rounded-full flex items-center justify-center text-slate-300 hover:text-rose-300 hover:bg-rose-500/10 transition-all cursor-pointer border border-transparent hover:border-rose-500/20"
          >
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white text-[10px] font-bold flex items-center justify-center shadow-[0_0_8px_rgba(236,72,153,0.8)]">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Bag with Badge */}
          <button
            id="btn-cart-toggle"
            onClick={onOpenCart}
            title="Shopping Cart"
            className="relative w-8 h-8 rounded-full flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all cursor-pointer border border-transparent hover:border-cyan-500/20"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[10px] font-bold flex items-center justify-center shadow-[0_0_8px_rgba(6,182,212,0.8)]">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
