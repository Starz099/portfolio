"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Avatar from "../Avatar";

const Links = () => {
  const pathname = usePathname();

  return (
    <div className="text-muted-foreground flex items-end">
      <Avatar />
      <Link
        href="/projects"
        className={`text-md ml-2 font-medium underline-offset-4 hover:underline ${
          pathname === "/projects" ? "text-accent-foreground" : ""
        }`}
      >
        Projects
      </Link>
      <Link
        href="/work"
        className={`text-md ml-2 font-medium underline-offset-4 hover:underline ${
          pathname === "/work" ? "text-accent-foreground" : ""
        }`}
      >
        Work
      </Link>
      <Link
        href="/contact"
        className={`text-md ml-2 font-medium underline-offset-4 hover:underline ${
          pathname === "/contact" ? "text-accent-foreground" : ""
        }`}
      >
        Contact
      </Link>
    </div>
  );
};

export default Links;
