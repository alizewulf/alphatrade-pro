import { Button } from "@/shared/ui/Button";
import { SearchInput } from "@/shared/ui/Input";
import { Bell } from "@/shared/ui/icons";
import { useNavigate } from "react-router";
import { useAuth } from "@/app/providers/AuthContext";
import HeadingTitle from "./HeadingTitle/HeadingTitleWrapper";
import Nav from "./nav/Nav";
import WalletSVG from "@/pages/PortfolioPage/portfolio-chart/ui/icons/WalletSVG";

export type HeaderVariants = "primary" | "secondary";
interface HeaderProps {
  variant: HeaderVariants;
}

function HeaderContent({ variant }: HeaderProps) {
  const navigate = useNavigate();
  const { isAuth, isVip, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/home");
  };

  return (
    <header className="bg-bgcolor p-4 flex justify-between">
      <div className="flex gap-8 items-center">
        <HeadingTitle isAuth={isAuth} isVip={isVip} />
        <nav className="flex gap-6 items-center">
          {isAuth && variant === "primary" && <Nav />}
        </nav>
        {variant === "secondary" && <SearchInput width="md"/>}
      </div>

      <div className="flex gap-4 items-center">
        {variant === "primary" && <SearchInput width="sm" />}
        <button className="cursor-pointer">
          <Bell />
        </button>
          {variant === "secondary" && (
            <button className="cursor-pointer border-r border-r-[#424754] pr-6 py-4"><WalletSVG/></button>
          )}
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
