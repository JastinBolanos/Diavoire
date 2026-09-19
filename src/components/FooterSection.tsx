import React from 'react';
import { 
  Sparkles, 
  ArrowUp, 
  ShieldCheck, 
  Truck, 
  Clock, 
  RotateCcw, 
  Globe, 
  Lock,
  Gem,
  Award
} from 'lucide-react';

interface FooterSectionProps {
  onSelectCategory: (cat: string) => void;
  onOpenVip: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onSelectCategory,
  onOpenVip,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02040e] border-t border-white/10 text-slate-400 text-xs font-sans z-10">
      {/* Top Value Assurance Banner */}
      <div className="border-b border-white/5 py-8 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full max-w-[1920px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-400/30 text-cyan-300">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-white font-serif font-medium text-xs">Armored Transit</h5>
              <p className="text-[11px] text-slate-500">Fully insured courier dispatch worldwide.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-400/30 text-purple-300">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-white font-serif font-medium text-xs">Lifetime Warranty</h5>
              <p className="text-[11px] text-slate-500">Free prong checks, cleaning & sizing.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-400/30 text-blue-300">
              <RotateCcw className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-white font-serif font-medium text-xs">30-Day Returns</h5>
              <p className="text-[11px] text-slate-500">100% refund with insured return kit.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-400/30 text-emerald-300">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h5 className="text-white font-serif font-medium text-xs">GIA & IGI Certified</h5>
              <p className="text-[11px] text-slate-500">Laser-inscribed optical authenticity.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Navigation Layout */}
      <div className="py-16 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-900 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)] border border-cyan-300/40">
              <span className="font-serif font-black text-slate-950 text-sm">D</span>
            </div>
            <span className="font-serif tracking-[0.25em] text-white text-lg font-light">DIAVOIRE</span>
          </div>

          <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
            Maison Diavoire pioneers the convergence of aerospace precision metallurgy and peerless natural gemology. Handcrafted in our private ateliers in Geneva and Paris.
          </p>

          <div className="text-[11px] font-mono text-cyan-400 pt-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>SALONS OPEN: GENEVA • PARIS • TOKYO • NEW YORK</span>
          </div>
        </div>

        {/* Column 2: Haute Collections */}
        <div className="space-y-3">
          <h4 className="font-serif text-white text-xs uppercase tracking-widest font-semibold">Haute Collections</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => onSelectCategory('rings')} className="hover:text-cyan-300 transition-colors">
                Solitaire & Halo Rings
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory('necklaces')} className="hover:text-cyan-300 transition-colors">
                High Pendants & Chokers
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory('earrings')} className="hover:text-cyan-300 transition-colors">
                Diamond Drop Earrings
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory('bracelets')} className="hover:text-cyan-300 transition-colors">
                Continuous Tennis Bracelets
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory('rings')} className="hover:text-cyan-300 transition-colors text-cyan-400">
                Ceylon Royal Sapphires
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Atelier & Services */}
        <div className="space-y-3">
          <h4 className="font-serif text-white text-xs uppercase tracking-widest font-semibold">Atelier & Services</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={onOpenVip} className="hover:text-cyan-300 transition-colors">
                Bespoke Commissions
              </button>
            </li>
            <li>
              <button onClick={onOpenVip} className="hover:text-cyan-300 transition-colors">
                Private Gemologist Consultation
              </button>
            </li>
            <li>
              <span className="hover:text-cyan-300 transition-colors cursor-pointer">
                Complimentary Ring Sizer Kit
              </span>
            </li>
            <li>
              <span className="hover:text-cyan-300 transition-colors cursor-pointer">
                Diamond Upgrade Protocol
              </span>
            </li>
            <li>
              <span className="hover:text-cyan-300 transition-colors cursor-pointer">
                GIA Certificate Verification
              </span>
            </li>
          </ul>
        </div>

        {/* Column 4: Client Care & Security */}
        <div className="space-y-3">
          <h4 className="font-serif text-white text-xs uppercase tracking-widest font-semibold">Security & Care</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <span className="hover:text-cyan-300 transition-colors cursor-pointer">
                Armored Delivery Tracking
              </span>
            </li>
            <li>
              <span className="hover:text-cyan-300 transition-colors cursor-pointer">
                Insurance & Appraisal Dossier
              </span>
            </li>
            <li>
              <span className="hover:text-cyan-300 transition-colors cursor-pointer">
                Conflict-Free Kimberley Ethics
              </span>
            </li>
            <li>
              <span className="hover:text-cyan-300 transition-colors cursor-pointer">
                Recycled Platinum Guarantee
              </span>
            </li>
            <li>
              <button onClick={onOpenVip} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Diavoire Vault Access
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Back to Top */}
      <div className="border-t border-white/5 py-6 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full max-w-[1920px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-[11px] text-slate-500 font-mono">
          © 2026 DIAVOIRE HAUTE JOAILLERIE S.A. • ALL RIGHTS RESERVED.
        </div>

        {/* Payment badges */}
        <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500">
          <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/5">VISA</span>
          <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/5">MASTERCARD</span>
          <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/5">AMEX</span>
          <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/5">APPLE PAY</span>
          <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/5">BITCOIN / ETH</span>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 hover:bg-cyan-950 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-300 text-xs transition-all duration-200"
        >
          <span>TOP OF MAISON</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
