"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

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
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item, quantity = 1) =>
        set((state) => {
          const current = state.items.find((cartItem) => cartItem.id === item.id);
          const nextQuantity = current
            ? Math.min(current.quantity + quantity, item.stock)
            : Math.min(quantity, item.stock);

          if (current) {
            return {
              items: state.items.map((cartItem) =>
                cartItem.id === item.id
                  ? { ...cartItem, ...item, quantity: nextQuantity }
                  : cartItem,
              ),
            };
          }

          return {
            items: [...state.items, { ...item, quantity: nextQuantity }],
          };
        }),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(1, Math.min(quantity, item.stock)) }
              : item,
          ),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "asos-kathmandu-cart",
    },
  ),
);
