import Header from "@/components/Header";

export default function ReturnsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-dark dark:text-gold-light">Heritage Guarantee</span>
          <h1 className="text-4xl font-serif font-bold uppercase tracking-tight text-neutral-950 dark:text-neutral-50 md:text-5xl">
            Return Service
          </h1>
          <div className="h-[1px] w-20 bg-gold my-4" />
          <p className="max-w-md text-sm text-neutral-600 dark:text-neutral-400">
            To initiate a return or exchange for your heritage piece, 
            please enter your order details below.
          </p>
        </div>

        <div className="bg-neutral-50 p-10 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
          <form className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Order Number</label>
                <input 
                  type="text" 
                  placeholder="e.g. ORD-12345"
                  className="w-full border-b border-neutral-300 bg-transparent py-2 text-sm outline-none focus:border-gold dark:border-neutral-700" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Email Address</label>
                <input 
                  type="email" 
                  placeholder="The email used for the purchase"
                  className="w-full border-b border-neutral-300 bg-transparent py-2 text-sm outline-none focus:border-gold dark:border-neutral-700" 
                />
              </div>
            </div>
            
            <button className="h-14 w-full bg-neutral-950 text-[10px] font-bold uppercase tracking-widest text-white transition hover:bg-gold-dark dark:bg-gold dark:text-neutral-950">
              Find Order
            </button>
            
            <p className="text-center text-[10px] text-neutral-400 tracking-wider">
              Please note: Bespoke and custom-made items are not eligible for return. 
              Refer to our <a href="/shipping" className="text-gold underline">Return Policy</a> for more details.
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
