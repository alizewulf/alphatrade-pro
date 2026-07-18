import { useState } from "react";
import { submitDemoTrade } from "../lib/demoTrade";

export function useTrade() {
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

    setInput(prev => ({
      ...prev,
      amount: value
    }));
  };


  const submit = () => {
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const result = submitDemoTrade({
        operationType,
        assetSymbol: input.assetSymbol,
        amount: Number(input.amount),
      });


      if (!result.ok) {
        setFeedback(result.error ?? "Error");
        return;
      }


      window.dispatchEvent(
        new Event("alpha-trade-demo-updated")
      );


      setFeedback(
        `${operationType} order submitted`
      );

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