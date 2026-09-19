import React, { useState, useMemo } from 'react';
import { ActiveNavTab, JewelryItem, CartItem } from './types';
import { FEATURED_JEWELRY, ALL_JEWELRY } from './data/jewelry';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustBadgesBar } from './components/TrustBadgesBar';
import { CatalogSection } from './components/CatalogSection';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { BespokeAtelierSection } from './components/BespokeAtelierSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NewsletterVipSection } from './components/NewsletterVipSection';
import { FooterSection } from './components/FooterSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { VipClubModal } from './components/VipClubModal';
import { ProfileModal } from './components/ProfileModal';
import { ChevronDown } from 'lucide-react';

export default function App() {
  // Navigation & Search State
  const [activeTab, setActiveTab] = useState<ActiveNavTab>('HOME');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals & Drawers State
  const [selectedProduct, setSelectedProduct] = useState<JewelryItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isVipOpen, setIsVipOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Initial wishlist with 3 items matching the '3' badge in the mockup
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(
    new Set(['dia-2', 'dia-3', 'dia-5'])
  );

  // Initial cart with items matching the '3' count in the mockup
  const [cart, setCart] = useState<CartItem[]>([
    { item: FEATURED_JEWELRY[1], quantity: 1, selectedSize: '7' },
    { item: FEATURED_JEWELRY[2], quantity: 1, selectedSize: '6.5' },
    { item: FEATURED_JEWELRY[3], quantity: 1, selectedSize: 'Standard' },
  ]);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTab = (tab: ActiveNavTab) => {
    setActiveTab(tab);
    setSearchQuery('');
    if (tab !== 'HOME') {
      setTimeout(scrollToCatalog, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Toggle Wishlist
  const handleToggleWishlist = (id: string) => {
    setWishlistIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        showToast('Removed from your private wishlist');
      } else {
        next.add(id);
        showToast('Saved to your private wishlist');
      }
      return next;
    });
  };

  // Add to Cart
  const handleAddToCart = (item: JewelryItem, size?: string) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { item, quantity: 1, selectedSize: size || '7' }];
    });
    showToast(`Added ${item.name} to your shopping bag`);
  };

  // Update Cart Quantity
  const handleUpdateCartQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) => {
          if (c.item.id === id) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter((c): c is CartItem => c !== null)
    );
  };

  // Remove from Cart
  const handleRemoveFromCart = (id: string) => {
    setCart((prev) => prev.filter((c) => c.item.id !== id));
  };

  // Filtered Jewelry Items based on active tab and search query
  const displayedItems = useMemo(() => {
    let items = ALL_JEWELRY;

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return items.filter(
        (it) =>
          it.name.toLowerCase().includes(q) ||
          it.description.toLowerCase().includes(q) ||
          it.cut.toLowerCase().includes(q)
      );
    }

    // Tab filter
    if (activeTab === 'HOME') {
      return FEATURED_JEWELRY;
    } else if (activeTab === 'NECKLACES') {
      return items.filter((it) => it.category === 'necklaces');
    } else if (activeTab === 'RINGS') {
      return items.filter((it) => it.category === 'rings');
    } else if (activeTab === 'EARRINGS') {
      return items.filter((it) => it.category === 'earrings');
    } else if (activeTab === 'BRACELETS') {
      return items.filter((it) => it.category === 'bracelets');
    } else if (activeTab === 'SALE') {
      return items.filter((it) => it.badge === 'SALE');
    }

    return FEATURED_JEWELRY;
  }, [activeTab, searchQuery]);

  // Wishlisted item objects
  const wishlistedItems = useMemo(() => {
    return ALL_JEWELRY.filter((it) => wishlistIds.has(it.id));
  }, [wishlistIds]);

  const totalCartCount = cart.reduce((acc, c) => acc + c.quantity, 0);

  return (
    <div className="relative min-h-screen w-full bg-[#020515] text-slate-100 flex flex-col font-sans overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Epic High-Definition Photographic Background Image (Anchored to Hero Screen) */}
      <div className="absolute top-0 inset-x-0 h-screen pointer-events-none z-0 overflow-hidden">
        <img
          src="/epic-bg.jpg"
          alt="Diavoire Luxury High-Jewelry Background"
          className="w-full h-full object-cover object-right lg:object-center opacity-95"
        />
        {/* Deep noir gradient overlay on the left side to guarantee flawless text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020515] via-[#020515]/85 to-transparent w-full lg:w-3/5" />
        {/* Soft bottom vignette to seat the featured pieces shelf */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#020515] via-[#020515]/80 to-transparent" />
      </div>

      {/* 1. HERO VIEWPORT (First Screen - Exactly fills the initial viewport) */}
      <div className="relative z-10 min-h-screen lg:h-screen lg:min-h-[700px] flex flex-col justify-between w-full">
        {/* Top Announcement Bar */}
        <AnnouncementBar onOpenVip={() => setIsVipOpen(true)} />

        {/* Main Navigation Bar */}
        <Navbar
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
          searchQuery={searchQuery}
          onSearchChange={(val) => {
            setSearchQuery(val);
            if (val.trim()) {
              scrollToCatalog();
            }
          }}
          wishlistCount={wishlistIds.size}
          cartCount={totalCartCount}
          onOpenWishlist={() => setIsWishlistOpen(true)}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenProfile={() => setIsProfileOpen(true)}
        />

        {/* Hero Section (Left copy + Right Giant Futuristic Ring + Falling Jewels) */}
        <HeroSection
          onExplore={() => {
            setActiveTab('RINGS');
            const target = FEATURED_JEWELRY[2];
            setSelectedProduct(target);
          }}
          onShopNewArrivals={() => {
            setActiveTab('COLLECTIONS');
            scrollToCatalog();
          }}
          onSelectProduct={(item) => setSelectedProduct(item)}
        />

        {/* Trust Badges Bar */}
        <TrustBadgesBar />

        {/* Interactive Scroll Down Indicator */}
        <div className="flex justify-center pb-2 pt-1 z-20">
          <button
            onClick={scrollToCatalog}
            className="group flex items-center gap-2 text-cyan-400/80 hover:text-cyan-300 text-[11px] font-mono tracking-widest uppercase transition-all duration-300 hover:scale-105"
          >
            <span>SCROLL DOWN TO EXPLORE MASTER ARCHIVE</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* 2. LOWER SECTIONS (Rich Experiences Below the First Screen) */}
      <div className="relative z-10 w-full bg-gradient-to-b from-[#020515] via-[#04081c] to-[#02040e]">
        {/* Section A: Complete Master Catalog with Category, Metal & Sort Filters */}
        <CatalogSection
          items={ALL_JEWELRY}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onSelectItem={(item) => setSelectedProduct(item)}
          onAddToCart={(item) => handleAddToCart(item)}
          activeCategory={activeTab === 'HOME' ? 'ALL' : activeTab}
          onSelectCategory={(cat) => {
            setActiveTab(cat.toUpperCase() as ActiveNavTab);
          }}
        />

        {/* Section B: Precision Gemology & The 4Cs Craftsmanship */}
        <CraftsmanshipSection />

        {/* Section C: Bespoke Atelier & Private Consultation Form */}
        <BespokeAtelierSection onOpenConsultation={() => setIsVipOpen(true)} />

        {/* Section D: Verified Collector Testimonials & International Press */}
        <TestimonialsSection />

        {/* Section E: VIP Vault Newsletter with $500 Credit */}
        <NewsletterVipSection />

        {/* Section F: Full Haute Joaillerie Footer */}
        <FooterSection
          onSelectCategory={(cat) => {
            setActiveTab(cat.toUpperCase() as ActiveNavTab);
            scrollToCatalog();
          }}
          onOpenVip={() => setIsVipOpen(true)}
        />
      </div>

      {/* Interactive Modals and Drawers */}
      <ProductDetailModal
        item={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isWishlisted={selectedProduct ? wishlistIds.has(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={() => {
          setIsCartOpen(false);
          showToast('Order confirmed! Diavoire Armored Delivery dispatched.');
          setCart([]);
        }}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistedItems}
        onRemoveWishlist={handleToggleWishlist}
        onAddToCart={(item) => handleAddToCart(item)}
      />

      <VipClubModal
        isOpen={isVipOpen}
        onClose={() => setIsVipOpen(false)}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      {/* Floating Interactive Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-slate-900/95 border border-cyan-400/50 text-cyan-200 text-xs font-medium shadow-[0_0_25px_rgba(6,182,212,0.4)] backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-200 select-none">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
