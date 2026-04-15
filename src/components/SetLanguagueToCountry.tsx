import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export function SetLanguagueToCountry() {
  const { setLanguage, language } = useLanguage();
  const fixedLanguage = import.meta.env.VITE_SITE_LANGUAGE as
    | "uk"
    | "ru"
    | undefined;

  const getCurrentCountry = async () => {
    if (fixedLanguage === "uk" || fixedLanguage === "ru") {
      setLanguage(fixedLanguage);
      return;
    }

    const geo = await fetch("http://ip-api.com/json/");
    const data = await geo.json();

    if (data.country == "Ukraine") {
      setLanguage("uk");
    } else {
      setLanguage("ru");
    }

    console.log(language);
  };

  useEffect(() => {
    getCurrentCountry();
  }, []);

  return <></>;
}
