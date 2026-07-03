export interface PortfolioAllocation {
  name: string;
  value: number;
}

export interface PortfolioHolding {
  id: string;
  symbol: string;
  shares: number;
  avgPrice: number;
  currentPrice: number;
  value: number;
  changePercent: number;
}

export interface PortfolioTransaction {
  id: string;
  type: string;
  symbol: string;
  amount: number;
  date: string;
  status: string;
}

export interface PortfolioData {
  allocation: PortfolioAllocation[];
  holdings: PortfolioHolding[];
  transactions: PortfolioTransaction[];
}
