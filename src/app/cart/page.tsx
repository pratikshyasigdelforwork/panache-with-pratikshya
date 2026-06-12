import Header from "@/components/Header";
import CartClient from "@/components/CartClient";

export default function CartPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <CartClient />
      </main>
    </>
  );
}
