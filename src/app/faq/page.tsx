"use client";

import Header from "@/components/Header";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    category: "Heritage & Craftsmanship",
    questions: [
      {
        q: "What makes PRATIKSHYA NEPAL products authentic?",
        a: "Every product is crafted in our Kathmandu atelier using hereditary techniques passed down through generations. We source our Pashmina from the upper Himalayas and our Dhaka from artisan cooperatives in Eastern Nepal, ensuring 100% authenticity and the highest quality standards."
      },
      {
        q: "Do you offer bespoke or custom orders?",
        a: "Yes, we specialize in bespoke heritage pieces. Whether it is a custom-colored Pashmina shawl or a tailored Dhaka blazer, our master tailors can work with you to create a unique piece. Please contact our concierge to schedule a consultation."
      }
    ]
  },
  {
    category: "Shipping & Delivery",
    questions: [
      {
        q: "Where do you ship from?",
        a: "All orders are hand-packaged and shipped directly from our heritage atelier in Kathmandu, Nepal. We use premium global couriers to ensure safe and timely delivery."
      },
      {
        q: "How long will my order take to arrive?",
        a: "Ready-to-ship items typically arrive within 7-10 business days globally. Custom or bespoke orders may take 4-6 weeks depending on the complexity of the craft."
      }
    ]
  },
  {
    category: "Payments & Security",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major international credit cards via Stripe. For our customers in Nepal, we also support eSewa, Khalti, and Fonepay."
      }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-dark dark:text-gold-light">Assistance</span>
          <h1 className="text-4xl font-serif font-bold uppercase tracking-tight text-neutral-950 dark:text-neutral-50 md:text-5xl">
            Frequent Inquiries
          </h1>
          <div className="h-[1px] w-20 bg-gold my-4" />
        </div>

        <div className="space-y-12">
          {faqs.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-6">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-dark">{group.category}</h2>
              <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
                {group.questions.map((faq, faqIdx) => {
                  const id = `${groupIdx}-${faqIdx}`;
                  const isOpen = openIndex === id;
                  return (
                    <div key={id} className="py-6">
                      <button
                        onClick={() => toggle(id)}
                        className="flex w-full items-center justify-between text-left"
                      >
                        <span className="text-sm font-medium uppercase tracking-widest text-neutral-900 dark:text-neutral-50">
                          {faq.q}
                        </span>
                        {isOpen ? <Minus className="h-4 w-4 text-gold" /> : <Plus className="h-4 w-4 text-gold" />}
                      </button>
                      <div className={cn(
                        "mt-4 overflow-hidden transition-all duration-300",
                        isOpen ? "max-h-96" : "max-h-0"
                      )}>
                        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
