import { useEffect, useState } from "react";
import { appendNextCandle, createInitialCandles } from "../model/candleSimulation";
import type { Candle } from "../model/candleSimulation";

type Options = {
  count?: number;
  maxCandles?: number;
  intervalMs?: number;
};

export function useCandleSimulation(options: Options = {}) {
  const { count = 24, maxCandles = 36, intervalMs = 1400 } = options;
  const [candles, setCandles] = useState<Candle[]>(() => createInitialCandles(count));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCandles((prev) => appendNextCandle(prev, maxCandles));
    }, intervalMs);

    return () => window.clearInterval(interval);
  }, [intervalMs, maxCandles]);

  return candles;
}
