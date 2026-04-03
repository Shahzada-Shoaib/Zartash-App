import type { Metadata } from "next";
import { Geist_Mono, Jost, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zartash — Luxury Fashion",
  description: "Discover curated collections in apparel, jewellery, and bridal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-white text-neutral-900"
        suppressHydrationWarning
      >
        <Header />
        <main className="flex w-full min-w-0 flex-col bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
