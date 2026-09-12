"use client";

import Image from "next/image";
import { useState } from "react";
import { useLocale } from "@/i18n/locale-provider";
import { useScrolledPast } from "@/lib/use-browser";
import { SplitText } from "@/components/motion/split-text";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { HERO_FRAME, MAKES, OFFERS, LINEUP } from "@/content/media";

function money(n: number, locale: string) {
  return new Intl.NumberFormat(locale === "ar" ? "ar-EG" : "en-EG").format(n);
}

export function Nav() {
  const { content, locale, toggleLocale } = useLocale();
  const scrolled = useScrolledPast(60);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-400",
        scrolled ? "border-b border-navy/10 bg-ivory/95 py-2.5 backdrop-blur" : "py-4"
      )}
    >
      <div className="mx-auto flex max-w-[1360px] items-center gap-4 px-4 md:px-8">
        <a href="#top" className="flex shrink-0 items-center gap-3">
          {/* Their brand device is a gold crown. The Instagram avatar is a
              personal photograph, not a mark, so it is deliberately not used. */}
          <Image
            src="/crown.svg"
            alt={content.brand.name}
            width={44}
            height={44}
            priority
            className="h-10 w-10 rounded-lg"
          />
          <span className="hidden leading-tight sm:block">
            <span className="font-display block text-[0.92rem] font-bold tracking-[0.06em] text-navy">
              {content.brand.shortName}
            </span>
            <span className="text-foil block text-[0.7rem] font-semibold">
              {content.brand.tagline}
            </span>
          </span>
        </a>

        <nav className="mx-auto hidden items-center gap-7 lg:flex">
          {content.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-[0.84rem] font-medium text-navy-3 transition-colors hover:text-foil"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-2 lg:ms-0">
          <a
            href="tel:01225555853"
            dir="ltr"
            className="hidden rounded-full bg-navy px-5 py-2.5 font-display text-[0.78rem] font-semibold text-ivory transition-colors hover:bg-foil hover:text-navy sm:block"
          >
            0122 555 5853
          </a>
          <button
            onClick={toggleLocale}
            aria-label={content.a11y.toggleLanguage}
            className="rounded-full border border-navy/20 px-3.5 py-2 font-display text-[0.76rem] font-semibold text-navy transition-colors hover:border-foil hover:text-foil"
          >
            {locale === "ar" ? "EN" : "ع"}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? content.a11y.closeMenu : content.a11y.openMenu}
            aria-expanded={open}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className={cn("h-0.5 w-5 bg-navy transition-transform", open && "translate-y-1 rotate-45")} />
            <span className={cn("h-0.5 w-5 bg-navy transition-transform", open && "-translate-y-1 -rotate-45")} />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows] duration-400 lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="min-h-0 bg-ivory">
          <nav className="flex flex-col px-4 pt-3 pb-5">
            {content.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-navy/10 py-3 font-display font-medium text-navy"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export function Hero() {
  const { content, locale } = useLocale();

  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="mx-auto max-w-[1360px] px-4 md:px-8">
        <p className="font-display mb-4 text-[0.76rem] font-semibold tracking-[0.2em] text-foil uppercase">
          {content.hero.eyebrow}
        </p>

        <SplitText
          as="h1"
          text={content.hero.headline}
          className="font-display max-w-[16ch] text-hero leading-[1.02] font-semibold text-navy"
          lineStagger={0.09}
          delay={0.12}
        />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="max-w-[50ch] text-lead leading-[1.8] text-navy-3">{content.hero.sub}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#plans"
                className="rounded-full bg-navy px-7 py-3.5 font-display text-[0.84rem] font-semibold text-ivory transition-colors hover:bg-foil hover:text-navy"
              >
                {content.hero.primaryCta}
              </a>
              <a
                href="tel:01225555853"
                className="rounded-full border border-navy/25 px-7 py-3.5 font-display text-[0.84rem] font-semibold text-navy transition-colors hover:border-foil hover:text-foil"
              >
                {content.hero.secondaryCta}
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-navy/12 pt-7">
              {content.about.stats?.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-foil text-[clamp(1.6rem,3.6vw,2.6rem)] leading-none font-bold">
                    {s.value}
                  </p>
                  <p className="mt-2 font-display text-[0.66rem] font-semibold tracking-[0.1em] text-quiet uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ivory-3">
            <Image
              src={HERO_FRAME}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Foil rule + makes, in place of a logo wall we can't verify. */}
        <div className="mt-14">
          <div className="rule-foil h-px w-full opacity-70" />
          <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
            {MAKES.map((m) => (
              <li key={m} className="font-display text-[0.9rem] font-medium text-navy-3">
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Offers() {
  const { content, locale } = useLocale();

  return (
    <section id="offers" className="border-y border-navy/10 bg-ivory-2 py-20 md:py-28">
      <div className="mx-auto max-w-[1360px] px-4 md:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5 md:mb-14">
          <div>
            <p className="font-display mb-3 text-[0.74rem] font-semibold tracking-[0.2em] text-foil uppercase">
              {content.services.heading}
            </p>
            <h2 className="font-display max-w-[18ch] text-display leading-[1.05] font-semibold">
              {locale === "ar" ? "أقساط منشورة، من غير لف" : "Published instalments, plainly stated"}
            </h2>
          </div>
          <p className="max-w-[34ch] text-sm leading-relaxed text-quiet">
            {content.services.intro}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {OFFERS.map((o, i) => (
            <Reveal key={`${o.make}-${o.model}`} delay={(i % 3) * 0.05}>
              <article className="group h-full overflow-hidden rounded-2xl border border-navy/10 bg-ivory transition-colors hover:border-foil/60">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={o.frame}
                    alt={`${o.make} ${o.model}`}
                    fill
                    sizes="(max-width: 768px) 92vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <p className="font-display text-[0.7rem] font-semibold tracking-[0.14em] text-foil uppercase">
                    {o.make}
                  </p>
                  <h3 className="font-display mt-1 text-lg font-semibold">{o.model}</h3>
                  <dl className="mt-4 space-y-1.5 border-t border-navy/10 pt-3 text-sm">
                    {o.deposit && (
                      <div className="flex justify-between gap-3">
                        <dt className="text-quiet">{locale === "ar" ? "المقدم" : "Deposit"}</dt>
                        <dd className="font-display font-semibold tabular-nums">{money(o.deposit, locale)}</dd>
                      </div>
                    )}
                    <div className="flex justify-between gap-3">
                      <dt className="text-quiet">{locale === "ar" ? "القسط الشهري" : "Monthly"}</dt>
                      <dd className="font-display font-bold tabular-nums text-navy">{money(o.monthly, locale)}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Visit() {
  const { content, locale } = useLocale();
  const c = content.contact;

  return (
    <>
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-[1360px] px-4 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <SplitText
              as="h2"
              trigger="inView"
              text={content.about.heading}
              className="font-display max-w-[16ch] text-display leading-[1.06] font-semibold"
            />
            <div className="space-y-5">
              {content.about.body.map((p, i) => (
                <Reveal key={i} delay={i * 0.07}>
                  <p className="max-w-[58ch] text-lead leading-[1.85] text-navy-3">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {LINEUP.map((src, i) => (
              <Reveal key={src} delay={i * 0.05}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-ivory-3">
                  <Image src={src} alt="" fill sizes="24vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="bg-navy py-20 text-ivory md:py-28">
        <div className="mx-auto max-w-[1360px] px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-display leading-[1.06] font-semibold">{c.heading}</h2>
              <p className="mt-5 max-w-[44ch] text-lead leading-relaxed text-ivory/70">{c.intro}</p>
              <a
                href="tel:01225555853"
                dir="ltr"
                className="font-display mt-8 inline-block rounded-full bg-foil px-8 py-3.5 text-[0.86rem] font-semibold text-navy transition-colors hover:bg-foil-lit"
              >
                0122 555 5853
              </a>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="font-display mb-3 text-[0.68rem] font-semibold tracking-[0.16em] text-foil uppercase">
                  {c.addressLabel}
                </p>
                <p className="leading-[1.8] text-ivory/85">{c.address}</p>
                <a
                  href={c.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display mt-4 inline-block text-[0.76rem] font-semibold text-ivory underline-offset-4 hover:underline"
                >
                  {c.cta}
                </a>
              </div>
              <div>
                <p className="font-display mb-3 text-[0.68rem] font-semibold tracking-[0.16em] text-foil uppercase">
                  {c.hoursLabel}
                </p>
                <p className="text-ivory/85">{c.hours}</p>
                <div className="mt-6 flex gap-4">
                  {c.instagramUrl && (
                    <a href={c.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-display text-[0.74rem] font-semibold text-ivory/60 uppercase hover:text-ivory">
                      Instagram
                    </a>
                  )}
                  {c.facebookUrl && (
                    <a href={c.facebookUrl} target="_blank" rel="noopener noreferrer" className="font-display text-[0.74rem] font-semibold text-ivory/60 uppercase hover:text-ivory">
                      Facebook
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-ivory/15 pt-8 text-xs text-ivory/50 md:flex-row md:items-center md:justify-between">
            <p>
              {content.footer.rights}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
