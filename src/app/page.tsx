import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const products = await prisma.product.findMany({
    where: { active: true },
    orderBy: { createdAt: "desc" },
    take: 4,
  });

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative min-h-[560px] overflow-hidden bg-neutral-950 text-white">
        <Image
          src="/images/IMG_2683.jpeg"
          alt="ASOS Kathmandu new season collection"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-end px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/75">
            New season arrivals
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-normal sm:text-6xl">
            Fashion from Kathmandu to the world
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/80">
            Curated jackets, shoes, watches, and bags with secure Stripe checkout
            and live inventory from our catalog.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex h-12 w-fit items-center rounded-md bg-white px-6 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
          >
            Shop collection
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
              Featured
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-neutral-950">
              Ready to ship
            </h2>
          </div>
          <Link href="/shop" className="text-sm font-medium hover:underline">
            View all
          </Link>
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
