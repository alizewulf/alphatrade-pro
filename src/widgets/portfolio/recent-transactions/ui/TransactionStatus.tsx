interface TransactionStatusProps {
  status: "completed" | "pending" | "reinvested" | "cancelled";
}

const statusColors: Record<string, string> = {
  completed: "text-positive",
  pending: "text-yellow-400",
  reinvested: "text-[#ADC6FF]",
  cancelled: "text-negative",
};

function TransactionStatus({ status }: TransactionStatusProps) {
  return (
    <span className={`text-xs font-semibold leading-4.5 ${statusColors[status] || "text-paragraph"}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

export default TransactionStatus;
