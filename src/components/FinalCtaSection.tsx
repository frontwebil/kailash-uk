import { useLanguage } from "../context/LanguageContext";
import { CheckCircle2 } from "lucide-react";
import "../styles/FinalCtaSection.css";
import { useEffect, useState } from "react";

interface FinalCtaSectionProps {
  onCtaClick: () => void;
}

export function FinalCtaSection({ onCtaClick }: FinalCtaSectionProps) {
  const { t, language } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });
  const deadline = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    22,
    23,
    59,
    59,
  );

  // const formattedDate = deadline.toLocaleDateString("uk-UA", {
  //   day: "numeric",
  //   month: "2-digit",
  // });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = deadline.getTime() - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);

      setTimeLeft({ days, hours, minutes });
    };

    updateTimer(); // ← важливо (перший запуск)

    const interval = setInterval(updateTimer, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="finalcta">
      <div
        className="finalcta-bg"
        style={{
          backgroundImage: "url(/kora.jpg)",
          backgroundPosition: "center",
        }}
      >
        <div className="finalcta-overlay"></div>
      </div>

      <div className="finalcta-container">
        <div className="finalcta-inner">
          <h2 className="finalcta-title">{t.finalCta.title}</h2>
          <div className="finalcta-timer">
            <div className="finalcta-timer-card">
              <span className="finalcta-timer-value">{timeLeft.days}</span>
              <span className="finalcta-timer-text">
                {language === "uk" ? "днів" : "дней"}
              </span>
            </div>

            <div className="finalcta-timer-card">
              <span className="finalcta-timer-value">{timeLeft.hours}</span>
              <span className="finalcta-timer-text">
                {language === "uk" ? "годин" : "часов"}
              </span>
            </div>

            <div className="finalcta-timer-card">
              <span className="finalcta-timer-value">{timeLeft.minutes}</span>
              <span className="finalcta-timer-text">
                {language === "uk" ? "хвилин" : "минут"}
              </span>
            </div>
          </div>
          <div className="finalcta-price-box">
            <p className="finalcta-price-note">
              {language == "uk" ? (
                <>
                  Вартість <strong>2900€</strong>{" "}
                  <span className="line-through font-normal">3200€</span>
                </>
              ) : (
                <>
                  Цена <strong>2900€</strong>{" "}
                  <span className="line-through font-normal">3200€</span>
                </>
              )}
            </p>
          </div>

          <p className="finalcta-intro">{t.finalCta.ctaInfo}:</p>

          <div className="finalcta-benefits">
            {t.finalCta.benefits.map((benefit, index) => (
              <div key={index} className="finalcta-benefit">
                <CheckCircle2 className="finalcta-check" size={24} />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <p className="finalcta-conclusion">{t.finalCta.conclusion}</p>

          <button onClick={onCtaClick} className="finalcta-button">
            {t.finalCta.cta}
          </button>
        </div>
      </div>
    </section>
  );
}
