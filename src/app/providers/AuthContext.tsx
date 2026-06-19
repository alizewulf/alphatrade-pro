import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { User } from "@/entities/user";

interface AuthContextValue {
  isAuth: boolean;
  isVip: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function loadFromStorage(): User | null {
  try {
    const raw = localStorage.getItem("auth_user");
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
}

function saveToStorage(user: User) {
  localStorage.setItem("auth_user", JSON.stringify(user));
}

function clearStorage() {
  localStorage.removeItem("auth_user");
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(loadFromStorage);

  const loginFn = useCallback((u: User) => {
    setUser(u);
    saveToStorage(u);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    clearStorage();
  }, []);

  const value: AuthContextValue = {
    isAuth: user !== null,
    isVip: user?.isVip ?? false,
    user,
    login: loginFn,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
