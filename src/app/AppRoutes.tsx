import { createBrowserRouter, Navigate } from "react-router";
import AppLayout from "@/app/AppLayout";
import RequireAuth from "@/app/guards/RequireAuth";
import PublicOnly from "@/app/guards/PublicOnly";
import { ROUTE_PATHS } from "@/app/routes";
import WelcomePage from "@/pages/WelcomePage/";
import LoginPage from "@/pages/LoginPage/";
import SignUpPage from "@/pages/SignUpPage/";
import PortfolioPage from "@/pages/PortfolioPage";
import Dashboard from "@/pages/DashboardPage";
import DemoPage from "@/pages/DemoPage";
import MarketPage from "@/pages/MarketsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: ROUTE_PATHS.home.replace("/", ""),
        element: (
          <PublicOnly>
            <WelcomePage />
          </PublicOnly>
        ),
        handle: {
          showSocials: true,
          showSidebar: false,
        },
      },
      {
        index: true,
        element: <Navigate to={ROUTE_PATHS.home} replace />,
      },
      {
        path: ROUTE_PATHS.login.replace("/", ""),
        element: (
          <PublicOnly>
            <LoginPage />
          </PublicOnly>
        ),
        handle: {
          showSidebar: false,
        },
      },
      {
        path: ROUTE_PATHS.signup.replace("/", ""),
        element: (
          <PublicOnly>
            <SignUpPage />
          </PublicOnly>
        ),
        handle: {
          showSidebar: false,
        },
      },
      {
        path: ROUTE_PATHS.dashboard.replace("/", ""),
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
        handle: {
          showSidebar: true,
          isVip: true,
          variant: "secondary",
          footerFullWidth: false,
        },
      },
      {
        path: ROUTE_PATHS.market.replace("/", ""),
        element: (
          <RequireAuth>
            <MarketPage />
          </RequireAuth>
        ),
        handle: {
          showSidebar: true,
          isVip: true,
          variant: "secondary",
          footerFullWidth: false,
        },
      },
      {
        path: ROUTE_PATHS.portfolio.replace("/", ""),
        element: (
          <RequireAuth>
            <PortfolioPage />
          </RequireAuth>
        ),
        handle: {
          showSidebar: true,
          isVip: true,
          variant: "secondary",
          footerFullWidth: false,
        },
      },
      {
        path: ROUTE_PATHS.demo.replace("/", ""),
        element: <DemoPage />,
        handle: {
          showSidebar: false,
          showSocials: false,
          variant: "primary",
          isDemo: true,
        },
      },
      {
        path: "*",
        element: <Navigate to={ROUTE_PATHS.dashboard}/>
      },
    ],
  },
]);
