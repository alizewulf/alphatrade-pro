import type { ReactNode } from "react"

type ButtonProps = {
    children: ReactNode
}
function NavButton({children}:ButtonProps) {
  return (
    <button className="font-inter text-xs font-seimbold leading-3 tracking-[0.6px] bg-navbutton px-4 py-2 rounded-sm cursor-pointer">
        {children}
    </button>
)
}

export default NavButton