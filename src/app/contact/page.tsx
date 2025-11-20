import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";

const page = () => {
  return (
    <Container className="px-8 py-16">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Contact
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          Get in touch with me. I will get back to you as soon as possible.
        </p>
        <Separator />

        <div className="px-4 text-center text-2xl font-medium"></div>
      </div>
    </Container>
  );
};

export default page;
