# Seriöser Corporate-Auftritt für die Landingpage

Ziel: Weg vom verspielten "Startup/Gen-Z"-Look, hin zum Auftritt eines etablierten Mittelstands-Dienstleisters (Referenzen: Bechtle, MHP, adesso, Capgemini, msg) — ohne die Marke (Electric Violet) zu verlieren.

## 1. Tonalität & Sprache

- Headline neu, sachlicher: statt "Software, die Prozesse denkt." → z. B. **"Software-Entwicklung und IT-Beratung für den deutschen Mittelstand."**
- Subline mit klarer Leistungsaussage statt Wortspiel ("ohne Buzzword-Bingo" raus).
- Mono-Tags wie `// über uns`, `v2026.1`, `est. 2006 · filderstadt` mit `Sparkles`-Icon entfernen — wirken nach Indie-Dev-Portfolio.
- Sektion-Eyebrows in normaler Schrift, Uppercase-Tracking, ohne `//`.

## 2. Visuelles Sounding

- **Marquee/Ticker im Hero raus** — typisches Startup-Element.
- **Animierte Orbs / Blur-Glow im Hero stark reduzieren** (max. 1 dezenter Verlauf, kein Pulsieren).
- **Grid-Pattern dezenter** (Opacity runter).
- **Pulsierende Live-Dots** ("live · 150+ projekte", Q1-Slots-Ping) entfernen.
- Border-Radius global etwas reduzieren (2rem → 1rem / 0.75rem) für seriöseren, weniger "soft" Eindruck.
- Gradient-Text auf Headline nur sehr dezent oder durch normale Akzentfarbe ersetzen.

## 3. Vertrauenselemente ergänzen (das Wichtigste)

- **Logo-Wall / Kundenleiste** direkt unter dem Hero: 6–8 Graustufen-Kundenlogos (oder Branchen-Badges falls NDA), Headline "Vertrauen von Mittelstand & Konzern".
- **Kennzahlen-Bar** sachlich: "20 Jahre · 150+ Projekte · 100% inhouse · Standort Deutschland".
- **Zertifikate/Standards-Strip**: ISO 27001-ready, DSGVO, Made in Germany, Hosting in DE — als kleine Badges.
- Testimonials mit **Klartext-Namen, Position, Firma** (falls vorhanden) statt nur Initialen-Kreisen.

## 4. Navbar

- Announcement-Bar "Neue Slots für Q1 2026" entfernen (wirkt nach Freelancer/Booking-Tool).
- Stattdessen Top-Bar mit: Telefon · E-Mail · Standort links, Sprachschalter/„Kundenportal"-Hinweis rechts (rein optisch, nicht funktional).
- Haupt-CTA Button-Style etwas reduzierter (kleinerer Radius, weniger Shadow-Glow).

## 5. Komponenten konkret

- `HeroBento.tsx`: Status-Pille entschärft, neue Headline, Orbs/Marquee raus, Live-Chip raus, Stat-Chip seriöser ("Seit 2006 · Filderstadt").
- `Navbar.tsx`: Announcement-Bar → klassische Kontakt-Top-Bar.
- **Neu** `TrustLogos.tsx`: Kundenlogo-Wall (Platzhalter-SVG-Logos in Graustufe).
- **Neu** `CertificationsBar.tsx`: Standards/Badges-Strip.
- `BentoFeatures.tsx`: Mono-Eyebrows raus, Bildkarte „Made in Filderstadt" Wording prüfen.
- `ProcessFlow.tsx`: Glas-Karten beibehalten, aber Eyebrow & Mono-Texte säubern.
- `VoicesSection.tsx`: Optional Klarnamen + Firma einsetzen (Frage unten).
- `AboutSnapshot.tsx`: Eyebrow `// über uns` → "Über uns"; Headline-Wording ggf. weniger flapsig ("Ein Team, kein Hype." → "Inhabergeführt. Standort Deutschland.").
- `FAQTerminal.tsx`: Terminal-Reste prüfen, falls noch vorhanden weiter entschärfen.
- `index.css`: Border-Radius-Tokens und Glow-Shadow leicht reduzieren.

## 6. Reihenfolge der Sektionen (neu)

1. Hero (clean)
2. **TrustLogos** (Kundenwall)
3. BentoFeatures (Leistungen)
4. ProcessFlow
5. ImpactGrid (Zahlen, sachlich)
6. **CertificationsBar**
7. AboutSnapshot
8. VoicesSection
9. FAQ
10. FinalCTA
11. Footer

## Offene Fragen

1. **Kundenlogos**: Darf ich Platzhalter-Logos (anonyme Branchenkürzel wie „Automotive AG", „MedTech GmbH") nehmen, oder hast du echte Logos/Kundennamen, die ich verwenden darf?
2. **Testimonials**: Sollen Klarnamen + Firmen eingesetzt werden? Falls ja, bitte Liste — sonst bleibe ich bei anonymisierten Stimmen mit Rolle/Branche.
3. **Headline-Richtung**: Eher (a) „Software-Entwicklung und IT-Beratung für den Mittelstand." (sachlich), oder (b) „Digitale Lösungen für nachhaltigen Geschäftserfolg." (klassisch Konzern), oder (c) eigener Vorschlag?
