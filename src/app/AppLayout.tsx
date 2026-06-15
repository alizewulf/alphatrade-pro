import { HeaderContent } from "../widgets/header";
import { FooterContent } from "../widgets/footer";
import { Outlet, useMatches } from "react-router";

type RouteHandle = {
  showSocials?: boolean;
};

function AppLayout() {
  const matches = useMatches() as Array<{
    handle?: RouteHandle;
  }>;
  const lastMatch = matches.at(-1);

  const showSocials = lastMatch?.handle?.showSocials ?? true;
  return (
    <>
      <HeaderContent />

      <main>
        <Outlet />
      </main>

      <FooterContent showSocials={showSocials} />
    </>
  );
}

export default AppLayout;
