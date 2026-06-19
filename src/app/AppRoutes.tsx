import { createBrowserRouter, Navigate } from "react-router";
import AppLayout from "@/app/AppLayout";
import WelcomePage from "@/pages/WelcomePage/WelcomePage";
import LoginPage from "@/pages/LoginPage/LoginPage";
import SignUpPage from "@/pages/SignUpPage/SignUpPage";
import PortfolioPage from "@/pages/PortfolioPage/PortfolioPage";
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
        path: "portfolio",
        element: <PortfolioPage />,
        handle: {
          showSidebar: true,
        },
      },
    ],
  },
]);
