import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const page = () => {
  return (
    <Container className="px-4 py-16 sm:px-6 md:px-8">
      <div className="space-y-8 text-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Work Experience
          </h1>
          <p className="text-muted-foreground mx-auto mt-2 max-w-2xl text-base sm:text-lg">
            My work experiences across different companies and roles.
          </p>
        </div>
        <Separator />

        <div className="px-4 text-center text-2xl font-medium whitespace-pre-line">
          <TextGenerateEffect
            words={
              "I build cool things.\nYou could be the first person I build them for."
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default page;
