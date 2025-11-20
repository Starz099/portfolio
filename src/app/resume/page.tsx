import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";

export default function ResumePage() {
  return (
    <Container className="px-4 py-16 sm:px-6 md:px-8">
      <div className="space-y-8 text-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Resume
          </h1>
          <p className="text-muted-foreground mx-auto mt-2 max-w-2xl text-base sm:text-lg">
            My resume.
          </p>
        </div>
        <Separator />
        <div className="mx-auto max-w-full sm:max-w-2xl lg:max-w-4xl">
          <iframe
            src="https://drive.google.com/file/d/1blE-JbpW1KUtdR7gj2TjfyB44YGtzkwQ/preview"
            className="min-h-screen w-full"
          ></iframe>
        </div>
      </div>
    </Container>
  );
}
