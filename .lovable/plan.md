## Plan: Neuer Hero (Software & Web) auf Landingpage

### Ziel
Bisherigen `HeroBento` (Engineering/Anlagenplanung-Bento) komplett ersetzen durch einen neuen Split-Screen-Hero, der **for.tel Solutions als Software- & Webentwicklungs-Firma** positioniert. Basis: vom Nutzer gewählte Direction v1 (Dashboard + Trust-Stack).

### Inhalte (komplett neuer Text)
- **Eyebrow:** „Software & Web aus Filderstadt · seit 2006" (mit violettem Dot)
- **Headline:** „Maßgeschneiderte Software. *Exzellente Webentwicklung.*" (zweiter Teil violett)
- **Subline:** „Wir begleiten mittelständische Unternehmen bei der digitalen Transformation. Von performanten Web-Applikationen bis hin zu komplexen Software-Architekturen — verlässlich, individuell und technologisch auf höchstem Niveau."
- **CTAs:** „Projekt starten" (primary, → /kontakt) und „Referenzen ansehen" (outline, → /leistungen)
- **Trust-Stack-Bar:** Label „Trusted Tech Stack" + React · Node.js · TypeScript · Python · PostgreSQL

### Visual rechts (Browser-Mockup einer Web-App)
Browser-Chrome mit URL `app.for-tel.de/dashboard`, darin:
- 3 KPI-Tiles (12.847 / 98,4% / € 42k) mit violetten Akzentbalken
- Bar-Chart-Block (10 Säulen, eine in voller Primärfarbe als Highlight)
- 2 schwebende Status-Chips: „System Status · 100% Verfügbar" (unten links) + „deploy · prod" mit pulsierendem Dot (oben rechts)

### Technische Umsetzung
1. **Neue Datei** `src/components/landing-v2/HeroSplit.tsx`
   - Nutzt ausschließlich semantische Tokens (`bg-background`, `text-foreground`, `bg-primary`, `border-border`, `text-muted-foreground`) — keine Hex-Werte direkt
   - Radius durchgehend `rounded-md` (= 0.375rem), Schatten max `shadow-sm`
   - Animations-Klassen `hero-animate hero-animate-1..4` aus bestehendem `useScrollAnimation`-System
   - Top-Padding `pt-28 sm:pt-32` für persistenten absoluten Header
   - Lucide-Icons (`ArrowRight`, `CheckCircle2`), keine neuen Dependencies
2. **`src/pages/Index.tsx`:** Import von `HeroBento` → `HeroSplit` tauschen, `<HeroBento />` → `<HeroSplit />`
3. **Alte Datei** `src/components/landing-v2/HeroBento.tsx` bleibt im Repo (nicht mehr referenziert) — falls gewünscht, kann sie in einem späteren Step gelöscht werden.

### Nicht betroffen
TrustLogos, BentoFeatures, ProcessFlow, Footer und alle anderen Sektionen bleiben unverändert. Nur der Hero wird ausgetauscht.

### Aufwand
1 neue Datei, 2 Zeilen-Edits in `Index.tsx`. Keine neuen Packages, keine Schema-Änderungen.
