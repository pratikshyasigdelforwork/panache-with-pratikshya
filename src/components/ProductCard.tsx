import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";
import { formatMoney } from "@/lib/money";

type ProductCardProduct = {
  id: string;
  slug: string;
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
    <article className="group overflow-hidden border border-neutral-200 bg-white">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-4">
        <p className="text-xs uppercase tracking-wide text-neutral-500">
          {product.category}
        </p>
        <Link href={`/products/${product.slug}`} className="mt-2 block">
          <h3 className="font-semibold text-neutral-950">{product.name}</h3>
        </Link>

        <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
          {product.description}
        </p>

        <p className="mt-3 font-medium text-neutral-950">
          {formatMoney(product.priceCents, product.currency)}
        </p>

        <AddToCartButton product={product} />
      </div>
    </article>
  );
}
