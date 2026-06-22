function TransactionTitle({paragraph, span}:{paragraph: string, span: string}) {
  return (
    <div className="flex flex-col ">
      <p className="text-base font-semibold text-[#DAE2FD] leading-6 ">
        {paragraph}
      </p>
      <span className="text-sm leading-5.25 text-paragraph">
        {span}
      </span>
    </div>
  );
}

export default TransactionTitle;
