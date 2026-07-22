import { useEffect, useState } from "react";
import TitleContainer from "@/widgets/portfolio/shared/TitleContainer";
import GridWrapper from "./GridWrapper";
import GridElement from "./GridElement";
import { readDemoTransactions } from "@/features/trade/lib/demoTrade";
import type { Holding } from "../types";

const DEFAULT_HOLDINGS: Holding[] = [
  {
    symbol: "BTC",
    companyName: "Bitcoin",
    initials: "BT",
    qty: 0,
    avgCost: 0,
    marketPrice: 65000,
    plValue: 0,
    plPercent: 0,
  },
  {
    symbol: "ETH",
    companyName: "Ethereum",
    initials: "ET",
    qty: 0,
    avgCost: 0,
    marketPrice: 3200,
    plValue: 0,
    plPercent: 0,
  },
];

function CurrentHoldingWrapper() {
  const [holdings, setHoldings] = useState<Holding[]>(DEFAULT_HOLDINGS);

  useEffect(() => {
    const syncHoldings = () => {
      const transactions = readDemoTransactions();
      const grouped = transactions.reduce<Record<string, { qty: number; cost: number; symbol: string }>>(
        (acc, tx) => {
          const key = tx.symbol.toUpperCase();
          const current = acc[key] ?? { qty: 0, cost: 0, symbol: key };

          if (tx.type === "Buy") {
            current.qty += tx.amount / 1000;
            current.cost += tx.amount;
          } else if (tx.type === "Sell") {
            current.qty = Math.max(0, current.qty - tx.amount / 1000);
            current.cost = Math.max(0, current.cost - tx.amount);
          }

          acc[key] = current;
          return acc;
        },
        {}
      );

      const nextHoldings = Object.values(grouped)
        .filter((item) => item.qty > 0)
        .map((item) => {
          const marketPrice = item.symbol === "BTC" ? 65000 : item.symbol === "ETH" ? 3200 : 1000;
          const value = item.qty * marketPrice;
          const avgCost = item.cost / Math.max(item.qty, 1);
          const plValue = value - item.cost;
          const plPercent = item.cost > 0 ? (plValue / item.cost) * 100 : 0;

          return {
            symbol: item.symbol,
            companyName: item.symbol === "BTC" ? "Bitcoin" : item.symbol === "ETH" ? "Ethereum" : item.symbol,
            initials: item.symbol.slice(0, 2).toUpperCase(),
            qty: Number(item.qty.toFixed(2)),
            avgCost: Number(avgCost.toFixed(2)),
            marketPrice: Number(marketPrice.toFixed(2)),
            plValue: Number(plValue.toFixed(2)),
            plPercent: Number(plPercent.toFixed(1)),
          } satisfies Holding;
        });

      setHoldings(nextHoldings.length > 0 ? nextHoldings : DEFAULT_HOLDINGS);
    };

    syncHoldings();
    window.addEventListener("alpha-trade-demo-updated", syncHoldings);

    return () => window.removeEventListener("alpha-trade-demo-updated", syncHoldings);
  }, []);

  return (
    <div className="w-full h-fit bg-[#1E293B]">
      <TitleContainer container="holding" />
      <GridWrapper>
        {holdings.map((h) => (
          <GridElement key={h.symbol} {...h} />
        ))}
      </GridWrapper>
    </div>
  );
}

export default CurrentHoldingWrapper