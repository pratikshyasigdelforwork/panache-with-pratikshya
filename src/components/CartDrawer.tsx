"use client";

import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/lib/cart-store";
import { formatMoney } from "@/lib/money";
import { cn } from "@/lib/utils";
import CheckoutButton from "@/components/CheckoutButton";
import { useEffect } from "react";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem } = useCartStore();

  const sanitizedItems = items.filter(
    (i) => Number.isFinite(i.priceCents) && Number.isFinite(i.quantity) && i.priceCents > 0 && i.quantity > 0
  );
  const subtotalCents = sanitizedItems.reduce(
    (total, item) => total + item.priceCents * item.quantity,
    0
  );

  // Prevent background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 z-[100] bg-black/40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside 
        className={cn(
          "fixed right-0 top-0 z-[101] h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 ease-out dark:bg-neutral-950",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-200 p-6 dark:border-neutral-800">
            <h2 className="text-lg font-serif font-bold uppercase tracking-widest text-neutral-950 dark:text-neutral-50">
              Atelier Bag ({items.length})
            </h2>
            <button 
              onClick={closeCart}
              className="p-2 text-neutral-500 transition hover:text-gold"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {sanitizedItems.length > 0 ? (
              sanitizedItems.map((item) => (
                <div key={item.id} className="grid grid-cols-[80px_1fr] gap-6">
                  <div className="relative aspect-square overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-[10px] tracking-widest text-neutral-500">
                        {formatMoney(item.priceCents, item.currency)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-neutral-200 dark:border-neutral-800">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 text-neutral-500 hover:text-gold"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-[10px]">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 text-neutral-500 hover:text-gold"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-[9px] uppercase tracking-widest text-neutral-400 hover:text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex h-full flex-col items-center justify-center text-center py-20">
                <ShoppingBag className="h-12 w-12 text-neutral-200 mb-6" />
                <p className="text-xs tracking-widest text-neutral-500">Your bag is empty.</p>
                <button 
                  onClick={closeCart}
                  className="mt-8 text-[10px] font-bold uppercase tracking-[0.3em] border-b border-neutral-950 dark:border-white pb-1"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          {sanitizedItems.length > 0 && (
            <div className="border-t border-neutral-200 p-6 dark:border-neutral-800 space-y-6 bg-neutral-50 dark:bg-neutral-900/50">
              <div className="flex justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Estimated Total</span>
                <span className="text-sm font-bold">{formatMoney(subtotalCents, sanitizedItems[0].currency)}</span>
              </div>
              <p className="text-[9px] leading-relaxed text-neutral-400 tracking-wider">
                Shipping and taxes are calculated at the next step of the atelier checkout process.
              </p>
              <div onClick={closeCart}>
                <CheckoutButton />
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
