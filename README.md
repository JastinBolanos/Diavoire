<div align="center">

# 💎 Diavoire — Haute Joaillerie & Fine Diamonds

An immersive high-jewelry digital boutique pairing contemporary luxury aesthetics, fluid real-time interactivity, and clean modular front-end architecture.

[![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![HTML5 Canvas](https://img.shields.io/badge/HTML5_Canvas-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
[![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-F56565?style=for-the-badge&logo=feather&logoColor=white)](https://lucide.dev/)

</div>

---

## 💎 Project Vision

**Diavoire** was conceived to bring the prestige, intimacy, and tactile elegance of a premier Parisian high-jewelry maison into an interactive digital environment. Moving beyond conventional e-commerce layouts, the application establishes a multi-sensory experience: cosmic ambient lighting, hardware-accelerated aerodynamic particle dynamics rendered on HTML5 Canvas, and an interactive master archive showcasing natural, GIA-certified diamonds and celestial gemstones.

---

## ✨ Key Features

### 1. Visual Atmosphere & Immersive Experience
* **Interactive Hero & Solitaire Showcase**: Central showcase with 3D tilt tracking, manual rotation controls, progressive zoom inspection, and interactive gemological hotspots detailing carat weight, VVS1 clarity, and solid 950 platinum cathedral settings.
* **Aerodynamic Particle Simulation**: High-performance `<canvas>` physics engine running at 60/120 FPS. Features elliptical impact ripples, gravitational spark dispersion, and selectable chromatic palettes (*Pearlescent Blue* & *Neon Emerald*).
* **Cascading Jewels Rain**: Atmospheric tumbling jewels drifting in the peripheral viewport that users can click to inspect product specifications directly.

### 2. Master Catalog & Real-Time Filtering
* **Multi-Factor Filtering**: Instant live search by keyword, category tabs (*All*, *Rings*, *Necklaces & Pendants*, *Earrings*, *Bracelets*), and precious metals (*950 Platinum*, *18K White Gold*, *Rose Gold*, *18K Yellow Gold*).
* **Dynamic Sorting**: Instant reordering by featured curation, price (ascending/descending), and total carat weight.
* **12 Masterpiece Creations**: Each piece features high-definition photography, full 4Cs gemological specifications, conflict-free sourcing verification, and armored delivery guarantees.

### 3. Interactive Client-Side Commerce
* **Vault Bag (Cart Drawer)**: Ring size selector, real-time quantity adjustments, automatic subtotal calculations, and armored delivery checkout dispatch.
* **Private Wishlist Drawer**: Fast saving and management of favorite creations with one-click transfer into the shopping bag.
* **Gemological Product Modal**: Deep inspection dialog with macro imagery, 4Cs rating badges, metal purity seals, and craftsmanship notes.
* **Private VIP Club & Bespoke Atelier**: Dedicated reservation modals for private atelier appointments and custom commission consultations.

---

## 🏛️ Clean Architecture & Modularity

The codebase is strictly organized around clean separation of concerns, ensuring high maintainability and developer ergonomics:

```
src/
├── types/                 # Strict domain models and interfaces (TypeScript)
│   ├── jewelry.ts         # Jewelry items, categories, cuts, and metals
│   ├── cart.ts            # Cart items and ordering entities
│   ├── navigation.ts      # Active navigation tabs and routes
│   └── index.ts           # Centralized barrel export
│
├── hooks/                 # Decoupled business logic & custom state managers
│   ├── useCart.ts         # Cart mutations, item counts, and subtotal calculation
│   ├── useWishlist.ts     # Reactive wishlist toggling and item hydration
│   ├── useCatalogFilter.ts# Search and category filtering algorithms
│   ├── useToast.ts        # Ephemeral notification dispatcher
│   └── index.ts           # Unified hooks export
│
├── components/            # Decoupled presentation & UI components
│   ├── AerodynamicNeonRain.tsx # HTML5 Canvas 2D particle simulation engine
│   ├── FuturisticRingHero.tsx  # Interactive ring showcase with hotspots & zoom
│   ├── FallingJewelsRain.tsx   # Interactive floating jewels physics stream
│   ├── CatalogSection.tsx      # Archive grid with multi-filter controls
│   ├── JewelryVisual.tsx       # Optimized image resolution and error fallback
│   ├── CartDrawer.tsx          # Slide-over shopping bag drawer
│   ├── WishlistDrawer.tsx      # Slide-over private wishlist drawer
│   ├── ProductDetailModal.tsx  # High-jewelry technical specification modal
│   ├── BespokeAtelierSection.tsx # Made-to-measure commission showcase
│   ├── CraftsmanshipSection.tsx  # Gemological 4Cs educational guide
│   └── ...
│
├── data/
│   └── jewelry.ts         # Single source of truth containing 12 creations
│
├── App.tsx                # Master view orchestrator
└── main.tsx               # React application entry point
```

---

## 🛠️ Technology Stack

* **React 18**: Component-driven UI architecture powered by custom functional hooks.
* **TypeScript**: Strict type safety across all domain models, props, and custom hooks.
* **Vite**: Rapid development tooling and optimized production bundling.
* **Tailwind CSS**: Utility-first styling with custom luxury color gradients and typography scales.
* **HTML5 Canvas 2D API**: Memory-efficient particle rendering using object pooling and offscreen pre-rendered textures.
* **Lucide React**: Clean, elegant vector iconography.

---

## 🚀 Getting Started & Local Setup

To run the application locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/JastinBolanos/Diavoire.git
   cd Diavoire
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Launch the development server**:
   ```bash
   npm run dev
   ```
   The application will be accessible at `http://localhost:3000`.

4. **Verify types & production build**:
   ```bash
   npm run lint      # Runs TypeScript verification with tsc --noEmit
   npm run build     # Compiles production-ready assets to dist/
   ```

---

## 📋 Acknowledgments & Closing

This project is a dedicated exploration of translating the refined standards of high-jewelry maisons into a pure front-end web application. Every interaction, animation, and architectural boundary has been shaped with precision and humility. Thank you for exploring Diavoire.
