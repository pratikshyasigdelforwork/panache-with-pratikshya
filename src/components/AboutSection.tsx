import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="space-y-8">
          <span className="text-[10px] uppercase tracking-[0.5em] text-gold">Established 1952</span>
          <h2 className="text-4xl font-serif font-bold uppercase tracking-tight text-neutral-950 dark:text-neutral-50 md:text-5xl">
            A Legacy of <br />Nepalese Mastery
          </h2>
          <p className="text-sm leading-relaxed tracking-wide text-neutral-600 dark:text-neutral-400">
            For over seven decades, PRATIKSHYA NEPAL has stood as a guardian of 
            authentic heritage craftsmanship. Our Kathmandu atelier brings together 
            master weavers, tailors, and artisans to create pieces that transcended 
            trends and celebrate the timeless soul of Nepal.
          </p>
          <div className="pt-4">
            <Link 
              href="/about"
              className="text-[10px] font-bold uppercase tracking-[0.3em] border-b border-gold-dark pb-1 text-gold-dark hover:text-gold transition"
            >
              Discover the Atelier
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1590736704728-f4730bb3c3af?w=1000&q=80"
            alt="Heritage Weaving"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
