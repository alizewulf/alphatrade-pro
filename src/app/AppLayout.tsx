import { HeaderContent } from "../widgets/header";
import { FooterContent } from "../widgets/footer";
import { Outlet, useMatches } from "react-router";

type RouteHandle = {
  footer?: "primary" | "secondary";
};

function AppLayout() {
  const matches = useMatches() as Array<{
    handle?: RouteHandle;
  }>;

  const footerVariant =
    matches.at(-1)?.handle?.footer ?? "primary";

  return (
    <>
      <HeaderContent />

      <main>
        <Outlet />
      </main>

      <FooterContent variant={footerVariant} />
    </>
  );
}

export default AppLayout