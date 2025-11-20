import Link from "next/link";
import Github from "../svgs/Github";
import X from "../svgs/X";
import LinkedIn from "../svgs/LinkedIn";
import Email from "../svgs/Email";

const Socials = () => {
  return (
    <div className="flex gap-2 px-4">
      <Link
        href="https://github.com/Starz099"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transform transition-colors duration-200 hover:scale-110"
      >
        <Github className="" />
      </Link>
      <Link
        href="https://x.com/mayank0166"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transform transition-colors duration-200 hover:scale-110"
      >
        <X className="" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/mayank-23643b328/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transform transition-colors duration-200 hover:scale-110"
      >
        <LinkedIn className="" />
      </Link>
      <Link
        href="mailto:mayankbh064@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground transform transition-colors duration-200 hover:scale-110"
      >
        <Email className="" />
      </Link>
    </div>
  );
};

export default Socials;
