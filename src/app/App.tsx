import { RouterProvider } from "react-router";
import { router } from "./AppRoutes";
import { AuthProvider } from "@/app/providers/AuthContext";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App
