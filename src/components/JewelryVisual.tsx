import React from 'react';

interface JewelryVisualProps {
  id: string;
  name: string;
  image?: string;
  className?: string;
}

const PRODUCT_IMAGES: Record<string, string> = {
  'dia-1': '/products/infinity-pendant.jpg',
  'dia-2': '/products/emerald-halo-ring.jpg',
  'dia-3': '/products/solitaire-diamond-ring.jpg',
  'dia-4': '/products/diamond-drop-earrings.jpg',
  'dia-5': '/products/tennis-bracelet.jpg',
  'dia-6': '/products/sapphire-choker.jpg',
  'dia-7': '/products/hyperion-ring.jpg',
  'dia-8': '/products/aurelia-gold-ring.jpg',
  'dia-9': '/products/star-sapphire.jpg',
  'dia-10': '/products/solaris-canary-cuff.jpg',
  'dia-11': '/products/orion-paraiba-ring.jpg',
  'dia-12': '/products/cassiopeia-earrings.jpg',
};

export const JewelryVisual: React.FC<JewelryVisualProps> = ({ id, name, image, className = '' }) => {
  const imageSrc = image || PRODUCT_IMAGES[id] || '/products/solitaire-diamond-ring.jpg';

  return (
    <div className={`relative w-full h-full bg-[#020512] flex items-center justify-center overflow-hidden select-none group ${className}`}>
      <img
        src={imageSrc}
        alt={name}
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter contrast-[1.08] brightness-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020512]/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-cyan-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};
