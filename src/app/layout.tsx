import { ThemeProvider } from '@/context/ThemeProvider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import { ThemeToggle } from '@/components/ThemeToggle';
import NavMenu from '@/components/NavigationMenu/NavMenu';

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
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <nav>
            <NavMenu />
          </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
