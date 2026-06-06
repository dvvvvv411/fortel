## Ziel
`index.html` head an das neue Branding anpassen — Positionierung als Plattform für bezahltes Webseiten-, App- und Usability-Testing (remote, Minijob/Teilzeit, 29 €/h), statt der alten Technik-/Anlagenplanungs-Beschreibung.

## Änderungen in `index.html`

**Title** (≤ 60 Zeichen):
`for.tel Solutions – Bezahlt Webseiten & Apps testen`

**Meta description** (≤ 160 Zeichen):
`Werde Webseiten- & App-Tester:in bei for.tel Solutions. Remote, flexible Zeiten, 29 €/h. Minijob oder Teilzeit – ohne Vorkenntnisse starten.`

**Open Graph**:
- `og:title` = identisch zu `<title>`
- `og:description` = identisch zu meta description
- `og:type` = `website`, `og:url` = `/` (relativ, bleibt)
- Kein `og:image` (kein passendes Asset vorhanden; Platzhalter wäre schlechter als gar nichts)

**Twitter Card**: bleibt `summary_large_image`.

**JSON-LD** — aktuell `ProfessionalService` mit Anlagenplanungs-Text. Ersetzen durch `Organization` mit aktualisierter Beschreibung:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "for.tel Solutions GmbH",
  "description": "Plattform für bezahltes Webseiten-, App- und Usability-Testing. Remote-Tester:innen prüfen digitale Produkte aus echter Nutzersicht.",
  "url": "https://for-tel.de",
  "telephone": "+49 711 96881540",
  "email": "info@for-tel.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hornbergstr. 35",
    "postalCode": "70794",
    "addressLocality": "Filderstadt",
    "addressCountry": "DE"
  },
  "areaServed": "DE",
  "foundingDate": "2006"
}
```

**Sprache, Favicon, Canonical, Author-Meta**: unverändert.

## Per-Route Heads
Nicht im Scope dieses Schritts — wenn gewünscht später per `react-helmet-async` für `/karriere`, `/team`, `/kontakt` etc.

## Akzeptanzkriterien
- Neue Title/Description spiegeln das Tester-Branding wider.
- JSON-LD enthält keine Anlagenplanungs-Begriffe mehr.
- Adresse, Telefon, E-Mail, Gründungsjahr unverändert korrekt.