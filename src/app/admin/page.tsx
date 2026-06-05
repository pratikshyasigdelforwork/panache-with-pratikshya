import Navbar from "@/components/Navbar";
import { formatMoney } from "@/lib/money";
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const [orders, productCount, lowStockProducts, paidRevenue] = await Promise.all([
    prisma.order.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
      include: { items: true },
    }),
    prisma.product.count({ where: { active: true } }),
    prisma.product.findMany({
      where: { active: true, stock: { lte: 5 } },
      orderBy: { stock: "asc" },
      take: 8,
    }),
    prisma.order.aggregate({
      where: { status: "paid" },
      _sum: { totalCents: true },
    }),
  ]);

  const cards = [
    { label: "Active products", value: productCount.toString() },
    { label: "Recent orders", value: orders.length.toString() },
    {
      label: "Paid revenue",
      value: formatMoney(paidRevenue._sum.totalCents ?? 0, "usd"),
    },
    { label: "Low stock", value: lowStockProducts.length.toString() },
  ];

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-500">
            Operations
          </p>
          <h1 className="mt-2 text-4xl font-semibold text-neutral-950">
            Admin dashboard
          </h1>
        </div>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div key={card.label} className="border border-neutral-200 p-5">
              <p className="text-sm text-neutral-600">{card.label}</p>
              <p className="mt-3 text-3xl font-semibold text-neutral-950">
                {card.value}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <h2 className="text-xl font-semibold text-neutral-950">
              Recent orders
            </h2>
            <div className="mt-4 overflow-x-auto border border-neutral-200">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-neutral-50 text-neutral-600">
                  <tr>
                    <th className="px-4 py-3 font-medium">Order</th>
                    <th className="px-4 py-3 font-medium">Customer</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium">Items</th>
                    <th className="px-4 py-3 font-medium">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-4 py-3 font-mono text-xs">{order.id}</td>
                      <td className="px-4 py-3">{order.email ?? "Guest"}</td>
                      <td className="px-4 py-3 capitalize">{order.status}</td>
                      <td className="px-4 py-3">
                        {order.items.reduce((total, item) => total + item.quantity, 0)}
                      </td>
                      <td className="px-4 py-3">
                        {formatMoney(order.totalCents, order.currency)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside>
            <h2 className="text-xl font-semibold text-neutral-950">
              Low stock products
            </h2>
            <div className="mt-4 divide-y divide-neutral-200 border border-neutral-200">
              {lowStockProducts.length > 0 ? (
                lowStockProducts.map((product) => (
                  <div key={product.id} className="flex justify-between gap-4 p-4">
                    <div>
                      <p className="font-medium text-neutral-950">{product.name}</p>
                      <p className="text-sm capitalize text-neutral-600">
                        {product.category}
                      </p>
                    </div>
                    <p className="text-sm font-semibold">{product.stock}</p>
                  </div>
                ))
              ) : (
                <p className="p-4 text-sm text-neutral-600">
                  No low-stock products.
                </p>
              )}
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}
