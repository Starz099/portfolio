import Link from "next/link";
import { Menu } from "lucide-react";
import Container from "../ui/Container";
import { ThemeToggleButton } from "../ThemeSwitch";
import { BoomBotToggleButton } from "../BoomBot/BoomBotToggle";
import Links from "./links";
import { linkItems } from "./constants";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <Container className="bg-background/80 border-border/40 sticky top-0 z-20 border-b backdrop-blur-md transition-all duration-200">
      <div className="flex items-center justify-between px-3 py-2 sm:px-6 sm:py-4">
        <div className="flex items-end gap-2 sm:gap-4">
          <Links className="hidden translate-y-1 sm:flex" />
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <BoomBotToggleButton />
          <ThemeToggleButton
            className="border-border/60 hover:border-border rounded-2xl border-2 transition-all duration-200 hover:scale-95 hover:shadow-sm"
            variant="rectangle"
            start="top-down"
            blur
          ></ThemeToggleButton>
          <div className="sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-border/60 hover:border-border size-10 rounded-2xl border-2 transition-all duration-200 hover:scale-95 hover:shadow-sm"
                >
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 rounded-2xl p-2">
                {linkItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className="w-full cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
