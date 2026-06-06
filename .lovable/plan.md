## Ziel
`/karriere` zeigt drei neue Tester-Stellen statt der bisherigen 5 Technik-Stellen. Detailseiten (`/karriere/:slug`) werden entsprechend mit Aufgaben/Voraussetzungen/Benefits passend zu Tester-Rollen befüllt.

## Neue Stellen (alle: Remote · Minijob / Teilzeit · 29 €/h)

| Slug | Titel | Status |
|---|---|---|
| `webseiten-app-tester` | Webseiten- & App-Tester:in (m/w/d) | Sofort verfügbar |
| `usability-ux-tester` | Usability- & UX-Tester:in (m/w/d) | Bald verfügbar |
| `app-funktionstester` | App-Funktionstester:in (m/w/d) | Sofort verfügbar |

## Änderungen

### 1. `src/data/karriereStellen.ts`
- Neues optionales Feld `status?: 'Sofort verfügbar' | 'Bald verfügbar'` im `Stelle`-Interface.
- `stellen`-Array komplett ersetzen: nur die 3 neuen Tester-Stellen.
- Alle drei: `standort: 'Remote'`, `modell: 'Minijob / Teilzeit'`, `stundenlohn: '29 €'`, `arbeitszeit: 'Flexibel'`.
- `kurzbeschreibung`, `beschreibung`, `aufgaben` (4–5 Punkte), `voraussetzungen` (4–5 Punkte) und `benefits` (4–5 Punkte) pro Stelle passend zur jeweiligen Tester-Rolle (Webseiten/App-Test, Usability/UX, App-Funktionstest).

### 2. `src/pages/Karriere.tsx`
- Statusbadge auf jeder Karte rendern (neben oder unter `modell`-Pill).
- "Sofort verfügbar" → grünlich (`bg-emerald-50 text-emerald-700 border-emerald-200` oder Token-basiert).
- "Bald verfügbar" → neutral/amber (`bg-amber-50 text-amber-700 border-amber-200`).
- Keine weiteren Layoutänderungen.

### 3. Hinweis Routen
Alte Slugs (`senior-projektleiter`, `planer-fernmeldetechnik` etc.) fallen weg — bestehende Detailseiten dazu zeigen den 404-/NotFound-Fallback. Kein Redirect nötig (laut Brief vollständig ersetzen).

## Akzeptanzkriterien
- `/karriere` listet exakt 3 Stellen mit Titel, "Remote", "Minijob / Teilzeit", 29 €/h, Status-Badge und Kurzbeschreibung.
- `/karriere/webseiten-app-tester`, `/karriere/usability-ux-tester`, `/karriere/app-funktionstester` rendern korrekte Detailinhalte (Aufgaben/Voraussetzungen/Benefits zu Tester-Rolle).
- Keine Referenzen mehr auf alte Slugs in Komponenten.