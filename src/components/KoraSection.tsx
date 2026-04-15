import { useLanguage } from "../context/LanguageContext";
import { Mountain } from "lucide-react";
import "../styles/KoraSection.css";

export function KoraSection() {
  const { t } = useLanguage();

  return (
    <section className="kora">
      <div
        className="kora-bg"
        style={{
          backgroundImage:
            "url(/potala.jpg)",
        }}
      >
        <div className="kora-overlay"></div>
      </div>

      <div className="kora-container">
        <div className="kora-inner">
          <div className="kora-icon-wrap">
            <div className="kora-icon-circle">
              <Mountain className="kora-icon" size={40} />
            </div>
          </div>

          <h2 className="kora-title section-title-font-size">{t.kora.title}</h2>

          <p className="kora-description">{t.kora.description}</p>

          <p className="kora-details">{t.kora.details}</p>
        </div>
      </div>
    </section>
  );
}
