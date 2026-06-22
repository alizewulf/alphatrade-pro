import { Button } from "@/shared/ui/Button";
import { sidebarItems, downsideItems } from "./sidebarItems";
import { NavLink } from "react-router";

function Sidebar() {
/*   const navStyle = ({ isActive }: { isActive: boolean }) => {
    isActive
      ? "bg-[#ADC6FF]/10 text-[#ADC6FF] outline-2 outline-[#ADC6FF]"
      : "";
  }; */
  return (
    <aside className="bg-[#131B2E] flex flex-col justify-between w-50">
      <div className="flex flex-col gap-2">
        {sidebarItems.map((item) => {
          const Icon = item.svg;

          return (
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex gap-3 items-center font-inter cursor-pointer py-3 pl-4 font-semibold text-xs leading-3 tracking-[0.6px] ${
                  isActive
                    ? "text-[#ADC6FF] bg-[#ADC6FF]/10 outline-2 outline-[#ADC6FF] rounded-lg"
                    : "text-paragraph hover:text-[#ADC6FF]"
                }`
              }
            >
              <Icon /> {item.label}
            </NavLink>
          );
        })}
      </div>

      <div className="flex flex-col gap-1 pb-4 px-3">
        <Button variant="primary" className="py-3">
          Trade Now
        </Button>
        {downsideItems.map((item) => {
          const Icon = item.svg;
          return (
            <Button variant="ghost" className="flex items-center gap-3">
              {Icon && <Icon />} {item.label}
            </Button>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
