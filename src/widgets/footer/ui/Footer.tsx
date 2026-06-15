import FooterButton from "./Button";
import EarthSVG from "./icons/EarthSVG";
import ShareSVG from "./icons/ShareSVG";
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
          <FooterButton>
            <EarthSVG />
          </FooterButton>
          <FooterButton>
            <ShareSVG />
          </FooterButton>
        </div>
      )}
    </footer>
  );
}

export default FooterContent;
