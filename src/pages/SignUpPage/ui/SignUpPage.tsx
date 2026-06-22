import { RegisterForm } from "@/features/auth/register/ui/RegisterForm";
import { Navigate } from "react-router";
import { useAuth } from "@/app/providers/AuthContext";

function SignUpPage() {
  const { isAuth } = useAuth();

  if (isAuth) {
    return <Navigate to="/dashboard" replace />;
  }

  return <RegisterForm />;
}

export default SignUpPage;

