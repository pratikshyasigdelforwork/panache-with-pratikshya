"use client";

import Link from "next/link";
import { Search, User, ShoppingBag, Heart, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import CartCount from "@/components/CartCount";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/lib/cart-store";

const navigationLinks = [
  { 
    name: "Collections", 
    href: "/shop",
    submenu: [
      { name: "Pashmina Silks", href: "/shop?category=pashmina" },
      { name: "Dhaka Weaves", href: "/shop?category=dhaka" },
      { name: "Muga Gold", href: "/shop?category=muga" },
      { name: "Mithila Art", href: "/shop?category=mithila" },
    ]
  },
  { name: "Heritage", href: "/shop?category=heritage" },
  { name: "Limited Edition", href: "/shop?category=limited" },
  { name: "Curated Sets", href: "/sets" },
  { name: "Maison", href: "/about" },
];

const menuPages = [
  { name: "Shop All", href: "/shop" },
  { name: "Curated Sets", href: "/sets" },
  { name: "Wishlist", href: "/wishlist" },
  { name: "My Account", href: "/account" },
  { name: "About Us", href: "/about" },
  { name: "Shipping & Returns", href: "/shipping" },
  { name: "Size Guide", href: "/size-guide" },
  { name: "Care Instructions", href: "/care-instructions" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openCart = useCartStore((state) => state.openCart);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled 
          ? "bg-white/80 backdrop-blur dark:bg-neutral-950/80 border-neutral-200 dark:border-neutral-800 h-16" 
          : "bg-transparent border-transparent h-20"
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-neutral-700 dark:text-neutral-300 hover:text-gold-dark dark:hover:text-gold-light transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col items-center text-center"
        >
          <span className="text-xl font-serif font-bold uppercase tracking-[0.3em] text-neutral-950 dark:text-neutral-50 md:text-2xl">
            PRATIKSHYA
          </span>
          <span className="text-[8px] font-sans uppercase tracking-[0.5em] text-gold-dark dark:text-gold-light">
            NEPAL
          </span>
        </Link>

        {/* Desktop Nav (hidden on mobile) */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <div key={link.name} className="group relative py-4">
              <Link
                href={link.href}
                className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600 transition hover:text-gold-dark dark:text-neutral-400 dark:hover:text-gold-light"
              >
                {link.name}
              </Link>
              {link.submenu && (
                <div className="absolute left-0 top-full hidden w-48 bg-white p-4 shadow-xl group-hover:block dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
                  <div className="flex flex-col gap-3">
                    {link.submenu.map((sub) => (
                      <Link 
                        key={sub.name} 
                        href={sub.href}
                        className="text-[9px] uppercase tracking-widest text-neutral-500 hover:text-gold-dark dark:hover:text-gold-light"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Actions - only Cart + Theme visible, rest in menu */}
        <div className="flex items-center gap-1 text-neutral-700 dark:text-neutral-300">
          <ThemeToggle />
          <button
            onClick={openCart}
            className="relative grid h-10 w-10 place-items-center transition hover:text-gold-dark dark:hover:text-gold-light"
            aria-label="Shopping bag"
          >
            <ShoppingBag className="h-5 w-5" />
            <CartCount />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-full h-screen bg-white p-6 dark:bg-neutral-950 md:hidden border-t dark:border-neutral-800 overflow-y-auto z-50">
          <nav className="flex flex-col gap-6">
            {navigationLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium uppercase tracking-widest text-neutral-900 dark:text-neutral-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="mt-4 flex flex-col gap-3 pl-4">
                    {link.submenu.map((sub) => (
                      <Link 
                        key={sub.name} 
                        href={sub.href}
                        className="text-xs text-neutral-500"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <hr className="border-neutral-200 dark:border-neutral-800" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-dark dark:text-gold-light">More</span>
            {menuPages.map((page) => (
              <Link
                key={page.name}
                href={page.href}
                className="text-sm font-medium uppercase tracking-widest text-neutral-900 dark:text-neutral-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {page.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
