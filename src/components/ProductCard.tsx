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
};

export default function ProductCard({
  product,
}: {
  product: ProductCardProduct;
}) {
  return (
    <article className="group">
      <Link href={`/products/${product.slug ?? ""}`} className="block">
        <div className="relative aspect-[2/3] overflow-hidden bg-neutral-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="mt-4 flex flex-col gap-1">
        <Link href={`/products/${product.slug ?? ""}`} className="block">
          <h3 className="text-sm font-light tracking-wide text-neutral-900 group-hover:underline underline-offset-4">{product.name}</h3>
        </Link>

        <p className="text-xs font-normal text-neutral-500">
          {formatMoney(product.priceCents, product.currency)}
        </p>
      </div>
    </article>
  );
}
