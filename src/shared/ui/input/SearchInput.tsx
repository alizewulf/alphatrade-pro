import { useState } from "react";
import { Loupe } from "@/shared/ui/icons";

interface InputProps {
  width: Width
}

type Width = "sm" | "md"

function SearchInput({width = "sm"}:InputProps) {
  const [showLoupe, setShowLoupe] = useState(true);

  return (
    <div className="relative">
      <input
        placeholder="Search markets..."
        className={`font-inter text-sm text-[#8C909F] bg-appinput-bg outline outline-[#424754]/10 rounded-xl py-2 pl-10 pr-4 ${width === "sm" && "w-60"} ${width === "md" && "w-md"} placeholder:text-[#8C909F]`}
        onFocus={() => setShowLoupe(false)}
        onBlur={() => setShowLoupe(true)}
      />

      {showLoupe && (
        <Loupe className="absolute top-1/2 -translate-y-1/2 left-3" />
      )}
    </div>
  );
}

export default SearchInput;
