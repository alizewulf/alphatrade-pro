interface ArrowSVGProps {
  variant: "up" | "down"
}

function ArrowSVG({variant = "up"}:ArrowSVGProps) {
  return (
    <svg
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.66667 10.6667V2.55L0.933333 6.28333L0 5.33333L5.33333 0L10.6667 5.33333L9.73333 6.28333L6 2.55V10.6667H4.66667Z"
        fill={variant === "up" ? "#4EDEA3" : "#FFB3AD"}
       transform={variant === "down" ? "rotate(180 5.333 5.333)" : ""}
/>
    </svg>
  );
}

export default ArrowSVG;
