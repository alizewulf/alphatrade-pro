import { useState } from "react";
import Loupe from "./Loupe";

function AppInput() {
  const [focused, setFocused] = useState(true);
  return (
    <>
    <div className="relative">
        <input
        placeholder="Search markets..."
        className="font-inter text-sm text-[#8C909F] bg-appinput-bg outline outline-[#424754]/10 rounded-xl py-2 placeholder:pl-[33.5px]"
        onFocus={() => setFocused(false)}
        onBlur={() => setFocused(true)}
        />

        {focused && (
            <Loupe className="absolute top-1/2 -translate-y-1/2 left-3"/>
        )}
    </div>
    </>
  );
}

export default AppInput;
