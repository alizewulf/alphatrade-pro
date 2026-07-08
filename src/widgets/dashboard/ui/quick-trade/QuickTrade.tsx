import Container from "@/shared/ui/container";
import XIcon from "./icons/XIcon";
import BuyButton from "@/features/trade/buy-order/ui/BuyButton";
import SellButton from "@/features/trade/sell-order/ui/SellButton";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import TradeContainer from "./TradeContainer";
import { submitDemoTrade } from "@/features/trade/lib/demoTrade";

const ASSET_OPTIONS = [
  { symbol: "BTC", name: "Bitcoin" },
  { symbol: "ETH", name: "Ethereum" },
  { symbol: "SOL", name: "Solana" },
  { symbol: "XRP", name: "Ripple" },
  { symbol: "ADA", name: "Cardano" },
  { symbol: "DOGE", name: "Dogecoin" },
  { symbol: "LINK", name: "Chainlink" },
];

function QuickTrade() {
  const [operationType, setOperationType] = useState<"buy" | "sell">("buy");
  const [hidden, setHidden] = useState(true);
  const [input, setInput] = useState({
    assetSymbol: "BTC",
    amount: "",
  });
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAssetList, setShowAssetList] = useState(false);

  const normalizeAmount = (value: string) => {
    const sanitized = value.replace(/[^0-9.]/g, "");
    const parts = sanitized.split(".");

    if (parts.length > 2) {
      return `${parts[0]}.${parts.slice(1).join("").replace(/\./g, "")}`;
    }

    if (parts.length === 2) {
      return `${parts[0] || "0"}.${parts[1].slice(0, 2)}`;
    }

    return sanitized;
  };

  const handleReviewOrder = () => {
    const amountValue = Number(input.amount);

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const result = submitDemoTrade({
        operationType,
        assetSymbol: input.assetSymbol,
        amount: amountValue,
      });

      if (!result.ok) {
        setFeedback(result.error ?? "Something went wrong while processing the order.");
        setIsSubmitting(false);
        return;
      }

      window.dispatchEvent(new Event("alpha-trade-demo-updated"));
      setInput({ assetSymbol: "", amount: "" });
      setFeedback(
        `${operationType === "buy" ? "Buy" : "Sell"} order submitted for ${result.transaction?.symbol ?? input.assetSymbol.toUpperCase()}.`
      );
    } catch {
      setFeedback("Something went wrong while processing the order.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {!hidden && (
        <motion.div
          key="quick-trade"
          initial={{ opacity: 0, x: -20, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -20, scale: 0.95 }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className="absolute -top-2 left-0"
        >
          <Container className="flex w-85 h-85 flex-col gap-4 overflow-hidden p-0! backdrop-blur-sm">
            <div className="flex items-center justify-between rounded-tl-lg rounded-tr-lg bg-[#ADC6FF] px-4 py-3 font-inter">
              <span className="text-xs font-bold tracking-[0.6px] text-[#002E6A] leading-3">
                QUICK TRADE
              </span>

              <button
                className="cursor-pointer"
                onClick={() => setHidden(true)}
              >
                <XIcon />
              </button>
            </div>

            <div className="flex justify-between gap-2 px-4">
              <BuyButton
                state={operationType}
                onClick={() => setOperationType("buy")}
              />

              <SellButton
                state={operationType}
                onClick={() => setOperationType("sell")}
              />
            </div>

            <div className="flex flex-col gap-2 px-4">
              <span className="text-paragraph text-base leading-6">Asset</span>

              <div className="relative w-full">
                <input
                  value={input.assetSymbol}
                  readOnly
                  onFocus={() => setShowAssetList(true)}
                  onBlur={() => window.setTimeout(() => setShowAssetList(false), 120)}
                  placeholder="Select asset"
                  className="h-10 w-full rounded-sm bg-[#060E20] text-white placeholder:text-paragraph"
                />

                {showAssetList && (
                  <div className="absolute z-20 mt-1 w-full rounded-sm border border-white/10 bg-[#060E20] shadow-lg">
                    {ASSET_OPTIONS.map((asset) => (
                      <button
                        key={asset.symbol}
                        type="button"
                        className="flex w-full items-center justify-between px-3 py-2 text-left text-sm text-[#DAE2FD] transition hover:bg-white/10"
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => {
                          setInput((prev) => ({ ...prev, assetSymbol: asset.symbol }));
                          setShowAssetList(false);
                        }}
                      >
                        <span>{asset.name}</span>
                        <span className="text-[#ADC6FF]">{asset.symbol}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <TradeContainer
              item={{
                title: "Amount (USD)",
                value: "0.00",
              }}
              value={input.amount}
              onChange={(value) =>
                setInput((prev) => ({ ...prev, amount: normalizeAmount(value) }))
              }
              type="text"
              inputMode="decimal"
              onKeyDown={(event) => {
                if (["e", "E", "+", "-"].includes(event.key)) {
                  event.preventDefault();
                }
              }}
              onWheel={(event) => event.currentTarget.blur()}
            />

            <div className="w-full px-3">
              <button
                type="button"
                className="w-full rounded-lg bg-[#ADC6FF] px-3 py-3 font-bold text-[#002E6A] cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
                onClick={handleReviewOrder}
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Processing..."
                  : operationType === "buy"
                    ? "Review Buy Order"
                    : "Review Sell Order"}
              </button>
            </div>

            {feedback && (
              <p
                className={`px-4 text-sm ${feedback.includes("Insufficient") || feedback.includes("wrong") ? "text-[#FF6B6B]" : "text-[#4EDEA3]"}`}
              >
                {feedback}
              </p>
            )}
          </Container>
        </motion.div>
      )}

      {hidden && (
        <motion.button
          key="open-button"
          initial={{ opacity: 0, x: 20, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 20, scale: 0.8 }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          className="absolute -top-2 -right-8 flex h-10 w-10 cursor-pointer items-center justify-center rounded-bl-full rounded-tl-full bg-[#ADC6FF]"
          onClick={() => setHidden(false)}
        >
          <span className="text-xs font-bold tracking-[0.6px] text-[#002E6A] leading-3">
            +
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default QuickTrade;
