# Komplette Text-Neuausrichtung for.tel Solutions

Software/KI/Cloud-Botschaften werden überall durch den tatsächlichen Unternehmensgegenstand ersetzt. Vier Leistungssäulen lösen die bisherigen sechs Software-Disziplinen ab.

## Neue Leistungssäulen

1. **Technische Unternehmensberatung** — Strategie, Konzept, Bewertung technischer Lösungen
2. **Projektmanagement & Controlling** — Technische & wirtschaftliche Projektleitung, Termin-, Kosten-, Qualitätssteuerung
3. **Personalberatung** — Fach- & Führungskräftevermittlung, Recruiting im technischen Umfeld, sonstige Akquisitionsdienstleistungen
4. **Elektro- & Fernmeldetechnik** — Planung und Vertrieb elektrotechnischer und fernmeldetechnischer Anlagen aller Art

Tagline-Vorschlag: *"Technische Beratung. Projektsteuerung. Anlagenplanung."*
Hero-Headline-Vorschlag: *"Technik-Projekte, die ankommen."* mit Subline zu Beratung + Planung + Personal.

## Betroffene Dateien & Änderungen

### Landing (`src/components/landing-v2/`)
- **HeroBento.tsx** — Headline, Subline, Pill-Badge, Branchen-Kachel (statt Industrie/Logistik/Health/Handel → Industrie, TK/Carrier, Energie, Öffentliche Hand), Tech-Stack-Kachel ersetzen durch "Disziplinen" (Beratung / PM / Personal / Anlagenplanung). Status-Karte: "ERP-Modernisierung" → "Netzwerk-Rollout" o.ä.
- **BentoFeatures.tsx** — Die 6 Software-Kacheln (Custom Software, KI, Cloud …) ersetzen durch 6 Leistungs-Unterthemen rund um die 4 Säulen (z.B. Machbarkeitsstudien, Lastenheft, Ausschreibung, Bauüberwachung, Recruiting, Anlagenplanung TK/ET).
- **AboutSnapshot.tsx** — Texte über Inhouse-Dev-Team neu: inhabergeführtes Beratungshaus seit 2006.
- **CertificationsBar.tsx** — Software-Zertifikate prüfen, ggf. VDE/VDI/DIN-Bezüge statt ISO-27001-Software-Framing.
- **FAQTerminal.tsx**, **ImpactGrid.tsx**, **ProcessFlow.tsx**, **VoicesSection.tsx**, **TrustLogos.tsx**, **FinalCTA.tsx** — alle Texte auf Beratung/Projekte/Anlagenplanung umstellen.

### Landing Legacy (`src/components/landing/`)
- **HeroSection.tsx, ServicesGrid.tsx, SoftwareShowcase.tsx, Methodology.tsx, ProblemSolution.tsx, Stats.tsx, Testimonials.tsx, CTASection.tsx, FAQ.tsx, Footer.tsx, TrustBar.tsx** — alle Software-/KI-/Cloud-Formulierungen ersetzen. `SoftwareShowcase` ggf. zu "Referenzprojekte" umformulieren.
- **Navbar.tsx** — Menüeinträge prüfen ("Software" → "Anlagenplanung" oder Eintrag entfernen).

### Pages (`src/pages/`)
- **Index.tsx** — Meta/Title/Description, JSON-LD.
- **Leistungen.tsx** — komplette Leistungsstruktur auf die 4 Säulen umbauen, Detail-Beschreibungen neu.
- **Software.tsx** — entweder Inhalt komplett zu "Anlagenplanung Elektro-/Fernmeldetechnik" umschreiben *oder* Route umbenennen; Vorschlag: Inhalt ersetzen, Route bleibt `/software` aus SEO-Gründen vorerst (Redirect/Alias später möglich).
- **Methodik.tsx** — Methodik-Phasen auf Beratungs-/Projekt-Lifecycle anpassen (Analyse → Konzept → Ausschreibung → Realisierung → Betrieb).
- **Team.tsx** — Rollen/Beschreibungen (statt "Senior Developer" → "Projektleiter", "Berater", "Planer Fernmeldetechnik" etc.).
- **Karriere.tsx**, **KarriereDetail.tsx**, **data/karriereStellen.ts** — Stellentitel & Beschreibungen auf Beratungs-/Planungs-/PM-Profile umstellen.
- **Kontakt.tsx** — Anfrage-Optionen / Service-Auswahl anpassen.
- **Bewerbung.tsx** — Bereichs-Dropdowns auf neue Disziplinen.
- **Datenschutz.tsx / Impressum.tsx** — Unternehmensgegenstand explizit ergänzen (1 Absatz).

### SEO / Meta
- **index.html** — `<title>`, `<meta description>`, OG-Tags, JSON-LD `Organization` / `ProfessionalService` mit neuem `description`-Feld.
- **public/sitemap.xml** — unverändert, sofern Routen gleich bleiben.
- **public/robots.txt** — unverändert.

## Was NICHT geändert wird
- Design-System, Farben, Layout, Komponenten-Struktur, Animationen
- Routing-Struktur (Routen bleiben — nur Inhalte ändern sich)
- Backend / Edge Functions / Formular-Logik
- Bilder & Tech-Logos werden ggf. semantisch ungenutzt; nicht entfernen, nur in HeroBento die Tech-Stack-Kachel ersetzen.

## Offene Klärung (kann auch nach Implementierung erfolgen)
- Sollen Begriffe wie "Software-Entwicklung" komplett verschwinden — auch dort, wo sie als reale Teil-Dienstleistung erbracht wird? Aktuelle Annahme: **ja, komplett raus**.
- Zielgruppe wurde nicht spezifiziert — Annahme: **Mittelstand, Industrie, TK-/Energie-Versorger, öffentliche Hand**. Anpassbar.

## Reihenfolge der Umsetzung
1. Hero + Bento + About (sichtbare Landing-Hälfte)
2. Leistungen-, Software-, Methodik-, Team-Seiten
3. Karriere + Stellendaten + Bewerbung
4. Footer, Navbar, FAQ, restliche Landing-Sektionen
5. Meta/SEO (index.html, JSON-LD)
6. Impressum-Ergänzung Unternehmensgegenstand
