"use client";

import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { useWishlistStore } from "@/lib/wishlist-store";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WishlistPage() {
  const { items } = useWishlistStore();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-dark dark:text-gold-light">Your Collection</span>
          <h1 className="text-4xl font-serif font-bold uppercase tracking-tight text-neutral-950 dark:text-neutral-50 md:text-5xl">
            Wishlist
          </h1>
          <div className="h-[1px] w-20 bg-gold my-4" />
        </div>

        {items.length > 0 ? (
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <ProductCard 
                key={item.id} 
                product={{
                  ...item,
                  category: "Wishlist",
                  description: "",
                  stock: 1, // Assume available if in wishlist for UI purposes
                }} 
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center py-20 text-center">
            <p className="text-sm tracking-widest text-neutral-500 dark:text-neutral-400">
              Your wishlist is currently empty.
            </p>
            <Link
              href="/shop"
              className="mt-8 inline-flex h-12 items-center bg-neutral-950 px-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-gold-dark dark:bg-gold dark:text-neutral-950 dark:hover:bg-gold-light"
            >
              Explore Collections
            </Link>
          </div>
        )}
      </main>
    </>
  );
}
