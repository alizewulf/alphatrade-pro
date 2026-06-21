import { useAuth } from "@/app/providers/AuthContext"
import {PortfolioChart} from "../portfolio-chart"

function PortfolioPage() {
  const { user } = useAuth()

  if (!user) {
    return <div>Loading...</div>
  }
  return (
    <>
        <section className="bg-bgcolor ">
          <PortfolioChart balance={user.onBalance ?? 0}/>

        </section>
    </>
)
}

export default PortfolioPage