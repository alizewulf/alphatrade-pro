import { useState } from "react";
import { submitDemoTrade } from "../lib/demoTrade";
import { normalizeAmount } from "../lib/normalizeAmount";
import { useTradeContext } from "./tradeContext";

export function useTrade() {
  const { addOrder, updateBalance } = useTradeContext();

  const [operationType, setOperationType] = useState<"buy" | "sell">("buy");

  const [input, setInput] = useState({
    assetSymbol: "BTC",
    amount: "",
  });

  const [feedback, setFeedback] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setAmount = (value: string) => {
    const sanitized = value.replace(/[^0-9.]/g, "");
    const parts = sanitized.split(".");

    if (parts.length > 2) {
      value = `${parts[0]}.${parts.slice(1).join("")}`;
    }

    if (parts.length === 2) {
      value = `${parts[0] || "0"}.${parts[1].slice(0, 2)}`;
    }

    setInput((prev) => ({
      ...prev,
      amount: normalizeAmount(value),
    }));
  };

  const submit = () => {
    setIsSubmitting(true);
    setFeedback(null);

    try {
      if (!input.amount || Number(input.amount) <= 0) {
        setFeedback("Enter valid amount");
        return;
      }

      const result = submitDemoTrade({
        operationType,
        assetSymbol: input.assetSymbol,
        amount: Number(input.amount),
      });

      if (!result.ok) {
        setFeedback(result.error ?? "Error");
        return;
      }

      if (result.transaction) {
        addOrder({
          id: result.transaction.id,
          symbol: result.transaction.symbol,
          type: operationType,
          amount: result.transaction.amount,
          createdAt: result.transaction.date,
        });
      }

      updateBalance(result.balance);

      setFeedback(`${operationType} order submitted`);

      setInput({
        assetSymbol: "BTC",
        amount: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    operationType,
    setOperationType,

    input,
    setInput,

    setAmount,

    submit,

    feedback,
    isSubmitting,
  };
}

