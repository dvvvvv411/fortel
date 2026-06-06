Aendere in der Kennzahlen-Sektion (`ImpactGrid.tsx`) den dritten Wert von 47% Termintreue auf 85% Kosteneinsparung.

Technische Details:
- Datei: `src/components/landing-v2/ImpactGrid.tsx`
- Zähler: `useCounterAnimation(85, 1600, isVisible)` statt 47
- Label: "Kosteneinsparung" statt "Ø Termintreue"
- Sub: "durch Prozessoptimierung" statt "gemessen, nicht geschätzt"
- Icon: `TrendingUp` (bereits importiert) statt `TrendingDown`