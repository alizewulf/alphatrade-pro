import type { PortfolioTransaction } from "@/entities/portfolio";

export type DemoTradeOperation = "buy" | "sell";

export const DEMO_BALANCE_KEY = "alpha_trade_demo_balance";
export const DEMO_TRANSACTIONS_KEY = "alpha_trade_demo_transactions";

interface SubmitDemoTradeArgs {
  operationType: DemoTradeOperation;
  assetSymbol: string;
  amount: number;
  storage?: Storage;
}

interface SubmitDemoTradeResult {
  ok: boolean;
  balance: number;
  transaction?: PortfolioTransaction;
  error?: string;
}

export function readDemoBalance(storage: Storage = sessionStorage): number {
  const stored = storage.getItem(DEMO_BALANCE_KEY);
  return stored === null ? 0 : Number(stored);
}

export function readDemoTransactions(storage: Storage = sessionStorage): PortfolioTransaction[] {
  try {
    const stored = storage.getItem(DEMO_TRANSACTIONS_KEY);
    return stored ? (JSON.parse(stored) as PortfolioTransaction[]) : [];
  } catch {
    return [];
  }
}

export function submitDemoTrade({
  operationType,
  assetSymbol,
  amount,
  storage = sessionStorage,
}: SubmitDemoTradeArgs): SubmitDemoTradeResult {
  if (!assetSymbol.trim()) {
    return { ok: false, balance: readDemoBalance(storage), error: "Enter an asset symbol to continue." };
  }

  if (!Number.isFinite(amount) || amount <= 0) {
    return { ok: false, balance: readDemoBalance(storage), error: "Enter a valid amount in USD." };
  }

  const currentBalance = readDemoBalance(storage);

  if (operationType === "buy" && currentBalance < amount) {
    return {
      ok: false,
      balance: currentBalance,
      error: "Insufficient buying power for this order.",
    };
  }

  const nextBalance = operationType === "buy" ? currentBalance - amount : currentBalance + amount;
  storage.setItem(DEMO_BALANCE_KEY, String(nextBalance));

  const transaction: PortfolioTransaction = {
    id: `${operationType}-${Date.now()}`,
    type: operationType === "buy" ? "Buy" : "Sell",
    symbol: assetSymbol.toUpperCase(),
    amount,
    date: new Date().toLocaleDateString("en-US"),
    status: "Completed",
  };

  const previousTransactions = readDemoTransactions(storage);
  storage.setItem(
    DEMO_TRANSACTIONS_KEY,
    JSON.stringify([transaction, ...previousTransactions].slice(0, 8))
  );

  return {
    ok: true,
    balance: nextBalance,
    transaction,
  };
}
