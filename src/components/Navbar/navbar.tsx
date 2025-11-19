import Container from "../ui/Container";
import { ThemeToggleButton } from "../ThemeSwitch";
import Links from "./links";

const Navbar = () => {
  return (
    <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6">
        <Links />
        <div className="flex items-center gap-4">
          <ThemeToggleButton
            className="border-accent rounded-2xl border-2 transition-transform duration-200 hover:scale-90"
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
