import Link from "next/link";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { prisma } from "@/lib/prisma";

const categories = ["jackets", "shoes", "watches", "bags", "pashmina", "dhaka", "muga", "mithila", "heritage", "limited"];

export default async function ShopPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string; q?: string }>;
}) {
  const params = await searchParams;
  const category = categories.includes(params?.category ?? "")
    ? params?.category
    : undefined;
  const query = params?.q?.trim();

  const products = await prisma.product.findMany({
    where: {
      active: true,
      category,
      OR: query
        ? [
            { name: { contains: query, mode: "insensitive" } },
            { description: { contains: query, mode: "insensitive" } },
          ]
        : undefined,
    },
    orderBy: [{ category: "asc" }, { name: "asc" }],
  });

  return (
    <>
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 border-b border-neutral-200 pb-8 dark:border-neutral-800 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-dark dark:text-gold-light">
              {category || "All"} Collection
            </p>
            <h1 className="mt-2 text-4xl font-serif font-bold uppercase tracking-tight text-neutral-950 dark:text-neutral-50">
              {category || "The Atelier"}
            </h1>
            <p className="mt-1 text-[10px] tracking-wider text-neutral-500">
              {products.length} {products.length === 1 ? "product" : "products"}
            </p>
          </div>
          <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <form className="flex flex-1 gap-2" action="/shop">
              {category ? (
                <input type="hidden" name="category" value={category} />
              ) : null}
              <input
                name="q"
                defaultValue={query}
                placeholder="Search collection"
                aria-label="Search products"
                className="h-11 min-w-0 flex-1 border border-neutral-300 bg-transparent px-4 text-[10px] uppercase tracking-widest outline-none transition-colors focus:border-gold-dark dark:border-neutral-700 dark:text-neutral-50 dark:focus:border-gold-light"
              />
              <button
                type="submit"
                className="h-11 bg-neutral-950 px-5 text-[10px] font-bold uppercase tracking-widest text-white transition hover:bg-gold-dark dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-gold"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-1.5">
          <Link
            href="/shop"
            className={`px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-200 ${
              !category
                ? "bg-neutral-950 text-white dark:bg-neutral-50 dark:text-neutral-950"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800"
            }`}
          >
            All
          </Link>
          {categories.map((item) => (
            <Link
              key={item}
              href={`/shop?category=${item}`}
              className={`px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-200 ${
                category === item
                  ? "bg-neutral-950 text-white dark:bg-neutral-50 dark:text-neutral-950"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>

        {products.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-16 border border-neutral-200 p-10 text-center dark:border-neutral-800">
            <h2 className="text-xl font-semibold text-neutral-950 dark:text-neutral-50">
              No products found
            </h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              Try another category or search term.
            </p>
          </div>
        )}
      </main>
    </>
  );
}
