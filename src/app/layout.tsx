import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], weight: ["300", "400", "600"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Panache with Pratikshya | Luxury Fashion",
  description: "Curated designer fashion and lifestyle.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased bg-neutral-50 text-neutral-900 selection:bg-neutral-900 selection:text-white">
        {children}
      </body>
    </html>
  );
}
