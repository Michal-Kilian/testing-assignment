import type { Metadata } from "next";
import "./globals.css";
import {ReactNode} from "react";
import {Header} from "@/components/header/header";
import {Footer} from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Testing Assignment",
  description: "Michal Kilian",
};

interface RootLayoutProps {
  children: Readonly<ReactNode>;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="antialiased w-full h-full min-h-screen flex flex-1 flex-col items-center justify-start bg-background text-foreground">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
