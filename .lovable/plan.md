## Ziel
Alle Unterseiten (Leistungen, Methodik, Team, Karriere, Kontakt, Software, KarriereDetail, Bewerbung, Impressum, Datenschutz) nutzen denselben `PageHero`. Wenn ich diese eine Komponente überarbeite, sind alle Hero-Sektionen gleichzeitig optimiert und konsistent mit dem neuen Telekom-/T-Systems-Look der Landingpage (harte Kanten, Graphit-Headings, Violett nur als Akzent, ruhige Motion).

## Schwächen aktuell (`src/components/landing/PageHero.tsx`)
- Zwei animierte Orb-Blurs + `hero-gradient` → wirkt verspielt, nicht corporate-seriös.
- Headline mittig, Größe bis `text-6xl` mit `text-gradient-blue`-Highlight → konkurriert mit Landing-Hero.
- Sehr viel vertikale Luft (`pt-28 md:pt-36 pb-14 md:pb-20`) ohne Substanz drumherum.
- Keine sichtbare Struktur (Linie/Eyebrow/Meta) — Hero "schwebt" über dem Inhalt.

## Neuer PageHero (links-bündig, ruhig, strukturiert)
1. **Layout**: linksbündig statt zentriert, `max-w-7xl` Container wie Landing. Zweispaltiges Grid auf `lg` (Headline links 7/12, kompakter Meta-Block rechts 5/12 mit dünnem Border).
2. **Breadcrumb**: kleiner, linksbündig, monospaced Trennzeichen, `text-xs uppercase tracking-wider`.
3. **Eyebrow**: kurze violette Pill (`bg-primary/5 border border-primary/10`, `ShieldCheck`-Icon oder Section-Name) — gleiche Optik wie Landing-Hero, damit Wiedererkennung.
4. **Headline**: `font-display font-extrabold tracking-tight leading-[1.08]`, `text-4xl sm:text-5xl lg:text-6xl`. Highlight bleibt — aber als `text-primary` (Solid Violett) statt Gradient, passend zum härteren Look.
5. **Subtitle**: `text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed`.
6. **Rechter Meta-Block** (optional, neue prop `meta?: { label: string; value: string }[]`): kleine Liste mit 2–3 Datenpunkten (z.B. auf Leistungen: "4 Säulen / seit 2006 / inhabergeführt"). Reines `border border-border` Card, `rounded-md`, `shadow-sm`. Wenn `meta` nicht übergeben wird, kollabiert Layout sauber zu einer Spalte.
7. **Hintergrund**: Orbs raus. Ein einziger sehr dezenter Violett-Glow oben mittig (`bg-primary/[0.05] blur-[120px]`) wie auf der Landing. `hero-gradient` ersetzt durch `bg-muted/40` für klare Trennung zum weißen Content darunter.
8. **Trenn-Linie**: unten `border-b border-border` statt sanftem Fade-Gradient → präzisere Kante.
9. **Motion**: bestehende `hero-animate hero-animate-1/2/3` bleiben (sind bereits ruhig). Kein neues Blur-In.
10. **Spacing**: `pt-28 md:pt-32 pb-16 md:pb-20` — etwas kompakter, weil rechter Meta-Block visuell trägt.

## Prop-Erweiterung (rückwärtskompatibel)
```ts
interface PageHeroProps {
  title: string;
  highlight?: string;
  subtitle: string;
  breadcrumb: { label: string; href?: string }[];
  eyebrow?: string;            // NEU optional
  meta?: { label: string; value: string }[]; // NEU optional
}
```
Alle bisherigen Aufrufe (Leistungen, Methodik, Team, Karriere, Kontakt, Software, KarriereDetail, Bewerbung, Impressum, Datenschutz) funktionieren unverändert weiter. Optional ergänze ich `eyebrow` + `meta` für die 6 Haupt-Unterseiten:

- **Leistungen** — eyebrow "Leistungen", meta: 4 Säulen / seit 2006 / herstellerneutral
- **Methodik** — eyebrow "Methodik", meta: 4 Phasen / dokumentiert / messbar
- **Team** — eyebrow "Team", meta: inhabergeführt / Filderstadt / seit 2006
- **Karriere** — eyebrow "Karriere", meta: offene Stellen / Filderstadt / unbefristet
- **Kontakt** — eyebrow "Kontakt", meta: Telefon / E-Mail / Adresse (mit Icon-Zeile)
- **Software** — eyebrow "Anlagenplanung", meta: Elektro / Fernmeldetechnik / CAD

Legal-Seiten (Impressum, Datenschutz) und Bewerbung/KarriereDetail bleiben ohne `meta` — der Hero kollabiert dort sauber zu einer einzelnen Spalte.

## Scope
**Geändert:** `src/components/landing/PageHero.tsx` (Komplettüberarbeitung), `src/pages/Leistungen.tsx`, `src/pages/Methodik.tsx`, `src/pages/Team.tsx`, `src/pages/Karriere.tsx`, `src/pages/Kontakt.tsx`, `src/pages/Software.tsx` (jeweils nur `eyebrow`/`meta`-Props ergänzen, alles andere bleibt).

**Unverändert:** Inhalte der Pages unterhalb des Heros, Navbar, Footer, Landing-Hero, Brand-Farben, Schriften.