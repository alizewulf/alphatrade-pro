import TitleContainer from "../../ui/shared/TitleContainer"
import GridWrapper from "./grid/GridWrapper"
import GridElement from "./grid/GridElement"
import { holdings } from "./data/holding"


function CurrentHoldingWrapper() {
  return (
    <div className="w-full bg-[#1E293B]">
      <TitleContainer container="holding"/>
      <GridWrapper>
        {holdings.map(h => (
          <GridElement key={h.symbol} {...h}/>
        ))}
      </GridWrapper>
    </div>
  )
}

export default CurrentHoldingWrapper