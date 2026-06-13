"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";

import { formatMoney } from "@/lib/money";
import { useCartStore } from "@/lib/cart-store";

type ProductCardProduct = {
  id: string;
  slug: string | null;
  name: string;
  category: string;
  description: string | null;
  priceCents: number;
  currency: string;
  image: string;
  stock: number;
  limitedEdition?: boolean;
  brand?: string | null;
};

export default function ProductCard({
  product,
}: {
  product: ProductCardProduct;
}) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <article className="group relative transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/products/${product.slug ?? ""}`} className="block">
        <div className="relative aspect-[2/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          />
          {/* Limited Edition badge */}
          {product.limitedEdition && (
            <div className="absolute left-0 top-4 bg-gold-dark px-4 py-1.5 text-[8px] font-bold uppercase tracking-[0.2em] text-white">
              Limited Master
            </div>
          )}
          {/* Low stock badge */}
          {product.stock > 0 && product.stock <= 3 && (
            <div className="absolute right-0 top-4 bg-vermillion px-3 py-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white">
              Only {product.stock} Left
            </div>
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {/* Wishlist heart */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-white/80 opacity-0 transition-all duration-300 hover:bg-white group-hover:opacity-100"
            aria-label="Add to wishlist"
          >
            <Heart className="h-4 w-4 text-neutral-700" />
          </button>
          {/* Quick add button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem({
                id: product.id,
                name: product.name,
                priceCents: product.priceCents,
                currency: product.currency,
                image: product.image,
                stock: product.stock,
                slug: product.slug || "",
              });
            }}
            className="absolute bottom-0 left-0 right-0 z-10 flex h-12 items-center justify-center gap-2 bg-black/80 text-[9px] font-bold uppercase tracking-[0.2em] text-white opacity-0 transition-all duration-500 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-gold-dark"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add to Bag
          </button>
        </div>
      </Link>

      <div className="mt-5 flex flex-col items-center text-center gap-1.5">
        <span className="text-[8px] uppercase tracking-[0.3em] text-gold-dark dark:text-gold-light">
          {product.brand || "Heritage Atelier"}
        </span>
        <Link href={`/products/${product.slug ?? ""}`}>
          <h3 className="text-xs font-serif uppercase tracking-widest text-neutral-900 dark:text-neutral-100 transition-colors group-hover:text-gold-dark">
            {product.name}
          </h3>
        </Link>
        <p className="text-[10px] font-medium tracking-widest text-neutral-500 dark:text-neutral-400">
          {formatMoney(product.priceCents, product.currency)}
        </p>
      </div>
    </article>
  );
}
