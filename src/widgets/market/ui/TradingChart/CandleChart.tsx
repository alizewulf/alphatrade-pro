import { useEffect, useMemo } from "react";
import { useCandleSimulation } from "./hooks/useCandleSimulation";
import { getChartMetrics } from "./model/candleSimulation";
import type { ObjectType } from "@/pages/MarketsPage/data/interfaces.types";

const CHART_WIDTH = 900;
const CHART_HEIGHT = 240;
const PADDING = 36;

interface CandleChartProps {
  object: ObjectType;
  onChange: (value: number) => void;
}



function CandleChart({object, onChange}: CandleChartProps) {
  const candles = useCandleSimulation();

  const metrics = useMemo(() => getChartMetrics(candles), [candles]);

  const latest = candles[candles.length - 1];
  const previous = candles[candles.length - 2];
  const changePercent = latest && previous
    ? ((latest.close - previous.close) / previous.close) * 100
    : 0;

  useEffect(() => {
    onChange(changePercent);
  }, [changePercent, onChange]);
  const toY = (value: number) => {
    const ratio = (value - metrics.min) / metrics.spread;
    return PADDING + (1 - ratio) * CHART_HEIGHT;
  };

  const gridLines = Array.from({ length: 5 }, (_, index) => {
    const y = PADDING + (CHART_HEIGHT / 4) * index;
    const labelValue = metrics.min + (metrics.spread / 4) * (4 - index);

    return (
      <g key={y}>
        <line x1={PADDING} x2={CHART_WIDTH + PADDING} y1={y} y2={y} stroke="#1f2937" strokeDasharray="4 4" />
        <text x={8} y={y + 4} fill="#94a3b8" fontSize="11">
          {labelValue.toFixed(0)}
        </text>
      </g>
    );
  });

  return (
    <div className="rounded-3xl border border-slate-800/70 bg-slate-950/80 p-4 shadow-2xl w-10/12 shadow-black/20 max-h-125">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold text-white">{object.name}</p>
        </div>
      </div>

      <div className="h-80 w-full">
        <svg viewBox={`0 0 ${CHART_WIDTH + PADDING * 2} 320`} className="h-full w-full">
          <rect x={PADDING} y={PADDING} width={CHART_WIDTH} height={CHART_HEIGHT} rx="18" fill="#0f172a" stroke="#1e293b" />
          {gridLines}

          {candles.map((candle, index) => {
            const x = PADDING + 18 + index * ((CHART_WIDTH - 36) / Math.max(candles.length - 1, 1));
            const highY = toY(candle.high);
            const lowY = toY(candle.low);
            const openY = toY(candle.open);
            const closeY = toY(candle.close);
            const bodyTop = Math.min(openY, closeY);
            const bodyHeight = Math.max(4, Math.abs(closeY - openY));
            const isUp = candle.close >= candle.open;

            return (
              <g key={`${candle.time}-${index}`}>
                <line x1={x} x2={x} y1={highY} y2={lowY} stroke={isUp ? "#22c55e" : "#ef4444"} strokeWidth="2" />
                <rect
                  x={x - 7}
                  y={bodyTop}
                  width="14"
                  height={bodyHeight}
                  rx="3"
                  fill={isUp ? "#22c55e" : "#ef4444"}
                  opacity="0.95"
                />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

export default CandleChart;
