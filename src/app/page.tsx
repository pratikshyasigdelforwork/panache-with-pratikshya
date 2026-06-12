import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    take: 4,
  });

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      <Header />

          <section className="relative h-[80vh] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=80"
              alt="Panache with Pratikshya"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-24 sm:px-6 lg:px-8">
              <div className="max-w-2xl text-white">
                <h1 className="text-6xl font-serif font-bold uppercase leading-none tracking-tighter md:text-8xl">
                  PRATIKSHYA
                </h1>
                <p className="mt-4 text-[10px] uppercase tracking-[0.5em] text-gold">
                  Heritage Atelier 1952
                </p>
                <p className="mt-6 text-xl font-light tracking-wide text-white/90">
                  Authentic Nepalese heritage. Timeless elegance.
                </p>
                <div className="mt-10 flex gap-4">
                  <Link
                    href="/shop"
                    className="inline-flex h-14 items-center bg-white px-10 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-950 transition hover:bg-gold-light"
                  >
                    Enter the Atelier
                  </Link>
                </div>
              </div>
            </div>
          </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-center text-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-dark dark:text-gold-light">New Collections</span>
          <h2 className="text-4xl font-serif font-bold uppercase tracking-tight text-neutral-950 dark:text-neutral-50 md:text-5xl">
            Limited Masters
          </h2>
          <div className="h-[1px] w-20 bg-gold my-4" />
          <p className="max-w-md text-sm leading-relaxed tracking-wide text-neutral-600 dark:text-neutral-400">
            Explore our latest heritage arrivals, each hand-crafted by master artisans in our Kathmandu atelier.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
