function Container({ children, containerGap, className }: { 
  className?: string
  containerGap?: number
  children: React.ReactNode }) {
  return (
    <div
      className={`flex flex-col ${className} ${containerGap?  `gap-${containerGap}` : ""} bg-[#1E293B]/70 p-6 rounded-lg font-inter outline outline-[#FFFFFF]/10`}
    >
      {children}
    </div>
  );
}

export default Container;
