## Ziel
Die linke Hälfte der Hero-Section bleibt beim Scrollen sichtbar, bis der Nutzer die nächste Sektion erreicht. Die rechte Hälfte scrollt normal weiter. Kein Redesign der Inhalte, nur das Verhalten und das Layout der Hero-Section werden korrigiert.

## Umsetzungsplan
1. **Sticky-Verhalten der linken Hero-Spalte sauber aufsetzen**
   - Die linke Textspalte bekommt einen echten Sticky-Wrapper auf Desktop.
   - Der Sticky-Offset wird an die tatsächliche Header-Höhe angepasst, damit der Text beim Scrollen sauber unter dem Header stehen bleibt.
   - Auf Mobile bleibt die Section normal gestapelt, damit nichts unruhig oder gequetscht wirkt.

2. **Hero-Layout so umbauen, dass Sticky sichtbar funktioniert**
   - Die Grid-Struktur wird so ausgerichtet, dass die linke Spalte oben startet und nicht vertikal zentriert ist.
   - Falls nötig entferne ich störende Overflow-/Container-Eigenschaften, die `position: sticky` blockieren oder optisch abschneiden.
   - Die rechte Spalte bleibt die scrollende Seite und liefert genug Höhe, damit der Sticky-Effekt bis zum nächsten Abschnitt sichtbar ist.

3. **Feinschliff für sauberen Übergang zur nächsten Sektion**
   - Abstände unten in der Hero-Section werden so abgestimmt, dass die linke Spalte exakt dann „loslässt“, wenn die nächste Sektion beginnt.
   - Ich lasse die linke Seite transparent auf dem Hero-Hintergrund stehen, ohne zusätzliche Card-Hülle.
   - Bestehende Inhalte, Typografie, Farben und CTAs bleiben erhalten.

## Technische Details
- Datei: `src/components/landing-v2/HeroBento.tsx`
- Wahrscheinliche Anpassungen:
  - Sticky auf einen dedizierten linken Inner-Wrapper legen
  - `items-start` statt zentrierter Grid-Ausrichtung
  - problematische `overflow-hidden`-Stellen prüfen/entfernen, wo sie Sticky behindern
  - `top-*` Offset für Desktop feinjustieren
  - rechte Spalte in ihrer natürlichen Höhe scrollen lassen

## Ergebnis
Die Hero wirkt ruhiger: links bleibt die Kernbotschaft stehen, rechts läuft der Content vorbei, und beim Erreichen der nächsten Sektion endet der Sticky-Effekt sauber.