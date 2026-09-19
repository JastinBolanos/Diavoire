import React, { useState } from 'react';
import { X, Crown, Sparkles, Check, Copy } from 'lucide-react';

interface VipClubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VipClubModal: React.FC<VipClubModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setJoined(true);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText('DIAVOIRE10');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 select-none">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-950/98 border border-amber-400/30 p-6 shadow-[0_0_50px_rgba(251,191,36,0.2)] text-left"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 shadow-[0_0_20px_rgba(251,191,36,0.4)] mb-4">
          <Crown className="w-6 h-6" />
        </div>

        <h2 className="font-cinzel text-xl font-bold text-white tracking-wide">
          THE DIAVOIRE VIP SALON
        </h2>
        <p className="text-xs text-slate-300 mt-1 leading-relaxed font-light">
          Unlock an immediate 10% off your first fine jewelry investment and gain private access to rare gemstone releases.
        </p>

        {!joined ? (
          <form onSubmit={handleJoin} className="mt-5 space-y-3">
            <div>
              <label className="text-[11px] font-medium text-slate-300 block mb-1">
                Your Preferred Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="client@luxury.com"
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/15 text-white text-xs placeholder-slate-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/50"
              />
            </div>

            <div className="space-y-2 pt-1 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Instant 10% discount on entire fine jewelry catalog</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Complimentary private jewelry concierge service</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Activate 10% VIP Benefit</span>
            </button>
          </form>
        ) : (
          <div className="mt-5 space-y-4 text-center">
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-400/30 text-left">
              <span className="text-[10px] text-amber-300 uppercase tracking-widest font-tech block mb-1">
                YOUR EXCLUSIVE VIP CODE
              </span>
              <div className="flex items-center justify-between">
                <span className="font-tech text-lg font-bold text-white tracking-widest">
                  DIAVOIRE10
                </span>
                <button
                  onClick={handleCopyCode}
                  className="px-3 py-1 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:bg-amber-300 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-300">
              Your VIP code has been recorded. Apply it in your bag for an instant 10% reduction.
            </p>

            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
