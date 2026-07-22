import { DEFAULT_SENTIMENT } from "../../data/marketSentiment";

function MSContainer({ bgColor }: { bgColor: string }) {
  return (
    <div className={`flex flex-col justify-between rounded-3xl p-8 ${bgColor} font-inter`}>
      <p className="text-paragraph font-semibold text-xs text-center tracking-[0.6px] leading-3 uppercase">
        Market sentiment
      </p>
      <div className="flex text-positive flex-col justify-center items-center gap-2">
        <p className="font-bold text-xl leading-7">{DEFAULT_SENTIMENT.label}</p>
        <p className="font-semibold leading-3 tracking-[0.6px] text-xs">
          {DEFAULT_SENTIMENT.value}
        </p>
      </div>
    </div>
  );
}

export default MSContainer;
