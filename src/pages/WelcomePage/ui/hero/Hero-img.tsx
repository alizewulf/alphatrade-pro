import heroIMG from '../../assets/hero_img.png' 
import ArrowIcon from "../../../../shared/ui/icons/ArrowIcon";

function HeroImg() {
  return (
    <div className="relative z-10">
      <img
        src={heroIMG}
        className="w-175 h-175 object-fill rounded-xl"
        alt="hero image"
      />
      <div className="-z-10 rounded-xl w-96 h-96 -left-1/4 top-0 bg-radial to-[#ADC6FF]/70 from-[#ADC6FF]/10 absolute blur-3xl"></div>
      <div className="absolute items-center p-4 rounded-lg outline-2 outline-[#4EDEA3]/20 flex gap-3 top-10 right-10 bg-[#1E293B]/70 ">
        <div className="py-3.5 px-2.5 w-fit h-fit bg-[#4EDEA3]/20 rounded-xl">
          <ArrowIcon scheme='positive'/>
        </div>
        <div className="flex font-inter font-semibold flex-col">
          <span className="text-paragraph leading-3 tracking-[0.6px]">
            AAPL
          </span>
          <span className="leading-7 text-xl text-[#4EDEA3]">
            +$4.20 (2.1%)
          </span>
        </div>
      </div>
      <div className="absolute -bottom-10 -z-10 left-0 rounded-xl w-96 h-96 bg-radial to-[#4EDEA3] from-transparent blur-3xl "></div>
    </div>
  );
}

export default HeroImg;
