# Plan: Karriere-Stellen zurücksetzen

Die Datei `src/data/karriereStellen.ts` wird so überarbeitet, dass die alten 5 Stellenanzeigen wieder erscheinen. Die Struktur (`Stelle`-Interface, Felder, Slug-basiertes Routing) bleibt unverändert — nur die Inhalte des `stellen`-Arrays werden ersetzt.

## Neue Stellen (Reihenfolge wie auf /karriere angezeigt)

1. **Mitarbeiter (m/w/d) für Onlineprozess-Tests**
   - slug: `onlineprozess-tests`
   - Standort: Düsseldorf · Modell: Remote / Minijob / Teilzeit
   - Arbeitszeit: Flexibel (ca. 5–30 Std./Woche) · Stundenlohn: 29 €
   - Status: Sofort verfügbar

2. **Mitarbeiter (m/w/d) für Softwareentwicklung**
   - slug: `softwareentwicklung`
   - Standort: Düsseldorf · Modell: Remote
   - (kein Stundenlohn / keine Arbeitszeit-Angabe)

3. **Mitarbeiter (m/w/d) für UX/UI Design**
   - slug: `ux-ui-design`
   - Standort: Düsseldorf · Modell: Remote

4. **Mitarbeiter (m/w/d) für DevOps & Cloud-Infrastruktur**
   - slug: `devops-cloud-infrastruktur`
   - Standort: Düsseldorf · Modell: Remote

5. **Werkstudent (m/w/d) im Bereich Digitalisierung**
   - slug: `werkstudent-digitalisierung`
   - Standort: Düsseldorf · Modell: Hybrid

Für jede Stelle werden `beschreibung`, `aufgaben`, `voraussetzungen`, `benefits` exakt aus den vom Nutzer gelieferten Texten übernommen. `kurzbeschreibung` wird kompakt aus dem "Über die Position"-Absatz abgeleitet (1–2 Sätze für die Listendarstellung).

## Was sich NICHT ändert

- `src/pages/Karriere.tsx` und `src/pages/KarriereDetail.tsx` bleiben identisch — sie rendern die Daten generisch.
- Die optionalen Felder (`arbeitszeit`, `stundenlohn`, `status`) werden nur dort gesetzt, wo angegeben; die Detailseiten-Sidebar blendet fehlende Felder bereits korrekt aus.
- Bewerbungsformular-Verlinkung (`/karriere/bewerbung?stelle=…`) funktioniert weiter über `stelle.titel`.

## Hinweise

- Da die Slugs sich ändern, sind alte Detail-Links (z. B. `/karriere/webseiten-app-tester`) nicht mehr gültig und führen via `Navigate` zurück auf `/karriere`. Falls Redirects gewünscht sind, bitte Bescheid geben.
