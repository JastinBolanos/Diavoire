import { useState, useMemo, useCallback } from 'react';
import { ActiveNavTab, JewelryItem } from '../types';
import { ALL_JEWELRY, FEATURED_JEWELRY } from '../data/jewelry';

export function useCatalogFilter() {
  const [activeTab, setActiveTab] = useState<ActiveNavTab>('HOME');
  const [searchQuery, setSearchQuery] = useState('');

  const displayedItems = useMemo(() => {
    let items = ALL_JEWELRY;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return items.filter(
        (it) =>
          it.name.toLowerCase().includes(q) ||
          it.description.toLowerCase().includes(q) ||
          it.cut.toLowerCase().includes(q) ||
          it.metal.toLowerCase().includes(q) ||
          it.category.toLowerCase().includes(q)
      );
    }

    if (activeTab === 'HOME') {
      return FEATURED_JEWELRY;
    }
    if (activeTab === 'NECKLACES') {
      return items.filter((it) => it.category === 'necklaces');
    }
    if (activeTab === 'RINGS') {
      return items.filter((it) => it.category === 'rings');
    }
    if (activeTab === 'EARRINGS') {
      return items.filter((it) => it.category === 'earrings');
    }
    if (activeTab === 'BRACELETS') {
      return items.filter((it) => it.category === 'bracelets');
    }
    if (activeTab === 'SALE') {
      return items.filter((it) => it.badge === 'SALE');
    }

    return FEATURED_JEWELRY;
  }, [activeTab, searchQuery]);

  const selectTab = useCallback((tab: ActiveNavTab) => {
    setActiveTab(tab);
    setSearchQuery('');
  }, []);

  const updateSearchQuery = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  return {
    activeTab,
    searchQuery,
    displayedItems,
    selectTab,
    updateSearchQuery,
  };
}
