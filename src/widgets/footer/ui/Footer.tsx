import { Button } from "@/shared/ui/Button";
import { EarthSVG, ShareSVG } from "@/shared/ui/icons";
import InformationContainer from "./InformationContainer";
import LinksContainer from "./LinksContainer";

type FooterContentProps = {
  showSocials?: boolean;
};

function FooterContent({ showSocials = true }: FooterContentProps) {
  return (
    <footer className="bg-[#060E20] font-inter items-center py-10 px-8 flex justify-between">
      <InformationContainer />
      <LinksContainer />
      {showSocials && (
        <div className="flex gap-4">
          <Button variant="icon">
            <EarthSVG />
          </Button>
          <Button variant="icon">
            <ShareSVG />
          </Button>
        </div>
      )}
    </footer>
  );
}

export default FooterContent;
