import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { CustomTooltip } from "../CustomToolTip";

interface ChartPoint {
  date: string;
  value: number;
}

interface PortfolioAreaChartProps {
  data: ChartPoint[];
  isUp: boolean;
}

function PortfolioAreaChart({ data, isUp }: PortfolioAreaChartProps) {
  return (
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

        <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#ADC6FF" }} />

        <Area
          type="natural"
          dataKey="value"
          stroke={isUp ? "#ADC6FF" : "#f87171"}
          strokeWidth={2}
          fill="url(#grad)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default PortfolioAreaChart;