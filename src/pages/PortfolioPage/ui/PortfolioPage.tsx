import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/app/providers/AuthContext";
import { PortfolioChart } from "@/widgets/portfolio/portfolio-chart";
import AllocationSection from "@/widgets/portfolio/allocation-section";
import CurrentHolding from "@/widgets/portfolio/current-holding";
import RecentTransactions from "@/widgets/portfolio/recent-transactions";
import Skeleton from "react-loading-skeleton";
import { getPortfolio } from "@/entities/portfolio";
import type { PortfolioData } from "@/entities/portfolio";
import { DEMO_BALANCE_KEY, readDemoBalance, readDemoTransactions } from "@/features/trade/lib/demoTrade";

function PortfolioPage() {
  const { user } = useAuth();
  const [portfolio, setPortfolio] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState(() => readDemoBalance());
  const [transactions, setTransactions] = useState(readDemoTransactions());
  const visibleTransactions = transactions.length > 0 ? transactions : portfolio?.transactions ?? [];
  const allocation = useMemo(() => {
    if (transactions.length > 0) {
      const total = transactions.reduce((sum, tx) => sum + tx.amount, 0);
      return [
        {
          name: "Demo Trades",
          value: Math.max(1, Math.round((total / Math.max(balance, 1)) * 100)),
        },
        {
          name: "Cash",
          value: Math.max(1, 100 - Math.max(1, Math.round((total / Math.max(balance, 1)) * 100))),
        },
      ];
    }

    return portfolio?.allocation ?? [];
  }, [balance, portfolio?.allocation, transactions]);

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

  useEffect(() => {
    const syncState = () => {
      setBalance(readDemoBalance());
      setTransactions(readDemoTransactions());
      const stored = sessionStorage.getItem(DEMO_BALANCE_KEY);
      if (stored) {
        setBalance(Number(stored));
      }
    };

    syncState();
    window.addEventListener("alpha-trade-demo-updated", syncState);

    return () => {
      window.removeEventListener("alpha-trade-demo-updated", syncState);
    };
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
        <PortfolioChart balance={balance || (user.onBalance ?? 0)} />
      )}

      <div className="flex flex-col gap-8 xl:flex-row">
          <AllocationSection allocation={allocation} />
          <CurrentHolding />
      </div>

      <div>
        {loading ? (
          <Skeleton count={3} height={84} borderRadius={20} />
        ) : (
          <RecentTransactions transactions={visibleTransactions} />
        )}
      </div>
    </section>
  );
}

export default PortfolioPage;
