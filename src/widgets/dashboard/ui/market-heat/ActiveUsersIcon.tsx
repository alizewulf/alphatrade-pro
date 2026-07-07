function ActiveUsersIcon({img}:{img?: string}) {
  return (
    <div className="w-10 h-10 rounded-xl outline-2 outline-[#0B1326]">
        <img src={img} alt="User" />
    </div>
  )
}

export default ActiveUsersIcon