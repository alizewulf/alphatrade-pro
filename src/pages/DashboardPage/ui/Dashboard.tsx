import { useEffect, useState } from "react";
import { useAuth } from "@/app/providers/AuthContext";
import {
  ValueWrapper,
  ValueHeader,
  ValueFooter,
  MSContainer,
  QuickAction,
} from "@/widgets/dashboard";
import WatchlistTable from "@/widgets/dashboard/ui/watchlist-table/WatchlistTable";
import TableItem from "@/widgets/dashboard/ui/watchlist-table/TableItem";
import Skeleton from "react-loading-skeleton";
import { getWatchlist } from "@/entities/watchlist";
import type { WatchlistItem } from "@/entities/watchlist";
import LatestInsight from "@/widgets/dashboard/ui/latest-insight/LatestInsight";
import TopMoveItem from "@/widgets/dashboard/ui/top-move-item/TopMoveItem";
import MarketHeat from "@/widgets/dashboard/ui/market-heat/MarketHeat";

function Dashboard() {
  const bgColor = "bg-[#1E293B]/70";
  const { user } = useAuth();
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWatchlist() {
      setLoading(true);
      try {
        setWatchlist(await getWatchlist());
      } catch {
        setWatchlist([]);
      } finally {
        setLoading(false);
      }
    }

    loadWatchlist();
  }, []);

  return (
    <section className="flex flex-col gap-8 font-inter p-8 bg-bgcolor">
      <div className="grid gap-4 xl:grid-cols-[2.2fr_0.9fr_0.9fr] items-stretch">
        <ValueWrapper bgColor={bgColor}>
          <ValueHeader user={user} />
          <ValueFooter />
        </ValueWrapper>

        <MSContainer bgColor={bgColor} />
        <QuickAction bgColor={bgColor} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[2.3fr_1fr]">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-2xl leading-8 text-[#DAE2FD]">
                My Watchlist
              </h3>
              <p className="text-sm text-paragraph mt-2">
                Track your top holdings and see the latest market movement.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="py-2 px-4 bg-[#222A3D] rounded-xl text-xs font-semibold tracking-[0.6px] text-[#DAE2FD]">
                Edit List
              </button>
              <button className="py-2 px-4 bg-[#222A3D] rounded-xl text-xs font-semibold tracking-[0.6px] text-[#DAE2FD]">
                Add Symbol
              </button>
            </div>
          </div>

          <WatchlistTable>
            {loading ? (
              <div className="space-y-4 py-6">
                <Skeleton height={72} borderRadius={16} />
                <Skeleton height={72} borderRadius={16} />
                <Skeleton height={72} borderRadius={16} />
              </div>
            ) : (
              watchlist.map((item) => <TableItem key={item.id} item={item} />)
            )}
          </WatchlistTable>
        </div>

        <LatestInsight />
        <div className="flex col-span-3 gap-4">
          <TopMoveItem
            type="gainer"
            items={[
              { symbol: "AAPL", price: "$150.00", change: "+2.5%" },
              { symbol: "MSFT", price: "$300.00", change: "+1.8%" },
            ]}
            gap={4}
          ></TopMoveItem>
          <TopMoveItem
            type="loser"
            gap={4}
            items={[
              { symbol: "TSLA", price: "$700.00", change: "-3.2%" },
              { symbol: "AMZN", price: "$3,200.00", change: "-1.5%" },
            ]}
          ></TopMoveItem>
          <MarketHeat/>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
