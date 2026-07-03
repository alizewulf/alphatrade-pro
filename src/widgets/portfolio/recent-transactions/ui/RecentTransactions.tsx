import TitleContainer from "@/widgets/portfolio/ui/shared/TitleContainer";
import CartSVG from "../icons/CartSVG";
import TransactionItem from "./transaction-item/TransactionItem";
import type { PortfolioTransaction } from "@/entities/portfolio";

function RecentTransactions({ transactions }: { transactions?: PortfolioTransaction[] }) {
  const rows = transactions ?? [
    {
      id: "default-1",
      type: "Buy",
      symbol: "AMD",
      amount: 12313,
      date: "Oct 23, 2:45 PM",
      status: "completed",
    },
    {
      id: "default-2",
      type: "Reinvested",
      symbol: "DIV",
      amount: 7.71,
      date: "Nov 04, 10:15 AM",
      status: "reinvested",
    },
    {
      id: "default-3",
      type: "Buy",
      symbol: "TSLA",
      amount: 250,
      date: "Dec 11, 9:05 AM",
      status: "completed",
    },
  ];

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

