import Container from "@/shared/ui/container";
import Trader from '../icons/Trader.png'
import Trader1 from '../icons/Trader-1.png'
import Trader2 from '../icons/Trader-2.png'
import ActiveUsersIcon from "./ActiveUsersIcon";
import VolumeSession from "./VolumeSession";
function MarketHeat() {
  return (
    <Container className="w-1/3 flex flex-col gap-2">
        <h3 className="font-bold text-xl text-[#DAE2FD]">Market Heat</h3>
        <div className="flex flex-col gap-4">
            <p className="text-paragraph text-sm leading-5">Active users trading right now</p>
            <div className="flex">
                <ActiveUsersIcon img={Trader} />
                <ActiveUsersIcon img={Trader1} />
                <ActiveUsersIcon img={Trader2} />
                <span className="text-[15px] font-bold text-[#DAE2FD] outline-2 outline-[#0B1326] bg-[#2D3449] w-10 h-10 flex justify-center items-center rounded-xl">+1.2k</span>
            </div>
            <VolumeSession isHigh={true}/>
        </div>
    </Container>
  )
}

export default MarketHeat