## Ziel
Logo nochmal **30% kleiner** skalieren (zusätzlich zur vorherigen Reduktion).

## Änderungen
`src/components/landing/Navbar.tsx` & `src/components/landing/Footer.tsx`:

| Stelle | Aktuell | Neu (~30% kleiner) |
|---|---|---|
| Navbar Desktop (unscrolled) | `h-10` (40px) | `h-7` (28px) |
| Navbar Desktop (scrolled) | `h-8` (32px) | `h-6` (24px) → besser `h-[22px]` für exakt 30% |
| Navbar Mobile-Menü | `h-7` (28px) | `h-5` (20px) |
| Footer | `h-7` (28px) | `h-5` (20px) |

Konkret nutze ich saubere Tailwind-Steps: **h-7 → h-5, h-8 → h-6, h-10 → h-7**.

## Nicht geändert
- Header-Höhe (`h-20`/`h-24`) bleibt — nur das Logo schrumpft, mehr Whitespace.
- Keine anderen Komponenten/Styles.
