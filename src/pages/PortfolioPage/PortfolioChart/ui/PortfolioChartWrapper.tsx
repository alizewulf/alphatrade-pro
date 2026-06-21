interface PortfolioChartWrapper {
  children: React.ReactNode;
}
function PortfolioChartWrapper({ children }: PortfolioChartWrapper) {
  return (
    <div className="bg-[#111827] font-inter rounded-2xl p-6">
      <p className="text-[#C2C6D6] text-xs font-semibold leading-3  tracking-widest uppercase mb-2">
        Total Portfolio Value
      </p>
      {children}
    </div>
  );
}

export default PortfolioChartWrapper;
