import { useNavigate } from "react-router";

function HeadingText() {
const navigate = useNavigate()
  return (
    <h3 className="font-inter text-white font-bold cursor-pointer tracking-[-0.6px] leading-[31.2px] text-2xl select-none" onClick={() => navigate("/home")}>
      AlphaTrade
    </h3>
  );
}

export default HeadingText;
