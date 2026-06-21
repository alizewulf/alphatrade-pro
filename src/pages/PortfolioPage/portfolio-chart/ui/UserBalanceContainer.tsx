import type { Dispatch, SetStateAction } from 'react'
import type { Range } from './PortfolioChart'

interface UserBalanceContainerProps {
  balance: number
  range: string
  setRange: Dispatch<SetStateAction<Range>>

}

function UserBalanceContainer({balance, range, setRange}:UserBalanceContainerProps) {
  return (
      <div className="flex items-start justify-between mb-1">
        <h2 className="text-[#DAE2FD] text-5xl leading-[52.8px] tracking-[0.96px] font-bold">
          ${balance.toString()}
        </h2>

        <div className="flex gap-1 bg-white/5 rounded-lg p-1">
          {(["1D", "1W", "1M", "1Y", "ALL"] as Range[]).map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                range === r
                  ? "bg-white/15 text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>  )
}

export default UserBalanceContainer