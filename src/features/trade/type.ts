interface Button {
    state: "buy" | "sell";
    onClick: () => void;
    variant: Variants
}

export type ButtonTradeProps = Partial<Omit<Button, "variant">> & Pick<Button, "variant">

type Variants = "primary" | "secondary"