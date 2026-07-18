import React from "react";

type InputTypes = "number"

interface InputProps {
    type: InputTypes
    state: any,
    setState: any
}

function TradeExecutionInput({type, setState, state}:InputProps): React.JSX.Element {
    const classes:string = `rounded-sm bg-[#0B1326] font-semibold text-xl text-[#DAE2FD] outline-none w-max appearance-none placeholder:appearance-none px-4 py-3`
  return (
    <>
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        type={type}
        className={`${classes}`}
      />
    </>
  );
}

export default TradeExecutionInput;
