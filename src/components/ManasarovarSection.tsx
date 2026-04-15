import { useLanguage } from "../context/LanguageContext";
import { Droplet } from "lucide-react";
import "../styles/ManasarovarSection.css";

export function ManasarovarSection() {
  const { t } = useLanguage();

  return (
    <section className="manasarovar">
      <div className="manasarovar-container">
        <div className="manasarovar-inner">
          <div className="manasarovar-icon-wrap">
            <div className="manasarovar-icon-circle">
              <Droplet className="manasarovar-icon" size={40} />
            </div>
          </div>
          <h2 className="manasarovar-title">{t.manasarovar.title}</h2>
          <div className="manasovar-flex-container">
            <div className="manasarovar-text-container">
              <p className="manasarovar-description">
                {t.manasarovar.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
