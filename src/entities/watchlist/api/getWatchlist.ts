import { API_BASE } from "@/shared/config/api";
import type { WatchlistItem } from "../model/types";

export async function getWatchlist(): Promise<WatchlistItem[]> {
  const res = await fetch(`${API_BASE}/watchlist`);
  if (!res.ok) {
    throw new Error("Failed to load watchlist");
  }
  return res.json();
}
