import Header from "@/components/Header";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-dark dark:text-gold-light">Concierge</span>
          <h1 className="text-4xl font-serif font-bold uppercase tracking-tight text-neutral-950 dark:text-neutral-50 md:text-5xl">
            Contact Us
          </h1>
          <div className="h-[1px] w-20 bg-gold my-4" />
          <p className="max-w-md text-sm text-neutral-600 dark:text-neutral-400">
            Our heritage specialists are available to assist with collection inquiries, 
            bespoke requests, and private atelier appointments.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-50">Atelier Inquiries</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                  <div className="flex h-10 w-10 items-center justify-center border border-gold/30">
                    <Mail className="h-4 w-4 text-gold" />
                  </div>
                  <span>concierge@pratikshyanepal.com</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                  <div className="flex h-10 w-10 items-center justify-center border border-gold/30">
                    <Phone className="h-4 w-4 text-gold" />
                  </div>
                  <span>+977 1 4XXXXXX (Kathmandu HQ)</span>
                </div>
                <div className="flex items-start gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                  <div className="flex h-10 w-10 items-center justify-center border border-gold/30 shrink-0">
                    <MapPin className="h-4 w-4 text-gold" />
                  </div>
                  <span>Pratikshya Heritage Atelier, <br />Boudha Road, Kathmandu, Nepal</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-50">Bespoke Appointments</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                To schedule a private viewing or discuss a custom commission, 
                please email bespoke@pratikshyanepal.com or use the form.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-50 p-8 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">First Name</label>
                  <input type="text" className="w-full border-b border-neutral-300 bg-transparent py-2 text-sm outline-none focus:border-gold dark:border-neutral-700" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Last Name</label>
                  <input type="text" className="w-full border-b border-neutral-300 bg-transparent py-2 text-sm outline-none focus:border-gold dark:border-neutral-700" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Email Address</label>
                <input type="email" className="w-full border-b border-neutral-300 bg-transparent py-2 text-sm outline-none focus:border-gold dark:border-neutral-700" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Subject</label>
                <select className="w-full border-b border-neutral-300 bg-transparent py-2 text-sm outline-none focus:border-gold dark:border-neutral-700">
                  <option>Collection Inquiry</option>
                  <option>Order Support</option>
                  <option>Bespoke Request</option>
                  <option>Press & Media</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Message</label>
                <textarea rows={4} className="w-full border-b border-neutral-300 bg-transparent py-2 text-sm outline-none focus:border-gold dark:border-neutral-700"></textarea>
              </div>
              <button className="h-12 w-full bg-neutral-950 text-[10px] font-bold uppercase tracking-widest text-white transition hover:bg-gold-dark dark:bg-gold dark:text-neutral-950">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
