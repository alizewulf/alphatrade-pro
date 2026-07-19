import React from "react";

type InputTypes = "number";

interface InputProps {
  type: InputTypes;
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  
}

function TradeExecutionInput({ type, setState, state }: InputProps): React.JSX.Element {
  const classes = `
    rounded-sm 
    bg-[#0B1326] 
    font-semibold 
    text-xl 
    text-[#DAE2FD] 
    outline-none 
    w-max 
    appearance-none 
    placeholder:appearance-none 
    px-4 
    py-3
  `;

  const handleChange = (value: string) => {
    if (type === "number") {
      setState(value.replace(/\D/g, ""));
      return;
    }

    setState(value);
  };

  return (
    <input
      value={state}
      onChange={(e) => handleChange(e.target.value)}
      type="text"
      inputMode="numeric"
      className={classes}
    />
  );
}

export default TradeExecutionInput;