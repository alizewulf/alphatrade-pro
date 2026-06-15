import { createBrowserRouter, Navigate } from "react-router";
import AppLayout from "@/app/AppLayout";
import WelcomePage from "@/pages/WelcomePage/WelcomePage";

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
    ],
  },
]);