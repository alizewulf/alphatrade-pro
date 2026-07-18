import { useAuth } from "@/app/providers/AuthContext";
import { useTradeContext } from "./tradeContext";

export function useBalance() {
  const { user } = useAuth();
  const { balance } = useTradeContext();

  if (!user) return 0;

  if (!user.isDemo) return user.onBalance;

  return balance;
}

