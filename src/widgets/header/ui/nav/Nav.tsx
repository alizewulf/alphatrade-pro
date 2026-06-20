import { NavLink } from "react-router";

function Nav() {
  const navStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-[#ADC6FF] underline cursor-pointer"
      : "text-paragraph cursor-pointer";
  return (
    <>
      <NavLink to={"/home"} className={navStyle}>
        Dashboard
      </NavLink>
      <NavLink
        to={"/markets"}
        className={navStyle}
        onClick={(e) => e.preventDefault()}
      >
        Markets
      </NavLink>

      <NavLink to={"/portfolio"} className={navStyle}>
        Portfolio
      </NavLink>
    </>
  );
}

export default Nav;
