import { useAuth } from "@/app/providers/AuthContext";
import { useEffect, useState } from "react";
import { readDemoBalance } from "../lib/demoTrade";

export function useBalance() {
  const { user } = useAuth();

  const isDemo = user?.isDemo ?? false;

  const [balance, setBalance] = useState(() =>
    isDemo
      ? readDemoBalance()
      : user?.onBalance ?? 0
  );


  useEffect(() => {
    if (!isDemo) {
      setBalance(user?.onBalance ?? 0);
      return;
    }

    const update = () => {
      setBalance(readDemoBalance());
    };

    window.addEventListener(
      "alpha-trade-demo-updated",
      update
    );

    return () =>
      window.removeEventListener(
        "alpha-trade-demo-updated",
        update
      );

  }, [isDemo, user?.onBalance]);


  return balance;
}