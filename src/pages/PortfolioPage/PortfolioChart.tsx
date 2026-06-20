import { useState } from "react"
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts"
import type { TooltipProps } from "recharts"

type Range = "1D" | "1W" | "1M" | "1Y" | "ALL"

interface DataPoint {
  date: string
  value: number
}

// --- генератор ---
function generateData(points: number, labelFn: (i: number) => string): DataPoint[] {
  let value = 1_100_000
  return Array.from({ length: points }, (_, i) => {
    const change = (Math.random() - 0.45) * 0.02
    value = Math.round(value * (1 + change))
    return { date: labelFn(i), value }
  })
}

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
const DAYS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]

const DATASETS: Record<Range, DataPoint[]> = {
  "1D":  generateData(24,  i => `${String(i).padStart(2,"0")}:00`),
  "1W":  generateData(7,   i => DAYS[i]),
  "1M":  generateData(30,  i => `${i + 1}`),
  "1Y":  generateData(12,  i => MONTHS[i]),
  "ALL": generateData(5,   i => `${2020 + i}`),
}

// --- тултип ---
const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-[#1a1f2e] border border-white/10 rounded-lg px-3 py-2">
      <p className="text-white text-sm font-medium">
        ${payload[0].value?.toLocaleString()}
      </p>
      <p className="text-white/50 text-xs mt-0.5">{label}</p>
    </div>
  )
}

export function PortfolioChart() {
  const [range, setRange] = useState<Range>("1Y")

  const data = DATASETS[range]
  const first = data[0].value
  const last = data[data.length - 1].value
  const isUp = last >= first
  const diff = last - first
  const pct = ((diff / first) * 100).toFixed(1)

  return (
    <div className="bg-[#111827] rounded-2xl p-6">
      <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-2">
        Total Portfolio Value
      </p>

      <div className="flex items-start justify-between mb-1">
        <h2 className="text-white text-4xl font-semibold">
          ${last.toLocaleString()}
        </h2>

        <div className="flex gap-1 bg-white/5 rounded-lg p-1">
          {(["1D","1W","1M","1Y","ALL"] as Range[]).map(r => (
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

      <div className={`flex items-center gap-1.5 text-sm mb-6 ${isUp ? "text-emerald-400" : "text-red-400"}`}>
        <span>{isUp ? "▲" : "▼"}</span>
        <span className="font-medium">{isUp ? "+" : ""}{pct}%</span>
        <span className="opacity-70">
          {isUp ? "+" : ""}${Math.abs(diff).toLocaleString()} this year
        </span>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={isUp ? "#34d399" : "#f87171"} stopOpacity={0.2} />
              <stop offset="100%" stopColor={isUp ? "#34d399" : "#f87171"} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: "rgba(255,255,255,0.1)" }} />
          <Area
            type="natural"
            dataKey="value"
            stroke={isUp ? "#34d399" : "#f87171"}
            strokeWidth={2}
            fill="url(#grad)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}