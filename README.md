# El Emam Motors — concept site

A concept site for **El Emam Motors**, an authorised dealer for 15+ makes with
branches in Maadi, Manial and Nasr City, trading for 51 years. Bilingual
Arabic / English with full RTL support.

Imagery, prices and voice come from their own Instagram
([@elemammotors](https://www.instagram.com/elemammotors/)) and Facebook.
Unofficial concept, not affiliated with the dealership.

## Design notes

- **Signature interaction** — built around their own line, *"اختار مقدمك،
  والمقدم هو اللي يحدد قسطك"*. Picking a deposit tier reveals the instalment
  **they published** for it; nothing is calculated or invented.
- **Signature 3D** — the camera flies down a corridor of their campaign art
  (react-three-fiber). The movement is depth rather than rotation, and it falls
  back to a static grid under reduced motion *or* if the browser drops the
  WebGL context.
- **Palette** is ivory and navy with foil, taken from their gold-crown
  collateral — a heritage house rather than another dark showroom page.
- **Type** — Fraunces with Public Sans, and Almarai for Arabic.

## On the imagery

Their feed includes photographs of identifiable customers, and their Instagram
avatar is a personal family photograph. Neither is republished here: the site
uses product and campaign art only, and the crown mark is drawn as an SVG.

## Local development

```bash
pnpm install
pnpm dev
```

Next.js 16, React 19, Tailwind v4, GSAP, Lenis, react-three-fiber.
Designed and built by Claude.
