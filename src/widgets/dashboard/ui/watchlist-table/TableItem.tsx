import type { WatchlistItem } from "@/entities/watchlist";

function TableItem({ item }: { item: WatchlistItem }) {
  const symbolInitials = item.symbol.slice(0, 2).toUpperCase();
  const isPositive = item.change >= 0;

  return (
    <div className="grid grid-cols-5 items-center gap-4 py-4 border-t border-white/10">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ADC6FF] font-bold text-slate-900">
          {symbolInitials}
        </span>

        <div className="flex flex-col">
          <p className="font-medium text-white">{item.symbol}</p>
          <p className="text-sm text-gray-400">{item.company}</p>
        </div>
      </div>

      <span className="text-white">
        ${item.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </span>

      <span className={isPositive ? "text-emerald-400" : "text-red-400"}>
        {isPositive ? "+" : ""}{item.changePercent.toFixed(2)}%
      </span>

      <span className="text-gray-400">{item.marketCap ?? "—"}</span>

      <div className="text-sm text-gray-400">{item.profile}</div>
    </div>
  );
}

export default TableItem;
