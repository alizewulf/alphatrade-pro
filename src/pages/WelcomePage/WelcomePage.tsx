import heroIMG from "./assets/hero_img.png";
import ConfirmationBadge from "./ui/ConfirmationBadge";
import HeroText from "./ui/HeroText";
import StatsList from "./ui/StatsList";
import WelcomeButton from "./ui/WelcomeButton";

function WelcomePage() {
  return (
    <>
      <section className="bg-bgcolor flex justify-between py-10 px-8">
        <div className="flex flex-col gap-[22.8px]">
          <ConfirmationBadge />

          <HeroText />

          <div className="flex gap-3">
            <WelcomeButton variant="primary">Start Trading</WelcomeButton>
            <WelcomeButton variant="secondary">View Demo</WelcomeButton>
          </div>

          <div className="flex gap-6 border-t border-[#424754] pt-8.25">
            <StatsList title="0.0%" subtitle="Commisions" />
            <StatsList
              title="20ms"
              subtitle="Execution Speed"
              isCentral={true}
            />
            <StatsList title="24/7" subtitle="Expert Support" />
          </div>
        </div>

        <div className="w-2/3">
          <img src={heroIMG} className="w-full object-fill" alt="hero image" />
        </div>
      </section>
    </>
  );
}

export default WelcomePage;
