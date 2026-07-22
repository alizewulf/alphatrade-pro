import { useState, useRef, useEffect } from "react";
import TitleButton from "@/widgets/portfolio/recent-transactions/ui/Button";
import FilterSVG from "@/widgets/portfolio/recent-transactions/icons/FilterSVG";
import { FILTER_OPTIONS, type FilterOption } from "../lib/filterTransactions";

interface FilterTransactionsDropdownProps {
  currentFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
}

function FilterTransactionsDropdown({
  currentFilter,
  onFilterChange,
}: FilterTransactionsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLabel =
    FILTER_OPTIONS.find((o) => o.value === currentFilter)?.label ?? "All";

  return (
    <div className="relative" ref={dropdownRef}>
      <TitleButton onClick={() => setIsOpen(!isOpen)}>
        <FilterSVG />
        {currentLabel}
      </TitleButton>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-[#1E293B] border border-[#334155] rounded-lg shadow-lg py-1 z-50 min-w-[140px]">
          {FILTER_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onFilterChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm leading-5 transition-colors cursor-pointer ${
                currentFilter === option.value
                  ? "text-[#DAE2FD] bg-[#334155]"
                  : "text-paragraph hover:text-[#DAE2FD] hover:bg-[#2A3A50]"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterTransactionsDropdown;

