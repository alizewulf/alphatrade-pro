import BuyButton from "@/features/trade/buy-order/ui/BuyButton";
import SellButton from "@/features/trade/sell-order/ui/SellButton";

type TradeExecutionHeaderProps = {
  state: "buy" | "sell";
  setState: (next: "buy" | "sell") => void;
};

export default function TradeExecutionHeader({
  state,
  setState,
}: TradeExecutionHeaderProps) {
  return (
    <div className="flex p-4 bg-[rgb(34,42,61)] ">
      <BuyButton
        variant="secondary"
        state={state}
        onClick={() => setState("buy")}
      />
      <SellButton
        variant="secondary"
        state={state}
        onClick={() => setState("sell")}
      />
    </div>
  );
}

