import Header from "@/components/Header";

const materials = [
  {
    name: "Pure Pashmina",
    description: "Sourced from the soft undercoat of Chyangra goats in the high Himalayas.",
    care: [
      "Dry clean only for best preservation.",
      "If hand-washing, use lukewarm water and a very mild silk detergent.",
      "Never wring or twist; press between towels to remove excess water.",
      "Dry flat in shade, away from direct sunlight.",
      "Store in a breathable cotton bag with cedar wood to prevent moth damage."
    ]
  },
  {
    name: "Hand-loomed Dhaka",
    description: "Traditional Nepalese fabric woven on hand looms with intricate geometric patterns.",
    care: [
      "Spot clean with cold water and mild soap when possible.",
      "Gentle hand wash or dry clean.",
      "Iron on the reverse side using a cool setting to protect the embroidery.",
      "Avoid harsh chemicals or bleaching agents."
    ]
  },
  {
    name: "Muga Silk",
    description: "Naturally golden, highly durable silk known for its unique luster.",
    care: [
      "Dry clean recommended.",
      "The luster of Muga silk actually improves with every gentle wash.",
      "Hand wash with cool water and mild shampoo.",
      "Iron while slightly damp for a smooth, high-shine finish."
    ]
  }
];

export default function CareInstructionsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-dark dark:text-gold-light">Longevity</span>
          <h1 className="text-4xl font-serif font-bold uppercase tracking-tight text-neutral-950 dark:text-neutral-50 md:text-5xl">
            Care Instructions
          </h1>
          <div className="h-[1px] w-20 bg-gold my-4" />
          <p className="max-w-md text-sm text-neutral-600 dark:text-neutral-400">
            Our heritage pieces are designed to last for generations. 
            Proper care ensures their beauty and structural integrity remain timeless.
          </p>
        </div>

        <div className="space-y-20">
          {materials.map((material) => (
            <section key={material.name} className="grid gap-12 lg:grid-cols-[300px_1fr]">
              <div className="space-y-4">
                <h2 className="text-lg font-serif font-bold uppercase tracking-widest text-neutral-950 dark:text-neutral-50">
                  {material.name}
                </h2>
                <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-500 italic">
                  {material.description}
                </p>
              </div>
              <div className="bg-neutral-50 p-10 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800">
                <ul className="space-y-6">
                  {material.care.map((step, i) => (
                    <li key={i} className="flex items-start gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="mt-1.5 h-1 w-1 shrink-0 bg-gold" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
