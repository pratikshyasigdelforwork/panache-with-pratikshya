import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "ASOS Kathmandu",
    template: "%s | ASOS Kathmandu",
  },
  description:
    "A production-ready fashion ecommerce storefront with Prisma catalog and Stripe checkout.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
