## Problem
Der überarbeitete `PageHero` mit rechtem Meta-Block ist zu busy. Soll wieder clean & ruhig werden — aber ohne zurück zum alten verspielten Orb-Style.

## Fix
1. **`src/components/landing/PageHero.tsx`** — Meta-Block komplett raus. Nur eine einzelne, linksbündige Spalte mit:
   - Breadcrumb (klein, uppercase, tracking)
   - Optional Eyebrow-Pill (kleiner Violett-Punkt + Label)
   - Headline (`font-display`, Graphit + Violett-Highlight)
   - Subtitle (`max-w-2xl`)
   
   Hintergrund bleibt clean: `bg-muted/40`, ein dezenter Glow oben, untere `border-b border-border`. Keine Orbs, keine Cards, keine Gradients.

2. **Pages bereinigen** — `meta`-Prop überall entfernen (Leistungen, Methodik, Team, Karriere, Kontakt, Software). `eyebrow` darf bleiben (ist nur ein kleines Label, kein Visual-Klotz). `meta`-Prop aus dem Interface entfernen.

## Scope
Geändert: `PageHero.tsx`, `Leistungen.tsx`, `Methodik.tsx`, `Team.tsx`, `Karriere.tsx`, `Kontakt.tsx`, `Software.tsx`. Nur Hero-Block, nichts darunter.