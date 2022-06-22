import Text from "components/Text";
import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import script from "../components/script.json";

const Home: NextPage = () => {
  const [isEffect, setIsEffect] = useState(false);
  const [index, setIndex] = useState(0);
  return (
    <div
      className={`z-10 relative w-full max-w-md bg-white h-screen bg-cover bg-center ${isEffect && "animate-shake"}`}
      style={{ backgroundImage: `url(${script[index].background})` }}
    >
      <div className="w-full flex items-center justify-center absolute bottom-0">
        <img src={`/assets/mimi${script[index].mimi}.png`} className="w-full object-contain" />
      </div>
      <Text
        shake={() => {
          setIsEffect(true);
          setTimeout(() => setIsEffect(false), 1000);
        }}
        index={index}
        setIndex={setIndex}
      />
    </div>
  );
};

export default Home;
