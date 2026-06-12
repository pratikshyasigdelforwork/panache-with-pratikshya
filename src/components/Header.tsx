"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X, Heart, User, Info, Gift, HelpCircle, Mail, ArrowLeftRight, Ruler, WashingMachine, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import CartCount from "@/components/CartCount";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/lib/cart-store";

const menuSections = [
  {
    title: "Shop",
    links: [
      { name: "All Products", href: "/shop", icon: Gift },
      { name: "Curated Sets", href: "/sets", icon: Gift },
      { name: "Wishlist", href: "/wishlist", icon: Heart },
    ],
  },
  {
    title: "Account",
    links: [
      { name: "My Account", href: "/account", icon: User },
    ],
  },
  {
    title: "Information",
    links: [
      { name: "About Us", href: "/about", icon: Info },
      { name: "Shipping & Returns", href: "/shipping", icon: ArrowLeftRight },
      { name: "Size Guide", href: "/size-guide", icon: Ruler },
      { name: "Care Instructions", href: "/care-instructions", icon: WashingMachine },
      { name: "Contact", href: "/contact", icon: Mail },
      { name: "FAQ", href: "/faq", icon: HelpCircle },
      { name: "Terms of Service", href: "/returns", icon: MapPin },
    ],
  },
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
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        isScrolled 
          ? "bg-white/90 backdrop-blur-xl dark:bg-neutral-950/90 border-b border-neutral-200 dark:border-neutral-800 h-16" 
          : "bg-transparent h-20"
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Hamburger Menu */}
        <button 
          className="md:hidden p-2 text-neutral-700 dark:text-neutral-300 hover:text-gold-dark dark:hover:text-gold-light transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {menuSections.map((section) => (
            <div key={section.title} className="group relative py-4">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600 cursor-default dark:text-neutral-400">
                {section.title}
              </span>
              <div className="absolute left-0 top-full hidden w-48 bg-white p-4 shadow-xl group-hover:block dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
                <div className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      className="text-[9px] uppercase tracking-widest text-neutral-500 hover:text-gold-dark dark:hover:text-gold-light transition flex items-center gap-2"
                    >
                      <link.icon className="h-3 w-3" />
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col items-center text-center absolute left-1/2 -translate-x-1/2"
        >
          <span className="text-xl font-serif font-bold uppercase tracking-[0.3em] text-neutral-950 dark:text-neutral-50 md:text-2xl">
            PRATIKSHYA
          </span>
          <span className="text-[8px] font-sans uppercase tracking-[0.5em] text-gold-dark dark:text-gold-light">
            NEPAL
          </span>
        </Link>

        {/* Actions - only cart + theme toggle */}
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
        <div className="fixed inset-0 top-16 z-50 bg-white dark:bg-neutral-950 md:hidden overflow-y-auto">
          <div className="p-6 space-y-10">
            {menuSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-dark dark:text-gold-light mb-4">
                  {section.title}
                </h3>
                <div className="flex flex-col gap-4">
                  {section.links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="flex items-center gap-4 text-sm font-medium uppercase tracking-widest text-neutral-900 dark:text-neutral-50 hover:text-gold-dark dark:hover:text-gold-light transition"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <link.icon className="h-4 w-4 text-neutral-400" />
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
