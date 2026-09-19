export interface JewelryItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'necklaces' | 'rings' | 'earrings' | 'bracelets' | 'collections';
  badge?: 'BESTSELLER' | 'NEW' | 'LIMITED' | 'SALE' | 'EXCLUSIVE' | 'RARE';
  badgeColor?: string;
  image: string;
  carat: string;
  metal: string;
  clarity: string;
  cut: string;
  description: string;
  inStock: boolean;
}

export interface CartItem {
  item: JewelryItem;
  quantity: number;
  selectedSize?: string;
}

export type ActiveNavTab = 'HOME' | 'NECKLACES' | 'RINGS' | 'EARRINGS' | 'BRACELETS' | 'COLLECTIONS' | 'GIFTS' | 'SALE';
