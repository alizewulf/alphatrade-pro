import type { PortfolioTransaction } from "@/entities/portfolio";

export const DEFAULT_TRANSACTIONS: PortfolioTransaction[] = [
  {
    id: "default-1",
    type: "Buy",
    symbol: "AMD",
    amount: 12313,
    date: "Oct 23, 2:45 PM",
    status: "completed",
  },
  {
    id: "default-2",
    type: "Reinvested",
    symbol: "DIV",
    amount: 7.71,
    date: "Nov 04, 10:15 AM",
    status: "reinvested",
  },
  {
    id: "default-3",
    type: "Buy",
    symbol: "TSLA",
    amount: 250,
    date: "Dec 11, 9:05 AM",
    status: "completed",
  },
];
