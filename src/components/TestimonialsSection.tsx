import React from 'react';
import { Star, ShieldCheck, Quote, Award } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const REVIEWS = [
    {
      id: 1,
      author: 'Genevieve de Montferrand',
      city: 'Geneva, Switzerland',
      piece: 'Solitaire Diamond Cathedral Ring (3.15 ct FL)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      date: 'September 2026',
      text: 'The fire and optical coherence of this center diamond surpass any traditional place Vendôme house. The hidden diamond collar underneath the prongs is an astonishing detail that catches light from every conceivable perspective.',
    },
    {
      id: 2,
      author: 'Alexander Sterling',
      city: 'New York, USA',
      piece: 'Bespoke Ceylon Royal Sapphire Ring (5.42 ct)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      date: 'August 2026',
      text: 'Working with the Diavoire concierge to select the unheated sapphire was seamless. The armored courier delivery arrived precisely as scheduled with complete digital GIA provenance paperwork and optical calibration charts.',
    },
    {
      id: 3,
      author: 'Dr. Evelyn Nakamura',
      city: 'Tokyo, Japan',
      piece: 'Emerald Halo Ring & Infinity Pendant',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      date: 'August 2026',
      text: 'The deep verdant emerald with the micro-pavé lab diamonds is a masterwork of balancing classical prestige with modern tension aesthetics. I receive compliments in every boardroom.',
    },
  ];

  const PRESS_LOGOS = [
    'VOGUE HAUTE JOAILLERIE',
    'FORBES LUXURY',
    'ROBB REPORT',
    'FINANCIAL TIMES HOW TO SPEND IT',
    'GQ STYLE ARCHIVE',
  ];

  return (
    <section className="relative py-24 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full max-w-[1920px] mx-auto z-10 border-t border-white/5">
      {/* Press Coverage Bar */}
      <div className="text-center mb-16">
        <p className="text-[11px] font-mono tracking-widest text-slate-500 uppercase mb-6">
          ACCORDED RECOGNITION BY GLOBAL LUXURY CHRONICLES
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 hover:opacity-85 transition-opacity">
          {PRESS_LOGOS.map((press, i) => (
            <span key={i} className="text-xs sm:text-sm font-serif tracking-widest text-slate-300 font-medium">
              {press}
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>VERIFIED COLLECTOR TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-light tracking-tight">
            Voices of Diavoire Patrons
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-2 font-light">
            Read first-hand accounts from collectors, connoisseurs, and lifelong clients across our international salons.
          </p>
        </div>

        {/* Global Rating Badge */}
        <div className="bg-slate-950/80 border border-cyan-500/30 rounded-2xl p-4 flex items-center gap-4 self-start md:self-auto shadow-xl">
          <div className="text-right">
            <div className="flex items-center gap-1 text-amber-400 justify-end">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <div className="text-xs font-mono text-white font-bold mt-1">4.98 / 5.0 RATING</div>
            <div className="text-[10px] text-slate-500 font-mono">2,480+ Audited Commissions</div>
          </div>
          <div className="h-10 w-[1px] bg-white/10" />
          <ShieldCheck className="w-8 h-8 text-cyan-400" />
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS.map((review) => (
          <div
            key={review.id}
            className="bg-[#070d1f]/80 border border-white/10 hover:border-cyan-400/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(2,6,23,0.7)]"
          >
            <div>
              {/* Star Rating & Quote Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-5 h-5 text-cyan-500/30" />
              </div>

              {/* Commissioned Piece */}
              <div className="text-[11px] font-mono text-cyan-400 mb-3 line-clamp-1">
                {review.piece}
              </div>

              {/* Review Text */}
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light italic">
                "{review.text}"
              </p>
            </div>

            {/* Author details */}
            <div className="flex items-center gap-3 pt-5 mt-5 border-t border-white/5">
              <img
                src={review.avatar}
                alt={review.author}
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-full object-cover border border-cyan-400/40"
              />
              <div>
                <h4 className="text-xs font-serif text-white font-semibold">{review.author}</h4>
                <p className="text-[10px] text-slate-400">{review.city} • {review.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
