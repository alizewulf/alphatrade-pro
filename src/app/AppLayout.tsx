import { HeaderContent } from "../widgets/header";
import { FooterContent } from "../widgets/footer";
import { Outlet, useMatches } from "react-router";
import Sidebar from "@/widgets/sidebar/ui/Sidebar";

type RouteHandle = Partial<{
  showSocials: boolean;
  showSidebar: boolean;
}>;

function AppLayout() {
  const matches = useMatches() as Array<{
    handle?: RouteHandle;
  }>;
  const lastMatch = matches.at(-1);

  const showSidebar = lastMatch?.handle?.showSidebar ?? true;
  const showSocials = lastMatch?.handle?.showSocials ?? true;
  return (
    <div className="flex flex-col">
      <HeaderContent />

    <div className="flex">
      {showSidebar && <Sidebar />}
      <main className="w-full">
        <Outlet />
      </main>
    </div>

      <FooterContent showSocials={showSocials} />
    </div>
  );
}

export default AppLayout;
