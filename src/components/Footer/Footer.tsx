import Quote from "../Quote/Quote";
import Container from "../ui/Container";

const Footer = () => {
  return (
    <Container className="text-muted-foreground pb-2 text-center text-sm">
      <Quote
        quote="You have a right to perform your prescribed duty, but you are not entitled to the fruits of actions."
        author="Bhagavad Gita"
      />
      Developed by <span className="font-bold">Starz099</span>
      <br /> © 2025
    </Container>
  );
};

export default Footer;
