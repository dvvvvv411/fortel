## Änderungen

1. **`src/pages/Karriere.tsx`** — Status-Badge-Block (Sofort verfügbar / Bald verfügbar) auf den Stellen-Karten entfernen. `stelle.modell`- und `stelle.stundenlohn`-Pills bleiben.

2. **`src/pages/Bewerbung.tsx`** (Zeile 136) — `<SelectItem value="vollzeit">Vollzeit</SelectItem>` entfernen. Nur Minijob und Teilzeit bleiben wählbar.

Datenmodell (`status`-Feld in `karriereStellen.ts`) bleibt unverändert — wird nur nicht mehr gerendert.