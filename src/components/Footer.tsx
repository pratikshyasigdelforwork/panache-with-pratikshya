"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUp } from "lucide-react";

const footerLinks = [
  {
    title: "Collections",
    links: [
      { name: "Pashmina Silks", href: "/shop?category=pashmina" },
      { name: "Dhaka Weaves", href: "/shop?category=dhaka" },
      { name: "Muga Gold", href: "/shop?category=muga" },
      { name: "Limited Edition", href: "/shop?category=limited" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Quality Guarantee", href: "/shipping#quality" },
      { name: "Shipping & Returns", href: "/shipping" },
      { name: "Size Guide", href: "/size-guide" },
      { name: "Care Instructions", href: "/care-instructions" },
    ],
  },
  {
    title: "Maison",
    links: [
      { name: "About Heritage", href: "/about" },
      { name: "Atelier 1952", href: "/about#atelier" },
      { name: "Artisan Stories", href: "/about#artisans" },
      { name: "Sustainability", href: "/about#sustainability" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-neutral-200 bg-white pt-20 dark:border-neutral-800 dark:bg-neutral-950">
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 grid h-10 w-10 place-items-center rounded-full border border-neutral-200 bg-white text-neutral-400 shadow-md transition-all hover:-translate-y-1 hover:border-gold-dark hover:text-gold-dark dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-gold-light"
        aria-label="Back to top"
      >
        <ArrowUp className="h-4 w-4" />
      </button>

      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col">
              <span className="text-xl font-serif font-bold uppercase tracking-[0.3em] text-neutral-950 dark:text-neutral-50">
                PRATIKSHYA
              </span>
              <span className="text-[8px] font-sans uppercase tracking-[0.5em] text-gold-dark dark:text-gold-light">
                NEPAL
              </span>
            </Link>
            <p className="max-w-xs text-xs leading-relaxed tracking-wider text-neutral-500 dark:text-neutral-400">
              Preserving the timeless heritage of Nepalese craftsmanship through curated luxury fashion.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 transition hover:text-gold-dark dark:hover:text-gold-light" aria-label="Instagram">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 transition hover:text-gold-dark dark:hover:text-gold-light" aria-label="Facebook">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 transition hover:text-gold-dark dark:hover:text-gold-light" aria-label="Pinterest">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.628 0 12-5.372 12-12S18.628 0 12 0z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 transition hover:text-gold-dark dark:hover:text-gold-light" aria-label="YouTube">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-6">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-950 dark:text-neutral-50">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="relative text-[10px] uppercase tracking-widest text-neutral-500 transition hover:text-gold-dark dark:text-neutral-400 dark:hover:text-gold-light underline-link"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter & Bottom */}
        <div className="mt-20 border-t border-neutral-100 pt-12 dark:border-neutral-900 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-md">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-950 dark:text-neutral-50">
              Join the Heritage Circle
            </h3>
            <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
              Receive exclusive access to new collection launches and artisan stories.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL ADDRESS"
                required
                className="h-10 flex-1 border border-neutral-200 bg-transparent px-4 text-[10px] tracking-widest outline-none transition-colors focus:border-gold-dark dark:border-neutral-800 dark:focus:border-gold-light"
              />
              <button
                type="submit"
                className="h-10 bg-neutral-950 px-6 text-[10px] font-bold uppercase tracking-widest text-white transition hover:bg-gold-dark dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-gold"
              >
                {subscribed ? "Subscribed ✓" : "Subscribe"}
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-[9px] uppercase tracking-widest text-gold-dark dark:text-gold-light animate-fade-in">
                Thank you for joining the Heritage Circle.
              </p>
            )}
          </div>
          <div className="mt-8 flex flex-col items-start gap-6 lg:mt-0 lg:items-end">
            {/* Payment methods */}
            <div className="flex gap-3 text-neutral-300 dark:text-neutral-600">
              <svg className="h-6 w-10" viewBox="0 0 36 24" fill="currentColor"><rect width="36" height="24" rx="3" fill="currentColor" className="text-neutral-200 dark:text-neutral-800"/><text x="5" y="16" fontSize="8" fontWeight="bold" fill="currentColor" className="text-neutral-500">VISA</text></svg>
              <svg className="h-6 w-10" viewBox="0 0 36 24" fill="currentColor"><rect width="36" height="24" rx="3" fill="currentColor" className="text-neutral-200 dark:text-neutral-800"/><text x="2" y="16" fontSize="7" fontWeight="bold" fill="currentColor" className="text-neutral-500">MC</text></svg>
              <svg className="h-6 w-10" viewBox="0 0 36 24" fill="currentColor"><rect width="36" height="24" rx="3" fill="currentColor" className="text-neutral-200 dark:text-neutral-800"/><text x="3" y="16" fontSize="6" fontWeight="bold" fill="currentColor" className="text-neutral-500">AMEX</text></svg>
              <svg className="h-6 w-10" viewBox="0 0 36 24" fill="currentColor"><rect width="36" height="24" rx="3" fill="currentColor" className="text-neutral-200 dark:text-neutral-800"/><text x="2" y="16" fontSize="6" fontWeight="bold" fill="currentColor" className="text-neutral-500">PP</text></svg>
            </div>
            <div className="flex gap-6">
              <Link href="/shipping" className="text-[9px] uppercase tracking-[0.2em] text-neutral-400 transition hover:text-gold-dark dark:hover:text-gold-light">Privacy</Link>
              <Link href="/shipping" className="text-[9px] uppercase tracking-[0.2em] text-neutral-400 transition hover:text-gold-dark dark:hover:text-gold-light">Terms</Link>
              <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-400">
                © {new Date().getFullYear()} PRATIKSHYA NEPAL
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
