export type MoveItem = {
  symbol: string;
  price: string;
  change: string;
};

export type TopMoveItemProps = {
  type: "gainer" | "loser";
  items: MoveItem[];
  gap: number;
};