import { Button } from "@/shared/ui/Button";
import { sidebarItems, downsideItems } from "./sidebarItems";

function Sidebar() {
  return (
    <aside className="bg-[#131B2E] flex flex-col justify-between w-50">
      <ul className="flex flex-col gap-2">
        {sidebarItems.map((item) => {
          const Icon = item.svg;
          return (
            <li
              key={item.id}
              className="flex gap-3 items-center font-inter cursor-pointer py-3 pl-4 font-semibold text-xs leading-3 tracking-[0.6px] text-[#C2C6D6]"
            >
              {Icon && <Icon />} {item.label}
            </li>
          );
          
        })}
      </ul>
      <div className="flex flex-col gap-1 pb-4 px-3">
        <Button variant="primary" className="py-3">
          Trade Now
        </Button>
        {downsideItems.map((item) => {
          const Icon = item.svg;
          return <Button variant="ghost" className="flex items-center gap-3">{Icon && <Icon/>} {item.label}</Button>;
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
