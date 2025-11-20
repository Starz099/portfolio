import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";
import ContactForm from "@/components/ContactForm/ContactForm";

const page = () => {
  return (
    <Container className="px-8 py-16">
      <div className="space-y-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Get in Touch
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Have a project in mind or just want to chat? Feel free to reach out.
            I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <Separator />

        <div className="py-4 text-left">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
};

export default page;
