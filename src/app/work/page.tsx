import TextType from "@/components/TextType";
import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";

const page = () => {
  return (
    <Container className="px-8 py-16">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Projects
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          My projects and work across different technologies and domains.
        </p>
        <Separator />

        <div className="px-4 text-center text-2xl font-medium">
          <TextType
            text={[
              `I build cool things.
        You could be the first person I build them for.`,
            ]}
            typingSpeed={50}
            pauseDuration={1500}
            showCursor={false}
            cursorCharacter="|"
          />
        </div>
      </div>
    </Container>
  );
};

export default page;
