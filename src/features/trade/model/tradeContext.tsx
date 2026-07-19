import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import type { TradeOrder } from "./types";

import { useAuth } from "@/app/providers/AuthContext";
import { readDemoBalance } from "../lib/demoTrade";

import { useEffect } from "react";


interface TradeContextValue {
  orders: TradeOrder[];
  addOrder: (order: TradeOrder) => void;
  balance: number;
  updateBalance: (value: number) => void;
}

const TradeContext = createContext<TradeContextValue | null>(null);

export function TradeProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const isDemo = user?.isDemo ?? false;

  const [orders, setOrders] = useState<TradeOrder[]>([]);
  const [balance, setBalance] = useState<number>(() => {
    return isDemo ? readDemoBalance() : user?.onBalance ?? 0;
  });

  // Keep balance in sync if auth/demo flag changes.
  useEffect(() => {
    if (!user) return;

    if (user.isDemo) {
      setBalance(readDemoBalance());
      return;
    }

    setBalance(user.onBalance);
  }, [user?.isDemo, user?.onBalance]);





  const addOrder = (order: TradeOrder) => {
    setOrders((prev) => [...prev, order]);
  };

  const updateBalance = (value: number) => {
    setBalance(value);
  };

  return (
    <TradeContext.Provider value={{ orders, addOrder, balance, updateBalance }}>
      {children}
    </TradeContext.Provider>
  );
}

export function useTradeContext() {
  const context = useContext(TradeContext);

  if (!context) {
    throw new Error("useTradeContext must be used inside TradeProvider");
  }

  return context;
}

