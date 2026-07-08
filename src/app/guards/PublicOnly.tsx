import { Navigate, useLocation } from "react-router";
import { useAuth } from "@/app/providers/AuthContext";
import { DEFAULT_PUBLIC_REDIRECT } from "@/app/routes";

interface PublicOnlyProps {
  children: React.ReactNode;
}

function PublicOnly({ children }: PublicOnlyProps) {
  const { isAuth } = useAuth();
  const location = useLocation();

  if (isAuth) {
    const redirectTarget = new URLSearchParams(location.search).get("redirect") ?? DEFAULT_PUBLIC_REDIRECT;
    return <Navigate to={redirectTarget} replace />;
  }

  return <>{children}</>;
}

export default PublicOnly;
