import clsx from "clsx";
import type { ButtonTradeProps } from "../../type";

function SellButton({variant, state, onClick }: ButtonTradeProps) {
  return (
    <button
      className={clsx(
          "px-12 py-2 w-1/2 rounded-sm font-bold text-xs leading-3 tracking-[0.6px] cursor-pointer",
  {
    "bg-negative text-[#003824]": variant === "primary" && state === "sell",
    "bg-[#2D3449] text-[#DAE2FD]": variant === "primary" && state !== "sell",

    "text-negative border-b border-b-negative rounded-none": variant === "secondary" && state === "sell",
    "bg-transparent text-paragraph": variant === "secondary" && state !== "sell",
  }
      )}
      onClick={onClick}
    >
      Sell
    </button>
  );
}

export default SellButton