"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Avatar from "../Avatar";

const Links = () => {
  const pathname = usePathname();

  return (
    <div className="text-muted-foreground flex items-end gap-0.5 text-xs sm:gap-0 sm:text-sm">
      <Avatar />
      <Link
        href="/projects"
        className={`hover:text-foreground relative ml-0.5 px-1 py-1 text-sm font-medium transition-all duration-200 sm:ml-1 sm:px-2 sm:text-base ${
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
        className={`hover:text-foreground relative ml-0.5 px-1 py-1 text-sm font-medium transition-all duration-200 sm:ml-1 sm:px-2 sm:text-base ${
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
        className={`hover:text-foreground relative ml-0.5 px-1 py-1 text-sm font-medium transition-all duration-200 sm:ml-1 sm:px-2 sm:text-base ${
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
