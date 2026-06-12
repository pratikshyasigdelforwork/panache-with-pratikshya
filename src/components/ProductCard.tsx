import Image from "next/image";
import Link from "next/link";

import { formatMoney } from "@/lib/money";

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
  return (
    <article className="group relative">
      <Link href={`/products/${product.slug ?? ""}`} className="block">
        <div className="relative aspect-[2/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          {product.limitedEdition && (
            <div className="absolute left-0 top-4 bg-gold-dark px-3 py-1 text-[8px] font-bold uppercase tracking-[0.2em] text-white">
              Limited Master
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
        </div>
      </Link>

      <div className="mt-6 flex flex-col items-center text-center gap-2">
        <span className="text-[8px] uppercase tracking-[0.3em] text-gold-dark dark:text-gold-light">
          {product.brand || "Heritage Atelier"}
        </span>
        <Link href={`/products/${product.slug ?? ""}`} className="block">
          <h3 className="text-xs font-serif uppercase tracking-widest text-neutral-900 dark:text-neutral-100 group-hover:text-gold-dark transition-colors">
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
