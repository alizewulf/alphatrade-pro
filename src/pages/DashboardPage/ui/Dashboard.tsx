import { useAuth } from "@/app/providers/AuthContext";
import {
  ValueWrapper,
  ValueHeader,
  ValueFooter,
  MSContainer,
  QuickAction,
} from "@/widgets/dashboard";
import Container from "../../../widgets/dashboard/ui/Container";
import WatchlistTable from "@/widgets/dashboard/ui/watchlist-table/WatchlistTable";
import TableItem from "@/widgets/dashboard/ui/watchlist-table/TableItem";

function Dashboard() {
  const bgColor = "bg-[#1E293B]/70";
  const { user } = useAuth();
  return (
    <section className="flex flex-col gap-6 font-inter p-8 bg-bgcolor">
      <Container>
        <ValueWrapper bgColor={bgColor}>
          <ValueHeader user={user} />
          <ValueFooter />
        </ValueWrapper>
        <MSContainer bgColor={bgColor} />
        <QuickAction bgColor={bgColor} />
      </Container>

      <Container>
        <div className="flex flex-col w-2/3">
          <div className="flex justify-between">
            <h3 className="font-bold text-2xl leading-8 text-[#DAE2FD]">
              My Watchlist
            </h3>
            <div className="flex items-center gap-2">
              <button className="py-1 px-3 bg-[#222A3D] rounded-xs font-semibold text-xs leading-3 tracking-[0.6px] text-[#DAE2FD] cursor-pointer">
                Edit List
              </button>
              <button className="py-1 px-3 bg-[#222A3D] rounded-xs font-semibold text-xs leading-3 tracking-[0.6px] text-[#DAE2FD] cursor-pointer">
                Add Symbol
              </button>
            </div>
          </div>
        </div>
      </Container>
      
      <WatchlistTable>
        <TableItem/>
        <TableItem/>
        <TableItem/>
      </WatchlistTable>

    </section>
  );
}

export default Dashboard;
