import { useAuth } from "@/app/providers/AuthContext";
import {
  ValueWrapper,
  ValueHeader,
  ValueFooter,
  MSContainer,
  QuickAction
} from "../dashboard-header";

function Dashboard() {
  const bgColor = "bg-[#1E293B]/70";
  const { user } = useAuth();
  return (
    <section className="flex flex-col gap-6 font-inter p-8 bg-bgcolor">
      <div className="flex flex-row gap-4">
        <ValueWrapper bgColor={bgColor}>
          <ValueHeader user={user} />
          <ValueFooter />
        </ValueWrapper>
        <MSContainer bgColor={bgColor} />
        <QuickAction bgColor={bgColor} />
      </div>
    </section>
  );
}

export default Dashboard;
