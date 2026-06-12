import Header from "@/components/Header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[70vh] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1590736704728-f4730bb3c3af?w=1600&q=80"
            alt="Nepalese Heritage"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center text-white">
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold">Since 1952</span>
            <h1 className="mt-6 text-5xl font-serif font-bold uppercase tracking-tight md:text-7xl">
              The Heritage Atelier
            </h1>
          </div>
        </section>

        {/* Story Section */}
        <section className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-gold-dark dark:text-gold-light">Our Origins</h2>
          <h3 className="mt-4 text-3xl font-serif font-bold uppercase tracking-tight text-neutral-950 dark:text-neutral-50 md:text-4xl">
            Preserving the Craft of Kathmandu
          </h3>
          <div className="mx-auto h-[1px] w-20 bg-gold my-8" />
          <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            PRATIKSHYA NEPAL began as a small family-owned atelier in the heart of Kathmandu. 
            For over seven decades, we have been dedicated to the preservation of traditional Nepalese 
            weaving and artisanal techniques. Each piece in our collection is a testament to the 
            generations of master craftsmen who have poured their soul into every thread of Pashmina and Dhaka.
          </p>
        </section>

        {/* Artisans Section */}
        <section className="bg-neutral-50 py-24 dark:bg-neutral-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div className="relative aspect-square overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1000&q=80"
                  alt="Master Artisan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-8">
                <h2 className="text-[10px] uppercase tracking-[0.3em] text-gold-dark dark:text-gold-light">The Artisans</h2>
                <h3 className="text-4xl font-serif font-bold uppercase tracking-tight text-neutral-950 dark:text-neutral-50">
                  A Legacy in Every Hand
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  We work exclusively with hereditary artisans who have inherited their craft through 
                  centuries-old family lineages. By providing a global platform for their mastery, 
                  we ensure that the rich tapestry of Nepalese heritage continues to thrive in the modern world.
                </p>
                <ul className="space-y-4 text-sm tracking-widest text-neutral-500 dark:text-neutral-400">
                  <li className="flex items-center gap-4">
                    <span className="h-[1px] w-8 bg-gold" />
                    AUTHENTIC PASHMINA FROM UPPER HIMALAYAS
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="h-[1px] w-8 bg-gold" />
                    HAND-LOOMED DHAKA FROM EASTERN NEPAL
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="h-[1px] w-8 bg-gold" />
                    VEGETABLE DYES & SUSTAINABLE PRACTICES
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center">
          <div className="border border-gold/30 p-16">
            <h2 className="text-[10px] uppercase tracking-[0.3em] text-gold-dark dark:text-gold-light">Our Philosophy</h2>
            <h3 className="mt-4 text-3xl font-serif font-bold uppercase tracking-tight text-neutral-950 dark:text-neutral-50 md:text-4xl">
              Conscious Luxury
            </h3>
            <p className="mx-auto mt-8 max-w-2xl text-neutral-600 dark:text-neutral-400">
              In an era of mass production, we stand for the slow, the deliberate, and the meaningful. 
              Our commitment to sustainability is reflected in our small-batch production and our 
              fair-trade partnerships with artisan cooperatives across Nepal.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
