import { RegisterForm } from "@/features/auth/register/ui/RegisterForm";
import { Navigate } from "react-router";
import { useAuth } from "@/app/providers/AuthContext";
import { ROUTE_PATHS } from "@/app/routes";

function SignUpPage() {
  const { isAuth } = useAuth();

  if (isAuth) {
    return <Navigate to={ROUTE_PATHS.dashboard} replace />;
  }

  return <RegisterForm />;
}

export default SignUpPage;

