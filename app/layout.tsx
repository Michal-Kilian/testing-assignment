import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { Header } from '@/components/header/header';
import { Footer } from '@/components/footer/footer';
import { Toaster } from '@/components/ui/sonner';
import { DevControls } from '@/components/dev/dev-controls';
import { TooltipProvider } from '@/components/ui/tooltip';

export const metadata: Metadata = {
  title: 'Testing Assignment',
  description: 'Michal Kilian',
};

interface RootLayoutProps {
  children: Readonly<ReactNode>;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className='bg-background text-foreground flex h-full min-h-screen w-full flex-1 flex-col items-center justify-start antialiased'>
      <TooltipProvider delayDuration={0}>
        <Header />
        {children}
        <Footer />
        <Toaster />
        {process.env.NODE_ENV === "development" && (
          <DevControls />
        )}
      </TooltipProvider>
      </body>
    </html>
  );
}
