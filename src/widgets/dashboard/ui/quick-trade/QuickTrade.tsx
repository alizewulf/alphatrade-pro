import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import Container from "@/shared/ui/container";

import XIcon from "../../icons/XIcon";

import BuyButton from "@/features/trade/buy-order/ui/BuyButton";
import SellButton from "@/features/trade/sell-order/ui/SellButton";
import TradeContainer from "./TradeContainer";

import { useTrade } from "@/features/trade/model/useTrade";
import { ASSET_OPTIONS } from "@/features/trade/model/assets";

function QuickTrade() {
  const [hidden, setHidden] = useState(true);
  const [showAssetList, setShowAssetList] = useState(false);

  const trade = useTrade();

  return (
    <AnimatePresence mode="wait">
      {!hidden && (
        <motion.div
          key="quick-trade"
          initial={{
            opacity: 0,
            x: -20,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: -20,
            scale: 0.95,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className="absolute -top-2 left-0"
        >
          <Container className="flex w-85 h-85 flex-col gap-4 overflow-hidden p-0! backdrop-blur-sm">
            <div
              className="
              flex items-center justify-between
              rounded-tl-lg rounded-tr-lg
              bg-[#ADC6FF]
              px-4 py-3
              font-inter
            "
            >
              <span
                className="
                text-xs font-bold
                tracking-[0.6px]
                text-[#002E6A]
                leading-3
              "
              >
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
                variant="primary"
                state={trade.operationType}
                onClick={() => trade.setOperationType("buy")}
              />

              <SellButton
                variant="primary"
                state={trade.operationType}
                onClick={() => trade.setOperationType("sell")}
              />
            </div>

            <div className="flex flex-col gap-2 px-4">
              <span
                className="
                text-paragraph
                text-base
                leading-6
              "
              >
                Asset
              </span>
              <div className="relative w-full">
                <input
                  value={trade.input.assetSymbol}
                  readOnly
                  onFocus={() => setShowAssetList(true)}
                  onBlur={() =>
                    window.setTimeout(() => setShowAssetList(false), 120)
                  }
                  placeholder="Select asset"
                  className="
                    h-10
                    w-full
                    rounded-sm
                    bg-[#060E20]
                    text-white
                    placeholder:text-paragraph
                  "
                />

                {showAssetList && (
                  <div
                    className="
                    absolute
                    z-20
                    mt-1
                    w-full
                    rounded-sm
                    border
                    border-white/10
                    bg-[#060E20]
                    shadow-lg
                  "
                  >
                    {ASSET_OPTIONS.map((asset) => (
                      <button
                        key={asset.symbol}
                        type="button"
                        className="
                          flex
                          w-full
                          items-center
                          justify-between
                          px-3
                          py-2
                          text-left
                          text-sm
                          text-[#DAE2FD]
                          transition
                          hover:bg-white/10
                        "
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={() => {
                          trade.setInput((prev) => ({
                            ...prev,
                            assetSymbol: asset.symbol,
                          }));

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
              value={trade.input.amount}
              onChange={trade.setAmount}
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
                className="
                  w-full
                  rounded-lg
                  bg-[#ADC6FF]
                  px-3
                  py-3
                  font-bold
                  text-[#002E6A]
                  cursor-pointer
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                "
                onClick={trade.submit}
                disabled={trade.isSubmitting}
              >
                {trade.isSubmitting
                  ? "Processing..."
                  : trade.operationType === "buy"
                    ? "Review Buy Order"
                    : "Review Sell Order"}
              </button>
            </div>

            {trade.feedback && (
              <p
                className={`
                  px-4 text-sm
                  ${
                    trade.feedback.includes("Insufficient") ||
                    trade.feedback.includes("wrong")
                      ? "text-[#FF6B6B]"
                      : "text-[#4EDEA3]"
                  }
                `}
              >
                {trade.feedback}
              </p>
            )}
          </Container>
        </motion.div>
      )}

      {hidden && (
        <motion.button
          key="open-button"
          initial={{
            opacity: 0,
            x: 20,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            x: 20,
            scale: 0.8,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          className="
            absolute
            -top-2
            -right-8
            flex
            h-10
            w-10
            cursor-pointer
            items-center
            justify-center
            rounded-bl-full
            rounded-tl-full
            bg-[#ADC6FF]
          "
          onClick={() => setHidden(false)}
        >
          <span
            className="
            text-xs
            font-bold
            tracking-[0.6px]
            text-[#002E6A]
            leading-3
          "
          >
            +
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default QuickTrade;
