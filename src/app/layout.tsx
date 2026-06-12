import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import OrderChat from "@/components/OrderChat";
import CartDrawer from "@/components/CartDrawer";
import { ThemeProvider } from "@/components/ThemeProvider";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], weight: ["300", "400", "600"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "PRATIKSHYA NEPAL | Luxury Heritage Fashion",
  description: "Curated Nepalese designer fashion and heritage atelier.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-neutral-50 text-neutral-900 selection:bg-neutral-900 selection:text-white dark:bg-neutral-950 dark:text-neutral-50 dark:selection:bg-neutral-50 dark:selection:text-neutral-950">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
          <CartDrawer />
          <OrderChat />
        </ThemeProvider>
      </body>
    </html>
  );
}

