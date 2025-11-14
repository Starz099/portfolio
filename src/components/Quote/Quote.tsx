import Container from "../ui/Container";

const Quote = (props: { quote: string; author: string }) => {
  return (
    <div className="px-4">
      <Container className="mt-8 relative p-8 text-muted-foreground rounded-none">
        {/* Top-Left corner */}
        <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-none"></span>

        {/* Bottom-Right corner */}
        <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-none"></span>

        <blockquote className="border-l-4 border-accent-foreground pl-4 italic text-lg text-muted-foreground">
          “{props.quote}”
        </blockquote>
        <p className="mt-2 text-right font-semibold text-accent-foreground">
          - {props.author}
        </p>
      </Container>
    </div>
  );
};

export default Quote;
