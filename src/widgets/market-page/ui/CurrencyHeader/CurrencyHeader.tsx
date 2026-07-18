import { calculatePrice } from "@/shared/lib/calculatePrice";
import ArrowIcon from "@/shared/ui/icons/ArrowIcon";

type Results = "win" | "lose";

interface CurrencyHeaderProps {
  object: {
    name: string;
    price: number;
    category: string;
  };
  result: Results;
  changePercent: number;
}

function CurrencyHeader({ object, changePercent }: CurrencyHeaderProps) {
  const isPositive = changePercent >= 0;

const currentPrice = calculatePrice(object.price, changePercent);
  const sign = isPositive ? "+" : "-";
  const absolutePercent = Math.abs(changePercent).toFixed(2);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <span className="text-[#DAE2FD] font-semibold text-4xl tracking-[-0.32px]">
          {object.name}
        </span>

        <p className="text-[#DAE2FD] font-bold tracking-[-1px] text-5xl">
          ${currentPrice.toFixed(2)}
        </p>
      </div>

      <div className="flex justify-between">
        <span className="text-paragraph text-base leading-6">
          {object.category}
        </span>

        <div className="flex items-center gap-2">
          <ArrowIcon scheme={isPositive ? "positive" : "negative"} />

          <span
            className={`font-semibold text-xl leading-7 ${
              isPositive ? "text-positive" : "text-negative"
            }`}
          >
            {sign}
            {absolutePercent}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default CurrencyHeader;
