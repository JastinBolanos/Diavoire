import React, { useState } from 'react';
import { Sparkles, Send, Check, ShieldCheck, Mail, Lock } from 'lucide-react';

export const NewsletterVipSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full max-w-[1920px] mx-auto z-10">
      <div className="relative rounded-3xl bg-gradient-to-r from-[#0a122e] via-[#080d21] to-[#040816] border border-cyan-500/30 p-8 sm:p-14 shadow-[0_20px_50px_rgba(2,6,23,0.9)] overflow-hidden text-center">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span>THE DIAVOIRE PRIVATE VAULT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-light tracking-tight">
            Exclusive Collector Access
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
            Gain priority access to private salon exhibitions, unreleased one-of-one high jewelry archives, and direct concierge dispatch. Patrons receive an inaugural <span className="text-cyan-300 font-semibold">$500 Vault Credit</span> toward their first commission.
          </p>

          {isSubscribed ? (
            <div className="p-4 rounded-2xl bg-cyan-950/80 border border-cyan-400 text-cyan-200 text-xs sm:text-sm font-mono flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(6,182,212,0.3)] animate-in fade-in">
              <Check className="w-5 h-5 text-cyan-400" />
              <span>Welcome to the Vault. Your private credentials and code <strong className="text-white">VAULT500</strong> have been dispatched.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
              <div className="relative w-full">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your confidential email..."
                  className="w-full bg-slate-950/90 border border-white/20 focus:border-cyan-400 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/40 transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs font-mono uppercase tracking-wider transition-all duration-200 whitespace-nowrap shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2"
              >
                <span>REQUEST ENTRY</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <div className="flex items-center justify-center gap-6 text-[11px] font-mono text-slate-500 pt-2">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400/80" />
              Strict Confidentiality Enforced
            </span>
            <span>•</span>
            <span>Zero Unsolicited Correspondence</span>
          </div>
        </div>
      </div>
    </section>
  );
};
