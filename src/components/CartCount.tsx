"use client";

import { useCartStore } from "@/lib/cart-store";

export default function CartCount() {
  const items = useCartStore((state) => state.items);
  const hasHydrated = useCartStore((state) => state._hasHydrated);

  const count = items.reduce((total, item) => total + item.quantity, 0);

  // Only render the count after the store has been hydrated to avoid hydration mismatches
  if (!hasHydrated) {
    return null;
  }

  return (
    <span
      className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-950 text-[9px] font-medium text-white dark:bg-neutral-50 dark:text-neutral-950"
    >
      {count}
    </span>
  );
}
