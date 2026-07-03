import { useNavigate } from "react-router";
import type { HeadingTitleProps } from "./HeadingTitleWrapper";

function HeadingText({ isVip, isDemo }: HeadingTitleProps) {
  const navigate = useNavigate();
  const title = isDemo ? "AlphaTrade Demo" : "AlphaTrade";
  const titleClass = isDemo
    ? "font-inter cursor-pointer font-black leading-8 text-2xl tracking-[-0.6px] text-[#ADC6FF]"
    : isVip
    ? "font-inter cursor-pointer font-black leading-8 text-2xl tracking-[-0.6px] text-[#ADC6FF]"
    : "font-bold text-xl leading-7 tracking-normal text-[#DAE2FD]";

  return (
    <h3 className={titleClass} onClick={() => navigate(isDemo ? "/demo" : "/home")}>
      {title}
    </h3>
  );
}

export default HeadingText;
