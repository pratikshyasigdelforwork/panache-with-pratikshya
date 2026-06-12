import Link from "next/link";
import Header from "@/components/Header";
import ClearCartOnMount from "@/components/ClearCartOnMount";
import { formatMoney } from "@/lib/money";
import { prisma } from "@/lib/prisma";

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams?: Promise<{ session_id?: string }>;
}) {
  const params = await searchParams;
  const order = params?.session_id
    ? await prisma.order.findUnique({
        where: { stripeCheckoutSessionId: params.session_id },
        include: { items: true },
      })
    : null;

  return (
    <>
      <Header />
      <ClearCartOnMount />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="border border-neutral-200 p-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
            Checkout
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-neutral-950">
            Thanks for your order
          </h1>
          <p className="mt-3 text-neutral-600">
            We are processing your payment confirmation and will prepare your
            items after Stripe confirms the checkout session.
          </p>

          {order ? (
            <div className="mt-8 space-y-4 border-t border-neutral-200 pt-6">
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600">Order ID</span>
                <span className="font-medium">{order.id}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600">Status</span>
                <span className="font-medium capitalize">{order.status}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-neutral-600">Total</span>
                <span className="font-medium">
                  {formatMoney(order.totalCents, order.currency)}
                </span>
              </div>
            </div>
          ) : null}

          <Link
            href="/shop"
            className="mt-8 inline-flex h-11 items-center rounded-md bg-neutral-950 px-6 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            Continue shopping
          </Link>
        </div>
      </main>
    </>
  );
}
