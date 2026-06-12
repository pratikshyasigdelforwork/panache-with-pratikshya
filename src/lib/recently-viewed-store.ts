import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ViewedProduct {
  id: string;
  name: string;
  priceCents: number;
  currency: string;
  image: string;
  slug: string | null;
}

interface RecentlyViewedState {
  items: ViewedProduct[];
  addItem: (item: ViewedProduct) => void;
  clear: () => void;
}

export const useRecentlyViewedStore = create<RecentlyViewedState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const items = get().items;
        const filtered = items.filter((i) => i.id !== item.id);
        set({ items: [item, ...filtered].slice(0, 10) }); // Keep last 10
      },
      clear: () => set({ items: [] }),
    }),
    {
      name: "panache-recently-viewed",
    }
  )
);
