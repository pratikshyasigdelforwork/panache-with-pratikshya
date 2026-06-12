import Header from "@/components/Header";

export default function SizeGuidePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-dark dark:text-gold-light">Assistance</span>
          <h1 className="text-4xl font-serif font-bold uppercase tracking-tight text-neutral-950 dark:text-neutral-50 md:text-5xl">
            Size Guide
          </h1>
          <div className="h-[1px] w-20 bg-gold my-4" />
          <p className="max-w-md text-sm text-neutral-600 dark:text-neutral-400">
            Our heritage garments are designed with timeless silhouettes. 
            Please refer to our conversion charts to find your perfect fit.
          </p>
        </div>

        <div className="space-y-16">
          {/* Footwear */}
          <section className="space-y-6">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-950 dark:text-neutral-50">Footwear Conversion</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs tracking-widest text-neutral-500 dark:text-neutral-400">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-800">
                    <th className="py-4">EU</th>
                    <th className="py-4">US</th>
                    <th className="py-4">UK</th>
                    <th className="py-4">CM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 dark:divide-neutral-900">
                  {[
                    { eu: 36, us: 6, uk: 3, cm: 23 },
                    { eu: 37, us: 7, uk: 4, cm: 23.5 },
                    { eu: 38, us: 8, uk: 5, cm: 24.5 },
                    { eu: 39, us: 9, uk: 6, cm: 25.5 },
                    { eu: 40, us: 10, uk: 7, cm: 26 },
                    { eu: 41, us: 11, uk: 8, cm: 27 },
                  ].map((size) => (
                    <tr key={size.eu}>
                      <td className="py-4">{size.eu}</td>
                      <td className="py-4">{size.us}</td>
                      <td className="py-4">{size.uk}</td>
                      <td className="py-4">{size.cm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Measuring Tips */}
          <section className="bg-neutral-50 p-8 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">Measuring for Perfection</h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-50">Footwear</h3>
                <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                  Measure the length of your foot from heel to the tip of your longest toe. 
                  Our heritage footwear often features artisanal construction that may feel 
                  snug initially but will mold to your foot over time.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-50">Garments</h3>
                <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                  For Pashmina shawls and Dhaka blazers, we recommend professional measurements. 
                  Our silhouettes are designed for a relaxed yet elegant drape.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
