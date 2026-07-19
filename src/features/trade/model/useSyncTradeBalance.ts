import { useEffect } from "react";

import { useAuth } from "@/app/providers/AuthContext";

import { useTradeContext } from "./tradeContext";
import { readDemoBalance } from "../lib/demoTrade";

export function useSyncTradeBalance() {
  const { user } = useAuth();
  const { updateBalance } = useTradeContext();

  useEffect(() => {
    if (!user) return;

    if (user.isDemo) {
      updateBalance(readDemoBalance());
      return;
    }

    updateBalance(user.onBalance);
  }, [user, updateBalance]);
}

