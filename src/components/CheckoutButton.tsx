"use client";

import { useState } from "react";
import { CreditCard } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";

export default function CheckoutButton() {
  const items = useCartStore((state) => state.items);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
          })),
        }),
      });

      const payload = (await response.json()) as {
        url?: string;
        error?: string;
      };

      if (!response.ok || !payload.url) {
        throw new Error(payload.error ?? "Unable to start checkout.");
      }

      window.location.assign(payload.url);
    } catch (checkoutError) {
      setError(
        checkoutError instanceof Error
          ? checkoutError.message
          : "Unable to start checkout.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3">
      <button
        type="button"
        disabled={loading || items.length === 0}
        onClick={handleCheckout}
        className="inline-flex h-14 w-full items-center justify-center gap-3 bg-neutral-950 px-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-gold-dark disabled:cursor-not-allowed disabled:bg-neutral-300 dark:bg-gold dark:text-neutral-950 dark:hover:bg-gold-light dark:disabled:bg-neutral-800 dark:disabled:text-neutral-500"
      >
        <CreditCard className="h-4 w-4" />
        {loading ? "Initializing Atelier Checkout" : "Proceed to Secure Payment"}
      </button>
      {error ? <p className="text-sm text-red-600 dark:text-red-400">{error}</p> : null}
    </div>
  );
}
