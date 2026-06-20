import { Button } from "@/shared/ui/Button";
import { SearchInput } from "@/shared/ui/Input";
import { Bell } from "@/shared/ui/icons";
import { useNavigate } from "react-router";
import { useAuth } from "@/app/providers/AuthContext";
import HeadingTitle from "./HeadingTitle/HeadingTitleWrapper";
import Nav from "./nav/Nav";

function HeaderContent() {
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
          {isAuth && (
            <Nav/>
          )}
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
