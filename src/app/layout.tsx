import type { Metadata } from "next"; // Import Metadata type
import "./globals.css"; // Assuming this imports your global styles

export const metadata: Metadata = {
  title: "Next.js E-commerce Store",
  description: "A modern e-commerce store built with Next.js, Prisma, and Stripe.",
  // You can add more metadata here, e.g., openGraph, twitter, etc.
  // openGraph: {
  //   title: "Next.js E-commerce Store",
  //   description: "A modern e-commerce store built with Next.js, Prisma, and Stripe.",
  //   url: "https://your-store-url.com",
  //   siteName: "Next.js E-commerce Store",
  //   images: [
  //     {
  //       url: "https://your-store-url.com/og-image.jpg", // Replace with your actual OG image
  //       width: 1200,
  //       height: 630,
  //       alt: "Next.js E-commerce Store",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Next.js E-commerce Store",
  //   description: "A modern e-commerce store built with Next.js, Prisma, and Stripe.",
  //   creator: "@yourtwitterhandle",
  //   images: ["https://your-store-url.com/twitter-image.jpg"], // Replace with your actual Twitter image
  // },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
