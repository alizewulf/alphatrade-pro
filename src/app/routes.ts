export const ROUTE_PATHS = {
  home: "/home",
  login: "/login",
  signup: "/signup",
  dashboard: "/dashboard",
  portfolio: "/portfolio",
  demo: "/demo",
  market: "/market"
} as const;

export const DEFAULT_AUTH_REDIRECT = ROUTE_PATHS.dashboard;
export const DEFAULT_PUBLIC_REDIRECT = ROUTE_PATHS.dashboard;
export const DEFAULT_AFTER_LOGOUT = ROUTE_PATHS.home;
