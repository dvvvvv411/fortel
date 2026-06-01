## Änderungen

**1. Tech-Stack-Sektion entfernen**
- `src/components/landing/TrustBar.tsx` wird auf der Landingpage nicht mehr eingebunden. Prüfung: Die Datei ist aktuell auch in `src/pages/Index.tsx` nicht referenziert (Index verwendet bereits ausschließlich `landing-v2`-Komponenten). Sicherheitshalber: globale Suche nach `TrustBar`-Imports — falls keine Einbindung auf der Landingpage existiert, ist bereits nichts zu tun und ich dokumentiere das. Falls doch noch eine Einbindung existiert (z.B. auf Unterseiten), bleibt sie dort unverändert; Auftrag betrifft nur Landingpage.

**2. "Seit 2006"-Texte: Jahreszahlen aktualisieren (2026 − 2006 = 20 Jahre)**
- `src/components/landing-v2/HeroBento.tsx`: Stat "18+" → "20+" (Jahre Erfahrung).
- `src/components/landing-v2/AboutSnapshot.tsx`: "18+ Jahre Erfahrung, 150+ Technik-Projekte begleitet" → "20+ Jahre Erfahrung, 150+ Technik-Projekte begleitet".
- `src/components/landing-v2/ImpactGrid.tsx`: Headline "Belastbare Zahlen aus 18 Jahren Projektpraxis." → "Belastbare Zahlen aus 20 Jahren Projektpraxis." (Counter steht bereits auf 20.)
- Alle "seit 2006"-Strings bleiben unverändert (sind korrekt).

**3. USt-IdNr. aktualisieren**
- `src/pages/Impressum.tsx`: `DE300637047` → `DE350354667`.

Keine Layout-/Stil-Änderungen, keine neuen Komponenten.