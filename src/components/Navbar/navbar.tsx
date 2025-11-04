import Container from "../ui/Container";
import { ThemeToggleButton } from "../ThemeSwitch";
import Avatar from "../Avatar";
import Links from "./links";

const Navbar = () => {
  return (
    <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6">
        <Links />
        <div className="flex items-center gap-4">
          <ThemeToggleButton className=" border-2 border-accent rounded-2xl hover:scale-90 transition-transform duration-200"
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
