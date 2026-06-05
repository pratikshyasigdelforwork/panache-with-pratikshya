"use client";

import { useCartStore } from "@/lib/cart-store";

export default function CartCount() {
  const items = useCartStore((state) => state.items);

  const count = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <span
      suppressHydrationWarning
      className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-950 text-[9px] font-medium text-white"
    >
      {count}
    </span>
  );
}
