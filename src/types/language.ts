export type Language = "uk" | "ru";

export interface TranslationContent {
  hero: {
    title: string;
    subtitle: string;
    location: string;
    duration: string;
    highlights: string;
    notTour: string;
    event: string;
    date1: string;
    date2: string;
    cta: string;
  };
  sagaDawa: {
    badge: string;
    title: string;
    description: string;
    features: string[];
    why: string;
    whyPoints: string[];
    conclusion: string;
    important: string;
    importantText: string;
    importantPoints: string[];
    importantNote: string;
    cta: string;
  };
  whatIs: {
    title: string;
    subtitle: string;
    description: string;
    points: string[];
    conclusion: string;
  };
  forWhom: {
    title: string;
    spiritual: {
      title: string;
      description: string;
      conclusion: string;
    };
    crisis: {
      title: string;
      intro: string;
      points: string[];
      conclusion: string;
    };
    premium: {
      title: string;
      description: string;
      conclusion: string;
    };
    entrepreneurs: {
      title: string;
      intro: string;
      points: string[];
      conclusion: string;
    };
  };
  kora: {
    title: string;
    description: string;
    details: string;
  };
  manasarovar: {
    title: string;
    description: string;
  };
  safety: {
    title: string;
    description: string;
    features: string[];
    note: string;
    cta: string;
  };
  gallery: {
    title: string;
    subTitle: string;
  };
  status: {
    title: string;
    points: string[];
    price: string;
    conclusion: string;
    cta: string;
  };
  finalCta: {
    title: string;
    priceNote: string;
    benefits: string[];
    conclusion: string;
    cta: string;
    ctaInfo: string;
  };
  form: {
    title: string;
    name: string;
    contact: string;
    email: string;
    submit: string;
    success: string;
  };
}
