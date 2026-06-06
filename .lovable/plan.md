## Plan: Favicon austauschen

### Schritte
1. Altes `public/favicon.png` löschen.
2. Hochgeladenes `faviconfortel.png` (violetter Kreis) in mehreren Größen als Favicon einbinden:
   - `public/favicon.png` (512×512 Master)
   - `public/favicon-32.png`, `public/favicon-16.png`
   - `public/apple-touch-icon.png` (180×180)
   - `public/favicon.ico` (für Google/Legacy-Crawler – Google bevorzugt `/favicon.ico`)
3. `index.html` aktualisieren mit korrekten `<link rel="icon">` Einträgen inkl. `.ico`, PNG-Größen und `apple-touch-icon`.
4. Cache-Buster (`?v=2`) an die Favicon-URLs hängen, damit Browser den Wechsel sofort sehen.

### Hinweis SEO/Google
Google indexiert Favicons über mehrere Quellen — `/favicon.ico` an der Root + `<link rel="icon">` im `<head>` mit absoluter, erreichbarer URL. Mindestgröße: 48×48 (Google-Anforderung). Wir liefern 512×512 als PNG-Master, das deckt alle Anforderungen.

### Dateien
- löschen: `public/favicon.png` (alt)
- neu: `public/favicon.ico`, `public/favicon.png`, `public/favicon-32.png`, `public/favicon-16.png`, `public/apple-touch-icon.png`
- editieren: `index.html`