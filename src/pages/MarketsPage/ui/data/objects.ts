import type {
  ObjectType,
  StockStats,
  MarketSentimentItem,
  CompanyData,
} from "./interfaces.types";

export const BTCObject: ObjectType = {
  name: "Bitcoin",
  price: 43256.78,
  category: "Technology • Consumer Electronics • Cupertino, CA",
  change: 2.45,
};

export const marketSentiment: MarketSentimentItem[] = [
  {
    type: "Bullish",
    value: 53,
    color: "text-positive"
  },
  {
    type: "Bearish",
    value: 47,
    color: "text-negative"
  },
];

export const stockStatsData: StockStats[] = [
  {
    title: "Market Cap",
    value: "$2.98T",
  },
  {
    title: "P/E Ratio",
    value: "31.42",
  },
  {
    title: "Div. Yield",
    value: "0.51%",
  },
  {
    title: "Avg. Volume",
    value: "54.2M",
  },
];

export const companyData:CompanyData = {
  ceo: "Tim Cook",
  founded: 1976,
  employees: "161,000"
}