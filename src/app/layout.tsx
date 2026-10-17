import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cast Template — Component Showcase',
  description: 'Seven premium React Bits components customized with real images and logos.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
