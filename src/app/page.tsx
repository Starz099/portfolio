import Description from "@/components/Description/description";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Socials from "@/components/Socials/Socials";
import Container from "@/components/ui/Container";
import Github from "@/components/GithubContribution/Github";
import AnimatedSection from "@/components/ui/AnimatedSection";
// import SpotifyNowPlaying from "@/components/Spotify/SpotifyNowPlaying";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mayank",
  description:
    "Software engineer open to work. I build and ship reliable web apps end-to-end from concept to production. Building fast, failing fast, learning faster.",
  robots: {
    index: true,
    follow: true,
    "max-snippet": 160,
  },
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

export default function Home() {
  return (
    <Container className="min-h-screen px-4 py-12">
      <div className="space-y-8">
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <Description />
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <Socials />
        </AnimatedSection>
        {/* <AnimatedSection delay={150}>
          <SpotifyNowPlaying />
        </AnimatedSection> */}
        <AnimatedSection delay={100}>
          <Projects />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <Skills />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <Github />
        </AnimatedSection>
      </div>
    </Container>
  );
}
