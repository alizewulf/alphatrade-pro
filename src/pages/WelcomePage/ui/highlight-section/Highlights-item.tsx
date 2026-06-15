import ArrowIcon from "../../icons/ArrowIcon";
import HighlightsHeader from "./Highlights-header";
import HighlightsMain from "./Highlights-main";
import HighlightsProgressbar from "./Highlights-progressbar";

type HighlightItemProps = {
  title: string;
  company: string;
  num: string;
  percent: string;
  scheme: "positive" | "negative";
  progress: string;
  variation: "primary" | "secondary"
};

function HighlightItem({
  title,
  company,
  num,
  percent,
  scheme,
  progress,
  variation
}: HighlightItemProps) {
  const setbg = variation === "primary"? "bg-[#1E293B]/70" : "bg-[#10B981]/20"
  return (
    <div className={`flex p-6 gap-4 ${setbg} rounded-lg font-inter flex-col`}>
      <div className="flex justify-between">
        <HighlightsHeader title={title} company={company} />
        <ArrowIcon scheme={scheme} />
      </div>

      <HighlightsMain scheme={scheme} num={num} percent={percent} />

      <HighlightsProgressbar scheme={scheme} width={progress} />
    </div>
  );
}

export default HighlightItem;
