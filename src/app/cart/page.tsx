import Navbar from "@/components/Navbar";
import CartClient from "@/components/CartClient";

export default function CartPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <CartClient />
      </main>
    </>
  );
}
