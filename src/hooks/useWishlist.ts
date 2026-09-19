import { useState, useCallback, useMemo } from 'react';
import { JewelryItem } from '../types';
import { ALL_JEWELRY } from '../data/jewelry';

export function useWishlist() {
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(
    new Set(['dia-2', 'dia-3', 'dia-5'])
  );

  const toggleWishlist = useCallback((id: string): boolean => {
    let isNowSaved = false;
    setWishlistIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        isNowSaved = false;
      } else {
        next.add(id);
        isNowSaved = true;
      }
      return next;
    });
    return isNowSaved;
  }, []);

  const isWishlisted = useCallback(
    (id: string) => wishlistIds.has(id),
    [wishlistIds]
  );

  const wishlistedItems = useMemo(() => {
    return ALL_JEWELRY.filter((item) => wishlistIds.has(item.id));
  }, [wishlistIds]);

  return {
    wishlistIds,
    toggleWishlist,
    isWishlisted,
    wishlistedItems,
    wishlistCount: wishlistIds.size,
  };
}
