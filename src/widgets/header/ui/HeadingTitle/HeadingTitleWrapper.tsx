import HeadingText from "./HeadingText";

interface HeadingTitleProps {
  isAuth: boolean;
  isVip: boolean;
}

function HeadingTitle({ isAuth, isVip}: HeadingTitleProps) {
  return (
    <>
      {!isAuth ? (
        <HeadingText/>
      ) : isVip ? (
        <div className="flex font-inter flex-col gap-1 pt-4 px-6">
          <HeadingText/>
          <span className="uppercase font-semibold text-xs leading-3 tracking-[1.2px] text-[#C2C6D6]">
            Premium Tier
          </span>
        </div>
      ) : (
      <HeadingText/>
      )}
    </>
  );
}

export default HeadingTitle;
