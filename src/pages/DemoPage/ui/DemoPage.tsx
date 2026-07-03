import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@/app/providers/AuthContext";
import { PortfolioChart } from "@/widgets/portfolio/portfolio-chart";
import CurrentHolding from "@/widgets/portfolio/current-holding";
import Skeleton from "react-loading-skeleton";
import { getPortfolio } from "@/entities/portfolio";
import type { PortfolioData } from "@/entities/portfolio";

function DemoPage() {
  const navigate = useNavigate();
  const {user} = useAuth();
  const [portfolio, setPortfolio] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [balance, setBalance] = useState<number>(user?.onBalance ?? 0);

  const demoKey = "alpha_trade_demo_balance";

  useEffect(() => {
    const stored = sessionStorage.getItem(demoKey);
    if (stored) {
      setBalance(Number(stored));
    } else if (user) {
      setBalance(user.onBalance);
      sessionStorage.setItem(demoKey, String(user.onBalance));
    }
  }, [user]);

  useEffect(() => {
    async function loadPortfolio() {
      setLoading(true);
      try {
        const data = await getPortfolio();
        setPortfolio(data);
      } catch {
        setPortfolio(null);
      } finally {
        setLoading(false);
      }
    }

    loadPortfolio();
  }, []);

  useEffect(() => {
    if (demoKey) {
      sessionStorage.setItem(demoKey, String(balance));
    }
  }, [balance]);

  useEffect(() => {
    const storedAmount = sessionStorage.getItem(demoKey);
    if (!storedAmount && user) {
      sessionStorage.setItem(demoKey, String(user.onBalance));
    }
  }, [user]);

  const resetBalance = () => {
    if (user) {
      const initial = user.onBalance;
      setBalance(initial);
      sessionStorage.setItem(demoKey, String(initial));
    }
  };

  const balanceLabel = useMemo(() => {
    return balance.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
  }, [balance]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bgcolor text-white">
        <div className="text-center">
          <p className="mb-4">Please login to access demo mode.</p>
          <button
            className="rounded-xl bg-primary px-6 py-3 text-white"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-bgcolor px-8 py-8 text-white">
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[1px] text-paragraph">
              AlphaTrade Demo
            </p>
            <h1 className="text-4xl font-bold">Demo Portfolio</h1>
          </div>
          <div className="flex gap-3">
            <button
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10"
              onClick={() => navigate("/home")}
            >
              Home
            </button>
            <button
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10"
              onClick={resetBalance}
            >
              Reset Balance
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#14213d]/80 p-6 shadow-lg">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-sm text-paragraph">Demo session balance</p>
              <p className="text-5xl font-bold text-[#DAE2FD]">{balanceLabel}</p>
            </div>
            <div className="space-y-2 text-right">
              <p className="text-sm text-paragraph">Initial balance preserved</p>
              <p className="text-sm text-[#4EDEA3]">
                Session data restores to the original number.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.5fr_1fr]">
        <div className="space-y-8">
          {loading ? (
            <Skeleton height={290} borderRadius={24} />
          ) : (
            <PortfolioChart balance={balance} />
          )}

          <div className="grid gap-6 xl:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#1e293b]/80 p-6">
              <h2 className="mb-6 text-xl font-semibold">Allocation</h2>
              {loading ? (
                <Skeleton count={5} height={28} />
              ) : portfolio?.allocation ? (
                <div className="space-y-3">
                  {portfolio.allocation.map((item) => (
                    <div key={item.name} className="flex items-center justify-between text-sm text-paragraph">
                      <span>{item.name}</span>
                      <span>{item.value}%</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No allocation data found.</p>
              )}
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#1e293b]/80 p-6">
              <h2 className="mb-6 text-xl font-semibold">Recent Transaction</h2>
              {loading ? (
                <Skeleton count={3} height={72} />
              ) : portfolio?.transactions ? (
                <div className="space-y-4">
                  {portfolio.transactions.map((tx) => (
                    <div key={tx.id} className="rounded-2xl border border-white/10 bg-neutral/70 p-4">
                      <div className="flex items-center justify-between gap-4 text-sm text-paragraph">
                        <span>{tx.type}</span>
                        <span>{tx.date}</span>
                      </div>
                      <p className="mt-2 font-semibold text-white">{tx.symbol}: ${tx.amount}</p>
                      <p className="text-xs text-gray-400">{tx.status}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No transactions available.</p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-[#1e293b]/80 p-6">
            <h2 className="mb-6 text-xl font-semibold">Current Holdings</h2>
            {loading ? (
              <Skeleton count={4} height={48} />
            ) : (
              <CurrentHolding />
            )}
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#1e293b]/80 p-6">
            <h2 className="mb-6 text-xl font-semibold">Watchlist</h2>
            {loading ? (
              <Skeleton count={3} height={44} />
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-paragraph">Watchlist is loaded from the demo API.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DemoPage;
