"use client";

import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";

type AddToCartProduct = {
  id: string;
  name: string;
  slug: string | null;
  image: string;
  priceCents: number;
  currency: string;
  stock: number;
};

export default function AddToCartButton({
  product,
}: {
  product: AddToCartProduct;
}) {
  const addItem = useCartStore((state) => state.addItem);
  const disabled = product.stock < 1;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => addItem({ ...product, slug: product.slug ?? "" })}
      className="mt-6 inline-flex h-12 w-full items-center justify-center gap-3 bg-neutral-950 px-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-gold-dark disabled:cursor-not-allowed disabled:bg-neutral-300 dark:bg-gold dark:text-neutral-950 dark:hover:bg-gold-light dark:disabled:bg-neutral-800 dark:disabled:text-neutral-500"
    >
      <ShoppingBag className="h-4 w-4" />
      {disabled ? "Sold Out" : "Add to Atelier Bag"}
    </button>
  );
}
