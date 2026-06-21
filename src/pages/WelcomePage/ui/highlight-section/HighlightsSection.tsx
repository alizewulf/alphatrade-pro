import HighlightsItemContainer from "./Highlights-item-wrapper";
import HighLightsText from "./Highlights-text";

function HighlightsSection() {
  return (
    <section className="bg-[#060E20] py-20 px-8 gap-10 flex flex-col">
      <HighLightsText />
      <div className="flex flex-row justify-between">
        <HighlightsItemContainer />
      </div>
    </section>
  );
}

export default HighlightsSection;

