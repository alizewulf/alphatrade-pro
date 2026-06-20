import type { FC } from "react";
import Dashboard from "./icons/Dashboard";
import LineSVG from "./icons/LineSVG";
import PortfolioSVG from "./icons/PortfolioSVG";
import HistorySVG from "./icons/HistorySVG";
import SettingsSVG from "./icons/SettingsSVG";
import Support from "./icons/Support";

interface BottomSidebarProps {
  id: string;
  label: string;
  svg: FC;
}

interface SidebarItemProps extends BottomSidebarProps {
  path: string;
}

export const sidebarItems: SidebarItemProps[] = [
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

export const downsideItems: BottomSidebarProps[] = [
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