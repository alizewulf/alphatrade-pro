import { useAuth } from "@/app/providers/AuthContext";
import { PortfolioChart } from "@/widgets/portfolio/portfolio-chart";
import AllocationSection from "@/widgets/portfolio/allocation-section";
import CurrentHolding from "@/widgets/portfolio/current-holding";
import RecentTransactions from "@/widgets/portfolio/recent-transactions";

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
