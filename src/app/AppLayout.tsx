import { HeaderContent } from "../widgets/header"
import { FooterContent } from "../widgets/footer"
import { Outlet } from "react-router"

function AppLayout() {
  return (
    <>
        <HeaderContent></HeaderContent>
        <main>
          <Outlet/>
        </main>
        <FooterContent></FooterContent>
    </>
  )
}

export default AppLayout