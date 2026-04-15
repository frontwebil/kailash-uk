import { useLanguage } from "../context/LanguageContext";
import { Calendar } from "lucide-react";
import "../styles/HeroSection.css";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={{
          backgroundImage: "url(/hero.jpg)",
        }}
      >
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">{t.hero.title}</h1>

        <p className="hero-subtitle">{t.hero.subtitle}</p>

        <p className="hero-location">{t.hero.location}</p>

        <div className="hero-info">
          <p className="hero-not-tour">{t.hero.notTour}</p>
          <p className="hero-event">{t.hero.event}</p>
        </div>

        <div className="hero-dates">
          <div className="hero-date-pill">
            <Calendar size={20} />
            <span className="hero-date-text">{t.hero.date1}</span>
          </div>

          <div className="hero-date-pill">
            <Calendar size={20} />
            <span className="hero-date-text">{t.hero.date2}</span>
          </div>
        </div>

        <button onClick={onCtaClick} className="hero-cta">
          {t.hero.cta}
        </button>
      </div>

      {/* 
      <div className="scroll-hint">
        <div className="scroll-mouse">
          <div className="scroll-dot"></div>
        </div>
      </div> 
      */}
    </section>
  );
}
