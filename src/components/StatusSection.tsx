import { useLanguage } from "../context/LanguageContext";
import { Award } from "lucide-react";
import "../styles/StatusSection.css";

interface StatusSectionProps {
  onCtaClick: () => void;
}

export function StatusSection({ onCtaClick }: StatusSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="status">
      <div className="status-container">
        <div className="status-inner">
          <div className="status-icon-wrap">
            <div className="status-icon-circle">
              <Award className="status-icon" size={40} />
            </div>
          </div>

          <h2 className="status-title">{t.status.title}</h2>

          <div className="status-points">
            {t.status.points.map((point, index) => (
              <div key={index} className="status-card">
                <p className="status-card-text">{point}</p>
              </div>
            ))}
          </div>

          <div className="status-price-block">
            <p className="status-price">{t.status.price}</p>

            <p className="status-conclusion">{t.status.conclusion}</p>
          </div>

          <div className="status-cta-wrap">
            <button onClick={onCtaClick} className="status-cta">
              {t.status.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
