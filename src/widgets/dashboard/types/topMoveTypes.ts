export interface TopMoveItemData {
  symbol: string;
  price: string;
  change: string;
}

export interface TopMoveItemProps {
  type: "gainer" | "loser";
  items: TopMoveItemData[];
  gap?: number;
}
