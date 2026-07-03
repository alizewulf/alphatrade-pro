import TransactionTitle from "./TransactionTitle";

interface TransactionWrapperProps {
  SVG: React.ReactNode;
  paragraph: string;
  span: string;
  children: React.ReactNode;
}


function TransactionItemWrapper({
  SVG,
  paragraph,
  span,
  children,
}: TransactionWrapperProps) {
  return (
    <div className="bg-[#171F33] flex rounded-sm outline justify-between p-4 items-center outline-[#424754]/5">
      <div className="flex gap-4 font-inter">
        <span className="p-2.5 bg-[#00A572]/20 rounded-xl">{SVG}</span>
        <TransactionTitle paragraph={paragraph} span={span} />
      </div>
      {children}
    </div>
  );
}

export default TransactionItemWrapper;

