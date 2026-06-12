// import Link from "next/link";
import Header from "@/components/Header";

export default function AccountPage() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    memberSince: "January 2025",
  };

  const orders = [
    { id: "ORD-12345", date: "2025-05-15", total: "$120.00", status: "Delivered" },
    { id: "ORD-12346", date: "2025-06-01", total: "$99.00", status: "Processing" },
  ];

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-neutral-950 dark:text-neutral-50">My Account</h1>
        
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-neutral-200 p-6 shadow-sm dark:border-neutral-800">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Profile</h2>
            <div className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <p><span className="font-medium text-neutral-900 dark:text-neutral-100">Name:</span> {user.name}</p>
              <p><span className="font-medium text-neutral-900 dark:text-neutral-100">Email:</span> {user.email}</p>
              <p><span className="font-medium text-neutral-900 dark:text-neutral-100">Member:</span> {user.memberSince}</p>
            </div>
          </div>
          
          <div className="col-span-2 rounded-xl border border-neutral-200 p-6 shadow-sm dark:border-neutral-800">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Order History</h2>
            <div className="mt-4 overflow-hidden rounded-lg border border-neutral-100 dark:border-neutral-800">
              <table className="w-full text-left text-sm">
                <thead className="bg-neutral-50 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
                  <tr>
                    <th className="px-4 py-3">Order ID</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Total</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/50">
                      <td className="px-4 py-3 font-medium text-neutral-900 dark:text-neutral-100">{order.id}</td>
                      <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">{order.date}</td>
                      <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">{order.total}</td>
                      <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">{order.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
