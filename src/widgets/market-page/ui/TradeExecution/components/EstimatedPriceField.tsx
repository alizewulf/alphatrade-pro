import TradeExecutionInput from "../../input";

export default function EstimatedPriceField() {
  return (
    <div className="flex gap-1.25 w-full flex-col">
      <span className="font-semibold text-xs text-paragraph tracking-[0.6px] leading-3">
        Estimated Price
      </span>
      <TradeExecutionInput type="number" bgColor="secondary" />
    </div>
  );
}

