# Hero: linke Seite transparent + sticky, rechte Seite scrollt

## Änderungen in `src/components/landing-v2/HeroBento.tsx`

**Linke Spalte**
- Card-Look entfernen: kein `bg-background`, keine `rounded-[2.5rem]`, kein `shadow`, kein `border`, kein Glow-Overlay, kein Padding der Card. Inhalt sitzt direkt auf dem Section-Hintergrund.
- `sticky top-28 self-start` damit sie beim Scrollen oben kleben bleibt (Top-Offset passend zur Header-Höhe ≈ 7rem).
- Interner Aufbau (Eyebrow, H1, Subline, CTAs, Stats) bleibt 1:1 erhalten — nur die Hülle entfällt.

**Rechte Spalte**
- Bleibt als 3 Karten (Expertise-Quadrant + Branchen + Verlässlich.) bestehen, aber scrollt jetzt am Sticky-Block vorbei.
- Damit Scroll überhaupt entsteht: zusätzlich 1 weitere "Insights"-Karte unten in der rechten Spalte (z. B. „Aktuelle Branchen-Fokus" Liste mit 3 Bullets), sodass die rechte Spalte deutlich höher ist als die linke. So entsteht die gewünschte Sticky-Wirkung ohne den Rest der Seite anzufassen.

**Section-Container**
- `items-center` → `items-start` damit Sticky funktioniert.
- `pb-16` → `pb-24` für etwas mehr Luft beim Scroll-Übergang in den nächsten Block.

## Nicht angefasst
- Header, Tokens, Farben, Typografie
- Inhalte der bestehenden 3 rechten Tiles
- Animationen (`hero-animate-*`)
