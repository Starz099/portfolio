import CodedTodayBadge from "./code-time";
import ContactCTA from "./contact-cta";
import ResumeButton from "./resume-button";

const Description = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <CodedTodayBadge />
      <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
        I build and ship reliable web applications, owning the entire execution
        from concept to production.
        <br />
        <u className="underline underline-offset-2">Building</u> fast,{" "}
        <u className="underline underline-offset-2">Failing</u> fast,{" "}
        <u className="underline underline-offset-2">Learning</u> faster.
      </p>
      <div className="flex gap-3">
        <ResumeButton />
        <ContactCTA />
      </div>
    </div>
  );
};

export default Description;
