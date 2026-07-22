import { insights } from "../../data/insights";

function LatestInsight() {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-3xl border border-white/10 bg-[#1E293B]/70 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.6px] text-paragraph font-semibold">
              Latest Insights
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white">
              Market Headlines
            </h2>
          </div>
          <span className="text-xs font-semibold uppercase tracking-[1.2px] text-[#4EDEA3]">
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        <div className="mt-6 grid gap-4">
          {insights.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-white/10 bg-[#111827]/80 p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs uppercase tracking-[0.6px] text-[#4EDEA3]">
                  {item.category}
                </span>
                <span className="text-xs text-gray-400">{item.time}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-paragraph">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestInsight;
