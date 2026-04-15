import { useLanguage } from "../context/LanguageContext";
import { Sparkles, AlertCircle } from "lucide-react";
import "../styles/SagaDawaSection.css";

interface SagaDawaSectionProps {
  onCtaClick: () => void;
}

export function SagaDawaSection({ onCtaClick }: SagaDawaSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="saga">
      <div className="saga-container">
        <div className="saga-badge">
          <Sparkles className="saga-badge-icon" size={24} />
          <span className="saga-badge-text">
            {t.sagaDawa.badge}{" "}
            <span style={{ textWrap: "nowrap" }}>сага-дава</span>
          </span>
        </div>

        <h2 className="saga-title">{t.sagaDawa.title}</h2>

        <p className="saga-desc">{t.sagaDawa.description}</p>

        <div className="saga-features">
          {t.sagaDawa.features.map((feature, index) => (
            <div key={index} className="saga-feature-card">
              <p className="saga-feature-text">• {feature}</p>
              {/* <img src={`/dava/${index}.jpg`} alt="" /> */}
            </div>
          ))}
        </div>
      </div>

      <div className="saga-photo-block">
        <div className="saga-container">
          <h3 className="saga-why-title section-title-font-size">
            {t.sagaDawa.why}
          </h3>

          <div className="saga-flex-container">
            <div className="saga-why">
              {t.sagaDawa.whyPoints.map((point, index) => (
                <div key={index} className="saga-why-card">
                  <p className="saga-why-text">• {point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="saga-important">
            <div className="saga-important-row">
              <AlertCircle className="saga-important-icon" size={24} />
              <div className="saga-important-body">
                <h4 className="saga-important-title">{t.sagaDawa.important}</h4>
                <p className="saga-important-text">
                  {t.sagaDawa.importantText}
                </p>

                <ul className="saga-important-list">
                  {t.sagaDawa.importantPoints.map((point, index) => (
                    <li key={index} className="saga-important-li">
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="saga-important-note">{t.sagaDawa.importantNote}</p>
          </div>
        </div>
      </div>
      <div className="saga-cta-wrap">
        <p className="saga-conclusion">{t.sagaDawa.conclusion}</p>

        <button onClick={onCtaClick} className="saga-cta">
          {t.sagaDawa.cta}
        </button>
      </div>
    </section>
  );
}
