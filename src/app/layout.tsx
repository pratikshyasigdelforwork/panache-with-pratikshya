import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import OrderChat from "@/components/OrderChat";
import CartDrawer from "@/components/CartDrawer";
import DeviceTracker from "@/components/DeviceTracker";
import { ThemeProvider } from "@/components/ThemeProvider";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], weight: ["300", "400", "600"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "PRATIKSHYA NEPAL | Luxury Heritage Fashion",
  description: "Curated Nepalese designer fashion and heritage atelier. Handcrafted in the Himalayas since 1952.",
  openGraph: {
    title: "PRATIKSHYA NEPAL | Luxury Heritage Fashion",
    description: "Curated Nepalese designer fashion and heritage atelier. Handcrafted in the Himalayas since 1952.",
    type: "website",
    locale: "en_US",
    siteName: "PRATIKSHYA NEPAL",
  },
  twitter: {
    card: "summary_large_image",
    title: "PRATIKSHYA NEPAL | Luxury Heritage Fashion",
    description: "Curated Nepalese designer fashion and heritage atelier.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-neutral-50 text-neutral-900 selection:bg-neutral-900 selection:text-white dark:bg-neutral-950 dark:text-neutral-50 dark:selection:bg-neutral-50 dark:selection:text-neutral-950 transition-colors duration-500">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="flex flex-col min-h-screen">
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
          <CartDrawer />
          <OrderChat />
          <DeviceTracker />
        </ThemeProvider>
      </body>
    </html>
  );
}

