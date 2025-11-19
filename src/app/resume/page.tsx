import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";

export default function ResumePage() {
  return (
    <Container className="py-4">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Resume
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            My resume.
          </p>
        </div>
        <Separator />
        <div className="mx-auto max-w-2xl">
          <iframe
            src="https://drive.google.com/file/d/1blE-JbpW1KUtdR7gj2TjfyB44YGtzkwQ/preview"
            className="min-h-screen w-full"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
