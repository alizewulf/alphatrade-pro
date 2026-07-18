import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/app/providers/AuthContext";
import { DEMO_BALANCE_KEY, readDemoBalance } from "@/features/trade/lib/demoTrade";

function ValueHeader() {
  const { user } = useAuth();
  const [balance, setBalance] = useState(() => readDemoBalance());

  useEffect(() => {
    const syncBalance = () => {
      const stored = sessionStorage.getItem(DEMO_BALANCE_KEY);
      setBalance(stored === null ? user?.onBalance ?? 0 : Number(stored));
    };

    syncBalance();
    window.addEventListener("alpha-trade-demo-updated", syncBalance);

    return () => window.removeEventListener("alpha-trade-demo-updated", syncBalance);
  }, [user?.onBalance]);

  const balanceLabel = useMemo(() => {
    return balance.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
  }, [balance]);

  return (
    <div className="flex font-inter flex-row justify-between gap-10">
      <div className="gap-2 flex flex-col">
        <p className="text-paragraph uppercase text-xs tracking-[-0.6px] font-bold leading-3">
          Total Portfolio Value
        </p>
        <span className="text-5xl leading-[52.8px] tracking-[-1.2px] text-[#DAE2FD] font-bold">
          {balanceLabel}
        </span>
      </div>

      <span className="text-[#4EDEA3] bg-[#4EDEA3]/10 h-fit py-1 px-2 font-bold rounded-xs">
        +4.2% Today
      </span>
    </div>
  );
}

export default ValueHeader;
