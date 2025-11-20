import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";
import ContactForm from "@/components/ContactForm/ContactForm";

const page = () => {
  return (
    <Container className="px-4 py-16 sm:px-6 md:px-8">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Get in Touch
          </h1>
          <p className="text-muted-foreground mx-auto mt-2 max-w-2xl text-base sm:text-lg">
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
