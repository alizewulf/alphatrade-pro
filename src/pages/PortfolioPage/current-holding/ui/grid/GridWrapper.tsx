interface GridWrapperProps {
  children: React.ReactNode
}

function GridWrapper({ children }: GridWrapperProps) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-5 px-4 pb-3 border-b bg-[#2D3449]/50 border-white/10">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Symbol</span>
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider text-right">Qty</span>
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider text-right">Avg Cost</span>
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider text-right">Market Price</span>
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider text-right">P/L (%)</span>
      </div>
      <div className="flex flex-col">
        {children}
      </div>
    </div>
  )
}

export default GridWrapper