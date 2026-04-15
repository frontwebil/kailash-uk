import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/GallerySliderSection.css";
import { useLanguage } from "../context/LanguageContext";

const slides = [
  {
    image: "/dava/dava-1.webp",
  },
  {
    image: "/dava/dava-2.webp",
  },
  {
    image: "/dava/dava-3.webp",
  },
  {
    image: "/dava/dava-4.webp",
  },
  {
    image: "/potala.jpg",
  },
  {
    image: "/sunset.webp",
  },
  {
    image: "/sunset-2.webp",
  },
  {
    image: "/manasovar.webp",
  },
];

export function GallerySliderSection() {
  const { t } = useLanguage();
  return (
    <section className="gallery-slider">
      <div className="gallery-slider-container">
        <div className="gallery-slider-head">
          <h2 className="gallery-slider-title section-title-font-size">
            {t.gallery.title}
          </h2>

          <p className="gallery-slider-subtitle">{t.gallery.subTitle}</p>
        </div>

        <div className="gallery-slider-wrap">
          <button
            className="gallery-slider-nav gallery-slider-prev"
            aria-label="Попередній слайд"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            className="gallery-slider-nav gallery-slider-next"
            aria-label="Наступний слайд"
          >
            <ChevronRight size={22} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            speed={600}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            navigation={{
              prevEl: ".gallery-slider-prev",
              nextEl: ".gallery-slider-next",
            }}
            pagination={{
              el: ".gallery-slider-pagination",
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="gallery-swiper"
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i + 1}>
                <article className="gallery-slide-card">
                  <div className="gallery-slide-image-wrap">
                    <img
                      src={slide.image}
                      alt={`Галерея Кайлаш фото ${i + 1}`}
                      className="gallery-slide-image"
                      loading="lazy"
                    />
                  </div>
                  {/* 
                  <div className="gallery-slide-content">
                    <h3 className="gallery-slide-title">{slide.title}</h3>
                    <p className="gallery-slide-text">{slide.text}</p>
                  </div> */}
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="gallery-slider-pagination"></div>
        </div>
      </div>
    </section>
  );
}
