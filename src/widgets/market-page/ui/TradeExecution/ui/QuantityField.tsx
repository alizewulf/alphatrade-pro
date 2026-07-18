import TradeExecutionInput from "../../input";

export default function QuantityField() {
  return (
    <div className="flex gap-1.25 w-full flex-col">
      <span className="font-semibold text-xs text-paragraph tracking-[0.6px] leading-3">
        Quantity (Shares)
      </span>

      <div className="flex relative w-max">
        <TradeExecutionInput type="number" bgColor="primary" />
        <button className="absolute top-1/6 cursor-pointer translate-y-1/2 right-5 text-paragraph font-semibold text-xs tracking-[0.6px]">
          MAX
        </button>
      </div>
    </div>
  );
}

