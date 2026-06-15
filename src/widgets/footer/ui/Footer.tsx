import PrimaryFooter from "./PrimaryFooter";
import SecondaryFooter from "./SecondaryFooter";

type FooterContentProps = {
  variant: "primary" | "secondary";
};
function FooterContent({ variant }: FooterContentProps) {
  return (
    <footer>
      {variant === "primary" ? <PrimaryFooter /> : <SecondaryFooter />}
    </footer>
  );
}

export default FooterContent;
