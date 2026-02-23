"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { linkItems } from "./constants";

const Links = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  return (
    <div
      className={`text-muted-foreground flex items-end gap-0.5 text-xs sm:gap-0 sm:text-sm ${className}`}
    >
      {linkItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`hover:text-foreground relative px-1 py-1 text-sm font-medium transition-all duration-200 sm:px-2 sm:text-base ${
            pathname === item.href ? "text-foreground" : ""
          }`}
        >
          <span className="relative z-10">{item.label}</span>
          {pathname === item.href && (
            <span className="bg-accent/10 absolute inset-0 rounded-md" />
          )}
        </Link>
      ))}
    </div>
  );
};

export default Links;
