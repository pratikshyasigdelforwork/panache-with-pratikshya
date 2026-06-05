"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import CheckoutButton from "@/components/CheckoutButton";
import { useCartStore } from "@/lib/cart-store";
import { formatMoney } from "@/lib/money";

export default function CartClient() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const subtotalCents = items.reduce(
    (total, item) => total + item.priceCents * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl py-20 text-center">
        <h1 className="text-3xl font-semibold text-neutral-950">
          Your bag is empty
        </h1>
        <p className="mt-3 text-neutral-600">
          Add jackets, shoes, watches, and bags from the shop.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-flex h-11 items-center rounded-md bg-neutral-950 px-6 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          Shop products
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-neutral-950">Shopping bag</h1>
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {items.map((item) => (
            <div key={item.id} className="grid grid-cols-[96px_1fr] gap-4 py-5">
              <div className="relative aspect-square overflow-hidden rounded-md bg-neutral-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div className="flex min-w-0 flex-col justify-between gap-4 sm:flex-row">
                <div>
                  <Link
                    href={`/products/${item.slug}`}
                    className="font-medium text-neutral-950 hover:underline"
                  >
                    {item.name}
                  </Link>
                  <p className="mt-1 text-sm text-neutral-600">
                    {formatMoney(item.priceCents, item.currency)}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-neutral-500">
                    {item.stock} in stock
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 items-center rounded-md border border-neutral-300">
                    <button
                      type="button"
                      aria-label={`Decrease ${item.name} quantity`}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="grid h-10 w-10 place-items-center text-neutral-700 hover:text-neutral-950"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      aria-label={`Increase ${item.name} quantity`}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="grid h-10 w-10 place-items-center text-neutral-700 hover:text-neutral-950"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    type="button"
                    aria-label={`Remove ${item.name}`}
                    onClick={() => removeItem(item.id)}
                    className="grid h-10 w-10 place-items-center rounded-md border border-neutral-300 text-neutral-600 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <aside className="h-fit border border-neutral-200 p-6">
        <h2 className="text-lg font-semibold text-neutral-950">Order summary</h2>
        <div className="mt-5 space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-neutral-600">Subtotal</span>
            <span className="font-medium">
              {formatMoney(subtotalCents, items[0]?.currency)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-600">Shipping</span>
            <span className="font-medium">Calculated by Stripe</span>
          </div>
        </div>
        <div className="mt-6">
          <CheckoutButton />
        </div>
      </aside>
    </div>
  );
}
