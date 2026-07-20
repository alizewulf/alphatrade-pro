import { recentView } from "@/pages/MarketsPage/data/objects";
import Container from "@/shared/ui/container";
import React from "react";

function RecentView(): React.JSX.Element {
  return (
    <Container className="gap-4 w-71 h-44">
      <p className="text-[#DAE2FD] font-semibold text-xs leading-3 uppercase">
        Recent View
      </p>
      <div className="flex flex-col gap-3">
        {recentView.map((item) => (
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="font-semibold text-xs leading-3 tracking-[0.6px] text-[#DAE2FD]">
                {item.abr}
              </p>
              <p className="text-[10px] leading-3.75 text-paragraph">
                {item.companyName}
              </p>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm leading-3 text-[#DAE2FD]">
                ${item.stock}
              </span>
              <span
                className={`${item.change < 0 ? "text-negative" : "text-positive"} text-xs leading-3.75 text-right`}
              >
                {item.change}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default RecentView;
