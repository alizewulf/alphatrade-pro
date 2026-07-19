export type Candle = {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
};

export const INITIAL_PRICE = 43256.78;

export function createCandle(prevClose: number, index: number): Candle {
  const drift = (Math.random() - 0.5) * 1400;
  const open = prevClose + drift;
  const close = open + (Math.random() - 0.5) * 1200;
  const high = Math.max(open, close) + Math.random() * 450 + 80;
  const low = Math.min(open, close) - Math.random() * 450 - 80;

  return {
    time: `T${index + 1}`,
    open,
    high,
    low,
    close,
  };
}

export function createInitialCandles(count = 24): Candle[] {
  let prevClose = INITIAL_PRICE;

  return Array.from({ length: count }, (_, index) => {
    const candle = createCandle(prevClose, index);
    prevClose = candle.close;
    return candle;
  });
}

export function appendNextCandle(prevCandles: Candle[], maxCandles = 36): Candle[] {
  const last = prevCandles[prevCandles.length - 1];
  const next = createCandle(last?.close ?? INITIAL_PRICE, prevCandles.length);
  const nextSlice = prevCandles.length >= maxCandles ? prevCandles.slice(-35) : prevCandles;

  return [...nextSlice, next];
}

export function getChartMetrics(candles: Candle[]) {
  const values = candles.flatMap((candle) => [candle.low, candle.high]);
  const min = Math.min(...values) * 0.995;
  const max = Math.max(...values) * 1.005;
  const spread = Math.max(max - min, 1);

  return { min, max, spread };
}
