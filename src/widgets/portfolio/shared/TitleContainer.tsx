interface TitleContainerProps {
  container: "holding" | "transaction";
  filterButton?: React.ReactNode;
  exportButton?: React.ReactNode;
}

function TitleContainer({ container, filterButton, exportButton }: TitleContainerProps) {
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
          {filterButton}
          {exportButton}
        </div>
      )}
    </div>
  );
}

export default TitleContainer;
