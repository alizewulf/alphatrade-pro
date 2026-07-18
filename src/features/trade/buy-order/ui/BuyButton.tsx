import clsx from "clsx";
import type { ButtonTradeProps } from "../../model/types";

function BuyButton({ state, onClick, variant }:ButtonTradeProps) {
  return (
    <button className={clsx(
  "px-12 py-2 w-1/2 rounded-sm font-bold text-xs leading-3 tracking-[0.6px] cursor-pointer",
  {
    "bg-positive text-[#003824]": variant === "primary" && state === "buy",
    "bg-[#2D3449] text-[#DAE2FD]": variant === "primary" && state !== "buy",

    "text-positive border-b border-b-positive rounded-none": variant === "secondary" && state === "buy",
    "bg-transparent text-paragraph": variant === "secondary" && state !== "buy",
  }
)}
    onClick={onClick}
    >
      Buy
    </button>
  );
}

export default BuyButton;
