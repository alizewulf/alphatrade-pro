import { useTrade } from "@/features/trade/model/useTrade";

export default function TradeSubmitButton({ label }: { label: string }) {
  const trade = useTrade();

  return (
    <button
      type="button"
      className="w-full rounded-lg bg-[#ADC6FF] px-3 py-3 font-bold text-[#002E6A] cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
      onClick={trade.submit}
      disabled={trade.isSubmitting}
    >
      {label}
    </button>
  );
}

