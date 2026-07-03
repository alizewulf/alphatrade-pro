function ValueHeader({user}: {user: any}) {
  return (
    <div className="flex font-inter flex-row justify-between gap-10">
      <div className=" gap-2 flex flex-col">
        <p className="text-paragraph uppercase text-xs tracking-[-0.6px] font-bold leading-3">
          Total Portfolio Value
        </p>
        <span className="text-5xl leading-[52.8px] tracking-[-1.2px] text-[#DAE2FD] font-bold">
          ${user?.onBalance}
        </span>
      </div>

      <span className="text-[#4EDEA3] bg-[#4EDEA3]/10 h-fit py-1 px-2 font-bold rounded-xs">
        +4.2% Today
      </span>
    </div>
  );
}

export default ValueHeader;
