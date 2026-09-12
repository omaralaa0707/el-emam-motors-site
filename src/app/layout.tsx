import type { Metadata } from "next";
import { Fraunces, Public_Sans, Almarai } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/i18n/locale-provider";
import { ar } from "@/content/ar";
import { en } from "@/content/en";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-fraunces",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-public",
});

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
});

export const metadata: Metadata = {
  title: "El Emam Motors — 51 years, three Cairo branches",
  description:
    "Authorised dealer for 15+ makes across Maadi, Manial and Nasr City. Choose your deposit and it sets your instalment. 51 years in the trade.",
  icons: { icon: "/crown.svg", apple: "/crown.svg" },
  openGraph: {
    title: "El Emam Motors",
    description: "Fifty-one years, three Cairo branches, 15+ makes.",
    images: ["/media/car-33.webp"],
    locale: "ar_EG",
    type: "website",
  },
  other: { "theme-color": "#f6f2e9" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // translate="no": the site ships its own AR/EN copy, so browser
    // auto-translation would only garble hand-written bilingual text.
    <html
      lang="ar"
      dir="rtl"
      translate="no"
      className={`notranslate ${fraunces.variable} ${publicSans.variable} ${almarai.variable}`}
    >
      <body className="bg-ivory text-navy antialiased">
        <LocaleProvider dictionaries={{ ar, en }} defaultLocale="ar">
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
