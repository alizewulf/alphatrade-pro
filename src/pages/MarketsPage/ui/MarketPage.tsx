import { CandleChart, CurrencyHeader } from "@/widgets/market-page"
import { BTCObject, stockStatsData } from "./data/object"
import { useState } from "react";
import TradeExecution from "@/widgets/market-page/ui/TradeExecution";
import StockStats from "@/widgets/market-page/ui/StockStats";
import MarketSentiment from "@/widgets/market-page/ui/MarketSentiment";

function MarketPage() {
  const [changePercent, setChangePercent] = useState(0);
  const result = changePercent >= 0 ? "win" : "lose";
  return (
    <section className="bg-bgcolor flex font-inter flex-col gap-6 p-4">
        <CurrencyHeader object={BTCObject} result={result} changePercent={changePercent} />
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
           <CandleChart object={BTCObject} onChange={setChangePercent} />
           <TradeExecution/>
          </div>
          <div className="flex gap-4 justify-between">
           <StockStats object={stockStatsData}/>
           <MarketSentiment/>
          </div>
        </div>
    </section>
  )
}

export default MarketPage