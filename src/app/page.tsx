import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import AnimatedSection from "@/components/AnimatedSection";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    take: 4,
  });

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      <Header />

      {/* ── Hero ── */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=80"
          alt="Panache with Pratikshya"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105 animate-fade-in"
          style={{ animationDuration: "2s" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-24 sm:px-6 lg:px-8">
          <AnimatedSection type="fadeInUp">
            <div className="max-w-2xl text-white">
              <p className="text-[10px] uppercase tracking-[0.5em] text-gold animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
                Heritage Atelier 1952
              </p>
              <h1 className="mt-4 text-7xl font-serif font-bold uppercase leading-none tracking-tighter md:text-9xl">
                PRATIKSHYA
              </h1>
              <p className="mt-6 text-lg font-light tracking-wide text-white/80 md:text-xl">
                Authentic Nepalese heritage. Timeless elegance.
              </p>
              <div className="mt-10 flex gap-4">
                <Link
                  href="/shop"
                  className="group inline-flex h-14 items-center bg-gold px-10 text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-950 transition-all duration-300 hover:bg-white"
                >
                  <span>Enter the Atelier</span>
                  <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex h-14 items-center border border-white/30 px-10 text-[10px] font-bold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-white/10"
                >
                  Our Story
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-10 w-[1px] bg-white/40" />
        </div>
      </section>

      {/* ── Limited Masters ── */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <AnimatedSection type="fadeInUp">
          <div className="mb-16 flex flex-col items-center text-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-gold-dark dark:text-gold-light">New Collections</span>
            <h2 className="text-4xl font-serif font-bold uppercase tracking-tight text-neutral-950 dark:text-neutral-50 md:text-5xl">
              Limited Masters
            </h2>
            <div className="h-[1px] w-20 bg-gold my-4" />
            <p className="max-w-md text-sm leading-relaxed tracking-wide text-neutral-600 dark:text-neutral-400">
              Explore our latest heritage arrivals, each hand-crafted by master artisans in our Kathmandu atelier.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection stagger className="">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── Editorial / Craftsmanship ── */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=80"
          alt="Craftsmanship"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <AnimatedSection type="fadeInUp">
            <div className="max-w-lg">
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Artisanship</span>
              <h2 className="mt-4 text-4xl font-serif font-bold uppercase leading-tight tracking-tight text-white md:text-5xl">
                Handcrafted in the Himalayas
              </h2>
              <p className="mt-6 text-sm leading-relaxed tracking-wide text-white/70">
                Each piece is woven, embroidered, and finished by master artisans in our Kathmandu atelier — preserving centuries-old Nepalese traditions.
              </p>
              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gold transition-colors hover:text-white"
              >
                Discover Our Heritage
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Brand Promise Strip ── */}
      <section className="border-t border-neutral-100 bg-neutral-50 dark:border-neutral-900 dark:bg-neutral-950">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { title: "Authentic Heritage", desc: "Direct from Nepalese master artisans, preserving generational craft." },
            { title: "Ethically Made", desc: "Sustainable practices, fair wages, and eco-conscious materials." },
            { title: "Global Shipping", desc: "Complimentary shipping on all orders over $200 worldwide." },
          ].map((item, i) => (
            <AnimatedSection key={item.title} type="fadeInUp" delay={i * 0.15}>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="h-px w-12 bg-gold" />
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-950 dark:text-neutral-50">
                  {item.title}
                </h3>
                <p className="max-w-xs text-[10px] leading-relaxed tracking-wider text-neutral-500 dark:text-neutral-400">
                  {item.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
  );
}
