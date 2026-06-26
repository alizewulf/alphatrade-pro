import ArrowIcon from "@/shared/ui/icons/ArrowIcon";
import ClockSVG from "../../../ui/icons/Clock";

function ValueFooter() {
  return (
    <div className="flex font-inter items-center flex-row gap-4">
      <span className="flex items-center gap-2 text-[#4EDEA3] text-xs font-semibold tracking-[0.6px] leading-3">
        <ArrowIcon scheme="positive" />
        Bullish Trend
      </span>

      <span className="flex items-center gap-2 text-[#C2C6D6] text-xs font-semibold tracking-[0.6px] leading-3">
        <ClockSVG />
        Last Updated:{" "}
        {new Date().toLocaleString("en-US", {
          timeZone: "UTC",
          minute: "2-digit",
          hour: "2-digit",
          second: "2-digit",
        })}
      </span>
    </div>
  );
}

export default ValueFooter;
