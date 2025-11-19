import CodedTodayBadge from "./code-time";
import ContactCTA from "./contact-cta";
import ResumeButton from "./resume-button";

const Description = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <CodedTodayBadge />
      <div className="text-muted-foreground">
        I create clean, thoughtful web applications that merge design and
        performance, learning from every build and pushing my craft a little
        further each time.
      </div>
      <div className="flex gap-3">
        <ResumeButton />
        <ContactCTA />
      </div>
    </div>
  );
};

export default Description;
