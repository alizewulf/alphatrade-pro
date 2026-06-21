import { allocationData } from "../data/allocationData";
import StatisticWrapper from "./StatisticWrapper";

function AllocationSection() {
  return (
    <div className="flex font-inter flex-col rounded-lg gap-6 p-6 bg-[#1E293B]/70 w-1/4">
      <h3 className="font-semibold text-xl leading-7 text-[#DAE2FD]">
        Sector Allocation
      </h3>
      <div className="flex flex-col gap-8 items-center mt-4">
        <div className="relative outline-16 w-48 h-48 outline-[#2D3449] rounded-xl">
          <div className="absolute flex items-center justify-center flex-col bottom-1/2 right-1/2 translate-1/2 outline-16 outline-[#4EDEA3] rounded-xl w-40 h-40 -rotate-12">
            <div className="flex text-base leading-6 flex-col rotate-12 text-center">
              <span className="text-[#C2C6D6]">Top Sector</span>
              <span className="text-[#ADC6FF]">Tech</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full mt-2 text-start gap-3 pb-10">
          {allocationData.map(item => (
            <StatisticWrapper color={item.color} percent={item.percentage} textContent={item.title} key={item.title}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllocationSection;
