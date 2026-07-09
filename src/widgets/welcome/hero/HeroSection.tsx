import ConfirmationBadge from "./ConfirmationBadge";
import HeroImg from "./HeroImg";
import HeroText from "./HeroText";
import StatsList from "./StatsList";
import { Button } from "@/shared/ui/button";
import { useAuth } from "@/app/providers/AuthContext";
import { ROUTE_PATHS } from "@/app/routes";
import { useNavigate } from "react-router";


function HeroSection() {
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  return (
    <section className="bg-bgcolor flex justify-around py-10 px-8">
      <div className="flex flex-col justify-center gap-[22.8px]">
        <ConfirmationBadge />

        <HeroText />

        <div className="flex gap-3">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              isAuth ? navigate(ROUTE_PATHS.portfolio) : navigate(ROUTE_PATHS.login);
            }}
          >
            Start Trading
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate(ROUTE_PATHS.demo)}
          >
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
  );
}

export default HeroSection;

