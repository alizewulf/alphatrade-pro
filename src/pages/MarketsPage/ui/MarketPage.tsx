import { CandleChart, CurrencyHeader } from "@/widgets/market"
import { BTCObject, companyData, marketSentiment, stockStatsData } from "../data/objects"
import { useState } from "react";
import TradeExecution from "@/widgets/market/ui/TradeExecution";
import StockStats from "@/widgets/market/ui/StockStats";
import MarketSentiment from "@/widgets/market/ui/MarketSentiment";
import CompanyInfo from "@/widgets/market/ui/CompanyInfo";

function MarketPage() {
  const [changePercent, setChangePercent] = useState(0);
  const result = changePercent >= 0 ? "win" : "lose";
  return (
    <section className="bg-bgcolor flex font-inter w-full flex-col gap-6 p-4">
        <CurrencyHeader object={BTCObject} result={result} changePercent={changePercent} />
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-4">
           <CandleChart object={BTCObject} onChange={setChangePercent} />
           <TradeExecution/>
          </div>
          <div className="flex gap-4 justify-between">
           <StockStats object={stockStatsData}/>
           <MarketSentiment data={marketSentiment}/>
          </div>
          <div className="flex gap-4 justify-between">
            <CompanyInfo data={companyData}/>
          </div>
        </div>
    </section>
  )
}

export default MarketPage