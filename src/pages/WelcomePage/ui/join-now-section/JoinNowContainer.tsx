import JoinNowButton from "./JoinNowButton";
import JoinNowHeading from "./JoinNowHeading";

function JoinNowContainer() {
  return (
    <section className="px-8 bg-bgcolor font-inter w-full">
      <div className="bg-[linear-gradient(90deg,#4D8EFF_0%,#4D8EFF_50%,#00A572_100%)] rounded-4xl flex justify-between">
        <div className="w-1/2 p-10 flex flex-col gap-4">
          <JoinNowHeading />
        </div>
        <div className="w-1/2 px-10 flex items-center justify-end gap-4">
            <JoinNowButton variant="primary">Get Started Now</JoinNowButton>
            <JoinNowButton variant="secondary">Talk to Sales</JoinNowButton>
        </div>
      </div>
    </section>
  );
}

export default JoinNowContainer;
