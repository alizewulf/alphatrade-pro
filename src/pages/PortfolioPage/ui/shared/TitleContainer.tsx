import ExportSVG from "../../recent-transactions/icons/ExportSVG";
import FilterSVG from "../../recent-transactions/icons/FilterSVG";
import TitleButton from "../../recent-transactions/ui/Button";

interface TitleContainerProps {
  container: "holding" | "transaction";
}

function TitleContainer({ container }: TitleContainerProps) {
  return (
    <div className="flex font-inter justify-between p-6 items-center">
      <h3 className="font-semibold text-xl leading-7 text-[#DAE2FD]">
        {container === "holding"? "Current Holdings" : "Recent Transactions"}
      </h3>
      {container === "holding" && (
        <button className="text-[#ADC6FF] cursor-pointer leading-7 text-base">
          View All
        </button>
      )}
      {container === "transaction" && (
        <div className="flex gap-4 text-white">
          <TitleButton><FilterSVG/>Filter</TitleButton>
          <TitleButton><ExportSVG/>Export</TitleButton>
        </div>
      )}
    </div>
  );
}

export default TitleContainer;
