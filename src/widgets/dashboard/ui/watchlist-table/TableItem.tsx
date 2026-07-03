function TableItem() {
  return (
    <div className="grid grid-cols-5 items-center">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ADC6FF] font-bold">
          B
        </span>

        <div className="flex flex-col">
          <p className="font-medium">BTC</p>
          <p className="text-sm text-gray-400">Bitcoin</p>
        </div>
      </div>

      <span>$64,241.20</span>

      <span className="text-green-500">+2.41%</span>

      <span>$1.2T</span>

      <div>
        CHART PLACEHOLDER
      </div>
    </div>
  );
}

export default TableItem;