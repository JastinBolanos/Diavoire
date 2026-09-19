import { useState, useCallback, useMemo } from 'react';
import { JewelryItem, CartItem } from '../types';
import { FEATURED_JEWELRY } from '../data/jewelry';

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([
    { item: FEATURED_JEWELRY[1], quantity: 1, selectedSize: '7' },
    { item: FEATURED_JEWELRY[2], quantity: 1, selectedSize: '6.5' },
    { item: FEATURED_JEWELRY[3], quantity: 1, selectedSize: 'Standard' },
  ]);

  const addToCart = useCallback((item: JewelryItem, size: string = '7') => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { item, quantity: 1, selectedSize: size }];
    });
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) => {
          if (c.item.id === id) {
            const nextQty = c.quantity + delta;
            return nextQty > 0 ? { ...c, quantity: nextQty } : null;
          }
          return c;
        })
        .filter((c): c is CartItem => c !== null)
    );
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart((prev) => prev.filter((c) => c.item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const totalCount = useMemo(() => {
    return cart.reduce((acc, c) => acc + c.quantity, 0);
  }, [cart]);

  const subtotal = useMemo(() => {
    return cart.reduce((acc, c) => acc + c.item.price * c.quantity, 0);
  }, [cart]);

  return {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalCount,
    subtotal,
  };
}
