import type { ReactNode } from "react";

function TransactionItemWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4 px-4 py-4 rounded-lg bg-[#111827]/80">
      {children}
    </div>
  );
}

export default TransactionItemWrapper;
