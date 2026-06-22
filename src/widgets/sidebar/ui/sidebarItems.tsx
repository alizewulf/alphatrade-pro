import type { FC } from "react";
import Dashboard from "./icons/Dashboard";
import LineSVG from "./icons/LineSVG";
import PortfolioSVG from "./icons/PortfolioSVG";
import HistorySVG from "./icons/HistorySVG";
import SettingsSVG from "./icons/SettingsSVG";
import Support from "./icons/Support";

type SvgProps = { color?: string };

interface BottomSidebarItem {
  id: string;
  label: string;
  svg: FC<SvgProps>;
}

interface SidebarItem extends BottomSidebarItem {
  path: string;
}

export const sidebarItems: SidebarItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
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
    path: "/portfolio",
    svg: PortfolioSVG,
  },
  {
    id: "history",
    label: "History",
    path: "/history",
    svg: HistorySVG,
  },
];

export const downsideItems: BottomSidebarItem[] = [
  {
    id: "settings",
    label: "Settings",
    svg: SettingsSVG,
  },
  {
    id: "support",
    label: "Support",
    svg: Support,
  },
];
