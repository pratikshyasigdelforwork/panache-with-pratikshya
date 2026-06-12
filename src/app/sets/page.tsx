import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function SetsPage() {
  const sets = await prisma.productSet.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-dark dark:text-gold-light">Artisan Curation</span>
          <h1 className="text-4xl font-serif font-bold uppercase tracking-tight text-neutral-950 dark:text-neutral-50 md:text-5xl">
            Curated Sets
          </h1>
          <div className="h-[1px] w-20 bg-gold my-4" />
          <p className="max-w-md text-sm text-neutral-600 dark:text-neutral-400">
            Hand-selected heritage pairings designed for effortless elegance.
          </p>
        </div>

        {sets.length > 0 ? (
          <div className="grid gap-12 sm:grid-cols-2">
            {sets.map((set) => (
              <Link key={set.id} href={`/sets/${set.slug}`} className="group relative block aspect-[16/9] overflow-hidden">
                <Image
                  src={set.image}
                  alt={set.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                  <h2 className="text-3xl font-serif font-bold uppercase tracking-widest">{set.name}</h2>
                  <span className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em] border-b border-white pb-1">
                    Explore Set
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-sm tracking-widest text-neutral-500 italic">
              New curated sets are being assembled in the atelier.
            </p>
          </div>
        )}
      </main>
    </>
  );
}
