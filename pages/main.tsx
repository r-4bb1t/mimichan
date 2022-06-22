import Text from "components/Text";
import type { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Home: NextPage = () => {
  const [isEffect, setIsEffect] = useState(false);

  return (
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
  );
};

export default Home;
