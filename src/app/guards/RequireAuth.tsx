import { Navigate, useLocation } from "react-router";
import { useAuth } from "@/app/providers/AuthContext";
import { ROUTE_PATHS } from "@/app/routes";

interface RequireAuthProps {
  children: React.ReactNode;
}

function RequireAuth({ children }: RequireAuthProps) {
  const { isAuth } = useAuth();
  const location = useLocation();

  if (!isAuth) {
    const redirectTo = `${ROUTE_PATHS.login}?redirect=${encodeURIComponent(location.pathname + location.search)}`;
    return <Navigate to={redirectTo} replace />;
  }

  return <>{children}</>;
}

export default RequireAuth;
