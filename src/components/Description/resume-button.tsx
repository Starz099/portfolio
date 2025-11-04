import Link from "next/link";

const ResumeButton = () => {
  return (
    <div className="px-3 h-8 flex items-center border border-accent text-accent-foreground rounded text-sm">
      <Link href="/resume" className="">
        View Resume
      </Link>
    </div>
  );
};

export default ResumeButton;
