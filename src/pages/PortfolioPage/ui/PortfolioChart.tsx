import { useState } from "react";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { CustomTooltip } from "./CustomToolTip";
import { generateData, type DataPoint } from "../generator";
import { DAYS, MONTHS } from "../datesConfig";
import ArrowSVG from "./icons/ArrowSVG";
type Range = "1D" | "1W" | "1M" | "1Y" | "ALL";

const DATASETS: Record<Range, DataPoint[]> = {
  "1D": generateData(24, (i) => `${String(i).padStart(2, "0")}:00`),
  "1W": generateData(7, (i) => DAYS[i]),
  "1M": generateData(30, (i) => `${i + 1}`),
  "1Y": generateData(12, (i) => MONTHS[i]),
  ALL: generateData(5, (i) => `${2020 + i}`),
};

export function PortfolioChart({ balance }: { balance: number }) {
  const [range, setRange] = useState<Range>("1Y");

  const data = DATASETS[range];
  const first = data[0].value;
  const last = data[data.length - 1].value;
  const isUp = last >= first;
  const diff = last - first;
  const pct = ((diff / first) * 100).toFixed(1);

  return (
    <div className="bg-[#111827] font-inter rounded-2xl p-6">
      <p className="text-[#C2C6D6] text-xs font-semibold leading-3  tracking-widest uppercase mb-2">
        Total Portfolio Value
      </p>

      <div className="flex items-start justify-between mb-1">
        <h2 className="text-[#DAE2FD] text-5xl leading-[52.8px] tracking-[0.96px] font-bold">
          ${balance.toString()}
        </h2>

        <div className="flex gap-1 bg-white/5 rounded-lg p-1">
          {(["1D", "1W", "1M", "1Y", "ALL"] as Range[]).map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                range === r
                  ? "bg-white/15 text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div
        className={`flex items-center gap-1.5 text-sm mb-6 ${isUp ? "text-[#4EDEA3]" : "text-red-400"}`}
      >
        <span>{isUp ? <ArrowSVG variant="up"/> : <ArrowSVG variant="down"/>}</span>
        <span className="text-base leading-6">
          {isUp ? "+" : ""}
          {pct}%
        </span>
        <span className="text-[#C2C6D6] text-base leading-6">
          {isUp ? "+" : ""}${Math.abs(diff).toLocaleString()} this year
        </span>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor={isUp ? "#ADC6FF" : "#f87171"}
                stopOpacity={0.2}
              />
              <stop
                offset="100%"
                stopColor={isUp ? "#ADC6FF" : "#f87171"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: "#ADC6FF" }}
          />
          <Area
            type="natural"
            dataKey="value"
            stroke={isUp ? "#ADC6FF" : "#f87171"}
            strokeWidth={2}
            fill="url(#grad)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
