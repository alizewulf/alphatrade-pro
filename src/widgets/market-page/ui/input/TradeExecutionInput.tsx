import React from "react";

type InputTypes = "number" | "string"
type bgColors = "primary" | "secondary"

interface InputProps {
    type: InputTypes
    bgColor: bgColors
}

function TradeExecutionInput({type, bgColor}:InputProps): React.JSX.Element {
    const classes:string = `rounded-sm ${bgColor === "primary"? "bg-[#0B1326]" : "bg-[#131B2E]"} font-semibold text-xl text-[#DAE2FD] outline-none w-max appearance-none placeholder:appearance-none px-4 py-3`
  return (
    <>
      <input
        type={type}
        className={`${classes}`}
      />
    </>
  );
}

export default TradeExecutionInput;
