import { CandleChart, CurrencyHeader } from "@/widgets/market-page"
import { BTCObject } from "./data/object"
import { useState } from "react";

function MarketPage() {
  const [changePercent, setChangePercent] = useState(0);
  const result = changePercent >= 0 ? "win" : "lose";

  return (
    <section className="bg-bgcolor flex flex-col gap-6 p-4">
        <CurrencyHeader object={BTCObject} result={result} changePercent={changePercent} />
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
          <CandleChart object={BTCObject} onChange={setChangePercent} />
          
          </div>
        </div>
    </section>
  )
}

export default MarketPage