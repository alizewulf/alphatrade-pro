import HighlightItem from "./Highlights-item";

export default function HighlightsItemContainer() {
  return (
    <>
      <HighlightItem
        title="S&P 500"
        company="SPX Index"
        num="5,137.08"
        percent="+0.80"
        progress="35"
        scheme="positive"
        variation="primary"
      />
      <HighlightItem
        title="NASDAQ"
        company="IXIC Index"
        num="16,274.94"
        percent="+1.14%"
        progress="75"
        scheme="positive"
        variation="secondary"
      />
      <HighlightItem
        title="DOW JONES"
        company="DJI Index"
        num="38,989.83"
        percent="-0.12%"
        progress="53"
        scheme="negative"
        variation="primary"
      />
      <HighlightItem
        title="BTC / USD"
        company="Bitcoin"
        num="67,432.10"
        percent="+3.45%"
        progress="96"
        scheme="positive"
        variation="primary"
      />
    </>
  );
}
