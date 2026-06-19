import { useNavigate } from "react-router";
import type { HeadingTitleProps } from "./HeadingTitleWrapper";


function HeadingText({isVip}:HeadingTitleProps) {
const navigate = useNavigate()
  return (
    <h3 className={`font-inter ${isVip? "font-black leading-8 text-2xl tracking-[-0.6px] text-[#ADC6FF]" : "font-bold text-xl leading-7 tracking-normal text-[#DAE2FD]"}`} onClick={() => navigate("/home")}>
      AlphaTrade
    </h3>
  );
}

export default HeadingText;
