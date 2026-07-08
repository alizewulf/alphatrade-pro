import { Navigate } from "react-router";
import { useAuth } from "@/app/providers/AuthContext";
import { ROUTE_PATHS } from "@/app/routes";
import LoginForm from "@/features/auth/login/ui/LoginForm";

function LoginPage() {
  const { isAuth } = useAuth();

  if (isAuth) {
    return <Navigate to={ROUTE_PATHS.dashboard} replace />;
  }

  return <LoginForm />;
}

export default LoginPage
