function WatchlistTable({children}:{children:React.ReactNode}) {
  return (
    <div className="bg-[#1E293B]/70 py-4 px-6 gap-10 flex flex-col">
        <div className="grid grid-cols-5 font-bold text-xs tracking-[0.55px] text-paragraph uppercase items-center ">
            <span>symbol</span>
            <span>price</span>
            <span>24h <br />change</span>
            <span>market <br/> cap</span>
            <span>chart</span>
        </div>
        {children}
    </div>
  )
}

export default WatchlistTable