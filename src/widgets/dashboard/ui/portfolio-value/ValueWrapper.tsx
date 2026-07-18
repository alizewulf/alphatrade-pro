function ValueWrapper({ children , bgColor}: { children: React.ReactNode; bgColor: string }) {
  return (
    <div className={`flex w-full flex-col gap-6 rounded-3xl p-8 ${bgColor}`}>
      {children}
    </div>
  );
}

export default ValueWrapper;
