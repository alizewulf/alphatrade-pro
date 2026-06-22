import TitleContainer from "../../ui/shared/TitleContainer";
import CartSVG from "../icons/CartSVG";
import TransactionItem from "./transaction-item/TransactionItem";

function RecentTransactions() {
  return (
    <div className="flex bg-[#1E293B] gap-6 flex-col">
      <TitleContainer container="transaction" />
      <div className="flex px-6 pb-6 rounded-lg flex-col gap-4">
        <TransactionItem
          SVG={<CartSVG />}
          status="completed"
          amount={12313}
          paragraph="Bought 50 shares of AMD"
          span="Executed at $154.20 • Oct 23, 2:45 PM"
        />
        <TransactionItem
          SVG={<CartSVG />}
          status="reinvested"
          amount={7.71}
          paragraph="Reinvested dividends"
          span="Reinvested at $1.23 • Nov 04, 10:15 AM"
        />
        <TransactionItem
          SVG={<CartSVG />}
          status="completed"
          amount={250}
          paragraph="Bought 10 shares of TESLA"
          span="Executed at $25.00 • Dec 11, 9:05 AM"
        />
      </div>
    </div>
  );
}

export default RecentTransactions;

