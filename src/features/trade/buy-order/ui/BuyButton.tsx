function BuyButton({ state, onClick }: { state: "buy" | "sell"; onClick: () => void }) {
  return (
    <button
      className={`px-12 py-2 w-1/2 ${state === "buy" ? "bg-win" : "bg-[#2D3449]"} rounded-sm font-bold text-xs leading-3 tracking-[0.6px] ${state === "buy" ? "text-[#003824]" : "text-[#DAE2FD]"} cursor-pointer`}
      onClick={onClick}
    >
      Buy
    </button>
  );
}

export default BuyButton;
