import Loupe from './Loupe';
import { useState } from 'react';

function AppInput() {
  const [loupeIsShowed, changeLoupeState] = useState(true);
  return (
    <>
    <div className="relative">
        <input
        placeholder="Search markets..."
        className="font-inter text-sm text-[#8C909F] bg-appinput-bg outline outline-[#424754]/10 rounded-xl py-2 placeholder:pl-[33.5px]"
        onFocus={() => changeLoupeState(false)}
        onBlur={() => changeLoupeState(true)}
        />

        {loupeIsShowed && (
            <Loupe className="absolute top-1/2 -translate-y-1/2 left-3"/>
        )}
    </div>
    </>
  );
}

export default AppInput