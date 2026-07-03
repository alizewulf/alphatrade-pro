import HeadingText from "./HeadingText";

export interface HeadingTitleProps {
  isAuth?: boolean;
  isVip: boolean;
  isDemo?: boolean;
}

function HeadingTitle({ isAuth, isVip, isDemo }: HeadingTitleProps) {
  return (
    <>
      {!isAuth ? (
        <HeadingText isVip={isVip} isDemo={isDemo} />
      ) : isVip ? (
        <div className="flex font-inter cursor-pointer flex-col gap-1 pt-4 px-6">
          <HeadingText isAuth={isAuth} isVip={isVip} isDemo={isDemo} />
          <span className="uppercase font-semibold text-xs leading-3 tracking-[1.2px] text-paragraph">
            Premium Tier
          </span>
        </div>
      ) : (
      <HeadingText isAuth={isAuth} isVip={isVip} isDemo={isDemo} />
      )}
    </>
  );
}

export default HeadingTitle;
