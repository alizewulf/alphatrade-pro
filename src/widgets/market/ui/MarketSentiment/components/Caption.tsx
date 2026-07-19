import LightningIcon from "@/shared/ui/icons/LightningIcon";
import React from "react";

function Caption(): React.JSX.Element {
  return (
    <div className="bg-[#222A3D] flex flex-row gap-2 p-2 items-center">
      <LightningIcon />
      <span className="text-paragraph text-xs leading-3">
        Social volume for AAPL is up 12% in the last hour following iPhone 16
        leaks.
      </span>
    </div>
  );
}

export default Caption;