import { sidebarItems } from "./sidebarItems";

function Sidebar() {
  return <aside className="bg-[#131B2E]">
    <ul className="flex flex-col gap-2">
        {sidebarItems.map(item => {
            const Icon = item.svg
            return (
                <li key={item.id} className="flex gap-3 items-center font-inter cursor-pointer py-3 pl-4 font-semibold text-xs leading-3 tracking-[0.6px] text-[#C2C6D6]"><Icon/> {item.label}</li>
            )
        })}
    </ul>
  </aside>;
}

export default Sidebar;
