export interface Holding {
  symbol: string
  companyName: string
  initials: string
  qty: number
  avgCost: number
  marketPrice: number
  plValue: number
  plPercent: number
}

export interface GridElementProps {
  symbol: string;
  companyName: string;
  initials: string;
  qty: number;
  avgCost: number;
  marketPrice: number;
  plValue: number;
  plPercent: number;
}