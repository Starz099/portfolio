import Description from "@/components/Description/description";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import Socials from "@/components/Socials/Socials";
import Container from "@/components/ui/Container";
import Github from "@/components/GithubContribution/Github";
import Quote from "@/components/Quote/Quote";

export default function Home() {
  return (
    <Container className="min-h-screen px-4 py-16">
      <Hero />
      <Description />
      <Socials />
      <Projects />
      <Skills />
      <Github />
      <Quote
        quote="When I believe in something, I’m like a dog with a bone."
        author="Melissa McCarthy"
      />
    </Container>
  );
}
