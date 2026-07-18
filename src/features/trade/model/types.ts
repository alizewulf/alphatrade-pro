interface Button {
    state: "buy" | "sell";
    onClick: () => void;
    variant: Variants
}

export type ButtonTradeProps = Partial<Omit<Button, "variant">> & Pick<Button, "variant">

type Variants = "primary" | "secondary"

export interface TradeOrder {
  id: string;
  symbol: string;
  type: "buy" | "sell";
  amount: number;
  createdAt: string;
}

