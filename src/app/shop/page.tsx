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
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              Catalog
            </p>
            <h1 className="mt-2 text-4xl font-semibold text-neutral-950 dark:text-neutral-50">
              Shop products
            </h1>
          </div>
          <form className="flex w-full max-w-md gap-2" action="/shop">
            {category ? (
              <input type="hidden" name="category" value={category} />
            ) : null}
            <input
              name="q"
              defaultValue={query}
              placeholder="Search catalog"
              aria-label="Search products"
              className="h-11 min-w-0 flex-1 rounded-md border border-neutral-300 bg-white px-3 text-sm outline-none focus:border-neutral-950 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:focus:border-neutral-50"
            />
            <button
              type="submit"
              className="h-11 rounded-md bg-neutral-950 px-5 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200"
            >
              Search
            </button>
          </form>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <Link
            href="/shop"
            className={`rounded-full border px-4 py-2 text-sm transition ${
              !category
                ? "border-neutral-950 bg-neutral-950 text-white dark:border-neutral-50 dark:bg-neutral-50 dark:text-neutral-950"
                : "border-neutral-300 text-neutral-700 hover:border-neutral-950 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-50"
            }`}
          >
            All
          </Link>
          {categories.map((item) => (
            <Link
              key={item}
              href={`/shop?category=${item}`}
              className={`rounded-full border px-4 py-2 text-sm capitalize transition ${
                category === item
                  ? "border-neutral-950 bg-neutral-950 text-white dark:border-neutral-50 dark:bg-neutral-50 dark:text-neutral-950"
                  : "border-neutral-300 text-neutral-700 hover:border-neutral-950 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-50"
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
