import TextType from "@/components/TextType";
import Container from "@/components/ui/Container";

const page = () => {
  return (
    <Container className="min-h- py-16 px-4">
      <div className="px-4 text-2xl font-medium text-center">
        <TextType
          text={[
            `I build cool things.
        You could be the first person I build them for.`,
          ]}
          typingSpeed={100}
          pauseDuration={1500}
          showCursor={false}
          cursorCharacter="|"
        />
      </div>
    </Container>
  );
};

export default page;
