"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Avatar from "../Avatar";

const Links = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-end text-muted-foreground">
      <Avatar />
      <Link
        href="/projects"
        className={`ml-2 text-md font-medium hover:underline underline-offset-4 ${
          pathname === "/projects" ? "text-accent-foreground" : ""
        }`}
      >
        Projects
      </Link>
      <Link
        href="/work"
        className={`ml-2 text-md font-medium hover:underline underline-offset-4 ${
          pathname === "/work" ? "text-accent-foreground" : ""
        }`}
      >
        Work
      </Link>
      <Link
        href="/contact"
        className={`ml-2 text-md font-medium hover:underline underline-offset-4 ${
          pathname === "/contact" ? "text-accent-foreground" : ""
        }`}
      >
        Contact
      </Link>
    </div>
  );
};

export default Links;
