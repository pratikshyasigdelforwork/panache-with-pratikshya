import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import AddToCartButton from "@/components/AddToCartButton";
import ProductCard from "@/components/ProductCard";
import { formatMoney } from "@/lib/money";
import { prisma } from "@/lib/prisma";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await prisma.product.findFirst({
    where: { slug, active: true },
  });

  if (!product) {
    notFound();
  }

  const related = await prisma.product.findMany({
    where: {
      active: true,
      category: product.category,
      id: { not: product.id },
    },
    take: 4,
    orderBy: { name: "asc" },
  });

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <section className="lg:pt-8">
            <Link
              href={`/shop?category=${product.category}`}
              className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500 hover:text-neutral-950"
            >
              {product.category}
            </Link>
            <h1 className="mt-4 text-4xl font-semibold text-neutral-950">
              {product.name}
            </h1>
            <p className="mt-4 text-2xl font-medium text-neutral-950">
              {formatMoney(product.priceCents, product.currency)}
            </p>
            <p className="mt-6 max-w-xl leading-7 text-neutral-700">
              {product.description}
            </p>
            <div className="mt-6 border-y border-neutral-200 py-5 text-sm text-neutral-600">
              <p>{product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}</p>
              <p className="mt-2">Secure checkout powered by Stripe.</p>
            </div>
            <div className="mt-6 max-w-sm">
              <AddToCartButton product={product} />
            </div>
          </section>
        </div>

        {related.length > 0 ? (
          <section className="mt-16">
            <h2 className="text-2xl font-semibold text-neutral-950">
              More {product.category}
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}
