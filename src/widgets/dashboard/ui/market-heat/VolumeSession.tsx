function VolumeSession({isHigh}:{isHigh: boolean}) {
  return (
    <div className="flex gap-2 items-center">
        <span className={`w-2 h-2 ${isHigh ? 'bg-positive' : 'bg-negative'} rounded-full`}></span>
        <span className={`text-${isHigh ? 'positive' : 'negative'} text-xs font-bold tracking-[0.6px]`}>{isHigh ? 'High' : 'Low'} Volume Section</span>
    </div>
  )
}

export default VolumeSession