import { useState } from "react";

import EstimatedPriceField from "./components/EstimatedPriceField";
import OrderType from "./components/OrderType";
import QuantityField from "./components/QuantityField";
import TradeExecutionHeader from "./components/TradeExecutionHeader";
import { useAuth } from "@/app/providers/AuthContext";

function TradeExecution() {
  const [state, setState] = useState<"buy" | "sell">("buy");
  const { user } = useAuth();

  const [value, setValue] = useState<number>(1);
  const estimatedValue:number = value * (1 + 2 / 100);

  if (!user) {
    return <h1>Loading user...</h1>;
  }
  

  const buttonDisable =
    value + estimatedValue >= user.onBalance ? true : false;

  return (
    <section className="flex flex-col gap-6 w-3/12 outline outline-[#424754]/10 bg-[#1E293B]/70 rounded-sm">
      <TradeExecutionHeader state={state} setState={setState} />
      <div className="flex flex-col gap-4 items-center px-6">
        <OrderType />
        <QuantityField state={value} setState={setValue} />
        <EstimatedPriceField price={estimatedValue} />
      </div>
      <div className="mt-3 flex px-6 flex-col gap-2">
        <div className="w-full flex justify-between text-sm text-paragraph leading-5">
          <p>{state === "buy"? "Buy" : "Sell"} Power</p>
          <p className="text-[#DAE2FD]">${user.onBalance}</p>
        </div>
        <div className="w-full flex justify-between text-sm text-paragraph leading-5">
          <p>Estimated Total</p>
          <p className="font-bold text-[#DAE2FD]">${value + estimatedValue}</p>
        </div>

        <div className="flex w-full my-4 px-6 rounded-lg justify-center">
          <button
            className={`w-full py-4 ${state === "buy" ? "bg-secondary text-[#003824]" : "text-negative outline outline-negative bg-negative/15"}  font-semibold text-xl leading-7 ${buttonDisable ? "" : "cursor-pointer"} rounded-lg`}
            disabled={buttonDisable}
            onClick={() => console.log("works")}
          >
            {state === "buy" ? "Buy" : "Sell"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default TradeExecution;
