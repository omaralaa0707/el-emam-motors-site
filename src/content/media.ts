/**
 * Sourced from @elemammotors. Every price below is transcribed from their own
 * published cards; the UI labels them as-published and subject to change.
 */

export type Tier = { deposit: number; monthly: number };

export type Plan = {
  make: string;
  model: string;
  frame: string;
  /** Their own framing: pick a deposit, and the deposit sets the instalment. */
  tiers: Tier[];
};

export const PLANS: Plan[] = [
  {
    make: "MG",
    model: "MG5 Luxury 2026",
    frame: "/media/car-22.webp",
    tiers: [
      { deposit: 292200, monthly: 19034 },
      { deposit: 389600, monthly: 15828 },
      { deposit: 487000, monthly: 12581 },
    ],
  },
  {
    make: "MG",
    model: "MG ONE",
    frame: "/media/car-32.webp",
    tiers: [
      { deposit: 414000, monthly: 26968 },
      { deposit: 552000, monthly: 22425 },
      { deposit: 690000, monthly: 18113 },
    ],
  },
];

/** Single-line offers, each transcribed from one of their cards. */
export const OFFERS = [
  { make: "MG", model: "ZS 2027", frame: "/media/car-09.webp", monthly: 18688 },
  { make: "Chery", model: "Arrizo 5", frame: "/media/car-14.webp", monthly: 12106, deposit: 298000 },
  { make: "Chery", model: "Arrizo", frame: "/media/car-27.webp", monthly: 12838, deposit: 316000 },
  { make: "Nissan", model: "Magnite", frame: "/media/car-11.webp", monthly: 15405 },
  { make: "Opel", model: "Grandland Top Line 2026", frame: "/media/car-06.webp", monthly: 31687, deposit: 780000 },
  { make: "Kaiyi", model: "X3", frame: "/media/car-38.webp", monthly: 15275, deposit: 376000 },
];

/**
 * Deliberately product and showroom art only. Their feed includes photographs
 * of identifiable customers; those are their posts to make, not ours to
 * republish on an unofficial site.
 */
export const HANDOVERS = [
  "/media/car-33.webp",
  "/media/car-21.webp",
  "/media/car-34.webp",
  "/media/car-35.webp",
  "/media/car-09.webp",
];

/** Showrooms and lineup art. */
export const LINEUP = [
  "/media/car-21.webp",
  "/media/car-33.webp",
  "/media/car-34.webp",
  "/media/car-35.webp",
];

export const HERO_FRAME = "/media/car-33.webp";
export const CORRIDOR = [
  "/media/car-33.webp",
  "/media/car-21.webp",
  "/media/car-09.webp",
  "/media/car-34.webp",
  "/media/car-35.webp",
  "/media/car-06.webp",
];

/** Makes named across their own cards. */
export const MAKES = [
  "MG",
  "Chery",
  "DFSK",
  "Kaiyi",
  "Nissan",
  "Opel",
  "Soueast",
  "Mitsubishi",
  "Changan",
  "Chevrolet",
  "Forthing",
];
