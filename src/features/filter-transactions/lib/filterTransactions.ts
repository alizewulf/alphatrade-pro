import type { PortfolioTransaction } from "@/entities/portfolio";

export type FilterOption = "all" | "Buy" | "Sell" | "Reinvested";

export const FILTER_OPTIONS: { label: string; value: FilterOption }[] = [
  { label: "All", value: "all" },
  { label: "Buy", value: "Buy" },
  { label: "Sell", value: "Sell" },
  { label: "Reinvested", value: "Reinvested" },
];

export function filterTransactions(
  transactions: PortfolioTransaction[],
  filter: FilterOption,
): PortfolioTransaction[] {
  if (filter === "all") return transactions;
  return transactions.filter((tx) => tx.type === filter);
}

