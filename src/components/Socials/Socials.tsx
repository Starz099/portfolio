import Link from "next/link";
import Github from "../svgs/Github";
import X from "../svgs/X";
import LinkedIn from "../svgs/LinkedIn";
import Email from "../svgs/Email";

const Socials = () => {
  return (
    <div className="text-muted-foreground my-4 flex gap-1 px-4">
      <Link
        href="https://github.com/Starz099"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="" />
      </Link>
      <Link
        href="https://x.com/mayank0166"
        target="_blank"
        rel="noopener noreferrer"
      >
        <X className="" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/mayank-23643b328/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedIn className="" />
      </Link>
      <Link
        href="mailto:mayankbh064@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Email className="" />
      </Link>
    </div>
  );
};

export default Socials;
