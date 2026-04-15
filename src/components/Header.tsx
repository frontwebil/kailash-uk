import { useLanguage } from "../context/LanguageContext";
import { Globe, Mountain } from "lucide-react";
import "../styles/Header.css";
import { useEffect, useState } from "react";

export function Header() {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo flex gap-1 items-center">
          <Mountain size={32} />
          KAILASH
        </div>

          <button
            onClick={() => setLanguage(language === "uk" ? "ru" : "uk")}
            className="lang-button"
          >
            <Globe size={18} className="globe-icon" />
            <span className="lang-text">{language === "uk" ? "RU" : "UA"}</span>
          </button>
      </div>
    </header>
  );
}
