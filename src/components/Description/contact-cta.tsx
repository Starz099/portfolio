import Link from "next/link";

const ContactCTA = () => {
  return (
    <div className="px-3 h-8 flex items-center text-accent bg-accent-foreground rounded text-sm">
      <Link href="/contact" className="">
        Get in touch
      </Link>
    </div>
  );
};

export default ContactCTA;
