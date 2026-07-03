function MSContainer({ bgColor }: { bgColor: string }) {
  return (
    <div
      className={`flex flex-col px-12 py-8 ${bgColor} w-1/5 font-inter justify-between`}
    >
      <p className="text-paragraph font-semibold text-xs text-center tracking-[0.6px] leading-3 uppercase">
        Market sentiment
      </p>
      <div className="flex text-[#4EDEA3] flex-col justify-center items-center gap-2">
        <p className="font-bold text-xl leading-7">Greed</p>
        <p className="font-semibold leading-3 tracking-[0.6px] text-xs">
          74/100
        </p>
      </div>
    </div>
  );
}

export default MSContainer;
