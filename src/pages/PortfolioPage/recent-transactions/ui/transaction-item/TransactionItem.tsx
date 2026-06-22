import type { TransactionStatusProps } from "./TransactionStatus";
import TransactionItemWrapper from "./TransactionItemWrapper";
import TransactionStatus from "./TransactionStatus";

interface TransactionItemProps extends TransactionStatusProps {
  SVG: React.ReactNode;
  paragraph: string;
  span: string;
}

function TransactionItem({ SVG, status, amount, paragraph, span }: TransactionItemProps) {
  return (
    <TransactionItemWrapper SVG={SVG} paragraph={paragraph} span={span}>
      <TransactionStatus amount={amount} status={status} />
    </TransactionItemWrapper>
  );
}

export default TransactionItem;
