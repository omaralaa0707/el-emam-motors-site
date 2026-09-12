import type { SiteContent } from "@/i18n/schema";

export const en: SiteContent = {
  locale: "en",
  dir: "ltr",
  brand: {
    name: "El Emam Motors",
    shortName: "EL EMAM MOTORS",
    tagline: "51 years behind you",
  },
  nav: [
    { label: "Choose your deposit", href: "#plans" },
    { label: "Offers", href: "#offers" },
    { label: "Showroom walk", href: "#handovers" },
    { label: "Branches", href: "#visit" },
  ],
  hero: {
    eyebrow: "Maadi · Manial · Nasr City",
    headline: "Fifty-one years behind you",
    sub: "Authorised dealer for 15+ makes. Choose your deposit, and the deposit sets your instalment — we handle the rest.",
    primaryCta: "Choose your deposit",
    secondaryCta: "Talk to us",
  },
  about: {
    heading: "Choosing a car shouldn't be complicated",
    body: [
      "El Emam Motors has been trading in Egypt for fifty-one years — an authorised dealer for more than fifteen makes, with branches in Maadi, Manial and Nasr City.",
      "The method is plain: the deposit and the instalment are on the table from the start, and you pick the pairing that suits your income. Nothing appears after the signature.",
    ],
    stats: [
      { value: "51", label: "Years trading" },
      { value: "15+", label: "Makes" },
      { value: "3", label: "Branches" },
    ],
  },
  services: {
    heading: "Why El Emam",
    intro: "Every figure here is transcribed from their own published cards.",
    items: [
      {
        title: "Authorised for 15+ makes",
        body: "MG, Chery, Nissan, Opel, Kaiyi, DFSK, Mitsubishi and more — under one roof.",
      },
      {
        title: "Immediate delivery",
        body: "Models available to take from the showroom without a waiting list.",
      },
      {
        title: "At the official price",
        body: "Priced as the manufacturer lists it, with no over-price added.",
      },
      {
        title: "Three branches",
        body: "Maadi, Manial and Nasr City — open daily from noon until 11pm.",
      },
    ],
  },
  gallery: {
    heading: "Walk the showroom",
    intro: "Walk past the models the showroom is currently advertising.",
    items: [],
  },
  contact: {
    heading: "Come to the nearest branch",
    intro: "Call and we'll work out the instalment before you arrive, or drop into any branch.",
    addressLabel: "Branches",
    address: "Maadi · Manial · Nasr City, Cairo",
    phoneLabel: "Phone",
    phones: ["0122 555 5853"],
    hoursLabel: "Opening hours",
    hours: "Daily, 12:00 — 23:00",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=El+Emam+Motors+Nasr+City+Cairo",
    instagramUrl: "https://www.instagram.com/elemammotors/",
    facebookUrl: "https://www.facebook.com/ElEmamforCars/",
    cta: "Get directions",
  },
  footer: {
    rights: "© El Emam Motors. All rights reserved.",
  },
  a11y: {
    toggleLanguage: "Switch to Arabic",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
};
