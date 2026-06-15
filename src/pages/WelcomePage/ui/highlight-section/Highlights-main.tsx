type HighlightsMainProps = {
    num: string
    percent: string
    scheme: "positive" | "negative"
};
function HighlightsMain({num, percent, scheme}:HighlightsMainProps) {
  const setColor = scheme === "positive"? "text-[#4EDEA3]" : "text-[#FFB4AB]"
  return (
    <div className="flex gap-2 items-center">
      <span className="font-semibold leading-[31.2px] text-2xl text-[#DAE2FD]">
        {num}
      </span>
      <span className={`text-sm leading-3.5 ${setColor}`}>{percent}</span>
    </div>
  );
}

export default HighlightsMain;
