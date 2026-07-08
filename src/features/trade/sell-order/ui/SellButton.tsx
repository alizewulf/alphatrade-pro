function SellButton({ state, onClick }: { state: "buy" | "sell"; onClick: () => void }) {
  return (
    <button
      className={`px-12 py-2 w-1/2 ${state === "sell" ? "bg-lose" : "bg-[#2D3449]"} rounded-sm font-bold text-xs leading-3 tracking-[0.6px] ${state === "sell" ? "text-[#003824]" : "text-[#DAE2FD]"} cursor-pointer`}
      onClick={onClick}
    >
      Sell
    </button>
  );
}

export default SellButton