import type { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "nav" | "icon";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-2 active:scale-[0.99]",
  secondary:
    "bg-transparent text-[#DAE2FD] outline outline-[#424754] hover:bg-[#424754]/20",
  ghost:
    "bg-transparent text-paragraph hover:text-white",
  nav:
    "bg-primary-2 text-white font-semibold text-xs leading-3 tracking-[0.6px] px-4 py-2 rounded-sm",
  icon:
    "rounded-xl outline outline-[#424754] p-2 hover:bg-[#424754]/20",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: ButtonProps) {
  const base =
    "font-inter cursor-pointer transition rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <button
      className={`${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
