import type { ReactNode } from "react"
import { HeaderContent } from "../widgets/header"
import { FooterContent } from "../widgets/footer"

type LayoutProps = {
    children: ReactNode
}

function AppLayout({children}:LayoutProps) {
  return (
    <>
        <HeaderContent></HeaderContent>
        <main>{children}</main>
        <FooterContent></FooterContent>
    </>
  )
}

export default AppLayout