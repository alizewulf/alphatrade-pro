import TitleContainer from "@/widgets/portfolio/shared/TitleContainer";
import CartSVG from "../icons/CartSVG";
import TransactionItem from "./TransactionItem";
import type { PortfolioTransaction } from "@/entities/portfolio";
import { DEFAULT_TRANSACTIONS } from "../data/transactions";

function RecentTransactions({ transactions }: { transactions?: PortfolioTransaction[] }) {
  const rows = transactions ?? DEFAULT_TRANSACTIONS;

  return (
    <div className="flex bg-[#1E293B] gap-6 flex-col">
      <TitleContainer container="transaction" />
      <div className="flex px-6 pb-6 rounded-lg flex-col gap-4">
        {rows.map((tx) => (
          <TransactionItem
            key={tx.id}
            SVG={<CartSVG />}
            status={tx.status as any}
            amount={tx.amount}
            paragraph={`${tx.type} ${tx.symbol}`}
            span={`${tx.date}`}
          />
        ))}
      </div>
    </div>
  );
}

export default RecentTransactions;
