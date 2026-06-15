type StatsListProps = {
    title: string,
    subtitle: string,
    isCentral?: boolean
}

function StatsList({title, subtitle, isCentral}:StatsListProps) {
  return (
    <div className={`flex font-inter flex-col ${isCentral && "border-r border-l border-[#424754] px-6"}`}>
        <span className="text-[#DAE2FD] text-xl leading-7 font-semibold">{title}</span>
        <p className="text-headerButton text-sm leading-5.5 capitalize">{subtitle}</p>
    </div>
  )
}

export default StatsList