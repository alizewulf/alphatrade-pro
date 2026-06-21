import type { GridElementProps } from "./types";

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
  const isPositive = plValue >= 0;

  return (
    <div className="grid grid-cols-5 items-center px-4 py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors">
      {/* Symbol */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-indigo-500/20 flex items-center justify-center">
          <span className="text-xs font-semibold text-indigo-300">
            {initials}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{symbol}</p>
          <p className="text-xs text-gray-400">{companyName}</p>
        </div>
      </div>

      {/* Qty */}
      <span className="text-sm text-gray-200 text-right">{qty.toFixed(2)}</span>

      {/* Avg Cost */}
      <span className="text-sm text-gray-200 text-right">
        ${avgCost.toFixed(2)}
      </span>

      {/* Market Price */}
      <span className="text-sm text-gray-200 text-right">
        ${marketPrice.toFixed(2)}
      </span>

      {/* P/L */}
      <div className="flex justify-end">
        <div
          className={`px-3 py-1.5 rounded-lg text-right ${
            isPositive
              ? "bg-emerald-500/15 text-emerald-400"
              : "bg-red-500/15 text-red-400"
          }`}
        >
          <p className="text-xs font-semibold">
            {isPositive ? "+" : ""}${plValue.toFixed(2)}
          </p>
          <p className="text-xs">
            ({isPositive ? "+" : ""}
            {plPercent.toFixed(1)}%)
          </p>
        </div>
      </div>
    </div>
  );
}
export default GridElement;
