import Container from "../ui/Container";

const Quote = (props: { quote: string; author: string }) => {
  return (
    <div className="px-4">
      <Container className="text-muted-foreground relative rounded-none p-8">
        {/* Top-Left corner */}
        <span className="absolute top-0 left-0 h-8 w-8 rounded-none border-t-2 border-l-2"></span>

        {/* Bottom-Right corner */}
        <span className="absolute right-0 bottom-0 h-8 w-8 rounded-none border-r-2 border-b-2"></span>

        <blockquote className="border-accent-foreground text-muted-foreground border-l-4 pl-4 text-lg italic">
          “{props.quote}”
        </blockquote>
        <p className="text-accent-foreground mt-2 text-right font-semibold">
          - {props.author}
        </p>
      </Container>
    </div>
  );
};

export default Quote;
