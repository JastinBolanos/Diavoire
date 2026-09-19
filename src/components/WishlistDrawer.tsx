import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { JewelryItem } from '../types';
import { JewelryVisual } from './JewelryVisual';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistItems: JewelryItem[];
  onRemoveWishlist: (id: string) => void;
  onAddToCart: (item: JewelryItem) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistItems,
  onRemoveWishlist,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#050816] border-l border-pink-500/20 shadow-2xl flex flex-col justify-between text-left">
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
              <h2 className="font-cinzel text-lg font-bold text-white tracking-wider">
                FAVORITE PIECES
              </h2>
              <span className="text-xs font-tech text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded-full border border-pink-400/20">
                {wishlistItems.length} saved
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {wishlistItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-12">
                <div className="w-16 h-16 rounded-full bg-slate-900 border border-dashed border-pink-400/30 flex items-center justify-center text-slate-500">
                  <Heart className="w-8 h-8" />
                </div>
                <p className="text-slate-300 font-medium text-sm">Your wishlist is empty</p>
                <p className="text-slate-500 text-xs max-w-xs">
                  Tap the heart icon on any jewelry piece to save it to your wishlist.
                </p>
              </div>
            ) : (
              wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/5 items-center justify-between"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-[#020512]">
                    <JewelryVisual id={item.id} name={item.name} />
                  </div>
                  <div className="flex-1 min-w-0 pr-2">
                    <h4 className="text-xs font-semibold text-white truncate">{item.name}</h4>
                    <span className="text-[11px] text-slate-400 block mt-0.5">{item.carat}</span>
                    <span className="font-tech text-xs font-bold text-white mt-1 block">
                      ${item.price.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 shrink-0">
                    <button
                      onClick={() => onAddToCart(item)}
                      className="px-2.5 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500 text-cyan-300 hover:text-white text-xs font-medium border border-cyan-500/40 transition-colors flex items-center gap-1"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Add</span>
                    </button>
                    <button
                      onClick={() => onRemoveWishlist(item.id)}
                      className="text-slate-500 hover:text-rose-400 text-[11px] text-center"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlistItems.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-slate-950/80">
              <button
                onClick={() => {
                  wishlistItems.forEach((item) => onAddToCart(item));
                  onClose();
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white font-semibold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Move All to Bag</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
