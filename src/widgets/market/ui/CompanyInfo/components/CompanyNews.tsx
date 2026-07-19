import type { CompanyNews } from "@/pages/MarketsPage/data/interfaces.types";
import React from "react";

export function CompanyNews({news}:{news:CompanyNews[]}): React.JSX.Element {
  return <>
  {news.map(item => (
    <div className="flex gap-4">
      <span className={`p-4 ${item.color} max-h-12 items-center flex justify-center`}>{<item.icon/>}</span>
      <div className="flex flex-col gap-1">
        <p className="text-[#DAE2FD] text-base leading-6 font-semibold">{item.title}</p>
        <span className="text-paragraph leading-4 text-xs">{item.time} • {item.source}</span>
      </div>
    </div>
  ))}
  </>
}
