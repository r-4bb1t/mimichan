import Text from "components/Text";
import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Home: NextPage = () => {
  const [isEffect, setIsEffect] = useState(false);

  return (
    <div className="bg-yellow-200 w-full min-h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-[url(/assets/background.png)] animate-background opacity-50" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url(/assets/background.png)] bg-[length:400px_200px] animate-background2 opacity-30" />
      <div
        className={`z-10 relative w-full max-w-md bg-white bg-[url(https://images.unsplash.com/photo-1567880905822-56f8e06fe630)] bg-cover h-screen ${
          isEffect && "animate-shake"
        }`}
      >
        <div className="w-full flex items-center justify-center absolute bottom-0">
          <img src="/assets/mimi.png" className="w-full object-contain" />
        </div>
        <Text shake={() => setIsEffect(true)} />
      </div>
    </div>
  );
};

export default Home;
