import { useState } from "react";
import { generateData, type DataPoint } from "../generator";
import { DAYS, MONTHS } from "../datesConfig";
import PortfolioAreaChart from "./PortfolioAreaChartSVG";
import UserBalanceContainer from "./UserBalanceContainer";
import Indicator from "./Indicator";
import PortfolioChartWrapper from "./PortfolioChartWrapper";

export type Range = "1D" | "1W" | "1M" | "1Y" | "ALL";
const DATASETS: Record<Range, DataPoint[]> = {
  "1D": generateData(24, (i) => `${String(i).padStart(2, "0")}:00`),
  "1W": generateData(7, (i) => DAYS[i]),
  "1M": generateData(30, (i) => `${i + 1}`),
  "1Y": generateData(12, (i) => MONTHS[i]),
  ALL: generateData(5, (i) => `${2022 + i}`),
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
    <PortfolioChartWrapper>
      <UserBalanceContainer
        balance={balance}
        setRange={setRange}
        range={range}
      />

      <Indicator diff={diff} isUp={isUp} pct={pct} />

      <PortfolioAreaChart data={data} isUp={isUp} />
    </PortfolioChartWrapper>
  );
}
