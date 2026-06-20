import HeadingText from "./HeadingText";

export interface HeadingTitleProps {
  isAuth?: boolean;
  isVip: boolean;
}

function HeadingTitle({ isAuth, isVip}: HeadingTitleProps) {
  return (
    <>
      {!isAuth ? (
        <HeadingText isVip={isVip} />
      ) : isVip ? (
        <div className="flex font-inter flex-col gap-1 pt-4 px-6">
          <HeadingText isAuth={isAuth} isVip={isVip} />
          <span className="uppercase font-semibold text-xs leading-3 tracking-[1.2px] text-[#C2C6D6]">
            Premium Tier
          </span>
        </div>
      ) : (
      <HeadingText isAuth={isAuth} isVip={isVip} />
      )}
    </>
  );
}

export default HeadingTitle;
