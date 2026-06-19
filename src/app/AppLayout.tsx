import { HeaderContent } from "../widgets/header";
import { FooterContent } from "../widgets/footer";
import { Outlet, useMatches } from "react-router";
import Sidebar from "@/widgets/sidebar/ui/Sidebar";

type RouteHandle = Partial<{
  showSocials: boolean;
  showSidebar: boolean;
  footerFullWidth: boolean;
  isVip: boolean;
}>;

function AppLayout() {
  const matches = useMatches() as Array<{
    handle?: RouteHandle;
  }>;

  const lastMatch = matches.at(-1);

  const showSidebar = lastMatch?.handle?.showSidebar ?? true;
  const showSocials = lastMatch?.handle?.showSocials ?? true;
  const footerFullWidth = lastMatch?.handle?.footerFullWidth ?? false;

  return (
    <div className="flex min-h-screen flex-col">
      <HeaderContent />

      <div className="flex flex-1">
        {showSidebar && <Sidebar />}

        <main className="flex flex-col flex-1">
          <div className="flex-1">
            <Outlet />
          </div>

          {!footerFullWidth && <FooterContent showSocials={showSocials} />}
        </main>
      </div>

      {footerFullWidth && <FooterContent showSocials={showSocials} />}
    </div>
  );
}


export default AppLayout;
