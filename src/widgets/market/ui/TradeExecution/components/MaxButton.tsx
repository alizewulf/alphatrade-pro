type MaxButtonProps = {
  onClick: () => void;
};

export default function MaxButton({ onClick }: MaxButtonProps) {
  return (
    <button
      className="absolute top-1/6 cursor-pointer translate-y-1/2 right-5 text-paragraph font-semibold text-xs tracking-[0.6px]"
      type="button"
      onClick={onClick}
    >
      MAX
    </button>
  );
}

