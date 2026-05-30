## Ziel

`TrustLogos.tsx` mit glaubwürdigen, regionalen Referenzen füllen — **ohne echte Firmennamen zu erfinden oder fremde Marken unautorisiert als Kunden auszugeben**. Stattdessen: konkrete Branchen- und Regionalbezeichnungen, wie sie für Mittelstand & Versorger im Großraum Stuttgart / Filderebene typisch sind (Profil aus Creditreform-Branchenstruktur abgeleitet).

## Warum keine echten Logos

Echte Logos (Bosch, Daimler Truck, Stadtwerke Stuttgart, Flughafen Stuttgart, Netze BW …) ohne schriftliche Kundenfreigabe einzubauen wäre rechtlich (Markenrecht, UWG §5 — Irreführung) heikel und für ein inhabergeführtes Beratungshaus rufschädigend. Daher: anonymisierte, aber regional und sektoral **glaubwürdige** Karten.

## Änderungen in `src/components/landing-v2/TrustLogos.tsx`

1. **Daten-Array ersetzen** — 8 Einträge, jeweils `{ name, sector, region }`, ausgerichtet an typischen Creditreform-Branchen für den Großraum Stuttgart:

   ```text
   • Automobilzulieferer · Region Stuttgart
   • TK-Netzbetreiber    · Süddeutschland
   • Stadtwerk           · Filderebene
   • Maschinenbau (Mittelstand) · Neckar-Alb
   • Energieversorger    · Baden-Württemberg
   • Klinikverbund       · Region Stuttgart
   • Öffentliche Hand    · Landkreis Esslingen
   • Logistik / Intralogistik · Großraum Stuttgart
   ```

2. **Headline & Sub** schärfen:
   - Überschrift: *„Vertrauen aus Mittelstand, Versorgern & öffentlicher Hand der Region Stuttgart."*
   - Disclaimer-Text unten: *„Referenzen anonymisiert nach Branche und Region — konkrete Kundennamen auf Anfrage und nach schriftlicher Freigabe."*

3. **Karten-Optik** statt reiner Text-Liste:
   - Pro Eintrag eine kleine Karte mit Border, dezentem Hover, **Branchen-Icon** aus `lucide-react` (z. B. `Factory`, `Radio`, `Zap`, `Cog`, `Plug`, `HeartPulse`, `Landmark`, `Truck`), Branchenname (fett) + Region (klein, muted).
   - Grid bleibt `grid-cols-2 sm:grid-cols-4` (8 Karten = 2 Reihen auf Desktop).
   - Violett-Akzent über Icon-Hintergrund (`bg-primary/10`, `text-primary`) im Brand-Stil.

4. **Scroll-Animation** (bestehender `useScrollAnimation`-Hook) beibehalten, Delay-Klassen pro Karte.

5. **Section-Background** bleibt `bg-muted/30` mit `border-y` — keine Layout-Änderung in `Index.tsx` nötig.

## Nicht enthalten

- Keine echten Logo-SVGs.
- Keine neuen Dependencies.
- Keine Änderung an anderen Sektionen.

## Hinweis

Sobald du echte freigegebene Kundenlogos lieferst (SVG/PNG + Erlaubnis), tausche ich die Branchenkarten 1:1 gegen eine Logo-Wall aus.