import SplitText from "@/components/SplitText";
import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";

const page = () => {
  return (
    <Container className="px-8 py-16">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Work Experience
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          My work experiences across different companies and roles.
        </p>
        <Separator />

        <div className="px-4 text-center text-2xl font-medium">
          <SplitText
            text={`I build cool things.`}
            className="text-center text-2xl font-semibold"
            delay={50}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <SplitText
            text={`You could be the first person I build them for.`}
            className="text-center text-2xl font-semibold"
            delay={50}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>
      </div>
    </Container>
  );
};

export default page;
