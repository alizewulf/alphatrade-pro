import { Button } from "@/shared/ui/Button";
import { sidebarItems, downsideItems } from "./sidebarItems";
import { NavLink } from "react-router";

const ACTIVE_COLOR = "#ADC6FF";
const INACTIVE_COLOR = "#C2C6D6";

type SvgLike =
  | ((props: { color?: string }) => React.ReactElement)

  | React.ReactElement;

function Sidebar() {
  return (
    <aside className="bg-[#131B2E] flex flex-col justify-between w-50">
      <div className="flex flex-col gap-2">
        {sidebarItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex gap-3 items-center font-inter cursor-pointer py-3 pl-4 font-semibold text-xs leading-3 tracking-[0.6px] ${
                isActive
                  ? "text-[#ADC6FF] bg-[#ADC6FF]/10 outline-2 outline-[#ADC6FF] rounded-lg"
                  : "text-paragraph hover:text-[#ADC6FF]"
              }`
            }
          >
            {({ isActive }) => {
              const color = isActive ? ACTIVE_COLOR : INACTIVE_COLOR;
              const svg = item.svg as unknown as SvgLike;

              return (
                <>
                  {typeof svg === "function" ? svg({ color }) : svg}
                  {item.label}
                </>
              );
            }}
          </NavLink>
        ))}
      </div>

      <div className="flex flex-col gap-1 pb-4 px-3">
        <Button variant="primary" className="py-3">
          Trade Now
        </Button>

        {downsideItems.map((item) => {
          const svg = item.svg as unknown as SvgLike;
          return (
            <Button
              key={item.id}
              variant="ghost"
              className="flex items-center gap-3"
            >
              {typeof svg === "function" ? svg({ color: INACTIVE_COLOR }) : svg}
              {item.label}
            </Button>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;

