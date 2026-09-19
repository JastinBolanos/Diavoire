import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, Check, Gift } from 'lucide-react';
import { CartItem } from '../types';
import { JewelryVisual } from './JewelryVisual';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [isLuxuryPackaging, setIsLuxuryPackaging] = useState(true);

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, c) => acc + c.item.price * c.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const total = Math.max(0, subtotal - discountAmount);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = promoCode.trim().toUpperCase();
    if (clean === 'DIAVOIRE10' || clean === 'VIP10' || clean === 'WELCOME10') {
      setDiscountPercent(10);
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid coupon code. Try DIAVOIRE10');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden select-none">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#050816] border-l border-cyan-500/20 shadow-2xl flex flex-col justify-between text-left">
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-cyan-400" />
              <h2 className="font-cinzel text-lg font-bold text-white tracking-wider">
                YOUR SHOPPING BAG
              </h2>
              <span className="text-xs font-tech text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-400/20">
                {cart.reduce((acc, c) => acc + c.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-3 py-12">
                <div className="w-16 h-16 rounded-full bg-slate-900 border border-dashed border-cyan-400/30 flex items-center justify-center text-slate-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="text-slate-300 font-medium text-sm">Your bag is currently empty</p>
                <p className="text-slate-500 text-xs max-w-xs">
                  Explore our brilliant pieces and add extraordinary jewelry to your private collection.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs tracking-wider uppercase shadow hover:brightness-110 cursor-pointer"
                >
                  Start Exploring
                </button>
              </div>
            ) : (
              cart.map(({ item, quantity, selectedSize }) => (
                <div
                  key={item.id}
                  className="flex gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/5 items-center justify-between"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-white/10 bg-[#020512]">
                    <JewelryVisual id={item.id} name={item.name} />
                  </div>
                  <div className="flex-1 min-w-0 pr-2">
                    <h4 className="text-xs font-semibold text-white truncate">{item.name}</h4>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      {selectedSize ? `Size: ${selectedSize}` : item.carat}
                    </span>
                    <span className="font-tech text-xs font-bold text-cyan-300 mt-1 block">
                      ${(item.price * quantity).toLocaleString()}
                    </span>
                  </div>

                  {/* Quantity and Delete */}
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-slate-500 hover:text-rose-400 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <div className="flex items-center gap-1.5 bg-slate-950 border border-white/10 rounded-md px-1.5 py-0.5">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="text-slate-400 hover:text-white p-0.5"
                      >
                        <Minus className="w-2.5 h-2.5" />
                      </button>
                      <span className="text-xs font-bold text-white px-1">{quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="text-slate-400 hover:text-white p-0.5"
                      >
                        <Plus className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-slate-950/80 space-y-3.5">
              {/* Luxury Gift Packaging Option */}
              <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg bg-slate-900/50 border border-white/5 hover:border-white/15">
                <input
                  type="checkbox"
                  checked={isLuxuryPackaging}
                  onChange={(e) => setIsLuxuryPackaging(e.target.checked)}
                  className="rounded text-cyan-500 focus:ring-0 bg-slate-800"
                />
                <Gift className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs text-slate-300">Complimentary velvet gift packaging</span>
                <span className="text-[10px] text-emerald-400 ml-auto font-tech uppercase">FREE</span>
              </label>

              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code (e.g. DIAVOIRE10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  disabled={promoApplied}
                  className="flex-1 px-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-white/15 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={promoApplied || !promoCode}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 transition-colors disabled:opacity-50"
                >
                  {promoApplied ? <Check className="w-3.5 h-3.5" /> : 'Apply'}
                </button>
              </form>
              {promoError && <p className="text-[10px] text-rose-400">{promoError}</p>}
              {promoApplied && (
                <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> 10% VIP discount applied!
                </p>
              )}

              {/* Calculations */}
              <div className="space-y-1.5 text-xs border-t border-white/5 pt-2">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal</span>
                  <span className="font-tech text-white">${subtotal.toLocaleString()}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>VIP Discount (10%)</span>
                    <span className="font-tech">-${discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-400">
                  <span>Fully Insured Express Shipping</span>
                  <span className="font-tech text-cyan-300 uppercase">FREE</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white border-t border-white/10 pt-2">
                  <span>Total</span>
                  <span className="font-tech text-base text-cyan-300">
                    ${total.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                id="btn-checkout-now"
                onClick={onCheckout}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-semibold text-xs tracking-wider uppercase shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
