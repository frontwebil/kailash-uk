import { useLanguage } from "../context/LanguageContext";
import "../styles/WhatIsSection.css";

export function WhatIsSection() {
  const { t } = useLanguage();

  return (
    <section className="whatis">
      <div className="whatis-photo-block">
        <div className="whatis-container">
          <div className="whatis-inner">
            <h2 className="whatis-title section-title-font-size">
              {t.whatIs.title}
            </h2>

            <p className="whatis-subtitle">{t.whatIs.subtitle}</p>

            <p className="whatis-description">{t.whatIs.description}</p>

            <div className="whatis-points">
              {t.whatIs.points.map((point, index) => (
                <div key={index} className="whatis-card">
                  <p className="whatis-card-text">• {point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
