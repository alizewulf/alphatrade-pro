function ValueWrapper({ children , bgColor}: { children: React.ReactNode; bgColor: string }) {
  return (
    <div className={`flex flex-col gap-6 rounded-lg p-6 w-2/3 ${bgColor}`}>
      {children}
    </div>
  );
}

export default ValueWrapper;
