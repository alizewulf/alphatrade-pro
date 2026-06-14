import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import WelcomePage from "../pages/WelcomePage/WelcomePage"

function AppRoutes() {
  return (
    <>
        <BrowserRouter>
            <Routes>
              <Route path="/home" element={<WelcomePage/>}/>
              <Route path="/" element={<Navigate to="/home" replace />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default AppRoutes
