export default function EstimatedPriceField({price}:{price:number}) {
  return (
    <div className="flex gap-1.25 w-full flex-col">
      <span className="font-semibold text-xs text-paragraph tracking-[0.6px] leading-3">
        Estimated Price
      </span>
      <p className="bg-[#131B2E] rounded-sm font-semibold text-xl text-[#DAE2FD] outline-none w-full px-4 py-3">{price}</p>
    </div>
  );
}

