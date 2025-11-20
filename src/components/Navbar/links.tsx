"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Avatar from "../Avatar";

const Links = () => {
  const pathname = usePathname();

  return (
    <div className="text-muted-foreground flex items-end gap-1">
      <Avatar />
      <Link
        href="/projects"
        className={`text-md hover:text-foreground relative ml-1 px-2 py-1 font-medium transition-all duration-200 ${
          pathname === "/projects" ? "text-foreground" : ""
        }`}
      >
        <span className="relative z-10">Projects</span>
        {pathname === "/projects" && (
          <span className="bg-accent/10 absolute inset-0 rounded-md" />
        )}
      </Link>
      <Link
        href="/work"
        className={`text-md hover:text-foreground relative ml-1 px-2 py-1 font-medium transition-all duration-200 ${
          pathname === "/work" ? "text-foreground" : ""
        }`}
      >
        <span className="relative z-10">Work</span>
        {pathname === "/work" && (
          <span className="bg-accent/10 absolute inset-0 rounded-md" />
        )}
      </Link>
      <Link
        href="/contact"
        className={`text-md hover:text-foreground relative ml-1 px-2 py-1 font-medium transition-all duration-200 ${
          pathname === "/contact" ? "text-foreground" : ""
        }`}
      >
        <span className="relative z-10">Contact</span>
        {pathname === "/contact" && (
          <span className="bg-accent/10 absolute inset-0 rounded-md" />
        )}
      </Link>
    </div>
  );
};

export default Links;
