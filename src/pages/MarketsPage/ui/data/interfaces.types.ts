export interface ObjectType {
  name: string;
  price: number;
  category: string;
  change: number;
}

export interface StockStats {
    title: string,
    value: string | number
}


export interface MarketSentimentItem {
  type: "Bullish" | "Bearish";
  value: number;
  color: string
}

export interface MarketSentimentProps {
  data: MarketSentimentItem[];
}