import { Navigate } from "react-router";
import { useAuth } from "@/app/providers/AuthContext";
import { ROUTE_PATHS } from "@/app/routes";
import HeroSection from "@/widgets/welcome/hero/HeroSection";
import HighlightsSection from "@/widgets/welcome/highlight-section/HighlightsSection";
import BenefitsPageSection from "@/widgets/welcome/benefits/BenefitsPageSection";
import JoinNowPageSection from "@/widgets/welcome/join-now-section/JoinNowPageSection";

function WelcomePage() {
  const { isAuth } = useAuth();

  if (isAuth) {
    return <Navigate to={ROUTE_PATHS.dashboard} replace />;
  }

  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <BenefitsPageSection />
      <JoinNowPageSection />
    </>
  );
}

export default WelcomePage;


