interface StatisticWrapperProps {
    textContent: string
    percent: string
    color: string
}

function StatisticWrapper({textContent, percent, color}:StatisticWrapperProps) {
    const textStyle = "text-base leading-6"
    return (
    <div className="w-full flex items-center font-inter justify-between">
        <div className="flex gap-2 items-center ">
            <span className="w-2 h-2 rounded-full" style={{backgroundColor: color}}></span>
            <span className={`${textStyle} text-[#C2C6D6]`}>{textContent}</span>
        </div>
        <span className={`${textStyle} text-[#DAE2FD]`}>{percent}%</span>
    </div>
  )
}

export default StatisticWrapper