import { useNavigate } from "react-router";
import ConfirmationBadge from "./hero/ConfirmationBadge";
import HeroImg from "./hero/Hero-img";
import HeroText from "./hero/Hero-text";
import HighLightsText from "./highlight-section/Highlights-text";
import StatsList from "./hero/StatsList";
import HighlightsItemContainer from "./highlight-section/Highlights-item-wrapper";
import { Button } from "@/shared/ui/Button";
import BenefitsContainer from "./benefits/BenefitsContainer";
import JoinNowContainer from "./join-now-section/JoinNowContainer";
import { useAuth } from "@/app/providers/AuthContext";

function WelcomePage() {
  const navigate = useNavigate();
  const { isAuth } = useAuth()
  return (
    <>
      <section className="bg-bgcolor flex justify-around py-10 px-8">
        <div className="flex flex-col justify-center gap-[22.8px]">
          <ConfirmationBadge />

          <HeroText />

          <div className="flex gap-3">
            <Button
              variant="primary"
              size="lg"
              onClick={() => { isAuth ? navigate('/portfolio') : navigate('/login')}}
            >
              Start Trading
            </Button>
            <Button variant="secondary" size="lg">
              View Demo
            </Button>
          </div>

          <div className="flex gap-6 border-t border-[#424754] pt-8.25">
            <StatsList title="0.0%" subtitle="Commisions" />
            <StatsList title="20ms" subtitle="Execution Speed" />
            <StatsList title="24/7" subtitle="Expert Support" />
          </div>
        </div>
        <HeroImg />
      </section>

      <section className="bg-[#060E20] py-20 px-8 gap-10 flex flex-col">
        <HighLightsText />
        <div className="flex flex-row justify-between">
          <HighlightsItemContainer />
        </div>
      </section>

      <BenefitsContainer />

      <JoinNowContainer />
    </>
  );
}

export default WelcomePage;
