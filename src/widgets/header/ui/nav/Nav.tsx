import { NavLink } from "react-router";
import { ROUTE_PATHS } from "@/app/routes";

function Nav() {
  const navStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-[#ADC6FF] underline cursor-pointer"
      : "text-paragraph cursor-pointer";
  return (
    <>
      <NavLink to={ROUTE_PATHS.home} className={navStyle}>
        Dashboard
      </NavLink>
      <NavLink
        to={ROUTE_PATHS.dashboard}
        className={navStyle}
        onClick={(e) => e.preventDefault()}
      >
        Markets
      </NavLink>

      <NavLink to={ROUTE_PATHS.portfolio} className={navStyle}>
        Portfolio
      </NavLink>
    </>
  );
}

export default Nav;
