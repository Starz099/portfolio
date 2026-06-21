import Image from "next/image";
import TextReveal from "../ui/TextReveal";

const Hero = () => {
  return (
    <div className="px-4">
      <div className="relative -mt-20 mb-16">
        <div className="h-52 w-full overflow-hidden">
          <Image
            alt="hero banner"
            src="/images/banner.png"
            fill
            className="object-cover"
            priority
            objectPosition="center 62%"
          />
          <div className="absolute inset-0 flex items-start justify-center bg-black/15 px-4 pt-2 text-center dark:bg-black/25">
            <p className="text-lg font-medium text-white italic drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] md:text-2xl">
              I follow through, no matter what.
            </p>
          </div>
        </div>
        <div
          className="border-background bg-background ring-border/60 dark:ring-border/80 absolute -bottom-12 left-8 h-24 w-24 overflow-hidden border-4 shadow-md ring-1 shadow-black/20 md:h-28 md:w-28 dark:shadow-[0_10px_30px_hsl(var(--foreground)/0.28)]"
          style={{ borderRadius: "9999px" }}
        >
          <Image
            alt="profile avatar"
            src="/images/profile.png"
            width={112}
            height={112}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </div>
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
