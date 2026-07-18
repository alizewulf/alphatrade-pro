import { useState } from "react";

import EstimatedPriceField from "./EstimatedPriceField";
import OrderType from "./OrderType";
import QuantityField from "./QuantityField";
import TradeExecutionHeader from "./TradeExecutionHeader";

function TradeExecution() {
  const [state, setState] = useState<"buy" | "sell">("buy");

  return (
    <section className="flex flex-col gap-6 w-3/12 outline outline-[#424754]/10 bg-[#1E293B]/70 rounded-sm">
      <TradeExecutionHeader state={state} setState={setState} />
      <div className="flex flex-col gap-4 items-center px-6">
        <OrderType />
        <QuantityField />
        <EstimatedPriceField />
      </div>
      <div className="mt-3 flex px-6 flex-col gap-2">
        <div className="w-full flex justify-between text-sm text-paragraph leading-5">
          <p>Buying Power</p>
          <p className="text-[#DAE2FD]">$12,450.00</p>
        </div>
        <div className="w-full flex justify-between text-sm text-paragraph leading-5">
          <p>Estimated Total</p>
          <p className="font-bold text-[#DAE2FD]">$1,894.30</p>
        </div>

        <div className="flex w-full my-4 px-6 rounded-lg justify-center">
          <button className="w-full bg-secondary py-4 text-[#003824] font-semibold text-xl leading-7 cursor-pointer rounded-lg">Buy</button>
        </div>
      </div>
    </section>
  );
}

export default TradeExecution;
