import Link from "next/link";

const ContactCTA = () => {
  return (
    <div className="text-accent bg-accent-foreground flex h-8 items-center rounded px-3 text-sm">
      <Link href="/contact" className="">
        Get in touch
      </Link>
    </div>
  );
};

export default ContactCTA;
