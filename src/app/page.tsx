import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    take: 4,
  });

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

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
                <h1 className="text-6xl font-bold uppercase leading-none tracking-tighter md:text-8xl">
                  Panache.
                </h1>
                <p className="mt-6 text-xl font-light tracking-wide text-white/90">
                  Curated designer pieces by Pratikshya. Timeless elegance.
                </p>
                <div className="mt-10 flex gap-4">
                  <Link
                    href="/shop"
                    className="inline-flex h-14 items-center bg-white px-10 text-sm font-bold uppercase tracking-widest text-neutral-950 transition hover:bg-neutral-200"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 border-b border-neutral-200 pb-8">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-neutral-950">
            Ready to ship
          </h2>
          <p className="max-w-md text-neutral-600">Explore our latest designer arrivals, curated for the modern wardrobe.</p>
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
