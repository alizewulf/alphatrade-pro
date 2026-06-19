import { Button } from "@/shared/ui/Button";
import { SearchInput } from "@/shared/ui/Input";
import { Bell } from "@/shared/ui/icons";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "@/app/providers/AuthContext";

function HeaderContent() {
  const navigate = useNavigate();
  const { isAuth, isVip, logout } = useAuth();
  const navStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-[#ADC6FF] underline cursor-pointer"
      : "text-paragraph cursor-pointer";

  const handleLogout = () => {
    logout();
    navigate("/home");
  };

  return (
    <header className="bg-bgcolor p-4 flex justify-between">
      <div className="flex gap-8 items-center">
        {!isAuth ? (
          <h3 className="font-inter text-white font-bold tracking-[-0.6px] leading-[31.2px] text-2xl select-none">
            AlphaTrade
          </h3>
        ) : isVip ? (
          <div className="flex font-inter flex-col gap-1 pt-4 px-6">
            <h3 className="font-bold text-xl leading-7 text-[#ADC6FF]">
              AlphaTrade
            </h3>
            <span className="uppercase font-semibold text-xs leading-3 tracking-[1.2px] text-[#C2C6D6]">
              Premium Tier
            </span>
          </div>
        ) : (
          <h3
            className="font-inter text-white font-bold tracking-[-0.6px] leading-[31.2px] text-2xl select-none cursor-pointer"
            onClick={() => navigate("/home")}
          >
            AlphaTrade
          </h3>
        )}
        <nav className="flex gap-6 items-center">
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
        </nav>
      </div>

      <div className="flex gap-4 items-center">
        <SearchInput />
        <button className="cursor-pointer">
          <Bell />
        </button>
        <button className="font-inter text-base leading-6 text-paragraph cursor-pointer">
          Support
        </button>
        <Button variant="nav">Execute Trade</Button>
        {isAuth && (
          <button
            onClick={handleLogout}
            className="font-inter text-base leading-6 text-tertiary hover:text-red-400 cursor-pointer transition"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
}

export default HeaderContent;
