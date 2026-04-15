import { useLanguage } from '../context/LanguageContext';
import { Heart, RefreshCw, Compass, TrendingUp } from 'lucide-react';
import "../styles/ForWhomSection.css";

interface ForWhomSectionProps {
  onCtaClick: () => void;
}

export function ForWhomSection({ onCtaClick }: ForWhomSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="forwhom">
      <div className="forwhom-container">
        <h2 className="forwhom-title section-title-font-size">{t.forWhom.title}</h2>

        <div className="forwhom-inner">
          <div className="forwhom-card">
            <div className="forwhom-card-head">
              <div className="forwhom-icon-wrap">
                <Heart className="forwhom-icon" size={28} />
              </div>
              <h3 className="forwhom-card-title">{t.forWhom.spiritual.title}</h3>
            </div>

            <p className="forwhom-text">{t.forWhom.spiritual.description}</p>
            <p className="forwhom-note">{t.forWhom.spiritual.conclusion}</p>
          </div>

          <div className="forwhom-card">
            <div className="forwhom-card-head">
              <div className="forwhom-icon-wrap">
                <RefreshCw className="forwhom-icon" size={28} />
              </div>
              <h3 className="forwhom-card-title">{t.forWhom.crisis.title}</h3>
            </div>

            <p className="forwhom-text mb4">{t.forWhom.crisis.intro}</p>

            <ul className="forwhom-list">
              {t.forWhom.crisis.points.map((point, index) => (
                <li key={index} className="forwhom-li">• {point}</li>
              ))}
            </ul>

            <p className="forwhom-note">{t.forWhom.crisis.conclusion}</p>
          </div>

          <div className="forwhom-card">
            <div className="forwhom-card-head">
              <div className="forwhom-icon-wrap">
                <Compass className="forwhom-icon" size={28} />
              </div>
              <h3 className="forwhom-card-title">{t.forWhom.premium.title}</h3>
            </div>

            <p className="forwhom-text">{t.forWhom.premium.description}</p>
            <p className="forwhom-note">{t.forWhom.premium.conclusion}</p>
          </div>

          <div className="forwhom-card">
            <div className="forwhom-card-head">
              <div className="forwhom-icon-wrap">
                <TrendingUp className="forwhom-icon" size={28} />
              </div>
              <h3 className="forwhom-card-title">{t.forWhom.entrepreneurs.title}</h3>
            </div>

            <p className="forwhom-text mb4">{t.forWhom.entrepreneurs.intro}</p>

            <ul className="forwhom-list">
              {t.forWhom.entrepreneurs.points.map((point, index) => (
                <li key={index} className="forwhom-li">• {point}</li>
              ))}
            </ul>

            <p className="forwhom-note">{t.forWhom.entrepreneurs.conclusion}</p>
          </div>

          <div className="forwhom-cta-wrap">
            <button onClick={onCtaClick} className="forwhom-cta">
              {t.hero.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}