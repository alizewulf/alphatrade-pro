import StatsList from "../hero/StatsList";
import Coinbox from "../../icons/Coinbox";
import LightningIcon from "../../icons/LightningIcon";
import Traffic from "../../icons/Traffic";

function StatsListWrapper() {
  return (
    <div className="grid w-full max-w-[1140px] grid-cols-1 gap-6 mx-auto md:grid-cols-3 lg:gap-8">
      <div className="flex min-h-[260px] flex-col justify-between rounded-[32px] border border-[#4B556A]/30 bg-[#0F172A]/80 p-6 transition-shadow duration-300 hover:shadow-[0_22px_80px_rgba(15,23,42,0.24)]">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ADC6FF]/15">
          <Coinbox />
        </div>
        <StatsList
          title="Ultra-Low Fees"
          gap={true}
          subtitle="Zero-commission trading on stocks and ETFs. Transparent spreads with no hidden management or inactivity fees."
        />
      </div>

      <div className="flex min-h-[260px] flex-col justify-between rounded-[32px] border border-[#4B556A]/30 bg-[#0F172A]/80 p-6 transition-shadow duration-300 hover:shadow-[0_22px_80px_rgba(15,23,42,0.24)]">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4EDEA3]/15">
          <LightningIcon />
        </div>
        <StatsList
          title="Instant Execution"
          gap={true}
          subtitle="Proprietary routing engine provides sub-millisecond execution speeds, ensuring you get the price you see."
        />
      </div>

      <div className="flex min-h-[260px] flex-col justify-between rounded-[32px] border border-[#4B556A]/30 bg-[#0F172A]/80 p-6 transition-shadow duration-300 hover:shadow-[0_22px_80px_rgba(15,23,42,0.24)]">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFB3AD]/15">
          <Traffic />
        </div>
        <StatsList
          title="Advanced Analytics"
          gap={true}
          subtitle="Over 100+ technical indicators, real-time heatmaps, and sentiment analysis powered by institutional-grade data."
        />
      </div>
    </div>
  );
}

export default StatsListWrapper;
