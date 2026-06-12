import Link from "next/link";
import { Camera, MessageCircle, Mail, X } from "lucide-react";

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
  return (
    <footer className="border-t border-neutral-200 bg-white pt-20 dark:border-neutral-800 dark:bg-neutral-950">
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
              <Camera className="h-4 w-4 cursor-pointer text-neutral-400 hover:text-gold-dark transition" />
              <X className="h-4 w-4 cursor-pointer text-neutral-400 hover:text-gold-dark transition" />
              <MessageCircle className="h-4 w-4 cursor-pointer text-neutral-400 hover:text-gold-dark transition" />
              <Mail className="h-4 w-4 cursor-pointer text-neutral-400 hover:text-gold-dark transition" />
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
                      className="text-[10px] uppercase tracking-widest text-neutral-500 transition hover:text-gold-dark dark:text-neutral-400 dark:hover:text-gold-light"
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
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="h-10 flex-1 border border-neutral-200 bg-transparent px-4 text-[10px] tracking-widest outline-none focus:border-gold-dark dark:border-neutral-800 dark:focus:border-gold-light"
              />
              <button className="h-10 bg-neutral-950 px-6 text-[10px] font-bold uppercase tracking-widest text-white transition hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200">
                Subscribe
              </button>
            </form>
          </div>
          <div className="mt-12 lg:mt-0">
            <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-400">
              © 2026 PRATIKSHYA NEPAL. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
