import Header from "@/components/Header";

export default function ShippingPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-dark dark:text-gold-light">Policies</span>
          <h1 className="text-4xl font-serif font-bold uppercase tracking-tight text-neutral-950 dark:text-neutral-50 md:text-5xl">
            Shipping & Returns
          </h1>
          <div className="h-[1px] w-20 bg-gold my-4" />
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-12">
          <section className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-50">Global Shipping</h2>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              PRATIKSHYA NEPAL offers complimentary white-glove shipping on all orders over $500. 
              Orders are dispatched from our Kathmandu atelier via express courier (DHL/FedEx).
            </p>
            <table className="w-full text-left text-xs tracking-widest text-neutral-500 dark:text-neutral-400">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800">
                  <th className="py-4">REGION</th>
                  <th className="py-4">TIMELINE</th>
                  <th className="py-4">COST</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-900">
                <tr>
                  <td className="py-4">North America</td>
                  <td className="py-4">7-10 Days</td>
                  <td className="py-4">$35 (Free over $500)</td>
                </tr>
                <tr>
                  <td className="py-4">Europe</td>
                  <td className="py-4">5-8 Days</td>
                  <td className="py-4">$30 (Free over $500)</td>
                </tr>
                <tr>
                  <td className="py-4">Asia Pacific</td>
                  <td className="py-4">4-7 Days</td>
                  <td className="py-4">$25 (Free over $500)</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="quality" className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-50">Returns & Exchanges</h2>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              As each piece is handcrafted to order, we accept returns within 14 days of delivery for 
              store credit or exchange only. Items must be in their original, unworn condition with 
              all heritage tags intact.
            </p>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              Custom-made or bespoke orders are final sale and cannot be returned or exchanged. 
              If you discover a manufacturing defect, please contact our concierge immediately for a priority resolution.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-50">Duties & Taxes</h2>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              International orders may be subject to local import duties and taxes, which are the 
              responsibility of the recipient. For certain regions, we offer a "Duties Paid" 
              checkout option.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
