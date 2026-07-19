import type { MarketSentimentProps } from "@/pages/MarketsPage/ui/data/interfaces.types";
import Container from "@/shared/ui/container";
import React from "react";

function MarketSentiment({ data }: MarketSentimentProps): React.JSX.Element {
  const bullish = data.find((item) => item.type === "Bullish")?.value ?? 0;

  return (
    <Container className="w-full h-42.5 gap-4">
      <span className="font-semibold text-xs leading-3 tracking-[0.6px] text-[#DAE2FD] uppercase">
        market sentiment
      </span>
      <div className="flex justify-between gap-6">
        {data.map((item) => (
          <span
            className={`font-semibold text-xs leading-3 tracking-[0.6px] ${item.color}`}
            key={item.type}
          >
            {item.type} ({item.value}%)
          </span>
        ))}
      </div>

      <div className="w-full h-2 bg-negative rounded-full mt-3 overflow-hidden">
        <div
          className="h-full bg-positive rounded-full"
          style={{
            width: `${bullish}%`,
          }}
        />
      </div>
    </Container>
  );
}

export default MarketSentiment;
