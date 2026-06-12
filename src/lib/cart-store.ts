"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { produce } from "immer"; // For immutable updates

export type CartItem = {
  id: string;
  name: string;
  slug: string;
  image: string;
  priceCents: number;
  currency: string;
  stock: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  // Add a flag to indicate if the store has been hydrated
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      _hasHydrated: false,
      setHasHydrated: (state) => {
        set({
          _hasHydrated: state,
        });
      },
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      addItem: (item, quantity = 1) => {
        set(
          produce((state: CartState) => {
            const existingItemIndex = state.items.findIndex(
              (i) => i.id === item.id,
            );

            if (existingItemIndex > -1) {
              const existingItem = state.items[existingItemIndex];
              const newQuantity = existingItem.quantity + quantity;
              state.items[existingItemIndex].quantity = Math.min(
                newQuantity,
                item.stock,
              );
            } else {
              state.items.push({ ...item, quantity: Math.min(quantity, item.stock) });
            }
          }),
        );
        get().openCart(); // Open drawer on add
      },
      removeItem: (id) =>
        set(
          produce((state: CartState) => {
            state.items = state.items.filter((item) => item.id !== id);
          }),
        ),
      updateQuantity: (id, quantity) =>
        set(
          produce((state: CartState) => {
            const itemIndex = state.items.findIndex((item) => item.id === id);
            if (itemIndex > -1) {
              const product = get().items[itemIndex]; // Get current product to check stock
              state.items[itemIndex].quantity = Math.max(
                1,
                Math.min(quantity, product.stock),
              );
            }
          }),
        ),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage", // name of the item in localStorage
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
