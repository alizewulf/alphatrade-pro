import type { ReactNode } from "react";

type WelcomeButtonProps = {
  children: ReactNode;
  variant: "primary" | "secondary";
};

function WelcomeButton({ children, variant }: WelcomeButtonProps) {
  return (
    <button
      className={`py-4 px-8 font-inter text-sm leading-3 tracking-[0.6px] font-semibold rounded-lg cursor-pointer ${variant === "primary" ? "bg-[#ADC6FF] text-[#002E6A]" : "bg-transparent text-[#DAE2FD] outline outline-[#424754]"}`}
    >
      {children}
    </button>
  );
}

export default WelcomeButton;
