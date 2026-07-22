import { useState } from "react";
import TitleContainer from "@/widgets/portfolio/shared/TitleContainer";
import CartSVG from "../icons/CartSVG";
import TransactionItem from "./TransactionItem";
import type { PortfolioTransaction } from "@/entities/portfolio";
import { DEFAULT_TRANSACTIONS } from "../data/transactions";
import { ExportTransactionsButton } from "@/features/pdf-export";
import {
  FilterTransactionsDropdown,
  filterTransactions,
} from "@/features/filter-transactions";
import type { FilterOption } from "@/features/filter-transactions";

function RecentTransactions({ transactions }: { transactions?: PortfolioTransaction[] }) {
  const [filter, setFilter] = useState<FilterOption>("all");
  const rows = transactions ?? DEFAULT_TRANSACTIONS;
  const filteredRows = filterTransactions(rows, filter);

  return (
    <div className="flex bg-[#1E293B] gap-6 flex-col">
      <TitleContainer
        container="transaction"
        filterButton={
          <FilterTransactionsDropdown
            currentFilter={filter}
            onFilterChange={setFilter}
          />
        }
        exportButton={<ExportTransactionsButton transactions={filteredRows} />}
      />
      <div className="flex px-6 pb-6 rounded-lg flex-col gap-4">
        {filteredRows.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-paragraph">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-4 opacity-50"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <p className="text-base font-medium">No transactions found</p>
            <p className="text-sm mt-1 opacity-70">
              Try selecting a different filter option
            </p>
          </div>
        ) : (
          filteredRows.map((tx) => (
            <TransactionItem
              key={tx.id}
              SVG={<CartSVG />}
              status={tx.status as any}
              amount={tx.amount}
              paragraph={`${tx.type} ${tx.symbol}`}
              span={`${tx.date}`}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default RecentTransactions;
