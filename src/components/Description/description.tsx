import CodedTodayBadge from "./code-time";
import ContactCTA from "./contact-cta";
import ResumeButton from "./resume-button";
import Socials from "../Socials/Socials";

const Description = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <CodedTodayBadge />
      <p className="font-hanken text-muted-foreground max-w-2xl text-lg leading-relaxed">
        I build and ship reliable web applications, owning the entire execution
        from concept to production.
        <br />
        <u className="underline underline-offset-2">Building</u> fast,{" "}
        <u className="underline underline-offset-2">Failing</u> fast,{" "}
        <u className="underline underline-offset-2">Learning</u> faster.
      </p>
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-3">
          <ResumeButton />
          <ContactCTA />
        </div>
        <Socials />
      </div>
    </div>
  );
};

export default Description;
