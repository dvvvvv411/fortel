# Neues Header-/Navbar-Design + Stockfotos auf der Landingpage

## 1. Navbar — komplett neuer Look

Weg von der zentrierten Pille, hin zu einer **klaren, breiten Top-Bar mit "Split Layout"**:

- **Logo links** (freistehend, ohne Pille)
- **Mitte:** dünne horizontale Linie / Trenner, Navigation als minimale Text-Links mit Hover-Underline statt Pille
- **Rechts:** Telefon-Nummer als sekundärer Hinweis + primärer "Projekt starten"-Button (rechteckig, mit Pfeil-Icon)
- **Scroll-Verhalten:** Bei Scroll schrumpft die Bar (Padding ↓) und bekommt ein dezentes `backdrop-blur` mit feiner Bottom-Border — statt einer Pille
- **Top-Announcement-Bar** (1 dünne Zeile ganz oben, dunkel): "Neue Slots für Q1 2026 verfügbar →" — gibt sofort Tech/Premium-Vibe
- **Mobile:** weiterhin Hamburger + Sidebar, aber Sidebar bekommt jetzt eine kleine Kontakt-Sektion (Telefon, E-Mail, Adresse) unten

## 2. Stockfotos in der Landingpage

Bilder werden mit `imagegen` generiert (Stockfoto-Stil, passend zur Electric-Violet-Brand) und in `src/assets/landing/` abgelegt. Keine externen Stock-URLs (Datenschutz/Lizenz-sauber).

**Geplante Bildplatzierungen:**

### a) Hero — neuer "Visual Beweis"-Streifen
Direkt unter den CTAs ein **breites Hero-Bild** (16:9, leicht abgerundet, mit dezentem Glow-Border):
- Motiv: modernes Team in einem hellen, minimalistischen Office in Stuttgart — Laptops, Whiteboards, violette Akzente in der Lichtstimmung
- Ersetzt den weißen Raum zwischen Hero-Text und Marquee

### b) Features (`BentoFeatures.tsx`) — Bild-Karte als Akzent
Statt 6 reine Text-Karten: **eine 7. Karte** (oder die größte) ist eine **Bild-Karte** mit kurzer Bildunterschrift:
- Motiv: Nahaufnahme Code/Screen mit violetten Highlights — "Made in Filderstadt"
- Bricht den Raster-Rhythmus auf, wirkt premium

### c) Process Flow — Hintergrund-Bild als Atmosphäre
Aktuell rein dunkle Sektion. Neu: **dunkles, leicht abgeblendetes Foto im Hintergrund** (Office-bei-Nacht oder Server-Room mit violettem Light-Leak), darüber die 4 Phasen-Karten mit Glas-Effekt. Macht die dunkle Sektion lebendiger.

### d) Voices/Testimonials — kleine Portrait-Bilder
Pro Testimonial-Karte ein **anonymes, stilisiertes Portrait** oben links (40x40 rund, leicht verschwommen oder als Silhouette, Stockfoto-Stil) — verleiht den Stimmen Gesichter ohne echte Identifikation.

### e) Neue Sektion: "About Snapshot" (zwischen Impact und Voices)
Klassisches **2-Spalten-Layout**: links Text ("Wer wir sind, seit 2006 in Filderstadt"), rechts ein **Bild der Firma/des Standorts** (modernes Bürogebäude oder Team-Atmosphäre). Bringt menschliches Element rein, das aktuell komplett fehlt.

## 3. Technisches

- **Bildgenerierung:** 5 Bilder via `imagegen` (Hero, Feature-Karte, Process-Background, 3× Portraits als ein Strip, About-Foto). Stil: heller, moderner Stockfoto-Look, dezente violette Lichtakzente.
- **Bildschutz:** wie überall — `onContextMenu` & `draggable={false}` (gemäß Memory).
- **Performance:** `loading="lazy"` für alle Bilder außer Hero-Bild (`eager` + `fetchPriority="high"`).
- **Dateien:**
  - Edit: `src/components/landing/Navbar.tsx` (komplett neu)
  - Edit: `src/components/landing-v2/HeroBento.tsx` (Bild ergänzen)
  - Edit: `src/components/landing-v2/BentoFeatures.tsx` (Bild-Karte)
  - Edit: `src/components/landing-v2/ProcessFlow.tsx` (Background-Bild)
  - Edit: `src/components/landing-v2/VoicesSection.tsx` (Portraits)
  - Neu: `src/components/landing-v2/AboutSnapshot.tsx`
  - Edit: `src/pages/Index.tsx` (AboutSnapshot einbinden)
  - Neu: `src/assets/landing/*.jpg`

## Offene Frage zur Bildrichtung

Ich schlage einen **hellen, modernen Tech-Office-Stil** vor (viel Tageslicht, minimalistische Räume, gelegentliche violette Akzente — wie Pinterest/Linear/Vercel-Marketing). Falls du lieber etwas anderes willst (z. B. abstrakter/grafischer, oder klassischer Business-Look mit Anzügen-und-Handshakes, oder eher industriell/maschinenbau-nah passend zu eurer Zielgruppe), gib mir bitte eine Richtung — sonst gehe ich mit "heller Tech-Office".
