import Container from "@/shared/ui/container";
import XIcon from "./icons/XIcon";
import BuyButton from "@/features/trade/buy-order/ui/BuyButton";
import SellButton from "@/features/trade/sell-order/ui/SellButton";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function QuickTrade() {
  const [operationType, setOperationType] = useState<"buy" | "sell">("buy");
  const [hidden, setHidden] = useState(false);

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