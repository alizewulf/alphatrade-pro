import { useMemo, useState } from "react";

import Container from "@/shared/ui/container";

import { useTrade } from "@/features/trade/model/useTrade";
import { TradeProvider } from "@/features/trade/model/tradeContext";


import TradeAmountInput from "./components/TradeAmountInput";
import TradeAssetSelect from "./components/TradeAssetSelect";
import TradeSubmitButton from "./components/TradeSubmitButton";

import TradeOperationToggle from "./components/TradeOperationToggle";




function TradeFormInner() {
  const trade = useTrade();
  const [showAssetList, setShowAssetList] = useState(false);

  const buttonLabel = useMemo(() => {
    if (trade.isSubmitting) return "Processing...";
    return trade.operationType === "buy" ? "Review Buy Order" : "Review Sell Order";
  }, [trade.isSubmitting, trade.operationType]);

  return (
    <Container className="flex w-85 h-85 flex-col gap-4 overflow-hidden p-0! backdrop-blur-sm">
      <div
        className="
              flex items-center justify-between 
              rounded-tl-lg rounded-tr-lg 
              bg-[#ADC6FF] 
              px-4 py-3 
              font-inter
            "
      >
        <span
          className="
                text-xs font-bold 
                tracking-[0.6px] 
                text-[#002E6A]
                leading-3
              "
        >
          QUICK TRADE
        </span>
      </div>


      <div className="flex justify-between gap-2 px-4">
        <TradeOperationToggle />
      </div>

      <div className="flex flex-col gap-2 px-4">
        <TradeAssetSelect
          showAssetList={showAssetList}
          setShowAssetList={setShowAssetList}
        />
      </div>

      <TradeAmountInput />

      <div className="w-full px-3">
        <TradeSubmitButton label={buttonLabel} />
      </div>

      {trade.feedback && (
        <p
          className={`px-4 text-sm ${
            trade.feedback.includes("Insufficient") || trade.feedback.includes("wrong")
              ? "text-[#FF6B6B]"
              : "text-[#4EDEA3]"
          }`}
        >
          {trade.feedback}
        </p>
      )}
    </Container>
  );
}

export default function TradeForm() {
  return (
    <TradeProvider>
      <TradeFormInner />
    </TradeProvider>
  );
}

