import { createBrowserRouter, Navigate } from "react-router";
import AppLayout from "@/app/AppLayout";
import WelcomePage from "@/pages/WelcomePage/";
import LoginPage from "@/pages/LoginPage/";
import SignUpPage from "@/pages/SignUpPage/";
import PortfolioPage from "@/pages/PortfolioPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "home",
        element: <WelcomePage />,
        handle: {
          showSocials: true,
          showSidebar: false,
        },
      },
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "login",
        element: <LoginPage />,
        handle: {
          showSidebar: false,
        },
      },
      {
        path: "signup",
        element: <SignUpPage />,
        handle: {
          showSidebar: false,
        },
      },
      {
        path: "dashboard",
        element: <Navigate to="/*" replace />,
        handle: {
          showSidebar: true,
          isVip: true,
          variant: "secondary",
          footerFullWidth: false,
        },
      },
      {
        path: "portfolio",
        element: <PortfolioPage   />,
        handle: {
          showSidebar: true,
          isVip: true,
          variant: "secondary",
          footerFullWidth: false,
        },
      },
    ],
  },
]);
