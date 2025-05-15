import type { Metadata } from 'next';
import './globals.css';
import { ReactElement, ReactNode } from 'react';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

export const metadata: Metadata = {
  title: 'Blueprint Solutions',
  description: 'Testing Assignment',
};

interface RootLayoutProps {
  children: Readonly<ReactNode>;
}

/**
 * Root layout of the main page
 *
 * @param {children}
 * @returns {ReactElement}
 */
export default function RootLayout({
  children
}: RootLayoutProps): ReactElement {
  return (
    <html lang='en'>
      <body className='bg-background text-foreground flex h-full min-h-screen w-full flex-1 flex-col items-center justify-start overflow-x-hidden antialiased'>
        <TooltipProvider delayDuration={0}>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
