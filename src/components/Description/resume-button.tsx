import Link from "next/link";

const ResumeButton = () => {
  return (
    <div className="border-accent text-accent-foreground flex h-8 items-center rounded border px-3 text-sm">
      <Link href="/resume" className="">
        View Resume
      </Link>
    </div>
  );
};

export default ResumeButton;
