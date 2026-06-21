import { useAuth } from "@/app/providers/AuthContext";
import { PortfolioChart } from "../portfolio-chart";
import AllocationSection from "../allocation-section";
import CurrentHolding from "../current-holding";
import RecentTransactions from "../recent-transactions";

function PortfolioPage() {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <section className="bg-bgcolor flex flex-col gap-8 px-8">
        <PortfolioChart balance={user.onBalance ?? 0} />
        <div className="flex gap-8">
          <AllocationSection />
          <CurrentHolding />
        </div>
        <RecentTransactions/>
      </section>
    </>
  );
}

export default PortfolioPage;
