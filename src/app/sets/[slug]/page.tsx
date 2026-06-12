import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function SetDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const set = await prisma.productSet.findUnique({
    where: { slug },
    include: {
      products: {
        include: {
          product: true,
        },
        orderBy: {
          order: "asc",
        },
      },
    },
  });

  if (!set) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        {/* Set Hero */}
        <section className="relative h-[60vh] w-full overflow-hidden">
          <Image
            src={set.image}
            alt={set.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center text-white">
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold">Curated Set</span>
            <h1 className="mt-6 text-4xl font-serif font-bold uppercase tracking-tight md:text-6xl">
              {set.name}
            </h1>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed tracking-wide text-white/80">
              {set.description}
            </p>
          </div>
        </section>

        {/* Set Products */}
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-center text-center gap-4">
            <h2 className="text-2xl font-serif font-bold uppercase tracking-tight text-neutral-950 dark:text-neutral-50">
              Included in this Set
            </h2>
            <div className="h-[1px] w-20 bg-gold my-2" />
          </div>

          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {set.products.map((link) => (
              <ProductCard key={link.product.id} product={link.product} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
