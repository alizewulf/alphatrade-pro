import ConfirmationBadge from "./ui/hero/ConfirmationBadge";
import HeroImg from "./ui/hero/Hero-img";
import HeroText from "./ui/hero/Hero-text";
import HighLightsText from "./ui/highlight-section/Highlights-text";
import StatsList from "./ui/hero/StatsList";
import HighlightsItemContainer from "./ui/highlight-section/Highlights-item-wrapper";
import { StartTrading } from "@/features/start-trading";
import { TryDemoButton } from "@/features/try-demo";
import BenefitsContainer from "./ui/benefits/BenefitsContainer";
import JoinNowContainer from "./ui/join-now-section/JoinNowContainer";

function WelcomePage() {
  return (
    <>
      <section className="bg-bgcolor flex justify-around py-10 px-8">
        <div className="flex flex-col justify-center gap-[22.8px]">
          <ConfirmationBadge />

          <HeroText />

          <div className="flex gap-3">
            <StartTrading/>
            <TryDemoButton/>
          </div>

          <div className="flex gap-6 border-t border-[#424754] pt-8.25">
            <StatsList title="0.0%" subtitle="Commisions" />
            <StatsList
              title="20ms"
              subtitle="Execution Speed"
            />
            <StatsList title="24/7" subtitle="Expert Support" />
          </div>
        </div>
        <HeroImg />
      </section>

      <section className="bg-[#060E20] py-20 px-8 gap-10 flex flex-col">
        <HighLightsText />
        <div className="flex flex-row justify-between">
          <HighlightsItemContainer/>
        </div>
      </section>

      <BenefitsContainer/>

      <JoinNowContainer/>
    </>
  );
}

export default WelcomePage;
