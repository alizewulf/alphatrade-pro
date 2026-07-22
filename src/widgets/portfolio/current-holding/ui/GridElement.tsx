import type { GridElementProps } from "../types";

function GridElement({
  symbol,
  companyName,
  initials,
  qty,
  avgCost,
  marketPrice,
  plValue,
  plPercent,
}: GridElementProps) {
  const isPositive = plPercent >= 0;

  return (
    <div className="bg-[#111827] rounded-lg p-4 flex flex-col gap-2 min-w-30 flex-1">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ADC6FF] font-bold text-slate-900 text-sm">
          {initials}
        </span>
        <div>
          <p className="font-semibold text-sm leading-5 text-[#DAE2FD]">
            {symbol}
          </p>
          <p className="text-xs leading-4 text-paragraph">{companyName}</p>
        </div>

      <div className="flex justify-between text-sm">
        <span className="text-paragraph">Qty</span>
        <span className="font-medium text-[#DAE2FD]">{qty}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-paragraph">Avg Cost</span>
        <span className="font-medium text-[#DAE2FD]">${avgCost.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-paragraph">Mkt Price</span>
        <span className="font-medium text-[#DAE2FD]">
          ${marketPrice.toFixed(2)}
        </span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-paragraph">P&amp;L</span>
        <span
          className={`font-semibold ${
            isPositive ? "text-positive" : "text-negative"
          }`}
        >
          {isPositive ? "+" : ""}${plValue.toFixed(2)} ({plPercent.toFixed(1)}
          %)
        </span>
      </div>
    </div>
  </div>
  );
}

export default GridElement;
