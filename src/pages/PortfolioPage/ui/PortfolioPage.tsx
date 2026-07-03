import { useEffect, useState } from "react";
import { useAuth } from "@/app/providers/AuthContext";
import { PortfolioChart } from "@/widgets/portfolio/portfolio-chart";
import AllocationSection from "@/widgets/portfolio/allocation-section";
import CurrentHolding from "@/widgets/portfolio/current-holding";
import RecentTransactions from "@/widgets/portfolio/recent-transactions";
import Skeleton from "react-loading-skeleton";
import { getPortfolio } from "@/entities/portfolio";
import type { PortfolioData } from "@/entities/portfolio";

function PortfolioPage() {
  const { user } = useAuth();
  const [portfolio, setPortfolio] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPortfolio() {
      setLoading(true);
      try {
        setPortfolio(await getPortfolio());
      } catch {
        setPortfolio(null);
      } finally {
        setLoading(false);
      }
    }

    loadPortfolio();
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bgcolor text-white">
        <p>Loading profile...</p>
      </div>
    );
  }
  if (!portfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bgcolor text-white">
        <p>Loading portfolio...</p>
      </div>
    );
  }
  return (
    <section className="bg-bgcolor flex flex-col gap-8 px-8 py-8">
      {loading ? (
        <Skeleton height={320} borderRadius={24} />
      ) : (
        <PortfolioChart balance={user.onBalance ?? 0} />
      )}

      <div className="flex flex-col gap-8 xl:flex-row">
          <AllocationSection allocation={portfolio.allocation} />
          <CurrentHolding />
      </div>

      <div>
        {loading ? (
          <Skeleton count={3} height={84} borderRadius={20} />
        ) : (
          <RecentTransactions transactions={portfolio.transactions} />
        )}
      </div>
    </section>
  );
}

export default PortfolioPage;
