import BuyButton from "@/features/trade/buy-order/ui/BuyButton";
import SellButton from "@/features/trade/sell-order/ui/SellButton";
import { useState } from "react";

function TradeExecution() {
    const [state, setState] = useState<"buy" | "sell">("buy")
  return (
    <section className="flex flex-col gap-6 w-3/12 outline outline-[#424754]/10 bg-[#1E293B]/70 rounded-sm">
      <div className="flex p-4 bg-[rgb(34,42,61)] ">
        <BuyButton variant="secondary" state={state} onClick={() => setState("buy")}/>
        <SellButton variant="secondary" state={state} onClick={() => setState("sell")}/>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <div className="flex justify-between items-center">
          <span>Order Type</span>
          <p>Market</p>
        </div>
      </div>
    </section>
  );
}

export default TradeExecution;
