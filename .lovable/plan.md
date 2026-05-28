## Ziel
`src/components/landing-v2/HeroBento.tsx` auf die ausgewählte Direction **Layered depth bento** umstellen — moderner, weicher, mehr Tiefe.

## Änderungen (nur `HeroBento.tsx`)

**Layout** — 12-Spalten-Grid wird zu:
- Links (col-span-7): großes weißes Content-Card mit `rounded-[2.5rem]` + weicher Schatten + violetter Blur-Glow oben rechts
- Rechts (col-span-5): vertikaler Stack
  - oben: Projekt-Status-Card (jetzt hell statt dunkel)
  - unten: 2 kleine Kacheln nebeneinander („Branchen" weiß / „Verlässlich." violett gefüllt)

**Linkes Card enthält:**
- Pill-Badge „Inhabergeführt · seit 2006 · Filderstadt" (violetter Tint)
- Headline „Technische Beratung & Anlagenplanung." (Anlagenplanung in Primary)
- Subline + 2 CTAs (Projekt anfragen / Unsere Leistungen)
- Trennlinie + 2 Stats unten: 18+ Jahre, 150+ Projekte

**Projekt-Status-Card (rechts oben):**
- Heller Look statt dunkel
- Mac-Window-Header, Mono-Label „projekt-status.app"
- „Fernmelde-Rollout", Progress-Bar 68 %, 3 Milestones (2 done, 1 offen)

**Kleine Kacheln (rechts unten):**
- „Branchen" — Industrie, TK, Energie & Öff. Hand (Icon-Tile mit Hover-Fill)
- „Verlässlich. Unabhängig. Aus einer Hand." — violett gefülltes Card mit Shield-Icon

## Design-Token-Disziplin
- Alle Farben über semantische Tokens: `bg-background`, `text-foreground`, `bg-primary`, `text-muted-foreground`, `border-border`, `bg-muted` etc.
- Keine Hex-Codes im Component, keine `text-white`/`bg-black`.
- Border-Radius: `rounded-[2.5rem]` für die großen Cards (passend zum gewählten Prototyp).
- Bestehende `hero-animate hero-animate-1..4` Klassen bleiben für Fade-Up-Stagger erhalten.

## Was unverändert bleibt
- Section-Padding, Container-Max-Width, ambient-glow ganz oben
- Alle Routen/Links (`/kontakt`, `/leistungen`)
- Alle übrigen Komponenten der Seite (BentoFeatures, ProcessFlow, etc.)
- Tailwind-Config, index.css, andere Seiten

## Technisches
- Datei: `src/components/landing-v2/HeroBento.tsx` (komplett neu geschrieben)
- Icons aus `lucide-react`: `ArrowRight`, `Check`, `Building2`, `ShieldCheck`
- Keine neuen Dependencies, keine Framer Motion
