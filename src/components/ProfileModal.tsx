import React, { useState } from 'react';
import { X, User, Award, Clock, Phone, CheckCircle, ShieldCheck } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'orders' | 'concierge' | 'certificates'>('orders');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 select-none">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-2xl bg-gradient-to-b from-slate-900/95 to-slate-950/98 border border-white/10 p-6 shadow-2xl text-left"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5">
            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-cyan-300">
              <User className="w-6 h-6" />
            </div>
          </div>
          <div>
            <h2 className="font-cinzel text-lg font-bold text-white">
              CLIENT PORTAL
            </h2>
            <p className="text-xs text-slate-400">
              Diavoire Private Vault & Order Tracking
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 border-b border-white/10 pb-3 mb-4">
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'orders'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Recent Orders
          </button>
          <button
            onClick={() => setActiveTab('certificates')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'certificates'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            GIA Certificates
          </button>
          <button
            onClick={() => setActiveTab('concierge')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'concierge'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Private Concierge
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'orders' && (
          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-tech text-cyan-300 font-bold">#DV-982410-SH</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> In Transit (Armored Courier)
                </span>
              </div>
              <div className="text-slate-300">
                Solitaire Diamond Ring (3.15 ct, Platinum)
              </div>
              <div className="flex justify-between text-slate-500 text-[11px] pt-1 border-t border-white/5">
                <span>Insured Value: $2,890.00</span>
                <span>Est. Delivery: Tomorrow, 11:00 AM</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'certificates' && (
          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-white">GIA Dossier #220491823</div>
                  <div className="text-slate-400 text-[11px]">3.15 ct Round Brilliant • D Color • FL</div>
                </div>
              </div>
              <span className="text-cyan-400 font-tech text-xs underline cursor-pointer hover:text-cyan-300">
                View PDF
              </span>
            </div>
          </div>
        )}

        {activeTab === 'concierge' && (
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/40 to-slate-900 border border-cyan-500/20 space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                <Phone className="w-4 h-4" />
                <span>Dedicated Diamond Master: Antoine D.</span>
              </div>
              <p className="text-slate-300 text-xs">
                Available 24/7 for bespoke high jewelry commissions, custom diamond selection, and private gallery viewings.
              </p>
              <button 
                onClick={() => alert('Diavoire Concierge connected. An advisor will contact you within 15 minutes.')}
                className="mt-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-xs transition-colors"
              >
                Request Instant Callback
              </button>
            </div>
          </div>
        )}

        <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> End-to-End Encryption
          </span>
          <span>Diavoire Vault v2.4</span>
        </div>
      </div>
    </div>
  );
};
