// import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NavMenu from '@/components/NavigationMenu/NavMenu';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tender Management System',
  description: 'Tender Management System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <nav>
          <NavMenu />
        </nav>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
