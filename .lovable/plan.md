## Ziel

Alle Texte, Daten und das Logo auf das neue Branding **for.tel Solutions GmbH** umstellen. Keine Designänderungen, nur Inhalte.

## Neue Stammdaten (Zielwerte)

- **Firma:** for.tel Solutions GmbH
- **Adresse:** Hornbergstr. 35, 70794 Filderstadt, Deutschland
- **Geschäftsführer:** Manfred Beutel
- **Telefon:** +49 711 96881540
- **E-Mail:** info@for-tel.de
- **Website / Domain:** for-tel.de
- **USt-IdNr.:** DE300637047
- **Registergericht:** Amtsgericht Stuttgart, HRB 720843
- **Gegründet:** 2006 (→ 2026 = 20 Jahre Erfahrung)

## Identifizierte Fundstellen (vollständige Liste)

### 1. Impressum — `src/pages/Impressum.tsx`
- Z. 22–24: Firmenname + Adresse (Marc-Chagall-Str. 142, 40477 Düsseldorf)
- Z. 28: Geschäftsführer "Tobias Papst"
- Z. 32–33: Registergericht Düsseldorf, HRB 101174
- Z. 38: USt-ID (alte Nummer)
- Z. 45–46: E-Mail info@efficient-flow.com
- Z. 50: Telefon +4921187971940
- Z. 55–56: Webseite efficient-flow.solutions

### 2. Datenschutz — `src/pages/Datenschutz.tsx`
- Z. 21–30: Firmenname, Adresse, E-Mail, Telefon (alle alt)

### 3. Kontaktseite — `src/pages/Kontakt.tsx`
- Z. 15–16: info@efficient-flow.com
- Z. 22: tel:+4921187971940
- Z. 27: Adresse Marc-Chagall-Str. 142, 40477 Düsseldorf

### 4. Footer — `src/components/landing/Footer.tsx`
- Z. 13: Logo-Alt "Efficient Flow"
- Z. 63–65: info@efficient-flow.com
- Z. 69: Telefon +4921187971940
- Z. 76: Adresse Marc-Chagall-Str. 142, 40477 Düsseldorf
- Z. 87: Copyright "Efficient Flow Solutions GmbH"

### 5. Navbar — `src/components/landing/Navbar.tsx`
- Z. 43, 98, 122: Logo-Alt-Text "Efficient Flow" (3×)

### 6. Hero / Landing — `src/components/landing/HeroSection.tsx`
- Z. 206: Fake-Browser-URL `app.efficientflow.solutions/...` → `app.for-tel.de/...`

### 7. Testimonials — `src/components/landing/Testimonials.tsx`
- Z. 6: Zitat erwähnt "Efficient Flow"

### 8. FAQ — `src/components/landing/FAQ.tsx`
- Z. 11: Frage "Für welche Unternehmen ist Efficient Flow geeignet?"

### 9. Stats (Jahre Erfahrung) — `src/components/landing/Stats.tsx`
- Z. 7: `{ value: 5, suffix: '+', label: 'Jahre Erfahrung' }` → **20+** (seit 2006)

### 10. Team-Seite — `src/pages/Team.tsx`
- Z. 71: "…auf ihrem Weg zu Efficient Flow."
- Z. 100: Subtitle "Die Menschen hinter Efficient Flow…"
- (Z. 23 "über 20 Jahren Erfahrung" ist persönlich — bleibt unverändert)

### 11. Karriere — `src/pages/Karriere.tsx`
- Z. 24: `highlight="Efficient Flow"`

### 12. Stellenanzeigen — `src/data/karriereStellen.ts`
- Z. 19, 50, 79, 108, 137: `standort: 'Düsseldorf'` (5×) → **Filderstadt**
- Z. 160: "Modernes Büro in Düsseldorf oder Remote-Arbeit" → Filderstadt

### 13. Seitentitel (document.title) — mehrere Dateien
- `src/pages/Index.tsx` Z. 16
- `src/pages/Methodik.tsx` Z. 85
- `src/pages/Leistungen.tsx` Z. 89
- (sowie ggf. weitere Pages mit "| Efficient Flow")

### 14. index.html
- Z. 6: `<title>` "Efficient Flow – …"
- Z. 8: `<meta name="author" content="Efficient Flow Solutions GmbH">`
- Z. 14: `<meta property="og:title">`
- weitere OG/Twitter/Description-Tags prüfen und anpassen

### 15. SEO-Dateien
- `public/sitemap.xml`: 9× URL `https://efficient-flow.solutions/...` → `https://for-tel.de/...`
- `public/robots.txt` Z. 16: Sitemap-URL
- `vite.config.ts` Z. 11: `allowedHosts: ["efficient-flow.solutions", ...]` → `for-tel.de`, `www.for-tel.de`

### 16. Logo-Assets
- `src/assets/logo.png` (eingebunden in Navbar + Footer) → **muss durch neues for.tel-Logo ersetzt werden**
- `public/images/logomail.png` (laut `.lovable/plan.md` vorhanden, ungenutzt)

## Vorgehen bei der Umsetzung

1. Zentrale Daten in allen oben gelisteten Dateien austauschen (Suchen-und-Ersetzen + gezielte Edits).
2. Alle `document.title`-Strings und Meta-Tags konsistent auf "for.tel Solutions" umstellen.
3. Sitemap, robots.txt und Vite-allowedHosts auf `for-tel.de` setzen.
4. Stats-Wert auf **20+ Jahre Erfahrung** anheben (Gründung 2006).
5. Logo-Datei `src/assets/logo.png` durch neues Logo ersetzen — **dafür brauche ich von dir das neue Logo als Upload** (PNG/SVG mit transparentem Hintergrund bevorzugt). Bis das Logo da ist, bleibt das alte Bild physisch liegen; alle Alt-Texte werden aber bereits auf "for.tel Solutions" gesetzt.

## Offene Punkte / Annahmen

- **Logo-Datei wird noch benötigt** — bitte als Upload bereitstellen, sonst tausche ich nur die Alt-Texte und Referenzen.
- Telefonnummer wird formatiert als `+49 711 96881540` (Anzeige) und `tel:+49711966881540` … korrigiert: `tel:+4971196881540` (technisch).
- "Jahre Erfahrung" wird auf `20+` gesetzt (2026 − 2006). Falls du lieber einen anderen Wert willst, bitte sagen.
- Die persönliche Aussage "über 20 Jahren Erfahrung" im Team-Profil bleibt unangetastet, da sie sich auf eine Person bezieht.
