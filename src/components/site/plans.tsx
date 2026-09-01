"use client";

import Image from "next/image";
import { useState } from "react";
import { useLocale } from "@/i18n/locale-provider";
import { PLANS } from "@/content/media";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

function money(n: number, locale: string) {
  return new Intl.NumberFormat(locale === "ar" ? "ar-EG" : "en-EG").format(n);
}

/**
 * Built around their own line: "اختار مقدمك، والمقدم هو اللي يحدد قسطك".
 * Every deposit/instalment pairing here is one they published — picking a tier
 * only reveals their figure, it never calculates one.
 */
export function Plans() {
  const { content, locale } = useLocale();
  const [planIdx, setPlanIdx] = useState(0);
  const [tierIdx, setTierIdx] = useState(1);

  const plan = PLANS[planIdx];
  const tier = plan.tiers[tierIdx];

  return (
    <section id="plans" className="relative overflow-hidden bg-ivory-2 py-20 md:py-28">
      <div className="mx-auto max-w-[1360px] px-4 md:px-8">
        <div className="mb-10 md:mb-14">
          <p className="font-display mb-3 text-[0.74rem] font-semibold tracking-[0.2em] text-foil uppercase">
            {locale === "ar" ? "اختار مقدمك" : "Choose your deposit"}
          </p>
          <h2 className="font-display max-w-[20ch] text-display leading-[1.05] font-semibold">
            {locale === "ar"
              ? "والمقدم هو اللي بيحدد قسطك"
              : "And the deposit sets your instalment"}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ivory-3">
            <Image
              key={plan.frame}
              src={plan.frame}
              alt={`${plan.make} ${plan.model}`}
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </div>

          <div>
            {/* Model switch */}
            <div className="flex flex-wrap gap-2">
              {PLANS.map((p, i) => (
                <button
                  key={p.model}
                  onClick={() => {
                    setPlanIdx(i);
                    setTierIdx(1);
                  }}
                  className={cn(
                    "rounded-full border px-5 py-2 font-display text-[0.8rem] font-semibold transition-colors",
                    i === planIdx
                      ? "border-navy bg-navy text-ivory"
                      : "border-navy/20 text-navy hover:border-foil"
                  )}
                >
                  {p.make} {p.model}
                </button>
              ))}
            </div>

            {/* Deposit tiers, exactly as published */}
            <div className="mt-8 grid grid-cols-3 gap-2 md:gap-3">
              {plan.tiers.map((t, i) => (
                <button
                  key={t.deposit}
                  onClick={() => setTierIdx(i)}
                  aria-pressed={i === tierIdx}
                  className={cn(
                    "rounded-xl border p-4 text-start transition-all duration-300",
                    i === tierIdx
                      ? "border-foil bg-foil/8 shadow-[0_10px_30px_-18px_rgba(182,137,60,0.9)]"
                      : "border-navy/12 hover:border-navy/30"
                  )}
                >
                  <span className="font-display block text-[0.62rem] font-semibold tracking-[0.12em] text-quiet uppercase">
                    {locale === "ar" ? "المقدم" : "Deposit"}
                  </span>
                  <span className="font-display mt-1.5 block text-base font-bold tabular-nums md:text-lg">
                    {money(t.deposit, locale)}
                  </span>
                </button>
              ))}
            </div>

            {/* The revealed instalment */}
            <div className="mt-8 rounded-2xl border border-navy/12 bg-ivory p-6 md:p-8">
              <p className="font-display text-[0.68rem] font-semibold tracking-[0.16em] text-quiet uppercase">
                {locale === "ar" ? "القسط الشهري" : "Monthly instalment"}
              </p>
              <p className="font-display mt-2 text-[clamp(2.4rem,6vw,4rem)] leading-none font-bold tabular-nums text-navy">
                {money(tier.monthly, locale)}
                <span className="ms-2 align-middle text-base font-medium text-quiet">
                  {locale === "ar" ? "جنيه" : "EGP"}
                </span>
              </p>
              <p className="mt-4 max-w-[44ch] text-sm leading-relaxed text-quiet">
                {locale === "ar"
                  ? "الأرقام دي منشورة على صفحات المعرض وقابلة للتغيير — اتأكد بمكالمة."
                  : "These figures are as published on their pages and subject to change — confirm by phone."}
              </p>

              <a
                href="tel:01225555853"
                className="mt-6 inline-block rounded-full bg-navy px-7 py-3 font-display text-[0.82rem] font-semibold text-ivory transition-colors hover:bg-foil hover:text-navy"
              >
                {locale === "ar" ? "اتصل واحجز" : "Call to reserve"}
              </a>
            </div>

            <Reveal>
              <p className="mt-6 text-sm text-quiet">{content.services.intro}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
