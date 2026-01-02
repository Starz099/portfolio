import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ReactLenis from "lenis/react";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";
import PageTransition from "@/components/ui/PageTransition";
import BoomBotOverlayGate from "@/components/BoomBotOverlayGate";
import { BoomBotProvider } from "@/components/boombot-provider";
export const metadata: Metadata = {
  title: "Mayank",
  description: "Learning. Building. Sharing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <Analytics />
        <SpeedInsights />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BoomBotProvider>
            <ReactLenis root className="">
              <BoomBotOverlayGate
                modelPath="/boombot.glb"
                depth={80}
                speed={20}
                showFloor={false}
              />
              <div className="background-gradient"></div>
              <Navbar />
              <PageTransition variant="blur-fade">{children}</PageTransition>
              <Footer />
            </ReactLenis>
          </BoomBotProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
