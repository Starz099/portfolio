import Description from "@/components/Description/description";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Socials from "@/components/Socials/Socials";
import Container from "@/components/ui/Container";
import Github from "@/components/GithubContribution/Github";

export default function Home() {
  return (
    <Container className="min-h-screen px-4 py-12">
      <div className="space-y-8">
        <Hero />
        <Description />
        <Socials />
        <Projects />
        <Skills />
        <Github />
      </div>
    </Container>
  );
}
