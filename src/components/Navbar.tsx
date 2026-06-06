import Link from "next/link";
import { Search, User, ShoppingBag } from "lucide-react";
import CartCount from "@/components/CartCount";

const navigationLinks = [
  { name: "Shop", href: "/shop" },
  { name: "Jackets", href: "/shop?category=jackets" },
  { name: "Shoes", href: "/shop?category=shoes" },
  { name: "Watches", href: "/shop?category=watches" },
  { name: "Bags", href: "/shop?category=bags" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-2xl font-serif font-medium uppercase tracking-[0.05em] text-neutral-950"
        >
          ASOS
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 transition hover:text-neutral-950"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 text-neutral-700">
          <Link
            href="/shop"
            className="grid h-10 w-10 place-items-center rounded-md transition hover:bg-neutral-100 hover:text-neutral-950"
            aria-label="Search products"
          >
            <Search className="h-5 w-5" />
          </Link>
          <Link
            href="/account"
            className="grid h-10 w-10 place-items-center rounded-md transition hover:bg-neutral-100 hover:text-neutral-950"
            aria-label="Account"
          >
            <User className="h-5 w-5" />
          </Link>
          <Link
            href="/cart"
            className="relative grid h-10 w-10 place-items-center rounded-md transition hover:bg-neutral-100 hover:text-neutral-950"
            aria-label="Shopping bag"
          >
            <ShoppingBag className="h-5 w-5" />
            <CartCount />
          </Link>
        </div>
      </div>
    </header>
  );
}
