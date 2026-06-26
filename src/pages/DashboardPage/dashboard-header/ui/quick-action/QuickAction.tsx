import EnergySVG from "@/pages/DashboardPage/ui/icons/Energy";

function QuickAction({ bgColor }: { bgColor?: string }) {
  return (
    <div className={`p-6 w-1/5 ${bgColor} font-inter gap-4 flex flex-col`}>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-xs text-paragraph tracking-[0.6px] leading-3">
          QUICK ACTION
        </span>
        <EnergySVG />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between text-sm leading-5 text-[#DAE2FD]">
          <span>Buying Power</span>
          <span>$12,240.00</span>
        </div>
      </div>
      <div className="w-full h-1 bg-[#2D3449] rounded-xl relative overflow-hidden">
        <div
          className="h-full bg-[#ADC6FF] rounded-xl transition-all"
          style={{ width: "70%" }}
        />
      </div>
      <button className="py-2 cursor-pointer font-semibold text-xs leading-3 text-[#ADC6FF] bg-[#ADC6FF]/10 outline outline-[#ADC6FF]/20">
        Deposit Funds
      </button>
    </div>
  );
}

export default QuickAction;
