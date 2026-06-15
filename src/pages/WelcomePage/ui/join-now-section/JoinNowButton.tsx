import React from "react";

type JoinNowButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary";
};

function JoinNowButton({ children, variant }: JoinNowButtonProps) {
  return (
    <button
      className={`px-10 py-5 font-semibold cursor-pointer text-xs leading-3 tracking-[0.6px] rounded-lg ${variant === "primary" ? "text-[#D8E2FF] bg-[#001A42]" : "bg-transparent outline outline-white/20 text-white"}`}
    >
      {children}
    </button>
  );
}

export default JoinNowButton;
