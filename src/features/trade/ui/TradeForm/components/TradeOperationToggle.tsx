import BuyButton from "@/features/trade/buy-order/ui/BuyButton";
import SellButton from "@/features/trade/sell-order/ui/SellButton";

import { useTrade } from "@/features/trade/model/useTrade";

export default function TradeOperationToggle() {
  const trade = useTrade();

  return (
    <>
      <BuyButton
        variant="primary"
        state={trade.operationType}
        onClick={() => trade.setOperationType("buy")}
      />

      <SellButton
        variant="primary"
        state={trade.operationType}
        onClick={() => trade.setOperationType("sell")}
      />
    </>
  );
}

