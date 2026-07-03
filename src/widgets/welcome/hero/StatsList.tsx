type StatsListProps = {
  title: string
  subtitle: string
  gap?: boolean
}

function StatsList({ title, subtitle, gap }: StatsListProps) {
  return (
    <div className={`flex flex-col ${gap ? "gap-4" : ""}`}>
      <span className="text-[#DAE2FD] text-xl leading-7 font-semibold">{title}</span>
      <p className="text-paragraph text-sm leading-6">{subtitle}</p>
    </div>
  )
}

export default StatsList