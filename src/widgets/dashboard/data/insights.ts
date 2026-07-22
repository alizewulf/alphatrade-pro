export interface Insight {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  time: string;
}

export const insights: Insight[] = [
  {
    id: "insight-1",
    title: "FED Interest Rate Decision Looms Over Markets",
    subtitle: "Traders brace for volatility as the Federal Reserve meets to discuss potential pivots.",
    category: "Macro Analysis",
    time: "12m ago",
  },
  {
    id: "insight-2",
    title: "Tech earnings drive market momentum",
    subtitle: "Strong earnings in the semiconductor sector support higher valuations.",
    category: "Market News",
    time: "32m ago",
  },
  {
    id: "insight-3",
    title: "Energy stocks rally after supply report",
    subtitle: "Oil producers see a boost as supply concerns continue into next quarter.",
    category: "Sector Update",
    time: "1h ago",
  },
];
