interface TradeContainerProps {
  item: {
    title: string;
    value?: string;
    placeholder?: string;
  };
  placeholder?: boolean
  value: string;
  onChange: (value: string) => void;
}

function TradeContainer({
  item,
  value,
  onChange,
  placeholder = false,
}: TradeContainerProps) {
  return (
    <div className="flex flex-col gap-2 px-4">
      <span className="text-paragraph text-base leading-6">
        {item.title}
      </span>

      <div className="relative w-full">
        {!value && item.value && (
          <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-[#DAE2FD] text-base leading-6">
            {item.value}
          </span>
        )}

        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder? item.placeholder:""}
          type="text"
          className="bg-[#060E20] h-10 text-white placeholder:text-right placeholder:text-paragraph w-full rounded-sm placeholder:ml-3"
        />
      </div>
    </div>
  );
}

export default TradeContainer;