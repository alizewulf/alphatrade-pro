import type { ReactNode } from "react";

function GridWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 px-6 pb-6">
      {children}
    </div>
  );
}

export default GridWrapper;
