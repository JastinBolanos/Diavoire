import React, { useState, useMemo } from 'react';
import { JewelryItem } from '../types';
import { JewelryVisual } from './JewelryVisual';
import { 
  Sparkles, 
  Heart, 
  ShoppingBag, 
  SlidersHorizontal, 
  Eye, 
  Check, 
  ArrowUpDown, 
  Filter,
  Search,
  Gem,
  Award,
  ShieldCheck
} from 'lucide-react';

interface CatalogSectionProps {
  items: JewelryItem[];
  wishlistIds: Set<string>;
  onToggleWishlist: (id: string) => void;
  onSelectItem: (item: JewelryItem) => void;
  onAddToCart: (item: JewelryItem) => void;
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  items,
  wishlistIds,
  onToggleWishlist,
  onSelectItem,
  onAddToCart,
  activeCategory,
  onSelectCategory,
}) => {
  const [selectedMetal, setSelectedMetal] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<string>('FEATURED');
  const [searchFilter, setSearchFilter] = useState<string>('');

  const CATEGORIES = [
    { id: 'ALL', label: 'All Creations' },
    { id: 'rings', label: 'Rings' },
    { id: 'necklaces', label: 'Necklaces & Pendants' },
    { id: 'earrings', label: 'Earrings' },
    { id: 'bracelets', label: 'Bracelets' },
  ];

  const METALS = [
    { id: 'ALL', label: 'All Metals' },
    { id: 'Platinum', label: '950 Platinum' },
    { id: 'White Gold', label: '18K White Gold' },
    { id: 'Rose Gold', label: 'Rose Gold' },
    { id: 'Yellow Gold', label: '18K Gold' },
  ];

  const filteredItems = useMemo(() => {
    return items
      .filter((item) => {
        const matchesCategory =
          activeCategory === 'ALL' ||
          item.category.toLowerCase() === activeCategory.toLowerCase();

        const matchesMetal =
          selectedMetal === 'ALL' ||
          item.metal.toLowerCase().includes(selectedMetal.toLowerCase());

        const matchesSearch =
          !searchFilter.trim() ||
          item.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
          item.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
          item.cut.toLowerCase().includes(searchFilter.toLowerCase());

        return matchesCategory && matchesMetal && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'PRICE_ASC') return a.price - b.price;
        if (sortBy === 'PRICE_DESC') return b.price - a.price;
        if (sortBy === 'CARAT') {
          const caratA = parseFloat(a.carat) || 0;
          const caratB = parseFloat(b.carat) || 0;
          return caratB - caratA;
        }
        return 0; // Default featured order
      });
  }, [items, activeCategory, selectedMetal, searchFilter, sortBy]);

  return (
    <section id="catalog-section" className="relative py-16 sm:py-24 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 w-full max-w-[1920px] mx-auto z-10">
      {/* Decorative ambient background flares */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Header Title with Haute Joaillerie typography */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-white/10 gap-6">
        <div>
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
            <span>THE COMPLETE ARCHIVE • HAUTE JOAILLERIE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight font-light">
            Master Creations & Curated Gems
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2 font-light leading-relaxed">
            Every creation is handcrafted by master lapidaries with natural GIA-certified diamonds and rare celestial gemstones set in aerospace-purity platinum and gold.
          </p>
        </div>

        {/* Total Pieces Count Badge */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
            {filteredItems.length} Masterpiece{filteredItems.length === 1 ? '' : 's'}
          </span>
        </div>
      </div>

      {/* Controls Bar: Category Pills + Search + Metal + Sort Filter */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory.toLowerCase() === cat.id.toLowerCase();
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider whitespace-nowrap transition-all duration-200 uppercase font-sans ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-white/10 hover:border-cyan-400/30'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Secondary Filters (Search, Metal & Sort Dropdowns) */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
          {/* Quick Search */}
          <div className="relative flex-1 sm:w-56">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Search cuts, clarity, stones..."
              className="w-full bg-slate-950/70 border border-white/10 focus:border-cyan-400/60 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400/30 transition-all"
            />
          </div>

          {/* Metal Filter */}
          <div className="relative">
            <select
              value={selectedMetal}
              onChange={(e) => setSelectedMetal(e.target.value)}
              className="bg-slate-950/70 border border-white/10 hover:border-cyan-400/40 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-cyan-400 transition-all cursor-pointer font-sans"
            >
              {METALS.map((m) => (
                <option key={m.id} value={m.id} className="bg-slate-900 text-slate-200">
                  {m.label}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-950/70 border border-white/10 hover:border-cyan-400/40 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-cyan-400 transition-all cursor-pointer font-sans"
            >
              <option value="FEATURED" className="bg-slate-900 text-slate-200">Featured Curation</option>
              <option value="PRICE_ASC" className="bg-slate-900 text-slate-200">Price: Low to High</option>
              <option value="PRICE_DESC" className="bg-slate-900 text-slate-200">Price: High to Low</option>
              <option value="CARAT" className="bg-slate-900 text-slate-200">Highest Carat Weight</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid of High-Jewelry Products */}
      {filteredItems.length === 0 ? (
        <div className="py-20 text-center rounded-2xl bg-slate-950/50 border border-white/10">
          <Gem className="w-12 h-12 text-slate-600 mx-auto mb-3 animate-pulse" />
          <h3 className="text-lg font-serif text-white mb-1">No Pieces Found Matching Criteria</h3>
          <p className="text-slate-400 text-xs max-w-sm mx-auto mb-4">
            Try resetting your metal filter or search keywords to view the available archive.
          </p>
          <button
            onClick={() => {
              setSelectedMetal('ALL');
              setSearchFilter('');
              onSelectCategory('ALL');
            }}
            className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 text-xs font-mono hover:bg-cyan-500/30 transition-all"
          >
            RESET ALL FILTERS
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-7 lg:gap-8">
          {filteredItems.map((item) => {
            const isWish = wishlistIds.has(item.id);

            return (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="group relative bg-[#070d1e]/80 hover:bg-[#0b142d] border border-white/10 hover:border-cyan-400/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(2,6,23,0.7)] hover:shadow-[0_15px_35px_rgba(6,182,212,0.15)] flex flex-col justify-between cursor-pointer"
              >
                {/* Visual Image Header */}
                <div className="relative aspect-square w-full bg-[#020512] overflow-hidden">
                  <JewelryVisual id={item.id} name={item.name} image={item.image} />

                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-3 left-3 z-20">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider text-white uppercase bg-gradient-to-r ${item.badgeColor || 'from-cyan-500 to-blue-600'} shadow-md`}>
                        {item.badge}
                      </span>
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(item.id);
                    }}
                    className={`absolute top-3 right-3 z-20 p-2 rounded-full backdrop-blur-md transition-all duration-200 ${
                      isWish
                        ? 'bg-rose-500/30 border border-rose-400 text-rose-400'
                        : 'bg-slate-950/60 border border-white/15 text-slate-300 hover:text-rose-400 hover:border-rose-400/40'
                    }`}
                    title={isWish ? 'Remove from Wishlist' : 'Add to Wishlist'}
                  >
                    <Heart className={`w-3.5 h-3.5 ${isWish ? 'fill-rose-400' : ''}`} />
                  </button>

                  {/* Quick Inspect Hover Overlay Button */}
                  <div className="absolute inset-x-0 bottom-3 px-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="w-full py-1.5 rounded-lg bg-slate-950/90 border border-cyan-400/50 text-cyan-300 text-[11px] font-mono tracking-wider text-center flex items-center justify-center gap-1.5 backdrop-blur-md shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      INSPECT 3D SPEC
                    </span>
                  </div>
                </div>

                {/* Card Content Information */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Metal & Carat Pill specs */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                      <span className="text-cyan-400 font-semibold">{item.carat}</span>
                      <span className="truncate max-w-[130px]">{item.metal}</span>
                    </div>

                    <h3 className="text-base font-serif text-white font-normal group-hover:text-cyan-200 transition-colors line-clamp-1">
                      {item.name}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 mt-1 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Clarity and Cut Specs Tag */}
                  <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between">
                    <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
                      <span className="px-1.5 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-300">
                        {item.clarity}
                      </span>
                      <span className="truncate max-w-[90px]">{item.cut}</span>
                    </div>

                    {/* Price & Action */}
                    <div className="text-right">
                      <div className="flex items-baseline gap-1.5 justify-end">
                        {item.originalPrice && (
                          <span className="text-[11px] text-slate-500 line-through">
                            ${item.originalPrice.toLocaleString()}
                          </span>
                        )}
                        <span className="text-base font-mono font-bold text-white tracking-tight">
                          ${item.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart CTA */}
                  <div className="mt-3 pt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(item);
                      }}
                      className="w-full py-2 px-3 rounded-xl bg-cyan-950/60 hover:bg-cyan-500 border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-slate-950 text-xs font-mono font-bold tracking-wider transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                      <span>ADD TO VAULT BAG</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
