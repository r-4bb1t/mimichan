import { useState } from "react";
import { WindupChildren, useSkip, Effect, Pause, Pace } from "windups";

interface TextProps {
  shake: () => void;
}

const SkipButton = ({ isTyping }: { isTyping: boolean }) => {
  const skip = useSkip();
  return <div onClick={isTyping ? skip : () => {}} className="w-full h-full absolute top-0 left-0" />;
};

const Text = ({ shake }: TextProps) => {
  const [isTyping, setIsTyping] = useState(true);
  return (
    <div className="w-full absolute bottom-0 flex flex-col">
      <div className="relative w-[100px] h-[50px] translate-y-5 ml-3">
        <img src="/assets/name.png" />
        <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center font-bold font-[PyeongChangPeace] pt-5">
          보검이
        </div>
      </div>
      <div className="w-full bg-[#514e6e] bg-opacity-80 px-2 py-2 text-white">
        <div
          className={`border-[1px] border-[#9c9aacs] border-dashed w-full h-full min-h-[150px] px-8 py-8 after-text ${
            isTyping && "is-typing"
          }`}
        >
          <WindupChildren onFinished={() => setIsTyping(false)}>
            <SkipButton isTyping={isTyping} />
            <Pace ms={50}>
              효경아.
              <Pause ms={1000} />
              <br />
              나랑 <Effect fn={shake} />
              사귀자.
              <Pause ms={1000} />
              <br />
              사랑해.
            </Pace>
          </WindupChildren>
        </div>
      </div>
    </div>
  );
};

export default Text;
