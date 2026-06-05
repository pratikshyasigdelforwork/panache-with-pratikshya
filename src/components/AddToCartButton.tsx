"use client";

import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";

type AddToCartProduct = {
  id: string;
  name: string;
  slug: string;
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
      onClick={() => addItem(product)}
      className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-neutral-950 px-4 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-300"
    >
      <ShoppingBag className="h-4 w-4" />
      {disabled ? "Out of stock" : "Add to cart"}
    </button>
  );
}
