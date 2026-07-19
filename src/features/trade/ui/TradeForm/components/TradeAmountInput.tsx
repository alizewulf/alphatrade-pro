import { useTrade } from "@/features/trade/model/useTrade";

import TradeContainer from "@/widgets/dashboard/ui/quick-trade/TradeContainer";

export default function TradeAmountInput() {
  const trade = useTrade();

  return (
    <TradeContainer
      item={{
        title: "Amount (USD)",
        value: "0.00",
      }}
      value={trade.input.amount}
      onChange={trade.setAmount}
      type="text"
      inputMode="decimal"
      onKeyDown={(event) => {
        if (["e", "E", "+", "-"].includes(event.key)) {
          event.preventDefault();
        }
      }}
      onWheel={(event) => event.currentTarget.blur()}
    />
  );
}

