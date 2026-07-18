import { RouterProvider } from "react-router";
import { router } from "./AppRoutes";
import { AuthProvider } from "@/app/providers/AuthContext";
import { TradeProvider } from "@/features/trade/model/tradeContext";

function App() {
  return (
    <AuthProvider>
      <TradeProvider>
        <RouterProvider router={router} />
      </TradeProvider>
    </AuthProvider>
  );
}

export default App;

