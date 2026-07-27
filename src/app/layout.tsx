import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ReactLenis from "lenis/react";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";
import PageTransition from "@/components/ui/PageTransition";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mayank",
  description:
    "Software engineer open to work. I build and ship reliable web apps end-to-end from concept to production. Building fast, failing fast, learning faster.",
  openGraph: {
    title: "Mayank",
    description:
      "Software engineer open to work. I build and ship reliable web apps end-to-end from concept to production. Building fast, failing fast, learning faster.",
    url: "https://starzz.dev",
    siteName: "Mayank",
    images: [
      {
        url: "https://starzz.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Mayank portfolio cover image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank",
    description:
      "Software engineer open to work. I build and ship reliable web apps end-to-end from concept to production. Building fast, failing fast, learning faster.",
    images: ["https://starzz.dev/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${hankenGrotesk.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          <SpeedInsights />
          <ReactLenis root className="">
            <div className="background-gradient"></div>
            <Navbar />
            <PageTransition variant="blur-fade">{children}</PageTransition>
            <Footer />
            <div
              aria-hidden="true"
              className="bg-background/30 pointer-events-none fixed inset-x-0 bottom-0 h-20 mask-[linear-gradient(to_top,black,transparent)] backdrop-blur-md"
            ></div>
          </ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  );
}
