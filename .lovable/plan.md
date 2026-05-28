# Hero neu: Split-Layout mit UI-Mockup

Setze die gewählte Richtung in `src/components/landing-v2/HeroBento.tsx` um.

## Änderungen

**`src/components/landing-v2/HeroBento.tsx`** komplett neu:
- 12-Spalten-Grid: links (col-span-7) Text + CTAs + Stats, rechts (col-span-5) Mockup-Karte
- Stock-Foto (`hero-office.jpg`) entfällt → wird abstrakte "Code/UI"-Karte
- Pille oben: `bg-primary/10 text-primary` mit Punkt, Text „Inhabergeführt · seit 2006 · Filderstadt"
- Headline zweizeilig: „Software-Entwicklung" / „für den Mittelstand." (zweite Zeile mit Verlauf `from-primary to-primary-glow`)
- Subline mit hervorgehobenem Schluss „Verlässlich. Wartbar. Dokumentiert." (Underline in `decoration-primary/40`)
- Buttons: Primary „Projekt anfragen" → `/kontakt`, Outline „Unsere Leistungen" → `/leistungen`
- Stats-Reihe unten mit Trenner-Linien: **18+ Jahre**, **Stuttgart**, **150+ Projekte**
- Rechts: weiße Mockup-Karte (Window-Dots + Skeleton-Zeilen + 3-Spalten-Tile-Grid) mit violettem Soft-Glow, dazu rotierte Status-Plakette „Systeme optimiert"

## Tokens / Stil

- Nur Design-Tokens: `bg-muted`, `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-primary`, `text-primary`, `primary-glow`
- Font: bestehendes `font-display` (Space Grotesk) für die Headline — Sora wird nicht zusätzlich geladen
- Animation: bestehende `hero-animate hero-animate-{1..5}` Klassen, kein Framer Motion
- Pulse-Dot entfällt (entspricht Memory: "no pulsing live dots")

## Kein Cleanup nötig

- `hero-office.jpg` bleibt im Repo (kann später woanders verwendet werden)
- Alle anderen Sektionen unverändert

Bereit zur Umsetzung — bitte in den Build-Modus wechseln.
