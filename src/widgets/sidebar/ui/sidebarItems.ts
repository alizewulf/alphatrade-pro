import type { ComponentType } from "react";
import Dashboard from "./icons/Dashboard";
import LineSVG from "./icons/LineSVG";
import PortfolioSVG from "./icons/PortfolioSVG";
import HistorySVG from "./icons/HistorySVG";
import SettingsSVG from "./icons/SettingsSVG";
import Support from "./icons/Support";

interface SideBarItemProps {
  id: string;
  label: string;
  svg?: ComponentType;
  path?: string;
}

export const sidebarItems: SideBarItemProps[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/home",
    svg: Dashboard,
  },
  {
    id: "markets",
    label: "Markets",
    path: "/market",
    svg: LineSVG,
  },
  {
    id: "portfolio",
    label: "Portfolio",
    path: "/home",
    svg: PortfolioSVG,
  },
  {
    id: "history",
    label: "History",
    path: "/history",
    svg: HistorySVG,
  },
];

export const downsideItems: SideBarItemProps[] = [
  {
    id: "settings",
    label: "Settings",
    svg: SettingsSVG,
  },
  {
    id: "support",
    label: "Support",
    svg: Support
  }
]