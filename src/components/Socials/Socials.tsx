import Link from "next/link";
import Github from "../svgs/Github";
import Codeforces from "../svgs/Codeforces";
import X from "../svgs/X";
import LinkedIn from "../svgs/LinkedIn";
import Email from "../svgs/Email";
import Magnetic from "../ui/Magnetic";
import Discord from "../svgs/Discord";

interface SocialsProps {
  className?: string;
}

const Socials = ({ className = "" }: SocialsProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Magnetic>
        <Link
          href="https://github.com/Starz099"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transform transition-colors duration-200 hover:scale-110"
        >
          <Github className="" />
        </Link>
      </Magnetic>
      <Magnetic>
        <Link
          href="https://codeforces.com/profile/Starz099"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transform transition-colors duration-200 hover:scale-110"
        >
          <Codeforces className="" />
        </Link>
      </Magnetic>
      <Magnetic>
        <Link
          href="https://x.com/mayank0166"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transform transition-colors duration-200 hover:scale-110"
        >
          <X className="" />
        </Link>
      </Magnetic>
      <Magnetic>
        <Link
          href="https://www.linkedin.com/in/mayank016/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transform transition-colors duration-200 hover:scale-110"
        >
          <LinkedIn className="" />
        </Link>
      </Magnetic>
      <Magnetic>
        <Link
          href="https://discord.com/users/1226021151688626206"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transform transition-colors duration-200 hover:scale-110"
        >
          <Discord className="" />
        </Link>
      </Magnetic>
      <Magnetic>
        <Link
          href="mailto:mayankbh064@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transform transition-colors duration-200 hover:scale-110"
        >
          <Email className="" />
        </Link>
      </Magnetic>
    </div>
  );
};

export default Socials;
