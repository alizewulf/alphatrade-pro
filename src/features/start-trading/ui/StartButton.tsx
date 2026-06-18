import { useNavigate } from "react-router"

function StartTrading() {
  
  const navigate = useNavigate()
  
  return (
    <button className="py-4 px-8 font-inter text-sm leading-3 tracking-[0.6px] font-semibold rounded-lg cursor-pointer bg-[#ADC6FF] text-[#002E6A]" onClick={() => navigate('/login')}>Start Trading</button>
  )
}

export default StartTrading