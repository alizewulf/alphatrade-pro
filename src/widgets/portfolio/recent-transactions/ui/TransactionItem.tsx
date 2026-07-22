import TransactionItemWrapper from "./TransactionItemWrapper";
import TransactionStatus from "./TransactionStatus";
import TransactionTitle from "./TransactionTitle";

interface TransactionItemProps {
  SVG: React.ReactNode;
  status: "completed" | "pending" | "reinvested" | "cancelled";
  amount: number;
  paragraph: string;
  span: string;
  mainAmount?: string;
}

function TransactionItem({
  SVG,
  status,
  amount,
  paragraph,
  span,
  mainAmount,
}: TransactionItemProps) {
  return (
    <TransactionItemWrapper>
      <div className="flex items-center gap-2 bg-[#4EDEA3]/20 p-2 rounded-lg h-fit">
        {SVG}
      </div>

      <TransactionTitle paragraph={paragraph} span={span} />

      <div className="flex flex-col h-full items-end justify-between">
        {mainAmount ? (
          <span className="font-semibold text-sm leading-5 text-[#DAE2FD]">
            {mainAmount}
          </span>
        ) : (
          <span className="font-semibold text-sm leading-5 text-[#DAE2FD]">
            ${amount}
          </span>
        )}

        <TransactionStatus status={status} />
      </div>
    </TransactionItemWrapper>
  );
}

export default TransactionItem;
