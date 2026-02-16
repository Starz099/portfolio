import Quote from "../Quote/Quote";
import Container from "../ui/Container";
import VisitorCount from "../VisitorCount/VisitorCount";

const Footer = () => {
  return (
    <Container className="text-muted-foreground pb-6 text-center text-sm">
      <Quote
        quote="You have a right to perform your prescribed duty, but you are not entitled to the fruits of actions."
        author="Bhagavad Gita"
      />
      <div className="mt-4 flex justify-center">
        <VisitorCount />
      </div>
      Developed by <span className="font-bold">Starz099</span>
      <br /> © 2026
    </Container>
  );
};

export default Footer;
