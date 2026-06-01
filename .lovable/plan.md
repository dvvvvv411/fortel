Die Hero-Sektionen auf allen Unterseiten nehmen aktuell zu viel vertikalen Platz ein (`pt-32 md:pt-40 pb-20 md:pb-24`).

Änderung in `src/components/landing/PageHero.tsx`:
- Padding oben reduzieren: `pt-32 md:pt-40` → `pt-20 md:pt-28`
- Padding unten reduzieren: `pb-20 md:pb-24` → `pb-12 md:pb-16`
- Innere Abstände leicht straffen: Breadcrumb-Margin `mb-10` → `mb-6`, Headline-Margin `mb-8` → `mb-6`, Eyebrow-Margin `mb-8` → `mb-6`

Ergebnis: Deutlich kompaktere, seriösere Hero-Höhe auf allen Unterseiten (Karriere, Kontakt, Leistungen, Methodik, Software, Team). Keine Änderungen an Inhalt, Farben oder Typografie.