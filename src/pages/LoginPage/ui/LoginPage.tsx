import { Navigate } from "react-router";
import { useAuth } from "@/app/providers/AuthContext";
import LoginForm from "@/features/auth/login/ui/LoginForm";

function LoginPage() {
  const { isAuth } = useAuth();

  if (isAuth) {
    return <Navigate to="/dashboard" replace />;
  }

  return <LoginForm />;
}

export default LoginPage
