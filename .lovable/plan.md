# Kontaktseite Redesign

Ziel: Seriöser, kompakter Auftritt im Stil Telekom Business — links sticky Sidebar mit Kontaktdaten/Direktansprache, rechts Hauptbereich mit Formular und FAQ.

## Layout

```text
┌─────────────────────────────────────────────────────┐
│  Kompakter Hero (schmal, links-bündig)              │
│  Breadcrumb · "Kontakt aufnehmen."                  │
├──────────────────┬──────────────────────────────────┤
│ STICKY SIDEBAR   │  HAUPTBEREICH                    │
│                  │                                  │
│ Direkter Draht   │  Nachricht senden                │
│ ─ Tel  +49 …     │  ┌────────────────────────────┐  │
│ ─ Mail info@…    │  │ Name      │ E-Mail         │  │
│ ─ Adresse        │  │ Telefon   │ Betreff        │  │
│ ─ Mo–Fr 9–18     │  │ Nachricht (textarea)       │  │
│                  │  │ [ Nachricht senden → ]     │  │
│ Reaktionszeit    │  └────────────────────────────┘  │
│ < 24 h Werktag   │                                  │
│                  │  FAQ                             │
│                  │  ▸ Wie läuft ein Erstgespräch?   │
│                  │  ▸ In welcher Region tätig?      │
│                  │  ▸ Welche Kosten entstehen?      │
│                  │  ▸ Mit welchen Branchen?         │
│                  │  ▸ Wie schnell Personalvorschlag?│
└──────────────────┴──────────────────────────────────┘
```

## Änderungen im Detail

**Hero (kompakt & sachlich)**
- `PageHero` durch lokalen, schmalen Hero-Block ersetzen: links-bündig, `pt-28 pb-10`, kleine Headline (`text-3xl md:text-4xl`), Breadcrumb darüber, kein zentrierter Block, kein großer Subtitle.
- Eyebrow „Kontakt“ in Violett, Headline „Kontakt aufnehmen.“ in Graphit mit violettem Punkt.

**Sidebar (links, sticky, ~340 px)**
- Überschrift „Direkter Draht“ (uppercase, klein).
- Kontaktblöcke (Telefon, E-Mail, Adresse, Öffnungszeiten) als ruhige Zeilen mit Icon links, Label + Wert rechts — kein Karten-Container mit Gradient-Icon-Box; stattdessen klare Trennlinien (`divide-y border-border/60`).
- Darunter kleiner Info-Block „Antwort innerhalb 24 h an Werktagen“.
- `lg:sticky lg:top-28`.

**Formular (Hauptbereich)**
- Bleibt funktional gleich (Name, E-Mail, Telefon, Betreff, Nachricht).
- Inputs auf globalen Radius `rounded-md` statt `rounded-xl` für seriösen Look.
- Senden-Button: rechteckig (`rounded-md`), violett, ohne Scale-Hover, nur Schatten-Übergang.
- Pflichtfeld-Sternchen behalten.

**FAQ-Sektion (neu, unter dem Formular)**
- Überschrift „Häufige Fragen“.
- 5 Einträge als shadcn `Accordion` (single, collapsible), `border-y` ohne Karten:
  1. Wie läuft ein typisches Erstgespräch ab?
  2. In welcher Region sind Sie tätig?
  3. Welche Kosten entstehen für eine Erstberatung?
  4. Mit welchen Branchen arbeiten Sie?
  5. Wie schnell erhalten wir Personalvorschläge?
- Antworten als ruhige Sätze passend zum for.tel-Profil (Filderstadt, DACH, kostenfreies Erstgespräch, Energie/Telekommunikation/öffentliche Auftraggeber, ≤ 2 Wochen Shortlist).

**Technisches**
- Nur `src/pages/Kontakt.tsx` ändern (+ ggf. `Accordion`-Import aus `@/components/ui/accordion`).
- Keine neuen Libraries, keine Design-Tokens ändern, Light-Theme + Violett-Akzente bleiben gleich.
- Reduzierte Schatten (max `shadow-sm`), Radius `rounded-md`.
- `useScrollAnimation` + IntersectionObserver-Block bleibt für sanftes Einblenden.

## Out of scope
- Keine Google Map (nicht gewünscht).
- Keine Ansprechpartner-Fotos, keine Calendly-Integration.
- Header/Footer/Hero-Komponente anderer Seiten bleiben unverändert.
