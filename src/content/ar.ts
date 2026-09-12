import type { SiteContent } from "@/i18n/schema";

export const ar: SiteContent = {
  locale: "ar",
  dir: "rtl",
  brand: {
    name: "الإمام موتورز",
    shortName: "EL EMAM MOTORS",
    tagline: "٥١ سنة في ضهرك",
  },
  nav: [
    { label: "اختار مقدمك", href: "#plans" },
    { label: "العروض", href: "#offers" },
    { label: "جولة في المعرض", href: "#handovers" },
    { label: "الفروع", href: "#visit" },
  ],
  hero: {
    eyebrow: "المعادي · المنيل · مدينة نصر",
    headline: "واحد وخمسين سنة في ضهرك",
    sub: "وكيل معتمد لأكتر من ١٥ ماركة. اختار مقدمك، والمقدم هو اللي بيحدد قسطك — والباقي علينا.",
    primaryCta: "اختار مقدمك",
    secondaryCta: "كلمنا",
  },
  about: {
    heading: "الاختيار مش لازم يكون معقّد",
    body: [
      "الإمام موتورز بيشتغل في السوق المصري من واحد وخمسين سنة، وكيل معتمد لأكتر من ١٥ ماركة، وبفروع في المعادي والمنيل ومدينة نصر.",
      "طريقة شغلنا واضحة: بنعرض المقدم والقسط قدامك من الأول، وانت تختار اللي يناسب دخلك — من غير مفاجآت بعد التوقيع.",
    ],
    stats: [
      { value: "٥١", label: "سنة خبرة" },
      { value: "+١٥", label: "ماركة" },
      { value: "٣", label: "فروع" },
    ],
  },
  services: {
    heading: "ليه الإمام",
    intro: "الأرقام اللي بتشوفها هنا منشورة على صفحاتهم زي ما هي.",
    items: [
      {
        title: "وكيل معتمد لأكتر من ١٥ ماركة",
        body: "إم جي، شيري، نيسان، أوبل، كايي، دي إف إس كيه، ميتسوبيشي وغيرهم — تحت سقف واحد.",
      },
      {
        title: "استلام فوري",
        body: "موديلات متاحة للاستلام من المعرض من غير قوائم انتظار.",
      },
      {
        title: "بالسعر الرسمي",
        body: "الأسعار زي ما الوكيل معلنها، من غير أوفر برايس.",
      },
      {
        title: "تلات فروع",
        body: "المعادي، المنيل ومدينة نصر — مواعيد العمل من ١٢ ظهراً حتى ١١ مساءً.",
      },
    ],
  },
  gallery: {
    heading: "جولة في المعرض",
    intro: "امشِ بين الموديلات اللي المعرض معلن عنها.",
    items: [],
  },
  contact: {
    heading: "تعالى أقرب فرع",
    intro: "كلمنا نحسبلك القسط قبل ما تيجي، أو عدّي على أي فرع.",
    addressLabel: "الفروع",
    address: "المعادي · المنيل · مدينة نصر، القاهرة",
    phoneLabel: "التليفون",
    phones: ["٠١٢٢٥٥٥٥٨٥٣"],
    hoursLabel: "مواعيد العمل",
    hours: "يومياً من ١٢ ظهراً حتى ١١ مساءً",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=El+Emam+Motors+Nasr+City+Cairo",
    instagramUrl: "https://www.instagram.com/elemammotors/",
    facebookUrl: "https://www.facebook.com/ElEmamforCars/",
    cta: "الاتجاهات على الخريطة",
  },
  footer: {
    rights: "© الإمام موتورز. كل الحقوق محفوظة.",
  },
  a11y: {
    toggleLanguage: "التبديل إلى الإنجليزية",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
  },
};
