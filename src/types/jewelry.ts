export type JewelryCategory = 'necklaces' | 'rings' | 'earrings' | 'bracelets' | 'collections';

export type JewelryBadge = 'BESTSELLER' | 'NEW' | 'LIMITED' | 'SALE' | 'EXCLUSIVE' | 'RARE';

export interface JewelryItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: JewelryCategory;
  badge?: JewelryBadge;
  badgeColor?: string;
  image: string;
  carat: string;
  metal: string;
  clarity: string;
  cut: string;
  description: string;
  inStock: boolean;
}

export type MetalFilter = 'ALL' | 'PLATINUM' | 'WHITE_GOLD' | 'YELLOW_GOLD' | 'ROSE_GOLD';
export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'carat-desc';
