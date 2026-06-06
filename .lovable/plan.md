# Team-Seite Anpassungen

Datei: `src/pages/Team.tsx`

## Änderungen

### 1. Nummern (01–04) entfernen
- `number` Feld aus allen Abteilungen entfernen
- `<p className="text-xs font-mono text-primary tracking-wider">{dept.number}</p>` aus dem JSX entfernen

### 2. Michael Schreiber → Projektleiter
- Rolle "Head of Technology" → "Projektleiter"
- Beschreibung leicht anpassen: "Leitet komplexe Kundenprojekte und sorgt dafür, dass Anforderungen, Zeitpläne und Qualität zuverlässig zusammenkommen."

### 3. Zwei neue Abteilungen + 5 neue Mitarbeiter

**Neue Abteilung: Qualitätssicherung & Testing** (passend zum Kerngeschäft)
- **Daniel Krüger** — Lead Quality Assurance
  Verantwortet Teststrategien für Kundenprojekte und stellt einheitliche Qualitätsstandards über alle Tester-Teams hinweg sicher.
- **Lena Bachmann** — Testkoordinatorin
  Plant Testzyklen, verteilt Aufgaben an unsere Tester-Community und wertet Ergebnisse strukturiert aus.

**Neue Abteilung: Kunden & Beratung**
- **Tobias Reinhardt** — Senior Consultant
  Berät Kunden bei der Optimierung digitaler Prozesse und übersetzt Geschäftsanforderungen in messbare Testkonzepte.
- **Carolin Maier** — Key Account Managerin
  Erste Ansprechpartnerin für unsere Großkunden — von der ersten Anfrage bis zur langfristigen Partnerschaft.

**Ergänzung in bestehender Abteilung "Technologie":**
- **Stefan Lindner** — Softwareentwickler
  Entwickelt interne Tools und Schnittstellen, mit denen unsere Tester effizient und nachvollziehbar arbeiten können.

## Resultierende Struktur
1. Geschäftsführung — Manfred Beutel
2. Betrieb & Finanzen — Sabine Vogt, Andrea Wenzel
3. People & Community — Jonas Beckmann, Katrin Hofmann
4. Technologie — Michael Schreiber (Projektleiter), Stefan Lindner *(neu)*
5. Qualitätssicherung & Testing *(neu)* — Daniel Krüger, Lena Bachmann
6. Kunden & Beratung *(neu)* — Tobias Reinhardt, Carolin Maier

Gesamt: 10 Personen in 6 Abteilungen. Keine Nummern mehr.

## Technische Details
- Nur `src/pages/Team.tsx` wird angepasst (Daten-Array + JSX).
- Grid `md:grid-cols-[220px_1fr]` bleibt; linke Spalte zeigt nur noch Titel + Intro.
- Bestehende Scroll-Animation und Trennlinien zwischen Abteilungen bleiben unverändert.
