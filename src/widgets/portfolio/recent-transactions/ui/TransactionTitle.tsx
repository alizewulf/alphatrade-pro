function TransactionTitle({
  paragraph,
  span,
}: {
  paragraph: string;
  span: string;
}) {
  return (
    <div className="flex flex-col justify-center gap-1 h-full flex-1">
      <p className="font-semibold text-sm leading-5 text-[#DAE2FD]">
        {paragraph}
      </p>
      <span className="text-xs leading-4 text-paragraph">{span}</span>
    </div>
  );
}

export default TransactionTitle;
