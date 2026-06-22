import { Navigate } from "react-router";
import { useAuth } from "@/app/providers/AuthContext";
import HeroSection from "./hero/HeroSection";
import HighlightsSection from "./highlight-section/HighlightsSection";
import BenefitsPageSection from "./benefits/BenefitsPageSection";
import JoinNowPageSection from "./join-now-section/JoinNowPageSection";

function WelcomePage() {
  const { isAuth } = useAuth();

  if (isAuth) {
    return <Navigate to="/dashboard" replace />;
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


