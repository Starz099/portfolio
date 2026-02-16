import TextReveal from "../ui/TextReveal";

const Hero = () => {
  return (
    <div className="px-4">
      <div className="space-y-2">
        <div className="text-muted-foreground text-4xl font-semibold tracking-tight md:text-5xl">
          {"Hi, I'm "}
          <span className="from-foreground to-foreground/70 bg-linear-to-r bg-clip-text text-transparent">
            Mayank
          </span>
        </div>
        <TextReveal
          className="text-muted-foreground text-2xl font-medium md:text-3xl"
          delay={300}
        >
          A Software Engineer
        </TextReveal>
      </div>
    </div>
  );
};

export default Hero;
