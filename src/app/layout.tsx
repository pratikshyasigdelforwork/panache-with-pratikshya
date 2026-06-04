import './globals.css';
export const metadata = { title: 'ASOS KATHMANDU | Premium Storefront' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
