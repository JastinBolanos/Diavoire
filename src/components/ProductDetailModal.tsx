import React, { useState } from 'react';
import { X, Heart, ShoppingBag, ShieldCheck, Award, Sparkles, Check } from 'lucide-react';
import { JewelryItem } from '../types';
import { JewelryVisual } from './JewelryVisual';

interface ProductDetailModalProps {
  item: JewelryItem | null;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (id: string) => void;
  onAddToCart: (item: JewelryItem, size?: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  item,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>('7');
  const [added, setAdded] = useState<boolean>(false);

  if (!item) return null;

  const isRing = item.category === 'rings';
  const sizes = isRing ? ['5', '6', '7', '8', '9'] : ['Standard (18in)', 'Princess (16in)', 'Matinee (20in)'];

  const handleAdd = () => {
    onAddToCart(item, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-950/98 border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.25)] overflow-hidden flex flex-col md:flex-row"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-slate-800/80 text-slate-300 hover:text-white flex items-center justify-center hover:bg-slate-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left: Product Image & Holographic Badge */}
        <div className="md:w-1/2 relative bg-black/60 p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10">
          <div className="relative w-full aspect-square max-w-[280px] rounded-xl overflow-hidden group border border-white/10 bg-[#020512]">
            <JewelryVisual id={item.id} name={item.name} className="w-full h-full" />
            {item.badge && (
              <span className={`absolute top-3 left-3 z-20 text-[10px] font-bold px-2.5 py-0.5 rounded-full text-white shadow-lg bg-gradient-to-r ${item.badgeColor || 'from-cyan-500 to-blue-600'}`}>
                {item.badge}
              </span>
            )}
          </div>

          <div className="mt-4 flex items-center gap-2 text-cyan-300 text-xs font-tech">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>AUTHENTICITY GUARANTEED • GIA / IGI CERTIFIED</span>
          </div>
        </div>

        {/* Right: Specifications & Purchasing Controls */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between text-left space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase font-tech">
                DIAVOIRE HAUTE JOAILLERIE
              </span>
              <button
                onClick={() => onToggleWishlist(item.id)}
                className={`p-1.5 rounded-full transition-colors ${
                  isWishlisted ? 'text-pink-500 bg-pink-500/20' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-pink-500' : ''}`} />
              </button>
            </div>

            <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white mt-1">
              {item.name}
            </h2>

            <div className="flex items-baseline gap-3 mt-2">
              <span className="font-tech text-2xl font-bold text-white tracking-wide">
                ${item.price.toLocaleString()}
              </span>
              {item.originalPrice && (
                <span className="text-sm text-slate-500 line-through">
                  ${item.originalPrice.toLocaleString()}
                </span>
              )}
              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                In Stock
              </span>
            </div>

            <p className="text-xs text-slate-300 mt-3 leading-relaxed font-light">
              {item.description}
            </p>

            {/* Diamond Specs Grid */}
            <div className="grid grid-cols-2 gap-2 mt-4 p-3 rounded-xl bg-slate-900/60 border border-white/5 text-[11px]">
              <div>
                <span className="text-slate-500 block">Total Carat:</span>
                <span className="text-white font-medium">{item.carat}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Precious Metal:</span>
                <span className="text-white font-medium">{item.metal}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Clarity Grade:</span>
                <span className="text-white font-medium">{item.clarity}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Cut Precision:</span>
                <span className="text-white font-medium">{item.cut}</span>
              </div>
            </div>

            {/* Size Selector */}
            <div className="mt-4">
              <span className="text-xs text-slate-300 font-medium block mb-1.5">
                {isRing ? 'Select Ring Size (US):' : 'Select Length:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`px-3 py-1 text-xs rounded-lg border font-tech transition-all ${
                      selectedSize === s
                        ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                        : 'border-white/10 text-slate-300 hover:border-white/30'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2">
            <button
              onClick={handleAdd}
              disabled={added}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {added ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Added to Bag</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag • ${item.price.toLocaleString()}</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-4 mt-3 text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-cyan-400" />
                Lifetime Warranty
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Award className="w-3 h-3 text-cyan-400" />
                Conflict-Free Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
