import type { ComponentType, SVGProps } from "react";

export interface ObjectType {
  name: string;
  price: number;
  category: string;
  change: number;
}

export interface StockStats {
  title: string;
  value: string | number;
}

export interface MarketSentimentItem {
  type: "Bullish" | "Bearish";
  value: number;
  color: string;
}

export interface MarketSentimentProps {
  data: MarketSentimentItem[];
}

export interface CompanyData {
  ceo: string;
  founded: number;
  employees: string;
}

export interface CompanyNews {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string,
  time: string,
  source: string,
  color: string
}

export interface RecentViewData{
  abr: string,
  companyName: string,
  stock: number,
  change: number
}