import { ASSET_OPTIONS } from "@/features/trade/model/assets";

import { useTrade } from "@/features/trade/model/useTrade";


export default function TradeAssetSelect({
  showAssetList,
  setShowAssetList,
}: {
  showAssetList: boolean;
  setShowAssetList: (v: boolean) => void;
}) {
  const trade = useTrade();

  return (
    <div className="flex flex-col gap-2 px-4">
      <span className="text-paragraph text-base leading-6">Asset</span>

      <div className="relative w-full">
        <input
          value={trade.input.assetSymbol}
          readOnly
          onFocus={() => setShowAssetList(true)}
          onBlur={() => {
            window.setTimeout(() => setShowAssetList(false), 120);
          }}
          placeholder="Select asset"
          className="h-10 w-full rounded-sm bg-[#060E20] text-white placeholder:text-paragraph"
        />

        {showAssetList && (
          <div className="absolute z-20 mt-1 w-full rounded-sm border border-white/10 bg-[#060E20] shadow-lg">
            {ASSET_OPTIONS.map((asset) => (
              <button
                key={asset.symbol}
                type="button"
                className="flex w-full items-center justify-between px-3 py-2 text-left text-sm text-[#DAE2FD] transition hover:bg-white/10"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  trade.setInput((prev) => ({
                    ...prev,
                    assetSymbol: asset.symbol,
                  }));

                  setShowAssetList(false);
                }}
              >
                <span>{asset.name}</span>
                <span className="text-[#ADC6FF]">{asset.symbol}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

