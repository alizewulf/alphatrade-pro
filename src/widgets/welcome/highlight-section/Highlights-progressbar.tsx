type HighlightsProgressbarProps = {
  width: string;
  scheme: "positive" | "negative"
};

export function HighlightsProgressbar({ width, scheme }: HighlightsProgressbarProps) {
  const setbg = scheme === "positive"? "bg-[#4EDEA3]" : "bg-[#FFB4AB]"
  return (
    <div className="w-64 h-1 bg-[#424754]">
      <div
        className={`h-full ${setbg}`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

export default HighlightsProgressbar;