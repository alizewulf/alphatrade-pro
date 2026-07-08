import Container from "@/shared/ui/container";
import type { TopMoveItemProps } from "./types/topMoveTypes";



function TopMoveItem({ type, items, gap }: TopMoveItemProps) {
  const isGainer = type === "gainer";

  return (
    <Container className="w-1/3" containerGap={gap}>
      <h3 className="text-[#DAE2FD] font-bold text-xl leading-7">
        {isGainer ? "Top Gainers" : "Top Losers"}
      </h3>

      {items.map((item) => (
        <div key={item.symbol} className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span
              className={`rounded-full w-4 h-4 ${
                isGainer ? "bg-positive" : "bg-negative"
              }`}
            />
            <span className="font-bold text-base leading-6 text-[#DAE2FD] uppercase">
              {item.symbol}
            </span>
          </div>

          <div className="text-right">
            <div className="text-[#DAE2FD]">{item.price}</div>
            <div className={isGainer ? "text-positive" : "text-negative"}>
              {item.change}
            </div>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default TopMoveItem;