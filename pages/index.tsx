import Text from "components/Text";
import type { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "react-i18next";

const Home: NextPage = () => {
  const { t } = useTranslation("initial");

  return (
    <div className="bg-red-300 w-full min-h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-[url(/assets/background.png)] animate-background opacity-50" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url(/assets/background.png)] bg-[length:400px_200px] animate-background2 opacity-30" />
      <div className="z-10 relative w-full max-w-md bg-white bg-[url(https://images.unsplash.com/photo-1567880905822-56f8e06fe630)] bg-cover h-screen">
        <div className="w-full flex items-center justify-center absolute bottom-0">
          <img src="/assets/mimi.png" className="w-full object-contain" />
        </div>
        <Text />
      </div>
    </div>
  );
};

export default Home;
