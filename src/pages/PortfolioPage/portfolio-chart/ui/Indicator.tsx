import ArrowSVG from "./icons/ArrowSVG";

interface IndicatorProps {
    isUp: boolean
    pct: string,
    diff: number
}

function Indicator({pct, isUp, diff}:IndicatorProps) {
  return (
    <div
      className={`flex items-center gap-1.5 text-sm mb-6 ${isUp ? "text-[#4EDEA3]" : "text-[#FFB3AD]"}`}
    >
      <span>
        {isUp ? <ArrowSVG variant="up" /> : <ArrowSVG variant="down" />}
      </span>
      <span className="text-base leading-6">
        {isUp ? "+" : ""}
        {pct}%
      </span>
      <span className="text-paragraph text-base leading-6">
        {isUp ? "+" : ""}${Math.abs(diff).toLocaleString()} this year
      </span>
    </div>
  );
}

export default Indicator;