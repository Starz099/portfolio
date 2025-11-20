import Link from "next/link";

const ContactCTA = () => {
  return (
    <Link
      href="/contact"
      className="bg-primary text-primary-foreground hover:bg-primary/90 group relative inline-flex h-9 items-center gap-2 overflow-hidden rounded-lg px-4 text-sm font-medium shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
    >
      <svg
        className="h-4 w-4 transition-transform group-hover:rotate-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
      <span>Get in touch</span>
      <svg
        className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  );
};

export default ContactCTA;
