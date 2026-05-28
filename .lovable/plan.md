## Ziel
Die rechte obere Card im HeroBento ersetzen: weg vom "projekt-status.app"-Mockup, hin zur gewählten **Expertise-Quadrant**-Richtung.

## Änderungen (nur `HeroBento.tsx`, rechte Spalte oben)

**Neue Card: "Expertise-Quadrant"**
- Große weiße Card mit `rounded-[2.5rem]`, Schatten, Border
- Subtile violette Blur-Glow im Hintergrund (wie gewählter Prototyp)
- Header:
  - Eyebrow: gestrichelte Linie + "Expertise & Wertschöpfung" in klein, violett, uppercase
  - Headline: "Ganzheitliche Engineering-Lösungen aus Filderstadt." in semibold
  - Subline: "Seit 2006 begleiten wir komplexe Infrastrukturprojekte mit inhabergeführter Präzision und tiefem technischen Verständnis."
- 2x2 Grid der 4 Leistungssäulen (wie gewählt):
  1. **Anlagenplanung** — Cable-Icon, Unterzeile "Elektro & Fernmelden"
  2. **Personalberatung** — Users-Icon, Unterzeile "Experten-Recruiting"
  3. **Management** — CalendarDays-Icon, Unterzeile "Projektsteuerung"
  4. **Beratung** — Lightbulb-Icon, Unterzeile "Strategie & Technik"
  - Jede Zelle: bg-muted/50, rounded-2xl, Icon in violettem Tile, Hover-Effekt (weißer Hintergrund + leichter Schatten)
- Footer:
  - Links: 3 Avatar-Ringe (violett/indigo/emerald) mit Initialen, letzter Ring als "+18" Zähler
  - Rechts: Text-Stack "Verlässlichkeit" + "Inhabergeführt seit 2006"

**Design-Token-Disziplin**
- Alle Farben über semantische Tokens: `bg-background`, `text-foreground`, `bg-primary`, `text-muted-foreground`, `border-border`, `bg-muted` etc.
- Keine Hex-Codes im Component.
- `hero-animate hero-animate-2` Klasse bleibt für Stagger erhalten.

## Was unverändert bleibt
- Linker Hauptcontent (Headline, Subline, CTAs, Stats)
- Untere beiden Kacheln (Branchen + Verlässlich.)
- Gesamtes Layout (col-span-7 / col-span-5 Grid)
- Section-Padding, ambient-glow

## Technisches
- Datei: `src/components/landing-v2/HeroBento.tsx` (nur der rechte obere Teil wird ersetzt)
- Neue Icons aus `lucide-react`: `Cable`, `Users`, `CalendarDays`, `Lightbulb`
- Keine neuen Dependencies