export interface TransactionStatusProps { 
    status: "completed" | "reinvested"
    amount: number
}

function TransactionStatus({status = "completed", amount=7.710}:TransactionStatusProps) {
    return (
    <div className="flex flex-col">
      <span className="text-base text-[#DAE2FD]  leading-6">${amount.toString()}</span>
      <span className={`text-xs ${status === "completed"? "text-[#4EDEA3]" : "text-[#ADC6FF]"} leading-3.75 font-bold tracking-[1px]`}>
        {status.toUpperCase()}
      </span>
    </div>
  );
}

export default TransactionStatus;
