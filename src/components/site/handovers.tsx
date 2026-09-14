"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { useLocale } from "@/i18n/locale-provider";
import { useReducedMotion } from "@/lib/use-browser";
import { CORRIDOR, HANDOVERS } from "@/content/media";

const Corridor = dynamic(
  () => import("@/components/three/corridor").then((m) => m.Corridor),
  { ssr: false }
);

export function Handovers() {
  const root = useRef<HTMLElement>(null);
  const progress = useRef(0);
  const { content, locale } = useLocale();
  const reduced = useReducedMotion();
  const [glLost, setGlLost] = useState(false);
  const handleLost = useCallback((v: boolean) => setGlLost(v), []);

  useGSAP(
    () => {
      if (reduced) return;
      gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=340%",
          pin: true,
          scrub: 0.55,
          onUpdate: (self) => {
            progress.current = self.progress;
          },
        },
      });
    },
    { scope: root, dependencies: [reduced] }
  );

  // Reduced motion, or the browser dropped the GPU context: same static hall.
  if (reduced || glLost) {
    return (
      <section id="handovers" className="border-y border-navy/10 bg-ivory-2 py-20">
        <div className="mx-auto max-w-[1360px] px-4 md:px-8">
          <h2 className="font-display mb-8 text-display font-semibold">
            {content.gallery.heading}
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {HANDOVERS.map((src) => (
              <div key={src} className="relative aspect-[3/4] overflow-hidden rounded-xl bg-ivory-3">
                <Image src={src} alt="" fill sizes="20vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="handovers"
      ref={root}
      className="relative h-[100svh] overflow-hidden border-y border-navy/10 bg-ivory"
    >
      <Corridor urls={CORRIDOR} progressRef={progress} onLost={handleLost} className="absolute inset-0 z-0" />

      {/* A light vignette only: the panels live at the edges of frame, so a
          strong one erased the corridor entirely. */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_62%,color-mix(in_oklab,var(--color-ivory)_80%,transparent)_100%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-44 bg-gradient-to-b from-ivory via-ivory/85 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-52 bg-gradient-to-t from-ivory via-ivory/85 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-between py-14 md:py-20">
        <div className="mx-auto w-full max-w-[1360px] px-4 md:px-8">
          <p className="font-display mb-3 text-[0.74rem] font-semibold tracking-[0.2em] text-foil uppercase">
            {content.gallery.heading}
          </p>
          <h2 className="font-display max-w-[16ch] text-display leading-[1.05] font-semibold">
            {locale === "ar" ? "كل الموديلات في مكان واحد" : "Every model, in one hall"}
          </h2>
        </div>

        <div className="mx-auto w-full max-w-[1360px] px-4 md:px-8">
          <p className="max-w-[44ch] text-lead leading-relaxed text-navy-3">
            {content.gallery.intro}
          </p>
          <p className="font-display mt-3 text-[0.7rem] font-semibold tracking-[0.16em] text-quiet uppercase">
            {locale === "ar" ? "مرّر للمشي في المعرض" : "Scroll to walk the hall"}
          </p>
        </div>
      </div>
    </section>
  );
}
