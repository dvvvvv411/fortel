# Landingpage entschlacken

Die aktuelle Seite wirkt überladen: Hero hat 8 Bento-Kacheln gleichzeitig (Headline, Counter, Ticker, Terminal, CPU-Box, Jahre-Kachel, Marquee, Status-Bar), danach folgen direkt nochmal 6 Feature-Kacheln, dann KPI-Grid mit nochmal denselben Zahlen. Viele Sektionen kämpfen um Aufmerksamkeit. Tech-Vibe bleibt — aber ruhiger, fokussierter, mit klarer Lesereihenfolge.

## Leitprinzipien
- **Eine Hauptbotschaft pro Sektion** — Hero macht Hero, KPIs machen KPIs.
- **Weniger ist mehr** — pro Sektion max. 1 starkes visuelles Element statt 5 kleine.
- **Mehr Whitespace** — größere Abstände, weniger Cards nebeneinander.
- **Wiederholungen raus** — Counter (Projekte/Jahre/Effizienz) nur EINMAL auf der Seite, nicht 2× wie aktuell.

## Konkrete Änderungen

### 1. Hero (`HeroBento.tsx`) — radikal reduzieren
Statt 8 Kacheln nur noch:
- **Großes Statement** (Headline + Subline + 2 CTAs) — zentriert oder links, viel Luft
- **Ein** dezentes visuelles Element rechts (z. B. das Code-Terminal ODER ein animierter Mesh-Gradient-Blob, nicht beides)
- Status-Bar oben dezent behalten (1 Zeile)
- Marquee-Ticker entfernen (oder ans Seitenende verschieben als Trust-Bar)
- Live-Telemetrie, CPU-Box, Counter-Kacheln → raus aus Hero

### 2. Features (`BentoFeatures.tsx`) — Grid beruhigen
- 6 Disziplinen bleiben, aber als **gleichmäßiges 3×2-Grid** statt asymmetrischem Bento
- Visualisierungen pro Card reduzieren (kein Bar-Chart + Netzwerk + Heatmap + Sparkline gleichzeitig) — pro Card 1 schlichtes Icon-Detail
- Mehr Padding, größere Typo, weniger Mono-Tags

### 3. Process Flow (`ProcessFlow.tsx`) — Terminal-Stil entschärfen
- Behält dunkle Sektion, aber CLI-Optik reduzieren
- 3–4 Schritte horizontal/vertikal mit klarer Nummerierung statt Terminal-Output

### 4. Impact Grid (`ImpactGrid.tsx`) — entweder hier ODER im Hero
- Da Hero entschlackt wird, bleiben die KPIs hier — als ruhige 4er-Zeile
- Keine doppelte Zählung mehr

### 5. Voices (`VoicesSection.tsx`) — minimal kürzen
- 3 Testimonials bleiben, aber ohne Mono-Klammern und mit ruhigerer Card-Optik

### 6. FAQ + FinalCTA
- FAQ-Terminal-Optik leicht entschärfen (weniger Mono, mehr Lesbarkeit)
- FinalCTA bleibt im Wesentlichen

## Reihenfolge danach
1. Hero (ruhig, fokussiert)
2. Trust-Marquee (1 dünne Zeile)
3. Features (3×2 Grid)
4. Process (4 Schritte)
5. Impact (4 KPIs)
6. Voices (3 Stimmen)
7. FAQ
8. Final CTA
9. Footer

## Technisches
- Keine neuen Dependencies, keine Logik-Änderungen.
- Nur Edits in `src/components/landing-v2/*` und ggf. minimale CSS-Aufräumarbeiten.
- Animationen bleiben (IntersectionObserver), nur weniger gleichzeitig.
