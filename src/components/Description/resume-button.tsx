import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link
      href="/resume"
      className="group border-border hover:border-foreground/20 bg-card hover:bg-accent relative inline-flex h-9 items-center gap-2 overflow-hidden rounded-lg border px-4 text-sm font-medium shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md"
    >
      <svg
        className="h-4 w-4 transition-transform group-hover:scale-110"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      <span>View Resume</span>
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

export default ResumeButton;
