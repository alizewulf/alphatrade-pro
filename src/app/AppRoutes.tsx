import { createBrowserRouter, Navigate } from "react-router";
import AppLayout from "@/app/AppLayout";
import WelcomePage from "@/pages/WelcomePage/WelcomePage";
import LoginPage from "@/pages/LoginPage/LoginPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "home",
        element: <WelcomePage />,
        handle: {
          showSocials: true
        },
      },
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "login",
        element: <LoginPage/>
      }
    ],
  },
]);