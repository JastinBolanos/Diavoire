import { JewelryItem } from './jewelry';

export interface CartItem {
  item: JewelryItem;
  quantity: number;
  selectedSize?: string;
}

export interface CartSummary {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
}
