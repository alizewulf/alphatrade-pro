import { useState } from "react";
import { submitDemoTrade } from "../lib/demoTrade";
import { normalizeAmount } from "../lib/normalizeAmount";
import { useTradeContext } from "./tradeContext";

export function useTrade() {
  const { addOrder, updateBalance } = useTradeContext();

  const [operationType, setOperationType] = useState<"buy" | "sell">("buy");

  const [input, setInput] = useState({
    assetSymbol: "BTC",
    amount: "1",
  });

  const [feedback, setFeedback] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

const setAmount = (value: string) => {
  const sanitized = value.replace(/[^0-9.]/g, "");

  if (!sanitized) {
    setInput((prev) => ({
      ...prev,
      amount: input.amount
    }));
    return;
  }

  const parts = sanitized.split(".");

  let normalized = sanitized;

  if (parts.length > 2) {
    normalized = `${parts[0]}.${parts.slice(1).join("")}`;
  }

  if (parts.length === 2) {
    normalized = `${parts[0] || "0"}.${parts[1].slice(0, 2)}`;
  }

  setInput((prev) => ({
    ...prev,
    amount: normalizeAmount(normalized),
  }));
};

  const submit = () => {
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const amountNum = Number(input.amount);

      if (!input.amount || !Number.isFinite(amountNum) || amountNum <= 0) {
        setFeedback("Enter valid amount");
        console.log(input.amount)
        return;
      }


      const result = submitDemoTrade({
        operationType,
        assetSymbol: input.assetSymbol,
        amount: amountNum,
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

      // amount не сбрасываем после успешного submit
      // (требование: введенное значение должно оставаться в поле)
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

