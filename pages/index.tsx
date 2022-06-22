import type { GetServerSideProps, NextPage } from "next";
import { useTranslation } from "react-i18next";

const Home: NextPage = () => {
  const { t } = useTranslation("initial");

  return (
    <div className={"container mx-auto px-4 py-8"}>
      <h1 className={"text-3xl font-black"}>{t("hello")}</h1>
      <p className={"text-xl"}>{t("message")}</p>
      <p className={"text-xl"}>{t("i18n")}</p>
    </div>
  );
};

export default Home;
