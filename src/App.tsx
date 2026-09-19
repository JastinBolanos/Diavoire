import React, { useState } from 'react';
import { ActiveNavTab, JewelryItem } from './types';
import { FEATURED_JEWELRY, ALL_JEWELRY } from './data/jewelry';
import { useCart, useWishlist, useToast, useCatalogFilter } from './hooks';

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
import { AerodynamicNeonRain } from './components/AerodynamicNeonRain';
import { ChevronDown } from 'lucide-react';

export default function App() {
  const {
    activeTab,
    searchQuery,
    selectTab,
    updateSearchQuery,
  } = useCatalogFilter();

  const {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalCount: totalCartCount,
  } = useCart();

  const {
    wishlistIds,
    toggleWishlist,
    isWishlisted,
    wishlistedItems,
    wishlistCount,
  } = useWishlist();

  const { toastMessage, showToast } = useToast();

  const [selectedProduct, setSelectedProduct] = useState<JewelryItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isVipOpen, setIsVipOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTab = (tab: ActiveNavTab) => {
    selectTab(tab);
    if (tab !== 'HOME') {
      setTimeout(scrollToCatalog, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleToggleWishlist = (id: string) => {
    const isSaved = toggleWishlist(id);
    showToast(isSaved ? 'Saved to your private wishlist' : 'Removed from your private wishlist');
  };

  const handleAddToCart = (item: JewelryItem, size?: string) => {
    addToCart(item, size);
    showToast(`Added ${item.name} to your shopping bag`);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#020515] text-slate-100 flex flex-col font-sans overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <div className="absolute top-0 inset-x-0 h-screen pointer-events-none z-0 overflow-hidden">
        <img
          src="/luxury-cosmic-bg.jpg"
          alt="Diavoire Luxury Celestial Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020515] via-[#020515]/80 to-transparent w-full lg:w-3/5" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#020515] via-[#020515]/80 to-transparent" />
      </div>

      <AerodynamicNeonRain palette="pearlescent-blue" zIndex={1} opacity={0.9} />

      <div className="relative z-10 min-h-screen lg:h-screen lg:min-h-[700px] flex flex-col justify-between w-full">
        <AnnouncementBar onOpenVip={() => setIsVipOpen(true)} />

        <Navbar
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
          searchQuery={searchQuery}
          onSearchChange={(val) => {
            updateSearchQuery(val);
            if (val.trim()) {
              scrollToCatalog();
            }
          }}
          wishlistCount={wishlistCount}
          cartCount={totalCartCount}
          onOpenWishlist={() => setIsWishlistOpen(true)}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenProfile={() => setIsProfileOpen(true)}
        />

        <HeroSection
          onExplore={() => {
            selectTab('RINGS');
            const target = FEATURED_JEWELRY[2];
            setSelectedProduct(target);
          }}
          onShopNewArrivals={() => {
            selectTab('COLLECTIONS');
            scrollToCatalog();
          }}
          onSelectProduct={(item) => setSelectedProduct(item)}
        />

        <TrustBadgesBar />

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

      <div className="relative z-10 w-full bg-gradient-to-b from-[#020515] via-[#04081c] to-[#02040e]">
        <CatalogSection
          items={ALL_JEWELRY}
          wishlistIds={wishlistIds}
          onToggleWishlist={handleToggleWishlist}
          onSelectItem={(item) => setSelectedProduct(item)}
          onAddToCart={handleAddToCart}
          activeCategory={activeTab === 'HOME' ? 'ALL' : activeTab}
          onSelectCategory={(cat) => {
            selectTab(cat.toUpperCase() as ActiveNavTab);
          }}
        />

        <CraftsmanshipSection />

        <BespokeAtelierSection onOpenConsultation={() => setIsVipOpen(true)} />

        <TestimonialsSection />

        <NewsletterVipSection />

        <FooterSection
          onSelectCategory={(cat) => {
            selectTab(cat.toUpperCase() as ActiveNavTab);
            scrollToCatalog();
          }}
          onOpenVip={() => setIsVipOpen(true)}
        />
      </div>

      <ProductDetailModal
        item={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isWishlisted={selectedProduct ? isWishlisted(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={() => {
          setIsCartOpen(false);
          showToast('Order confirmed! Diavoire Armored Delivery dispatched.');
          clearCart();
        }}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistedItems}
        onRemoveWishlist={(id) => {
          toggleWishlist(id);
          showToast('Removed from your private wishlist');
        }}
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

      {toastMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-slate-900/95 border border-cyan-400/50 text-cyan-200 text-xs font-medium shadow-[0_0_25px_rgba(6,182,212,0.4)] backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-200 select-none">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
