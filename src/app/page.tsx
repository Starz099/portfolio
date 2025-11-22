import Description from "@/components/Description/description";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Socials from "@/components/Socials/Socials";
import Container from "@/components/ui/Container";
import Github from "@/components/GithubContribution/Github";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SpotifyNowPlaying from "@/components/Spotify/SpotifyNowPlaying";

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
        <AnimatedSection delay={150}>
          <SpotifyNowPlaying />
        </AnimatedSection>
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
