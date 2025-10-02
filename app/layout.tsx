import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Preloader from '@/components/Preloader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Atra Sports Science - Elevate Your Athletic Performance',
  description:
    'Professional sports science organization across South India. Expert coaching, performance analysis, and athletic development in Chennai, Bangalore, Coimbatore, and online.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
