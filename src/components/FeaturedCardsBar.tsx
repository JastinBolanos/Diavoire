import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import { JewelryItem } from '../types';
import { JewelryVisual } from './JewelryVisual';

interface FeaturedCardsBarProps {
  items: JewelryItem[];
  wishlistIds: Set<string>;
  onToggleWishlist: (id: string) => void;
  onSelectItem: (item: JewelryItem) => void;
  onQuickAdd: (item: JewelryItem, e: React.MouseEvent) => void;
  onViewAll: () => void;
}

export const FeaturedCardsBar: React.FC<FeaturedCardsBarProps> = ({
  items,
  wishlistIds,
  onToggleWishlist,
  onSelectItem,
  onViewAll,
}) => {
  return (
    <div className="w-full px-4 md:px-8 z-10 select-none pb-2">
      <div className="max-w-[1920px] mx-auto rounded-2xl bg-[#060b24]/90 backdrop-blur-xl border border-blue-900/50 p-3 sm:p-4 shadow-[0_8px_32px_rgba(2,6,23,0.8)] ring-1 ring-white/5">
        {/* Header Bar: FEATURED PIECES & VIEW ALL COLLECTIONS */}
        <div className="flex items-center justify-between pb-2.5 px-1 border-b border-white/[0.08] mb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,1)] animate-pulse" />
            <span className="font-tech text-xs sm:text-sm font-bold tracking-[0.2em] text-white uppercase">
              FEATURED PIECES
            </span>
          </div>

          <button
            id="btn-view-all-collections"
            onClick={onViewAll}
            className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 tracking-wider transition-colors cursor-pointer group"
          >
            <span className="text-[11px] sm:text-xs">VIEW ALL COLLECTIONS</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 5 Cards Row - Configured to fit in a single screen on desktop without overflowing */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3 lg:gap-3.5">
          {items.slice(0, 5).map((item) => {
            const isWishlisted = wishlistIds.has(item.id);

            return (
              <div
                key={item.id}
                id={`card-jewelry-${item.id}`}
                onClick={() => onSelectItem(item)}
                className="group relative rounded-xl bg-gradient-to-b from-[#091030]/90 to-[#04081c]/95 border border-blue-900/40 hover:border-cyan-400/80 p-2 sm:p-2.5 transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              >
                {/* Visual Area with Jewel Display */}
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-[#020512] flex items-center justify-center border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                  {/* Badge positioned over the top-left of the image */}
                  <div className="absolute top-2 left-2 z-20 flex items-center gap-1.5">
                    {item.badge && (
                      <span
                        className={`text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full text-white shadow-[0_0_10px_rgba(0,0,0,0.5)] ${
                          item.badge === 'BESTSELLER'
                            ? 'bg-gradient-to-r from-fuchsia-600 to-pink-600'
                            : item.badge === 'NEW'
                            ? 'bg-gradient-to-r from-blue-600 to-cyan-600'
                            : item.badge === 'LIMITED'
                            ? 'bg-gradient-to-r from-purple-600 to-indigo-600'
                            : 'bg-gradient-to-r from-red-600 to-rose-600'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                    {item.badge === 'SALE' && (
                      <span className="text-[8px] font-extrabold tracking-tight px-1.5 py-0.5 rounded-full text-cyan-200 bg-cyan-950/80 border border-cyan-400/50">
                        54% OFF
                      </span>
                    )}
                  </div>

                  <JewelryVisual id={item.id} name={item.name} className="transition-transform duration-500 group-hover:scale-105" />

                  <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="pt-2 px-1 flex flex-col justify-between">
                  <h3 className="text-white text-xs sm:text-[13px] font-medium tracking-normal truncate group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h3>

                  <div className="flex items-center justify-between pt-1.5">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-white font-bold text-xs sm:text-sm font-tech">
                        ${item.price.toLocaleString()}
                      </span>
                      {item.originalPrice && (
                        <span className="text-[10px] text-slate-400 line-through">
                          ${item.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <button
                      id={`btn-wishlist-${item.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleWishlist(item.id);
                      }}
                      title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                        isWishlisted
                          ? 'text-pink-400 bg-pink-500/20 shadow-[0_0_10px_rgba(236,72,153,0.5)]'
                          : 'text-slate-400 hover:text-white bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <Heart
                        className={`w-3.5 h-3.5 ${
                          isWishlisted ? 'fill-pink-500 text-pink-500' : 'stroke-[1.5]'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
