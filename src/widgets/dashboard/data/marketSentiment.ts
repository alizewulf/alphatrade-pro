export interface MarketSentimentData {
  label: string;
  value: string;
  score: number;
  maxScore: number;
}

export const DEFAULT_SENTIMENT: MarketSentimentData = {
  label: "Greed",
  value: "74/100",
  score: 74,
  maxScore: 100,
};
