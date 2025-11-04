import Description from "@/components/Description/description";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <Container className="min-h-screen py-16 px-4">
      
      <Hero />
      <Description />
      <Skills />
    </Container>
  );
}
