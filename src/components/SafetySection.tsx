import { useLanguage } from "../context/LanguageContext";
import { Shield, Check } from "lucide-react";
import "../styles/SafetySection.css";

interface SafetySectionProps {
  onCtaClick: () => void;
}

export function SafetySection({ onCtaClick }: SafetySectionProps) {
  const { t } = useLanguage();

  return (
    <section className="safety">
      <div className="safety-container">
        <div className="safety-inner">
          <div className="safety-icon-wrap">
            <div className="safety-icon-circle">
              <Shield className="safety-icon" size={40} />
            </div>
          </div>

          <h2 className="safety-title">{t.safety.title}</h2>

          <p className="safety-description">{t.safety.description}</p>

          <div className="safety-grid">
            {t.safety.features.map((feature, index) => (
              <div key={index} className="safety-card">
                <Check className="safety-check" size={20} />
                <span className="safety-feature-text">{feature}</span>
              </div>
            ))}
          </div>

          <p className="safety-note">{t.safety.note}</p>

          <div className="safety-cta-wrap">
            <button onClick={onCtaClick} className="safety-cta">
              {t.safety.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
