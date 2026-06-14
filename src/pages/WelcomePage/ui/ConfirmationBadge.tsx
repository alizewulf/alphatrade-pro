import ConfirmedSVG from "../icons/ConfirmedSVG";

function ConfirmationBadge() {
  return (
    <div className="flex gap-2 items-center w-fit text-[#ADC6FF] font-inter text-sm leading-3 tracking-[0.6px] font-semibold bg-[#ADC6FF]/10 outline outline-[#ADC6FF]/20 py-1.5 px-3.25 rounded-xl">
      <ConfirmedSVG />
      <span>TRUSTED BY 2M+ TRADERS</span>
    </div>
  );
}

export default ConfirmationBadge;
