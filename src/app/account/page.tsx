import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function AccountPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="border border-neutral-200 p-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
            Account
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-neutral-950">
            Customer accounts are coming next
          </h1>
          <p className="mt-3 max-w-2xl leading-7 text-neutral-600">
            Checkout supports guest orders today. The project already includes
            user and order models, so authentication can be connected without
            changing the catalog or Stripe checkout flow.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="inline-flex h-11 items-center rounded-md bg-neutral-950 px-6 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Shop products
            </Link>
            <Link
              href="/cart"
              className="inline-flex h-11 items-center rounded-md border border-neutral-300 px-6 text-sm font-medium text-neutral-950 transition hover:bg-neutral-50"
            >
              View cart
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
