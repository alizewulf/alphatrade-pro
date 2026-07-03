import { API_BASE } from "@/shared/config/api";
import type { PortfolioData } from "../model/types";

export async function getPortfolio(): Promise<PortfolioData> {
  const res = await fetch(`${API_BASE}/portfolio`);
  if (!res.ok) {
    throw new Error("Failed to load portfolio data");
  }
  return res.json();
}
