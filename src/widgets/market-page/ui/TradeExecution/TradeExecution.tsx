import { useMemo } from "react";

import EstimatedPriceField from "./components/EstimatedPriceField";
import OrderType from "./components/OrderType";
import QuantityField from "./components/QuantityField";
import TradeExecutionHeader from "./components/TradeExecutionHeader";

import { useTrade } from "@/features/trade/model/useTrade";
import { useBalance } from "@/features/trade/model/useBalance";


function TradeExecution() {
  const trade = useTrade();
  const balance = useBalance();
  

  const numericValue = useMemo(() => {
    const n = Number(trade.input.amount);
    return Number.isFinite(n) ? n : 0;
  }, [trade.input.amount]);

  const estimatedValue = useMemo(
    () => numericValue * (1 + 2 / 100),
    [numericValue]
  );


  const buttonDisable = numericValue + estimatedValue >= balance;


  return (
    <section className="flex flex-col gap-6 w-3/12 outline outline-[#424754]/10 bg-[#1E293B]/70 rounded-sm">
      <TradeExecutionHeader
        state={trade.operationType}
        setState={(next) => trade.setOperationType(next)}
      />

      <div className="flex flex-col gap-4 items-center px-6">
        <OrderType />
        <QuantityField state={trade.input.amount} setState={trade.setAmount} />

        <EstimatedPriceField price={estimatedValue} />
      </div>

      <div className="mt-3 flex px-6 flex-col gap-2">
        <div className="w-full flex justify-between text-sm text-paragraph leading-5">
          <p>{trade.operationType === "buy" ? "Buy" : "Sell"} Power</p>
          <p className="text-[#DAE2FD]">${balance}</p>
        </div>

        <div className="w-full flex justify-between text-sm text-paragraph leading-5">
          <p>Estimated Total</p>
          <p className="font-bold text-[#DAE2FD]">${trade.input.amount + estimatedValue}</p>
        </div>

        <div className="flex w-full my-4 px-6 rounded-lg justify-center">
          <button
            className={`w-full capitalize py-4 ${
              trade.operationType === "buy"
                ? "bg-secondary text-[#003824]"
                : "text-negative outline outline-negative bg-negative/15"
            } font-semibold text-xl leading-7 ${
              buttonDisable ? "" : "cursor-pointer"
            } rounded-lg`}
            disabled={buttonDisable || trade.isSubmitting || numericValue <= 0}
            onClick={() => {
              if (numericValue <= 0) return;
              trade.submit();
            }}

          >
            {trade.operationType}
          </button>
        </div>

        {trade.feedback && (
          <p
            className={`px-4 text-sm ${
              trade.feedback.includes("Insufficient") ||
              trade.feedback.includes("wrong")
                ? "text-negative"
                : "text-positive"
            }`}
          >
            {trade.feedback}
          </p>
        )}
      </div>
    </section>
  );
}

export default TradeExecution;

