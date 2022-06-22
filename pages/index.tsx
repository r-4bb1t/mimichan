import Text from "components/Text";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Home: NextPage = () => {
  const [isEffect, setIsEffect] = useState(false);

  return (
    <div className={`max-w-md min-h-screen z-10 bg-violet-100 flex flex-col justify-center items-center`}>
      <div className="animate-bounce">
        <img src="/assets/title.png" />
      </div>
      <Link href="/main">
        <a className="bg-[#ac75d9] px-6 py-2 rounded-full text-xl font-bold border-2 border-white">시작하기!</a>
      </Link>
    </div>
  );
};

export default Home;
