## Plan: Kontakt-Hero an Unterseiten-Style angleichen

### Problem
Die `/kontakt`-Seite hat einen custom, linksbündigen Inline-Hero (kleinere Schrift, eigene Breadcrumb, kein Eyebrow-Balken). Alle anderen Unterseiten nutzen die zentrale `PageHero`-Komponente mit centered Layout, Eyebrow-Balken und großem Headline-Style.

### Änderung
In `src/pages/Kontakt.tsx` den inline Hero-Block (Zeilen ~72–91) durch den Import und Aufruf der `PageHero`-Komponente ersetzen:

- **Import:** `import PageHero from '@/components/landing/PageHero';`
- **Props:**
  - `eyebrow="Kontakt"`
  - `title="Kontakt"`
  - `highlight="aufnehmen"`
  - `subtitle="Beratung, Projektsteuerung, Personal oder Anlagenplanung — sprechen Sie uns an. Wir antworten innerhalb von 24 Stunden an Werktagen."`
  - `breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Kontakt' }]}`

Der Rest der Seite (Sidebar, Formular, FAQ, Footer) bleibt unverändert.

### Aufwand
1 Datei, 1 Komponenten-Austausch. Keine neuen Dependencies.