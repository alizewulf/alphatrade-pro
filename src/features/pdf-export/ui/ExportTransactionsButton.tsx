import TitleButton from "@/widgets/portfolio/recent-transactions/ui/Button";
import ExportSVG from "@/widgets/portfolio/recent-transactions/icons/ExportSVG";
import type { PortfolioTransaction } from "@/entities/portfolio";
import { generateTransactionsPdf } from "../lib/generateTransactionsPdf";

interface ExportTransactionsButtonProps {
  transactions: PortfolioTransaction[];
}

function ExportTransactionsButton({ transactions }: ExportTransactionsButtonProps) {
  const handleExport = () => {
    generateTransactionsPdf(transactions);
  };

  return (
    <TitleButton onClick={handleExport}>
      <ExportSVG />
      Export
    </TitleButton>
  );
}

export default ExportTransactionsButton;

