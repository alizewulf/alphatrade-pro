import heroIMG from "./assets/hero_img.png";
import ConfirmedSVG from "./ui/ConfirmedSVG";
import StatsList from "./ui/StatsList";
import WelcomeButton from "./ui/WelcomeButton";

function WelcomePage() {
  return (
    <>
      <section className="bg-bgcolor flex justify-between py-10 px-8">
        <div className="flex flex-col gap-[22.8px]">
          <div className="flex gap-2 items-center w-fit text-[#ADC6FF] font-inter text-sm leading-3 tracking-[0.6px] font-semibold bg-[#ADC6FF]/10 outline outline-[#ADC6FF]/20 py-1.5 px-3.25 rounded-xl">
            <ConfirmedSVG />
            <span>TRUSTED BY 2M+ TRADERS</span>
          </div>

          <h1 className="font-bold font-inter text-5xl leading-15 tracking-[-0.96px] text-[#DAE2FD]">
            Trade with <span className="text-[#ADC6FF]">Precision</span>
          </h1>
          <p className="w-100 text-headerButton text-lg leading-[28.8px]">
            Experience the next generation of financial execution. Real-time
            data, lightning-fast order processing, and institutional-grade
            analytics for everyone.
          </p>

          <div className="flex gap-4">
            <WelcomeButton variant="primary">Start Trading</WelcomeButton>
            <WelcomeButton variant="secondary">View Demo</WelcomeButton>
          </div>

          <div className="flex gap-6 border-t border-[#424754] pt-8.25">
            <StatsList title="0.0%" subtitle="Commisions"/>
            <StatsList title="20ms" subtitle="Execution Speed" isCentral={true}/>
            <StatsList title="24/7" subtitle="Expert Support"/>
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
