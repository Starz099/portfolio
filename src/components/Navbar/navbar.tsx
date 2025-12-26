import Container from "../ui/Container";
import { ThemeToggleButton } from "../ThemeSwitch";
import { BoomBotToggleButton } from "../BoomBotToggle";
import Links from "./links";

const Navbar = () => {
  return (
    <Container className="bg-background/80 border-border/40 sticky top-0 z-20 border-b backdrop-blur-md transition-all duration-200">
      <div className="flex items-center justify-between px-3 py-2 sm:px-6 sm:py-4">
        <Links />
        <div className="flex items-center gap-2 sm:gap-4">
          <BoomBotToggleButton />
          <ThemeToggleButton
            className="border-border/60 hover:border-border rounded-2xl border-2 transition-all duration-200 hover:scale-95 hover:shadow-sm"
            variant="rectangle"
            start="top-down"
            blur
          ></ThemeToggleButton>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
