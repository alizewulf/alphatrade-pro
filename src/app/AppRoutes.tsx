import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import AppLayout from "./AppLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/home" element={<WelcomePage />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
