import type {
  InputHTMLAttributes,
  KeyboardEventHandler,
  ReactNode,
  WheelEventHandler,
} from "react";

interface TradeContainerProps {
  item: {
    title: string;
    value?: string;
    placeholder?: string;
  };
  placeholder?: boolean;
  value: string;
  onChange?: (value: string) => void;
  children?: ReactNode;
  type?: string;
  inputMode?: InputHTMLAttributes<HTMLInputElement>["inputMode"];
  min?: string;
  step?: string;
  readOnly?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  onWheel?: WheelEventHandler<HTMLInputElement>;
}

function TradeContainer({
  item,
  value,
  onChange,
  placeholder = false,
  children,
  type = "text",
  inputMode,
  min,
  step,
  readOnly = false,
  onFocus,
  onBlur,
  onKeyDown,
  onWheel,
}: TradeContainerProps) {
  return (
    <div className="flex flex-col gap-2 px-4">
      <span className="text-paragraph text-base leading-6">{item.title}</span>

      <div className="relative w-full">
        {!value && item.value && (
          <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-[#DAE2FD] text-base leading-6">
            {item.value}
          </span>
        )}

        {children}

        <input
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder ? item.placeholder : ""}
          type={type}
          inputMode={inputMode}
          min={min}
          step={step}
          readOnly={readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          onWheel={onWheel}
          className="h-10 w-full rounded-sm bg-[#060E20] text-white placeholder:ml-3 placeholder:text-right placeholder:text-paragraph [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
      </div>
    </div>
  );
}

export default TradeContainer;