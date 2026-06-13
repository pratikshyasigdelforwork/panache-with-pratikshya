import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Shield, Truck, RotateCcw } from "lucide-react";
import Header from "@/components/Header";
import AddToCartButton from "@/components/AddToCartButton";
import ProductCard from "@/components/ProductCard";
import ImageGallery from "@/components/ImageGallery";
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

  const allImages = [product.image, ...(product.images ?? [])].filter(Boolean);
  const materials = product.material || "Hand-selected Nepalese heritage fabrics";
  const sizes = product.sizes || [];
  const colors = product.colors || [];

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
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-neutral-400">
          <Link href="/" className="hover:text-gold-dark dark:hover:text-gold-light transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-gold-dark dark:hover:text-gold-light transition-colors">Shop</Link>
          {product.category && (
            <>
              <span>/</span>
              <Link href={`/shop?category=${product.category}`} className="hover:text-gold-dark dark:hover:text-gold-light transition-colors">
                {product.category}
              </Link>
            </>
          )}
          <span>/</span>
          <span className="text-neutral-600 dark:text-neutral-400">{product.name}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Gallery */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <ImageGallery images={allImages} alt={product.name} />
          </div>

          {/* Product info */}
          <section className="lg:pt-4">
            {/* Category + Limited badge */}
            <div className="flex items-center gap-4">
              <Link
                href={`/shop?category=${product.category}`}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-dark dark:text-gold-light transition hover:underline"
              >
                {product.category}
              </Link>
              {product.limitedEdition && (
                <span className="text-[8px] font-bold uppercase tracking-[0.2em] bg-gold-dark text-white px-2 py-0.5">
                  Limited Master
                </span>
              )}
            </div>

            <h1 className="mt-4 text-3xl font-serif font-bold uppercase tracking-tight text-neutral-950 dark:text-neutral-50 lg:text-4xl">
              {product.name}
            </h1>

            <p className="mt-3 text-2xl font-medium text-neutral-950 dark:text-neutral-50">
              {formatMoney(product.priceCents, product.currency)}
            </p>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-4 border-y border-neutral-200 py-4 dark:border-neutral-800">
              <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-neutral-500">
                <Truck className="h-3 w-3 text-gold-dark dark:text-gold-light" />
                Free shipping over $200
              </div>
              <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-neutral-500">
                <RotateCcw className="h-3 w-3 text-gold-dark dark:text-gold-light" />
                14-day returns
              </div>
              <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-neutral-500">
                <Shield className="h-3 w-3 text-gold-dark dark:text-gold-light" />
                Secure checkout
              </div>
            </div>

            {/* Description */}
            <div className="mt-6 space-y-4">
              <p className="text-sm leading-relaxed tracking-wide text-neutral-700 dark:text-neutral-300">
                {product.description}
              </p>
            </div>

            {/* Material */}
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 h-4 w-0.5 flex-shrink-0 bg-gold" />
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-500">Material</span>
                  <p className="mt-0.5 text-xs tracking-wide text-neutral-700 dark:text-neutral-300">
                    {materials}
                  </p>
                </div>
              </div>
            </div>

            {/* Sizes */}
            {sizes.length > 0 && (
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-500">Size</span>
                  <Link href="/size-guide" className="text-[9px] uppercase tracking-widest text-gold-dark dark:text-gold-light underline-link">
                    Size Guide
                  </Link>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className="flex h-10 w-14 items-center justify-center border border-neutral-300 text-[10px] uppercase tracking-wider text-neutral-700 transition hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-50 dark:hover:text-neutral-50"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Colors */}
            {colors.length > 0 && (
              <div className="mt-6">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-500">Color</span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      className="flex h-9 items-center border border-neutral-300 px-4 text-[9px] uppercase tracking-wider text-neutral-600 transition hover:border-neutral-950 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-50"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Stock status */}
            <div className="mt-6 flex items-center gap-2">
              {product.stock > 0 ? (
                <>
                  <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                  <span className="text-[10px] tracking-wider text-green-700 dark:text-green-400">
                    {product.stock > 3
                      ? "In stock — ready to ship"
                      : `Only ${product.stock} remaining`}
                  </span>
                </>
              ) : (
                <span className="text-[10px] tracking-wider text-red-500">Out of stock</span>
              )}
            </div>

            {/* Add to cart */}
            <div className="mt-6">
              <AddToCartButton product={product} />
            </div>

            {/* Craftsmanship note */}
            <div className="mt-8 border border-neutral-100 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900/50">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-gold/10">
                  <svg className="h-5 w-5 text-gold-dark dark:text-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                </div>
                <p className="text-[10px] leading-relaxed tracking-wider text-neutral-500 dark:text-neutral-400">
                  Each PRATIKSHYA NEPAL piece is handcrafted by master artisans in our Kathmandu atelier. Please allow 2-3 business days for quality inspection before shipping.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Related Products */}
        {related.length > 0 ? (
          <section className="mt-20 border-t border-neutral-100 pt-12 dark:border-neutral-800">
            <h2 className="text-xl font-serif font-bold uppercase tracking-tight text-neutral-950 dark:text-neutral-50">
              Complete your collection
            </h2>
            <p className="mt-2 text-[10px] tracking-wider text-neutral-500">
              More from our {product.category} collection
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
