import type { Holding } from "../grid/types";

export const holdings: Holding[] = [
  {
    symbol: "NVDA",
    companyName: "Nvidia Corp.",
    initials: "NV",
    qty: 450,
    avgCost: 112.40,
    marketPrice: 143.20,
    plValue: 13860,
    plPercent: 27.4,
  },
  {
    symbol: "TSLA",
    companyName: "Tesla, Inc.",
    initials:"TS",
    qty: 120,
    avgCost: 242.15,
    marketPrice: 218.40,
    plValue: 13860,
    plPercent: 9.8 /* Убыток */
  },
  {
    symbol: "AAPL",
    companyName: "Apple Inc.",
    initials:"AA",
    qty: 800,
    avgCost: 175.50,
    marketPrice: 231.44,
    plValue: 44.752,
    plPercent: 31.8
  },
  {
    symbol: "MSFT",
    companyName: "Microsoft Corp.",
    initials:"MS",
    qty: 250,
    avgCost: 402.10,
    marketPrice: 418.15,

    plValue: 4012.50,
    plPercent: 3.9
  },
]