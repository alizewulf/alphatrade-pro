import NavButton from "@/shared/ui/button/NavButton";
import { AppInput } from "@/features/search";
import Bell from "../icons/Bell";
import { useNavigate } from "react-router";

function HeaderContent() {
  const navigate = useNavigate()
  return (
    <header className="bg-bgcolor p-4 flex justify-between">
      <div className="flex gap-8">
        <h3 className="font-inter text-white font-bold tracking-[-0.6px] leading-[31.2px] text-2xl select-none cursor-pointer" onClick={() => navigate('/home')}>
          AlphaTrade
        </h3>
        <nav className="flex gap-6 items-center">
          <p className="text-[#ADC6FF] underline cursor-pointer">Dashboard</p>
          <p className="text-paragraph cursor-pointer">Markets</p>
          <p className="text-paragraph cursor-pointer">Portfolio</p>
        </nav>
      </div>

      <div className="flex gap-4 items-center">
        <AppInput/>
        <button className="cursor-pointer">
          <Bell/>
        </button>
        <button className="font-inter text-base leading-6 text-paragraph">Support</button>
        <NavButton>Execute Trade</NavButton>
      </div>
    </header>
  );
}

export default HeaderContent;
